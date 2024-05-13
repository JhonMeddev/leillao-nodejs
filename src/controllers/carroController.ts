import { Request, Response } from 'express';
import Carro from '../models/carroSchema'

class CarroController {
  static async createCarro(req: Request, res: Response) {
    try {
      const carro = new Carro(req.body);
      await carro.save();
      res.status(201).json(carro);
    } catch (error) {
      res.status(400).json({ error: "Requisição Inválida" });
    }
  }

  static async getAllCarros(req: Request, res: Response) {
    try {
      const carros = await Carro.find();
      res.json(carros);
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  static async getCarroById(req: Request, res: Response) {
    try {
      const carro = await Carro.findById(req.params.id);
      if (carro) {
        res.json(carro);
      } else {
        res.status(404).json({ error: 'Carro não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  static async updateCarro(req: Request, res: Response) {
    try {
      const carro = await Carro.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (carro) {
        res.json(carro);
      } else {
        res.status(404).json({ error: 'Carro não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: "Requisição Inválida" });
    }
  }

  static async deleteCarro(req: Request, res: Response) {
    try {
      const carro = await Carro.findByIdAndDelete(req.params.id);
      if (carro) {
        res.json({ message: 'Carro deletado com sucesso' });
      } else {
        res.status(404).json({ error: 'Carro não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }


}

export default CarroController;