// business logic

const { response } = require("../app");

const userController ={
  register : async(request, response)=>{
    response.send("Register a new user")
  }
}

module.exports=userController;