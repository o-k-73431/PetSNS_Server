const mariadb = require('mariadb');


exports.getConnection = () => {
    return new Promise((resolve, reject) => {
        mariadb.createConnection({
            host: '3.22.233.244',
            database: 'petdb',
            user: 'root',
            password: 'mariadb'
        }).then(conn => {
            console.log("connected ! connection id is " + conn.threadId);
            resolve(conn);
        }).catch(err => {
            console.log("not connected due to error: " + err);
        });
    });
}