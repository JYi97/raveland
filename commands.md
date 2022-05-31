Set up database and user raveland_app

psql

CREATE USER raveland_app WITH PASSWORD 'plurRave123!' CREATEDB;

CREATE DATABASE raveland_app WITH OWNER raveland_app;

npx sequelize-cli model:generate --name Rave --attributes userId:integer,title:string,image:text,description:text,address:string,city:string,state:string,zipCode:string,date:string

npx sequelize-cli model:generate --name Review --attributes userId:integer,raveId:integer,content:text,images:text

npx sequelize-cli model:generate --name Like --attributes userId:integer,raveId:integer

npx sequelize seed:generate --name raves

npx sequelize seed:generate --name reviews

npx sequelize seed:generate --name likes

Seeders for raves

{
    userId:
    title:
    image:
    description:
    address:
    city:
    state:
    zipCode:
    date:
}

Seeders for reviews

{
    userId:
    raveId:
    content:
    images:
}

Seeders for likes

{
    userId:
    raveId:
}

Make sure .env file is in backend root and migrate and seed.

npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all

If you need to reseed data

npx dotenv sequelize db:seed:undo:all
npx dotenv sequelize db:migrate:undo:all
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all

Create raves routes in routes/api

Create raves.js in store, create a home component, and implement component to App.js in src file.

Route

Thunk Action Creator
