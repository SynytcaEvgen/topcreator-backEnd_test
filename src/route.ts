import { Request, Response, Router } from 'express';

export const startPoint = Router();

startPoint.get('/start', async (req: Request, res: Response) => {
  
  res.status(200).json({
    version: '1.0.0',
    name: 'topcreator-test-task',
    status: "Service started",
  });
});
