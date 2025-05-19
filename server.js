require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/product');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Đã kết nối MongoDB');
  app.listen(3000, () => {
    console.log('🚀 Server chạy ở http://localhost:3000');
  });
}).catch((err) => console.error('❌ Lỗi MongoDB:', err));
