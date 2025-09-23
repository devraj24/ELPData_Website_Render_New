import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  structuredData 
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = description;
    }
    
    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
    
    // Update canonical URL
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = canonical;
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    if (ogTitle) ogTitle.content = title;
    
    const ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    if (ogDescription) ogDescription.content = description;
    
    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
    if (ogUrl && canonical) ogUrl.content = canonical;
    
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;
      if (ogImageMeta) ogImageMeta.content = ogImage;
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]') as HTMLMetaElement;
    if (twitterTitle) twitterTitle.content = title;
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]') as HTMLMetaElement;
    if (twitterDescription) twitterDescription.content = description;
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]') as HTMLMetaElement;
    if (twitterUrl && canonical) twitterUrl.content = canonical;
    
    // Add explicit robots tag to ensure indexing
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    
    // Add security meta tags
    const securityTags = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { name: 'format-detection', content: 'telephone=no' },
      { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
      { httpEquiv: 'X-Frame-Options', content: 'DENY' },
      { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' }
    ];
    
    securityTags.forEach(tag => {
      const existing = document.querySelector(`meta[${tag.name ? 'name' : 'http-equiv'}="${tag.name || tag.httpEquiv}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.httpEquiv) meta.httpEquiv = tag.httpEquiv;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    
    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
    
  }, [title, description, keywords, canonical, ogImage, structuredData]);

  return null; // This component doesn't render anything
}