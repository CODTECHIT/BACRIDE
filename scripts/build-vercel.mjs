import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'dist');

const apps = [
  { dir: 'customer-app', route: '' },
  { dir: 'customer-app', route: 'customer' },
  { dir: 'rider-app', route: 'rider' },
  { dir: 'admin-panel', route: 'admin' },
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const app of apps) {
  const appPath = path.join(root, app.dir);
  const nodeModulesPath = path.join(appPath, 'node_modules');
  if (!fs.existsSync(nodeModulesPath)) {
    console.log(`Installing dependencies for ${app.dir}...`);
    execSync('npm install', { cwd: appPath, stdio: 'inherit' });
  }

  const basePath = app.route ? `/${app.route}/` : '/';
  console.log(`Building ${app.dir} for ${basePath}...`);
  execSync('npm run build', {
    cwd: appPath,
    stdio: 'inherit',
    env: { ...process.env, VITE_BASE_PATH: basePath },
  });

  const targetDir = app.route ? path.join(outDir, app.route) : outDir;
  fs.cpSync(path.join(appPath, 'dist'), targetDir, { recursive: true });
}

console.log('Combined Vercel dist/ built successfully (root / -> Customer UI)!');
