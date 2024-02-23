const mongoose = require('mongoose');
const cron = require('node-cron');

const MySchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
});

const MyModel = mongoose.model('MyModel', MySchema);

mongoose.connect('mongodb://localhost:27017/mydbase')
  .then(() => {
console.log('Connected to MongoDB');

   
    cron.schedule('*/10 * * * * *', async () => {
      try {
       
        const data = await MyModel.find({});
       
        data.forEach(item => {
          console.log(item);
        });
      } catch (error) {
        console.error('Error querying MongoDB:', error);
      }
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
