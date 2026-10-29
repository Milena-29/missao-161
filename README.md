## UC10 - Realizar testes nas aplicações desenvolvidas
## Milena Lopes


## Descrição e Funcionalidades

- Aplicação de controle de tarefas.
- Cadastra tarefas: Insert -> Create.
- Consultar/listar tarefas: Select -> Read.
- Atualizar tarefas: Update -> Update.
- Excluir tarefas: Delete -> Delete.

## Tecnologias

| Tecnologia | Função                                                    |  Versão       | Comando           |
| -----------|-----------------------------------------------------------|----------     |--------------     | 
| HTML       | Estrutura/esqueleto da página web                         |               |                   |
| CSS        | Estilização/design da página                              |               |                   |
| JavaScript | Interatividade/comportamento                              | 12.4.254.14-node.12| node -p "process.versions.v8" | 
| Node.js    | Ambiente de execução que permite executar o JS no servidor| v22.2.0       | node --version    |
| Jest       | Framework de testes automatizados                         | 29.7.0        | npx jest --version|  
| SQLite     | Banco de dados relacional                                 | sqlite3@5.1.7 | npm list sqlite3 better-sqlite3| 
| Express    | Framework back-end que recebe requisições do fornt-end    |express@4.22.3 | npm list express  | 
| Supertest  | Ferramenta que simula requisições HTTP para testar sua API|supertest@7.3.1| npm list supertest| 


# Testes

## Testes Unitários

| Caso de teste                                 |  Entrada          | Saída esperada                            |
| ----------------------------------------------| ------------------|-------------------------------------------| 
| A entrada recebe um valor vazio               | ""                | Erro                                      |                  
| A entrada recebe seja um número               | 2907              | ""                                        |                              
| A  entrada recebe um título com 125 caracteres| "A" repetido(125) | "A" repetido 120 vezes (Ele para no 120 A)|  
