import axios from 'axios';
import {ITicket} from "app-shared-types"
import {TicketAPIRootPath} from "app-configuration"

export type ApiClient = {
    getTickets: () => Promise<ITicket[]>;
}

export const createApiClient = (): ApiClient => {
    return {
        getTickets: () => {
            return axios.get(TicketAPIRootPath).then((res) => res.data);
        }
    }
}
