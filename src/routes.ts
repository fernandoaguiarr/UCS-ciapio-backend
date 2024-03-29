import { Router, response } from "express";

import varaController from "./entidades/vara/vara.controller";
import usuarioController from "./entidades/usuario/usuario.controller";
import enderecoController from "./entidades/endereco/endereco.controller";
import processoController from "./entidades/processo/processo.controller";
import instituicaoController from "./entidades/instituicao/instituicao.controller";
import perguntaController from "./entidades/prestador/entidades/pergunta/pergunta.controller";
import respostaController from "./entidades/prestador/entidades/resposta/resposta.controller";
import unidadeFederativaController from './entidades/unidade-federativa/unidade-federativa.controller';
import alternativaPenalController from './entidades/prestador/entidades/alternativa-penal/alternativa-penal.controller';
import MenuService from "./services/menuService";
import passport from "passport";
import { Response, Request } from "express";
import { AuthenticatedRequest } from "..";
import prestadorController from "./entidades/prestador/prestador.controller";
import visitaController from "./entidades/visita/visita.controller";
import cidadeController from "./entidades/cidade/cidade.controller";
import atestadoFrequenciaController from "./entidades/atestado-frequencia/atestado-frequencia.controller";
import atestadoComparecimentoController from "./entidades/atestado-comparecimento/atestado-comparecimento.controller";
import drogaController from "./entidades/prestador/entidades/droga/droga.controller";
import agendamentoPrestacaoController from "./entidades/agendamento-prestacao/agendamento-prestacao.controller";

const routes = Router();

routes.get('/unidade-federativa/', unidadeFederativaController.list);

routes.get('/unidade-federativa/:id', unidadeFederativaController.detail);

routes.get('/cidade/', cidadeController.list);

routes.get('/cidade/:id', cidadeController.detail);

routes.get('/endereco/', enderecoController.list);

routes.get('/endereco/:id', enderecoController.detail);

routes.get('/vara-penal/', varaController.list);

routes.post('/vara-penal/', (req: Request, res: Response) => varaController.save(req as AuthenticatedRequest, res));

routes.get('/vara-penal/:id', varaController.detail);

routes.get('/select/vara-penal/', (req: Request, res: Response) => varaController.listSelect(req as AuthenticatedRequest, res));

routes.get('/pergunta/', (req: Request, res: Response) =>
  perguntaController.list(req as AuthenticatedRequest, res));

routes.get('/pergunta/:id', (req: Request, res: Response) =>
  perguntaController.detail(req as AuthenticatedRequest, res));

routes.post('/pergunta/', (req: Request, res: Response) =>
  perguntaController.save(req as AuthenticatedRequest, res));

routes.get('/resposta/', respostaController.list);

routes.get('/resposta/:id', respostaController.detail);

routes.get('/processo/', (req: Request, res: Response) =>
processoController.list(req as AuthenticatedRequest, res));

routes.get('/processo/:id', processoController.detail);

routes.post('/processo/', (req: Request, res: Response) =>
  processoController.save(req as AuthenticatedRequest, res));

routes.get('/select/prestador/', (req: Request, res: Response) =>
  prestadorController.listSelect(req as AuthenticatedRequest, res));

routes.get('/select/instituicao-parceira/', (req: Request, res: Response) =>
  instituicaoController.listSelect(req as AuthenticatedRequest, res));

routes.get('/select/cidade/', (req: Request, res: Response) =>
  cidadeController.listSelect(req as AuthenticatedRequest, res));

routes.get('/prestador/', (req: Request, res: Response) =>
  prestadorController.list(req as AuthenticatedRequest, res));

routes.get('/prestador/:id', (req: Request, res: Response) =>
  prestadorController.detail(req as AuthenticatedRequest, res));

routes.post('/prestador/', (req: Request, res: Response) =>
  prestadorController.save(req as AuthenticatedRequest, res));

routes.get('/ciap/', instituicaoController.listCIAP);

routes.get('/ciap/:id', (req: Request, res: Response) =>
  instituicaoController.detail(req as AuthenticatedRequest, res));

routes.post('/ciap/', (req: Request, res: Response) =>
  instituicaoController.save(req as AuthenticatedRequest, res));

