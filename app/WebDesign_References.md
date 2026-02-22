# Web Design References

Resources collected from [Beginner's Guide to Building Beautiful Websites with Claude Code](https://www.youtube.com/watch?v=86HM0RUWhCk) by **Nate Herk | AI Automation**.

---

## Design Inspiration Websites

| Website | URL | Description |
|---------|-----|-------------|
| Dribbble | https://dribbble.com | Design portfolio showcase site for finding visual inspiration |
| Godly Website | https://godly.website | Curated collection of beautifully designed website examples |
| Awwwards | https://www.awwwards.com | Design recognition platform showcasing award-winning websites |
| 21st.dev | https://21st.dev/community/components| Component library and design element inspiration source |

## UI Component Libraries & Theming

| Tool | URL | Description |
|------|-----|-------------|
| ShadCN UI | https://ui.shadcn.com | Professionally designed, accessible UI component library (has MCP server for Claude Code integration) |
| TweakCN | https://tweakcn.com | Theme customization tool for ShadCN components - tweak colors, styles, and themes |

## Design & Visualization Tools

| Tool | URL | Description |
|------|-----|-------------|
| SuperDesign | VSCode Extension Marketplace | AI Design Agent that works as a VSCode extension for real-time design visualization and responsive testing |
| Figma (+ Figma MCP) | https://figma.com | Design-to-code conversion tool; Figma MCP extracts metadata from design files for replication |
| Coolors | https://coolors.co | Generate and explore color palettes for design systems |

## Animation

| Tool | URL | Description |
|------|-----|-------------|
| Animatopy | https://sarthology.github.io/Animatopy/ | Curated CSS animation effects library - easily pick and apply animations |

## Web Scraping & Cloning

| Tool | URL | Description |
|------|-----|-------------|
| FireCrawl (+ MCP server) | https://firecrawl.dev | Web scraping tool for cloning website structures; use its MCP server to let Claude Code analyze and replicate existing sites |

## Development & Deployment

| Tool | URL | Description |
|------|-----|-------------|
| Claude Code | https://docs.anthropic.com/en/docs/claude-code | AI coding agent by Anthropic for building websites (requires Pro/Max subscription) |
| VS Code | https://code.visualstudio.com | Primary IDE for running Claude Code and extensions like SuperDesign |
| Puppeteer | https://pptr.dev | Screenshot automation tool used for iterative design feedback loops with Claude Code |
| GitHub | https://github.com | Version control and code hosting for your website projects |
| Vercel | https://vercel.com | Deployment platform - import GitHub repos and deploy to live sites with custom domains |

## Frameworks Mentioned

- **Next.js** (with App Router) - React framework for production websites
- **React** with TypeScript
- **Vue.js** (Composition API)
- **Svelte / SvelteKit**
- **HTML / CSS / JavaScript**

## Key Workflow Tips from the Video

1. **CLAUDE.md file** - Acts as a system prompt that Claude Code reads before executing any action; set rules, guidelines, and design principles for your project
2. **design_brief.md** - Specify detailed styling principles, landing page sections, reusable CSS classes, and responsive breakpoints
3. **Front-End Design Skill** - Custom instruction/skill that improves aesthetic quality, making AI-generated websites look more modern and professional
4. **Screenshot Loop with Puppeteer** - Take screenshots of your site, feed them back to Claude Code for iterative visual refinement
5. **Reference Screenshots** - Provide Claude Code with a screenshot of a website you like to quickly generate a clone or borrow design elements
