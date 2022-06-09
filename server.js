const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const Organization = require('./lib/Organization');

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/api', apiRoutes);  

app.use((req, res) => {
    res.status(400).end();
});

app.listen(PORT, () => {
    console.log(
        gradient.atlas(`Server running on port ${PORT}... You better go catch it @ http://localhost:${PORT}`)
    );
    const org = new Organization()
    org.seedDatabase();
    org.mainMenu();
})