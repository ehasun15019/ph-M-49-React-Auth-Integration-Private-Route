import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

const AuthProvider = ({children}) => {
    const [user, SetUser] = useState(null);

  /* createUser functionality start */
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  /* createUser functionality end */

  /* SignIn functionality start */
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  /* SignIn functionality end */


  /* SignOut functionality start */
  const signOutUser = () => {
    return signOut(auth)
  }
  /* SignOut functionality end */


  /* get CurrentUser info functionality start */
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            console.log("in the auth", currentUser);
            SetUser(currentUser)
        })
        return() => {
            unSubscribe();
        }
    }, [])

  /* get CurrentUser info functionality end */


  /* authInfo functionality start */
  const authInfo = {
    user,
    createUser: createUser,
    signInUser: signInUser,
    signOutUser: signOutUser,
  }
  /* authInfo functionality end */

  return (
    <AuthContext value={authInfo}>
        {
            children
        }
    </AuthContext>
  )
}

export default AuthProvider
