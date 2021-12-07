'use strict';

const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

/**
 * User Schema
 */
 let DrugsSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
    },
    released:{
      type:String,
      require: true,
      trim:true
    },
    diseases:[{
        type: String
    }],
    created: {
      type: Date,
      default: Date.now
    }
  });
  

 DrugsSchema.index({ 'name': 1 , 'diseases': 1});
  
 module.exports = mongoose.model('Drugs', DrugsSchema);
