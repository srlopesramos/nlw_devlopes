import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';
/*
    GET -> Buscar uam informação
    POST -> Criar uma informação
    PUT -> Editar informação
    DELETE -> Deletar uma informação
*/

/*
    -- Parametros da APP --
    Query Params: Variaveis de URL para passar dados para aplicação (Exp. .../loja/tenes?tamanho=38&cor=preto) => console.log(request.query);
    Route Params: Identificar um recurso pela rota [ID do Usuario (Exp. .../admin/user/12)] => console.log(request.params);
    Body: Passar informações por fora da URL. [ Identico a usar metodo POST em um Formulario no uso do PHP ] => console.log(request.body);
*/

//index, show, create, update, delete

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);

export default routes;