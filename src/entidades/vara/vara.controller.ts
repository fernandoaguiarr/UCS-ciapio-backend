import { Request, Response } from "express";
import Vara from "./vara.model";
import VaraService from "../../services/varaService";
import { AuthenticatedRequest } from "../../..";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: Vara[] = await Vara.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Vara | null = await Vara.findByPk(req.params.id);
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },

    async save(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            const entidade = await VaraService.save(req.body);
            return res.status(200).json({ id: entidade?.id });
        }
        catch (error) {
            return res.status(400).json(error);
        }
    },
    async listSelect(req: AuthenticatedRequest, res: Response): Promise<any> {
        const tipo_instituicao: any = req.query?.tipo_instituicao;

        let entidade = await Vara.findAll();

        if (entidade) {
            const instituicoes = entidade.map((entidade) => ({
                id: entidade.id,
                label: entidade.nome,
            }));

            return res.status(200).json(
                instituicoes
            );
        }
        return res.status(404).json({});
    },
    // edit(req: Request, res: Response): any {
    //     return res.status(200).json({});
    // },
    // delete(req: Request, res: Response): any {
    //     return res.status(200).json({});
    // }
}