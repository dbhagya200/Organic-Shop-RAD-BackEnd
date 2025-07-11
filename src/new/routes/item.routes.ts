import { Router } from "express";
import {
    deleteItem,
    getAllItems, getItemsById, saveItem, updateItem

} from "../controllers/item.controller";

const itemRouter :Router = Router();

itemRouter.get("/getAll",getAllItems);
itemRouter.get("/getById/:id",getItemsById);
itemRouter.post("/save",saveItem);
itemRouter.put("/update/:id",updateItem);
itemRouter.delete("/delete/:id",deleteItem);


export default itemRouter;