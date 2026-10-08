import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import ImageUploadField from './ImageUploadField';
import { updatePersonal } from '../../lib/portfolioApi';
import { usePortfolioData } from '../../contexts/PortfolioDataContext';
import { useToast } from '../../hooks/use-toast';

const PersonalEditDialog = ({ trigger, title, fields }) => {
  const { data, refetch } = usePortfolioData();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      const initial = {};
      fields.forEach(({ name }) => {
        initial[name] = data?.personal?.[name] ?? '';
      });
      setForm(initial);
    }
  }, [open]); // eslint-disable-line

  const setField = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await updatePersonal(form);
      toast({ title: 'Saved' });
      setOpen(false);
      refetch();
    } catch (err) {
      toast({ title: 'Save failed', description: err.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white">{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.name} className="space-y-1">
              {field.type === 'image' ? (
                <ImageUploadField
                  label={field.label}
                  value={form[field.name]}
                  onChange={(url) => setField(field.name, url)}
                  folder="profile"
                />
              ) : (
                <>
                  <Label className="text-gray-200">{field.label}</Label>
                  {field.type === 'textarea' ? (
                    <Textarea
                      value={form[field.name] ?? ''}
                      onChange={(e) => setField(field.name, e.target.value)}
                      rows={4}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  ) : (
                    <Input
                      value={form[field.name] ?? ''}
                      onChange={(e) => setField(field.name, e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PersonalEditDialog;
