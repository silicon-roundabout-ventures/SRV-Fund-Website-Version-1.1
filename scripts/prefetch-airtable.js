// scripts/prefetch-airtable.js
require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
const Airtable = require('airtable');
const fs = require('fs');
const path = require('path');

// Validate environment variables
if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
  console.error('Error: AIRTABLE_API_KEY and AIRTABLE_BASE_ID must be set in your environment variables');
  process.exit(1);
}

// Configure Airtable
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '..', 'src', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Function to safely process record fields to prevent buffer overflow
const processRecord = async (record) => {
  const processedRecord = { id: record.id, fields: {} };
  
  console.log(`Processing record: ${record.id}, fields:`, Object.keys(record.fields));
  
  // Process each field
  for (const [key, value] of Object.entries(record.fields)) {
    // Skip empty values
    if (value === undefined || value === null) {
      continue;
    }
    
    // Skip binary attachments (Logo)
    if (key === 'Logo' && Array.isArray(value) && value.length > 0) {
      // Skip binary attachment data
      console.log(`Skipping binary Logo field for ${record.id}`);
      continue;
    }
    // Handle different field types safely
    else if (typeof value === 'string') {
      // Truncate long strings
      processedRecord.fields[key] = value.length > 3000 
        ? value.substring(0, 3000) + '...(truncated)'
        : value;
    } else if (Array.isArray(value)) {
      // Limit array size and process each item
      processedRecord.fields[key] = value
        .slice(0, 100) // Limit to 100 items
        .map(item => {
          if (typeof item === 'string' && item.length > 1000) {
            return item.substring(0, 1000) + '...(truncated)';
          }
          return item;
        });
    } else if (typeof value === 'object') {
      // Convert object to string representation
      try {
        const stringified = JSON.stringify(value);
        processedRecord.fields[key] = stringified.length > 3000
          ? JSON.stringify({ truncated: true, preview: stringified.substring(0, 100) + '...' })
          : value;
      } catch (e) {
        // If stringify fails, use a safe placeholder
        processedRecord.fields[key] = { error: 'Could not process value' };
      }
    } else {
      // For numbers, booleans, etc.
      processedRecord.fields[key] = value;
    }
  }
  
  // Map specifically required fields for the portfolio
  // Set defaults if not found to ensure our rendering works
  processedRecord.fields.Deal_Name = processedRecord.fields.Deal_Name || processedRecord.fields.Name || 'Unnamed Company';
  processedRecord.fields.Summary = processedRecord.fields.Summary || '';
  processedRecord.fields.domain__from_Company_ = processedRecord.fields.domain__from_Company_ || 
                                                processedRecord.fields.Website || '';
  processedRecord.fields.Status = processedRecord.fields.Status || 'COMPLETED';
  processedRecord.fields.Announced = processedRecord.fields.Announced || 'No';

  // Debug logging
  console.log(`Processed record: ${processedRecord.id}, Name: ${processedRecord.fields.Deal_Name}, Announced: ${processedRecord.fields.Announced}`);
  
  return processedRecord;
};

console.log('Fetching portfolio data from Airtable...');

// Use async/await for cleaner handling
(async () => {
  try {
    const allRecords = [];
    let recordsProcessed = 0;
    
    // Fetch Startups table with Portfolio view
    const records = await new Promise((resolve, reject) => {
      const items = [];
      base('Startups').select({
        view: 'Portfolio',  // Specifically the Portfolio view
        filterByFormula: "{Status}='COMPLETED'", // Only show completed startups
        pageSize: 5, // Smaller batches to avoid memory issues
      }).eachPage(
        function page(records, fetchNextPage) {
          items.push(...records);
          console.log(`Fetched ${records.length} records...`);
          fetchNextPage();
        },
        function done(error) {
          if (error) {
            reject(error);
            return;
          }
          resolve(items);
        }
      );
    });
    
    console.log(`Total records to process: ${records.length}`);
    
    // Process records in batches to avoid memory issues
    const batchSize = 3;
    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      const processedBatch = await Promise.all(batch.map(record => processRecord(record)));
      allRecords.push(...processedBatch);
      recordsProcessed += batch.length;
      console.log(`Processed ${recordsProcessed}/${records.length} records`);
    }
    
    // Save processed records to JSON file
    const outputPath = path.join(dataDir, 'portfolio.json');
    fs.writeFileSync(outputPath, JSON.stringify(allRecords, null, 2));
    
    console.log('✅ Successfully fetched, processed and saved portfolio data!');
  } catch (error) {
    console.error('Error processing Airtable data:', error);
    process.exit(1);
  }
})(); 