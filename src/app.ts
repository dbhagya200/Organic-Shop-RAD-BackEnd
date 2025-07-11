import express, {Express,Request,Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from "cors";

// 1.initialize the express app
let app:Express = express();

//2. Define the middlewares
// Instruct to parse the request
// payload data to be converted to JSON format

app.use(express.json()); //middleware
const allowedOrigins = ["http://localhost:5173"]; // Replace with your allowed origins
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean ) => void) => {
        if (!origin||allowedOrigins.includes(origin)){
            //postman eken en req
            callback(null, true);
        }else{
            callback(new Error("Not allowed by CORS"));
        }
    }
}
/*app.use(cors()); // Enable/Allow CORS anyone can*/
app.use("/api/products",productRoutes);


/*
app.get('/',(req:Request,res:Response)=>{
    console.log(req.body);
    res.send('Hello World from Typescript');
});
*/



export default app;