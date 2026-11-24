import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // tdd-guard (fork-local): lets the Claude Code plugin see test runs from ~/coding/mcp sessions.
    reporters: ['default', ['tdd-guard-vitest', { projectRoot: '/Users/Akseldkw/coding/mcp' }]],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
});
