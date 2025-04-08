# SRV Portfolio website

This is Silicon Roundabout Ventures' Jamstack webbsite.

Welcome!

If you're a startup founder or executive looking to raise venture capital, head over to our live site and get in touch by submitting an application: [siliconroundabout.venture](https://siliconroundabout.ventures)

We used a JAMstack approach powered by Gasby to build it. Feel free to get inspired for your own site if you want :)

Copyright: Deep Godara (aka @Deepgodara) & Francesco Perticarari (aka @fpert041)


---

AIRTABLE SETUP:
# Fixing the "length" is outside of buffer bounds Error in Gatsby with Yarn

## Most Likely Causes

Based on the error stack trace, this issue is occurring in the LMDB and msgpackr libraries that Gatsby uses for data storage. The most common causes are:

1. **Node.js Version Incompatibility**: This specific buffer error has been reported frequently with newer Node.js versions.

2. **Data Size Issues**: Large or complex data structures from Airtable might be exceeding buffer limitations.

3. **LMDB Storage Configuration**: Gatsby's LMDB storage option might be having issues with your particular dataset.

## Solutions to Try

### 1. Downgrade Node.js Version

The most straightforward solution is to downgrade your Node.js version. This error has been widely reported with newer Node.js versions but appears to work fine with earlier versions:

```
# Using nvm (Node Version Manager)
nvm install 22.4.0
nvm use 22.4.0

# Or install directly from nodejs.org
```

### 2. Install Missing Dependencies with Yarn

Since you're using Yarn, install potentially missing dependencies:

```
yarn add msgpackr lmdb-store
```

### 3. Disable LMDB Storage

You can try disabling the LMDB storage option in your Gatsby configuration:

```javascript
// In gatsby-config.js
process.env.GATSBY_EXPERIMENTAL_LMDB_STORE = false; // or remove this line if present
```

### 4. Clean Cache and Reinstall with Yarn

```
gatsby clean
rm -rf node_modules
yarn install
```

### 5. Check Data Structure

Looking at your portfolio.js code, you might need to limit the data you're fetching:

```javascript
// In your portfolio.js query, try limiting fields
const data = useStaticQuery(graphql`
  query PortfolioQuery {
    allAirtable(
      filter: { queryName: { eq: "Portfolio" } }
      sort: { fields: data___Name }
      // Add a limit if you have many records
      limit: 50
    ) {
      // Only request fields you actually need
      nodes {
        id
        data {
          Name
          Status
          Announced
          Logo {
            localFiles {
              publicURL
            }
          }
          // Other essential fields
        }
      }
    }
  }
`);
```

### 6. Try Alternative Gatsby Commands

Sometimes using different Gatsby commands can help:

```
yarn gatsby clean
yarn gatsby develop --verbose
```

## Conclusion

Based on reports from the developer community, the most reliable fix is downgrading your Node.js version to 22.4.0 or earlier. If you still encounter issues after trying these solutions, you might need to examine your specific Airtable dataset structure or consider breaking up your data into smaller chunks.
