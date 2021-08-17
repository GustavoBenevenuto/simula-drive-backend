# Backend - Driver License

**Projeto backend em desenvolvimento**

## Rotas

#### /questoes

* **Query:** modulo
* **Caminho completo + query:** http://localhost:3333/questoes?modulo=NOME_MODULO_DESEJADO

#### Módulos
* normas_e_condutas
* infracao
* meio_ambiente
* primeiro_socorros
* legislacao
* mecaninca
* sinalizacao
* direcao_defensiva


## Guia Desenvolvedor

1. Baixar as dependências do projeto: ```yarn install ou npm i```

2. Baixar um SGBD como o **PG Admin 4**

3. Criar o banco **simula_drive** pelo SGBD

4. Migrations 
    
    4.1 Executar as migrations: ```yarn typeorm migration:run``` 
    
    4.2 Reverter as migrations: ```yarn typeorm migration:revert```
    
    4.3 Criar migration a partir de um nova Model: ```yarn typeorm migration:generate -- -n CriandoTabelaNova_NOME_TABELA```
    
    4.4 Criar migration manualmente: ```yarn typeorm migration:create -n PopulandoTabelaNova_NOME_TABELA```

5. Rodar o servidor: ```yarn server```

## Tarefas
- [x] Criação das Rotas
    - [x] Criação da rota de _questao_ 
- [x] Criação do Database
    - [x] Migrations de criação de tabela
    - [x] Migrations de inserção de todas as questões no banco
- [x] Criação do Model
- [x] Criação do Repository
- [x] Criação do Service
- [x] Generalização dos erros
- [x] Limite mámixo e embaralhamento das questões
- [ ] Publicar banck-end
- [ ] Adicionar uma rota que retorne todas categorias juntas
