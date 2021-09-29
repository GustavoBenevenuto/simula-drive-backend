// console.log("✨DOTENV >>> " + process.env.DATABASE_URL);
// console.log("🎇 NODE_ENV >>> " + process.env.NODE_ENV);
// console.log("🎇 FOLDER_ORM >>> " + process.env.FOLDER_ORM);
// console.log("🎇 FILE_EXTENSION >>> " + process.env.FILE_EXTENSION);
// console.log("🎇 ENVIRONMENT >>> " + process.env.ENVIRONMENT);

const orm = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    //   "host": "localhost",
    //   "port": 5432,
    //   "username": "postgres",
    //   "password": "postgres",
    //   "database": "simula_drive",
    "ssl": { "rejectUnauthorized": false },
    "entities": [
        `./${process.env.FOLDER_ORM}/models/*.${process.env.FILE_EXTENSION}`
    ],
    "migrations": [
        `./${process.env.FOLDER_ORM}/database/migrations/*.${process.env.FILE_EXTENSION}`
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}

if(process.env.ENVIRONMENT == 'development')
    delete orm.ssl;

module.exports = orm;
//"url" : "postgres://username:password@host:port/database"