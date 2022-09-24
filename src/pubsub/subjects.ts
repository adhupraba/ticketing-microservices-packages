export enum Subjects {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:updated",

  OrderCreated = "order:created",
  OrderCancelled = "order:cancelled",
  OrderAwaitingPayment = "order:awaitingPayment",

  ExpirationComplete = "expiration:complete",

  PaymentCreated = "payment:created",
  PaymentCompleted = "payment:completed",
}
