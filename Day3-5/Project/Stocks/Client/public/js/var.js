
/*let isLogin = false;
let firstName = 'Adri';
let info = {isLogin, firstName}

console.log('isLogin:', isLogin);

module.export = {
  info
}


*/


var isLogin = false;
var firstName = 'Adri5';

/*
var isLogin = false;
var firstName = 'Adri5';

exports.getLogin = function() {
  return isLogin;
};

exports.setLogin = function(newLogin) {
  isLogin = newLogin;
};

exports.getName = function() {
  return firstName;
};

exports.setName = function(newName) {
  firstName = newName;
};
*/


let getLogin = function() {
  return isLogin;
};

let setLogin = function(newLogin) {
  isLogin = newLogin;
};

let getName = function() {
  return firstName;
};

let setName = function(newName) {
  firstName = newName;
};

exports = {getLogin, setLogin, getName, setName}

