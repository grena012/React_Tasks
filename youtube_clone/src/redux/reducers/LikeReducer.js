const initialData={
    list: []
}

const likeReducer =(state=initialData,action) =>{
    console.log('like reducer data',action?.payload?.data);
    switch(action.type){
        case"LIKE_VIDEO":

     
        return{
            ...state,
          
            list:[
                
                ...state.list,{
                    list:action?.payload.data
                }
            ]
     }
     case"REMOVE_LIKE":
     const upDate=state.list.filter((elem)=> 
     elem?.list?.id !== action?.payload?.data?.list?.id
    )
   
     console.log("updated likes",upDate)
     return{
         ...state,
         list:upDate
         
  }
  case"REMOVE_LIKE_VIDEOS":
     return{
         ...state,
         list:[]
    }
    

      default:return state;

    }

};


export default likeReducer;