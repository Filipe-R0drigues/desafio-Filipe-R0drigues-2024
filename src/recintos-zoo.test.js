import { RecintosZoo } from "./recintos-zoo.js";

describe('Recintos do Zoologico', () => {

    test('Deve rejeitar animal inválido', () => {
            const resultado = new RecintosZoo().analisaRecintos('UNICORNIO', 1);
            expect(resultado.erro).toBe("Animal inválido");
            expect(resultado.recintosViaveis).toBeFalsy();
        });

    test('Deve rejeitar quantidade inválida', () => {
            const resultado = new RecintosZoo().analisaRecintos('MACACO', 0);
            expect(resultado.erro).toBe("Quantidade inválida");
            expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 macacos', () => {
            const resultado = new RecintosZoo().analisaRecintos('MACACO', 10);
            expect(resultado.erro).toBe("Não há recinto viável");
            expect(resultado.recintosViaveis).toBeFalsy();
        });

    test('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 5 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recintos para 2 macacos', () => {

        const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 3 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 2 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Deve encontrar recinto para 1 leao',() =>{
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 3 total: 9)');
    });

    test('Deve encontrar recinto para 2 leao',() =>{
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 0 total: 9)');
    });

    test('Não deve encontrar recintos para 3 leões', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 3);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recinto para 1 hipopotamo',() =>{
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 0 total: 7)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 4 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 2 hipopotamo',() =>{
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 0 total: 8)');
    });

    test('Não deve encontrar recintos para 3 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 3);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recinto para 1 macaco',() =>{
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 6 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });
    
    test('Não deve encontrar recinto para 1 leopardo',() =>{
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO',1)
        expect(resultado.erro).toBe("Não há recinto viável")
    });

    test('Deve encontrar recinto para 2 crocodilo',() =>{
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 2 total: 8)');
    });

    test('Não deve encontrar recintos para 3 crocodilo', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 3);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 3 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 3);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 2 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Deve encontrar recintos para 4 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 4);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 3 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 1 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 0 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });
    
    test('Deve encontrar recintos para 5 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 5);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 0 total: 5)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recintos para 6 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 6);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 1 total: 10)');
    });

    test('Deve encontrar recintos para 7 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 7);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 0 total: 10)');
    });

    test('Não deve encontrar recintos para 8 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 8);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 1 gazela', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recintos para 2 gazela', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });
    
    test('Deve encontrar recintos para 3 gazela', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 3);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 0 total: 10)');
    });

    test('Não deve encontrar recintos para 4 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 4);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });
});
