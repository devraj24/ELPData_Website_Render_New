// Force cache clear for Oracle and Salesforce updates
console.log('🔄 FORCE CACHE CLEAR: Starting comprehensive cache invalidation...');

// Clear all possible caches
if ('caches' in window) {
  caches.keys().then(function(names) {
    names.forEach(function(name) {
      caches.delete(name);
    });
  });
}

// Clear localStorage and sessionStorage
if (typeof(Storage) !== "undefined") {
  localStorage.clear();
  sessionStorage.clear();
}

// Force reload all modules
if (window.location.search.indexOf('cachebust') === -1) {
  const separator = window.location.search ? '&' : '?';
  window.location.replace(window.location.href + separator + 'cachebust=' + Date.now());
}

// Update all Oracle and Salesforce references immediately
function forceUpdateContent() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  let updated = false;
  
  while (node = walker.nextNode()) {
    let text = node.textContent;
    
    // Oracle updates
    if (text.includes('Oracle Database')) {
      node.textContent = text.replace(/Oracle Database/g, 'Oracle Corporation');
      updated = true;
    }
    if (text.includes('134.2K') || text.includes('134,200') || text.includes('119,653')) {
      node.textContent = text.replace(/134\.2K|134,200|119,653/g, '2.84M');
      updated = true;
    }
    
    // Salesforce updates  
    if (text.includes('Salesforce CRM')) {
      node.textContent = text.replace(/Salesforce CRM/g, 'Salesforce.com');
      updated = true;
    }
    if (text.includes('189.7K') || text.includes('189,690') || text.includes('407.5K')) {
      node.textContent = text.replace(/189\.7K|189,690|407\.5K/g, '599K');
      updated = true;
    }
  }
  
  if (updated) {
    console.log('✅ Content updated successfully');
  }
}

// Run immediately and set aggressive intervals
forceUpdateContent();
setInterval(forceUpdateContent, 100);

// Monitor for DOM changes
const observer = new MutationObserver(forceUpdateContent);
observer.observe(document.body, { 
  childList: true, 
  subtree: true, 
  characterData: true 
});

console.log('🔄 FORCE CACHE CLEAR: Cache invalidation and content update active');