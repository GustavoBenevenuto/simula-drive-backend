console.log("✨DOTENV >>> "+process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url" : process.env.DATABASE_URL,
//   "host": "localhost",
//   "port": 5432,
//   "username": "postgres",
//   "password": "postgres",
//   "database": "simula_drive",
  "entities": [
    "./dist/models/*.js"
  ],
  "migrations": [
    "./dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
//"url" : "postgres://username:password@host:port/database"