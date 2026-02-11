export interface UcpManifest {
  ucp: {
    version: string;
    services: Record<string, unknown>;
    capabilities: Array<unknown>;
  };
}

// Base manifest template with __HOST__ placeholder
const BASE_MANIFEST = {
  ucp: {
    version: '2026-01-11',
    services: {
      'dev.ucp.shopping': {
        version: '2026-01-11',
        spec: 'https://ucp.dev/specs/shopping',
        rest: {
          schema: 'https://ucp.dev/services/shopping/openapi.json',
          endpoint: '__HOST__/',
        },
      },
    },
    capabilities: [
      {
        name: 'dev.ucp.shopping.checkout',
        version: '2026-01-11',
        spec: 'https://ucp.dev/specs/shopping/checkout',
        schema: 'https://ucp.dev/schemas/shopping/checkout.json',
      },
    ],
  },
};

export function getManifest(req: Request): UcpManifest {
  // Check for environment variable override first
  const override = process.env.UCP_ENDPOINT_OVERRIDE;

  let endpoint: string;

  if (override) {
    endpoint = override;
  } else {
    // Construct from request headers
    const headers = req.headers;
    const proto = headers.get('x-forwarded-proto') || 'https';
    const host = headers.get('host') || 'localhost:3000';
    endpoint = `${proto}://${host}`;
  }

  // Deep clone and replace __HOST__
  const manifestString = JSON.stringify(BASE_MANIFEST);
  const replacedString = manifestString.replace(/__HOST__/g, endpoint);

  return JSON.parse(replacedString) as UcpManifest;
}
