from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_ollama import OllamaLLM

# =========================
# LOAD DOCUMENTS
# =========================

print("Loading documents...")

docs = []

loader1 = TextLoader("docs/react_old.txt")
docs.extend(loader1.load())

loader2 = TextLoader("docs/react_new.txt")
docs.extend(loader2.load())

print("Documents loaded!")

# =========================
# SPLIT INTO CHUNKS
# =========================

print("\nSplitting text into chunks...")

splitter = RecursiveCharacterTextSplitter(
    chunk_size=300,
    chunk_overlap=30
)

chunks = splitter.split_documents(docs)

print("Total chunks:", len(chunks))

# =========================
# CREATE EMBEDDINGS
# =========================

print("\nCreating embeddings...")

embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# =========================
# CREATE VECTOR DATABASE
# =========================

print("Creating vector database...")

vector_db = Chroma.from_documents(
    documents=chunks,
    embedding=embedding_model,
    persist_directory="db"
)

print("Vector database created!")

# =========================
# USER QUESTION
# =========================

query = "When was React released?"

print("\nQUESTION:")
print(query)

# =========================
# RETRIEVE RELEVANT CHUNKS
# =========================

print("\nSearching documents...\n")

results = vector_db.similarity_search(query, k=2)

for i, result in enumerate(results):
    print(f"\nRESULT {i+1}\n")
    print(result.page_content)

# =========================
# LOAD LLM
# =========================

print("\nLoading LLM...\n")

llm = OllamaLLM(model="mistral")

# =========================
# CREATE CONTEXT
# =========================

context = "\n\n".join([r.page_content for r in results])

# =========================
# CREATE ANSWER PROMPT
# =========================

prompt = f"""
Answer the question ONLY using the context below.

Context:
{context}

Question:
{query}

Answer:
"""

# =========================
# GENERATE ANSWER
# =========================

print("\nGenerating answer...\n")

response = llm.invoke(prompt)

print("\n=========================")
print("AI ANSWER")
print("=========================\n")

print(response)

# =========================
# VERIFICATION PROMPT
# =========================
verification_prompt = f"""
You are a STRICT hallucination and contradiction detector.

You MUST ONLY use the provided context.

Do NOT use outside knowledge.

Context:
{context}

Answer:
{response}

Tasks:
1. Determine whether the answer is supported by the context.
2. Detect whether the context contains conflicting information.
3. If conflicting information exists and the answer ignores it, return "Conflicting Context".
4. Do NOT add outside knowledge.

Reply ONLY in this format:

Verdict:
- Supported
- Partially Supported
- Unsupported
- Conflicting Context

Reason:
...

Evidence:
...
"""
# =========================
# VERIFY ANSWER
# =========================

print("\nVerifying answer...\n")

verification = llm.invoke(verification_prompt)

print("\n=========================")
print("VERIFICATION RESULT")
print("=========================\n")

print(verification)