import { env } from '../env.ts';
import { app } from './app.ts';

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
