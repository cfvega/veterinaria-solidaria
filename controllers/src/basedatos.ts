import mysql from 'mysql'

const util =require('util')

const cnn = mysql.createConnection({host:'localhost', user:'root', password:'', database:'veterinaria'
})

cnn.connect((err=>{
    if(err){throw err;
    }else {
    
        console.log("conectado")}

}))

const query=util.promisify(cnn.query).bind(cnn)

export default query