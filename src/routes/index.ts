import { Router } from "express";

const authService = require('../services/auth-service');

const router = Router();

import { insertPessoa, updatePessoa, selectPessoas, selectPessoaID, deletePessoa } from '../controllers/people-controller.js'

router.get('/', (req, res) => {
  res.json({
    "statusCode": 200,
    "msg": "Api Rodando"
  })
});

// router.post('/', controller.createTable);
router.get('/pessoas/:slug', selectPessoas);
router.get('/pessoa/:id', selectPessoaID);
router.post('/pessoa/:tag', authService.isAdmin, insertPessoa);
router.put('/pessoa/:id', authService.isAdmin, updatePessoa);
router.delete('/pessoa/:id', authService.isAdmin, deletePessoa);

module.exports = router;

export default router;