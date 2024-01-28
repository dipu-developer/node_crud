import express from 'express' //es 6 version0
const app = express();
import { join } from "path";
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"
import connectDB from './db/connectdb.js';
import web from './routes/web.js';

//connect database
connectDB(DATABASE_URL);

//Default midleware to handle the form data
app.use(express.urlencoded({extended:false}))

//Define static folder
app.use(express.static(join(process.cwd(),"public")))
app.use('/edit',express.static(join(process.cwd(),"public")))

//Enable the ejs file
app.set('view engine','ejs')
// Render Home page
app.use('/',web)

app.listen(port, () => {
  console.log(`Server is lising in http:localhost:${port}`);
});

