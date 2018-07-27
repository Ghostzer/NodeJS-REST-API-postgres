# NodeJS-REST-API-postgres
REST API with NodeJS and Express for Postgres


Install
-
- ``Git clone https://github.com/Ghostzer/NodeJS-REST-API-postgres.git``
- Import ``/db/users.sql`` on PostgreSQL
- Change your informations database on file ``/api/requetes.js``
- Go to / of project and run ``npm install`` and ``node server.js``
- Open http://localhost:3000/api/users

Routes
-

| Path | Request Type |
| ------------- | ------------- |
| http://localhost:3000/api/users  | GET  |
| http://localhost:3000/api/users | POST  |
| http://localhost:3000/api/user/1 | GET |
| http://localhost:3000/api/user/1 | PUT |
| http://localhost:3000/api/user/1 | DELETE |

Body Json example for POST and PUT
-
```json
{
  "firstname": "foo",
  "lastname": "bar",
  "city": "foo",
  "address": "bar"
}
```
