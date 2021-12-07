
const seedDrugs = require('./seedDrugs');

exports.seeddb = async()=>{
    try {
               
        await seedDrugs();
          
    } catch (error) {
        console.log('Seeding Process failed');
        process.exit();
    }         
};