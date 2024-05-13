import mongoose from 'mongoose';

const carroSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  precoMinimo: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['disponível', 'vendido', 'indisponível'],
    default: 'disponível',
  },
});

const Carro = mongoose.model('Carro', carroSchema);
export default Carro;
