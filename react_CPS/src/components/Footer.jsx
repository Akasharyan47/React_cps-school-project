import React from "react";
import styled from "styled-components";

export const FooterAbout = () => {
  const Wrapper = styled.section` 
  .footerbox {
    display:block;
    position: relative;
    background-color: #F2F2F2;
  } 
  .footerabout { 
    display: block;
    width: 100%; 
    padding-top:10px; 
  }
  .footerabout span {
   
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.backgroundBlue};  
    display: inline-flex;
    font-weight: bold;
    font-size:${({ theme }) => theme.fontSize.headerfontSizeH}; 
  } 
  .footerup {
    width: 100%;
    height: auto;
    overflow: hidden;
    text-align: center;  
  }
  .footerup h2 {
    font-weight: 400;
    margin-top: 20px;
    margin-left: 7%;
    margin-right: 7%; 
    font-style: inherit;
    line-height: 20px;
    font-size:${({ theme }) => theme.fontSize.headerfontSizeM};
    align-items: center;
    color:${({ theme }) => theme.colors.headerTextColor}; 
    margin-bottom: 50px; 
    text-align: justify;
  }; 
  `;
  return (
    <Wrapper>
      <footer>
        <section>
          <div className="footerbox">
            <div className="footerabout"><span className="ab">About</span> </div>
            <div className="footerup">
              <h2>Welcome to Central Public School.We are operating since 2006. We are a Hindi/English medium
                school with having different programs, starting from Nursery. Our mission is to provide a safe,
                disciplined learning environment that empowers all students to develop their full potential.
                We have the best-experienced teachers with having immense
                skills. With our program, the children are exposed to a great amount of learning. The blended
                techniques create a unique educational package where children can grow to their fullest
                potential. We offer attractive environment, practical, stimulating materials that meet the needs
                of each child. The teacher gives guidance and encouragement accordingly.<br /><br />

                I encourage you to explore our website to learn more about all that The Central Public School has
                to offer. I also invite you to visit us in person; please contact our Admission Office to
                know more about the admission process. We hope to see you soon!.</h2>
            </div>
          </div>
        </section>
      </footer>
    </Wrapper>
  );
};

export const FooterContactUs = () => {
  const Wrapper = styled.section`
  .footercontact {
    margin-top:10px; 
    width: 100%;
    overflow: hidden;  
  }
  .footercontact .ftcontact1 {
    justify-content: center;
    position: relative;
    display: flex;
  } 
  .footercontact .ftcontact1 h2 {
    color: ${({ theme }) => theme.colors.backgroundBlue}; 
    font-size:${({ theme }) => theme.fontSize.headerfontSizeM};
    border-top: 3px solid #FFC000;
    border-bottom: 3px solid #FFC000;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
  .footercontact.ftcontact2 {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: block;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch; 
  }   
  
  .ftcontact2 .ftcontact2a { 
    width: 49%;
    height: auto;
    display:inline-block;
    overflow: hidden; 
  }
  .ftcontact2a1{
    position: relative;
   display: flex;
    margin: 2px;
    width:fit-content;
    height:fit-content;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;  
  }
  .ftcontact2a2{
    float: right;
  }
  .ftcontact2 .ftcontact2a1  li { 
    font-size: 30px;
    color:${({ theme }) => theme.colors.backgroundBlue};
  }
  
  .ftcontact2 .ftcontact2a1 span {
    font-family: "Segoe UI", "Open Sans", "Helvetica Neue", sans-serif; 
    margin: 30px; 
    font-weight: 500; 
    font-size:${({ theme }) => theme.fontSize.headerfontSizeL};
  } 
  @media screen and (max-width: 700px) { 
    .ftcontact2 .ftcontact2a {
      width: 100%;
      float: left; 
      display: flex;
    } 
  };
  `;
  return (
    <Wrapper>
      <div className="footercontact">
        <div className="ftcontact1">
          <h2>Contact Us</h2>
        </div>
        <div className="ftcontact2">
          <div className="ftcontact2a">
            <div className="ftcontact2a1">
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="28"  fill="rgb(0, 101, 153)" viewBox="0 0 512 512"><path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"/></svg>
 
              </li>
              <span> CENTRAL PUBLIC SCHOOL,<br /> Ghusia Kalan, Bikramganj, Rohtas,<br /> Bihar, 800212</span>
            </div>
          </div>
          <div className="ftcontact2a">
            <div className="ftcontact2a1 ftcontact2a2 ">
              <li style={{ transform: "rotate(-25deg);" }}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="28"  fill="rgb(0, 101, 153)" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
              </li>
              <span>+91 7254973847<br /><br />+91 9783738645</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const FooterBottom = () => {
  const Wrapper = styled.section`
  .footercontact {
    margin-top:10px; 
    width: 100%;
    overflow: hidden;  
  }
  .footercontact .ftcontact3 {
    position:fixed; 
    display: inline-block;
    width: 100%; 
    bottom:0;
    background-color:${({ theme }) => theme.colors.backgroundYellow};
  } 
  .ftcontact3 span {
    color: rgb(243, 243, 243);
    padding:6px; 
    font-size:${({ theme }) => theme.fontSize.headerfontSizeM};
    display: flex;  
    justify-content: center; 
  }
  `;
  return (
    <Wrapper>
      <div className="footercontact">
        <div className="ftcontact3" >
          <span>© Copyright 2021-2022 / Central public school</span>
        </div>
      </div>
    </Wrapper>
  );
};