"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const source = new typeorm_1.DataSource({
    type: 'postgres',
    host: '172.23.0.3',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'twitter',
    entities: ['src/entity/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    synchronize: true,
});
exports.default = source;
//# sourceMappingURL=ormconfig.js.map