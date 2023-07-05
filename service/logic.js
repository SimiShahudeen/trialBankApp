const db = require('./db')

register = (acno,psw) => {
  return db.Trial.findOne({ acno }).then(user => {
    if (user) {
      return {
        message: "user already present",
        status: false,
        statusCode: 404
      }
    }
    else{
      newUser =new db.Trial({
        acno:acno,
        psw:psw
      })
      newUser.save()
      return{
        message: "user added successfully",
        status: true,
        statusCode: 200
      }
    }
  })
}
console.log(register());
module.exports = {
  register
}