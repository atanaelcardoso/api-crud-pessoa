import { pessoaRepository } from '../repositories/people-repository'

exports.createTable = async (req, res, next) => {
  try {
    var data = await pessoaRepository.createTable();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicao'
    });
  }
}