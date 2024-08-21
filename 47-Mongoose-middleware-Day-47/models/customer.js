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

// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete",async(customer)=>{
   if(customer.orders.length){
    let res=await Order.deleteMany({_id:{$in: customer.orders}});
    console.log(res);
   }
})

const Order= mongoose.model("order",orderSchema);
const customer=mongoose.model("Customer",customerSchema);


// functions
const findCustomer=async()=>{
    let result = await customer.find({}).populate("orders");
    console.log(result[0]);
}

const addCust=async()=>{
    let newCust = new customer({
        name:"karan kumar",
    });


    let newOrder=new Order({
        item:"pizza",
        price:200,
    });


    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();


    console.log("added new customer");
};

// delete functions
const delCust = async()=>{
    let data = await customer.findByIdAndDelete('66c081b24dea1f9b385ee4de');
    console.log(data);
}

// addCust();
delCust();

// const addCustomer=async()=>{
//     let cust1 = new customer({
//         name:"prince patel"
//     });

//     let order1=await Order.findOne({item:"chips"});
//     let order2=await Order.findOne({item:"chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result =await cust1.save();
//     console.log(result);
// }

// addCustomer();

// const addOrders=async()=>{
//     let res=await Order.insertMany([
//         {item:"Somasa",price:12},
//         {item:"chips",price:10},
//         {item:"chocolate",price:40},
//     ]);
//     console.log(res);
// }

// addOrders();