const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const http = require('http').Server(app);
const socketHandler = require('./Socket/SocketHandler');
const MessageRoutes = require('./MVC/Message/MessageRoutes');
const ChatRoutes = require('./MVC/Chats/ChatRoutes');
const UserRoutes = require('./MVC/User/UserRoutes')

//  // to serve images for public
// app.use(express.static('public'))
// app.use('/images', express.static("images"))

// Loading env

dotenv.config();

// Middleware

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Connect DB

const connection_url =  'mongodb+srv://akidakatibu33:fajj1234@cluster101.pv75sqw.mongodb.net/';
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  const PORT = process.env.PORT || 4001;
  http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  
  // Usage routes
  app.use('/Chats', ChatRoutes);
  app.use('/Messages', MessageRoutes);
  app.use('/User', UserRoutes)
  
  
  socketHandler(http);
