const mongoose=require("mongoose");
const {Schema}=mongoose;

main()
.then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const orderSchema=new mongoose.Schema({
    item:String,
    price:Number,
});

const customerSchema=new mongoose.Schema({
    name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref:'Order',
        },
    ],
});

const Order= mongoose.model("order",orderSchema);
const customer=mongoose.model("Customer",customerSchema);
const addCustomer=async()=>{
    let cust1 = new customer({
        name:"prince patel"
    });

    let order1=await Order.findOne({item:"chips"});
    let order2=await Order.findOne({item:"chocolate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result =await cust1.save();
    console.log(result);
}

addCustomer();

// const addOrders=async()=>{
//     let res=await Order.insertMany([
//         {item:"Somasa",price:12},
//         {item:"chips",price:10},
//         {item:"chocolate",price:40},
//     ]);
//     console.log(res);
// }

// addOrders();