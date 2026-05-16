import dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

dotenv.config();

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

const response = await llm.invoke(
  "Describe the importance of learning generative AI for javascript developers in 50 words."
);

console.log(response);
