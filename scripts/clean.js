#!/usr/bin/env node

import { rmSync, existsSync } from 'fs';
import { platform } from 'os';

console.log('🧹 Cleaning build artifacts and cache files...');

const pathsToClean = [
  'docs/.vitepress/dist',
  'docs/.vitepress/cache',
  'dist',
  'desktop/build',
  'desktop/bin',
  'desktop/frontend/dist'
];

let cleanedCount = 0;

pathsToClean.forEach(path => {
  if (existsSync(path)) {
    try {
      rmSync(path, { recursive: true, force: true });
      console.log(`✅ Removed: ${path}`);
      cleanedCount++;
    } catch (error) {
      console.error(`❌ Failed to remove ${path}:`, error.message);
    }
  }
});

if (cleanedCount === 0) {
  console.log('ℹ️ Nothing to clean - all paths are already clean');
} else {
  console.log(`✨ Cleaning completed! Removed ${cleanedCount} directories`);
}