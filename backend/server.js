require("dotenv").config();
const OpenAI = require("openai");
const express = require("express");
const cors = require("cors");

const app = express();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI Expense Tracker API Running");
});

const PORT = 5000;
app.post("/ai-category", async (req, res) => {

    try {

        const { text } = req.body;

        const response =
            await client.chat.completions.create({

                model: "gpt-4.1-mini",

                messages: [
                    {
                        role: "user",
                        content:
                        `Categorize this expense: ${text}`
                    }
                ]
            });

        res.json({
            category:
            response.choices[0].message.content
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "AI failed"
        });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const expenses = [];

app.post("/expenses", (req, res) => {

    const expense = req.body;

    expenses.push(expense);

    res.json({
        message: "Expense added",
        expenses
    });
});

app.get("/expenses", (req, res) => {
    res.json(expenses);
});