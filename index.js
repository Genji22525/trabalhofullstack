const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
app.use(express.json());

const sequelize = new Sequelize('postgres://usuario:senha@localhost:5432/banco', {
  dialect: 'postgres',
});

const Pessoa = sequelize.define('Pessoa', {
  nome: {
    type: Sequelize.STRING,
  },
  cpf: {
    type: Sequelize.STRING,
  },
  telefone: {
    type: Sequelize.STRING,
  },
});

app.post('/pessoas', async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pessoa' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});