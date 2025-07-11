import { Request,Response } from "express";
import * as contactService from "../services/contact.service"

export const saveContact =(req:Request,res:Response)=>{
    try {
        const contact = req.body;
        const validateErr = contactService.validateContact(contact);
        if (validateErr) {
            res.status(400).json({error:validateErr});
            return;
        } else {
            const savedContact = contactService.saveContact(contact);
            res.status(201).json(savedContact);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}
export const getAllContacts = (req:Request,res:Response)=>{

}
