import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("User");

  const getUserRole = async (user) => {
    const response = await fetch(
      `https://us-central1-sheikhhami-d00bd.cloudfunctions.net/readData?collection=Admin`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    if (data.data.find((x) => x.email === user.email)) {
      setRole("Admin");
    } else {
      setRole("User");
    }
  };
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) getUserRole(user);
      else setRole("Anonymous");
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return { user, role };
};

export default useAuth;
