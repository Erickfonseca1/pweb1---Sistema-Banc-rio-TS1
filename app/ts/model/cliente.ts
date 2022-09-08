class Cliente {
  private _nome: string;
  private _cpf: string;
  private _conta: number; 

  constructor(nome: string, cpf: string, conta = 1) {
    this._conta = conta;
    this._cpf = cpf;
    this._nome = nome;
  }

  get conta() {
    return this._conta;
  }

  set conta(conta) {
    this._conta = conta;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get cpf() {
    return this._cpf;
  }

  set cpf(cpf) {
    this._cpf = cpf;
  }
}