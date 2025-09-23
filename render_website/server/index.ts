import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import fs from "fs";
import path from "path";

const app = express();

// CRITICAL INTERCEPTS BEFORE ALL MIDDLEWARE
app.use((req: Request, res: Response, next: NextFunction) => {
  // Google verification file
  if (req.url === '/google82xIZJVDpbITzAubcuZ3UUl-xeHKcTlsa5VP0s1o3vI.html') {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    res.end('google-site-verification: google82xIZJVDpbITzAubcuZ3UUl-xeHKcTlsa5VP0s1o3vI.html');
    return;
  }
  

  
  next();
});

// META TAG INJECTION FOR GOOGLE VERIFICATION
app.use((req: Request, res: Response, next: NextFunction) => {
  const originalSend = res.send;
  res.send = function(body: any) {
    if (typeof body === 'string' && body.includes('<!DOCTYPE html>') && !body.includes('google-site-verification')) {
      body = body.replace(
        '<meta charset="UTF-8" />',
        '<meta charset="UTF-8" />\n    <meta name="google-site-verification" content="82xIZJVDpbITzAubcuZ3UUl-xeHKcTlsa5VP0s1o3vI" />'
      );
    }
    return originalSend.call(this, body);
  };
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enhanced domain handling and SSL redirects
app.use((req, res, next) => {
  const originalHost = req.header('host') || '';
  const protocol = req.header('x-forwarded-proto') || req.protocol;
  const isSecure = protocol === 'https';
  
  // Force HTTPS in production
  if (!isSecure && process.env.NODE_ENV === 'production') {
    return res.redirect(301, `https://${originalHost}${req.url}`);
  }

  // Removed apex domain redirect to fix Google indexing issue
  // Both elpdata.com and www.elpdata.com will now serve the same content
  // This resolves the "Page is not indexed: Page with redirect" Google Console error

  // 301 redirects for missing pages that Google is trying to crawl
  const redirects: { [key: string]: string } = {
    '/tableau-users-list': '/technology-lists',
    '/bmc-remedy-users-list': '/technology-lists', 
    '/apache-hadoop-users-list': '/technology-lists',
    '/fast-hosts-users-list': '/technology-lists',
    '/vp-email-list': '/role-based-solutions',
    '/engineers-email-list': '/role-based-solutions'
  };

  if (redirects[req.url]) {
    return res.redirect(301, redirects[req.url]);
  }



  // Removed server-side role-connect handler to allow React SPA routing

  next();
});

// Force CORS headers globally for all responses
app.use((req, res, next) => {
  // CORS headers for external access
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Force Google verification meta tag injection for ALL HTML responses - CRITICAL
  const originalSend = res.send;
  res.send = function(body) {
    if (typeof body === 'string' && body.includes('<!DOCTYPE html>')) {
      // Always inject the meta tag if it's not already present
      if (!body.includes('google-site-verification')) {
        // Try multiple injection points to ensure it works
        if (body.includes('<meta charset="UTF-8" />')) {
          body = body.replace(
            '<meta charset="UTF-8" />',
            '<meta charset="UTF-8" />\n    <meta name="google-site-verification" content="82xIZJVDpbITzAubcuZ3UUl-xeHKcTlsa5VP0s1o3vI" />'
          );
        } else if (body.includes('<head>')) {
          body = body.replace(
            '<head>',
            '<head>\n    <meta name="google-site-verification" content="82xIZJVDpbITzAubcuZ3UUl-xeHKcTlsa5VP0s1o3vI" />'
          );
        }
      }
    }
    return originalSend.call(this, body);
  };
  
  // Security headers
  res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  res.header('X-XSS-Protection', '1; mode=block');
  res.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.header('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  // Content Security Policy
  res.header('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https: wss: ws:; " +
    "frame-ancestors 'none';"
  );
  
  // CORS headers for external access
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// HTML compression middleware
app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function(body) {
    if (typeof body === 'string' && body.includes('<!DOCTYPE html>')) {
      // Minify HTML by removing unnecessary whitespace
      body = body
        .replace(/>\s+</g, '><')
        .replace(/\s+>/g, '>')
        .replace(/<\s+/g, '<')
        .trim();
    }
    return originalSend.call(this, body);
  };
  next();
});

// Custom 404 error page route
app.get('/404', (req, res) => {
  res.status(404).send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Page Not Found - ELP Data</title><meta name="description" content="Page not found. Browse our technology databases and business intelligence solutions."><link rel="canonical" href="https://www.elpdata.com/404"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:0;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;min-height:100vh;display:flex;align-items:center;justify-content:center}.container{text-align:center;max-width:600px;padding:2rem}h1{font-size:4rem;margin:0;font-weight:700}h2{font-size:1.5rem;margin:1rem 0;font-weight:400}.links{margin:2rem 0}.links a{display:inline-block;margin:0.5rem;padding:0.75rem 1.5rem;background:rgba(255,255,255,0.2);color:white;text-decoration:none;border-radius:5px;transition:all 0.3s}.links a:hover{background:rgba(255,255,255,0.3);transform:translateY(-2px)}</style></head><body><div class="container"><h1>404</h1><h2>Page Not Found</h2><p>The page you're looking for doesn't exist, but we have plenty of other valuable resources.</p><div class="links"><a href="/">Home</a><a href="/sap-users-list">SAP Users</a><a href="/salesforce-users-list">Salesforce Users</a><a href="/oracle-users-list">Oracle Users</a><a href="/cisco-users-list">Cisco Users</a><a href="/workday-users-list">Workday Users</a><a href="/ceo-email-list">CEO Email List</a><a href="/contact-us">Contact Us</a></div><div class="social"><a href="https://linkedin.com/company/elpdata" target="_blank" rel="noopener">LinkedIn</a><a href="https://twitter.com/elpdata" target="_blank" rel="noopener">Twitter</a></div></div></body></html>`);
});

// Remove this - it's breaking the React app routing

(async () => {
  const server = await registerRoutes(app);
  
  // Serve logo files FIRST to prevent route conflicts
  app.get('/logo.png', (req, res) => {
    const logoPath = path.join(process.cwd(), 'public', 'logo.png');
    if (fs.existsSync(logoPath)) {
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.sendFile(logoPath);
    } else {
      res.status(404).end();
    }
  });

  app.get('/elp-logo.png', (req, res) => {
    const logoPath = path.join(process.cwd(), 'public', 'elp-logo.png');
    if (fs.existsSync(logoPath)) {
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.sendFile(logoPath);
    } else {
      res.status(404).end();
    }
  });

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Serve Google verification file
  app.get('/google82xIZJVDpbITzAubcuZ3UUl-xeHKcTlsa5VP0s1o3vI.html', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.send('google-site-verification: google82xIZJVDpbITzAubcuZ3UUl-xeHKcTlsa5VP0s1o3vI.html');
  });

  // Serve favicon.ico route
  app.get('/favicon.ico', (req, res) => {
    const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
    if (fs.existsSync(faviconPath)) {
      res.sendFile(faviconPath);
    } else {
      res.status(204).end();
    }
  });

  // Serve robots.txt
  app.get('/robots.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(`User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.elpdata.com/sitemap.xml

# Crawl-delay (optional)
Crawl-delay: 1`);
  });

  // Serve sitemap.xml
  app.get('/sitemap.xml', (req, res) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.elpdata.com/</loc>
    <lastmod>2025-09-09</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/about</loc>
    <lastmod>2025-09-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/contact-us</loc>
    <lastmod>2025-09-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/sap-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/salesforce-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/oracle-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/cisco-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/workday-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/microsoft-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/vmware-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/aws-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/ibm-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/google-cloud-users-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/ceo-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/cto-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/cfo-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/healthcare-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/manufacturing-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/financial-services-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/technology-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/automotive-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/construction-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/energy-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/transportation-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/insurance-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/banking-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/telecommunications-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/aerospace-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/pharmaceutical-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/agriculture-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/mining-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/logistics-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/chemical-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elpdata.com/media-entertainment-industry-email-list</loc>
    <lastmod>2025-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
    
    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, "0.0.0.0", () => {
    log(`serving on port ${PORT}`);
  });
})();