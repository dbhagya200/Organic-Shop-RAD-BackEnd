"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateItem = exports.deleteItem = exports.updateItem = exports.saveItem = exports.getItemsById = exports.getAllItems = void 0;
const db_1 = require("../db/db");
const getAllItems = () => {
    return db_1.itemList;
};
exports.getAllItems = getAllItems;
const getItemsById = (code) => {
    return db_1.itemList.find(item => item.itemCode === code);
};
exports.getItemsById = getItemsById;
const saveItem = (item) => {
    db_1.itemList.push(item);
    return item;
};
exports.saveItem = saveItem;
const updateItem = (code, data) => {
    const item = db_1.itemList.find(item => item.itemCode === code);
    if (!item) {
        return null;
    }
    else {
        Object.assign(item, data);
        return item;
    }
};
exports.updateItem = updateItem;
const deleteItem = (code) => {
    const index = db_1.itemList.findIndex(item => item.itemCode === code);
    if (index === -1) {
        return null;
    }
    else {
        db_1.itemList.splice(index, 1);
        return true;
    }
};
exports.deleteItem = deleteItem;
const validateItem = (item) => {
    if (!item.itemCode || !item.itemName || !item.description || !item.quantity || !item.price || !item.location || !item.sourceImage) {
        return "All fields are required";
    }
    return null;
};
exports.validateItem = validateItem;
