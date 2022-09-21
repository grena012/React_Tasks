export const addVideo = (data) => {
        console.log('data from action',data);
    return (dispatch) => {
        dispatch({
            type: "ADD_VIDEO",
            payload: {
                data: data
            }
        })
    }
}
export const historyVideo = (data) => {
    console.log('History',data);
return (dispatch) => {
    dispatch({
        type: "HISTORY_VIDEO",
        payload: {
            data: data
        }
    })
}
}
export const deleteVideo = (data) => {
    console.log('data from delete action',data);
return (dispatch) => {
    dispatch({
        type: "DELETE_VIDEO",
        payload: {
            data: data
        }
    })
}
}
export const deleteHistoryVideo = (data) => {
    console.log('delete data from history action',data);
return (dispatch) => {
    dispatch({
        type: "DELETE_HISTORY_VIDEO",
        payload: {
            data: data
        }
    })
}
}
export const likeVideo = (data) => {
    console.log('like',data);
return (dispatch) => {
    dispatch({
        type: "LIKE_VIDEO",
        payload: {
            data: data
        }
    })
}
}
export const removeLike = (data) => {
    console.log('dislike action',data);
return (dispatch) => {
    dispatch({
        type: "REMOVE_LIKE",
        payload: {
            data: data
        }
    })
}
}
export const removeLikeVideos = (data) => {
    console.log('dislike action',data);
return (dispatch) => {
    dispatch({
        type: "REMOVE_LIKE_VIDEOS",
        payload: {
            data: data
        }
    })
}
}
export const clearHistory = (data) => {
    // console.log('dislike action',data);
return (dispatch) => {
    dispatch({
        type: "CLEAR_HISTORY",
        payload: {
            data: data
        }
    })
}
}
export const removeWatchLater = (data) => {
    // console.log('dislike action',data);
return (dispatch) => {
    dispatch({
        type: "REMOVE_WATCHLATER",
        payload: {
            data: data
        }
    })
}
}



