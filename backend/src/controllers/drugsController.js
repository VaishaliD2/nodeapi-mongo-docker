'use strict';

const mongoose = require('mongoose');
const messages = require('../constants/messages');


const  Drugs = require('../models/drugs');

exports.find = async(req,res)=>{
    try {
        let searchTerm = req.params.searchTerm;
        let pageSize;
        let skip;
        if(!searchTerm){
            return res.status(400).send('SearchTerm Param is not specified');
        }
        if(req.query){
          pageSize = req.query.pageSize;
          skip = req.query.skip;
        }

        if(!pageSize){
            pageSize = 50 // default pageSize
        }
        if(!skip){
            skip = 0 // default skip count
        }
        let re = new RegExp(searchTerm , 'i');
        //searchTerm = `/${searchTerm}/`;
        let drugs = await Drugs.find( 
             {
             $or:[{
             name: {$regex : re}
             },{
             diseases : {$regex : re }
             }]                
           },
           null,
           { skip: parseInt(skip), limit : parseInt(pageSize) }
        );
       return res.status(200).send(drugs);   

    } catch (error) {
        console.log(error);
        return res.status(500).send( messages.errorMessage()); 
    }
}