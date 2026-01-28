# SauceDemo Automation - Cypress E2E

![Cypress](https://img.shields.io/badge/Cypress-15.8%2B-green?style=flat-square&logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-16%2B-blue?style=flat-square&logo=node.js)
![Allure](https://img.shields.io/badge/Allure-2.36%2B-orange?style=flat-square&logo=allure)
![Cypress Cloud](https://img.shields.io/badge/Cypress%20Cloud-Enabled-informational?style=flat-square&logo=cypress)
![Page Object Model](https://img.shields.io/badge/Page%20Object%20Model-POM-lightgrey?style=flat-square)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI-blue?style=flat-square&logo=githubactions)
![License](https://img.shields.io/badge/License-ISC-yellow?style=flat-square)

Projeto de automação de testes End-to-End (E2E) com Cypress para a aplicação [SauceDemo](https://www.saucedemo.com/), desenvolvido para portfólio.

## Tecnologias

- Cypress para automação E2E
- Page Object Model (POM)
- Allure Reports para relatórios detalhados
- Cypress Cloud para execução e monitoramento de testes
- GitHub Actions para CI/CD

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

### Execução Local

- **Modo interativo (UI)**:

```bash
npm run cypress:open
```

- **Modo headless**:

```bash
npm run cypress:run
```

- **Modo headed**:

```bash
npm run test:headed
```

### Execução com Gravação no Cypress Cloud

Para gravar a execução no Cypress Cloud, utilize a variável de ambiente `CYPRESS_RECORD_KEY`.

⚠️ **Nunca versionar a Record Key no repositório.**

#### Exemplo (Linux / Mac):
```bash
export CYPRESS_RECORD_KEY=sua-chave-de-gravacao
npm run cypress:run
```

#### Exemplo (Windows PowerShell):
```powershell
$env:CYPRESS_RECORD_KEY="sua-chave-de-gravacao"
npm run cypress:run
```

#### Exemplo (Windows CMD):
```cmd
set CYPRESS_RECORD_KEY=sua-chave-de-gravacao
npm run cypress:run
```

## Relatórios Allure

```bash
npm run allure:generate
npm run allure:open
npm run allure:serve
```

## CI/CD (GitHub Actions)

O projeto está integrado com **GitHub Actions** e **Cypress Cloud** para execução automatizada e monitoramento contínuo dos testes.

### Pipeline Automatizado

- **Execução automática**: O pipeline roda automaticamente em cada push e pull request
- **Ambiente**: Ubuntu, Node.js 18, Java 17 (para Allure Reports)
- **Cache**: Cache de npm e Cypress binary para builds mais rápidos
- **Arquivo do pipeline**: [.github/workflows/ci.yml](.github/workflows/ci.yml)

### Etapas do Pipeline

1. **Checkout** do código
2. **Setup Node.js** 18 com cache de npm
3. **Setup Java** 17 para geração de relatórios Allure
4. **Cache do Cypress** binary
5. **Instalação de dependências** com `npm ci`
6. **Verificação de código** com ESLint (`npm run lint`)
7. **Execução de testes E2E** com Cypress em modo headless
8. **Geração de relatórios Allure**
9. **Upload de artifacts** (relatórios Allure)

### Integração com Cypress Cloud

O projeto está configurado para executar testes no **Cypress Cloud** com as seguintes funcionalidades:

- ✅ **Gravação de execuções**: Todos os testes são gravados e disponibilizados no dashboard do Cypress Cloud
- ✅ **Execução paralela**: Os testes são executados em 2 containers paralelos para reduzir o tempo de execução
- ✅ **Monitoramento contínuo**: Acompanhamento de resultados, screenshots e vídeos de falhas
- ✅ **Histórico de execuções**: Acesso ao histórico completo de todas as execuções

**Configuração:**
- **Project ID**: `ov4cmo`
- A chave de gravação (`CYPRESS_RECORD_KEY`) está configurada como secret no GitHub Actions para segurança

Para visualizar os resultados no Cypress Cloud, acesse o dashboard do projeto após a execução do pipeline.

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

## Segurança da Informação

Este projeto foi desenvolvido exclusivamente para fins de estudo e portfólio.

- Utiliza apenas aplicações públicas de demonstração
- Não contém credenciais reais, dados pessoais ou informações sensíveis
- Nenhuma chave, token ou segredo é versionado no repositório
- Variáveis sensíveis são gerenciadas exclusivamente via variáveis de ambiente e GitHub Secrets

Este repositório segue boas práticas de segurança recomendadas para automação de testes.

## Licença

ISC
