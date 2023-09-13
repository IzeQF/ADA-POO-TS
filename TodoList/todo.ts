class PassoBolo {
    descricao: string;
    tempoEstimado: string;
    concluido: boolean = false;

    constructor(descricao: string, tempoEstimado?: string) {
        this.descricao = descricao;
        this.tempoEstimado = tempoEstimado ?? "não definido";
    }

    toString(): string {
        return `Passo: ${this.descricao}\nTempo Estimado: ${this.tempoEstimado}\nStatus: ${this.concluido ? "Concluído" : "Pendente"}\n`;
    }
}

class ReceitaBolo {

    passos: PassoBolo[] = [];

    adicionarPasso(descricao: string): PassoBolo {
        let novoPasso = new PassoBolo(descricao);

        this.passos.push(novoPasso);
        return novoPasso;
    }

    listarPassos(): number {
        this.passos.forEach((passo) => console.log(`${passo}`));
        return this.passos.length;
    }
}

class ReceitaBoloInicial extends ReceitaBolo {
    passosPrioritarios: PassoBolo[] = [];

    adicionarPassoPrioritario(descricao: string, tempoEstimado: string): PassoBolo {
        let novoPasso = new PassoBolo(descricao, tempoEstimado);

        this.passosPrioritarios.push(novoPasso);
        return novoPasso;
    }

    listarPassos(): number {
        this.passosPrioritarios.forEach((passo) => console.log(`${passo}`));
        return this.passos.length;
    }
}

const receita = new ReceitaBolo();
const receitaInicial = new ReceitaBoloInicial();

receita.adicionarPasso("Pré-aquecer o forno a 180°C");
receita.adicionarPasso("Preparar a massa do bolo");
receita.adicionarPasso("Assar o bolo no forno por 30 minutos");

receitaInicial.adicionarPassoPrioritario("Preparar a cobertura de chocolate", "15 minutos");
receitaInicial.adicionarPassoPrioritario("Decorar o bolo com morangos", "10 minutos");
receitaInicial.adicionarPassoPrioritario("Esperar o bolo esfriar antes de servir", "20 minutos");

receita.passos[2].concluido = true;
receitaInicial.passosPrioritarios[0].concluido = true;

console.log("Passos da Receita de Bolo:");
receita.listarPassos();
console.log("\nPassos da Receita Prioritária de Bolo:");
receitaInicial.listarPassos();
