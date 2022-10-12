import {
  fetchAllCategory,
  fetchAllProducts,
} from "./../redux/slices/productSlice";
import { initializedAuthentication } from "../auth/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setError, setIsLoading, setUser } from "../redux/slices/userSlice";
import { useEffect, useState } from "react";
initializedAuthentication();
const useFirebase = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((data) => {
      dispatch(setUser(data.user));
      console.log(data.user);
    });
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setError(""));
      } else {
        dispatch(setUser({}));
      }
      dispatch(setIsLoading(false));
      return () => unsubscribed;
    });
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategory());
  }, [auth, dispatch]);
  return { googleLogin, setDropdownShow, dropdownShow };
};

export default useFirebase;
