import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.use((req, res,next) => {
    res.status(400).json({Error: 'Invalid Request'});
    next();
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
