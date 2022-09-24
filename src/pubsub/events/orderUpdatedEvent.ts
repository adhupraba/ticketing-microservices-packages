import { OrderStatus } from "../../types";
import { Subjects } from "../subjects";

export interface OrderUpdatedEvent {
  subject: Subjects.OrderUpdated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    version: number;
  };
}
