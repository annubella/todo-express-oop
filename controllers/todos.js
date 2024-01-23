import {Todo} from '../models/todo.js'

class todoController{
    constructor(){
        this.TODOS = [] 
    } 

    createTodo(req, res){
        //get data from post request
        const task = req.body.task
        // create new object via todo model
        //model constructor uses uniq id and task name as parameter
        const newTodo = new Todo(Math.random().toString(), task)
        // add new todo to todos array
        this.TODOS.push(newTodo)
        //create a correct response
        res.json({
            message: 'created new todo object',
            newTask: newTodo
        })     
    } 
    getTodos(req, res){
        res.json({tasks: this.TODOS} )
    } 
}

export const TodoController = new todoController()