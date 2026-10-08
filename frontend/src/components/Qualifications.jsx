import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { usePortfolioData } from '../contexts/PortfolioDataContext';
import { deleteRow } from '../lib/portfolioApi';
import ItemEditorDialog from './admin/ItemEditorDialog';
import EditButton from './admin/EditButton';
import DeleteButton from './admin/DeleteButton';
import AddButton from './admin/AddButton';

const QUALIFICATION_FIELDS = [
  { name: 'degree', label: 'Degree / Certification', type: 'text' },
  { name: 'institution', label: 'Institution', type: 'text' },
  { name: 'duration', label: 'Duration', type: 'text' },
  { name: 'grade', label: 'Grade', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
];

const Qualifications = ({ qualifications }) => {
  const { canEdit } = useAuth();
  const { refetch } = usePortfolioData();

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden" id="qualifications">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-green-500/20 to-blue-500/20 transform skew-y-2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={qual.id} className="bg-gray-900/50 border-gray-700 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:bg-gray-900/70 transition-all duration-500 group hover:scale-105">
                <CardContent className="p-6">
                  {canEdit && (
                    <div className="flex justify-end gap-2 mb-2">
                      <ItemEditorDialog
                        trigger={<EditButton />}
                        title="Edit Qualification"
                        table="qualifications"
                        fields={QUALIFICATION_FIELDS}
                        initialValues={qual}
                        onSaved={refetch}
                      />
                      <DeleteButton
                        confirmMessage={`Delete "${qual.degree}"?`}
                        onConfirm={async () => {
                          await deleteRow('qualifications', qual.id);
                          refetch();
                        }}
                      />
                    </div>
                  )}
                  {/* Icon */}
                  <div className="mb-4">
                    {qual.degree.includes('Certification') ? (
                      <Award className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <GraduationCap className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>

                  {/* Degree/Certification */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                    {qual.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-blue-400 font-semibold mb-3">
                    {qual.institution}
                  </p>

                  {/* Duration and Grade */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      <Calendar className="w-3 h-3 mr-1" />
                      {qual.duration}
                    </Badge>
                    <Badge variant="outline" className="border-green-600 text-green-400">
                      {qual.grade}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {qual.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {canEdit && (
            <div className="mt-8 flex justify-center">
              <ItemEditorDialog
                trigger={<AddButton label="Add Qualification" />}
                title="Add Qualification"
                table="qualifications"
                fields={QUALIFICATION_FIELDS}
                initialValues={{ sort_order: qualifications.length }}
                onSaved={refetch}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;