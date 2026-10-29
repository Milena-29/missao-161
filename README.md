## UC10 - Realizar testes nas aplicações desenvolvidas
## Milena Lopes


## Descrição e Funcionalidades

- Aplicação de controle de tarefas.
- Cadastra tarefas: Insert -> Create.
- Consultar/listar tarefas: Select -> Read.
- Atualizar tarefas: Update -> Update.
- Excluir tarefas: Delete -> Delete.

## Tecnologias

| Tecnologia | Função                                                    |  Versão  | Comando  |
| -----------|-----------------------------------------------------------|----------|----------| 
| HTML       | Estrutura/esqueleto da página web                         |          |          |
| CSS        | Estilização/design da página                              |          |          |
| JavaScript | Interatividade/comportamento                              |          |          | 
| Node.js    | Ambiente de execução que permite executar o JS no servidor|          |          |  
| Jest       | Framework de testes automatizados                         |          |          |  
| SQLite     | Banco de dados relacional                                 |          |          | 
| Express    | Framework back-end que recebe requisições do fornt-end    |          |          | 
| Supertest  | Ferramenta que simula requisições HTTP para testar sua API|          |          | 


# Testes

## Testes Unitários

| Caso de teste                                 |  Entrada          | Saída esperada                            |
| ----------------------------------------------| ------------------|-------------------------------------------| 
| A descrição recebe um valor númerico          | 6584              | ""                                        |                  
| O título recebe seja um número                | 2907              | ""                                        |                              
| A  entrada recebe um título com 125 caracteres| "A" repetido(125) | "A" repetido 120 vezes (Ele para no 120 A)|  
