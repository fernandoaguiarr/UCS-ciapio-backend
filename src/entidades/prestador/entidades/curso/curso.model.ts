import Sequelize, { Model } from 'sequelize';

import Prestador from '../../prestador.model';
import database from '../../../../database/database';


export class Curso extends Model {
    id!: number;
    instituicao!: string;
    curso!: string;
    observacao!: string;
    prestador!: Prestador;
}

Curso.init(
    {
        instituicao: { type: Sequelize.STRING, allowNull: false },
        curso: { type: Sequelize.STRING, allowNull: false },
        observacao: { type: Sequelize.STRING, allowNull: true },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'curso'
    }
);

export default Curso;