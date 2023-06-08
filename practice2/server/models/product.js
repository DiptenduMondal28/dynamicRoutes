// const db=require('../util/database')

// module.exports=class Product{
//     constructor(name,address,phNo){
//         this.name=name,
//         this.address=address,
//         this.phNo=phNo
//     }
//     save(){
//         return db.execute('INSERT INTO data (name,address,phNo) VALUES (?,?,?)',[this.name,this.address,this.phNo]);
//     }

//     static fetchAll(){
//        return db.execute('SELECT * FROM data')
//     }
// }



const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Product = sequelize.define('Product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type : Sequelize.STRING(255)
    },
    address:{
        type:Sequelize.TEXT
    },
    phone:{
        type:Sequelize.STRING,
        unique:true,
        //allowNull:false
    }
})


module.exports=Product;