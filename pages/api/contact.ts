import connectDB from "utils/db";
import Message from "models/Message";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;
    
    await connectDB();

    Message.create({ firstName, lastName, email, message }, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('OK');
      }
    });
  } else {
    res.status(404).send('Not found');
  }
}
