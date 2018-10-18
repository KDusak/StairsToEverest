const fs = require('fs');
const _ = require('lodash');

const usersDataPath = './data/users.json';

const loadData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(usersDataPath, (err, data) => {
      if (err) {
        reject(err);
      }
      users = JSON.parse(data);
      resolve(users);
    });
  });
};

const saveData = (users) => {
  fs.writeFile(usersDataPath, users, (err) => {
    if (err) {
      console.log('FILE WRITING FAILED : ', err);
    }
  })
};

const getAllUsers = () => {
  return this.loadData();
};

const getUserByLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    loadData().then((users) => {
      const user = _.find(users, {'username': username, 'password': password });
      if (user) {
        resolve({"username": user.username, "email": user.email});
      } else {
        reject('User Not Found');
      }
    }).catch((err)=>{
        throw err;
    });
  });
};

const createNewUser = (user) => {
  return new Promise((resolve, reject) => {
    loadData().then((users) => {
      users.push(user);
      saveData(JSON.stringify(users, null, 2));
      resolve(user);
    }).catch((err) => {
      console.log('errror : ',err);
      reject(err);
    });
  });
};

module.exports.getUserByLogin = getUserByLogin;
module.exports.createNewUser = createNewUser;
