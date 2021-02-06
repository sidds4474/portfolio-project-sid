// import React from 'react';
// import BaseLayout from '../../components/layouts/BaseLayout';

// import { withRouter } from 'next/router';
// import axios from 'axios';

// class Project extends React.Component {

//   static async getInitialProps({query}) {
//     let post = {};
//     try {
//       const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
//       post = res.data;
//     } catch(e) {
//       console.error(e);
//     }

//     return { project: post };
//   }

//   render() {
//     const { project } = this.props;
//     return (
//       <BaseLayout>
//         <h1>Project page</h1>
//         {/* <h1>{project.title}</h1>
//         <p>BODY: {project.body}</p>
//         <p>ID: {project.id}</p> */}
//       </BaseLayout>
//     )
//   }
// }


// export default withRouter(Project);