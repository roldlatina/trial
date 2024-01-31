import { Pool } from "pg";
import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'

 const pool = new Pool({
    connectionString: 'postgres://postgres:100395@localhost:5432/create-turbo'
 })

 const db = drizzle(pool)

 async function main(){
    console.log('start')
    await migrate(db, {
        migrationsFolder: 'drizzle'
    })
    console.log('end')
    process.exit(0)
 }

 main().catch((err) => {
    console.log(err,'errorrrr')
    process.exit(1)
 })