# xltxai/skills

小律同学 Agent Skills catalog。每个 skill 一个目录，给 DeepSeek Harness / OpenClaw / Hermes / SkillHub / Cursor 共用。

## Skills

| 目录 | 说明 | 版本 |
|------|------|------|
| [`skills/mcp-law-search`](skills/mcp-law-search) | 跨境法律合规·小律同学AI（168 国法规 / 境内外案例） | 1.0.3 |

## 安装

整仓当 tap / catalog：

```bash
# Cursor / skills.sh
npx skills add xltxai/skills

# DeepSeek Harness（扫 ~/.agents/skills）
git clone https://github.com/xltxai/skills.git
cp -R skills/skills/mcp-law-search ~/.agents/skills/mcp-law-search

# DeepSeek Harness 插件（一次装入仓内全部 skill）
dsh plugin --profile web add github:xltxai/skills

# Hermes
hermes skills tap add xltxai/skills

# OpenClaw：对本仓 skills/* 做 GitHub Import，或
clawhub skill publish ./skills/mcp-law-search \
  --slug mcp-law-search \
  --name "跨境法律合规·小律同学AI" \
  --categories knowledge,research \
  --topics "legal,compliance,cross-border"
```

单个 skill 也可以只拷 `skills/<name>`。

## 加新 skill

1. 建 `skills/<kebab-name>/SKILL.md`（frontmatter 必填 `name` + `description`）
2. `name` 必须等于目录名，kebab-case
3. 参考文件放同级 `references/`，不要在 `SKILL.md` 里堆长文档
4. 改本 README 表格和 `skills.sh.json`

```text
skills/
  my-skill/
    SKILL.md
    references/
    agents/          # 可选，平台适配
    assets/          # 可选，icon
```

## MCP

`mcp-law-search` 走 `https://mcp.aixllaw.com/mcp`，免登录有免费额度。详见 [`skills/mcp-law-search/references/mcp-setup-guide.md`](skills/mcp-law-search/references/mcp-setup-guide.md)。

## 许可

Skill 正文 MIT-0（ClawHub 要求）。MCP 检索服务仍属小律同学，用量走 aixllaw。
