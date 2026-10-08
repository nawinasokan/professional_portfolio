import React, { useState } from 'react';
import { Loader2, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { uploadImage } from '../../lib/portfolioApi';

const ImageUploadField = ({ label = 'Image', value, onChange, folder = 'misc' }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const url = await uploadImage(file, folder);
      onChange(url);
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-200">{label}</label>
      {value && (
        <img src={value} alt="" className="w-24 h-24 object-cover rounded-md border border-gray-700" />
      )}
      <div className="flex items-center gap-2">
        <Input type="file" accept="image/*" onChange={handleFile} disabled={uploading} className="text-gray-200" />
        <Button type="button" size="icon" variant="outline" disabled>
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
        </Button>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default ImageUploadField;
