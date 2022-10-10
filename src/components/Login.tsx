import React, { useState, useReducer } from "react";
import {Link} from "react-router-dom";
import {
    makeStyles,
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
    | { type: "loginSuccess", payload: string}
    | { type: "loginFailed", payload: string};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setEmail': 
         return {
            ...state,
            email: action.payload
        };
        case 'setPassword': 
        return {
            ...state,
            password: action.payload
        };
        case 'loginSuccess': 
        return {
          ...state,
          helperText: action.payload,
          isError: false
        };
      case 'loginFailed': 
        return {
          ...state,
          helperText: action.payload,
          isError: true
        };
    }
}

const Login = () => {
    const {heading, submitButton} = useStyles();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleLogin = () => {
        if (state.email === "abc@email.com" && state.password === "password"){
            dispatch({
                type: "loginSuccess",
                payload: "Login Successfully"
            });
        }else {
            dispatch({
                type: "loginFailed",
                payload: "Incorrect email or password"
            });
        }
    }
    return(
        <Container maxWidth="xs">
            <Typography className={heading} variant="h3">
                Sign In
            </Typography>
            <form>
                <TextField
                    variant="standard"
                    margin="normal"
                    id="Email"
                    type="email"
                    label="Email"
                    placeholder="email"
                    fullWidth
                    //required
                />
                <TextField
                    variant="standard"
                    margin="normal"
                    id="Password"
                    type="password"
                    label="Password"
                    placeholder="password"
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
                    Login  
                </Button>
            </form>
            <Link to="/Register">
                Do not have an account? Sign up here
            </Link>
        </Container>
    );
}

export default Login;