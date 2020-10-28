const router = require('express').Router();
const express = require('express');

let Transaction = require('../Models/transaction.model')

//list all transacions

router.route('/transactions').get((req,res)=>{
    try {
        Transaction.find()
        .then((transactions)=>{
            res.json(transactions)
        })
        
    } catch (error) {
        console.log(error)
    }
})

//add a transaction

router.route('/transactions/add').post((req,res)=>{
    const transaction = new Transaction({
        text: req.body.text,
        amount:req.body.amount
    })
    try {

        transaction.save((err,data)=>{
            if(err){
                res.status(400).json({
                    error:err
                })
            }
            res.json({
                data:data
            })
        })
        
    } catch (error) {
        console.log(error)
    }
})


//delete a transaction

// router.route('/transactions/delete/:Id').delete((req,res)=>{
//     try {
//         let a = Transaction.findById(req.params.id)
//         a.remove();
//     } catch (error) {
//        console.log(error) 
//     }
// })

router.route('/transactions/delete/:id').delete((req,res)=>{
    Transaction.findByIdAndDelete(req.params.id)
        .then(transaction=>res.json(transaction))
        .catch(err=>res.status(400).json('err'))
})

module.exports = router