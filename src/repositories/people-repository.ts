import { Request, Response } from 'express';
import { openDb } from '../configDB';

export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)');
  });
};

// _req é um parametro que não está sendo utilizado
export async function selectPessoas(_req: Request, res: Response): Promise<void> {
  return openDb().then(db => {
    db.all('SELECT * FROM Pessoa')
      .then(pessoas => res.json(pessoas));
  });
};

export async function selectPessoaID(req: Request, res: Response): Promise<void> {
  let id = +req.params?.id;
  // req.params
  // req.body

  const db = await openDb()
  const pessoa = await db.get('SELECT * FROM Pessoa WHERE id=?', [id]);

  if (!pessoa) res.status(404).json({ error: `Pessoa com id ${id} não foi encontrada` });
  res.status(200).json(pessoa);
};

export async function insertPessoa(req: Request, res: Response): Promise<void> {
  let pessoa = req.body;

  openDb().then(db => {
    db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
  });
  res.json({
    "statusCode": 200
  });
};

export async function updatePessoa(req: Request, res: Response): Promise<void> {
  let pessoa = req.body.pessoa;

  openDb().then(db => {
    db.run('UPDATE Pessoa SET nome=? idade=? WHERE id=? ', [pessoa.nome, pessoa.idade, pessoa.id]);
  });
  res.json({
    "statusCode": 200
  });
};

export async function deletePessoa(req: Request, res: Response): Promise<void> {
  let id = req.body.id;

  const db = await openDb();
  await db.get('DELETE FROM pessoa WHERE id=?', [id]);
  res.json({
    "statusCode": 200
  });
};
