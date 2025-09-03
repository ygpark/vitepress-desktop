#!/usr/bin/env node

import { execSync } from 'child_process';
import { platform } from 'os';

console.log('🔨 Building VitePress documentation...');

try {
  execSync('npm run docs:build', { stdio: 'inherit' });
  console.log('✅ VitePress build completed!');
  console.log('📁 Output: docs/.vitepress/dist/');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}