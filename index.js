var express=require("express");
const Sequelize=require("sequelize");
const { setIntervalAsync, clearIntervalAsync } = require('set-interval-async');

let sequelize = new Sequelize('yrjdbmgx', 'yrjdbmgx', '6fF3gtCKckJAc3xeT8l-7ZZRs21yxmtJ', {
    host: 'baasu.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false },
    },
});


var inc = sequelize.define('inc', {
    aplha:Sequelize.STRING,
    num:Sequelize.INTEGER
})


var app=express();

var HTTP_PORT = process.env.PORT || 8080;



setIntervalAsync(()=>{
    inc.findAll({
        attributes:['num'],
        where :{
            aplha:'x'
        }
    }).then((number)=>{
        y=number[0].num+1
        inc.update({
            num:y
        },
        {
            where :{
                aplha:'x'
            }
        })
    })
},1000)

app.get("/",(req,res)=>{
    inc.findAll({
        attributes:['num'],
        where :{
            aplha:'x'
        }
    }).then((number)=>{
        res.send({num:number[0].num})
    })
})

sequelize.sync().then(()=>{
    
    app.listen(HTTP_PORT,()=>{
        console.log("app listning on: "+HTTP_PORT)
    })
}) 