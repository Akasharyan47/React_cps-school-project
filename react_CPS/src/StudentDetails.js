import React, { useState, useEffect } from "react";
import styled from "styled-components";
import userLogo from "./styles/png/man3.jpg";
import Error_emoji from "../src/styles/png/404.png";
import StudentDetail2 from "./components/StudentComponent";
import { StudentDetail1 } from "./components/StudentComponent";

const StudentDetails = () => {
  const Main = styled.section`
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
  #notfound {
    position: relative;
    height: 100vh;
  } 
  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notfound {
    max-width: 560px;
    width: 100%;
    padding-left: 160px;
    line-height: 1.1;
  }

  .notfound .notfound-404 {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 140px;
    height: 140px;
    ${"" /* background-image: url('../img/emoji.png'); */}
    background-size: cover;
  }

  .notfound .notfound-404:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(2.4);
    -ms-transform: scale(2.4);
    transform: scale(2.4);
    border-radius: 50%;
    background-color: #f2f5f8;
    z-index: -1;
  }

  .notfound h1 {
    font-family: "Nunito", sans-serif;
    font-size: 65px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 10px;
    color: #151723;
    text-transform: uppercase;
  }

  .notfound h2 {
    font-family: "Nunito", sans-serif;
    font-size: 21px;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    color: #151723;
  }
  .notfound p {
    font-family: "Nunito", sans-serif;
    color: #999fa5;
    font-weight: 400;
  }
  .notfound a {
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
    font-family: "Work Sans", sans-serif;
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    color: #388dbc;
  }

  @media only screen and (max-width: 767px) {
    .notfound .notfound-404 {
      width: 110px;
      height: 110px;
    }
    .notfound {
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 110px;
    }
  }

  ${"" /*  ---------- */}

  .main1 {
    position: absolute;
    margin: 0;
    top: 0;
    height: auto;
    width: 100vw;
    background: white;
  }
  .container-fluid {
    display: flex;
    padding: 18px;
  } 
  .wrapper { 
    overflow: hidden;
     width: min-content;
    display: grid;
    grid-column-gap: 9px;
    grid-row-gap: 6px;
    grid-template-columns: 65px 100px 100px;
    grid-template-rows: 30px 27px;
  }
  .box {
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
    font-weight: bold;
    letter-spacing: 0.7px;
  }
  .a {
    grid-column: 1;
    grid-row: 1 / 3;
    img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      border-radius: 50%;
    }
   }
   .b {
    grid-column: 2 /4;
    grid-row: 1;
    span {
      background-color: ${({ theme }) => theme.colors.backgroundBlue};
      color: rgb(247, 247, 247);
      display: block;
      padding: 3px 0 3px 8px;
      width:min-content;
    }
  }
  .c {
    grid-column: 2 /4;
    grid-row: 2;
    span {
      padding: 3px 25px 3px 8px;
      background-color: #c55a11;
      color: rgb(238, 238, 238);
      cursor: pointer;
      overflow: hidden;
    }
    }
  /*  START   LOGIN INFORMATION */

  /*  END  LOGIN INFORMATION   ============ */ 
  
  /*    START   STUDENT DETAIL   ================ */

  .studentdetail {
    min-width: auto;
    width: min-content;
    float: right;
    justify-content: right;
    align-items: center;
    flex-direction: row;
    display: flex;
    gap:10px;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .studentdetail{
    flex-direction: column; 
    } 
    .studentdetail .btn{   
      padding: 2px 5px 2px 5px;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};

    } }
 
  .studentdetail btn{   
    min-width: max-content;
    padding: 2px 18px 3px 18px; 
    
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    font-weight: 500;
    background-color: rgb(238, 238, 238);
    color: #495057;
    cursor: pointer;
   }
   .studentdetail btn:hover {
   background-color: rgb(214, 212, 212);
   } 
  .studentdetail btn:active {
  background-color: rgb(214, 212, 212);
  box-shadow: 0 1px #666;
  transform: translateY(1px);
  };

 /*  end header  === */

/* ====   START   HEADMASTER DETAIL  === */

${
  "" /* 
.headmaster {
  width: 100%;
  height:auto;
  display: -ms-flexbox;
  -webkit-flex: auto;
  -ms-flex: auto;
  flex: auto; 
  display:flex; 
} 
.headmasterbox {  
  width: 100%;
  height: auto; 
  display:flex;
  height:80px; 
  align-items:center;  
 li {
  margin-right:30px; 
  background-color: #333F50; 
  display: inline-flex;  
  padding: 6px 20px;
  border-radius: 2px;
  cursor: pointer;
  a{
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeL}; 
    letter-spacing:0.5px;
    color:white;
    font-family: "Segoe UI", "Open Sans", "Helvetica Neue", sans-serif;
  }
}}
 
.headmasterdetail { 
  width: 100%;
  height:40vh;
   display:flex;
   align-items: center;
    justify-content:center;
  ul {   
    display:block;
    width:auto;
    height:fit-content;   
    columns: 2;
    gap:80px; 

  li {
  font-family: "Segoe UI", "Open Sans", "Helvetica Neue", sans-serif; 
  color: #3f3e3e;
  font-weight:500;
  font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
}}
}   */
}
`;

  useEffect(() => {
    localStorage.setItem("CPS_user", JSON.stringify({ login: true }));
  });

  const [active, setActive] = useState("first");
  const [parsed, setparsedItem] = useState("");

  const getLoginInfo = () => {
    const user_info = localStorage.getItem("CPS_user");
    const separsedItem = JSON.parse(user_info);
    setparsedItem(separsedItem);
  };

  useEffect(() => {
    getLoginInfo();
  }, []);

  const Logoutbtn = () => {
    localStorage.removeItem("CPS_user");
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  return (
    <Main>
      {!parsed ? (
        <div className="main1 m-0 positon-absolute">
          <div id="notfound">
            <div class="notfound  ">
              <div
                class="notfound-404"
                style={{ backgroundImage: `url(${Error_emoji})` }}
              ></div>
              <h1>404</h1>
              <h2>Oops! Page Not Be Found</h2>
              <p>
                Sorry but the page you are looking for does not exist, have been
                removed. name changed or is temporarily unavailable
              </p>
              <a href="./Login">Back to Login Page</a>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="main1 m-0 positon-absolute">
            <div
              className="container-fluid d-flex justify-content-between "
              style={{ background: "rgba(55, 55, 55" }}  >
              <div className="wrapper ">

                <div className="box a">
                  <img src={userLogo} alt=""></img>
                </div>
                <div className="box b align-self-end">
                  <span>{parsed.Name} </span>
                </div>
                <div class="box c">
                  <span onClick={() => Logoutbtn()} type="submit">
                    Logout  
                  </span>
                </div>
              </div>

              <div className="studentdetail "> 
                <btn className="btn" onClick={() => setActive("first")}>
                  Student Registration
                </btn> 
                <btn className="btn" onClick={() => setActive("second")}>
                  View Student Details
                </btn>
              </div>
            </div>
            <>
              {active === "first" && <StudentDetail1 />}
              {active === "second" && <StudentDetail2 />}
            </>
          </div>
        </>
      )}
    </Main>
  );
};

export default StudentDetails;
