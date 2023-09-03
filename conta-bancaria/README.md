1- Definir a Classe ContaBancaria:
* — Crieumaclasse chamada ContaBancaria.
* — Aclassedeveteros atributos: numeroConta (string), saldo (number) e titular (string)
* — Implementeoconstrutor da classe para receber o número da conta, o saldo inicial e o titular da conta.
* — Implementeos métodos consultarSaldo, depositar e sacar,

2- Aplicar Encapsulamento:
* — Utilizemodificadores de acesso para encapsular os atributos da classe.
* — Osatributos numeroConta e saldo devem ser privados.
* — Implemente métodos de acesso (getters) para os atributos privados.

3 - Utilizar Herança:
* — Crieumaciasse chamada ContaPoupanca que herda da classe ContaBancaria.
* — Implementeumatributo adicional na classe ContaPoupanca chamado juros (number).
* — Overrideométodo consultarSaldo na classe ContaPoupanca para calcular o saldo com os juros.

4- Aplicar Interface:
* — Crie uma interface chamada OperacoesBancarias com os métodos depositar e sacar.
* — Implemente essainterface nas classes ContaBancaria e ContaPoupanca,

5- Demonstrar Princípio da Responsabilidade Única:
* — Crieumaclasse chamada Logger que seja responsável por registrar logs.
* — Utilizeessaclasse pararegistrar logs de depósitos e saques realizados,

6-Testar o Sistema:
* — Crieinstânciasdas classes ContaBancaria e ContaPoupanca.
* — Realizedepósitos,saques e consultas de saldo para testar as funcionalidades.
* — UtilizeaclasseLogger para registrar os logs das operações.

Desafio Adicional:
* — Crieumaclasse chamada Banco que contenha um array de contas bancárias.
* — Implemente um método na classe Banco para listar todas as contas e seus saldos.
* — Utilizeasclasses ContaBancaria e ContaPoupanca para criar contas no banco e teste o método de
listagem.
