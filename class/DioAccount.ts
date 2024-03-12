export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    this.balance += value;
    console.log("Você depositou");
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      this.balance -= value;
      console.log('Voce sacou')
    } else {
      throw new Error("Você não pode sacar")
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
