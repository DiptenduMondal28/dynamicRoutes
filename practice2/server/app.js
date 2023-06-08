const express=require('express');
const bodyParser=require('body-parser');
const path=require('path')
const sequelize=require('./util/database')

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

const app = express();
// db.execute('SELECT * FROM data').then(result=>{
//     console.log(result[0]);
// }).catch(err=>{
//     console.log(err);
// });
// 

const cors=require('cors');
app.use(cors())


app.use(express.static(path.join(__dirname,'public')))
// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 error</h1>')
})

sequelize.sync().then(result=>{
    // console.log(result)
    app.listen(3000)
}).catch(err=>{
    console.log(err)
});

// app.listen(3000);