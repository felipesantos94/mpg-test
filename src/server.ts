import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/UserRoutes';
import mpgRoutes from './routes/MpgRoutes';
import { CouchbaseService } from './services/CouchbaseService';
import { UserDao } from './daos/UserDaos';
import { MpgDao } from './daos/MpgDaos';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/mpg', mpgRoutes);

async function startServer(): Promise<void> {
  await CouchbaseService.initialize();
  UserDao.initialize();
  MpgDao.initialize();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
});
