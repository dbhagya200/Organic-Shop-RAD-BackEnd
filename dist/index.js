"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 1.initialize the express app
let app = (0, express_1.default)();
// Define the application port
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
//4.Instructs the express app to
// listen on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
