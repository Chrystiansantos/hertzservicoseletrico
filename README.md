# Hertz serviços elétricos.

## Objetivo
O objetivo deste projeto consiste em um simples web site, para a divulgacao da empresa Hertz Serviços Elétricos
onde o cliente poderá ver alguns trabalhos, conhecer um pouco sobre a empresa encontrar informações de contato.

## Demo:


![Exemplo da aplicação](./gifExample.gif)

## Rodar na sua maquina:

Baixe o projeto, com o seguinte comando:  
```bat
git clone https://github.com/Chrystiansantos/hertzservicoseletrico
```

Em seguida crie um projeto Firebase firebase.google.com, acesse a aba Realtime Database e conceda as permissoes de escritas como true.

```bat 
  write:true,
```
### Docker
Preencha as credenciais conforme o informado pelo firebase no seguinte arquivo:

```bat 
  docker-compose.yml
```

No terminal execute:  

```bat
cd hertzservicoseltricos
docker-compose up
```
### Yarn

Crie um arquivo chamado .env na raiz do projeto, copie as informacoes do arquivo .env.example para dentro do arquivo .env, e preencha as informacoes conforme fornecido pelo firebase.

No terminal execute:  

```bat
cd hertzservicoseltricos
yarn
yarn start
```

Para executar sua aplicação, voce irá abrir o navegador e acessar a seguinte url:

http://localhost:3000/