# SauceDemo Automation - Cypress E2E

Projeto de automação de testes End-to-End (E2E) com Cypress para a aplicação [SauceDemo](https://www.saucedemo.com/), desenvolvido para portfólio.

## Tecnologias

- Cypress para automação E2E
- Page Object Model (POM)
- Allure Reports (opcional)

## Pré-requisitos

- Node.js 16+
- npm

## Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

## Execução dos testes

- Modo interativo (UI):

```bash
npm run cypress:open
```

- Modo headless:

```bash
npm run cypress:run
```

- Modo headed:

```bash
npm run test:headed
```

## Relatórios Allure

```bash
npm run allure:generate
npm run allure:open
npm run allure:serve
```

## CI (GitHub Actions)

- O pipeline roda automaticamente em cada push e pull request.
- Executa verificação de sintaxe com ESLint e testes E2E com Cypress.
- Ambiente: Ubuntu, Node.js 18, cache de npm para builds mais rápidos.
- Arquivo do pipeline: [.github/workflows/ci.yml](file:///c:/Projetos-Testes/saucedemo-automation-cypress/.github/workflows/ci.yml)
- Etapas principais:
  - Instala dependências com `npm ci`
  - Lint com `npm run lint`
  - Testes E2E headless com `npm run test`

## Estrutura do projeto

```
cypress/
 ├─ e2e/
 │   ├─ login.cy.js
 │   └─ checkout.e2e.cy.js
 ├─ pages/
 │   ├─ LoginPage.js
 │   ├─ InventoryPage.js
 │   ├─ CartPage.js
 │   └─ CheckoutPage.js
 ├─ fixtures/
 │   └─ users.json
 └─ support/
     ├─ commands.js
     └─ e2e.js
```

## Credenciais (boas práticas)

- Crie um arquivo `cypress.env.json` localmente com:

```json
{
  "SAUCE_USERNAME": "standard_user",
  "SAUCE_PASSWORD": "secret_sauce"
}
```

- O arquivo `cypress.env.json` é ignorado pelo Git. Veja `cypress.env.example.json` como referência.
- Os testes usam `Cypress.env('SAUCE_USERNAME')` e `Cypress.env('SAUCE_PASSWORD')`, com fallback para valores públicos de demonstração.

## Licença

ISC
