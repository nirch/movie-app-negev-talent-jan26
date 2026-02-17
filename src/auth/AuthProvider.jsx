import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../data/supabase";


const AuthContext = createContext(null);

export default function AuthProvider({ onAuthReady, children }) {
  const [activeUser, setActiveUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchActiveUser();

    async function fetchActiveUser() {
      try {
        const { data } = await supabase.auth.getUser();
        setActiveUser(data.user);
      } finally {
        onAuthReady();
      }
    }
  }, [])



  async function handleLogin(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error(error);
      return error;
    }

    console.log(data);
    setActiveUser(data.user);
    navigate("/movies");
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
      throw error;
    }

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
