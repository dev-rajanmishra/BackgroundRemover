import 'dotenv/config';  
import express from 'express';  
import cors from 'cors';  
import connectDB from './configs/mongodb.js';

// Load environment variables  
const PORT = process.env.PORT || 4000;  

// Initialize Express App  
const app = express(); 
await connectDB(); 

// Middlewares  
app.use(express.json());  
app.use(cors());  

// API Routes  
app.get('/', (req, res) => res.send("API Working"));  

// Start Server  
app.listen(PORT, () => console.log(`🚀 Server Running on port ${PORT}`));  
