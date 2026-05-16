import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const llm = new ChatOpenAI(
  {
    configuration: {
      baseURL: "http://127.0.0.1:1234/v1",
    },
    apiKey: 'NA',
    // model: 'qwen2.5-coder-3b-instruct',
    model: 'google/gemma-3-1b',
    // model: 'gemini-2.5-flash',
    temperature: 0,
    maxRetries: 2,
  });

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({error: "Message is required"});
    }

    const response = await llm.invoke(message);
    res.json({success:true, data: response.content});
  } catch (e) {
    console.error(`Error processing request: ${e}`)
    res.status(500).json({error: 'Something went wrong with the AI engine'});
  } finally {

  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});