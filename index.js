const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;



const { handleTypeError } = require('./middleware/errors')
const { dbConnection } = require("./config/config");

app.use(express.json());

dbConnection();


app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));
app.use('/comments', require('./routes/comments'));

app.use(handleTypeError);

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
