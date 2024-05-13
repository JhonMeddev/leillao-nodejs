import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  lances: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lance',
  }],
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;
