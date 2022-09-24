export enum Subjects {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:updated",

  OrderCreated = "order:created",
  OrderCancelled = "order:cancelled",
  OrderUpdated = "order:updated",
  OrderAwaitingPayment = "order:awaitingPayment",

  ExpirationComplete = "expiration:complete",

  PaymentCreated = "payment:created",
  PaymentCompleted = "payment:completed",
}
