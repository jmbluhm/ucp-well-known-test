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
        description: 'Fetch all available subscription plans with pricing, features, and billing cycles. Returns a list of active subscription plans that customers can purchase.',
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
              description: 'Whether to include plans that offer free trials',
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
        description: 'Generate a secure checkout link for a specific subscription plan. Returns a URL that the customer can use to complete their purchase. The link expires after 24 hours.',
        input_schema: {
          type: 'object',
          properties: {
            plan_id: {
              type: 'string',
              description: 'The unique identifier of the subscription plan to purchase',
            },
            success_url: {
              type: 'string',
              description: 'URL to redirect the customer after successful payment',
            },
            cancel_url: {
              type: 'string',
              description: 'URL to redirect the customer if they cancel the checkout',
            },
            customer_email: {
              type: 'string',
              description: 'Pre-fill the checkout form with this email address',
            },
            metadata: {
              type: 'object',
              description: 'Optional metadata to attach to the checkout session',
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
