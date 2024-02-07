import express from 'express';
// import { createServer } from 'node:http';
import{ mongoURL} from './config.js'
// import { Server } from 'socket.io';
import cors from 'cors'
import mongoose from 'mongoose'
import userRoute from './routes/userroute.js'
import todoRoute from './routes/todoroute.js'


const app = express()
// const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin:'http://localhost:5173',
//   }
// })
app.use(express.json())



app.use(cors({
  origin:'http://localhost:5173'
}))


app.use("/user", userRoute);
app.use("/todo", todoRoute);

  // io.on('connection', (socket) => {
  //   socket.on('chat message', (msg) => {
  //       io.emit('chat message', msg);
  //     });
  // });

  // io.on('connection', (socket) => {
  //   console.log('User connected: ',socket.id)

  //   socket.on('disconnect',()=>{
  //     console.log('User disconnected: ',socket.id)

  //   })
  // })



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
