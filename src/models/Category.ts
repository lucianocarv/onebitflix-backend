import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface Category {
  id: number;
  name: string;
  position: number;
} // definimos a inteface para dizer os tipos na nossa tabela, isso quando usamos o ts

export interface CategoryCreationAttributes extends Optional<Category, "id"> {} // diz que id é opcional
export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category {} // mistura do model padrão do sequelize com os atributos criado por nós
export const Category = sequelize.define<CategoryInstance, Category>("Category", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  position: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
});
