import { OrderStatus } from "../../types";
import { Subjects } from "../subjects";

export interface OrderAwaitingPaymentEvent {
  subject: Subjects.OrderAwaitingPayment;
  data: {
    id: string;
    status: OrderStatus.AwaitingPayment;
  };
}
