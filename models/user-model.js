import {Schema, model} from 'mongoose';

const userScheme = new Schema ({
  email: {type: String, unique: true, require: true},
  password: {type: String, require: true},
  isActivated: {type: Boolean, default: true},
  activationLink: {type: String}
})

export default model('user', userScheme); 
