import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg"; 

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
        .navbar-list {
           display: flex;
            gap: 3.5rem;  
            li {
              list-style: none;

              .navbar-link {
                &:link,
                &:visited {
                  margin-top:4px;
                  letter-spacing: 1.5px; 
                   color: #262626d0; 
                  font-weight: 600;
                  display: inline-block;
                  text-decoration: none;
                  font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
                  text-transform: uppercase;
                  color: ${({ theme }) => theme.colors.headerTextColor};
                  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                  transition: color 0.3s linear; 
                } 
                 &:after{
                 content:'';
                  width:0%; 
                height:1px;    
                 background:#FFC000;
                 display: block;
                 margin: auto;
                 transition: 0.6s all; 

                  }
                  &:hover{  
                    background: linear-gradient(to bottom,  rgba(255, 255, 255, 0) 80%, #FF9933 );
                  }
                &:hover::after{
                    width: 100%; 
                 } 
              }
            }
          } 
          .mobile-navbar-btn {
            display: none;

            .close-outline {
              display: none;
            }
          } 
          .mobile-navbar-btn[name="close-outline"] {
            display: none;
          } 
          @media (max-width: ${({ theme }) => theme.media.mobile}) {
            .mobile-navbar-btn {
              display: inline-block;
              z-index: 999;
              border: ${({ theme }) => theme.colors.headerTextColor}; 
              .mobile-nav-icon {
                font-size: 3rem;
                color: ${({ theme }) => theme.colors.headerTextColor};
              }
            } 
            /* hide the original nav menu  */
            .navbar-list {
              width: 100vw;
              height: 100vh;
              position: fixed;
              top: 0;
              left: 0;
              background-color: #fff; 
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: column;
              text-align: center; 
              transform: translateX(100%); 
              visibility: hidden;
              opacity: 0; 

              li {
                .navbar-link {
                    &:after{
                 content:'';
                  width:0%;
                  height:2px;
                 background:#FFC000;
                 display: block;
                 margin: auto;
                 transition: 0.1s; 
                  }
                &:hover::after{
                    width: 100%; 
                 } 
                 &:link,
                 &:visited { 
                  font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
                } 
                }
              }
            } 
            .active .mobile-nav-icon {
              display: none;
              font-size: 3rem;
              position: fixed;
              top: 3%;
              right: 10%;
              color: ${({ theme }) => theme.colors.black};
              z-index: 9999;
              overflow:hidden;
            }

            .active .close-outline {
              display: inline-block;
            }

            .active .navbar-list {
              visibility: visible;
              opacity: 1;
              transform: translateX(0);
              z-index: 999;
            }
        }
       `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">  
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/About">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Admission">
              ADMISSION
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/StudentDetails">
              StudentDetails
            </NavLink>
          </li> */}
           <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Academics">
              ACADEMICS
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Teacher">
              TEACHER
            </NavLink>
          </li>  
          <li>
          <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/StudentDetails">
              StudentDetails
            </NavLink>
            {/* <NavLink
              className="navbar-link "
              onClick={() => setOpenMenu(false)}
              to="/StudentResult"> STUDENTResult
            </NavLink> */}
          </li>
          <li>
            <NavLink
              className="navbar-link "
              onClick={() => setOpenMenu(false)}
              to="/Login">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="right-to-bracket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="initial-icon svg-inline--fa fa-right-to-bracket fa-xl"><path fill="currentColor" d="M512 128v256c0 53.02-42.98 96-96 96h-72C330.7 480 320 469.3 320 456c0-13.26 10.75-24 24-24H416c26.4 0 48-21.6 48-48V128c0-26.4-21.6-48-48-48h-72C330.7 80 320 69.25 320 56C320 42.74 330.7 32 344 32H416C469 32 512 74.98 512 128zM367.9 273.9L215.5 407.6C209.3 413.1 201.3 416 193.3 416c-4.688 0-9.406-.9687-13.84-2.969C167.6 407.7 160 396.1 160 383.3V328H40C17.94 328 0 310.1 0 288V224c0-22.06 17.94-40 40-40H160V128.7c0-12.75 7.625-24.41 19.41-29.72C191.5 93.56 205.7 95.69 215.5 104.4l152.4 133.6C373.1 242.6 376 249.1 376 256S373.1 269.4 367.9 273.9zM315.8 256L208 161.1V232h-160v48h160v70.03L315.8 256z" class=""></path></svg>
            </NavLink>
          </li> 
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
