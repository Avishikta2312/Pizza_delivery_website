const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
    
    name: {type:String,require},
    varients: [],
    prices :[],
    category : {type:String,require},
    img : {type:String,require},
    description: {type: String,require}
},{
    timestamps : true,
})

const PizzaModel = mongoose.model('pizzas',pizzaSchema)



module.exports=PizzaModel