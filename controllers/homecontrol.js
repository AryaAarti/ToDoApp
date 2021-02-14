const ToDo = require('../models/user');
let datetime = new Date();


let mindate=datetime.toISOString().slice(0,10);
// Function to render task data on browser    
module.exports.viewTask= function(req, res){


    ToDo.find({}, function(err, tasks){
        if(err){
            console.log("error in fetching tasks from db");
            return;
        }
        return res.render('home',{
            
            task_list: tasks,
            mindate:mindate
        });

    })
}
// function to add task in DB
module.exports.addtask = function(req, res){
    
    
    ToDo.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    }, function(err, todotask){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', todotask);
            
            return res.redirect('back');
    })

}

// Function to delete task from DB
module.exports.deleteTask= function(req, res){
    let ids=req.body.checkbox;
    console.log(ids)
    ToDo.deleteMany({ _id: ids}, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    })


   
}

