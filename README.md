# api-communication-sample

Este projeto foi idealizado para ser um exemplo de comunicação com a API da Greenmile.

A primeira tela é uma tela de login onde é solicitado qual o servidor que se deseja comunicar, um usuário e uma senha.

Estando todos esses dados corretos, o usuário é direcionado para uma tela que lista todas as organizações daquele servidor.

São basicamente duas chamadas para a API: a chamada inicial (POST) de autenticação do usuário e a chamada para o endpoint de organização (GET).

# Tecnologias Utilizadas:

* Axios
* React Material

# Passos para rodar a aplicação:

* App React JS:
  * Clonar repositório
  * yarn install
  * yarn start

* Android APP:
  * Clonar repositório
  * cordova platform add android
  * cordova build android
  * cordova run android
