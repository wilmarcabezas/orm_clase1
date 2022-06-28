import {sequelize} from '../databases/database.js'
import {DataTypes} from 'sequelize';
import {routetest} from './routetest.js';

export const testdriver = sequelize.define('testdriver',{
 Id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
 },
 Name:{
    type:DataTypes.STRING,    
 },
 Date:{
    type:DataTypes.STRING,
 },
},{
   timestamps: false,
 });

testdriver.hasMany(routetest,{
    foreignKey:'Responsable',
    targetId:'Id',
})

routetest.belongsTo(testdriver,{
   foreignKey:'Responsable',
   targetId:'Id',
})