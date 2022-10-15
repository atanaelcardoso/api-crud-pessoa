import { Request, Response, NextFunction } from 'express';

import * as pessoaRepository from '../repositories/people-repository';

export const selectPessoas = async (req: Request, res: Response, _next: NextFunction) =>{
  try {
    const data = await pessoaRepository.selectPessoas(req, res);
    return data;
  } catch (e) {
    return res.status(500).send({
      message: 'Falha ao processar sua requisicao'
    });
  }
}

export const selectPessoaID = async (req: Request, res: Response, _next: NextFunction) =>{
  try {
    const data = await pessoaRepository.selectPessoaID(req, res);
    return data;
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicao'
    });
  }
}
export const insertPessoa = async (req: Request, res: Response, _next: NextFunction) =>{
  try {
    const data = await pessoaRepository.insertPessoa(req, res);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
}

export const updatePessoa = async (req: Request, res: Response, _next: NextFunction) =>
  {
  try {
    await pessoaRepository.updatePessoa(req, res);
    res.status(200).send({
      message: 'Produto atualizando com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicoa'
    });
  }
};

export const deletePessoa = async (req: Request, res: Response, _next: NextFunction) =>{
  try {
    await pessoaRepository.deletePessoa(req, res);
    res.status(200).send({
      message: 'Produto removido com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao remover o produto'
    });
  }
};