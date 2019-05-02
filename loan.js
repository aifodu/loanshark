class Loan {
	constructor (user, tenor, amount){

	}

	processPayment(amount){
		this.balance = this.balance - amount;
	}

	get paymentInstallment() {
		return (this.amount + this.interest) / this.tenor;  
	}
}

export default Loan;