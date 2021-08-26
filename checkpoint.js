// Aula 09 - 26/08/2021
// Aluno: Mario Roberto Martins de S. S. Braga

/* - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
 */

// Foi um sucesso! compreendido todo o caminho.


// Função de execução do microondas
function microondas(opcao, tempo){
    const opcaoMinusculo = opcao.toLowerCase() // Variável que transforma todos os caracteres da string para letras minúsculas
    // Switch das opções do microondas
    switch(opcaoMinusculo){
        case "pipoca":                                              // Caso da Pipoca
            if (tempo >= 10 && tempo <= 10 * 2)                     // Se o tempo >= Padrão E <= ao dobro do padrão
                return "Prato pronto, bom apetite 😋";
            else if (tempo > 10 * 2 && tempo < 10 * 3)              // Se o tempo > dobro do padrão E < triplo do padrão
                return "A comida queimou 😢";
            else if (tempo >= 10 * 3)                               // Se o tempo >= triplo
                return "Kabumm 💣";
            else if (tempo < 10)                                    // Se o tempo < padrão
                return "Tempo insuficiente ⏳";

        case "macarrao":                                             // Caso da Macarrão
            if (tempo >= 8 && tempo <= 8 * 2)                       // Se o tempo >= Padrão E <= ao dobro do padrão
                return "Prato pronto, bom apetite 😋";
            else if (tempo > 8 * 2 && tempo < 8 * 3)                // Se o tempo > dobro do padrão E < triplo do padrão
                return "A comida queimou 😢";
            else if (tempo >= 8 * 3)                                 // Se o tempo >= triplo
                return "Kabumm 💣";
            else if (tempo < 8)                                      // Se o tempo < padrão
                return "Tempo insuficiente ⏳";

        case "carne":                                               // Caso da carne
            if (tempo >= 15 && tempo <= 15 * 2)                     // Se o tempo >= Padrão E <= ao dobro do padrão
                return "Prato pronto, bom apetite 😋";
            else if (tempo > 15 * 2 && tempo < 15 * 3)              // Se o tempo > dobro do padrão E < triplo do padrão
                return "A comida queimou 😢";
            else if (tempo >= 15 * 3)                               // Se o tempo >= triplo
                return "Kabumm 💣";
            else if (tempo < 15)                                    // Se o tempo < padrão
                return "Tempo insuficiente ⏳";
        
        case "feijao":                                              // Caso do feijão 
            if (tempo >=  12 && tempo <=  12 * 2)                   // Se o tempo >= Padrão E <= ao dobro do padrão
                return "Prato pronto, bom apetite 😋";
            else if (tempo >  12 * 2 && tempo <  12 * 3)            // Se o tempo > dobro do padrão E < triplo do padrão
                return "A comida queimou 😢";
            else if (tempo >=  12 * 3)                              // Se o tempo >= triplo
                return "Kabumm 💣";
            else if (tempo <  12)                                   // Se o tempo < padrão
                return "Tempo insuficiente ⏳";
        
        case "brigadeiro":                                          // Caso do brigadeiro
            if (tempo >=  8 && tempo <=  8 * 2)                     // Se o tempo >= Padrão E <= ao dobro do padrão
                return "Prato pronto, bom apetite 😋";
            else if (tempo >  8 * 2 && tempo <  8 * 3)              // Se o tempo > dobro do padrão E < triplo do padrão
                return "A comida queimou 😢";
            else if (tempo >=  8 * 3)                               // Se o tempo >= triplo
                return "Kabumm 💣";
            else if (tempo <  8)                                    // Se o tempo < padrão
                return "Tempo insuficiente ⏳";
        
        default:                                                    // Caso default (padrão)
            return "Prato inexistente 🤔";
    }
}

// Teste da função com 'pipoca'
console.log(microondas("pipoca", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Pipoca", 15)); // Expected: Prato pronto, bom apetite �
console.log(microondas("pipoca", 25)); // Expected: A comida queimou �
console.log(microondas("Pipoca", 30)); // Expected: Kabumm �

// Teste da função 'macarrão'
console.log();
console.log(microondas("macarrao", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Macarrao", 10)); // Expected: Expected: Prato pronto, bom apetite �
console.log(microondas("macarrao", 18)); // Expected: Expected: A comida queimou �
console.log(microondas("Macarrao", 25)); // Expected: Expected: Kabumm �

// Teste da função 'carne'
console.log();
console.log(microondas("carne", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Carne", 16)); // Expected: Prato pronto, bom apetite �
console.log(microondas("carne", 31)); // Expected: A comida queimou �
console.log(microondas("Carne", 46)); // Expected: Kabumm �

// Teste da função 'feijao'
console.log();
console.log(microondas("feijao", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Feijao", 13)); // Expected: Prato pronto, bom apetite �
console.log(microondas("feijao", 25)); // Expected: A comida queimou �
console.log(microondas("Feijao", 37)); // Expected: Kabumm �

// Teste da função 'brigadeiro'
console.log();
console.log(microondas("brigadeiro", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Brigadeiro", 9)); // Expected: Prato pronto, bom apetite �
console.log(microondas("brigadeiro", 17)); // Expected: A comida queimou �
console.log(microondas("Brigadeiro", 25)); // Expected: Kabumm �

// Teste do caso onde a opção não existe
console.log();
console.log(microondas("strogonoff", 15)); // Expected: Tempo insuficiente ⏳
