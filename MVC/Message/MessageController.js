const MessageModel = require('./MessageModel');

const NewMessage = async (req, res) => {
 const { chat_id, sender_id, text} = req.body
 const message = new MessageModel({
         chat_id,
         sender_id,
         text
 });

 try {
  const result = await message.save();
  res.status(200).json(result);

 } catch (error) {
  res.status(500).json(error)
 }

}

const getMessage = async (req, res) => {
  const {chat_id} = req.params;

  try {

    const result = await MessageModel.find({chat_id});
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  NewMessage,
  getMessage,
};
