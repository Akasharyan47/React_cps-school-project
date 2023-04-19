// import styled from "styled-components";
   
// export const  Main = styled.section` 
//   .each-slide-effect > div {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-size: cover;
//   max-width: 100%;
//   height: 24rem;
  
// } 
// .main1 {
//   background-color: #033d5a;
//   width: 100%;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: auto;
// }


// body {
//   font-family: Verdana, sans-serif;
//   margin: 0
// }

// .mySlides {
//   display: none
// }

// img {
//   vertical-align: middle;
// }

// .sliderup {
//   display: block;
//   background-color: #f1f3f6;
// } 
//  /*   MAIN 2   CSS  DESIGN  ========= */

//  .main2 {
//     display: block; 
//     flex: auto;
//     width: 100%;  
//     text-align: center;
//     background-color:${({ theme }) => theme.colors.backgrountColorGray};
//   }
//   .main2 .wlcm1 {
//     margin-top: 3px;
//     display: inline-flex;
//     font-size: 28px;
//     font-weight:bold; 
//     font-style: normal;
//     color: ${({ theme }) => theme.colors.headerTextColor};
//   }
//   .main2 .wlcm2,
//   .wlcm4 {  
//     padding-top: 9px;
//     display: block; 
//     font-size: 38px;
//     font-weight:800;
//     color: ${({ theme }) => theme.colors.backgroundBlue}; 
//   } 
//   .main2 .wlcm4 {
//     padding-bottom: 15px;
//   }
//   .main2 .wlcm3 span { 
//      display: inline-block;
//     color: ${({ theme }) => theme.colors.headerTextColor};
//     padding-bottom: 15px;
//     font-size:  ${({ theme }) => theme.fontSize.headerfontSizeM};
//     margin-left: 15%;
//     margin-right: 15%; 
//   }
  
//   .main2 .wlcm1 span:after {
//     background-color:${({ theme }) => theme.colors.backgroundYellow};
//     text-align: center;
//     top: -8px;
//     margin-left: 10px; 
//     display: inline-flex;
//     content: "";
//     box-sizing: border-box;
//     border: 0.4rem solid ${({ theme }) => theme.colors.backgroundYellow};
//     width: 1.7em;
//     border-radius: 2.5rem;
//     transform: rotate(180deg);
//   } 
//   .main2 .wlcm1 span:before {
//     margin-right: 10px;
//     text-align: center;
//     top: -8px;
//     position: relative;
//     display: inline-flex;
//     background-color:${({ theme }) => theme.colors.backgroundYellow};
//     content: "";
//     box-sizing: border-box;
//     border: 0.4rem solid${({ theme }) => theme.colors.backgroundYellow};
//     width: 1.7em;
//     border-radius: 2.5rem;
//     transform: rotate(180deg);
//   }
  
//   .main2 .wlcm4 span:before {
//     background-color: ${({ theme }) => theme.colors.backgroundBlue};
//     position: relative;
//     display: inline-block;
//     content: ""; 
//     border: 2.6px solid ${({ theme }) => theme.colors.backgroundBlue};
//     width: 24px;
//     border-radius: 2.5em;
//     margin: 10px;
//     transform: rotate(90deg);
//   } 
//   .wlcm2 p {
//     font-style: oblique; 
//     color: ${({ theme }) => theme.colors.headerTextColor};
//     font-size:${({ theme }) => theme.fontSize.headerfontSizeL};
//     fontWeight: bold;
//   }
  
//    @media screen and (max-width:500px) {
//     .main2 .wlcm1 span { 
//       font-size: 25px; 
//     } 
//     .main2 .wlcm2 span { 
//       font-size: 26px; 
//     } 
//   }  

// /*    APPLICATION PROCESS   CSS DESIGN*/ 

 
// .padding60 {
//     padding: 50px 0;
// }  
//  .container,
// .container-fluid,
// .container-lg,
// .container-md,
// .container-sm,
// .container-xl {
//     width: 100%;
//     margin-right: auto;
//     margin-left: auto;
//       display: flex;
// }  

// .container .row { 
//     display: -webkit-flex;
//     display: -moz-box;
//     display: flex;
//     -webkit-flex-wrap: wrap;
//     flex-wrap: wrap; 
//     width: 100%;
// } 
// .row .col-xl-12,
// .col-xl-auto {
//     position: relative;
//     width: 100%;
//     padding-right: 15px;
//     padding-left: 15px;
// }

// .heading {  
//     text-align: center;
//     width: 100%;
//     font-weight: 600;
//     letter-spacing: 1.5px;
// } 

// @media screen and (max-width: 767px) {
//     ul.appstep.jsx-1636258543 {
//         -webkit-flex-wrap: wrap;
//         -ms-flex-wrap: wrap;
//         flex-wrap: wrap;
//     }
// }
// ul.appstep.jsx-1636258543 {
//     width: 70%;
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     text-align: center; 
//     padding: 0;
// } 
// ul {
//     display: block;
//     list-style-type: disc;
//     margin-block-start: 1em;
//     margin-block-end: 1em;
//     margin-inline-start: 0px;
//     margin-inline-end: 0px;
//     padding-inline-start: 40px;
// }
// ul.appstep.jsx-1636258543 li.jsx-1636258543 {
//     position: relative;
//     counter-increment: list;
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     width: auto;
//     padding: 0; 
//     margin: 0 40px;
// }
// li {
//     display: list-item;
//     text-align: -webkit-match-parent;
// }
// ul.appstep.jsx-1636258543 {  
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     text-align: center;
//     margin: 60px auto 10px;
//     padding: 0; 
// }
  
