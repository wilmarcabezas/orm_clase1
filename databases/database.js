
import  Sequelize from "sequelize"
import config from '../config.js';

const dbServer = config.SERVIDOR
const dbUser = config.USUARIO;
const dbDatabase = config.BASEDATOS;
const dbPassword = config.CLAVE;
const dbPort = config.PUERTODB;

/*
export const sequelize= new sequelize({
    'postgres://u84a8mg6prrja3:p1ea80830e6cf0d0c2ed4723bce6f2e2b6cac371cb718acc4691da844445c7507@ec2-52-20-25-139.compute-1.amazonaws.com:5432/d569q9bm5mqdje',
    ssl:{
        rejectUnauthorized:false,
    }
});
*/
export const sequelize = new Sequelize(
    dbDatabase, dbUser, dbPassword,{
        host: dbServer, 
        dialect: 'postgres',
        port: dbPort,
        ssl:{
            rejectUnauthorized:false,
        }
    }
)