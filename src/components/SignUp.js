import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

export default function Signup() {
    const signUpURL = "https://mymusic-gabrielcari.herokuapp.com/sign-up";
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function register(e) {
        e.preventDefault();
        const promise = axios.post(signUpURL, {
            email: email,
            name: name,
            image: image,
            password: password,
            confirmPassword: confirmPassword
        });
        promise.then(response => {
            const { data } = response;
            navigate("/");
        });
        promise.catch(error => {
            alert(error.response.data);
        });
    }

    return (
        <Main>
            <h1>MyMusic</h1>
            <form onSubmit={register}>
                <input typeof="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input typeof="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input typeof="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
                <input typeof="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input typeof="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" >Register</button>  
            </form>
            <StyledLink to="/">
                <p>I do already have an account!</p>
            </StyledLink>
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
        border: 3px solid #D5D5D5;
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
        color: #FFFFFF;
    }
`;

const StyledLink = styled(Link)`
    font-size: 20px;
    margin-top: 25px;
    color: #393737;
`;