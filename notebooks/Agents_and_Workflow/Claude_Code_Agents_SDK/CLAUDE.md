# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains examples and tutorials for the Claude Code Agent SDK (`claude_agent_sdk`), demonstrating how to build AI agents using Anthropic's SDK.

## Commands

```bash
# Run the custom tools example (space toys store)
python tools.py --model sonnet

# Run MCP server integration example (with Playwright)
python mcp.py --model sonnet

# Run conversation loop example
python convo_loop.py --model sonnet

# Execute Jupyter notebooks
jupyter notebook basics.ipynb
```

## Architecture

### Core Components

- **basics.ipynb**: Tutorial notebook demonstrating SDK fundamentals including:
  - Basic `query()` function usage with `ClaudeAgentOptions`
  - Message types: `AssistantMessage`, `TextBlock`, `ResultMessage`, `ToolUseBlock`, `ToolResultBlock`
  - `ClaudeSDKClient` for managing conversation history
  - Custom tool creation with `@tool` decorator and `create_sdk_mcp_server()`
  - Loading project instructions via `setting_sources=["project"]`

- **tools.py**: Custom MCP tool implementation example featuring:
  - `@tool` decorator usage for creating custom tools
  - `search_products` tool with space toys catalog search functionality
  - Local MCP server creation with `create_sdk_mcp_server()`
  - Agent configuration with custom tool integration

- **mcp.py**: External MCP server integration example showing:
  - Configuration of external MCP servers (Playwright)
  - Tool permission management
  - Interactive conversation loop with external tools

- **convo_loop.py**: Conversation loop implementation demonstrating:
  - Interactive CLI with continuous user input
  - Personal assistant configuration with project settings
  - Real-time message handling and display

- **cli_tools.py**: Shared terminal utilities providing:
  - Rich console output formatting
  - Message parsing and display functions
  - Command-line argument parsing
  - User input handling for interactive sessions

- **db/products.json**: Sample data file containing space toys catalog for the custom tool demonstration

### Key SDK Patterns

**Tool naming convention**: Custom tools follow `mcp__<server_name>__<tool_name>` format (e.g., `mcp__calc__add`, `mcp__products__search_products`)

**Permission modes**: Use `permission_mode='bypassPermissions'` for automated scripts (dangerous), or `'default'` for interactive use

**Agent options structure**:
```python
ClaudeAgentOptions(
    model="sonnet",  # or "haiku", "opus"
    mcp_servers={"server_name": mcp_server},
    allowed_tools=["Read", "Write", "mcp__server__tool"],
    permission_mode='default',
    cwd="/path/to/working/dir",
    setting_sources=["project"],  # Load CLAUDE.md
    system_prompt="Custom instructions"
)
```

## Usage Examples

The repository includes several example implementations demonstrating different Claude Agent SDK patterns:

### 1. Custom Tool Creation (`tools.py`)
Demonstrates creating local MCP tools:
```python
@tool("search_products", "Search for products in the space toys catalog", {"query": str})
async def search_products(args: dict[str, Any]) -> dict[str, Any]:
    # Custom tool implementation
```

### 2. External MCP Server Integration (`mcp.py`)
Shows how to configure external MCP servers:
```python
mcp_servers={
    "Playwright": {
        "command": "npx",
        "args": ["-y", "@playwright/mcp@latest"]
    }
}
```

### 3. Interactive Conversation Loop (`convo_loop.py`)
Implements a continuous chat interface:
```python
while True:
    input_prompt = get_user_input(console)
    if input_prompt == "exit":
        break

    await client.query(input_prompt)
    async for message in client.receive_response():
        parse_and_print_message(message, console)
```

### 4. Notebook Tutorial (`basics.ipynb`)
Step-by-step SDK learning with interactive cells covering all fundamental concepts.

## Project Configuration

The `.claude/` directory contains Claude Code configuration:

```
.claude/
├── settings.json              # Project settings (permissions, env vars, output style)
├── agents/
│   ├── code-reviewer.md       # Code review agent (haiku) - thorough code analysis
│   └── documentation-writer.md # Documentation agent (sonnet) - writes docs to /docs
├── skills/
│   └── data-analysis/         # Data analysis skill directory
│       └── SKILL.md           # Skill definition - invokable via /data-analysis
└── output-styles/
    └── personal-assistant.md  # "XXYYZZ" persona with subagent delegation
```

### Available Agents

- **code-reviewer**: Reviews code for bugs, security issues, performance, and quality. Use for code feedback before commits.
- **documentation-writer**: Writes technical documentation to the `docs/` directory.

### Available Skills

- **data-analysis**: Comprehensive data analysis skill invokable via `/data-analysis`. Provides statistical analysis, pattern recognition, visualization, and insight generation for datasets.

### Output Style

Default output style is `personal-assistant` (XXYYZZ), which has access to subagents: youtube-analyst, researcher, documentation-writer. Delegates specialized tasks in parallel.

## Dependencies

This project requires the following Python packages:
- `claude_agent_sdk` - Core SDK for building Claude agents
- `rich` - Terminal formatting and display
- `python-dotenv` - Environment variable management
- `anyio` / `asyncio` - Async runtime support
- `nest-asyncio` - Nested asyncio support (for Jupyter notebooks)

For external MCP server examples:
- `Node.js` and `npm/npx` - Required for Playwright MCP server
- `Chrome/Chromium` - Required for Playwright browser automation

## Project Management

- Use `uv` over `pip` for Python dependency management
- Use `bun` over `npm` for Node.js projects
