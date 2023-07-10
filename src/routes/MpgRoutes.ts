import express, { Request, Response } from 'express';
import { schemaValidation } from '../middlewares/ValidationMiddleware';
import { CouchbaseMpg } from '../models/Mpg';
import { MpgDao } from '../daos/MpgDaos';
import mpgSchema from '../validations/MpgValidation';

const router = express.Router();

router.post('/add', schemaValidation(mpgSchema), async (req: Request, res: Response) => {
  try {
    const mpgBody = req.body.validatedData as CouchbaseMpg;
    const result = await MpgDao.createMpgLeague(mpgBody);

    if (!result) {
      throw new Error('Error while creating the MPG League');
    }

    return res.status(200).json({ message: 'MPG League created successfully' });
  } catch (error) {
    console.error('Failed to create MPG League: ' + error);
    return res.status(500).json({ error: 'Failed to create MPG League' });
  }
});

router.patch('/update/:teamId', async (req: Request, res: Response) => {
  try {
    const result = await MpgDao.updateTeam(req.params.teamId, req.body.name);

    if (!result) {
      throw new Error('Error while updating the MPG team');
    }

    return res.status(200).json({ message: 'MPG team updated successfully' });
  } catch (error) {
    console.error('Failed to update the MPG team' + error);
    return res.status(500).json({ error: 'Failed to update the MPG team' });
  }
});

export default router;
