import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";

// import { useGlobalContext } from "./context";
// import {stlist, AppProvider} from "../context";

export const StudentDetail1 = () => {
  const Main = styled.section`
    /* ====   START   HEADMASTER DETAIL  === */
    @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    letter-spacing: 0.6px;

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 10px;
    }
    *::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: #e9ecef;
    }
    .headmaster {
      width: 100%;
      height: auto;
    }
    .headmasterbox {
      padding-top: 20px;
      width: 100%;
      display: block;
      height: 80px;
      align-items: center;
      li {
        margin-right: 25px;
        background-color: #333f50;
        display: inline-flex;
        padding: 4px 15px;
        border-radius: 2px;
        cursor: pointer;
        a {
          font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
          color: white;
        }
      }
    }
    .headmasterdetail {
      display: flex;
      width: 100%;
      height: 40vh;
      justify-content: center;
      align-items: center;
      ul {
        width: max-content;
        height: fit-content;
        columns: 2;
        gap: 80px; 
        li {
          color: #3f3e3e;
          font-weight: bold;
          letter-spacing: 1px; 
           font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
        }
      }
    }
  `;
  return (
    <Main>
      <section>
        <div id="show1" className="headmaster pt-3">
          <div className="headmasterbox">
            <ul>
              <li>
                <a className="pfdetail "> Profile Detail</a>
              </li>
              <li>
                <a className="pfedit">Edit Detail</a>
              </li>
            </ul>
          </div>
          <div className="headmasterdetail">
            <ul>
              <li>
                <a className="hdname">Name </a>
              </li>
              <li>
                <a className="dsgn">Designation </a>
              </li>
              <li>
                <a className="dob">Date of Birth</a>
              </li>
              <li>
                <a className="eml">Email</a>
              </li>
              <li>
                <a className="cnumber">Contact Number</a>
              </li>

              <li>: Satendra Kumar </li>
              <li>: Head Master </li>
              <li>: 00-00-2000 </li>
              <li>: abc@gmail.com </li>
              <li>: +9112346789 </li>
            </ul>
          </div>
        </div>
      </section>
    </Main>
  );
};

