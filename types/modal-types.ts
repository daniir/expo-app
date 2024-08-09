import { IQuoteForm } from './form-types';

export interface IModalInfo extends IQuoteForm {
  fullName: string;
  sequential: number;
  amount: number;
}
