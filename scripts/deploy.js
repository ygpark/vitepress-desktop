#!/usr/bin/env node

import { execSync } from 'child_process';
import { cpSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { platform } from 'os';

console.log('🚀 Starting deployment process...');

try {
  // 1. 문서 빌드
  console.log('📖 Building documentation...');
  execSync('node scripts/build-docs.js', { stdio: 'inherit' });

  // 2. 데스크톱 앱 빌드
  console.log('🖥️ Building desktop app...');
  execSync('node scripts/build-desktop.js', { stdio: 'inherit' });

  // 3. 배포 파일 정리
  console.log('📦 Organizing deployment files...');
  
  // dist 디렉토리 생성
  const distWebPath = join('dist', 'web');
  const distDesktopPath = join('dist', 'desktop');
  
  mkdirSync(distWebPath, { recursive: true });
  mkdirSync(distDesktopPath, { recursive: true });

  // 웹 버전 복사
  const vitepressDistPath = join('docs', '.vitepress', 'dist');
  if (existsSync(vitepressDistPath)) {
    cpSync(vitepressDistPath, distWebPath, { recursive: true });
  }

  // 데스크톱 앱 복사
  const desktopBinPath = join('desktop', 'build', 'bin');
  if (existsSync(desktopBinPath)) {
    cpSync(desktopBinPath, distDesktopPath, { recursive: true });
  }

  console.log('✅ Deployment completed!');
  console.log('📁 Web version: dist/web/');
  console.log('📱 Desktop app: dist/desktop/');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}