const StudentDetail2 = () => {
  const Main = styled.section`
    @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
  
    /*====START==========MAIN =========== */
    .stlist {
      display: -ms-flexbox;
      -ms-flex: auto;
      flex: auto;
      width: 100%;
      height: 500px;
      justify-content: center;
      align-items: center;
    }
    .stlist1 {
      background-color: #ffffff;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding-top: 6px;
      padding-bottom: 15px;
    } 
    .stlist01 {  
       align-items: start;
       height: auto;
       align-items: center;
    }

    /*  DROP DOWN BUTTON    START  */

    .inner {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      width: 35px;
      border: none;
      background-color: ${({ theme }) => theme.colors.backgroundYellow};
    }
    .inner BUTTON {
      min-width: 50px;
      height: 23px;
      border: none;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      transition: all 1s;
      background-color: ${({ theme }) => theme.colors.backgroundBlue};
      :after {
        margin-left: 5px;
        font-size: 15px;
        transform: rotate(-0.25turn);
      }
      :hover {
        transform: translateX(15%);
      }
    }
    .dropmenu {
      border: 1px solid white;
      display: block;
      position: relative;
      height: 250px;
      overflow: auto;
    }
    .cln {
      scrollbar-width: thin;
      transition: all 1s;
      width: 120px;
      margin: 7px;
      background: rgba(203, 202, 202, 0.789);
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
    }
    /*  drop down  end == */
    .stlist .search {
      width: 50%;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .search a {
      color: #4e4c4c;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    }
    .search .searchterm {
      font-style: italic;
      position: relative;
      justify-content: center;
      align-items: center;
      padding: 5px;
      margin-left: 10px;
      width: 27%;
      line-height: normal;
      border-radius: 20px;
      border: 2px solid ${({ theme }) => theme.colors.backgroundYellow};
    }
    .stlist .totaldtudent {
      width: 25%;
      height: 100%;
      justify-content: right;
      align-items: center;
      display: inline-flex;
    }
    .totaldtudent a {
      margin: 4px;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      color: #7f7f7f;
    }
    .totaldtudent .tstudent {
      color: #404040;
      padding: 4px 20px;
      font-size: 16px;
      font-weight: bold;
      border: 2px solid #949494;
      display: inline-flex;
    }

    /*   show data  start === */

    .container-fluid {
      background-color: ${({ theme }) => theme.colors.backgrountColorGray};
    }
    .containerbox {
      display: block;
      width: 90%;    
       align-items: center;
      justify-content: center;
      color: #3f3e3e;
      background: white;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      .col-2,
      .coll {
        background-color: ${({ theme }) => theme.colors.backgroundBlue};
        display: flex;
        justify-content: center;
        padding: 3px;
        color: rgb(247, 247, 247);
      }
      }
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
         .containerbox{
          font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
          width:100%;  

         }
      }
    ${
      "" /* .sodata {
  display: inline-block; 
  width: 97%;
} 
.stmain3{ 
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse; 
  display:flex; 
  padding:4px;
  letter-spacing:0.6px;
  font-weight:400;
   
   background-color:${({ theme }) => theme.colors.backgroundBlue};
}  */
    }
    ${
      "" /* .stmain3 td { 
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
  border-bottom: 1px solid hsl(0, 0%, 75%);
  border-collapse: separate;
  padding: 10px;
  padding-left: 60px;
  padding-top: 15px;
  padding-bottom: 7px; 
}   */
    }
${
      "" /* .stmain3 th {   
  border-collapse: separate;
} 
.stmain3 th {  
  font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};  
  color: white; 
  margin:1px;
  align-items:stretch; 
} */
    }
  `;
  const [value, setValue] = useState(); 
  const handleSelect = (sd) => {
    console.log(sd);
    //  setValue(sd);
    setValue(sd);
  };

  return (
    <Main>
      <section>
        <div className="container-flui m-0 p-0 ">
          <div className="stlist pt-3">
            <div className="stlist1 d-flex  justify-content-between">
              <div className="stlist01  ">
                <DropdownButton
                  className="outer inner  btn btn-primary"
                  title={value}
                  id="dropdown-menu-align-right"
                  onSelect={handleSelect}
                >
                  <div className="dropmenu  ">
                    <Dropdown.Item className="cln" eventKey="STD 1">
                      STD 1
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 2">
                      STD 2
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 3">
                      STD 3
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 4">
                      STD 4
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 5">
                      STD 5
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 6">
                      STD 6
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 7">
                      STD 7
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 8">
                      STD 8
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 9">
                      STD 9
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 10">
                      STD 10
                    </Dropdown.Item>
                  </div>
                </DropdownButton>
              </div>
              <div className="search">
                <a> Search Students </a>
                <input
                  type="text"
                  className="searchterm"
                  id="myInput"
                  onkeyup="myFunction()"
                  placeholder="Enter student name..."
                />
              </div>
              <div className="totaldtudent">
                <a>Total Students</a>
                <a id="tnum" className="tstudent"></a>
              </div>
            </div>
            <div className="container-fluid d-flex justify-content-center m-0 ">
              <div className="containerbox m-0  ">
                <div className="row  gap-1 m-0">
                  <div className="col-2 ">
                    <a>Student Name</a>
                  </div>
                  <div className="col-2 ">Student Id</div>
                  <div className="col-2 ">Roll Number</div>
                  <div className="col-2 ">Class</div>
                  <div className="col-2 ">Status</div>
                  <div className="col coll ">Edit Details</div>
                </div>
              </div>
            </div>
            {/* <h4 className="d-flex m-4">You selected {value}</h4> */}
          </div>
        </div>
      </section>
    </Main>
  );
};

export default StudentDetail2;
