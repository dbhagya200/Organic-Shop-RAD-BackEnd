import {Router} from "express";
import {
    deleteProduct,
    getAllProducts,
    getProductsById,
    saveProduct,
    updateProduct
} from "../controllers/product.controller";

const productRouter: Router = Router();

// Handle the Request
productRouter.get("/all",getAllProducts);
productRouter.post("/save",saveProduct);
productRouter.get("/:id",getProductsById);
productRouter.put("/update/:id",updateProduct);
productRouter.delete("/delete/:id",deleteProduct);




export default productRouter