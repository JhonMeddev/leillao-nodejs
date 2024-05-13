import { Request, Response } from 'express';
import Usuario from '../models/usuarioSchema';

class UsuarioController {
  static async createUsuario(req: Request, res: Response) {
    try {
      const usuario = new Usuario(req.body);
      await usuario.save();
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: "Requisição Inválida" });
    }
  }

  static async getAllUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await Usuario.find().populate('lances');

      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  static async getUsuarioById(req: Request, res: Response) {
    try {
      const usuario = await Usuario.findById(req.params.id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  static async updateUsuario(req: Request, res: Response) {
    try {
      const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: "Requisição Inválida" });
    }
  }

  static async deleteUsuario(req: Request, res: Response) {
    try {
      const usuario = await Usuario.findByIdAndDelete(req.params.id);
      if (usuario) {
        res.json({ message: 'Usuario deletado com sucesso' });
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  static async teste(callback: any, sucess: string, erro: string){



  }
}

export default UsuarioController;