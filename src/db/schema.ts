import {
    pgTable,
    uuid,
    varchar,
    text,
    timestamp,
    boolean,
    integer,
    unique,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const students = pgTable('students', {
    id: uuid('id').primaryKey().defaultRandom(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    username: varchar('username', { length: 50 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    
    firstName: varchar('first_name', { length: 50 }).notNull(),
    lastName: varchar('last_name', { length: 50 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})


// export const hapits = pgTable('hapits', {
//     id: uuid('id').primaryKey().defaultRandom(),
//     studentId: uuid('student_id')
//     .references(() => students.id, { onDelete: 'cascade' })
//     .notNull(),
//     name: varchar('name', { length: 100 }).notNull(),
//     description: text('description').notNull(),
// });




// export const tags = pgTable(
//   "tags",
//   {
//     id: uuid('id').primaryKey(),
//     userId: text("user_id").notNull(), // Adjust type (text, integer, uuid) based on your auth setup
//     name: text("name").notNull(),
//     createdAt: timestamp("created_at").defaultNow().notNull(),
//   },
//   (table) => {
//     return {
//       // This ensures the combination of userId and name is unique
//       userTagUnique: unique("user_tag_idx").on(table.userId, table.name),
//     };
//   }
// );

export type Student = typeof students.$inferSelect;
export type NewStudent = typeof students.$inferInsert;