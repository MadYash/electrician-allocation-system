const mongoose = require("mongoose");
const electricianSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  zone: {
    type: Array,
  },
  grievanceElectrician: {
    type: Boolean,
  },
});

const Electrician = mongoose.model("ELECTRICIAN", electricianSchema);
module.exports = Electrician;
