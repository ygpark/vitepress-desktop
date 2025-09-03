# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a unified VitePress documentation site project with desktop app support using Wails. VitePress generates static documentation websites, and this project extends it with a Go-based desktop application wrapper for offline usage.

## Development Commands

```bash
# VitePress development
npm run docs:dev          # Start development server
npm run docs:build        # Build for production
npm run docs:preview      # Preview production build

# Desktop app development
npm run dev:desktop       # Start desktop app in development mode (requires Wails)

# Build commands
npm run build:docs        # Build docs only (uses scripts/build-docs.sh)
npm run build:desktop     # Build desktop app only (uses scripts/build-desktop.sh)
npm run build:all         # Build both web and desktop (uses scripts/deploy.sh)

# Maintenance
npm run clean             # Remove all build artifacts and cache files
```

## Project Structure

- `docs/` - VitePress documentation source files
  - `docs/.vitepress/config.js` - VitePress configuration with Mermaid plugin integration
  - `docs/guide/` - Getting started, installation, configuration guides
  - `docs/examples/` - Basic, advanced, Vue components, Mermaid diagrams
  - `docs/api/` - API documentation and configuration options
- `desktop/` - Wails desktop application
  - `desktop/app.go` - Go backend application logic
  - `desktop/main.go` - Main entry point for desktop app
  - `desktop/wails.json` - Wails configuration
  - `desktop/build/bin/` - Built desktop executables
- `scripts/` - Build automation scripts
  - `scripts/build-docs.sh` - VitePress documentation build
  - `scripts/build-desktop.sh` - Desktop app build
  - `scripts/deploy.sh` - Combined web + desktop deployment
- `dist/` - Final deployment artifacts
  - `dist/web/` - Built web version
  - `dist/desktop/` - Built desktop executables

## Architecture Notes

**Dual-Platform Design:**

- Web version: Standard VitePress static site
- Desktop version: Wails app serving VitePress build as embedded frontend

**VitePress Configuration:**

- Uses `vitepress-plugin-mermaid` for diagram support
- Korean language content for beginners
- Custom navigation and sidebar in `docs/.vitepress/config.js`
- ESM module support (`"type": "module"` in package.json)

**Desktop App Architecture:**

- Go backend using Wails v2 framework
- Frontend serves pre-built VitePress static files
- Configured for offline usage with bundled dependencies

**Known Issues:**

- Mermaid v11.10.1 compatibility issues with vitepress-plugin-mermaid v2.0.17
- Some diagrams (especially gitGraph) may require explicit configuration blocks
- Update both packages together when compatibility is resolved

## Build Process

1. **Documentation Build**: `npm run docs:build` → `docs/.vitepress/dist/`
2. **Desktop Build**: Wails compiles Go backend + copies frontend files
3. **Deployment**: `scripts/deploy.sh` coordinates both builds and organizes `dist/` folder

## Technical Dependencies

- **VitePress** ^1.6.4: Static site generator
- **Mermaid** ^11.10.1: Diagram rendering (with known compatibility issues)
- **vitepress-plugin-mermaid** ^2.0.17: VitePress Mermaid integration
- **Wails**: Go desktop app framework (not in package.json, system dependency)

## License

This project is licensed under the MIT License - see the LICENSE file for details.