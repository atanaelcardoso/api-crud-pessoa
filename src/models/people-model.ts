import { Request, Response, NextFunction } from 'express';

import * as pessoaRepository from '../repositories/people-repository'

export const createTable = async (_req: Request, res: Response, _next: NextFunction) =>{
  try {
    const data = await pessoaRepository.createTable();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisicao'
    });
  }
}