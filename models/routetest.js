import {sequelize} from '../databases/database.js';
import {DataTypes} from 'sequelize'

 export const routetest=sequelize.define('routetest',{
    Id:{
        type: DataTypes.STRING,
        primarykey: true,
    },
    Responsable:{
        type:DataTypes.INTEGER,
    },
    Name:{
        type:DataTypes.STRING,
    }

})