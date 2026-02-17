export const LEXOMNI_MCP_CONFIG = {
  command: "npx",
  args: ["-y", "lexomni-mcp"],
  env: {} as Record<string, string>
};

export function getInstallUrl(configB64: string): string {
  return `cursor://anysphere.cursor-deeplink/mcp/install?name=lexomni&config=${configB64}`;
}

export function getMcpJsonConfig(config: typeof LEXOMNI_MCP_CONFIG): string {
  const inner = JSON.stringify(config, null, 2)
    .split("\n")
    .map((line, i) => (i === 0 ? line : "    " + line))
    .join("\n");
  return `{
  "mcpServers": {
    "lexomni": ${inner}
  }
}`;
}

export function getConfigB64(config: typeof LEXOMNI_MCP_CONFIG): string {
  return Buffer.from(JSON.stringify(config), "utf-8").toString("base64");
}
