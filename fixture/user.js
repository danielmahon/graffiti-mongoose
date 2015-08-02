import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number,
    index: true
  },
  mother: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  weight: Number, // to test "floatish" numbers
  createdAt: Date,
  removed: Boolean,
  nums: [Number],
  strings: [String],
  bools: [Boolean],
  dates: [Date],
  sub: {
    foo: String,
    nums: [Number],
    subsub: {
      bar: Number
    }
  }
});

let User = mongoose.model('User', UserSchema);

export default User;
