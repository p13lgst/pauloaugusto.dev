import { Schema, model, models, Document } from 'mongoose';

interface Message extends Document {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const MessageSchema = new Schema({ 
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  phone: { type: String, trim: true },
  email: { type: String, trim: true },
  message: { type: String, trim: true }
});

export default models.Message || model<Message>('Message', MessageSchema);
