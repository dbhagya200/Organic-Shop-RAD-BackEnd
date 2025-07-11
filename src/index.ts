import app from "./app";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const port = process.env.PORT || 3000;
// Instructs the express app to
// listen on port 3000
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
});




