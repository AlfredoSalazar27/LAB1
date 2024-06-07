import { DataSource } from "typeorm"
import { Product } from './entity/product';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "dbLab1",
    synchronize: false,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})