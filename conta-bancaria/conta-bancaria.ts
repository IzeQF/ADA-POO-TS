
interface iOperacoesBancarias {
    depositar(valor: number): void;
    sacar(valor: number): boolean;
  }
  

  class Logger {
    static registrarLog(mens: string): void {
      console.log(mens);
    }
  }
  

  class ContaBancaria implements iOperacoesBancarias {
    private nConta: string;
    private saldo: number;
    private titular: string;
  
    constructor(nConta: string, saldoInicial: number, titular: string) {
      this.nConta = nConta;
      this.saldo = saldoInicial;
      this.titular = titular;
    }
  

    getNConta(): string {
      return this.nConta;
    }
  
    getSaldo(): number {
      return this.saldo;
    }
  
    consultarSaldo(): number {
      return this.saldo;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
      Logger.registrarLog(`Depósito realizado na conta ${this.nConta}: ${valor}`);
    }
  
    sacar(valor: number): boolean {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        Logger.registrarLog(`Saque de ${valor} na conta ${this.nConta}`);
        return true;
      }
      return false;
    }
  }
  
console.log('-------------------------');
  class ContaPoupanca extends ContaBancaria {
    private juros: number;
  
    constructor(nConta: string, saldoInicial: number, titular: string, juros: number) {
      super(nConta, saldoInicial, titular);
      this.juros = juros;
    }
 

    consultarSaldo(): number {
      const saldoComJuros = this.getSaldo() + this.getSaldo() * this.juros;
      Logger.registrarLog(`Consulta de saldo com juros na conta ${this.getNConta()}`);
      return saldoComJuros;
    }
  }


  const conta1 = new ContaBancaria("1234564-5", 5000, "Victor");
  const conta2 = new ContaPoupanca("5454532-1", 200, "Izequias", 0.05);
  
  console.log("Saldo Conta 1:", conta1.consultarSaldo());
console.log('-------------------------');
  console.log("Saldo Conta 2:", conta2.consultarSaldo());
  
  conta1.depositar(56.46);

  conta2.sacar(37.30);
  console.log('-------------------------');
  console.log("Saldo da Conta 1 após depósito:", conta1.consultarSaldo());
console.log('-------------------------');
  console.log("Saldo da Conta 2 após saque:", conta2.consultarSaldo());
  
