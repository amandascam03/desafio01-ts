import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount'

const companyAccount: CompanyAccount = new CompanyAccount('Nath', 1)
console.log(companyAccount)
companyAccount.deposit(500)
console.log(companyAccount)
companyAccount.withdraw(200)
console.log(companyAccount)
companyAccount.getLoan(100)
console.log(companyAccount)

const peopleAccount: PeopleAccount = new PeopleAccount(123, "Joao", 2)
console.log(peopleAccount)
peopleAccount.deposit(300)
console.log(peopleAccount)
peopleAccount.withdraw(20)
console.log(peopleAccount)

const plusAccount: PlusAccount = new PlusAccount('DIO', 23)
plusAccount.deposit(1000)
console.log(plusAccount)
plusAccount.withdraw(50)
console.log(plusAccount)
plusAccount.depositPlus(500)
console.log(plusAccount)