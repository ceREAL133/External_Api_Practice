import express from 'express';
import routes from './routes/routes';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => {
	console.log(`app listening on port ${process.env.PORT}`);

	routes(app);
});
