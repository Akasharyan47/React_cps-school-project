import React, {  useContext, useReducer, useEffect } from "react";
import reducer from "./reducer"; 

  const AppContext = React.createContext();
 
  //  const LoginApi = "http://127.0.0.1:5000/login";

  const AnnouncementApi = "https://nsch6pq5cd.execute-api.ap-south-1.amazonaws.com/dev/notification-details";
  const teacherAPI = "https://nsch6pq5cd.execute-api.ap-south-1.amazonaws.com/dev/teachers-detail";
  const BannerAPI = "https://nsch6pq5cd.execute-api.ap-south-1.amazonaws.com/dev/banner-images";
  const intialState = {
  bannerImages: [],
  notificationDetail: [],
  teachersDetail: [],
  } 

 
// login   

const loginEntry =  async (Login_info) => {  
    fetch('http://127.0.0.1:5000/login', {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(Login_info)
    })
    .then((response) => response.json()) 
    // .then((response) => {
    //   if (response.status == "success") { 
    //      const status = response.status;
    //      const Name = response.user_name;
		// 	  localStorage.setItem('CPS_user', JSON.stringify({login:true,Name,status}));  
    //      alert("Successful Login");
    //      window.open('./StudentDetails', '_blank', 'noopener,noreferrer');
    //   }
    //   else {
    //    alert("invaled pass");
    //   } 
};

 //==============================
//  const [ value, setValue] = useState();
const stlist = ({Sd}) =>{
   console.log(Sd) 
  //  setValue(Sd)
}
// console.log(value)
 
const AppProvider = ({ children }) => {   
const [state, dispatch] = useReducer(reducer, intialState);  
///````````````````````````````````````````````````````````````
 

  const getTeacher = async (url) => {
    dispatch({ type: "SET_LOADING..." });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "Teacher_Detail",
        payload: {
          teachersDetail: data.teachersDetail
        }
      });
    } catch (error) {
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getTeacher(teacherAPI);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // End teacher api data ------


  // Annousmant api get 
  const getAnnouncement = async (url) => {
    dispatch({ type: "SET_LOADING..." });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "Announcement_Detail",
        payload: {
          notificationDetail: data.notificationDetail
        }
      });
    } catch (error) {
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getAnnouncement(AnnouncementApi);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  // end annousnment api 



  // api banner api  
  const getbannerImage = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json(); 
    dispatch({
      type: "BANNER_IMAGES",
      payload: {
        bannerImages: data.bannerImages
      }
    });
  };
  useEffect(() => {
    getbannerImage(BannerAPI);
  }, []);

  // end 


  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, loginEntry,stlist};
