# Sistema de Gestão de Oficina Mecânica

## Sobre o Projeto
Bem-vindo ao sistema de gestão para oficinas mecânicas! Este projeto foi desenvolvido para ajudar oficinas a organizar e 
acompanhar todas as etapas dos serviços, desde o cadastro do cliente até a conclusão da ordem de serviço (OS). 
Com um fluxo claro e ferramentas eficientes, queremos tornar a administração mais prática e precisa.

## Principais Funcionalidades
- **Cadastro de Clientes:**  
  Registre informações de clientes e seus veículos associados.
  
- **Gestão de Ordens de Serviço (OS):**  
  Gerencie ordens de serviço com status claros, cálculo de custos (mão de obra e peças) e acompanhamento de execução.

- **Controle de Equipe:**  
  Atribua mecânicos a cada ordem de serviço, considerando suas especialidades.

- **Autorizações e Orçamentos:**  
  Permita que clientes aprovem ou rejeitem os serviços propostos. Caso rejeitem, o sistema registra uma taxa de orçamento automaticamente.

- **Histórico de Peças e Serviços:**  
  Controle detalhado das peças usadas e serviços realizados.

- **Relatórios:**  
  Geração de relatórios financeiros e históricos de serviços por cliente, veículo ou mecânico.

---

## Como Funciona
1. **Cadastro de Clientes e Veículos:**  
   - Adicione informações de clientes e registre os veículos trazidos à oficina.

2. **Criação de Ordem de Serviço:**  
   - Os mecânicos avaliam o veículo e adicionam os serviços necessários e as peças associadas.
   - O cliente aprova ou rejeita a execução.

3. **Execução de Serviços:**  
   - Após aprovação, a equipe de mecânicos realiza os serviços dentro do prazo informado.

4. **Finalização:**  
   - O sistema calcula o valor total da OS (mão de obra + peças) e gera o histórico para consultas futuras.

---

## Estrutura do Sistema
### **Entidades Principais**
- **Cliente:** Cadastro de informações pessoais e veículos associados.
- **Veículo:** Automóveis trazidos pelos clientes.
- **Ordem de Serviço (OS):** Registra serviços, peças, datas e status da execução.
- **Mecânico:** Profissionais responsáveis pela execução, com especialidades registradas.
- **Serviços:** Tarefas a serem realizadas no veículo (ex.: troca de óleo, alinhamento).
- **Peças:** Itens utilizados na manutenção (ex.: óleo, pneus).

---

## Tecnologias Utilizadas
- **Frontend:** React (interface moderna e responsiva).
- **Backend:** Node.js com Express (API RESTful).
- **Banco de Dados:** MySQL com Sequelize (modelagem e persistência dos dados).
- **Outras Ferramentas:**
  - Docker para ambiente de desenvolvimento.
  - Swagger para documentação da API.
  - Postman para testes de endpoints.

---

## Como Executar o Projeto
### **1. Configuração do Backend**
- Instale as dependências:
  ```bash
  cd backend
  npm install

  npm start
  
cd frontend
npm install

npm start

Abra seu navegador e acesse: http://localhost:3000.

