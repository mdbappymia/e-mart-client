import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";

const useAuth: any = () => {
  return useContext(AuthContext);
};

export default useAuth;
