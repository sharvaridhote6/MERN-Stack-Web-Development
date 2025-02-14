import {Router} from 'express';
import {healthCheck} from '../controllers/healthcheck.controller.js';

const router=Router();
router.route('/').get(healthCheck);//this is used to check the health of the application 
router.route('/test').get(healthCheck);


export default router;