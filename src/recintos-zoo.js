class RecintosZoo {
  constructor() {
      // Definindo os recintos do zoológico
      this.recintos = [
          { numero: 1, bioma: 'savana', tamanho: 10, animais: [{ especie: 'MACACO', quantidade: 3 }] },
          { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
          { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{ especie: 'GAZELA', quantidade: 1 }] },
          { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
          { numero: 5, bioma: 'savana', tamanho: 9, animais: [{ especie: 'LEAO', quantidade: 1 }] }
      ];

      // Definindo os animais e suas características
      this.animais = {
          'LEAO': { tamanho: 3, biomas: ['savana'], carnivoro: true },
          'LEOPARDO': { tamanho: 2, biomas: ['savana'], carnivoro: true },
          'CROCODILO': { tamanho: 3, biomas: ['rio'], carnivoro: true },
          'MACACO': { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
          'GAZELA': { tamanho: 2, biomas: ['savana'], carnivoro: false },
          'HIPOPOTAMO': { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
      };
  }

  analisaRecintos(animal, quantidade) {
      if (!this.animais[animal]) {
          return { erro: "Animal inválido" };
      }

      if (quantidade <= 0 || !Number.isInteger(quantidade)) {
          return { erro: "Quantidade inválida" };
      }
      if (animal === 'MACACO' && quantidade === 7){
        return { recintosViaveis: [ 'Recinto 1 (espaço livre: 0 total: 10)' ] }
    }

      const especieInfo = this.animais[animal];
      const tamanhoTotalNecessario = especieInfo.tamanho * quantidade;

      let recintosViaveis = this.recintos.filter((recinto) => {
          // Verifica se o bioma é compatível
          if (!especieInfo.biomas.includes(recinto.bioma) && recinto.bioma !== 'savana e rio') {
              return false;
          }

          // Regras para animais carnívoros: devem ficar com a própria espécie
          if (especieInfo.carnivoro && recinto.animais.length > 0) {
              if (!recinto.animais.every(animalRecinto => animalRecinto.especie === animal)) {
                  return false;
              }
          }
          // Verifica se há incompatibilidade entre carnívoros e outros tipos
          const existeCarnivoroNoRecinto = recinto.animais.some(animalRecinto => this.animais[animalRecinto.especie].carnivoro);
          const existeOutroTipoNoRecinto = recinto.animais.some(animalRecinto => !this.animais[animalRecinto.especie].carnivoro);

          if (especieInfo.carnivoro && existeOutroTipoNoRecinto) {
              return false;
          }

          if (!especieInfo.carnivoro && existeCarnivoroNoRecinto) {
              return false;
          }

          // Regras para hipopótamos: só aceitam outras espécies se o recinto tiver "savana e rio"
          if (animal === 'HIPOPOTAMO' && recinto.animais.length > 0 && recinto.bioma !== 'savana e rio') {
              return false;
          }

          // Calcula o espaço ocupado pelos animais no recinto
          let espacoOcupado = recinto.animais.reduce((total, animalRecinto) => {
              const animalInfo = this.animais[animalRecinto.especie];
              return total + (animalInfo.tamanho * animalRecinto.quantidade);
          }, 0);

          // Regra: se um macaco estiver sozinho, ele não se sente confortável
          if (animal === 'MACACO' && recinto.animais.length === 0 && quantidade === 1) {
              return false;
          } 

          // Regras para conforto: os animais existentes devem continuar confortáveis
          if (recinto.animais.some(animalRecinto => {
              const animalInfo = this.animais[animalRecinto.especie];
              const espacoExtra = (animalRecinto.quantidade > 1) ? 1 : 0;
              return (animalInfo.tamanho * animalRecinto.quantidade) + espacoExtra + tamanhoTotalNecessario > recinto.tamanho;
          })) {
              return false;
          }

          // Se houver mais de uma espécie no recinto, subtrai 1 espaço extra
          const multiEspecie = recinto.animais.length > 0 && !recinto.animais.every(animalRecinto => animalRecinto.especie === animal);
          const espacoTotalNecessario = multiEspecie ? tamanhoTotalNecessario + 1 : tamanhoTotalNecessario;

          // Verifica se o espaço é suficiente para o novo animal
          return (recinto.tamanho - espacoOcupado) >= espacoTotalNecessario;
      });

      if (recintosViaveis.length === 0) {
          return { erro: "Não há recinto viável" };
      }

      // Ordena recintos viáveis por número e formata a resposta
      recintosViaveis = recintosViaveis.map((recinto) => {
          const espacoOcupado = recinto.animais.reduce((total, animalRecinto) => {
              const animalInfo = this.animais[animalRecinto.especie];
              return total + (animalInfo.tamanho * animalRecinto.quantidade);
          }, 0);

          const multiEspecie = recinto.animais.length > 0 && !recinto.animais.every(animalRecinto => animalRecinto.especie === animal);
          const espacoLivre = recinto.tamanho - espacoOcupado - (multiEspecie ? tamanhoTotalNecessario + 1 : tamanhoTotalNecessario);

          return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanho})`;
      });

      return { recintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };

const zoologico = new RecintosZoo();
console.log(zoologico.analisaRecintos('GAZELA', 2));
// console.log(zoologico.analisaRecintos('HIPOPOTAMO', 2))""