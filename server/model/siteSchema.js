const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  city: {
    type: String,
  },
  AssignedElectritian: {
    type: Array,
  },
  InstallationDate: {
    type: Date,
  },
  grievance: {
    type: Boolean,
  },
});

const Site = mongoose.model("SITE", siteSchema);
module.exports = Site;
