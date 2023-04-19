import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
   
*{
  list-style: none;
  text-decoration: none; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 0.5px;
 }

 html {
  font-size: 62.5%;
  scroll-behavior: smooth;  
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  overflow-x: hidden;
  text-decoration: none;
 }

 body {
    overflow-x: hidden; 
    scrollbar-width: thin;
  }
  *::-webkit-scrollbar {
        width: 15px;   
    } 
    *::-webkit-scrollbar-thumb { 
        border-radius: 20px;  
         background:#e9ecef; 
    }
a {
  text-decoration: none;
};
@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

      html{
        font-size: 60%;
      }
      .grid{
        gap: 3.2rem;
      } 
      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
};
`;
