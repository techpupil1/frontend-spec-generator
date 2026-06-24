# 前端规范生成 Skill

这是一个面向中文用户的前端规范生成 skill。它的目标是把"模糊的产品想法"或"已有的前端代码库"收敛成一份用户确认过的前端规范文档。

支持 **TRAE / Claude Code / Cursor / Codex / Windsurf / Gemini CLI / Qoder** 等主流 AI 编程智能体。

## 产出内容

最终文档固定覆盖八大模块：

1. **视觉风格** - 产品气质、色彩、字体、密度、暗色模式
2. **技术方案** - 框架、语言、构建工具、路由、API 交互
3. **UI 组件库** - 组件策略、通用组件范围、特殊组件需求
4. **目录结构** - 组织方式、目录树、命名和导入规则
5. **模块边界** - 状态归属、通信方式、依赖方向
6. **复用规则** - 组件提取阈值、工具函数、共享类型规则
7. **样式系统** - 样式方案、Token、响应式和动效规范
8. **实施计划** - 分阶段任务、依赖关系、优先级

## 适用场景

支持两条主路径：

| 路径 | 适用场景 | 核心流程 |
|------|----------|----------|
| **已有项目** | 仓库里已经有前端代码 | 扫描现状 -> 找差距 -> 逐模块确认 |
| **空项目** | 只有产品想法或仓库为空 | 理解产品 -> 确定形态 -> 竞品调研 -> 逐模块确认 |

这个 skill 特别适合：

- 用户是非技术背景，需要用"使用效果"而不是"专业术语"来理解取舍
- 用户希望 AI 先推断需求，再做针对性提问，而不是机械问卷
- 用户希望在空项目场景里由 AI 自主完成竞品调研

## 安装

### 方式一：npm 全局安装（推荐）

自动部署到所有已安装平台：

```bash
npm install -g frontend-spec-generator
```

安装完成后重启 IDE 即可使用。

### 方式二：OpenSkills（跨平台通用）

```bash
npx openskills install your-username/frontend-spec-generator
npx openskills sync
```

### 方式三：Claude Code 插件市场

```
/plugin marketplace add your-username/frontend-spec-generator
/plugin install frontend-spec-generator
/reload-plugins
```

### 方式四：手动安装

```bash
git clone https://github.com/your-username/frontend-spec-generator.git
```

按需复制到对应平台目录：

| 平台 | Skill 存放路径 |
|------|---------------|
| Claude Code | `~/.claude/skills/frontend-spec-generator/` |
| TRAE | `~/.trae/skills/frontend-spec-generator/` |
| Cursor | `~/.cursor/skills/frontend-spec-generator/` |
| Codex | `~/.codex/skills/frontend-spec-generator/` |
| Qoder | `~/.agent/skills/frontend-spec-generator/` |

## 使用方式

在支持 skill 的环境中，直接调用 `frontend-spec-generator`，或使用斜杠命令：

| 平台 | 调用方式 |
|------|---------|
| Claude Code | `/frontend-spec` 或 `Use $frontend-spec-generator` |
| Cursor | `/frontend-spec` |
| Gemini CLI | `/frontend-spec` |
| Codex | `Use $frontend-spec-generator` |
| TRAE | 在设置中导入 Skill 后直接对话触发 |
| Windsurf | 自动读取 `.windsurfrules` 触发 |

## 仓库结构

```
frontend-spec-generator/
├── .claude-plugin/          # Claude Code 插件元数据
├── .claude/commands/        # Claude Code 斜杠命令
├── .cursor/commands/        # Cursor 斜杠命令
├── .gemini/commands/        # Gemini CLI 命令
├── .codex/agents/           # Codex Agent 配置
├── .windsurfrules           # Windsurf 规则
├── AGENTS.md                # Codex/Qoder 通用入口
├── scripts/install.js       # npm 安装部署脚本
├── skills/
│   └── frontend-spec-generator/
│       ├── SKILL.md         # Skill 入口与执行规则
│       ├── agents/          # Agent 配置
│       ├── assets/          # 输出模板
│       ├── references/      # 详细流程参考
│       └── examples/        # 示例输入与输出
├── package.json
└── README.md
```

## 核心原则

- **由用户决策** - AI 负责提问、调研、总结，不替用户擅自定方向
- **先推断再追问** - 能从描述里推断出的需求先整理出来交给用户确认
- **结果导向表达** - 技术选型解释重点放在体验、交付速度和维护成本
- **竞品自主调研** - 空项目场景由 AI 自行搜索同类产品作为参考

## 示例

查看 [empty-project-example.md](./skills/frontend-spec-generator/examples/empty-project-example.md) 和 [existing-project-example.md](./skills/frontend-spec-generator/examples/existing-project-example.md)。

## 许可证

MIT
