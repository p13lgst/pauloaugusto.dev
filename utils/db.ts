import { connect } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not in the environment variables')
}

export default function connectDB() {
  return connect(MONGODB_URI as string)
}