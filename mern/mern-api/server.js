const express = require('express');

const app = express();

app.use (() => {
    console.log('halo server');
    console.log('halo lagi');
    console.log('halo juga');

})

app.listen(4000);