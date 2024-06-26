// Import necessary modules and routers
const express = require("express"); // Import Express.js framework
const dotenv = require("dotenv"); // Import dotenv for environment variables
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const alabamas = require("./routers/alabamas");
const alaskas = require("./routers/alaskas");
const arizonas = require("./routers/arizonas");
const arkansass = require("./routers/arkansass");
const californias = require("./routers/californias");
const colorados = require("./routers/colorados");
const connecticuts = require("./routers/connecticuts");
const delawares = require("./routers/delawares");
const districtofcolumbias = require("./routers/districtofcolumbias");
const floridas = require("./routers/floridas");
const georgias = require("./routers/georgias");
const hawaiis = require("./routers/hawaiis");
const idahos = require("./routers/idahos");
const illinoiss = require("./routers/illinoiss");
const indianas = require("./routers/indianas");
const iowas = require("./routers/iowas");
const kansass = require("./routers/kansass");
const kentuckys = require("./routers/kentuckys");
const louisianas = require("./routers/louisianas");
const maines = require("./routers/maines");
const marylands = require("./routers/marylands");
const massachusettss = require("./routers/massachusettss");
const michigans = require("./routers/michigans");
const minnesotas = require("./routers/minnesotas");
const mississippis = require("./routers/mississippis");
const missouris = require("./routers/missouris");
const montanas = require("./routers/montanas");
const nebraskas = require("./routers/nebraskas");
const nevadas = require("./routers/nevadas");
const newhampshires = require("./routers/newhampshires");
const newjerseys = require("./routers/newjerseys");
const newmexicos = require("./routers/newmexicos");
const newyorks = require("./routers/newyorks");
const northcarolinas = require("./routers/northcarolinas");
const northdakotas = require("./routers/northdakotas");
const ohios = require("./routers/ohios");
const oklahomas = require("./routers/oklahomas");
const oregons = require("./routers/oregons");
const pennsylvanias = require("./routers/pennsylvanias");
const rhodeislands = require("./routers/rhodeislands");
const southcarolinas = require("./routers/southcarolinas");
const southdakotas = require("./routers/southdakotas");
const tennessees = require("./routers/tennessees");
const texass = require("./routers/texass");
const utahs = require("./routers/utahs");
const vermonts = require("./routers/vermonts");
const virginias = require("./routers/virginias");
const washingtons = require("./routers/washingtons");
const westvirginias = require("./routers/westvirginias");
const wisconsins = require("./routers/wisconsins");
const wyomings = require("./routers/wyomings");
const customers = require("./routers/customers");
const installers = require("./routers/installers");
const updates = require("./routers/updates");

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app = express(); // Create Express app


// Define the port number, using environment variable PORT or defaulting to 4040
const PORT = process.env.PORT || 4040;

mongoose.connect(process.env.MONGODB); // Connect to MongoDB using the URI from environment variables
const db = mongoose.connection; // Get the default connection to MongoDB
db.on("error", console.error.bind(console, "Connection Error:")); 
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};


const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);



app.get("/status", (request, response) => {
  response.status(418).json({ message: "Service healthy" });
});


app.post("/echo", (request, response) => {
  response.json({ "request.body": request.body });
});





app.use("/alabamas", alabamas);
app.use("/alaskas", alaskas);
app.use("/arizonas", arizonas);
app.use("/arkansass", arkansass);
app.use("/californias", californias);
app.use("/colorados", colorados);
app.use("/connecticuts", connecticuts);
app.use("/delawares", delawares);
app.use("/districtofcolumbias", districtofcolumbias);
app.use("/floridas", floridas);
app.use("/georgias", georgias);
app.use("/hawaiis", hawaiis);
app.use("/idahos", idahos);
app.use("/illinoiss", illinoiss);
app.use("/indianas", indianas);
app.use("/iowas", iowas);
app.use("/kansass", kansass);
app.use("/kentuckys", kentuckys);
app.use("/louisianas", louisianas);
app.use("/maines", maines);
app.use("/marylands", marylands);
app.use("/massachusettss", massachusettss);
app.use("/michigans", michigans);
app.use("/minnesotas", minnesotas);
app.use("/mississippis", mississippis);
app.use("/missouris", missouris);
app.use("/montanas", montanas);
app.use("/nebraskas", nebraskas);
app.use("/nevadas", nevadas);
app.use("/newhampshires", newhampshires);
app.use("/newjerseys", newjerseys);
app.use("/newmexicos", newmexicos);
app.use("/newyorks", newyorks);
app.use("/northcarolinas", northcarolinas);
app.use("/northdakotas", northdakotas);
app.use("/ohios", ohios);
app.use("/oklahomas", oklahomas);
app.use("/oregons", oregons);
app.use("/pennsylvanias", pennsylvanias);
app.use("/rhodeislands", rhodeislands);
app.use("/southcarolinas", southcarolinas);
app.use("/southdakotas", southdakotas);
app.use("/tennessees", tennessees);
app.use("/texass", texass);
app.use("/utahs", utahs);
app.use("/vermonts", vermonts);
app.use("/virginias", virginias);
app.use("/washingtons", washingtons);
app.use("/westvirginias", westvirginias);
app.use("/wisconsins", wisconsins);
app.use("/wyomings", wyomings);
app.use("/customers", customers);
app.use("/installers", installers);
app.use("/updates", updates);



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));