const initialData={
    list: []
}

const History_reducer =(state=initialData,action) =>{
    console.log('reducer History data',action?.payload?.data);
    switch(action.type){
        case"HISTORY_VIDEO":

     
        return{
            ...state,
          
            list:[
                
                ...state.list,{
                    list:action?.payload.data
                }
            ]
     }
     case"DELETE_HISTORY_VIDEO":
     const upDate=state.list.filter((elem)=> 
     elem.list?.id !== action.payload.data.list.id
    )
   
     console.log("updated",upDate)
     return{
         ...state,
         list:upDate
         
  }
  case"CLEAR_HISTORY":
  return{
      ...state,
      list:[]
      
}
 

      default:return state;

    }

};


export default History_reducer;