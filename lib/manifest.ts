export interface UcpManifest {
  ucp: {
    version: string;
    services: Record<string, unknown>;
    capabilities: Array<unknown>;
    tools: Array<unknown>;
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
    tools: [
      {
        name: 'get_subscription_plans',
        description: 'Get available tomato delivery subscription options with pricing and delivery schedules. Returns weekly, bi-weekly, and monthly farm box plans.',
        input_schema: {
          type: 'object',
          properties: {
            currency: {
              type: 'string',
              description: 'ISO 4217 currency code (e.g., USD, EUR, GBP). Defaults to USD if not specified.',
              default: 'USD',
            },
            include_trial: {
              type: 'boolean',
              description: 'Whether to include plans with introductory offers',
              default: true,
            },
          },
          required: [],
        },
        endpoint: {
          method: 'GET',
          url: '__HOST__/api/subscription-plans',
        },
      },
      {
        name: 'generate_checkout_link',
        description: 'Generate a checkout link for a tomato delivery subscription. Returns a secure URL for completing the farm box purchase. The link expires after 24 hours.',
        input_schema: {
          type: 'object',
          properties: {
            plan_id: {
              type: 'string',
              description: 'The delivery plan identifier (weekly, bi-weekly, or monthly)',
            },
            success_url: {
              type: 'string',
              description: 'URL to redirect after successful order',
            },
            cancel_url: {
              type: 'string',
              description: 'URL to redirect if customer cancels',
            },
            customer_email: {
              type: 'string',
              description: 'Pre-fill checkout with customer email',
            },
            metadata: {
              type: 'object',
              description: 'Optional order details',
              additionalProperties: true,
            },
          },
          required: ['plan_id', 'success_url', 'cancel_url'],
        },
        endpoint: {
          method: 'POST',
          url: '__HOST__/api/checkout/generate',
        },
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
