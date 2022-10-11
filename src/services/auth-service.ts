import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

const global = {
  SALT_KEY: '',
};

exports.generateToken = async (data: Number) => {
  return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = async (token: string) => {
  var data = jwt.verify(token, global.SALT_KEY);
  return data;
}
//await

exports.authorize = function(req: Request, res: Response, next: NextFunction) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401).json({
      messagem: 'Acesso Restrito'
    });
  } else {
    jwt.verify(token, global.SALT_KEY, function (error: string, decoded: string) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido'
        });
      } else {
        next();
      }
    });
  }
};

exports.isAdmin = function(req: Request, res: Response, next: NextFunction) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401).json({
      messagem: 'Token Inválido'
    });
  } else {
    jwt.verify(token, global.SALT_KEY, function(error: string, decoded: string) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido'
        });
      } else {
        if (decod.roles.includes('admin')) {
          next();
        } else {
          res.status(403).json({
            message: 'Esta funcionalidade é restrita para admistradores'
          });
        }
      }
    });
  }
};