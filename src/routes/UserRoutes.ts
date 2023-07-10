import express, { Request, Response } from 'express';
import { UserDao } from '../daos/UserDaos';

const router = express.Router();

router.get('/:leagueId', async (req: Request, res: Response) => {
  try {
    const users = await UserDao.getUserByLeagueId(req.params.leagueId);

    if (!Array.isArray(users)) {
      throw new Error('Error while retrieving users');
    }

    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error retrieving user:', error);
    return res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

export default router;
