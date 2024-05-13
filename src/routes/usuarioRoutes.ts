import express from 'express';
import UsuarioController from '../controllers/usuarioController';

const router = express.Router();

router.post('/', UsuarioController.createUsuario);
router.get('/', UsuarioController.getAllUsuarios);
router.get('/:id', UsuarioController.getUsuarioById);
router.put('/:id', UsuarioController.updateUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);

export default router;
