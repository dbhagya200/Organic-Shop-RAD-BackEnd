import { Request,Response } from "express";
import * as productService from "../services/products.service"


// Controller Functions to handle get all products
export const getAllProducts = (req:Request,res:Response)=>{
    try{
        const products = productService.getAllProducts();
        res.status(200).json(products);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Something went wrong"});
    }
}

export const saveProduct = (req:Request,res:Response)=>{
    try {
        const newProduct = req.body;
        const validationErr = productService.validateProduct(newProduct);
        if (validationErr) {
            res.status(400).json({error:validationErr});
            return;
        } else {
            const savedProduct = productService.saveProduct(newProduct);
            res.status(201).json(savedProduct);
        }
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}

export const getProductsById = (req:Request,res:Response)=>{
    try{
         const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(404).json({error:"Invalid product id"});
            return;
        }
        const product = productService.getProductById(productId);
        if (!product) {
            res.status(404).json({error:"Product not found"});
            return;
        }
        res.status(200).json(product);

    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}

export const updateProduct = (req:Request,res:Response)=>{
    try{
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            res.status(404).json({error: "Invalid product id"});
            return;
        }
        const updatedData = req.body;
        const updateProduct = productService.updateProduct(productId,updatedData);
        if (!updateProduct) {
            res.status(404).json({error:"Product not found"});
            return;
        }
        res.status(200).json(updateProduct);
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}

export const deleteProduct = (req:Request,res:Response)=>{
    try{
        const deleteId = parseInt(req.params.id);
        if (isNaN(deleteId)) {
            res.status(404).json({error: "Invalid product id"});
            return;
        }
        const isDeleted = productService.deleteProduct(deleteId);
        if (!isDeleted) {
            res.status(404).json({error:"Product not found"});
            return;
        }
        res.status(200).json({message:"Product deleted successfully"});
    }catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong"});
    }
}