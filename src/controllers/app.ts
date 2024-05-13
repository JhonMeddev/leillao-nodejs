import express from 'express';
import mongoose from 'mongoose';
import carroRoutes from '../routes/carroRoutes';
import lanceRoutes from '../routes/lanceRoutes';
import usuarioRoutes from '../routes/usuarioRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/leilao').then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});


app.use(express.json());


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


app.use('/carros', carroRoutes);
app.use('/lances', lanceRoutes);
app.use('/usuarios', usuarioRoutes);
