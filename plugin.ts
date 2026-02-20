import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildScopedDirectories, createDropkitPlugin } from "cursed-dropkit";

export type CreateSquadDropkitPluginOptions = {
  service?: string;
  namespace?: string;
  includeGlobal?: boolean;
  includeProject?: boolean;
  summaryToolName?: string | false;
};

/// Create a squad-focused dropkit plugin using package defaults.
export function createSquadDropkitPlugin(options: CreateSquadDropkitPluginOptions = {}) {
  const packageRoot = dirname(fileURLToPath(import.meta.url));
  const pluginRootDir = join(packageRoot, "files");

  return createDropkitPlugin({
    service: options.service ?? "dropkit-squad",
    summaryToolName: options.summaryToolName,
    directories: (root) =>
      buildScopedDirectories({
        pluginRootDir,
        root,
        namespace: options.namespace ?? "dropkit-squad",
        includeGlobal: options.includeGlobal,
        includeProject: options.includeProject,
      }),
  });
}
