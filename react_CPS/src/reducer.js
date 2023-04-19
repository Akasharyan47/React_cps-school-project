const reducer = (state, action) => {

  switch (action.type) {
    case "SET_LOADING...": {
      return {
        ...state,
        isloading: true,
      }
    }

    case "Teacher_Detail":
      return {
        ...state,
        isloading: false,
        teachersDetail: action.payload.teachersDetail,
      };
  }

  if (action.type === "Announcement_Detail") {
    return {
      ...state,
      isloading: false,
      notificationDetail: action.payload.notificationDetail,
      
    };
  }

  if (action.type === "BANNER_IMAGES") {
    return {
      ...state,
      bannerImages: action.payload.bannerImages,
    };
  }; 
  return state;
};
export default reducer;
