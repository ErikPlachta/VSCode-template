---
title: Build/Deploy Pipeline
summary: Comprehensive build and deployment system with error boundaries and automated workflows
roles: [developer, devops, maintainer]
associations: [build, deployment, ci/cd, automation]
hierarchy: root/docs/build-pipeline.md
---

# Build/Deploy Pipeline

## Summary

The VSCode MCP Extension includes a comprehensive build and deployment pipeline that automates the entire development workflow from code validation to package creation. The pipeline includes error boundaries, stage-based execution, and cross-platform support.

## Responsibilities

The build pipeline is responsible for:

1. **Code Quality** - Linting, validation, and compilation
2. **Testing** - Unit tests with optional coverage reporting
3. **Documentation** - API docs and health report generation
4. **Template Processing** - Dynamic configuration replacement
5. **Packaging** - VSIX creation for distribution

## Inputs

### Configuration Files

- `bin/mcp.config.json` - Application configuration
- `package.json` - Node.js project configuration
- `tsconfig.json` - TypeScript compilation settings
- `jest.config.js` - Testing configuration

### Source Code

- `src/**/*.ts` - TypeScript source files
- `bin/data/**/*.json` - Category data files
- `docs/**/*.md` - Documentation files

## Outputs

### Build Artifacts

- `out/` - Compiled JavaScript files
- `*.vsix` - VS Code extension packages
- `docs/api/` - Generated API documentation
- `coverage/` - Test coverage reports
- `docs/reports/health-report.md` - Health assessment

## Error Handling

### Error Boundaries

- **Stage Isolation** - Failures are contained within stages
- **Cleanup on Error** - Temporary files removed on failure
- **Detailed Logging** - Error context and line numbers
- **Exit Codes** - Proper exit codes for CI/CD integration

### Recovery Strategies

- **Retry Logic** - Configurable retry for transient failures
- **Fallback Options** - Alternative execution paths
- **Validation Gates** - Early validation to prevent downstream failures

## Examples

### Basic Build

```bash
# Run complete pipeline
npm run build:pipeline

# Windows specific
npm run build:pipeline:win
```

### Quick Development Build

```bash
# Fast build for development
npm run build:quick
```

### Production Build

```bash
# Strict mode with all validations
npm run build:full
```

### Clean Build

```bash
# Deep clean including node_modules
npm run build:clean
```

### Deployment

```bash
# Build and version bump
npm run deploy
```

## Maintenance

### Pipeline Stages

#### 1. Clean

- Removes build artifacts
- Clears caches
- Optional deep clean with node_modules removal

#### 2. Config Validation

- Validates `mcp.config.json` syntax
- Checks required configuration fields
- Ensures JSON schema compliance

#### 3. JSON Linting

- Validates all JSON files against schemas
- Checks category, record, and relationship files
- Reports structural issues

#### 4. Documentation Linting

- Validates markdown files
- Checks front matter requirements
- Ensures required sections exist

#### 5. Code Linting

- TypeScript ESLint validation
- Configurable warning thresholds
- Optional strict mode

#### 6. Compilation

- TypeScript to JavaScript compilation
- Type checking and validation
- Module resolution verification

#### 7. Template Processing

- Replaces agent label placeholders
- Processes category.json files
- Generates template variable report

#### 8. Testing

- Jest test execution
- Optional coverage reporting
- Configurable test timeout

#### 9. Documentation Generation

- TypeDoc API documentation
- Automatic type documentation
- Cross-reference generation

#### 10. Health Reporting

- Comprehensive health assessment
- Configuration validation
- Dependency analysis

#### 11. Packaging

- VSIX package creation
- Optional version bumping
- Size and metadata reporting

### Pipeline Configuration

#### Command Line Options (Bash)

```bash
# Stage selection
./bin/build.sh --stages compile,test

# Skip stages
./bin/build.sh --skip docs,package

# Coverage control
./bin/build.sh --coverage
./bin/build.sh --no-coverage

# Strict modes
./bin/build.sh --strict-lint
./bin/build.sh --strict-health

# Maintenance
./bin/build.sh --deep-clean
./bin/build.sh --update-version
```

#### Windows Batch Options

```cmd
REM Basic options
bin\build.bat --coverage
bin\build.bat --no-coverage
bin\build.bat --strict-lint
bin\build.bat --strict-health
bin\build.bat --deep-clean
bin\build.bat --update-version
```

### Package.json Scripts

#### Primary Scripts

- `build:pipeline` - Cross-platform pipeline execution
- `build:pipeline:win` - Windows-specific pipeline
- `build:full` - Production build with strict validation
- `build:quick` - Fast development build
- `build:clean` - Clean build with deep cleanup
- `deploy` - Build with version update

#### Individual Stages

- `compile` - TypeScript compilation
- `templates` - Template processing
- `test` - Test execution
- `docs` - Documentation generation
- `lint` - Code linting
- `lint:json` - JSON validation
- `lint:docs` - Documentation validation
- `health:report` - Health assessment

### Environment Variables

#### Build Control

- `COVERAGE` - Enable/disable test coverage
- `STRICT_LINT` - Fail on lint errors
- `STRICT_HEALTH` - Fail on health issues
- `DEEP_CLEAN` - Include node_modules in clean
- `UPDATE_VERSION` - Auto-increment package version

#### Runtime Configuration

- `NODE_ENV` - Node.js environment setting
- `CLEANUP_ON_ERROR` - Cleanup temporary files on error

### Cross-Platform Support

#### Linux/macOS (Bash)

- Full feature support
- Color output
- Advanced error handling
- JSON validation with `json_pp`

#### Windows (Batch)

- Core functionality
- Basic color support
- Essential error handling
- Simplified JSON validation

### Integration with CI/CD

#### Exit Codes

- `0` - Success
- `1` - Build failure
- `2` - Configuration error
- `3` - Dependency missing

#### Artifacts

- VSIX packages for distribution
- Coverage reports for quality gates
- Health reports for monitoring
- API documentation for publishing

#### Environment Detection

- Automatic CI/CD detection
- Platform-specific optimizations
- Logging format adaptation

### Customization

#### Adding New Stages

1. Create stage function in build script
2. Add to STAGES array
3. Update help documentation
4. Add package.json script if needed

#### Modifying Validation

1. Update lint configurations
2. Modify schema files
3. Adjust error thresholds
4. Update documentation

#### Performance Tuning

1. Parallel stage execution
2. Cache optimization
3. Incremental builds
4. Resource allocation

### Troubleshooting

#### Common Issues

1. **Module Resolution** - Update Jest configuration for absolute imports
2. **Permission Errors** - Ensure script execute permissions
3. **Node Version** - Verify Node.js version compatibility
4. **Disk Space** - Check available disk space for builds

#### Debug Information

1. Enable verbose logging
2. Check individual stage outputs
3. Validate configuration files
4. Review error stack traces

#### Performance Monitoring

1. Stage execution times
2. Memory usage patterns
3. Disk I/O analysis
4. Network dependency timing
