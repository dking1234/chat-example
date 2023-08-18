const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: String,
  sender_id: String,
  chat_id: String,
  reference_id: String,
  timestamp: { type: Date, default: new Date().toISOString() },
  status: {
    type: String,
    enum: ['sent', 'received', 'read'],
    default: 'sent'
  },
});

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;
