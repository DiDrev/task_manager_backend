const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/Task');


app.use(express.urlencoded({extended: false}));

config.authenticate() //the promise
.then(function(){ //fullfilled
	console.log('Database is connected');
})
.catch(function(){ //rejected
	console.log('There is no connection');
})


app.get('/tasks', function(req,res){
	Task.findAll()
	.then(function(results){
		res.status(200).send(results)
	})
	.catch(function(error){
		res.status(500).send(error);
	})
})

app.post('/tasks', function(req,res){
	let task_data = req.body;
	Task.create(task_data)
	.then(function(result){
		res.status(200).send(result)
	})
	.catch(function(error){
		res.status(500).send(error);
	})
})








app.listen(3000,function(){
	console.log('Server running at port 3000...');
})