const express = require("express");
const PORT = 4000;
const app = express();
const peopleRoutes = require("./routes/peopleRoutes");
const carsRoutes = require("./routes/carsRoutes")


app.use("/people", peopleRoutes);

app.use("/cars", carsRoutes)



app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})