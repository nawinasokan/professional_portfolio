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
import { upsertRow } from '../../lib/portfolioApi';
import { useToast } from '../../hooks/use-toast';

const toFormState = (fields, initialValues) => {
  const state = {};
  fields.forEach(({ name, type }) => {
    const raw = initialValues?.[name];
    if (type === 'list') {
      state[name] = Array.isArray(raw) ? raw.join('\n') : '';
    } else {
      state[name] = raw ?? '';
    }
  });
  return state;
};

const toSavedValues = (fields, formState) => {
  const values = {};
  fields.forEach(({ name, type }) => {
    if (type === 'list') {
      values[name] = formState[name]
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
    } else if (type === 'number') {
      values[name] = formState[name] === '' ? null : Number(formState[name]);
    } else {
      values[name] = formState[name];
    }
  });
  return values;
};

const ItemEditorDialog = ({ trigger, title, table, fields, initialValues, imageFolder, onSaved }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(() => toFormState(fields, initialValues));
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      setForm(toFormState(fields, initialValues));
    }
  }, [open]); // eslint-disable-line

  const setField = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

  const handleSave = async () => {
    setSaving(true);
    try {
      const values = toSavedValues(fields, form);
      await upsertRow(table, { id: initialValues?.id, ...values });
      toast({ title: 'Saved' });
      setOpen(false);
      onSaved?.();
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
                  folder={imageFolder}
                />
              ) : (
                <>
                  <Label className="text-gray-200">{field.label}</Label>
                  {field.type === 'textarea' || field.type === 'list' ? (
                    <Textarea
                      value={form[field.name]}
                      onChange={(e) => setField(field.name, e.target.value)}
                      rows={field.type === 'list' ? 4 : 3}
                      placeholder={field.type === 'list' ? 'One item per line' : undefined}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  ) : (
                    <Input
                      type={field.type === 'number' ? 'number' : 'text'}
                      value={form[field.name]}
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

export default ItemEditorDialog;
