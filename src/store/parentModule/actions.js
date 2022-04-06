const actions = {
    registerUser: ({ commit }, payload) => {
        if(payload)
        {
            payload.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
            commit('SET_USERS',payload);
            
            return {status:true,statusCode:201,message:'Registration Successfull, Please do Login'};
           
        }
        return {status:false,statusCode:500,message:'Registration Unsuccessfull, Please try later'};
    },
    loginUser: ({commit, state},payload) => {
        if(payload)
        {
            let users = state.users;
            let foundIndex = users.findIndex(x => x.email == payload.email && x.password == payload.password);
            if(foundIndex == undefined || foundIndex == null)
            {
                return {status:false,statusCode:401,message:'Login Unsuccessfull, Invalid Credentials'};
            }   
            else
            {
                commit('LOGIN_USER',foundIndex);
                return {status:true,statusCode:201,message:'Login Successfull'};
            }
            
        }
    },
    removeChildData: ({commit } , id ) => {
        commit('REMOVE_CHILD', id)
    },
    addChildrenData:({commit,state} , payload) => {
        payload.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
        commit('ADD_CHILDREN' , payload)
    },
     getClassStudentList: async ({ state },ids) => {
        if(ids.length)
        {
            let studentData = await state.children.filter(element =>{
                return ids.includes(element.id);
            })
            
            return studentData;
        }
        else
        {
            return [];
        }
    },
    logOutUser: ({commit})=>{
        commit('LOG_OUT_USER');
       
    },
    getParentChildList:({state})=>{
        let parentID = window.localStorage.getItem('user');

        const parentUserdata = state.children.filter(element => element.parent_id = parentID);

        return parentUserdata;
    }

  };
export default actions;
