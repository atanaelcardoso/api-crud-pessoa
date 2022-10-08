import { Request, Response } from 'express';

const users = [
  {name: 'diego', email: 'disosodo'},
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
};