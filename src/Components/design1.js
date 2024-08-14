import React from 'react'

const design = () => {
  return (
    <div>design</div>
  )
}

export default design


// import React from 'react';

// const CourseList = () => {
//   const courses = [
//     { id: 1, title: 'Course 1', description: 'This is course 1' },
//     { id: 2, title: 'Course 2', description: 'This is course 2' },
//     { id: 3, title: 'Course 3', description: 'This is course 3' },
//   ];

//   return (
//     <div>
//       <h1>Courses</h1>
//       <ul>
//         {courses.map((course) => (
//           <li key={course.id}>
//             <h2>{course.title}</h2>
//             <p>{course.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CourseList;



// import React from 'react';

// const CourseDetails = ({ match }) => {
//   const courseId = match.params.id;
//   const course = {
//     id: 1,
//     title: 'Course 1',
//     description: 'This is course 1',
//     lessons: [
//       { id: 1, title: 'Lesson 1' },
//       { id: 2, title: 'Lesson 2' },
//     ],
//   };

//   return (
//     <div>
//       <h1>{course.title}</h1>
//       <p>{course.description}</p>
//       <h2>Lessons</h2>
//       <ul>
//         {course.lessons.map((lesson) => (
//           <li key={lesson.id}>
//             <h3>{lesson.title}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CourseDetails;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/courses">Courses</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;




// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to our course website!</h1>
//       <p>This is the home page.</p>
//     </div>
//   );
// };

// export default Home;



// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navigation from './Navigation';
// import Home from './Home';
// import CourseList from './CourseList';
// import CourseDetails from './CourseDetails';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navigation />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/courses" exact component={CourseList} />
//         <Route path="/courses/:id" component={CourseDetails} />
//       </Switch>
//     </BrowserRouter>
//   );
// };

// export default App;




// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const CoursePage = () => {
//   return (
//     <Container>
//       <Row>
//         <Col xs={12} md={8} lg={6}>
//           <h1>UX/UI Design Course</h1>
//           <p>Welcome to our UX/UI Design course! This course is designed to teach you the fundamentals of user experience and user interface design.</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={12} md={8} lg={6}>
//           <h2>Modules</h2>
//           <ul>
//             <li>
//               <h3>Module 1: Introduction to UX/UI Design</h3>
//               <p>In this module, we'll cover the basics of UX/UI design, including design principles, user research, and wireframing.</p>
//             </li>
//             <li>
//               <h3>Module 2: User Experience Design</h3>
//               <p>In this module, we'll dive deeper into user experience design, including user flows, prototypes, and usability testing.</p>
//             </li>
//             <li>
//               <h3>Module 3: User Interface Design</h3>
//               <p>In this module, we'll focus on user interface design, including visual design, interaction design, and design systems.</p>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CoursePage;



// import React from 'react';

// const Module1 = () => {
//   return (
//     <div>
//       <h2>Module 1: Introduction to UX/UI Design</h2>
//       <p>In this module, we'll cover the basics of UX/UI design, including design principles, user research, and wireframing.</p>
//       <ul>
//         <li>Lesson 1: Design Principles</li>
//         <li>Lesson 2: User Research</li>
//         <li>Lesson 3: Wireframing</li>
//       </ul>
//     </div>
//   );
// };

// export default Module1;




// import React from 'react';

// const Module2 = () => {
//   return (
//     <div>
//       <h2>Module 2: User Experience Design</h2>
//       <p>In this module, we'll dive deeper into user experience design, including user flows, prototypes, and usability testing.</p>
//       <ul>
//         <li>Lesson 1: User Flows</li>
//         <li>Lesson 2: Prototyping</li>
//         <li>Lesson 3: Usability Testing</li>
//       </ul>
//     </div>
//   );
// };

// export default Module2;




// import React from 'react';

// const Module3 = () => {
//   return (
//     <div>
//       <h2>Module 3: User Interface Design</h2>
//       <p>In this module, we'll focus on user interface design, including visual design, interaction design, and design systems.</p>
//       <ul>
//         <li>Lesson 1: Visual Design</li>
//         <li>Lesson 2: Interaction Design</li>
//         <li>Lesson 3: Design Systems</li>
//       </ul>
//     </div>
//   );
// };

// export default Module3;




// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Module1 from './Module1';
// import Module2 from './Module2';
// import Module3 from './Module3';

// const CoursePage = () => {
//   return (
//     <Container>
//       <Row>
//         <Col xs={12} md={8} lg={6}>
//           <h1>UX/UI Design Course</h1>
//           <p>Welcome to our UX/UI Design course! This course is designed to teach you the fundamentals of user experience and user interface design.</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={12} md={8} lg={6}>
//           <h2>Modules</h2>
//           <ul>
//             <li>
//               <h3>Module 1: Introduction to UX/UI Design</h3>
//               <Module1 />
//             </li>
//             <li>
//               <h3




// Step 1: Set up a new React project

// Open your terminal and run the command npx create-react-app course-website (replace "course-website" with your desired app name)
// This will create a new React project with the basic file structure
// Step 2: Install necessary dependencies

// In the project directory, run the command npm install react-router-dom to install React Router for client-side routing
// Run the command npm install bootstrap to install Bootstrap for styling (optional)

// When the user visits the website

// The user types the website's URL in their browser and presses enter.
// The browser sends a request to the server, and the server responds with the HTML file for the website.
// The HTML file contains a script tag that loads the React app.
// The React app is rendered on the client-side, and the browser displays the app.
// When the user navigates to the home page

// The user clicks on the "Home" link in the navigation menu.
// The React Router's Link component generates a URL that matches the route defined in the App component (<Route path="/" exact component={Home} />).
// The browser's URL changes to http://localhost:3000/ (assuming the app is running on localhost:3000).
// The App component's Switch component checks the current URL against the defined routes.
// Since the URL matches the route for the home page, the Home component is rendered.
// The Home component displays a simple welcome message on the page.
// When the user navigates to the courses page

// The user clicks on the "Courses" link in the navigation menu.
// The React Router's Link component generates a URL that matches the route defined in the App component (<Route path="/courses" exact component={CourseList} />).
// The browser's URL changes to http://localhost:3000/courses.
// The App component's Switch component checks the current URL against the defined routes.
// Since the URL matches the route for the courses page, the CourseList component is rendered.
// The CourseList component displays a list of courses with titles and descriptions.
// When the user navigates to a course details page

// The user clicks on a course link in the courses list.
// The React Router's Link component generates a URL that matches the route defined in the App component (<Route path="/courses/:id" component={CourseDetails} />).
// The browser's URL changes to http://localhost:3000/courses/1 (assuming the course ID is 1).
// The App component's Switch component checks the current URL against the defined routes.
// Since the URL matches the route for the course details page, the CourseDetails component is rendered.
// The CourseDetails component displays the details of the selected course, including its title, description, and lessons.
// How React Router works

// React Router uses the browser's URL to determine which component to render. It uses a concept called "routes" to map URLs to components.

// In this example, we defined three routes:

// /: maps to the Home component
// /courses: maps to the CourseList component
// /courses/:id: maps to the CourseDetails component, where :id is a parameter that represents the course ID
// When the user navigates to a URL, React Router checks the URL against the defined routes. If it finds a match, it renders the corresponding component.

// I hope this helps




// i want to create a course page for my website let say i have a course for ux/ui design i want it to have like 3 modules