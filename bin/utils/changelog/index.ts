#!/usr/bin/env tsx
/**
 * Entry point for ChangeLogManager when invoking the directory directly:
 *   tsx bin/utils/changelog -- add-entry --type feat --summary "Something"
 * Falls back to CLI help if no command provided.
 */
import { runCli } from "./cli";
runCli();
