// import React from 'react';

// import {
//     Box,
//     Input,
//     Button,
//     Label,
//   } from 'theme-ui';

// import addToMailchimp from 'gatsby-source-mailchimp';

// export default class MailChimpForm extends React.Component {
//     state = {
//         fname: "",
//         lname: "",
//         email: "",
//         isSubmitted: false
//       }

//     handleChange = (event) => {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         this.setState({
//             [name]: value,
//         });
//     };


//     handleSubmit = async e => {
//         e.preventDefault()
//         alert(`Thank you for registering your interest!`)
//         this.setState({
//           fname: "",
//           lname: "",
//           email: "",
//           isSubmitted: true
//         })
//        addToMailchimp(this.state.email, {
//         PATHNAME: 'docuseries',
//         FNAME: this.state.fname,
//         LNAME: this.state.lname,
//         })
        
//       };

//     render() {
//         return (
//             <Box as="form" id="mailchimp" sx={styles.banner.form} onSubmit={this.handleSubmit}>
//                   <Label htmlFor="fname">First Name</Label>
//                   <Input required type="text" name="fname" id="fname" value={this.state.fname} onChange={this.handleChange} mb={3} />
                  
//                   <Label htmlFor="lname">Last Name</Label>
//                   <Input required type="text" name="lname" id="lname" value={this.state.lname} onChange={this.handleChange} mb={3} />
                  
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input required type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} mb={3} />
                  
//                   <Button type="submit">Submit</Button>
//               </Box>
//         );
//     }
// }

// const styles = {
//     banner: {
//         form: {
//             position: 'relative',
//             width: '100%',
//             maxWidth: ['200px', null, null, '345px'],
//             boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
//             marginTop: ['20px', '40px'],
//             marginLeft: ['0px', '20px'],
//             height: ['100%', null, null, '100%', null, null, '100%'],
//             marginBottom: ['40px', '30px', null, null, '40px'],
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '10px',
      
//             input: {
//               backgroundColor: '#000',
//               top: 0,
//               left: 0,
//               paddingLeft: '25px',
//               '-webkit-transition': 'width .35s ease-in-out',
//               transition: 'width .35s ease-in-out',
      
//               width: '100%',
//               height: '100%',
//               color: '#fff',
//               boxShadow: 'none !important',
//               outline: 'none !important',
//               borderRadius: '8px',
//               fontSize: ['15px', '16px'],
      
//               '&:focus':{
                
//               },
//             },
      
//             link: {
//               textAlign: 'center',
//               position: 'absolute',
//               top: '50%',
//               right: '25px',
//               transform: 'translateY(-50%)',
//               fontSize: ['16px', '20px'], 
//               display: 'flex',
//               alignItems: 'center',
      
//               button: {
//                 paddingLeft: '25px',
//                 paddingRight: '25px',
//                 color: '#000',
//                 backgroundColor: '#fff',
//                 borderRadius: '10px',
//                 '&:hover': {
//                   color: '#000',
//                   backgroundColor: 'grey',
//                   borderRadius: '10px',
//                 },
//               },
//             },
//           },

//     },
// };
