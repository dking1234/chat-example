const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
    {
    participants: {
        type: Array,
    },
   },
   {
    timestamps: true,
   }
);

// const ChatModel = mongoose.model("Chat", chatSchema)
// export default ChatModel

const ChatModel = mongoose.model("Chat", chatSchema);

module.exports = ChatModel;