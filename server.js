const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();  //load .env
const port = process.env.PORT || 5000;

//allow json parsing of client requests
app.use(express.json());


//For any url that has this "/api/contacts" uri, use routes defined in contactRoutes
//This is same as specifying request mapping uri at the top of controller and then
//annotating controller methods with get , put etc
app.use("/api/contacts",require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
