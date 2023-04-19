import styled from "styled-components";
  import React  from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
 
const images = [ 
   "https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg",
   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const AcademicCard = () => {
  const Main = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .Main-GAlleries{
    width: 100%;  
  justify-content:center;
  align-items:center;
  display:flex; 
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;  
  } 
#main-slider-container{
  width: 94%;  
  justify-content:center;
  align-items:center;
  display:flex; 
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
} 
#slider{
  width: 90%;
  
  height:auto;   
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth; 
} 
#slider::-webkit-scrollbar{
  display: none;
}

#main-slider-container {
  position: relative;
  display: flex;
  align-items: center;
}  
.slider-card-image{
  width: 100%;
  height:100%; 
  display:flex;
  
  img{
    background-size:cover; 
    width:100%;
    height:100%;
    display:flex;
  }
}

.slider-icon.left, .slider-icon.right { 
  position: absolute; 
  background:none;
  border-radius: 0px;
  opacity: 0.5;   
  cursor: pointer;
  box-shadow:0px   #000;
-webkit-box-shadow:0px #000;
-moz-box-shadow:  0px  #000;
}

.slider-icon.left{
  left: 0; 
}

.slider-icon.right{
  right: 0;
}

.slider-icon.left:hover, .slider-icon.right:hover{
  opacity: 1;
}  
.slider-card{
  width: 250px;
  height: 160px;
  background: white;
  border-radius: 0px;
  border: 1px solid rgb(206, 206, 206)  ;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;  
  cursor: pointer;
} 
@media (max-width: ${({ theme }) => theme.media.mobile}) {
.slider-card{
  width: 170px;
  height: 120px;
}
} 
`; 

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  return (
    <>
      <Main>
        <div className="Main-GAlleries">
          <div id="main-slider-container">
            <MdChevronLeft size={50} className="slider-icon left" onClick={slideLeft} />
            <div id="slider">
              {images.map((slide, index) => {
                return (
                  <div className="slider-card">
                    <div className="slider-card-image" style={{ 'backgroundImage': `url(${images})`, backgroundSize: 'cover' }} >
                    </div>
                  </div>
                )
              })
              }
            </div>
            <MdChevronRight size={50} className="slider-icon right" onClick={slideRight} />
          </div>  
        </div> 
      </Main> 

      {/* <Section>
        <h1>ekrnmo </h1>
      </Section> */}
    
      {/* <div className="container d-block clearfix"> 
        <button type="button" className="btn btn-success btn-lg float-right" onClick={() => setActive("viewAll")}  >Primary</button>
        </div>

        <div className="col-md-4 px-0">
        <img src="images/food1.jpg" className="img-fluid" />

        {active === "viewAll" && <Event /> }

       </div> */}
       </>
  )
}; 

export default AcademicCard;