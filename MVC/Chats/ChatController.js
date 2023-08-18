const ChatModel = require('./ChatModel');

const createChat = async (req,res) => {
    const newChat = new ChatModel({
        participants: [req.body.senderid, req.body.receiverid]
    });

    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
};

const userChats = async (req,res) => {
    try {
        const chat = await ChatModel.find({
            participants: {$in: [req.params.user_id]}
        })

        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
}

const findChat = async(req, res) => {
    try {
        const chat = await ChatModel.findOne({
            participants: {$all: [req.params.first_id, req.params.second_id]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createChat,
    userChats,
    findChat
  };
  