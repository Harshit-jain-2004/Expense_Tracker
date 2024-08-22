const IncomeSchema = require("../models/incomeModel.js")

exports.addIncome =async(req,res) =>{
    const {title, amount,category,description,date} =req.body
    
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        if(!title || !category || !description ){
            return res.status(400).json({message:'All fields are required!'})
        }
        if(amount <= 0 || amount === 'number'){
            return res.status(400).json({message:'Amount must be positive number!'})
        }
        await income.save()
        res.status(200).json({mesasge:'Income Added'})
    }
    catch (error){
            console.log(error)
    }
    console.log(income)
}