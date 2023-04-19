import React, { useState } from "react";
import styled from "styled-components"; 
import { loginEntry } from "../context";

const Login = () => {
  const Main = styled.section`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    font-family: "Jost", sans-serif;
    background: linear-gradient(to bottom, #006599, #302b63, #ff9933);
    letter-spacing: 1px;
    .main {  
      width: 350px;
      height: 500px;
      background: red;
      overflow: hidden;
      background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
        no-repeat center/ cover;
      border-radius: 10px;
      box-shadow: 5px 20px 50px #000;
    }
    #chk {
      display: none;
    }
    .signup {
      position: relative;
      width: 100%;
      height: 100%;
    }
    label {
      color: #fff;
      font-size: 2.3em;
      justify-content: center;
      display: flex;
      margin: 60px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }
    input {
      width: 60%;
      height: 20px;
      background: #e0dede;
      justify-content: center;
      display: flex;
      margin: 20px auto;
      padding: 15px;
      border: none;
      outline: none;
      border-radius: 5px;
    }
    button {
      letter-spacing: 1.5px;
      width: 60%;
      height: 40px;
      margin: 10px auto;
      justify-content: center;
      display: block;
      color: #fff;
      background: #573b8a;
      font-size: 1.3rem;
      font-weight: bold;
      margin-top: 20px;
      outline: none;
      border: none;
      border-radius: 5px;
      transition: 0.2s ease-in;
      cursor: pointer;
    }
    button:hover {
      background: #6d44b8;
    }
    .login {  
      height: 660px; 
      border-radius: 50% / 10%;
      transform: translateY(10px);
      transition: 0.8s ease-in-out;
    }
    .login label {
      color: #fff;
      transform: scale(0.7);
    }
    #chk:checked ~ .login {
      transform: translateY(100px);
    }
    #chk:checked ~ .login label {
      transform: scale(1);
    }
    #chk:checked ~ .signup label {
      transform: scale(0.6);
    }
  `;

  const [user_id, setuser_id] = useState("");
  const [password, setpassword] = useState("");

  const newEntry = { user_id: user_id, password: password };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginEntry(newEntry);
  };

  return (
    <Main>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        {/* <div className="signup">
				  <form>
					<label for="chk" aria-hidden="true"> Login</label>
					<input type="text" name="txt" placeholder="User name" required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Sign up</button> 
				</form>  
			</div> */}
        <label>
          <h2> HELLO BUDDY..! &#128540;</h2>
		   
           
        </label>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input
              onChange={(e) => setuser_id(e.target.value)}
              value={user_id}
              name="user_id"
              label="user_id"
              type="text"
              placeholder="User name"
              required
            />
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              minlength="5"
              maxlength="5"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button type="submit" value="Submit">
              Login
            </button>
            <br />
          </form>
          <label> 
            
          </label>
        </div>
      </div>
    </Main>
  );
};

export default Login;