routes.get('/instituicao-parceira/', (req: Request, res: Response) =>
  instituicaoController.listInstituicaoParceira(req as AuthenticatedRequest, res));

routes.get('/instituicao-parceira/:id', (req: Request, res: Response) =>
  instituicaoController.detail(req as AuthenticatedRequest, res));

routes.post('/instituicao-parceira/', (req: Request, res: Response) =>
  instituicaoController.save(req as AuthenticatedRequest, res));

routes.get('/usuario/', (req: Request, res: Response) =>
  usuarioController.list(req as AuthenticatedRequest, res));

routes.get('/usuario-logado/', (req: Request, res: Response) =>
  usuarioController.getUserLogged(req as AuthenticatedRequest, res));

routes.get('/usuario/:id', usuarioController.detail);

routes.post('/usuario/', (req: Request, res: Response) =>
  usuarioController.save(req as AuthenticatedRequest, res));

routes.get('/droga/', (req: Request, res: Response) =>
  drogaController.list(req as AuthenticatedRequest, res));

routes.get('/select/droga', (req: Request, res: Response) =>
  drogaController.listSelect(req as AuthenticatedRequest, res));

routes.get('/visita/', (req: Request, res: Response) =>
  visitaController.list(req as AuthenticatedRequest, res));

routes.get('/visita/:id', (req: Request, res: Response) =>
  visitaController.detail(req as AuthenticatedRequest, res));

routes.post('/visita/', (req: Request, res: Response) =>
  visitaController.save(req as AuthenticatedRequest, res));

routes.get('/entrevistas/:id', (req: Request, res: Response) =>
  atestadoComparecimentoController.detail(req as AuthenticatedRequest, res));

routes.get('/entrevistas/', (req: Request, res: Response) =>
  atestadoComparecimentoController.list(req as AuthenticatedRequest, res));

routes.post('/entrevistas/', (req: Request, res: Response) =>
  atestadoComparecimentoController.save(req as AuthenticatedRequest, res));

routes.get('/menu/', (req: Request, res: Response) =>
  MenuService.getMenu(req as AuthenticatedRequest, res));

routes.get('/login/', (req: Request, res: Response) => {
  res.json({ mensagem: 'Você foi redirecionado para página de login (alterar este redirect)' }).status(200);
});

routes.post('/unauthorized/', (req: Request, res: Response) => {
  const mensagem = req.flash('error');
  res.status(401).json({ mensagem });
});

routes.get('/frequencia/', (req: Request, res: Response) =>
  atestadoFrequenciaController.list(req as AuthenticatedRequest, res));

routes.get('/frequencia/:id', atestadoFrequenciaController.detail);

routes.post('/frequencia/', (req: Request, res: Response) =>
  atestadoFrequenciaController.create(req as AuthenticatedRequest, res));

routes.get('/frequencia/agrupado/processo/', (req: Request, res: Response) =>
  atestadoFrequenciaController.listaAgrupadaPorProcesso(req as AuthenticatedRequest, res));

routes.get('/frequencia/agrupado/processo/:id', (req: Request, res: Response) =>
  atestadoFrequenciaController.listaPorProcesso(req as AuthenticatedRequest, res));

routes.post(
  "/login",
  passport.authenticate("local"),
  (req: Request, res: Response) => {
    const reqAuthenticated = req as AuthenticatedRequest;
    const objectReturn = {
      role: reqAuthenticated.user?.role,
    }
    return res.status(200).send(objectReturn);
  }

);

routes.get('/agendamento-prestacao/', (req: Request, res: Response) =>
  agendamentoPrestacaoController.list(req as AuthenticatedRequest, res));

routes.get('/agendamento-prestacao/:id', (req: Request, res: Response) =>
  agendamentoPrestacaoController.detail(req as AuthenticatedRequest, res));

routes.post('/agendamento-prestacao/', (req: Request, res: Response) =>
  agendamentoPrestacaoController.save(req as AuthenticatedRequest, res));

routes.get('/alternativa-penal/getDescricaoAlternativaPenal', (req: Request, res: Response) =>
  alternativaPenalController.getDescricaoAlternativaPenal(req as AuthenticatedRequest, res));

export default routes;