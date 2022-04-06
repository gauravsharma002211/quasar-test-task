const mutations = {
    SET_USERS: (state, payload) => {
        let users = state.users;
        let foundIndex = users.findIndex(x => x.id == payload.id);
        if(!foundIndex)
        {
            users.push(payload);
        }
        else
        {
            users[foundIndex] = payload;
        }

        state.users = users;
    },
    LOGIN_USER:(state,index) => {   
        state.loginUser = state.users[index];
        localStorage.setItem('user',state.loginUser.id);
    },
    REMOVE_CHILD:(state,id) => {
        state.children = state.children.filter(data => data.id !== id);
    },
    ADD_CHILDREN:(state , payload) => {
       let childData = state.children;
       payload.parent_id = state.users[0].id;
       childData.push(payload);
       state.children = childData;
   
    },
    LOG_OUT_USER:(state)=>{
        localStorage.removeItem('user');
        state.loginUser = null;
       
    }
  };
export default mutations;
