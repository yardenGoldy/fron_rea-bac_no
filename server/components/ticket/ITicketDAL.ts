import {ITicket} from "app-shared-types"
export interface ITicketDAL
{
    getAll() : Array<ITicket>
}