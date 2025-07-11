"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.saveItem = exports.getItemsById = exports.getAllItems = void 0;
const itemService = __importStar(require("../services/item.service"));
const getAllItems = (req, res) => {
    try {
        const allItems = itemService.getAllItems();
        res.status(200).json(allItems);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};
exports.getAllItems = getAllItems;
const getItemsById = (req, res) => {
    try {
        const itemsById = parseInt(req.params.code);
        if (isNaN(itemsById)) {
            res.status(404).json({ error: "Invalid product id" });
            return;
        }
        const item = itemService.getItemsById(itemsById);
        if (!item) {
            res.status(404).json({ error: "No product found with this id" });
            return;
        }
        res.status(200).json(item);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};
exports.getItemsById = getItemsById;
const saveItem = (req, res) => {
    try {
        const newItem = req.body;
        const validateErr = itemService.validateItem(newItem);
        if (validateErr) {
            res.status(400).json({ error: validateErr });
            return;
        }
        const savedItem = itemService.saveItem(newItem);
        res.status(201).json(savedItem);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};
exports.saveItem = saveItem;
const updateItem = (req, res) => {
    try {
        const code = parseInt(req.params.code);
        if (isNaN(code)) {
            res.status(404).json({ error: "Invalid product id" });
            return;
        }
        const updatedData = req.body;
        const updatedItem = itemService.updateItem(code, updatedData);
        if (!updatedItem) {
            res.status(404).json({ error: "No product found with this id" });
            return;
        }
        res.status(200).json(updatedItem);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};
exports.updateItem = updateItem;
const deleteItem = (req, res) => {
    try {
        const deleteCode = parseInt(req.params.code);
        if (isNaN(deleteCode)) {
            res.status(404).json({ error: "Invalid product id" });
            return;
        }
        const isDeleted = itemService.deleteItem(deleteCode);
        if (!isDeleted) {
            res.status(404).json({ error: "No item found with this id" });
            return;
        }
        res.status(200).json({ message: "Item deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};
exports.deleteItem = deleteItem;
