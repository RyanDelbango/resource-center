import { models, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
    unique: true,
		minLength: 5,
		maxLength: 20,
		match: [/[a-zA-Z0-9_.]+/g, 'Please provide valid username'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
		minlength: 5,
		maxLength: 20,
		match: [/^[a-z0-9]+$/i, 'Please provide valid password'],
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    {userId: this._id},
    process.env.JWT_SECRET as string,
    {expiresIn: process.env.JWT_LIFETIME},
  );
};

UserSchema.methods.comparePassword = async function (comparison: string) {
  const isMatch = await bcrypt.compare(comparison, this.password);
  return isMatch;
};

const UserModel = models.User || model('User', UserSchema);

export default UserModel;