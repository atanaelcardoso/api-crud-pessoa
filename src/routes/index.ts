import { Request, Response, Router } from 'express';

//import * as authService  from '../services/auth-service';
//const authService = require('../services/auth-service');

const router = Router();

import { insertPessoa, updatePessoa, selectPessoas, selectPessoaID, deletePessoa } from '../controllers/people-controller.js'

router.get('/', (req: Request, res: Response) => {
  res.json({
    "statusCode": 200,
    "msg": "Api Rodando"
  })
});

// router.post('/', controller.createTable);
router.get('/pessoas/:slug', selectPessoas);
router.get('/pessoa/:id', selectPessoaID);
router.post('/pessoa/:tag', insertPessoa);
router.put('/pessoa/:id', updatePessoa);
router.delete('/pessoa/:id', deletePessoa);

// authService.isAdmin,
module.exports = router;

export default router;