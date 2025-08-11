import { useState, useEffect } from 'react';
import { processLogoBackground } from '@/utils/backgroundRemoval';

interface ProcessedLogoProps {
  originalPath: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ProcessedLogo = ({ originalPath, alt, className, width, height }: ProcessedLogoProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(originalPath);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processImage = async () => {
      try {
        const processedUrl = await processLogoBackground(originalPath);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original image
        setProcessedImageUrl(originalPath);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup object URL when component unmounts
    return () => {
      if (processedImageUrl !== originalPath) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [originalPath]);

  return (
    <div className={`transition-opacity duration-300 ${isProcessing ? 'opacity-50' : 'opacity-100'}`}>
      <img
        src={processedImageUrl}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    </div>
  );
};