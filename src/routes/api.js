import express from 'express';

import co2Router from './co2/co2.routes.js';


const apiRouter = express.Router();

apiRouter.use('/co2', co2Router);
apiRouter.use('/co2', co2Router);
export default apiRouter;