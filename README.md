# Everything AI

A comprehensive collection of AI/LLM examples, demos, and applications — covering agent frameworks, document processing, RAG pipelines, and modern web apps.

## Repository Structure

```
.
├── app/                  # Web applications and demos
├── notebooks/            # Jupyter notebooks and tutorials
├── libs/                 # Shared Python utility libraries
├── scripts/              # Utility scripts
├── requirements.txt      # Full Python dependencies
└── requirements_small.txt # Minimal dependencies
```

## Applications (`app/`)

| Project | Description | Stack |
|---------|-------------|-------|
| **react_web_app** | Legal/case management dashboard with AI chat panel | React 19, TypeScript, Vite, Tailwind CSS, ShadCN UI, Recharts |
| **Website_building_example** | Animated smart ring landing page with custom SVG animations | React 19, TypeScript, Vite, Tailwind CSS, Framer Motion |
| **DBQA_Streamlit** | Document-based question answering app | Streamlit, OpenAI API |

See [WebDesign_References.md](app/WebDesign_References.md) for curated design tools and resources.

## Notebooks (`notebooks/`)

### Agent Frameworks & Workflows

| Directory | Description |
|-----------|-------------|
| **Claude_Code_Agents_SDK** | Anthropic's Claude Code Agent SDK — custom tools, MCP server integration, conversation loops |
| **OpenAI_Agent_SDK** | OpenAI agent SDK examples |
| **AutoGen** | Multi-agent orchestration with AutoGen |
| **MemGPT** | Long-context memory management — memory editing, custom tools, multi-agent coordination |
| **HF_Agents** | Hugging Face agent framework |
| **llama_agent** | LlamaIndex workflow patterns |
| **n8n** | Integration with n8n workflow automation |

### LLM Basics & Patterns

| Directory | Description |
|-----------|-------------|
| **Openai_Basic_Usage** | Foundation tutorials — completions, classification, prompt engineering, output parsing |
| **LangChain** | LangChain framework — chains, agents, custom tools, retrieval-augmented QA |
| **liteLLM** | LiteLLM lightweight API abstraction layer |
| **MCP** | Model Context Protocol — servers (stdio, SSE, knowledge graph), clients, OpenAI integration |

### RAG & Document Processing

| Directory | Description |
|-----------|-------------|
| **Advanced_RAG** | Advanced retrieval techniques with LangChain and LlamaIndex, including agentic RAG patterns |
| **ISR** | Insurance/financial document analysis — table extraction, multi-doc QA, Assistants API |
| **PDF_Parse** | PDF parsing with multiple tools — MinerU, LlamaParse, Marker, Gemini table extraction |

## Shared Libraries (`libs/`)

- **llm_utils.py** / **llm_utils_async.py** — Core and async LLM utility functions
- **oai_ast_utils.py** — OpenAI Assistants API utilities
- **utils.py** — General purpose helpers

## Getting Started

```bash
# Install dependencies
pip install -r requirements.txt

# For minimal setup
pip install -r requirements_small.txt
```

Create a `.env` file with your API keys (e.g., `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`).

### SSL Troubleshooting

If you encounter SSL certificate errors with the OpenAI package, see [this guide](https://medium.com/@akhilkanugolu/dealing-with-certificate-issues-in-the-openai-package-on-your-local-machine-a7f563394c6c).
