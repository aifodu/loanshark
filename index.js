import Loan from './loan';

const loan = new Loan(user, tenor, amount)
 
//now you can simply ask for the installment
console.log(loan.paymentInstallment);