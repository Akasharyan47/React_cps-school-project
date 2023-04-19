import React from "react";
import styled from "styled-components";
import { FooterBottom } from "./components/Footer";
import Location from "./styles/png/location.png";
import Contact from "./styles/png/contact3.png";
import Email from "./styles/png/email3.png";

const About = () => {
  const Aboutt = styled.section`
    @media only screen and (max-width: 1500px) {
      .contact_pg {
        padding-bottom: 0px;
      }
    }
    .inrpagbdy_sec {
      padding: 40px 0 70px;
    }
    @media only screen and (max-width: 1500px) {
      .inrpagbdy_sec .container {
        width: 90%;
      }
    }

    .comn_sec .container {
      width: 90%;
      height: auto;
    }

    @media (min-width: 992px) {
      .container {
        width: 970px;
      }
    }

    @media (min-width: 768px) {
      .container {
        width: 750px;
      }
    }
    .container {
      margin-right: auto;
      margin-left: auto;
      height: auto;
    }

    .inrpagbdy_sec h2,
    .knim h2 {
      position: relative;
      display: inline-block;
    }

    .inrpagbdy_sec h2 {
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.headingfontSize};
      color: ${({ theme }) => theme.colors.headerTextColorblack};
    }
    .abut_pg p {
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      font-family: "Work Sans", sans-serif;
      color: ${({ theme }) => theme.colors.headerTextColor};
    }
    p {
      text-align: justify !important;
    }
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      letter-spacing: 0.3px;
    }
    .inrpagbdy_sec h2:before,
    .knim h2:before {
      position: absolute;
      content: "";
      left: 0;
      bottom: -12px;
      height: 3px;
      width: 80px;
    }
    @media only screen and (max-width: 1500px) {
      .abut_pg .row {
        margin-top: 30px;
      }
    }
    .abut_pg .row {
      margin-top: 50px;
    }
    @media (min-width: 992px) {
      .col-md-6 {
        height: auto;
        float: left;
        width: 100%;
      }
    }
    .col-md-6 {
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
    }
    @media (min-width: 992px) {
      .col-md-6 {
        width: 50%;
      }
    }
    .cont_adrs_cel {
      float: none;
      overflow: hidden;
      margin-bottom: 30px;
      padding-right: 10px;
    }
    .contact_pg .cont_adrs_cel p {
      margin-bottom: 6px;
    }
    .contact_pg .row p {
      padding-left: 0px;
    }
    @media only screen and (max-width: 520px) {
      .abut_pg .row p {
        padding-left: 40px;
      }
    }
    .abut_pg .row p {
      padding-left: 50px;
    }
    .cont_adrs_cel p {
      font-family: "Work Sans", sans-serif;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      color: ${({ theme }) => theme.colors.headerTextColor};
      line-height: 20px;
      margin-bottom: 0px;
      float: left;
      width: 100%;
    }
    .cont_adrs_cel p strong {
      color: #005f8e;
    }
    /*   send msg   */

    .contact_pg h4 {
      float: right;
      width: 90%;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
      display: flex;
      margin-bottom: 20px;
    }
    .contact_pg form {
      ${"" /* width: 80%; */}
      margin-top: 3rem;
      height: auto;
    }
    .contact_pg form .nput_fild,
    .contact_pg form select {
      border: 1px solid #e6dddd;
      box-sizing: border-box;
      height: 40px;
      box-shadow: 0px 16px 17px rgb(210 210 210 / 25%);
      font-weight: 300;
      margin-bottom: 15px;
    }
    input {
      line-height: normal;
    }
    input[type="text" i] {
      padding: 1px 2px;
    }
    textarea.form-control {
      height: auto;
    }
    .contact_pg .form-control {
      float: right;
      display: block;
      width: 90%;
      padding: 2px 12px;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
      -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
      -o-transition: border-color ease-in-out 0.15s,
        box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    }
    textarea {
      overflow: auto;
    }
    .contact_pg .submit_btn {
      width: 110px;
      transition: 0.6s;
      float: right;
      height: 35px;
      background: ${({ theme }) => theme.colors.backgroundBlue};
      border-radius: 8px;
      border: 0px;
      letter-spacing: 1px;
      color: #fff;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      margin-bottom: 50px;
      margin-top: 10px;
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
      -webkit-appearance: button;
      cursor: pointer;
    }
    /*   socal media  */

    .flow_socl {
      float: none;
      overflow: hidden;
      padding: 20px 0;
    }
    .cont_adrs_cel {
      float: none;
      overflow: hidden;
      margin-bottom: 30px;
      padding-right: 10px;
    }
    @media (max-width: 767px) {
      .cont_adrs_cel h5 {
        font-size: 18px;
      }
    }
    @media (max-width: 991px) {
      .cont_adrs_cel h5 {
        line-height: 36px;
        font-size: 20px;
      }
    }
    @media only screen and (max-width: 520px) {
      .cont_adrs_cel h5 {
        margin-bottom: 0px;
      }
    }
    h5 {
      display: block;
      font-size: 0.83em;
      margin-block-start: 1.67em;
      margin-block-end: 1.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    .flow_socl ul {
      margin: 0px 0px 0px 15px;
      padding: 0px;
      float: left;
    }
    div,
    ul,
    li,
    p,
    form,
    h5,
    h6,
    h1,
    h2,
    p {
      margin: 0;
      padding: 0;
    }
    ol,
    ul {
      margin-top: 0;
      margin-bottom: 10px;
    }
    ul {
      display: block;
      list-style-type: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    }
    .flow_socl ul li {
      width: 36px;
      margin: 2px 0px;
    }
    .carousel-inner > .item > a > img,
    .carousel-inner > .item > img,
    .img-responsive,
    .thumbnail a > img,
    .thumbnail > img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    img {
      vertical-align: middle;
    }
    img {
      border: 0;
    }
    .flow_socl ul li {
      list-style: none;
      display: inline-block;
      vertical-align: top;
      margin: 4px;
      padding: 0px;
    }
    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }
    ul {
      list-style-type: disc;
    }

    .flow_socl ul li a {
      display: block;
    }
    a {
      text-decoration: none !important;
      color: #337ab7;
      text-decoration: none;
      background-color: transparent;
    }
    a:-webkit-any-link {
      cursor: pointer;
      text-decoration: underline;
    }
    ${"" /* address */}

    @media only screen and (max-width: 520px) {
      .cont_adrs_cel h5 .icn_crcl {
        width: 50px;
        height: 50px;
        padding: 2px;
      }
    }
    .cont_adrs_cel h5 .icn_crcl {
      width: 40px;
      height: 40px;
      display: flex;
      text-align: center;
      float: left;
      margin-right: 8px;
    }
    .cont_adrs_cel h5 .icn_crcl img {
      width: 100%;
    }
    .cont_adrs_cel h5 .icn_crcl img {
      vertical-align: middle;
    }
    img {
      border: 0;
    }
    .cont_adrs_cel h5 {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
      margin-bottom: 20px;
      color: rgb(10, 10, 10);
      display: flex;
      align-items: center;
    }
  `;

  return (
    <>
      <Aboutt>
        <div className="comn_sec inrpagbdy_sec abut_pg contact_pg">
          <div className="container">
            <div className="cont_adrs_cel  about1">
              <h5>About</h5>
              <p>
                Welcome to Central Public School.We are operating since 2006. We
                are a Hindi/English medium school with having different
                programs, starting from Nursery. Our mission is to provide a
                safe, disciplined learning environment that empowers all
                students to develop their full potential. We have the
                best-experienced teachers with having immense skills. With our
                program, the children are exposed to a great amount of learning.
                The blended techniques create a unique educational package where
                children can grow to their fullest potential. We offer
                attractive environment, practical, stimulating materials that
                meet the needs of each child. The teacher gives guidance and
                encouragement accordingly.
                <br />
                <br />I encourage you to explore our website to learn more about
                all that The Central Public School has to offer. I also invite
                you to visit us in person; please contact our Admission Office
                to know more about the admission process. We hope to see you
                soon!.
              </p>
            </div>
            <h2>Contact with us</h2>
            <br />
            &nbsp;
            <p> Please send the mail, and we will get back to you. </p>
            <div className="row">
              <div className="col-md-6">
                <div className="cont_adrs_cel">
                  <h5>
                    {" "}
                    <span className="icn_crcl">
                      <img src={Location} alt="" />
                    </span>{" "}
                    Our Address
                  </h5>

                  <p>
                    Central Public School, Ghusia kalan, P.S - Bikramganj,
                    District - Rohtas, State - Bihar, Pin - 802212 Near:
                    Panitanki ( Ghusia kalan )
                  </p>
                  <p> Near: Panitanki ( Ghusia kalan ).</p>
                </div>

                <div className="cont_adrs_cel">
                  <h5>
                    {" "}
                    <span className="icn_crcl">
                      <img src={Contact} alt="" />
                    </span>
                    Admission Helpline
                  </h5>
                  <p> Call: +91 4180 4180 42</p>
                </div>
                <div className="cont_adrs_cel">
                  <h5>
                    <span className="icn_crcl">
                      <img src={Email} alt="" />
                    </span>
                    Email Us
                  </h5>
                  <p>admin.cpsschoolghu.in</p>
                </div>
              </div>
              <div className="col-md-6  ">
                <h4 className="col-mh4">Send Us a Message</h4>
                <form enctype="multipart/form-data">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control nput_fild"
                      id="name"
                      name="name"
                      placeholder="Name*"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control nput_fild"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control nput_fild"
                      name="phone"
                      id="phone"
                      pattern="\d{10}"
                      placeholder="Phone*"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control nput_fild"
                      id="city"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control nput_fild"
                      id="state"
                      name="state"
                      placeholder="State"
                    />
                  </div>

                  <textarea
                    className="form-control nput_fild2"
                    rows="3"
                    placeholder="Comments"
                    name="comment"
                    id="comment"
                    required="required"
                  ></textarea>

                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                      className="btn btn-default submit_btn"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Aboutt>
      <FooterBottom />
    </>
  );
};

export default About;
