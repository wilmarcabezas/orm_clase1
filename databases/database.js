
import  Sequelize from "sequelize"
import config from '../config.js';

const dbServer = config.SERVIDOR
const dbUser = config.USUARIO;
const dbDatabase = config.BASEDATOS;
const dbPassword = config.CLAVE;
const dbPort = config.PUERTODB;

export const sequelize = new Sequelize(
    dbDatabase, dbUser, dbPassword,{
        host: dbServer, 
        dialect: 'postgres',
        'dialectOptions': {
            'ssl': {
              'require': true,
              'rejectUnauthorized': false
            }
          }
    }
)
