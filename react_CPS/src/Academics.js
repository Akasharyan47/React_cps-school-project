import React, { useState } from "react";
import styled from "styled-components"; 
import AcademicsBanner from "../src/styles/png/Academics Banner.jpg";
import AcademicGalleries from "../src/styles/png/AcademicGalleries.png";
import AcademicsEvent from "../src/styles/png/AcademicsEvent.png";
import CurricularActivities from "../src/styles/png/CurricularActivities.png";
import Galleries from "./components/Galleries";
import Event from "./components/Event";
import CIRRICULAR from "./components/CIRRICULAR"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Academics = () => { 

const Academic = styled.section`  
.AcademicBanner {  
   -webkit-align-items: stretch;
   -ms-flex-align: stretch;
   align-items: stretch;  
   display:flex;
   flex-direction: column;
   background-Color:gray; 
 .AcademicName {  
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-align-items: stretch;
   -ms-flex-align: stretch;
   align-items: stretch;
   justify-Content:center;
   align-items:center;
   position:relative;  
    height:36vh;  
   overflow:hidden;
   h{   
     color:white; 
     position:absolute;
      display: block; 
      font-Size:6rem;
      font-family:bold;
      letter-spacing:2px;
      top: 50%; 
   right: 50%;
   transform: translate(50%,-50%);
   font-weight: 700;
   color: #f5f5f5;
   text-shadow: 1px 1px 1px #919191,
       1px 1px 1px #919191,
       1px 2px 1px #919191,  
   1px 22px 10px rgba(16,16,16,0.2),
   1px 25px 35px rgba(16,16,16,0.2),
   1px 10px 10px rgba(16,16,16,0.4);
   } 
    img {
     display:inline; 
     height:auto;
     bottom: 0;
    left: 0;
    right: 0;
    top: 0; 
    opacity: 1;
    max-width: 100%; 
    } 
 }
 .AcademicList{  
    width:100%; 
     display:flex;   
     justify-Content:center;
     align-items:center; 
     position:relative;  
   }
   .AcademicList1{    
     display:block;
     position:absolute; 
   }  
   btn{
     margin-left:1rem;
     color:white;   
     text-decoration:none;
   }
   btn:hover{
           transform: scale(0.9);
       }  
   .grid{  
    border-end-start-radius: 80px 80px;
     border-start-start-radius: 80px 80px; 
    height:3.3rem; 
     display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-align-items: stretch;
   -ms-flex-align: stretch;
   align-items: stretch;
   justify-Content:center;
   align-items:center;
   position:relative; 
   gap:4rem;
   background:rgb(97, 97, 97);
   padding-right:25px; 
   }
   .g-col-4{   
   display:flex;    
   align-items:center;
   letter-spacing: 1px;   
   font-size: ${({ theme }) => theme.fontSize.headerfontSizeM}; 
   img{    
     border-radius: 50%;  
     background-color:${({ theme }) => theme.colors.backgroundYellow}; 
     height:5rem; 
     padding:7px;   
     }  
   }  
   @media (max-width: ${({ theme }) => theme.media.tab}) {
     .AcademicName{
       height:30vh; 
     } 
     .AcademicName  h {   
      position:absolute; 
      font-Size:5rem;  
   }  
   .grid{ 
     height:3rem;
     gap:1rem; 
   }
   .g-col-4{    
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL}; 
   img{    
     height:4rem;  
     }  
   }  
   }    
}  
`; 

  const [active, setActive] = useState('first'); 

  return (
    <>
      <Academic>
        <div className="AcademicBanner _1AtVbE col-12-12">
          <div className="AcademicName">
            <img className="AcademicName" src={AcademicsBanner} alt="logo" ></img>
            <h> ACADEMICS </h>
          </div>
          <div className="AcademicList container ">
            <div className="AcademicList1 ">
              <div class="grid ">
                <div class="g-col-4">
                  <img src={AcademicGalleries} alt="logo" ></img>
                  <btn type="button" onClick={() => setActive("first")} className="text-decoration-none"> GALLERIES </btn>

                </div>
                <div class="g-col-4">
                  <img src={AcademicsEvent} alt="logo"></img>
                  <btn type="button" onClick={() => setActive("second")} className="text-decoration-none"> EVENTS </btn>
                </div>
                <div class="g-col-4 ">
                  <img type="button" src={CurricularActivities} alt="logo"></img>
                  <btn type="button"  onClick={() => setActive("third")} className="text-decoration-none"> CIRRICULAR ACTIVITIES</btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Academic>

      <div className="container-fluid  pt-5">
        <div className="m-0  pt-5  ">
          {active === "first" && <Galleries />}
          {active === "second" && <Event />}
          {active === "third" && <CIRRICULAR />}
        </div> 
      </div>
    </>

  );
};



export default Academics;