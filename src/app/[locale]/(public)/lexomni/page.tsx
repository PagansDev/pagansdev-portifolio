import {
  LEXOMNI_MCP_CONFIG,
  getConfigB64,
  getInstallUrl,
  getAntigravityInstallUrl,
  getMcpJsonConfig
} from "./lib/lexomni-config";
import LexomniPageClient from "./LexomniPageClient";
import { LexomniRepoLinks } from "./components";
import LexomniWhySection from "./components/LexomniWhySection";
import LexomniAvailableTools from "./components/LexomniAvailableTools";
import LexomniFeatures from "./components/LexomniFeatures";

export default function LexomniPage() {
  const configB64 = getConfigB64(LEXOMNI_MCP_CONFIG);
  const installUrl = getInstallUrl(configB64);
  const antigravityInstallUrl = getAntigravityInstallUrl(configB64);
  const mcpJsonConfig = getMcpJsonConfig(LEXOMNI_MCP_CONFIG);

  return (
    <LexomniPageClient
      installUrl={installUrl}
      antigravityInstallUrl={antigravityInstallUrl}
      mcpJsonConfig={mcpJsonConfig}
    >
      <section className="space-y-6">
        <LexomniRepoLinks />
        <LexomniWhySection />
        <LexomniAvailableTools />
        <LexomniFeatures />
      </section>
    </LexomniPageClient>
  );
}
