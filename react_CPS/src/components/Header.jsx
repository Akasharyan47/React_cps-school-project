import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Logo from "../logo.jpg";


const Header = () => {
  const MainHeader = styled.header`
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300); 
  padding: 0 2rem; 
  box-shadow:1px 1px 4px   rgba(0, 0, 0, 0.664); 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  
  .HeaderLogo{    
    min-width:200px;
   overflow: hidden; 
   display: flex;  
   justify-content: space-between;
   align-items: center;  
   }  
   .logo {
    width: 80px;
    height: 80px;
  } 
  .lgnme {
  letter-Spacing:1px;
  ${'' /* font-size: ${({ theme }) => theme.fontSize.headerfontSizeM}; */}
  color: #595959;  
  font-size:1.9rem;
  font-weight:600;  
  text-decoration:none;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
} 
.logo-Name{  
  padding-left:1rem; 
  overflow:hidden;  
 }
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .logo { 
    width: 60px;
    height: 60px;
  } 
  .lgnme {   
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
  } 
  .HeaderLogo{    
    min-width:auto;
  }
}
`;
  return (
    <MainHeader>
      <div className="HeaderLogo ">
        <img src={Logo} alt="logo" className="logo" />
        <div className="grid-two-coloumn logo-Name pt-2 ">
          <div className="section-Logo-Name1 text-decoration-none">
            <a className="lgnme">CENTRAL PUBLIC SCHOOL </a>
          </div>
          <div className="section-Logo-Name2">
            <a style={{ fontWeight: "400", letterSpacing: "2px", color: "#7F7F7F", fontStyle: "italic", fontSize: " ${({ theme }) => theme.fontSize.headerfontSizeH}" }}> (Ghusia Kalan) </a>
          </div>
        </div>
      </div>
      <Navbar />
    </MainHeader>
  );
};


export default Header;

