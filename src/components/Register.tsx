import React, { useState, useReducer } from "react";
import {
    makeStyles,
    createStyles,
    Container,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: "center",
        margin: theme.spacing(1, 0, 4)
    },
    submitButton: {
        marginTop: theme.spacing(4),
        color: "#fff",
        background: "#55AAFF"
    }
}));

type State = {
    email: string
    password: string
    helperText: string
    isError: boolean
}

const initialState:State = {
    email: "",
    password: "",
    helperText: "",
    isError: false,
}

type Action = { type: "setEmail", payload: string }
    | { type: "setPassword", payload: string}
    | { type: "registerSuccess", payload: string}
    | { type: "registerFailed", payload: string};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "setEmail": 
         return {
            ...state,
            email: action.payload
        };
        case "setPassword": 
        return {
            ...state,
            password: action.payload
        };
        case "registerSuccess": 
        return {
          ...state,
          helperText: action.payload,
          isError: false
        };
      case "registerFailed": 
        return {
          ...state,
          helperText: action.payload,
          isError: true
        };
    }
}

const Register = () => {
    const {heading}=useStyles();
    const {submitButton}=useStyles();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleRegisterEmail = () => {
        if (state.email === "email"){
            dispatch({
                type: "registerSuccess",
                payload: "Register Successfully"
            });
        }else {
            dispatch({
                type: "registerFailed",
                payload: "Incorrect email"
            });
        }
    }

    return(
        <Container maxWidth="xs">
            <Typography className={heading} variant="h3">
                Register
            </Typography>
            <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    id="Email"
                    type="email"
                    label="Email"
                    placeholder="email"
                    fullWidth
                    //required
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    id="Password"
                    type="password"
                    label="Password (6-20 characters)"
                    placeholder="password (6-20 characters)"
                    fullWidth
                    //required
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    id="FirstName"
                    type="string"
                    label="First Name"
                    placeholder="first name"
                    fullWidth
                    //required
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    id="LastName"
                    type="string"
                    label="Last Name"
                    placeholder="last name"
                    fullWidth
                    //required
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={submitButton}
                >
                    Register  
                </Button>
            </form>
        </Container>
    );
}

export default Register;