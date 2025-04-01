// import React from "react";
// // import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
// import Signup from "./pages/signup";
// import UserProfile from "./pages/userprofile";
// import PostPage from "./pages/postpage";
// import "./style/login.css"; 
// import "./style/signup.css"; 
// import CommentPage from "./pages/comment";
// import Header from "./pages/header";
// import OwnerPostPage from "./pages/ownerpostpage";
// import Learning from "./pages/learningprograss";
// import LearningPlan from "./pages/learningplan";


// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Login />} />  {/* Default Login Page */}
// //         <Route path="/signup" element={<Signup />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // function App() {
// //   return (
// //     <div className="App">
// //       <LearningPlan />
// //     </div>
// //   );
// // }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Define the PostPage as the homepage */}
//           <Route path="/" element={<PostPage />} />
          
//           {/* Define the Comment page */}
//           <Route path="/comments" element={<CommentPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginButton from "./pages/loginbutton";
import LogoutButton from "./pages/logoutbutton";
import Login from "./pages/login";
import PostPage from "./pages/postpage";
import CommentPage from "./pages/comment";
// import Learning from"./pages/LearningPlan";
// import UserProfile from "./pages/UserProfile";





function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/postpage" element={<PostPage />} />
                <Route path="/logout" element={<LogoutButton />} />
                <Route path="/profile" element={<Login />} />
                <Route path="/comments" element={<CommentPage />} />
            </Routes>
        </Router>
    );
}

export default App;
