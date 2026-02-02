import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Award } from 'lucide-react';

const Acheivements = ({ achievements = [] }) => {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTitle, setActiveTitle] = useState('');

  const openModal = (img, title) => {
    setActiveImage(img);
    setActiveTitle(title);
    setOpen(true);
  };

  return (
    <>
      <section id="acheivements" className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((ach) => (
              <Card
                key={ach.id}
                className="group bg-gray-900/60 border-gray-700 backdrop-blur-sm
                           hover:scale-105 transition-transform duration-300 overflow-hidden"
              >

                {/* Image Section */}
                {ach.image_url && (
                  <div
                    className="relative h-40 w-full overflow-hidden cursor-pointer"
                    onClick={() => openModal(ach.image_url, ach.title)}
                  >
                    <img
                      src={ach.image_url}
                      alt={ach.title}
                      className="w-full h-full object-cover object-[10%_15%]
                                 group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Year Badge */}
                    {ach.year && (
                      <span className="absolute top-3 right-3
                                    bg-gradient-to-r from-gray-400 to-purple-600
                                    text-white text-xs font-semibold
                                    px-3 py-1 rounded-full
                                    shadow-lg backdrop-blur-sm ">
                        {ach.year}
                    </span>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}

                <CardContent className="p-6">
                  <Award className="w-9 h-9 text-green-400 mb-4" />

                  <h3 className="text-lg font-bold text-white mb-2">
                    {ach.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </CardContent>

              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 bg-black text-white
                         rounded-full w-9 h-9 flex items-center justify-center
                         text-xl hover:scale-110 transition"
            >
              ×
            </button>

            {/* Full Image (TRUE SIZE) */}
            <img
              src={activeImage}
              alt={activeTitle}
              className="
                max-w-[90vw]
                max-h-[90vh]
                w-auto
                h-auto
                object-contain
                rounded-xl
                shadow-2xl
              "
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Acheivements;
