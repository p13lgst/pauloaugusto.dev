const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({ 
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  phone: { type: String, trim: true },
  email: { type: String, trim: true },
  message: { type: String, trim: true }
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
