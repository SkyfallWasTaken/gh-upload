import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
config({ path: '.env' });
export default defineConfig({
	schema: './src/lib/server/schema.ts',
	out: './migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.PG_DATABASE_URL!
	}
});
