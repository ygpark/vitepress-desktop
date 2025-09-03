.PHONY: help install dev dev-desktop build-docs build-desktop build-all clean test lint preview

# Default target
help:
	@echo "Available targets:"
	@echo "  make install       - Install all dependencies (npm and Go)"
	@echo "  make dev          - Start VitePress development server"
	@echo "  make dev-desktop  - Start desktop app in development mode"
	@echo "  make build-docs   - Build VitePress documentation"
	@echo "  make build-desktop - Build desktop application"
	@echo "  make build-all    - Build both web and desktop versions"
	@echo "  make clean        - Remove all build artifacts"
	@echo "  make preview      - Preview production build"
	@echo "  make check-deps   - Check if required dependencies are installed"

# Check dependencies
check-deps:
	@echo "Checking dependencies..."
	@command -v node >/dev/null 2>&1 || { echo "❌ Node.js is not installed"; exit 1; }
	@command -v npm >/dev/null 2>&1 || { echo "❌ npm is not installed"; exit 1; }
	@command -v go >/dev/null 2>&1 || { echo "❌ Go is not installed"; exit 1; }
	@command -v wails >/dev/null 2>&1 || { echo "❌ Wails is not installed. Install with: go install github.com/wailsapp/wails/v2/cmd/wails@latest"; exit 1; }
	@echo "✅ All dependencies are installed"

# Install dependencies
install:
	@echo "Installing npm dependencies..."
	npm install
	@echo "Installing Go dependencies..."
	cd desktop && go mod download
	@echo "✅ Dependencies installed"

# Development
dev:
	@echo "Starting VitePress development server..."
	npm run docs:dev

dev-desktop: check-deps
	@echo "Starting desktop app in development mode..."
	npm run dev:desktop

# Build targets
build-docs:
	@echo "Building VitePress documentation..."
	npm run docs:build
	@echo "✅ Documentation built to docs/.vitepress/dist/"

build-desktop: check-deps build-docs
	@echo "Building desktop application..."
	npm run build:desktop
	@echo "✅ Desktop app built"

build-all: check-deps
	@echo "Building both web and desktop versions..."
	npm run build:all
	@echo "✅ All builds complete"

# Build for different platforms
build-windows: check-deps build-docs
	@echo "Building for Windows..."
	cd desktop && wails build -platform windows/amd64
	@echo "✅ Windows build complete"

build-mac: check-deps build-docs
	@echo "Building for macOS..."
	cd desktop && wails build -platform darwin/universal
	@echo "✅ macOS build complete"

build-linux: check-deps build-docs
	@echo "Building for Linux..."
	cd desktop && wails build -platform linux/amd64
	@echo "✅ Linux build complete"

# Clean
clean:
	@echo "Cleaning build artifacts..."
	npm run clean
	rm -rf docs/.vitepress/dist
	rm -rf docs/.vitepress/cache
	rm -rf desktop/build/bin
	rm -rf dist
	@echo "✅ Clean complete"

# Preview
preview: build-docs
	@echo "Starting preview server..."
	npm run docs:preview

# Test (placeholder for future tests)
test:
	@echo "No tests configured yet"

# Lint (placeholder for future linting)
lint:
	@echo "No linting configured yet"

# Watch for changes (development helper)
watch:
	@echo "Watching for changes..."
	@make dev