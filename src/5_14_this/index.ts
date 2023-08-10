class NewPayment {
  private date: Date = new Date();

  getDate(this: NewPayment) {
    return this.date;
  }

  getDatArrow() {
    return this.date;
  }
}

const payment = new NewPayment();

const user = {
  id: 1,
  paymentDate: payment.getDate.bind(payment),
  paymentDateArrow: payment.getDatArrow,
};

payment.getDate();
user.paymentDate();
user.paymentDateArrow();

class PaymentPersistent extends NewPayment {
  save() {
    return this.getDatArrow(); // if arrow function
    // return super.getDate(); // if function declaration
  }
}
