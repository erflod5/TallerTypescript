import {Router} from 'express';

const router:Router = Router();

import {indexController} from '../controllers/indexController';

router.get('/',indexController.index);

router.get('/chat',indexController.chat);

router.get('/Prueba',indexController.getPrueba);

router.post('/Prueba',indexController.postPrueba);

export default router;

