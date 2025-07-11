import * as itemService from "../services/item.service";
import {Request,Response} from "express";

export const getAllItems =(req:Request,res:Response)=>{
    try{
        const allItems = itemService.getAllItems();
        res.status(200).json(allItems)
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}

export const getItemsById =(req:Request,res:Response)=>{
    try {
        const itemsById = parseInt(req.params.code);
        if (isNaN(itemsById)){
            res.status(404).json({error:"Invalid product id"});
            return;
        }
        const item = itemService.getItemsById(itemsById);
        if (!item){
            res.status(404).json({error:"No product found with this id"});
            return;
        }
        res.status(200).json(item);
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}

export const saveItem =(req:Request,res:Response)=>{
    try {
        const newItem = req.body;
        const validateErr = itemService.validateItem(newItem);
        if (validateErr){
            res.status(400).json({error:validateErr});
            return;
        }
        const savedItem = itemService.saveItem(newItem);
        res.status(201).json(savedItem);
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}

export const updateItem =(req:Request,res:Response)=>{
    try {
        const code = parseInt(req.params.code);
        if(isNaN(code)){
            res.status(404).json({error:"Invalid product id"});
            return;
        }
        const updatedData = req.body;
        const updatedItem = itemService.updateItem(code,updatedData);
        if (!updatedItem){
            res.status(404).json({error:"No product found with this id"});
            return;
        }
        res.status(200).json(updatedItem);
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}

export const deleteItem =(req:Request,res:Response)=>{
    try {
        const deleteCode = parseInt(req.params.code);
        if(isNaN(deleteCode)){
            res.status(404).json({error:"Invalid product id"});
            return;
        }
        const isDeleted = itemService.deleteItem(deleteCode);
        if (!isDeleted){
            res.status(404).json({error:"No item found with this id"});
            return;
        }
        res.status(200).json({message:"Item deleted successfully"});
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}