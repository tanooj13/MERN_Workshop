const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require('./routes/paymentRoutes'); 

dotenv.config();
connectDB(); 
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://e-commerce-787k.onrender.com', // Allow frontend domain
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart",cartRoutes)
app.use('/api/payment', paymentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
