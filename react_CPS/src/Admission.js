import React from 'react';
import styled from "styled-components";
import {  FooterContactUs, FooterBottom } from './components/Footer';

const Admission = () => {
  const MainAdmission = styled.section` 
  letter-spacing: 0.5px; 
  .admprocess {
   overflow: hidden;
   width: 100%;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: inline-flex;
   -webkit-flex-wrap: wrap;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
   align-items: stretch;
  } 
  .admprocess1 {  
   width: 100%; 
   text-align: center; 
   margin-top: 30px;
   margin-bottom: 40px;
  
 } 
 .admprocess2 { 
   display: flex;
   width: 100%;
   height: fit-content;
   margin-top: 15px;
   margin-bottom: 15px;
   margin-left: 5%;
   margin-right: 5%; 
   justify-content: center;
 } 
 .admprocess1 span:before { 
   background-color:${({ theme }) => theme.colors.backgroundYellow}; 
   display: inline-block;
   content: ""; 
   border: 3px solid ${({ theme }) => theme.colors.backgroundYellow};
   width: 60px;
   border-radius: 2.5em; 
   margin-right: 10px;
 } 
 .admprocess1 span:after { 
   background-color:${({ theme }) => theme.colors.backgroundYellow}; 
   margin-left: 10px; 
   display: inline-block;
   content: ""; 
   border: 3px solid ${({ theme }) => theme.colors.backgroundYellow};;
   width: 60px;
   border-radius: 2.5em; 
 } 
 .admprocess .admprocess1 span {
   letter-spacing: 1px; 
   color: ${({ theme }) => theme.colors.backgroundBlue};
   font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
   font-weight: bold; 
 } 
 .admprocess .admprocess2 .circlei {
   height: fit-content;
   max-width: 2.5rem;
   margin-right: 23px;
   margin-left: 5px; 
   fill: ${({ theme }) => theme.colors.backgroundYellow};  
 } 
 .admprocess .admprocess2 .adma {
   font-family: 'Segoe UI', sans-serif;
   font-style: italic;
   color: white;
   display: flex; 
   font-weight: 300; 
   font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
   padding: 10px;
   width: 80%;
   align-items: center; 
   background-color: #333F50;
 } 
 @media (max-width: 768px) {
   .admprocess .admprocess2 .adma {
     width: 90%;
   }
 } 
  ${'' /* main */}
 
 @media (max-width: 768px) {
   .admprocess .containeradm {
     max-width: 980px; 
   }
 } 
 @media (min-width: 768px) {
   .containeradm .col-md-12 {
     -webkit-flex: 0 0 100%;
     -moz-box-flex: 0;
     flex: 0 0 100%;
     max-width: 100%;
   }
 }
 
 @media screen and (max-width: 800px) {
   .column {
     width: 100%;
   }
 } 
 @media screen and (max-width: 767px) {
   .stepWraper.jsx-2808093879 ul.jsx-2808093879 li.jsx-2808093879 {
     width: 50%;
     margin: 0 0 30px 0;
   }
 } 
 .col-md-12 .row:after {
   content: "";
   display: table;
   clear: both;
 } 
 .containeradm {  
   width: 100%;
   margin-top: 20px;
   padding-right: 15px;
   padding-left: 15px; 
 } 
 .containeradm .row { 
   display: -webkit-flex;
   display: -moz-box;
   display: flex;
   -webkit-flex-wrap: wrap;
   flex-wrap: wrap;
 }  
 .stepWraper.jsx-2808093879 ul.jsx-2808093879 {
   margin: 0;
   padding: 0;
   padding-top: 0px;
   padding-right: 0px;
   padding-bottom: 0px;
   padding-left: 0px;
   width: 100%;
   margin-top: 50px;
   margin-bottom: 25px;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-flex-wrap: wrap;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
   list-style: none;
   align-items: center;
   justify-content: space-between;
   justify-content: center;
 } 
 article.ul {
   display: block;
   list-style-type: disc;
   margin-block-start: 1em;
   margin-block-end: 1em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   padding-inline-start: 40px;
 } 
 .stepWraper.jsx-2808093879 ul.jsx-2808093879 li.jsx-2808093879 {
   position: relative;
   margin: 0 auto;
   height: auto;
   display: flex;
   -webkit-flex-wrap: wrap;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
   -webkit-box-pack: center;
   -webkit-justify-content: center;
   -ms-flex-pack: center;
   justify-content: center;
   -webkit-align-items: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   margin: 0;
 } 
 li {
   display: list-item;
   text-align: -webkit-match-parent;
 } 
 ol,
 ul {
   list-style: none;
 } 
 ul {
   list-style-type: disc;
 } 
 .stepWraper.jsx-2808093879 ul.jsx-2808093879 li.jsx-2808093879 article.jsx-2808093879 {
   width: 94px;
   height: 94px;
   background-color: #FF9933;
   border-radius: 50%;
   line-height: initial;
   text-align: center;
   padding: 10px;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-align-items: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   justify-content: center;
 } 
 .stepWraper.jsx-2808093879 ul.jsx-2808093879 li.jsx-2808093879 p.jsx-2808093879 {
   color: ${({ theme }) => theme.colors.headerTextColorblack};
   font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
   width: 70%;
   letter-spacing: 0.5px; 
   text-align: center;
   justify-content: center; 
   font-weight: 500; 
   height: 60px;
   margin: 10px;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-style: italic;
 } 
 p {
   display: block;
   margin-block-start: 1em;
   margin-block-end: 1em;
   margin-inline-start: 0px;
   margin-inline-end: 0px; 
 }  
 `;
  return (
    <>
      <MainAdmission>
        <div className="admprocess">
          <div className="admprocess1">
            <span> ADMISSION PROCESS </span>
          </div>
          <div className="admprocess2">
            <span className="adma text-decoration-none">
              <svg className='circlei ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" /></svg>
              Currently, we are accepting offline admission forms. please visit our school/call us to know
              more about the admission process.
            </span>
          </div>

          <div className="containeradm">
            <div className="row">
              <div className="col-md-12">
                <article className="jsx-2808093879 stepWraper">
                  <ul className="jsx-2808093879">

                    <li className="jsx-2808093879 column" style={{ width: "200px" }} >
                      <article className="jsx-2808093879 ">
                        <svg style={{ height: "4rem", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V285.7l-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" /></svg>
                      </article>
                      <p className="jsx-2808093879"> Fill out the admission forms.</p>
                    </li>
                    <li className="jsx-2808093879 column" style={{ width: "200px" }} >
                      <article className="jsx-2808093879 ">
                        <svg style={{ height: "4rem", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                      </article>
                      <p className="jsx-2808093879"> Submit the documents.</p>
                    </li>
                    <li className="jsx-2808093879 column" style={{ width: "200px" }} >
                      <article className="jsx-2808093879 ">
                        <svg style={{ height: "4rem", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" /></svg>
                      </article>
                      <p className="jsx-2808093879"> Pay Fees. </p>
                    </li>
                    <li className="jsx-2808093879 column" style={{ width: "200px" }}>
                      <article className="jsx-2808093879"
                        style={{ backgroundColor: "#00B050", color: "rgb(238, 238, 238)" }}>
                        <svg style={{ height: "4rem", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                      </article>
                      <p className="jsx-2808093879"> Completed. </p>
                    </li>
                    
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
       </MainAdmission>
     
       <FooterBottom /> 
    </>
  )
} 

 
export default Admission;
