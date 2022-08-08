import {ITicket} from "app-shared-types"
import {ITicketDAL} from "./ITicketDAL"
import {TicketDal} from "./TicketDAL"
export class TicketService {
    constructor(private _dal: ITicketDAL = new TicketDal()){

    }

    getAll() : Array<ITicket>{
        return this._dal.getAll();
      }
} 