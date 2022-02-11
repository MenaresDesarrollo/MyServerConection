const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

app.use(require('./rutas/notes.js'));

//starting server
app.listen(app.get('port'), () => {
    console.log('Server en puerto', app.get('port'));
});

