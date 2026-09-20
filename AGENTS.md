# xltxai/skills

Catalog of 小律同学 Agent Skills. One folder per skill under `skills/`.

## Add a skill

1. Create `skills/<kebab-name>/SKILL.md` with `name` + `description`.
2. Keep `name` equal to the folder name.
3. Put long docs in `references/`.
4. Update the README table and `skills.sh.json`.

## DeepSeek Harness plugin development

Before changing plugin code, read https://dsh.pub/develop-plugin.md completely. Follow the pinned runtime contract and verification boundaries there; this repository's own security, testing, and release rules remain authoritative.

Do not publish this package under the reserved `@deepseek-ai` scope.
