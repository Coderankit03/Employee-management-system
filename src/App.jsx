import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
// import TaskList from "./components/TaskList/TaskList";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider.jsx";

function App() {
  const [user, setUser] = useState(null);

  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser); // Parse correctly
  
      setUser(parsedUser.role); // Correctly setting user role
        setLoggedInUserData(parsedUser.data); // Ensure to pass correct employee data
    }
  }, []);
  

  // const handleLogin = (email, password) => {

  //   if (email == "admin@me.com" && password == "123") {

  //     setUser("admin");

  //     localStorage.setItem("loggedInUser",JSON.Stringify({role:'admin'}))

  //   } else if (authData && authData.employees.find((e)=>{e.email==email&&e.password==password})){

  //     setUser("employee");

  //     localStorage.setItem("loggedInUser",JSON.Stringify({role:'employee'}))

  //   } else {

  //     alert("Invalid credentials");

  //   }

  // };

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find((e) => {
        return email == e.email && e.password == password;
      });
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    // <>

    //   {!user ? <Login handleLogin={handleLogin} /> : ""}

    //   {user == 'admin' ? <AdminDashboard/>  : <EmpoyeeDashboard/> }

    // </>

    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
}

export default App;
