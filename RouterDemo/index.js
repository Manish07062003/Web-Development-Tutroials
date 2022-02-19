const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogsRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');



// we are prefixing the shelter routes
// only requests to /shelters/* will be sent to shelterRoutes
app.use('/shelters', shelterRoutes);

// only requests to /dogs/* will be sent to dogsRoutes
app.use('/dogs', dogsRoutes);
app.use('/admin', adminRoutes);


app.listen(3000, () => {
    console.log("Listening on the port 3000");
})