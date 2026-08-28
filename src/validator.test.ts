// src/validator.test.ts
import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {

    test('Deve validar com sucesso um chamado com título preenchido', () => {
        const resultado = validarChamado("Erro de conexão com o banco MySQL");
        expect(resultado).toBe(true);
    });

    test('Deve validar um título com exatamente 5 caracteres', () => {
        expect(validarChamado("Teste")).toBe(true);
    });

    test('Deve validar um título com exatamente 100 caracteres', () => {
        const titulo = 'A'.repeat(100);
        expect(validarChamado(titulo)).toBe(true);
    });

    test('Deve lançar erro se o título do chamado for vazio', () => {
        expect(() => validarChamado("")).toThrow("O título do chamado não pode ser vazio.");
    });

    test('Deve lançar erro se o título for composto apenas por espaços em branco', () => {
        expect(() => validarChamado("   ")).toThrow("O título do chamado não pode ser vazio.");
    });

    test('Deve lançar erro se o título possuir menos de 5 caracteres', () => {
        expect(() => validarChamado("Erro")).toThrow(
            "O título do chamado deve possuir no mínimo 5 caracteres."
        );
    });

    test('Deve lançar erro se o título possuir mais de 100 caracteres', () => {
        const titulo = 'A'.repeat(101);
        expect(() => validarChamado(titulo)).toThrow(
            "O título do chamado deve possuir no máximo 100 caracteres."
        );
    });
});
