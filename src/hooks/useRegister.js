import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";

import { login } from "../app/userSlice";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [isPending, setIspending] = useState(false);

  const register = async (email, password, displayName, photoURL) => {
    setIspending(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      const user = userCredential.user;
      setIspending(false);
      dispatch(login(user));
      setIspending(false);
      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      toast.error(error.message);
      setIspending(false);
    }
  };

  return { isPending, register };
};
