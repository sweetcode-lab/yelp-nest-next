import * as mongoose from 'mongoose';

const db = mongoose.connection;

db.on('connecting', function () {
  console.log('connecting to MongoDB...');
});

db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('connected', function () {
  console.log('MongoDB connected!');
});

db.once('open', function () {
  console.log('MongoDB connection opened!');
});

db.on('reconnected', function () {
  console.log('MongoDB reconnected!');
});

db.on('disconnected', function () {
  console.log('MongoDB disconnected!');
});

export function connectDatabase() {
  return mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}
