
//const repository = require('../repositories/pessoa-repository')
import {repository} from '../repositories/pessoa-repository'

exports.createTable = async(req, res, next) => {
  try {
    var data = await repository.createTable();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
}

exports.selectPessoas = async(req, res, next) => {
   try {
      var data = await repository.selectPessoas(req.params.slug);
      res.status(200).send(data);
   } catch (e) {
      res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
}

exports.selectPessoasID = async(req, res, next) => {
  try {
    var data = await Product.selectPessoasID(req.params.id,)
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
}

exports.insertPessoa = async(req, res, next) => {
    try {
      const data = await repository.insertPessoa(req.params.tag)
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
}

exports.updatePessoa = async(req, res, next) => {
  try {
    await repository.updatePessoa(req.params.id, req.body);
    res.status(200).send({
       message: 'Produto atualizando com sucesso'
   });
  } catch (e) {
      res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
};

exports.deletePessoa = async(req, res, next) => {
  try {
    await repository.deletePessoa(req.body.id);
      res.status(200).send({
        message: 'Produto removido com sucesso'
    });
  } catch (e) {
      res.status(500).send({
      message: 'Falha ao remover o produto'
    });
  }
};