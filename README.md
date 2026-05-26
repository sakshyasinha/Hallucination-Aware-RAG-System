# Hallucination-Aware RAG System

A Retrieval-Augmented Generation (RAG) system focused on detecting hallucinations, contradictory context, and unreliable AI responses.

Instead of blindly generating answers from retrieved documents, this project experiments with:
- contradiction detection,
- groundedness evaluation,
- retrieval transparency,
- hallucination awareness.

Built using Python, LangChain, ChromaDB, Ollama, and React.

---

# Problem

Traditional RAG systems improve factuality by retrieving relevant documents before generation.

However, retrieval alone does not eliminate hallucinations.

If retrieved chunks contain:
- conflicting information,
- fragmented context,
- incomplete evidence,

LLMs may still:
- generate incorrect answers,
- ignore contradictions,
- hallucinate unsupported claims.

This project explores those failure modes.

---

# Features

- Local RAG pipeline
- Semantic retrieval using embeddings
- Chroma vector database
- Local LLM inference using Ollama
- Contradiction-aware answer generation
- Verification layer for groundedness checking
- Hallucination risk analysis
- React frontend visualization
- Retrieval transparency

---

# Architecture


User Question
      ↓
Document Retrieval
      ↓
Vector Database Search
      ↓
Retrieved Chunks
      ↓
LLM Answer Generation
      ↓
Verifier LLM
      ↓
Groundedness & Contradiction Detection
Tech Stack
Backend
Python
LangChain
ChromaDB
Ollama
HuggingFace Embeddings
Frontend
React
CSS
Models
Mistral
TinyLlama (optional)
Example Scenario
Retrieved Chunk 1
React was released in 2012.
Retrieved Chunk 2
React was officially released in 2013 by Facebook.
AI Output
Conflicting evidence detected.
The retrieved context contains contradictory information regarding React's release year.
Why This Project Matters

Most beginner RAG projects stop at:

"chat with PDFs"

This project focuses on:

retrieval reliability,
ambiguity handling,
contradiction detection,
grounded AI responses.

The goal is not to completely eliminate hallucinations, but to:

reduce hallucination risk,
expose uncertainty,
improve answer transparency.
Installation
Clone Repository
git clone https://github.com/sakshyasinha/Hallucination-Aware-RAG-System.git
cd Hallucination-Aware-RAG-System
Backend Setup
Create Virtual Environment
python -m venv venv
Activate Environment
Windows
venv\Scripts\activate
Mac/Linux
source venv/bin/activate
Install Dependencies
pip install -r requirements.txt
Install Ollama

Download:
https://ollama.com

Run model:

ollama run mistral
Run Backend
python main.py
Frontend Setup
cd rag-frontend
npm install
npm run dev
Future Improvements
Hybrid search
Reranking models
Parent-child retrieval
Citation tracing
Multi-document reasoning
Confidence calibration
Deterministic contradiction detection
Graph-based retrieval
Key Learnings

Through this project I explored:

why RAG systems still hallucinate,
why retrieval quality matters,
how chunk fragmentation affects reasoning,
why verifier models can fail,
how uncertainty should be surfaced instead of hidden.
Screenshots

(Add screenshots here)

License

MIT License


---

# GitHub About Section

Use this in the “About” section:

```text
Hallucination-aware RAG system focused on contradiction detection, groundedness evaluation, and retrieval reliabi
