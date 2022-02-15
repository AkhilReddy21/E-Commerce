const express = require('express');
const env = require('dotenv')
const app = express();
const bodyParsers = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

mongoose.connect(
    `mongodb+srv://Akhil:<password>@cluster0.xguyy.mongodb.net/ecommerce?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }
).then(() => {
    console.log('Database Connected');
});

env.config();

app.use(bodyParsers());
app.use('/api',userRoutes);



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
