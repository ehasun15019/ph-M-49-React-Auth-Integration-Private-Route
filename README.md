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



====== How to context use ======

1. "createContext()" import form react in AuthContext.jsx
2. Destructure default "children" props in AuthProvider.jsx and wrap with like this 

    <AuthContext>
      {children}
    </AuthContext>


3. go to the main.jsx and Wrap the <RouterProvider> within <AuthProvider></AuthProvider>.

4. go to the AuthProvide.jsx file and follow the "createUser()" function. In that function call the " createUserWithEmailAndPassword() " from firebase/auth. 

5. then create " authInfo " in AuthProvider.jsx and call the "createUser()" function. and then give the value in like this :

    <AuthContext value={authInfo}></AuthContext>

6. got to the Register.jsx Component.

    -> Follow the "newHandleRegister()" function .
    -> import "AuthContext" using "use()" from react . then Destructure the "createUser" like this,  
    const {createUser} = use(AuthContext);