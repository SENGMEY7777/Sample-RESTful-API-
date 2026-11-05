const express = require('express');
const app = express();
const userRoute = require('./routes/userRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Sample RESTful API is running successfully'
    });
});

app.use(userRoute);

const PORT = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
