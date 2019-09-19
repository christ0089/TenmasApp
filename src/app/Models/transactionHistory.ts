import { TransactionType } from './Enum/transactionType';

export interface TransactionHistory {
    transactionType: TransactionType;
    date: string;
    receiver: string;
    sender: string;
    amount: number;
}
