import express from 'express';
import CarroController from '../controllers/carroController';

const router = express.Router();


router.post('/', CarroController.createCarro);
router.get('/', CarroController.getAllCarros);
router.get('/:id', CarroController.getCarroById);
router.put('/:id', CarroController.updateCarro);
router.delete('/:id', CarroController.deleteCarro);

export default router;