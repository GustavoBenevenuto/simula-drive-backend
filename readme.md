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

## Guia Produção
1. Rodar migrations em produção atráves do terminal
    
    1.1 Entrar no servidor node em produção ```heroku run bash```

    1.2 Realizar o login
    
    1.3 Rodar as migrations ```npx typeorm migration:run```

2. Acessar o Banco de produção

    2.0 ```heroku pg:psql```
