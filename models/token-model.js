import {Schema, model} from 'mongoose';

const tokenScheme = new Schema ({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  refreshToken: {type: String, require: true},
})

export default model('user', tokenScheme); 