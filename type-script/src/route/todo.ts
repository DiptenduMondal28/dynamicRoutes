import { Router } from "express";
import {Todo} from "../models/todo"
import { todo } from "node:test";

let todos:Todo[]=[];

const router = Router();

type requestBody={text:string}

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
});

router.post('/todo',(req,res,next)=>{
    const reqBody=req.body as requestBody;
    const newTodo:Todo={
        id:new Date().toString(),
        text:req.body.text
    }
    todos.push(newTodo);
    res.status(201).json({message:'todo creatd successfully',todo:newTodo,todos:todos})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    todos=todos.filter(todoItem=>todoItem.id!=req.params.todoId);
    res.status(200).json({message:'deleted successfuliy',todos:todos})
})

router.put('/todo/:todoId',(req,res,next)=>{
    const tid=req.params.todoId;
    const body=req.body as requestBody;
    const todoIndex=todos.findIndex(todoItem=>todoItem.id===tid);
    if(todoIndex>=0){
        todos[todoIndex]={
            id:tid,
            text:body.text
        }
        return res.status(200).json({message:'update todo'})
    }
    res.status(404).json({message:'user not find'})



})

export default router;