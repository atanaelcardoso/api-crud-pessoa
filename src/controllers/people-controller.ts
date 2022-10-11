import { Request, Response, NextFunction } from 'express';

import * as pessoaRepository from '../repositories/people-repository.js';
// const pessoaRepository = require('../repositories/people-repository.js')

// exports.get = async (req, res, next) => {
//   try {
//    var data = await pessoaRepository.get();
//    res.status(200).send(data);
//  } catch (e) {
//    res.status(500).send({
//      message: 'Falha ao processar sua requisicao'
//    });
//  }
// }

//export async function selectPessoas(req, res, next) => {
export const selectPessoas = async (req: Request, res: Response, next: NextFunction) =>{
  try {
    const data = await pessoaRepository.selectPessoas(req.params.slug);
    return res.status(200).send(data);
  } catch (e) {
    return res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
}

export const selectPessoaID = async (req: Request, res: Response, next: NextFunction) =>{
  try {
    const data = await pessoaRepository.selectPessoaID(req.params.id)
     return res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
}
export const insertPessoa = async (req: Request, res: Response, next: NextFunction) =>{
  try {
    const data = await pessoaRepository.insertPessoa(req.params.tag)
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
}

export const updatePessoa = async (req: Request, res: Response, next: NextFunction) =>
  {
  try {
    await pessoaRepository.updatePessoa(req.params.id, req.body);
    res.status(200).send({
      message: 'Produto atualizando com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
};

export const deletePessoa = async (req: Request, res: Response, next: NextFunction) =>{
  try {
    await pessoaRepository.deletePessoa(req.body.id);
    res.status(200).send({
      message: 'Produto removido com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao remover o produto'
    });
  }
};