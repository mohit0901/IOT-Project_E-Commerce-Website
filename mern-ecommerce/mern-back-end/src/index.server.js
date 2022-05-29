const express = require("express");
const env = require("dotenv");
const app = express();
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const path = require('path');
const cors = require('cors');

//environment variable or you can say constants
env.config();

// important step is here, mongodb is downgraded to 2.2.12 or later
mongoose.connect(
    `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-shard-00-00.qiq8w.mongodb.net:27017,cluster0-shard-00-01.qiq8w.mongodb.net:27017,cluster0-shard-00-02.qiq8w.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-14a2go-shard-0&authSource=admin&retryWrites=true&w=majority`,
    // {
    //     // useNewUrlParser: true,
    //     // useUnifiedTopology: true,
    //     useCreateIndex: true
    // }
    ).then(()=>{
        console.log("database connected");
});

app.use(cors());
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')));
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
