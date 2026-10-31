import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { Article } from '../../types';
import { openWhatsAppGeneral } from '../../utils/whatsapp';
import { 
  Search, 
  ArrowRight, 
  X, 
  BookOpen, 
  Clock, 
  Calendar,
  Sparkles,
  FileText
} from 'lucide-react';
import { AdiraLogo } from '../common/AdiraLogo';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const ArtikelView: React.FC = () => {
  const { articles } = useCms();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['Semua', 'Syarat & Proses', 'Take Over', 'Edukasi Finansial'];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'Semua' || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* BENTO ROW 1: HEADER & STATS HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Overview Card (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FAF9F6] border border-stone-200/80 px-3 py-1.5 rounded-xl">
              <AdiraLogo size="sm" variant="badge" />
              <span className="text-xs font-semibold text-stone-600">
                Pusat Panduan & Edukasi Finansial BPKB
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance">
              Artikel, Tips & Panduan Pembiayaan Kendaraan
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
              Panduan lengkap persiapan dokumen pengajuan BPKB agar cepat disetujui, kalkulasi perbandingan suku bunga flat vs efektif, tips take over yang menguntungkan, serta pengelolaan arus kas cicilan aman.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-500 border-t border-stone-100">
            <span>Ditulis oleh praktisi pembiayaan resmi Adira Finance</span>
            <span aria-hidden="true">·</span>
            <span>Update reguler & informatif</span>
          </div>
        </div>

        {/* Bento Quick Search & Filter Card (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <Search className="w-4 h-4 text-amber-500" />
              <span>Cari Artikel & Topik</span>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Cari kata kunci (contoh: bunga, take over)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-9 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all text-stone-900 placeholder:text-stone-400"
              />
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-stone-100">
            <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
              Kategori Artikel
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white font-semibold'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* BENTO ROW 2: ARTICLE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArticles.length === 0 ? (
          <div className="col-span-full py-12 text-center text-stone-500 text-xs bg-white rounded-3xl border border-stone-200 p-8 space-y-2">
            <p>Tidak ada artikel yang cocok dengan pencarian "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="text-stone-900 font-bold underline cursor-pointer"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4 hover:border-stone-300 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold bg-amber-50 text-amber-900 px-2.5 py-1 rounded-md border border-amber-200">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-stone-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-stone-600 transition-colors cursor-pointer"
                >
                  <span>Baca Panduan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsAppGeneral()}
                  className="p-2 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                  title="Konsultasi via WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      {/* ARTICLE READ MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setActiveArticle(null)}
          />

          <div className="relative bg-white rounded-3xl shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-amber-50 text-amber-900 px-2.5 py-1 rounded-md border border-amber-200">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-stone-400">·</span>
                <span className="text-xs text-stone-500">{activeArticle.date}</span>
                <span className="text-xs text-stone-400">·</span>
                <span className="text-xs text-stone-500">{activeArticle.readTime}</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-stone-500">
                Ingin konsultasi seputar topik panduan ini?
              </div>

              <div className="flex gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => openWhatsAppGeneral()}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-900" />
                  <span>Konsultasi via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
