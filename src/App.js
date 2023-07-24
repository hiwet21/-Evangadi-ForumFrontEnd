import axios from "axios"
import { useContext, useEffect } from 'react';
import { userContext } from './context/userContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Que from "./Pages/AskQuestion/AskQuestion";
import AnswerQuestion from "./Pages/QuestionDetail/QuestionDetail";
function App() {
   const [userData, setUserData] = useContext(userContext)

   const checkLoggedIn = async () => {
     let token = localStorage.getItem("auth-token");
     if (token === null) {
       localStorage.setItem("auth-token", "");
       token = "";
     } else {
       const userRes = await axios.get(`${process.env.REACT_APP-base-url}/api/users`, {
         headers: { "x-auth-token": token },
       });
       console.log(userRes);
       setUserData({
         token,
         user: {
           id: userRes.data.data.user_id,
           display_name: userRes.data.data.user_name,
         },
       });
     }
   };

   const logout = () => {
     setUserData({
       token: undefined,
       user: undefined,
     });
     localStorage.setItem("auth-token", "");
   };
  
  useEffect(() => {
    checkLoggedIn();
  }, [])

  return (
    <>

    
<Router>
        <Header logout={logout} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home logout={logout} />} />
          <Route path="/ask-question" element={<Que />} />
          <Route path="/questions/:id" element={<AnswerQuestion />} />
        </Routes>
        <Footer />
</Router>

    </>
  );
}

export default App;