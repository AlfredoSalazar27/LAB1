import * as express from "express"
import { AppDataSource } from "./data-source"
import * as cors from "cors"
import helmet from "helmet"
import routes from "./routes";
import 'reflect-metadata'



const PORT = process.env.PORT || 3000;
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors()),
    app.use(helmet())
    app.use(express.json());

    //routes
    app.use('/', routes);

    // start express server
    app.listen(PORT,()=>{console.log(El servidor a sido levantado en el puerto: ${PORT}+"Open http://localhost:3000/products to see results")})

}).catch(error => {
    if (error.code !== 'ER_TABLE_EXISTS_ERROR') {
        console.log(error);
    } else {
        console.log('Table already exists, continuing...');
        const app = express();
        app.use(cors());
        app.use(helmet());
        app.use(express.json());

        // routes
        app.use('/', routes);

        // start express server
        app.listen(PORT, () => {
            console.log(El servidor ha sido levantado en el puerto: ${PORT}. Open http://localhost:3000/products to see results);
        });
    }
});