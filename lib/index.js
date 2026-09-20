import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const skillsRoot = resolve(packageRoot, 'skills')

function scalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))
  if (match === null || match[1].trim().length === 0) {
    throw new Error(`xiaolv-skills: ${key} missing in SKILL.md`)
  }
  return match[1].trim()
}

function loadSkill(skillDirectory) {
  const skillPath = join(skillDirectory, 'SKILL.md')
  const skillSource = readFileSync(skillPath, 'utf8')
  const parsed = skillSource.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (parsed === null) {
    throw new Error(`xiaolv-skills: ${skillPath} must contain YAML frontmatter`)
  }
  return Object.freeze({
    name: scalar(parsed[1], 'name'),
    description: scalar(parsed[1], 'description'),
    source: 'bundled',
    provider: 'xiaolv-skills',
    resourceBase: Object.freeze({ kind: 'directory', path: skillDirectory }),
    path: skillPath,
    content: parsed[2].trim(),
  })
}

function listSkillDirs() {
  if (!existsSync(skillsRoot)) return []
  return readdirSync(skillsRoot)
    .map((name) => join(skillsRoot, name))
    .filter((dir) => statSync(dir).isDirectory() && existsSync(join(dir, 'SKILL.md')))
}

const skills = listSkillDirs().map(loadSkill)

export const name = 'xiaolv-skills'
export const inject = ['skills']

export function apply(ctx) {
  for (const skill of skills) {
    ctx.skills.register(skill)
  }
}
