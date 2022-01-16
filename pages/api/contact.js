import db from "../../lib/db";
import Message from "../../models/Message";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;
    
    await db();

    Message.create({ firstName, lastName, email, message }, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('OK');
      }
    });
  } else {
    res.redirect(301, '/');
  }
}
