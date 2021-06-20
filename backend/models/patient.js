'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var PatientSchema = schema({
    nombre: String,
    apellido: String
});

// export model

module.exports = mongoose.model('Patient', PatientSchema);