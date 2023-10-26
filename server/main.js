import express from 'express';
// import { createServer } from 'node:http';
import{ mongoURL} from './config.js'
// import { Server } from 'socket.io';
import { Todo } from './TodoSchema.js'
import cors from 'cors'
import mongoose from 'mongoose'



const app = express()
// const server = createServer(app);
// const io = new Server(server)
app.use(express.json())



app.use(cors())

app.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({})
    
        return res.status(200).json({
          data: todos,
        })
      }
       catch (err) {
        console.log(err)
        res.status(500).send(err)
      }
    })
  
  app.post('/', async (req,res)=>{
    

    try {
        if (
            !req.body.title ||
            !req.body.description 
          ) {
            return res.status(400).send({
              message: 'Send all required fields: title, description',
            })
          }
          const newTodo = {
            
            title: req.body.title,
            description: req.body.description
          }
          const todo = await Todo.create(newTodo)
          return res.status(201).send(todo)
        } catch (err) {
          console.log(err);
          res.status(500).send(err)
        }
    
  })
  
app.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
  
      const result = await Todo.findByIdAndDelete(id)
  
      if (!result) {
        return res.status(404).send('Book not found' )
      }
  
      return res.status(200).send('Book deleted successfully')
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })


  // io.on('connection', (socket) => {
  //   socket.on('chat message', (msg) => {
  //       io.emit('chat message', msg);
  //     });
  // });



mongoose.connect(mongoURL).then(()=>
{
    console.log('db connected')
    app.listen(3000,()=>{
        console.log('connected')
    })
})
    .catch((err)=>{
        console.log(err)
    })
