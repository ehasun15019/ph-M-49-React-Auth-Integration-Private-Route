## Step by step process of regester from 

1. give evrery input field in "name" atribute. Here We "name" atribute use so that when from is submitted then within the "target" we get the value.  


====== firebase password auth ======
---- in the Registration file with the function => handleRegistration() ------

example: 

    const hanldeRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // firebsae passwordAuth start
        createUserWithEmailAndPassword(auth, email, password)
        .then((newUser) => {
            return(
                console.log(newUser),
                e.target.reset()           
            )
        })
        .catch((error) => {
            return(
                console.log(error)              
            )
        })
    }



====== How to use Context for firebase auth for (Register)  ======

1. "createContext()" import form react in AuthContext.jsx

2. Destructure default "children" props in AuthProvider.jsx and wrap with like this 

    example:

        <AuthContext>
          {children}
        </AuthContext>


3. go to the main.jsx and Wrap the "RouterProvider" within like this: 
    
    example: 

        <AuthProvider>
            <RouterProvider>
        </AuthProvider

4. go to the AuthProvide.jsx file and follow the "createUser()" function. In that function call the 
  " createUserWithEmailAndPassword() " from firebase/auth. 

5. then create " authInfo " in AuthProvider.jsx and call the "createUser()" function. and then give the value in like this :

    example: 
    
        <AuthContext value={authInfo}></AuthContext>


6. got to the Register.jsx Component.

    -> Follow the "newHandleRegister()" function .

    -> import "AuthContext" using "use()" from react . then Destructure the "createUser" like this:

        example: 

            const {createUser} = use(AuthContext);
    
    -> then call the "createUser()" function in "newHandleRegister()" function. and call the email, password in the createUser()  like this:

        example: 

            const {createUser} = use(AuthContext);

            const newHandleRegister = (e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const password = e.target.password.value;

                createUser(email, password)
            } 

    -> then add the .then() and .catch() in the "newHandleRegister()" function like this: 

        example: 

            const {createUser} = use(AuthContext);

            const newHandleRegister = (e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const password = e.target.password.value;

                createUser(email, password)
                .then((newUser) => {
                    console.log(newUser)
                })
                .catch((error) => {
                    console.log(error)
                })
            } 


====== How to use Context for firebase auth for (Login)  ====== 

1. go to the AuthProvider.jsx file

2. create signIn functionality with this "signInWithEmailAndPassword()" firebase function and add in to the authInfo like this:

    example: 

        const signInUser = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
        }

        const authInfo = {
            user,
            createUser: createUser,
            signInUser: signInUser,
        }


3. Come in the Login.jsx file and import AuthProvider using "use" form react and Destructure the          "signInUser". then create a function and call the "signInUser".  like this:

    example: 

        const { signInUser } = use(AuthContext);

        const handleSignIn = (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            signInUser(email, password)
            .then((getUser) => {
            console.log(getUser.user);
            
            })
            .catch((error) => {
            console.log(error);   
            })
        }



====== Get Current User =====

1. go to the AuthProvider.jsx file

2. then give "onAuthStateChanged()" firebase function like this: 

    example:

        const [user, SetUser] = useState(null);

        useEffect(() => {
            const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
                console.log("in the auth", currentUser);
                    SetUser(currentUser)
                })
                return() => {
                    unSubscribe();
                }
        }, [])

        const authInfo = {
            user,
            createUser: createUser,
            signIn: signInUser
        }


======  How to get User in the navbar and show the signOut or Login button ======

1. go to the Navbar.jsx file

2. destructure "user" from AuthProvider.jsx file and import the navbar and then give a conditional things like this:

    example: 

        const {user} = use(AuthContext);

        <div className="navbar-end">
            {
            user ? <a className="btn">Signout</a> : <Link to="/login" className="btn">Login</Link>
            }
        </div>


===== How to signOut in firebase with context =====

1. go to the AuthProvider.jsx file

2. create signOut functionality with "signOut()" firebase function and add authInfo  like this: 

    example: 

        const signOutUser = () => {
            return signOut(auth)
        }

        const authInfo = {
            user,
            createUser: createUser,
            signIn: signInUser,
            signOutUser: signOutUser,
        }

3. Come to the navbar and and destructure the "signOutUser" and make a handleSignOut function like this: 

    example: 

        const {user, signOutUser} = use(AuthContext);

        const handleSignOut = () => {
            signOutUser()
            .then(() => {

            })
            .catch((error) => {
            console.log(error)
            })
        }


====== How to make a private Routes ====== 

1. create Routes folder

2. in the the Routes folder make PrivateRoutes.jsx file 

3. Destructure the "children" props in the PrivateRoutes.jsx file like this:

    example: 

        import React from 'react'

        const PrivateRoutes = ({children}) => {
            return (
                <div>
                
                </div>
            )
        }

        export default PrivateRoutes

4. Then Destructure "user" from AuthProvider.jsx and import AuthContext using use.. like this: 

    example: 

        const {user} = use(AuthContext);


5. simple example of if user login the webpage then show the private Route or go to the direct login page like this: 

    example: 

        import React, { use } from 'react'
        import { AuthContext } from '../Context/AuthContext'
        import { Navigate } from 'react-router';

        const PrivateRoutes = ({children}) => {

            const {user} = use(AuthContext);

            if(user) {
                return children
            }

            return <Navigate to="/login"></Navigate>
        }

        export default PrivateRoutes

        




