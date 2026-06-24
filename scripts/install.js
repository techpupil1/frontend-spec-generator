const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'frontend-spec-generator';
const SOURCE_DIR = path.resolve(__dirname, '..', 'skills', SKILL_NAME);

// 各平台 Skill 目标路径
const PLATFORM_PATHS = {
  'Claude Code': path.join(os.homedir(), '.claude', 'skills', SKILL_NAME),
  'TRAE': path.join(os.homedir(), '.trae', 'skills', SKILL_NAME),
  'Cursor': path.join(os.homedir(), '.cursor', 'skills', SKILL_NAME),
  'Codex': path.join(os.homedir(), '.codex', 'skills', SKILL_NAME),
  'Qoder': path.join(os.homedir(), '.agent', 'skills', SKILL_NAME),
};

// 需要复制的文件列表
const FILES_TO_COPY = [
  'SKILL.md',
  'agents/openai.yaml',
  'assets/frontend-spec-template.md',
  'references/eight-modules.md',
  'references/empty-project.md',
  'references/existing-project.md',
  'examples/empty-project-example.md',
  'examples/existing-project-example.md',
];

function copyRecursive(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
}

function installForPlatform(platform, targetDir) {
  let copied = 0;
  FILES_TO_COPY.forEach(file => {
    const src = path.join(SOURCE_DIR, file);
    const dest = path.join(targetDir, file);
    if (fs.existsSync(src)) {
      copyRecursive(src, dest);
      copied++;
    }
  });
  return copied;
}

// 主逻辑
if (process.env.npm_config_global) {
  console.log(`\nInstalling "${SKILL_NAME}" skill for all supported platforms...\n`);

  let totalPlatforms = 0;

  for (const [platform, targetDir] of Object.entries(PLATFORM_PATHS)) {
    const copied = installForPlatform(platform, targetDir);
    if (copied > 0) {
      console.log(`  \u2713 ${platform}: ${targetDir} (${copied} files)`);
      totalPlatforms++;
    }
  }

  if (totalPlatforms > 0) {
    console.log(`\nSkill "${SKILL_NAME}" installed to ${totalPlatforms} platform(s) successfully!`);
    console.log('Restart your IDE/agent to activate the skill.\n');
  } else {
    console.log('No files were copied. Please check the package integrity.\n');
  }
} else {
  console.log(`Local install detected. Skill files are at: ${SOURCE_DIR}`);
  console.log('For global install across all platforms: npm install -g frontend-spec-generator\n');
}
