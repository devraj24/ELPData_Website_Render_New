import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { analyzeTechnology, getTechnologySuggestions, generateMarketResearchResponse, generateApplicationAnalysis, type TechnologyAnalysis } from "./openai";
import { getExtractedAnalysis, getAllExtractedTechnologies } from "./extractedData";
import { generateApplicationContent } from "./generateApplicationContent";
import { sendContactEmail, sendConfirmationEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // COMPLETE SITEMAP WITH ROLE CONNECT & INDUSTRY REACH
  app.get('/sitemap.xml', (req, res) => {
    
    // Generate comprehensive sitemap including Role Connect and Industry Reach
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Core services
    const coreServices = [
      'technology-lists', 'cisco-users-list', 'workday-users-list', 'salesforce-users-list',
      'technology-data-services', 'business-intelligence-services', 'enterprise-data-services',
      'ai-technology-assistant', 'email-campaign-services', 'data-enrichment-services'
    ];
    
    // Role Connect services - Job title and role-based targeting
    const roleConnectServices = [
      'role-connect', 'role-based-targeting', 'job-title-targeting', 'executive-targeting',
      'decision-maker-targeting', 'c-level-targeting', 'vp-level-targeting', 'director-targeting',
      'manager-targeting', 'specialist-targeting', 'analyst-targeting', 'engineer-targeting',
      'developer-targeting', 'consultant-targeting', 'administrator-targeting',
      'coordinator-targeting', 'supervisor-targeting', 'team-lead-targeting',
      'project-manager-targeting', 'product-manager-targeting', 'sales-manager-targeting',
      'marketing-manager-targeting', 'hr-manager-targeting', 'finance-manager-targeting',
      'operations-manager-targeting', 'it-manager-targeting', 'security-manager-targeting',
      'compliance-manager-targeting', 'risk-manager-targeting', 'procurement-manager-targeting'
    ];
    
    // Industry Reach services - Industry-specific outreach
    const industryReachServices = [
      'industry-reach', 'industry-targeting', 'sector-targeting', 'vertical-targeting',
      'healthcare-industry-reach', 'technology-industry-reach', 'financial-services-reach',
      'manufacturing-industry-reach', 'retail-industry-reach', 'education-industry-reach',
      'government-industry-reach', 'non-profit-industry-reach', 'automotive-industry-reach',
      'aerospace-industry-reach', 'energy-industry-reach', 'telecommunications-reach',
      'media-entertainment-reach', 'real-estate-industry-reach', 'construction-industry-reach',
      'hospitality-industry-reach', 'transportation-industry-reach', 'pharmaceutical-reach',
      'biotechnology-industry-reach', 'chemical-industry-reach', 'food-beverage-reach',
      'agriculture-industry-reach', 'mining-industry-reach', 'textile-industry-reach',
      'furniture-industry-reach', 'paper-industry-reach', 'printing-industry-reach',
      'packaging-industry-reach', 'plastics-industry-reach', 'rubber-industry-reach',
      'glass-industry-reach', 'ceramics-industry-reach', 'metals-industry-reach',
      'machinery-industry-reach', 'electronics-industry-reach', 'computer-industry-reach',
      'software-industry-reach', 'internet-industry-reach', 'gaming-industry-reach'
    ];
    
    // Build complete sitemap
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.elpdata.com/</loc><lastmod>${currentDate}</lastmod><priority>1.0</priority></url>`;
    
    // Add core services
    coreServices.forEach(service => {
      sitemap += `
  <url><loc>https://www.elpdata.com/${service}</loc><lastmod>${currentDate}</lastmod><priority>0.9</priority></url>`;
    });
    
    // Add Role Connect services
    roleConnectServices.forEach(service => {
      sitemap += `
  <url><loc>https://www.elpdata.com/${service}</loc><lastmod>${currentDate}</lastmod><priority>0.8</priority></url>`;
    });
    
    // Add Industry Reach services
    industryReachServices.forEach(service => {
      sitemap += `
  <url><loc>https://www.elpdata.com/${service}</loc><lastmod>${currentDate}</lastmod><priority>0.8</priority></url>`;
    });
    
    // Try to include additional URLs from the full sitemap file
    try {
      const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
      const fullSitemapContent = fs.readFileSync(sitemapPath, 'utf8');
      const urlMatches = fullSitemapContent.match(/<loc>https:\/\/www\.elpdata\.com\/([^<]+)<\/loc>/g);
      
      if (urlMatches) {
        const additionalUrls = urlMatches.slice(0, 500).map(match => {
          const url = match.replace('<loc>https://www.elpdata.com/', '').replace('</loc>', '');
          return url;
        }).filter(url => !coreServices.includes(url) && !roleConnectServices.includes(url) && !industryReachServices.includes(url));
        
        additionalUrls.forEach(url => {
          sitemap += `
  <url><loc>https://www.elpdata.com/${url}</loc><lastmod>${currentDate}</lastmod><priority>0.7</priority></url>`;
        });
      }
    } catch (error) {
      console.log('Full sitemap not accessible, using core services only');
    }
    
    sitemap += `
</urlset>`;
    
    const urlCount = (sitemap.match(/<url>/g) || []).length;
    console.log(`COMPLETE SITEMAP: ${urlCount} URLs including Role Connect & Industry Reach`);
    
    res.writeHead(200, {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Sitemap-URLs': urlCount.toString(),
      'X-Services': 'Role-Connect,Industry-Reach,Technology-Lists,AI-Agents',
      'X-Deploy-Status': 'COMPLETE-WITH-TARGETING'
    });
    
    res.end(sitemap);
  });

  // FORCE ROBOTS.TXT OVERRIDE - INTERCEPT ALL REQUESTS
  app.use('/robots.txt', (req, res) => {
    console.log('ROBOTS.TXT: Force override intercepted');
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    res.end(`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Technology Database Pages  
Allow: /vmware-users-list
Allow: /sap-users-list
Allow: /ibm-users-list
Allow: /oracle-users-list
Allow: /salesforce-users-list

# Industry Email Lists
Allow: /healthcare-industry-email-list
Allow: /technology-industry-email-list
Allow: /financial-services-email-list
Allow: /manufacturing-industry-email-list

# Role-Based Lists
Allow: /ceo-email-list
Allow: /cto-email-list
Allow: /cfo-email-list

# Crawl-delay for bots
Crawl-delay: 1

# Sitemap location
Sitemap: https://www.elpdata.com/sitemap.xml`);
  });

  // Technology analysis endpoint
  app.post("/api/analyze-technology", async (req, res) => {
    try {
      const { technology } = req.body;
      
      if (!technology || typeof technology !== 'string') {
        return res.status(400).json({ error: "Technology name is required" });
      }

      console.log(`Analyzing technology: ${technology}`);
      const analysis = await analyzeTechnology(technology);
      res.json(analysis);
    } catch (error) {
      console.log(`Error analyzing technology: ${error}`);
      res.status(500).json({ error: "Failed to analyze technology" });
    }
  });

  // Technology suggestions endpoint
  app.post("/api/technology-suggestions", async (req, res) => {
    try {
      const { query } = req.body;
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: "Query is required" });
      }

      console.log(`Getting technology suggestions for: ${query}`);
      const suggestions = await getTechnologySuggestions(query);
      res.json({ suggestions });
    } catch (error) {
      console.log(`Error getting technology suggestions: ${error}`);
      res.status(500).json({ error: "Failed to get technology suggestions" });
    }
  });

  // Application detail endpoint with comprehensive data
  app.get("/api/application-detail/:name", async (req, res) => {
    try {
      const applicationName = decodeURIComponent(req.params.name);
      console.log(`Generating comprehensive application details for: ${applicationName}`);
      
      // Generate comprehensive application content
      const applicationDetail = generateApplicationContent(applicationName);
      res.json(applicationDetail);
    } catch (error) {
      console.log(`Error getting application details: ${error}`);
      res.status(500).json({ error: "Failed to get application details" });
    }
  });

  // Market research chat endpoint
  app.post("/api/market-research", async (req, res) => {
    try {
      const { query, category } = req.body;
      
      if (!query) {
        return res.status(400).json({ error: "Query is required" });
      }

      const response = await generateMarketResearchResponse(query, category);
      res.json({ response });
    } catch (error) {
      console.error("Error generating market research:", error);
      res.status(500).json({ error: "Failed to generate market research response" });
    }
  });

  // Application analysis endpoint
  app.post("/api/application-analysis", async (req, res) => {
    try {
      const { applicationName } = req.body;
      
      if (!applicationName) {
        return res.status(400).json({ error: "Application name is required" });
      }

      const analysis = await generateApplicationAnalysis(applicationName);
      
      res.json({ analysis });
    } catch (error) {
      console.log(`Error generating application analysis: ${error}`);
      res.status(500).json({ error: "Failed to generate application analysis" });
    }
  });

  // Generate application content using OpenAI
  app.post("/api/generate-application-content", async (req, res) => {
    try {
      const { applicationName } = req.body;
      
      if (!applicationName || typeof applicationName !== 'string') {
        return res.status(400).json({ error: "Application name is required" });
      }

      console.log(`Generating content for application: ${applicationName}`);
      const content = await generateApplicationContent(applicationName);
      res.json(content);
    } catch (error) {
      console.log(`Error generating application content: ${error}`);
      res.status(500).json({ error: "Failed to generate application content" });
    }
  });

  // List all available technologies
  app.get("/api/available-technologies", async (req, res) => {
    try {
      const technologies = getAllExtractedTechnologies();
      res.json({ technologies });
    } catch (error) {
      console.log(`Error getting available technologies: ${error}`);
      res.status(500).json({ error: "Failed to get available technologies" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, phone, budget, timeline, interestArea, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required" });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address" });
      }

      const formData = {
        name,
        email,
        company,
        phone,
        budget,
        timeline,
        interestArea,
        message
      };

      console.log('Contact form submission received:', { name, email, company });
      
      // ALWAYS log the form data for manual processing
      console.log('=== CONTACT FORM SUBMISSION ===');
      console.log('CONTACT FORM DATA:', JSON.stringify(formData, null, 2));
      console.log('Timestamp:', new Date().toISOString());
      console.log('================================');
      
      // Contact form data is captured in console logs above

      // Try to send email but don't fail if it doesn't work
      try {
        const businessEmail = process.env.BREVO_EMAIL || 'info@elpdata.com';
        console.log('Attempting to send email to:', businessEmail);
        const emailResult = await sendContactEmail(formData, businessEmail);
        
        if (emailResult.success) {
          console.log('✅ Email sent successfully');
          await sendConfirmationEmail(formData);
        } else {
          console.log('⚠️ Email failed but form data saved:', emailResult.error);
        }
      } catch (emailError) {
        console.log('⚠️ Email service failed but form data saved:', emailError);
      }

      // ALWAYS return success - form data is logged for manual processing
      console.log(`✅ Contact form submitted by ${name} (${email})`);
      res.json({ 
        success: true, 
        message: "Your inquiry has been submitted successfully. We'll contact you soon." 
      });
    } catch (error) {
      console.error("❌ Contact form error:", error);
      res.status(500).json({ error: "Failed to submit inquiry. Please try again." });
    }
  });

  // Catch-all route to serve React app for any unmatched routes
  // This ensures both elpdata.com and www.elpdata.com serve the same content
  app.get('*', (req, res, next) => {
    // Skip API routes
    if (req.path.startsWith('/api/')) {
      return next();
    }
    
    // For all other routes, let Vite handle serving the React app
    next();
  });

  const httpServer = createServer(app);

  return httpServer;
}
