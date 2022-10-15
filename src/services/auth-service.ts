import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

const global = {
  SALT_KEY: process.env.SALT_KEY || '',
};

export const generateToken = async (data: Number) => {
  return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}

export const decodeToken = async (token: string) => {
  var data = jwt.verify(token, global.SALT_KEY);
  return data;
}

export const authorize = (req: Request, res: Response, next: NextFunction) => {
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

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401).json({
      messagem: 'Token Inválido'
    });
  } else {
    jwt.verify(token, global.SALT_KEY, function (error: string, decoded: any) {
      if (error) {
        return res.status(401).json({
          message: 'Token Inválido'
        });
      } else {
        if (decoded.roles.includes('admin')) {
          return next();
        } else {
          return res.status(403).json({
            message: 'Esta funcionalidade é restrita para admistradores'
          });
        }
      }
    });
  }
};