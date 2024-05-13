import { Request, Response } from 'express';
import Lance from '../models/lanceSchema';
import Carro from '../models/carroSchema';
import Usuario from '../models/usuarioSchema';

class LanceController {
  static async createLance(req: Request, res: Response) {
    try {
      const lance = new Lance(req.body);
      await lance.save();
      res.status(201).json(lance);
    } catch (error) {
      res.status(400).json({ error: "Requisição Inválida" });
    }
  }

  static async getAllLances(req: Request, res: Response) {
    try {
      const lances = await Lance.find().populate('carro usuario');
      res.json(lances);
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  static async getLanceById(req: Request, res: Response) {
    try {
      const lance = await Lance.findById(req.params.id).populate('carro usuario');
      if (lance) {
        res.json(lance);
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  static async updateLance(req: Request, res: Response) {
    try {
      const lance = await Lance.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (lance) {
        res.json(lance);
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: "Requisição Inválida" });
    }
  }

  static async deleteLance(req: Request, res: Response) {
    try {
      const lance = await Lance.findByIdAndDelete(req.params.id);
      if (lance) {
        res.json({ message: 'Lance deletado com sucesso' });
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }


  static async encerrarLeilao(req: Request, res: Response) {
    try {
      const carroId = req.params.carroId;

      const allLances = await Lance.find();

      const lancesDoCarro = allLances.filter(lance => String(lance.carro._id) === carroId);

      if (lancesDoCarro.length === 0) {
        return res.status(400).json({ error: 'Não há lances para o carro especificado' });
      }

      const lanceVencedor = lancesDoCarro.reduce((maxLance, lance) => (lance.valor > maxLance.valor ? lance : maxLance));

      await Carro.findByIdAndUpdate(carroId, { status: 'vendido' });

      const infoUsuario = await Usuario.findById(lanceVencedor.usuario);
    
      res.json({ vencedor: lanceVencedor.usuario, lanceVencedor, nomeVencedor: infoUsuario?.nome, emailVencedor: infoUsuario?.email });
    } catch (error) {
      console.error('Erro ao encerrar leilão:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

}

export default LanceController;
