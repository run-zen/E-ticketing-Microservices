import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import mongoose from 'mongoose';

import { currentuser } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './Errors/not-found-error';

const app = express();
app.use(express.json());
app.use(cors());

app.use(currentuser);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.get('*', async (req, res, next) => {
    throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log('successfully connected to mongoDB ..............');
    } catch (err) {
        console.log(err);
    }

    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
};

start();
