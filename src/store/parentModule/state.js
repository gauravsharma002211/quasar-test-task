export default function () {
  return {
        users:[
            {
              email: "admin@gmail.com",
              id: "l1k1sqbmb078ewubzej",
              password: "admin",
              username: "admin"
            }
        ],
        loginUser:{},
        children:[
          {
            id:'ldef45tder4ewubzej',
            name:'Leo',
            age:'23',
            parent_id:'l1k1sqbmb078ewubzej'
          }
        ],
        classes:[
            {id:1, name:'class 1',description:'Description for class-1', seats:4, registeredStud:['ldef45tder4ewubzej']},
            {id:2, name:'class 2',description:'Description for class-2', seats:2, registeredStud:[]},
            {id:3, name:'class 3',description:'Description for class-3', seats:4, registeredStud:[]},
            {id:4, name:'class 4',description:'Description for class-4', seats:3, registeredStud:[]},
            {id:5, name:'class 5',description:'Description for class-5', seats:1, registeredStud:[]},
        ],
  }
}