// ol,
// ul {
//     list-style: none;
// }

// ul.appstep.jsx-1636258543 li.jsx-1636258543 .mainWrapper.jsx-1636258543 {
//     width: 130px;
//     height: 130px;
//     border: 3px solid ${({ theme }) => theme.colors.backgroundBlue};
//     margin-bottom: 30px;
// }

// ul.appstep.jsx-1636258543 li.jsx-1636258543 .mainWrapper.jsx-1636258543 .datasection.jsx-1636258543 {
//     width: 120px;
//     height: 120px; 
//     background: ${({ theme }) => theme.colors.backgroundBlue};
//     top: 5px;
//     position: absolute;
//     left: 5px;
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-flex-wrap: wrap;
//     -ms-flex-wrap: wrap;
//     flex-wrap: wrap;
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     -webkit-align-items: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
// }

// .jsx-1636258543:hover {
//     -ms-transform: scale(1); 
//     -webkit-transform: scale(1); 
//     transform: scale(1); 
//   }

// ul.appstep.jsx-1636258543 li.jsx-1636258543 .mainWrapper.jsx-1636258543 .datasection.jsx-1636258543 .centerdata.jsx-1636258543 {
    
//     margin: 27px 0 0 0;
// }
// ul.appstep.jsx-1636258543 li.jsx-1636258543 .mainWrapper.jsx-1636258543 .datasection.jsx-1636258543 .centerdata.jsx-1636258543 span.jsx-1636258543 {
//     width: 100%;
//     display: block;
//     font-size:  ${({ theme }) => theme.fontSize.headerfontSizeM};
//     line-height: 40px;
//     color:white;
//     letter-spacing: 1px;
//     font-weight: bold;  
// } 
// @media screen and (max-width: 767px) {
//     ul.appstep.jsx-1636258543 li.jsx-1636258543:first-child.jsx-1636258543:before {
//         display: block;
//     }
// }

// ul.appstep.jsx-1636258543 li.jsx-1636258543:first-child.jsx-1636258543:before {
//     display: none;
// }

// @media screen and (max-width: 767px) {
//     ul.appstep.jsx-1636258543 li.jsx-1636258543:before {
//         -webkit-transform: rotate(90deg);
//         -ms-transform: rotate(90deg);
//         transform: rotate(90deg);
//         top: initial;
//         left: 36%;
//         z-index: 2;
//         bottom: -51px;
//     }
//     ul.appstep.jsx-1636258543 li.jsx-1636258543 .mainWrapper.jsx-1636258543 {
//     width: 120px;
//     height: 120px;
//     border: 3px solid ${({ theme }) => theme.colors.backgroundBlue};
//     margin-bottom: 30px;
// }

// ul.appstep.jsx-1636258543 li.jsx-1636258543 .mainWrapper.jsx-1636258543 .datasection.jsx-1636258543 {
//     width: 110px;
//     height: 110px; 
//     background: ${({ theme }) => theme.colors.backgroundBlue};
//     top: 5px;
//     position: absolute;
//     left: 5px;
 
// }
// }

// ul.appstep.jsx-1636258543 li.jsx-1636258543:before {
//     display: inline-block;
//     left: -60px;
//     top: 62px;
//     z-index: initial;
//     content: '';
//     width: 27px;
//     height: 33px;
//     position: absolute;
// }

//   .container-fluid {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
//     font-size: 1rem;
//     font-weight: 400;
//     line-height: 1.5;
//     color: #212529;
//     text-align: left;
//     background-color: rgb(255, 255, 255);
// }   

// /* MAIN3  DESIGN STYLE  */

// .main3 {
//   background-color: ${({ theme }) => theme.colors.backgroundBlue};
  
// }
// .announcement1 { 
//   width: 100%; 
//   display: block; 
// } 
// .announcements1 { 
//   display: flex;
//   width: 100%;
//   justify-content: right;  
// }

// .main3 .announcement11 {
//    width: 100%;
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: inline-flex;
//   -webkit-flex-wrap: wrap;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   align-items: stretch;
//   align-items: center;
//   justify-content: center;
//   align-items: stretch;  
// } 
// .announcements1 .ansment1 { 
//   display: flex;  
//   font-family: 'Segoe UI', sans-serif; 
//   padding: 6px 18px 6px 14px;
//   overflow: hidden; 
//   background-color: ${({ theme }) => theme.colors.backgroundYellow}; 
// } 

// .announcements .announcements2 {  
//   width: 85%;
//   margin-left: 0px;
//   margin-right: 0px;
//   height:auto;
//   margin-bottom: 30px;
//   display: block;  
// }  
// .fa {
//   font: normal normal normal 14px/1 fontawesome;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   transform: translate(0, 0); 
// } 
// .announcements2 ul { 
//   display: block;
//   width:100%;
//   height: 150px;
//   overflow: auto;
//   min-width: 250px;   
// };

// .announcements2 ul li {
//   cursor: pointer;
//   padding-bottom: 10px;  
//   color: white;
//   width:100%; 
//   font-size: ${({ theme }) => theme.fontSize.headerfontSizeL}; 
// };

// /*    MOBILE RESPONSIVE */

//   @media screen and (max-width:700px) {
//   .main3 {
//     width: 100%;
//     margin-right: auto;
//     margin-left: auto;
//     overflow: hidden;
//     display: block;
//   }  
 
//   .announcements .announcements1 {
//     display: flex;
//     width: 100%;
//     justify-content: left;
//   };
// }   
// `; 

