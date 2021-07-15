create user wowgames with encrypted password 'wowgames123';
create database wongames owner wowgames;
yarn create strapi-app wongames

// editor do ckeditor
yarn add strapi-plugin-ckeditor5

//apos instalr strapi-plugin
yarn build --clean

//para ver a relacao do banco de dados
yarn add strapi-plugin-entity-relationship-chart

//customizacao
yarn develop --watch-admin

curl -X POST http://localhost:1337/games/populate


curl -X POST http://localhost:1337/games/populate\?availability\=coming\&sort\=popularity\?page\=1
//para pegar coisas de sites
yarn add JSDOM

//para criar slug retira acento e tal...
yarn add slugify
 