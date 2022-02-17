
const env = require('dotenv')
env.config()
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');

mongoose.connect(
<<<<<<< HEAD
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xguyy.mongodb.net/ecommerce?retryWrites=true&w=majority`,
=======
    `mongodb+srv://Akhil:<password>@cluster0.xguyy.mongodb.net/ecommerce?retryWrites=true&w=majority`,
>>>>>>> a18dfbc1006ccac7f92eebfc06c5f70ee3d2fb54
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }
).then(() => {
    console.log('Database Connected');
});


env.config();

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
