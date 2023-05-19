import Sequelize, { Model } from 'sequelize';
import database from "../../database/database";
import Processo from '../processo/processo.model';
import Instituicao from '../instituicao/instituicao.model';
import Prestador from '../prestador/prestador.model';
import AgendamentoPrestacao from '../agendamento-prestacao/agendamento-prestacao.model';


export class Visita extends Model {
    id!: number;
    status!: boolean;
    observacao?: string;    
    motivoReprovacao?: string;
    prazoAceite!: Date;
    dataAceite?: Date;
    dataVisita?: Date;
    processo!: Processo;
    instituicao!: Instituicao;
    prestador!: Prestador;
    prestadorId!: number;
    instituicaoId!: number;
}

Visita.init(
    {
        status: { type: Sequelize.BOOLEAN, allowNull: false },
        observacao: { type: Sequelize.STRING, allowNull: true },
        motivoReprovacao: { type: Sequelize.STRING, allowNull: true },
        prazoAceite: { type: Sequelize.DATE, allowNull: false },
        dataAceite: { type: Sequelize.DATE, allowNull: true },
        dataVisita: { type: Sequelize.DATE, allowNull: true },
        prestadorId: { type: Sequelize.INTEGER, allowNull: false },
        instituicaoId: { type: Sequelize.INTEGER, allowNull: false },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'visita'
    }
);


Visita.hasMany(AgendamentoPrestacao, {
    foreignKey: 'visitaId',
    as: 'agendamentos'
});


// Visita.belongsTo(Instituicao, {
//     foreignKey: 'instituicaoId',
//     as: 'instituicao'
// });


// Visita.belongsTo(Prestador, {
//     foreignKey: 'prestadorId',
//     as: 'prestador'
// });

export default Visita;