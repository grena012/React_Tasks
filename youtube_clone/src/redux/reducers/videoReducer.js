const initialData={
    list: []
}

const Video_reducer =(state=initialData,action) =>{
    console.log('watch later reducer data',action?.payload?.data);
    switch(action.type){
        case"ADD_VIDEO":

     
        return{
            ...state,
          
            list:[
                
                ...state.list,{
                    list:action?.payload.data
                }
            ]
     }
     case"DELETE_VIDEO":
     const upDate=state.list.filter((elem)=> 
     elem?.list?.id !== action?.payload?.data?.list?.id
    )
   
     console.log("updated2",upDate)
     return{
         ...state,
         list:upDate
         
  }
  case"REMOVE_WATCHLATER":
  return{
      ...state,
      list:[]
      
}
    

      default:return state;

    }

};


export default Video_reducer;