const Unauthorized = require('../../error/Unauthorized');
const PassCrypt = require('../../util/PassCrypt');
const Token = require('../../util/token');
const LoginError=  require('./ErrorUser');
const Model = require('../../database/models/user');
const Conflict = require('../../error/conflict');
module.exports = class User {
  constructor() {
    this.passCrypt = new PassCrypt();
    this.token = new Token();
  }

  async newUser(user, passwordIn) {
    const password = await this.passCrypt.crypto(passwordIn);
    const userExist = await Model.findOne({ where: { user } });
    if(userExist) throw new Conflict('User alredy exist!');
    const created = await Model.create({ user, password });
    return created;
  }

  async login(user, inPassword) {
    console.log(`user ${user}`);
    console.log(`password ${inPassword}`);
    LoginError.dadaOkay(user, inPassword);

    const userFound = await Model.findOne({ where: { user } });
    if (!userFound) throw new Unauthorized('Incorrect user or password');

    const { password, id } = userFound;
    const isPasswordValid = await this.passCrypt.checkPassword(inPassword, password);
    if (!isPasswordValid) throw new Unauthorized('Incorrect user or password');

    const token = this.token.create({ id, user });

    return { user: { user, id }, token };
  }
}