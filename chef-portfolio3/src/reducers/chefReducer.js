const initialState = {
    user: {
        username: '',
        password: '',
        location: '', 
    },

}

export const chefReducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
}