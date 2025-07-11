import {Contact} from "../model/contact.model";
import {contactList} from "../db/db";
import {Product} from "../model/product.model";


export const saveContact = (contact:Contact):Contact => {
    contactList.push(contact);
    return contact;
}
export const validateContact = (product:Product) => {
    if (!product.id || !product.name || !product.price || !product.currency || !product.image) {
        return "All fields are required";
    }
    return null;
}