import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes.js';
import router from "./routes/user-routes.js";
import cors from 'cors';


const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose.connect('mongodb+srv://admin:admin@cluster0.oeejg.mongodb.net/BlogApp?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to database and lisetining@"+5000))
    .catch((err) => console.log("error: " + err));
