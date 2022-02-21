"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const util = require('util');
const cnn = mysql_1.default.createConnection({ host: 'localhost', user: 'root', password: '', database: 'veterinaria'
});
cnn.connect((err => {
    if (err) {
        throw err;
    }
    else {
        console.log("conectado");
    }
}));
const query = util.promisify(cnn.query).bind(cnn);
exports.default = query;