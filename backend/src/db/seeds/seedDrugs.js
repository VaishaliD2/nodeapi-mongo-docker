const drugsData = require('./seedData/drugs');
const  Drugs =require('../../models/drugs');

module.exports = async function () {
    for(let i= 0; i< drugsData.length; i++){
        const drug = drugsData[i];
        const updates = {
            $set: {}
          };
      
          Object.keys(drug).forEach(key => {
            updates.$set[key] = drug[key];
          });
      
        await Drugs.findOneAndUpdate({'name': drug.name}, updates,{upsert: true});
    }
}