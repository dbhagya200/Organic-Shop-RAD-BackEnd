import {Router} from "express";
import {getAllContacts, saveContact} from "../controllers/contact.controller";

const contactRouter: Router = Router();

contactRouter.get("/all",getAllContacts);
contactRouter.post("/save",saveContact);


export default contactRouter