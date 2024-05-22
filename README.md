# Trilha Node

Este repositório contém o código para uma API básica construída com Node.js.

### Descrição
Este projeto demonstra a implementação de uma API simples usando Node.js. Serve como um projeto introdutório para entender os fundamentos da construção de APIs com Node.js.

### Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/mariaclaramonteirop/trilha-node.git
   ```
2. Navegue até o diretório do projeto:

   ```sh
   cd trilha-node
   ```
3. Instale as dependências:

   ```sh
   npm install
   ```
4. Instale o nodemon globalmente (se ainda não tiver instalado):
   
   ```sh
   npm install -g nodemon
   ```

### Uso

1. Inicie o servidor:
   ```sh
   npm start
   ```
2. A API estará rodando em `http://localhost:3000`.

### Consumindo a API

Para consumir a API, você pode usar o aplicativo de cliente HTTP como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

#### Exemplo com Postman

1. Baixe e instale o [Postman](https://www.postman.com/downloads/).
2. Abra o Postman e crie uma nova requisição.
3. Configure a requisição para `GET` e insira a URL `http://localhost:3000/seu-endpoint`, ou requisição que desejar executar.
4. Clique em `Send` para enviar a requisição e visualizar a resposta da API.

### Funcionalidades

- Configuração básica de API com Node.js
- Endpoints de exemplo para demonstração

### Contribuição

Contribuições são bem-vindas! Por favor, faça um fork do repositório e envie um pull request.

### Licença

Este projeto está licenciado sob a licença MIT.
