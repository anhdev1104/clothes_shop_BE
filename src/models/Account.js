import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    address: {
      type: String,
      require: true,
      trim: true,
    },
    phonenumber: {
      type: String,
      require: true,
      trim: true,
    },
    role: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);
accountSchema.index({ email: 1, password: 1 });

const Account = mongoose.model('Account', accountSchema);
export default Account;
