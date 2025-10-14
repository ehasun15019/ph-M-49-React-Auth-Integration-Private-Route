## Step by step process of regester from 

1. give evrery input field in "name" atribute. Here We "name" atribute use so that when from is submitted then within the "target" we get the value.  


<!-- firebase password auth -->
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