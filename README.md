Requisitos

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

    Node.js
    MongoDB

Instalação

    Clone o repositório:

    git clone https://github.com/JhonMeddev/leillao-nodejs.git   

Acesse o diretório do projeto:

Instale as dependências:

    npm install

Configuração

    Certifique-se de que o MongoDB esteja em execução em sua máquina.

    Verifique o arquivo de configuração do banco de dados (config.js) e ajuste as configurações conforme necessário.

Execução

    Inicie o servidor:

    sql

    npm start

    O servidor estará em execução em http://localhost:3000.

Uso

    Use um cliente HTTP (como Postman ou Insomnia) para enviar solicitações para a API.


# Endpoints da API

**USUARIO:**
- GET USUARIOS: (http://localhost:3000/usuarios/)
- POST USUARIO: (http://localhost:3000/usuarios/)
- GET USUARIO BY ID: (http://localhost:3000/usuarios/:id)
- PUT ATUALIZAR USUARIO BY ID: (http://localhost:3000/usuarios/:id)
- DELETE USUARIO BY ID: (http://localhost:3000/usuarios/:id)

**CARRO:**
- GET CARROS: (http://localhost:3000/carros/)
- POST CARRO: (http://localhost:3000/carros/)
- GET CARRO BY ID: (http://localhost:3000/carros/:id)
- PUT ATUALIZAR CARRO BY ID: (http://localhost:3000/carros/:id)
- DELETE CARRO BY ID: (http://localhost:3000/carros/:id)

**LANCE:**
- GET LANCE: (http://localhost:3000/lances/)
- POST LANCE: (http://localhost:3000/lances/)
- GET LANCE BY ID: (http://localhost:3000/lances/:id)
- PUT ATUALIZAR LANCE BY ID: (http://localhost:3000/lances/:id)
- DELETE LANCE BY ID: (http://localhost:3000/lances/:id)
- PUT ENCERRAR LEILAO: (http://localhost:3000/lances/encerrar/:carroId)

## Imagens

**CREATE CARRO:**  
![Captura de tela de 2024-05-13 13-48-03](https://github.com/JhonMeddev/leillao-nodejs/assets/88754241/6c56386b-c008-4e76-917c-ed5b06e08862)

**GET CARROS:**  
![Captura de tela de 2024-05-13 13-49-00](https://github.com/JhonMeddev/leillao-nodejs/assets/88754241/444a3ee2-6482-4563-83d8-bfcc4a5d8869)

**CREATE USER:**  
![Captura de tela de 2024-05-13 13-50-11](https://github.com/JhonMeddev/leillao-nodejs/assets/88754241/f1141a36-f8b2-4843-9619-1357e20e8c64)

**GET USERS:**  
![Captura de tela de 2024-05-13 13-50-43](https://github.com/JhonMeddev/leillao-nodejs/assets/88754241/9a45b5aa-bd4a-429a-a60a-dde40fe9101b)

**GET USER BY ID:**  
![Captura de tela de 2024-05-13 13-51-11](https://github.com/JhonMeddev/leillao-nodejs/assets/88754241/a8b7863a-bb58-46bc-8a9f-ab9a2f80778f)

**CREATE LANCE:**  
![Captura de tela de 2024-05-13 13-51-51](https://github.com/JhonMeddev/leillao-nodejs/assets/88754241/05580fa4-8193-444f-84b0-3d1347625923)

**GET LANCES:**  
![Captura de tela de 2024-05-13 13-52-20](https://github.com/JhonMeddev/leillao-nodejs/assets/88754241/d2b86ae1-413c-4093-a2df-54ce362fb468)

**ENCERRAR LEILAO BY CARRO ID:**  
![Captura de tela de 2024-05-13 13-53-45](https://github.com/JhonMeddev/leillao-nodejs/assets/88754241/03878b71-fd92-4804-b5af-4cfe8c0d1fb3)



