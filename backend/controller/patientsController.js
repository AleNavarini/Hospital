'use strict'

var Patient = require('../models/patient');
var controller = {
    // Home method
    home: function(req, res){
        return res.status(200).send({
            message: "Home page Ok"
        });
    },
    getPatient: (req, res) => {
        let id  = req.params.id;

        let patient = Patient.findById(id, (err, patient) => {
            if (err) {
                return res.status(500).send({
                    message: `Error finding the patient`
                });
            }
            if (!patient){
                return res.status(404).send({
                    message: "Patient does not exist" 
                });
            }
            return res.status(200).send({
                patient: patient,
                message: "Patient found succesfully"
            });
        });
    },
    getPatients: (req, res) => {
        let patients = Patient.find({}).exec((err, patientsFound) => {
            if (err) {
                return res.status(500).send({
                    message: "Error finding patients"
                });
            }
            if (!patientsFound){
                return res.status(404).send({
                    message: "No patients found" 
                });
            }
            return res.status(200).send({
                patients: patientsFound,
                message: "Patients retrieved succesfully"
            })
        });

    },
    createPatient: (req, res) => {
        let patient = new Patient();
        let params = req.body;

        patient.nombre = params.nombre;
        patient.apellido = params.apellido;

        patient.save((err, patientStored) => {
            if (err) {
                return res.status(500).send({
                    message: `Error saving patient ${err}`
                });
            }
            if (!patient){
                return res.status(404).send({
                    message: "Could not save patient" 
                });
            }
            return res.status(200).send({
                patient: patientStored,
                params: params,
                message: "Patient saved succesfully!"
            })
        })
    },


};

module.exports = controller;