export interface ITicket {
    title: string;
    id?: string,
    content: string;
    creationTime: number;
    userEmail: string;
    labels?: string[];
}