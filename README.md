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

2. create signIn functionality with this "signInWithEmailAndPassword()" firebase function like this:

    example: 

        const signInUser = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
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