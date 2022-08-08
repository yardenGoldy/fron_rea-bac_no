import { TicketService } from './ticketService';
import { Router } from "express";
class ticketApi  {
    private _ticketRoutes: Router;
    private _ticketService: TicketService;

    constructor() {
        this._ticketRoutes = Router();
        this._ticketService = new TicketService();
        this.InitRoutes();
    }

    private InitRoutes() {
        this._ticketRoutes.get("/alive", (req, res): void => {
            res.send(true);
        });
        this._ticketRoutes.get("/", (req, res) => {
            if(!this.checkParams(req.query))
            {
                res.status(400).send("invalid params");
                return;
            }
            
            const providers = this._ticketService.getAll();
            res.send(providers);
        });
    }

    private checkParams(query: any):boolean{
        return true;
    }
    get ticketRoutes(): Router {
        return this._ticketRoutes;
    }
}

export default new ticketApi().ticketRoutes;
