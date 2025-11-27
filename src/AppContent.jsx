// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// // Import components
// // import Sidebar from './components/Sidebar';
// // import LogIn from './components/LogIn';
// // import Register from './components/Register';
// // import ForgotPassword from './components/ForgotPassword';

// // Layouts
// import LandingPage from './components/pages/LandingPage';

// // New App Pages
// // import AnimalRegistrationPage from './components/Animals/AnimalRegistrationPage';
// // import AnimalsPage from './components/Animals/AnimalsPage';
// // import OneGroupPage from './components/Groups/OneGroupPage';
// import DashboardPage from './components/pages/DashboardPage';

// const App = () => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(true); // toggle this for testing
//   // const [isCollapsed, setIsCollapsed] = useState(false);

//   // const toggleSidebar = () => setIsCollapsed((prev) => !prev);

//   return (
//     <div className="app flex h-screen">
//       {/* {isLoggedIn && <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />} */}
      
//       <div className="flex-1 bg-[#F9FAFC] overflow-y-auto p-6 transition-all duration-300 ease-in-out">
//         <Routes>
//           {/* Public routes */}
//           {/* <Route path="/login" element={!isLoggedIn ? <LogIn /> : <Navigate to="/" replace />} /> */}
//           {/* <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/" replace />} /> */}
//           {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

//           {/* Landing Page */}
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/dashboard" element={<DashboardPage />} />


//           {/* Animals Pages */}
//           {/* <Route path="/animals/register" element={<AnimalRegistrationPage />} />
//           <Route path="/animals" element={<AnimalsPage />} /> */}

//           {/* One Group Page */}
//           {/* <Route path="/group/:id" element={<OneGroupPage />} /> */}

//           {/* Redirect unknown routes */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import LandingPage from './components/pages/LandingPage';
import DashboardPage from './components/pages/DashboardPage';
import AnimalProfilePage from './components/pages/Animals/AnimalProfilePage';
import OnboardingPage from './components/pages/OnboardingPage';
import AnimalsPage from './components/pages/Animals/AnimalsPage';

const AppContent = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true); // toggle this for testing
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <div className="app flex h-screen">
      {/* {isLoggedIn && <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />} */}
      
      <div className="flex-1 bg-[#F9FAFC] overflow-y-auto p-6 transition-all duration-300 ease-in-out">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />



          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppContent;