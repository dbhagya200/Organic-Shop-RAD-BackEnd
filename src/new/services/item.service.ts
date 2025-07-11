import {Item} from "../model/item.model";
import {itemList} from "../db/db";


export const getAllItems = ():Item[] => {
    return itemList;
}

export const getItemsById = (code:number):Item | undefined=>{
    return itemList.find(item => item.itemCode === code);
}

export const saveItem =(item:Item):Item=>{
    itemList.push(item);
    return  item;
}

export const updateItem = (code:number,data:Item)=>{
    const item = itemList.find(item => item.itemCode === code);
    if (!item){
        return null;
    }else {
        Object.assign(item,data);
        return item;
    }
}

export const deleteItem = (code:number)=>{
    const index = itemList.findIndex(item=>item.itemCode === code);
    if (index === -1){
        return null;
    }else {
        itemList.splice(index,1);
        return true;
    }
}

export const validateItem = (item:Item) => {
    if (!item.itemCode || !item.itemName ||!item.description || !item.quantity || !item.price || !item.location || !item.sourceImage) {
        return "All fields are required";
    }
    return null;
}