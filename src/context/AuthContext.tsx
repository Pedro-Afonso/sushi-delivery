import { Auth, onAuthStateChanged, User } from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";

interface AuthContext {
  user: User | null;
}

interface IAppAuthProviderProps {
  children: React.ReactNode;
  auth: Auth;
}

const AuthContext = createContext({} as AuthContext);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AppAuthProvider: React.FC<IAppAuthProviderProps> = ({
  children,
  auth,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
