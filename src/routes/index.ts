import { Request, Response, Router } from 'express';

// import * as authService  from '../services/auth-service';

const router = Router();

import { createTable } from '../models/people-model';
import { insertPessoa, updatePessoa, selectPessoas, selectPessoaID, deletePessoa } from '../controllers/people-controller'

router.get('/', (_req: Request, res: Response) => {
  res.json({
    "statusCode": 200,
    "msg": "Api Rodando"
  })
});
router.post('/', createTable);

router.get('/pessoas', selectPessoas);
router.get('/pessoa/:id', selectPessoaID);
router.post('/pessoa', insertPessoa);
router.put('/pessoa/:id', updatePessoa);
router.delete('/pessoa/:id', deletePessoa);

// authService.isAdmin,

export default router;