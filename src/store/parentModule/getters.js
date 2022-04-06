const getters = {
    loginUser: (state) => {
        return null
    },
    allChildrenDetails:(state)=> {
      const getChild = state.children.filter((element)=>{
        return element.parent_id === parent_id;
    });
    return getChild;
    },
    childData:(state) => {
      return state.children
    },

    allClasses:(state) => {
      return state.classes
    }
  };
export default getters;
