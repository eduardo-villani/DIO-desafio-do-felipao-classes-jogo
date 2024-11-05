// # 3️⃣ Escrevendo as classes de um Jogo
// Credits Eduardo Villani
// Definição da classe do heroi
class hero {
  constructor(name, age, classType, weaponType) {
    this.name = name;
    this.age = age;
    this.classType = classType;
    this.weaponType = weaponType;
  }

  // seleciona a arma conforme classe escolhida - select weapon according hero class
  weaponSelector() {
    if (this.classType === "mago") {
      return (this.weaponType = "magia");
    } else if (this.classType === "guerreiro") {
      return (this.weaponType = "espada");
    } else if (this.classType === "monge") {
      return (this.weaponType = "artes marciais");
    } else if (this.classType === "ninja") {
      return (this.weaponType = "shuriken");
    }
  }

  attack() {
    return console.log(`O ${this.name} atacou usando ${this.weaponType}`);
  }
}

// Solicita ao usuário para digitar o nome e idade do heroi e classe do heroi (mago, guerreiro, monge ou ninja)
let heroName = "Elowen Drathis";
let heroAge = 32;
let heroClasses = "ninja"; // escolha: "mago" "guerreiro" "monge" "ninja"

//Object Hero: creating a new hero...

const player = new hero(heroName, heroAge, heroClasses);

// selecting weapon according to the chosen hero class
player.weaponSelector();

// printing attack phrase
player.attack();

/* Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

 
Bons estudos 😉
*/
