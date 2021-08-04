import express from 'express';
import cors from 'cors';

import { currentuser } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

const app = express();
app.use(express.json());
app.use(cors());

app.use(currentuser);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(3000, () => {
    console.log('listening on port 3000');
});
