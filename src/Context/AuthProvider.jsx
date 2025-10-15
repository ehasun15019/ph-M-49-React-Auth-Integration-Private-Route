import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
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
