import {ITicket} from "app-shared-types"
import { ITicketDAL } from './ITicketDAL';
const tickets:Array<ITicket> = [
    {
      title: "React Forum - Guidelines for posting a question",
      id: "36043e94-6d21-5d2a-b1eb-f983996e3d79",
      content: "Hi React community, me again Over the past few weeks, we've discussed ways to make forum questions",
      creationTime: 1545880457898,
      userEmail: "kekikum@segtaj.gh",
      labels: ['wordpress', 'Guidelines']
    },
    {
      title: "Collapse/expand code affecting the page footer",
      id: "ab6fc754-0e01-5cfb-84b9-cf37c1c0cdb5",
      content: "I have placed collapse/expand code onto one of my pages, but the footer now has a huge white space above it in the preview. Is there a way to fix this?",
      creationTime: 1517833093439,
      userEmail: "susjorna@jep.sa",
      labels: ['Collapse', 'Expand']
    },
    {
      title: "setting up my login page profile",
      id: "b52ad1dc-937b-54c3-81e9-2d433dd96bf6",
      content: "Hi there!I just want to ask how to fix my problem",
      creationTime: 1523581514366,
      userEmail: "cube@zo.lv",
      labels: ['Login', 'Problem', 'Tutorial']
    }];
export class TicketDal implements ITicketDAL {

    getAll() : Array<ITicket>{
      return tickets;
    }
    
}