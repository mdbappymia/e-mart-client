import { createContext, FC } from "react";
import useFirebase from "../hooks/useFirebase";

interface IProps {
  children: any;
}
export const AuthContext = createContext({});
const ContextProvider: FC<IProps> = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={{ ...allContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
