import React, { useState } from 'react';
import { Loader2, UploadCloud } from 'lucide-react';
import { Button } from '../ui/button';
import { uploadResume, updatePersonal } from '../../lib/portfolioApi';
import { usePortfolioData } from '../../contexts/PortfolioDataContext';
import { useToast } from '../../hooks/use-toast';

const ResumeUploadButton = () => {
  const { refetch } = usePortfolioData();
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const inputId = 'resume-upload-input';

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadResume(file);
      await updatePersonal({ resume_url: url });
      toast({ title: 'Resume updated' });
      refetch();
    } catch (err) {
      toast({ title: 'Upload failed', description: err.message, variant: 'destructive' });
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <input
        id={inputId}
        type="file"
        accept="application/pdf"
        onChange={handleFile}
        className="hidden"
        disabled={uploading}
      />
      <Button
        type="button"
        variant="outline"
        disabled={uploading}
        onClick={() => document.getElementById(inputId)?.click()}
        className="border-dashed border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white"
      >
        {uploading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <UploadCloud className="w-4 h-4 mr-2" />}
        Replace Resume PDF
      </Button>
    </div>
  );
};

export default ResumeUploadButton;
