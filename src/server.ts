import express from "express";

const app = express();

app.get('/health', (req, res) => {
    // res.json({ message: "Hello" }).status(200);
    res.send('<button>Hello</button>').status(200);
});


export { app }
export default app;