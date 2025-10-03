// Minimal JS SDK (public-safe). Ingen auth – bara exempel.
export class CreatorsHubClient {
  constructor(cfg = {}) {
    this.baseUrl = cfg.baseUrl ?? "https://api.creatorshub.global"; // placeholder
    this.token = cfg.token;
  }

  async getCreatorProfile(id) {
    const res = await fetch(`${this.baseUrl}/v1/creators/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async listContent(creatorId) {
    const res = await fetch(`${this.baseUrl}/v1/creators/${creatorId}/content`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async requestExportAll() {
    // Skulle kräva auth i verkligheten
    const res = await fetch(`${this.baseUrl}/v1/exports`, { method: "POST" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
}
