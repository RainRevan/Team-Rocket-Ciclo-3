const {Client} = require('pg')
const client = new Client ({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'TeamRocket',
    database: 'RegistroUsuarios',
})
client.connect();
client.query ('select * from Organizacion', (err,res) => {
    if (!err) {  
        console.log(res.rows);
        } else {
            console.log (err.message);
        }
        client.end;
})
