import { db } from './connection.ts';
import { students } from './schema.ts';

const seed = async () => {
    console.log("Seeding database...");

    try {
        console.log("Clearing existing data...");
        await db.delete(students);

        console.log("Inserting seed data...");

        const insertedStudents = await db.insert(students).values([
            { username: 'john_doe', email: 'john.doe@example.com', password: 'hashed_password', firstName: 'John', lastName: 'Doe' },
            { username: 'jane_smith', email: 'jane.smith@example.com', password: 'hashed_password', firstName: 'Jane', lastName: 'Smith' },
            { username: 'alice_jones', email: 'alice.jones@example.com', password: 'hashed_password', firstName: 'Alice', lastName: 'Jones' },
            { username: 'bob_brown', email: 'bob.brown@example.com', password: 'hashed_password', firstName: 'Bob', lastName: 'Brown' }
        ]).returning();

        console.log(`Inserted ${JSON.stringify(insertedStudents, null, 2)} students into the database.`);

        console.log("Database seeded successfully.");
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
}

if(import.meta.url === 'file://' + process.argv[1]) {
    seed()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

export default seed;