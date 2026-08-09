#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];

  if (!projectName) {
    console.error('❌ Please specify the project directory:');
    console.error('  npm create outpost@latest <project-directory>');
    process.exit(1);
  }

  const currentPath = process.cwd();
  const projectPath = path.join(currentPath, projectName);

  try {
    if (fs.existsSync(projectPath)) {
      console.error(`❌ Directory '${projectName}' already exists.`);
      process.exit(1);
    }

    console.log(`\n🚀 Initializing Outpost.js project in ${projectPath}...\n`);

    const templatePath = path.join(__dirname, '..', 'template');
    
    // Copy template
    console.log('📂 Copying template files...');
    await fs.copy(templatePath, projectPath);

    // Recursively replace {{PROJECT_NAME}} in all files
    console.log('🔧 Configuring project names...');
    replacePlaceholders(projectPath, projectName);

    // Remove any leftover node_modules from copying just in case
    await fs.remove(path.join(projectPath, 'node_modules')).catch(() => {});

    // Initialize git
    console.log('📦 Initializing Git repository...');
    execSync('git init', { cwd: projectPath, stdio: 'ignore' });

    console.log(`\n🎉 Outpost.js project '${projectName}' created successfully!`);
    console.log(`\n👉 Next Steps:`);
    console.log(`  cd ${projectName}`);
    console.log(`  npm install`);
    console.log(`  docker compose up -d --build\n`);
    console.log(`Happy coding! 🛠️\n`);

  } catch (error) {
    console.error('❌ Error creating project:', error);
    process.exit(1);
  }
}

function replacePlaceholders(dir, projectName) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      replacePlaceholders(fullPath, projectName);
    } else {
      // Only process text files (avoid images/binary)
      if (!isTextFile(fullPath)) continue;

      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('{{PROJECT_NAME}}')) {
        // Replace all instances of {{PROJECT_NAME}}
        content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

function isTextFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const binaryExts = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.pdf'];
  return !binaryExts.includes(ext);
}

main();
