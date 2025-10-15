import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

const AuthProvider = ({children}) => {

  /* createUser functionality start */
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  /* createUser functionality end */

  /* SignIn functionality start */
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  /* SignIn functionality end */


  /* get CurrentUser info functionality start */
  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
        console.log("Inside Ob: if", currentUser)
    } 
    else{
        console.log("Inside Ob: else", currentUser)
    }
  })
  /* get CurrentUser info functionality end */


  /* authInfo functionality start */
  const authInfo = {
    createUser: createUser,
    signIn: signInUser
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
