import { Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
}

export default function SocialShare({ 
  url = window.location.href, 
  title = "ELP Data - Technology Database & Business Intelligence",
  description = "Access 1000+ technology user lists with 96% accurate data"
}: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=elpdata`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`
  };

  const handleShare = (platform: string) => {
    window.open(shareLinks[platform as keyof typeof shareLinks], '_blank', 'width=600,height=400');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      
      {navigator.share && (
        <Button variant="outline" size="sm" onClick={handleNativeShare}>
          <Share2 className="w-4 h-4" />
        </Button>
      )}
      
      <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
        <Twitter className="w-4 h-4" />
      </Button>
      
      <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
        <Linkedin className="w-4 h-4" />
      </Button>
      
      <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>
        <Facebook className="w-4 h-4" />
      </Button>
    </div>
  );
}