import {Request,Response} from 'express';

class IndexController{

    public index (req:Request,res:Response){
        let x = [{nombre : "erik", edad : 10},{nombre : "Juan", edad : 20},{nombre : "Pedro", edad : 30}];
        res.render('body/index',{title:'<h1> Welcome to App </h1>',people : ["Erik","Juan","Pedro"], data : x, author : false, firstName: "Erik"});
    }

    public chat(req: Request, res: Response){
        res.render('body/chat',{layout:'chat'});
    }

    public getPrueba(req : Request, res : Response){
        res.send({'Working':true});
    }

    public postPrueba(req : Request, res : Response){
        const {data} = req.body;
        console.log(data);
        res.send({'Working':true});
    }
}

export const indexController = new IndexController();