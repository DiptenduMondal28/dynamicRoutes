const Product=require('../models/product');
const rootDir=require('../util/path')
const path=require('path')


exports.getAddProduct=async(req, res, next) => {
  const users=await Product.findAll()
  try {
      res.send(users)
  } catch (err) {
      res.status(500).send(err.message)
  }
  };

  exports.postAddProduct =async (req, res, next) => {
    try{
      const name=req.body.name;
      const address=req.body.address;
      const phone=req.body.phone;
      console.log("comes as:"+name+address+phone)
      const data =await Product.create({
        name:name,
        address:address,
        phone:phone
      })
    }catch(err){
      console.log(err)
    }
  };
  

  exports.getProducts = (req, res, next) => {
    // Product.fetchAll().then(([rows,fieldData])=>{
    //   res.json(rows)
    // }).catch(err=>console.log(err));
    // const products=Product.fetchAll();
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    //res.json(products)

  //   Product.fetchAll(products => {
  //   res.render('admin/products', {
  //     prods: products,
  //     pageTitle: 'Admin Products',
  //     path: '/admin/products'
  //   });
  // });

  Product.findAll().then(product=>{
    res.json(product)
  }).catch(err=>console.log(err));

  };