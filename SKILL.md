---
name: frontend-spec-generator
description: "Generate or refine a frontend specification through guided product discovery, competitor research, and step-by-step confirmation across eight modules: visual style, technical approach, UI component library, directory structure, module boundaries, reuse rules, styling system, and implementation plan. Use when Codex needs to turn a vague product idea or an existing frontend codebase into a user-confirmed frontend specification, especially for non-technical users who need tradeoffs explained by outcome instead of jargon."
---

# 前端规范生成 Skill

使用这个 skill 生成一份用户真正能确认、能落地的前端规范文档。

按以下顺序执行：

1. 先判断目标是“已有前端项目”还是“空项目/新项目”。
2. 如果是已有项目，阅读 [references/existing-project.md](references/existing-project.md)。
3. 如果是空项目/新项目，阅读 [references/empty-project.md](references/empty-project.md)。
4. 在输出最终规范前，阅读 [references/eight-modules.md](references/eight-modules.md)。
5. 使用 [assets/frontend-spec-template.md](assets/frontend-spec-template.md) 作为最终输出模板。

执行规则：

- 由用户做决定，但不要把所有选项都丢给用户凭空创造。
- 先基于用户描述推断可能需求，再让用户确认或修正。
- 解释方案时优先讲用户感知效果、交付速度、维护成本和团队匹配度。
- 不要一次性问完所有问题，按阶段推进。
- 对空项目/新项目，在可联网时自行做竞品调研；如果当前无法联网，明确标注竞品调研待外部验证，不要编造。
- 对已有项目，先尊重仓库现状，不要直接套通用最佳实践。
- 每确认完一个模块，用 2 到 4 行总结当前结论，再进入下一个模块。
- 允许用户回改前面已经确认过的模块。

输出要求：

- 输出一份单独的 Markdown 规范文档。
- 最终结构必须对应八大模块。
- 结尾必须是可持续更新的实施计划，包含阶段、依赖关系和优先级。
