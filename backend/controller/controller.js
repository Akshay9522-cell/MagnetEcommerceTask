 const orderModel=require('../model/order')
 
 const order=async(req,res)=>{
       
      const orderData=req.body
      console.log(orderData)
     try {
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    res.status(201).json({ message: 'Order saved successfully' });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Server error' });
  }
 }

 module.exports={
    order
 }