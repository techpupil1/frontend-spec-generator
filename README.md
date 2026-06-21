# Frontend Spec Generator

A universal AI prompt that guides any AI assistant to generate a customized frontend framework specification for your project through structured conversation.

## What It Does

Through a series of questions tailored to your project, this prompt helps you define:

1. **Visual Style** — Look and feel, color system, typography
2. **Tech Stack** — Framework, language, build tools, routing
3. **UI Component Library** — Component approach, required components
4. **Directory Structure** — File organization, naming conventions
5. **Module Boundaries** — Communication patterns, dependency rules
6. **Reuse Rules** — When to extract components, hooks, utilities
7. **Style System** — CSS approach, theming, dark mode, responsive
8. **Implementation Plan** — Phased, checkable task list (living document)

## How to Use

1. Copy the contents of [prompt.md](./prompt.md)
2. Paste it into any AI assistant (ChatGPT, Claude, Cursor, Trae, Copilot, etc.)
3. Answer the questions — the AI will guide you through each module
4. Receive a complete `FRONTEND_SPEC.md` for your project

## Two Paths

| Path | When | Flow |
|------|------|------|
| **A: Existing Project** | You already have frontend code | Scan codebase → Identify gaps → Confirm spec module by module |
| **B: New Project** | Starting from scratch | Describe product → Choose platform → Competitor research → Confirm spec module by module |

## Key Principles

- **You decide every detail** — The AI asks, researches, and organizes, but never decides for you
- **Effect-based descriptions** — Technical choices are explained by their real-world impact, not jargon
- **Smart inference** — The AI infers implied needs from your description instead of asking obvious questions one by one
- **Autonomous competitor research** — The AI searches for similar products on its own

## Example Output

See [examples/](./examples/) for sample specifications generated with this prompt.

## License

MIT
