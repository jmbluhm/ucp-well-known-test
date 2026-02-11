export interface LogEntry {
  timestamp: string;
  method: string;
  path: string;
  status: number;
  host: string;
  proto: string;
  ip: string;
  userAgent: string;
  accept: string;
  requestId: string;
}

export function logRequest(req: Request, status: number): void {
  const headers = req.headers;

  // Extract protocol
  const proto = headers.get('x-forwarded-proto') || 'https';

  // Extract host
  const host = headers.get('host') || 'localhost';

  // Extract IP (best effort)
  const forwardedFor = headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() :
              headers.get('x-real-ip') ||
              'unknown';

  // Extract request ID (best effort)
  const requestId = headers.get('x-vercel-id') ||
                    headers.get('x-request-id') ||
                    headers.get('cf-ray') ||
                    'none';

  // Parse URL
  const url = new URL(req.url);

  const logEntry: LogEntry = {
    timestamp: new Date().toISOString(),
    method: req.method,
    path: url.pathname,
    status,
    host,
    proto,
    ip,
    userAgent: headers.get('user-agent') || 'unknown',
    accept: headers.get('accept') || '*/*',
    requestId,
  };

  // Log as single JSON line to stdout
  console.log(JSON.stringify(logEntry));
}
