const mongoose = require('mongoose');

const brandSchema = mongoose.Schema ({
  name: String,
  description: String,
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;