import express from 'express';
import LanceController from '../controllers/lanceController';

const router = express.Router();


router.post('/', LanceController.createLance);
router.get('/', LanceController.getAllLances);
router.get('/:id', LanceController.getLanceById);
router.put('/:id', LanceController.updateLance);
router.delete('/:id', LanceController.deleteLance);
router.put('/encerrar/:carroId', LanceController.encerrarLeilao);

export default router;