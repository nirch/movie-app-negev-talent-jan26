import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";


const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState(localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser])


  function handleLogin(email, password) {
    setTimeout(() => {
      setActiveUser({ id: 1111, username: "john", role: "admin" });
      navigate("/movies");
    }, 1000);
  }

  function handleLogout() {
    setActiveUser(null);
    navigate("/");
  }

  return (
    <AuthContext value={{ activeUser, onLogin: handleLogin, onLogout: handleLogout }}>
      {children}
    </AuthContext >
  )
}

export function useAuth() {
  return useContext(AuthContext);
}


// // ProtectedRoute.jsx

// //Instead of
// const { activeUser } = useContext(AuthContext);

// // Look like this
// const { activeUser } = useAuth();
