import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    entities: [Post],
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\/[tj]s$/
    },
    dbName: 'community',
    type: 'postgresql',
    user: process.env.USER,
    password: process.env.PASSWORD,
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];