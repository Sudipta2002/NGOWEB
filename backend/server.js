const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./Config/db');
const ngoUserRoutes = require('./routes/ngoUserRoutes');
const clientUserRoute = require('./routes/clientUserRoute');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();
connectDB();
const app = express();
app.use(express.json()); //to accept json data


app.use('/api/ngouser', ngoUserRoutes);
app.use('/api/clientuser', clientUserRoute);
//error handling
////----------------deployment------------------////
const __dirname1 = path.resolve();
if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname1, '/frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
    });
} else {
    app.get('/', (req, res) => {
        res.send("APP is running ");
    })
}
////////-------end-deployment-------------/////////
//middlewares
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})