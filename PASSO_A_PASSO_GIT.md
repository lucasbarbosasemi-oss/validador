# Atividade - Validação de Chamados + GitHub Actions

## 1. Instalar dependências

Na pasta do projeto:

```bash
npm install
```

Depois:

```bash
npm test
```

O resultado esperado na versão final é que todos os testes passem.

## 2. Simular a falha pedida pelo professor

A ideia é fazer primeiro um push com os novos testes, mas ainda sem as novas validações em `src/validator.ts`.

Deixe temporariamente o `validator.ts` com a validação antiga e faça:

```bash
git status
git add src/validator.test.ts
git commit -m "test: adiciona testes para limites do titulo"
git push origin feature/validacao-chamado
```

Abra um Pull Request da branch `feature/validacao-chamado` para `main`.

Como os testes novos exigem mínimo de 5 e máximo de 100 caracteres, o GitHub Actions deverá apresentar uma execução com **falha**.

## 3. Corrigir a validação

Agora coloque a versão final de `src/validator.ts`, que valida:

- título não vazio;
- título não formado apenas por espaços;
- mínimo de 5 caracteres;
- máximo de 100 caracteres.

Depois:

```bash
git add src/validator.ts
git commit -m "fix: adiciona limites de 5 a 100 caracteres ao titulo"
git push origin feature/validacao-chamado
```

O mesmo Pull Request será atualizado e o GitHub Actions executará os testes novamente. Desta vez a execução deverá apresentar **sucesso**.

## 4. Prints para entregar

Faça pelo menos dois prints no GitHub Actions:

1. execução com **falha** (antes da correção);
2. execução com **sucesso** (depois da correção).

Também podem ser feitos prints mostrando os testes passando e o Pull Request atualizado.
