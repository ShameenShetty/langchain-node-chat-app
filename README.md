# Gemini Chatbot & LangChain Playground

This repository tracks my hands-on journey learning to build AI-powered applications using **TypeScript, Node.js, and LangChain**. It acts as the backend workbench for a personalized chatbot application that I am actively developing.

The underlying architecture is built using the Google GenAI SDK to communicate with Gemini models, leveraging LangChain's structured orchestration to handle prompts, context, and chat history.

---

## 🚀 Project Overview & Roadmap

Instead of just running isolated scripts, the goal of this project is to build a complete, functional chatbot ecosystem. 

- [x] **Backend Infrastructure:** Set up a clean TypeScript development environment utilizing `tsx` for efficient in-memory execution.
- [x] **API Connectivity:** Successfully integrated LangChain with Google Gemini and verified environment variable authentication.
- [ ] **Core AI Logic:** Implement memory buffers, custom prompt templates, and conversational history tracking.
- [ ] **Frontend Wrapper:** Build a modern user interface to serve as a wrapper around this backend logic, moving it out of the terminal and into a browser.

---

## 🛠️ Core Concepts Explored

I am implementing:
* **LangChain Expression Language (LCEL):** Structuring pipelines for smooth data flow between inputs and model responses.
* **Context Management:** Utilizing token-efficient chat history tracking to manage Rate Limits (RPM, TPM, and RPD) effectively.
* **Prompt Engineering & Output Parsing:** Structuring instructions so the model returns reliable, well-formatted data.

---