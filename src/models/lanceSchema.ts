import mongoose from 'mongoose';

const lanceSchema = new mongoose.Schema({
  valor: {
    type: Number,
    required: true,
  },
  carro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carro',
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

const Lance = mongoose.model('Lance', lanceSchema);
export default Lance;