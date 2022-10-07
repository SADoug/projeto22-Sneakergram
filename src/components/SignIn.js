import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";


export default function SignIn() {
    const signInURL = "https://mymusic-gabrielcari.herokuapp.com/sign-in";
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);

    function login(e) {
        e.preventDefault();
        const promise = axios.post(signInURL, {
            email,
            password
        });
        promise.then(({ data }) => {
            const { name, image, token } = data;
            setUserData({ name, image, token });
            navigate("/home");
            return;
        });
        promise.catch(error => {
            alert(error.response.data);
            return;
        });
    }

    return (
        <Main>
            <h1></h1>
            <form onSubmit={login}>
                <input typeof="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input typeof="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" >Login</button>
            </form>
            <StyledLink to="/sign-up">Sign Up!</StyledLink>
        </Main>
    )
}

const Main = styled.main`
    color: #FFFFFF;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(https://i.imgur.com/VCgHTGN.png);
    background-repeat: repeat;
    background-position: center center;
    background-size: contain;
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    h1 {
        font-weight: bold;
        font-size: 42px;
        margin-bottom: 30px;
    }

    input {
        width: 300px;
        height: 50px;
        border: 3px solid #DCD7D0;
        border-radius: 5px;
        margin-top: 15px;
        padding: 10px;
        font-size: 17px;
        background-color: #DCD7D0;
        color: #393737;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 303px;
        height: 45px;
        background: #393737;
        border-radius: 5px;
        border: 0px;
        margin-top: 24px;
        margin-bottom: 24px;
        font-size: 20px;
        color: white;
    }
`;

const StyledLink = styled(Link)`
    font-size: 25px;
    margin-top: 25px;
    color: #393737;

`;