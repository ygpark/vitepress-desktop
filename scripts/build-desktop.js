#!/usr/bin/env node

import { execSync } from 'child_process';
import { rmSync, cpSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { platform } from 'os';

console.log('🚀 Building desktop application...');

try {
  // 1. VitePress 문서 빌드
  console.log('📖 Building VitePress docs...');
  execSync('npm run docs:build', { stdio: 'inherit' });

  // 2. frontend/dist 디렉토리 준비
  console.log('📂 Copying files to Wails frontend...');
  const frontendDistPath = join('desktop', 'frontend', 'dist');
  
  // 디렉토리가 존재하면 삭제
  if (existsSync(frontendDistPath)) {
    rmSync(frontendDistPath, { recursive: true, force: true });
  }
  
  // 디렉토리 생성
  mkdirSync(frontendDistPath, { recursive: true });
  
  // VitePress 빌드 파일 복사
  const vitepressDistPath = join('docs', '.vitepress', 'dist');
  cpSync(vitepressDistPath, frontendDistPath, { recursive: true });

  // 3. Wails 앱 빌드
  console.log('🏗️ Building Wails app...');
  const originalDir = process.cwd();
  process.chdir('desktop');
  
  try {
    execSync('wails build', { stdio: 'inherit' });
  } finally {
    process.chdir(originalDir);
  }

  console.log('✅ Desktop app build completed!');
  console.log('📱 App location: desktop/build/bin/');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}