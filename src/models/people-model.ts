import { Request, Response, NextFunction } from 'express';
import * as pessoaRepository from '../repositories/people-repository'

export  const createTable = (req: Request, res: Response, next: NextFunction) =>{
  try {
    const data = pessoaRepository.createTable();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicao'
    });
  }
}
//exports.createTable = async (req, res, next) => {