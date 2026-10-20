import React, { useState } from 'react';
import { ARTICLES_DATA } from '../../data/mockData';
import { Article } from '../../types';
import { openWhatsAppGeneral } from '../../utils/whatsapp';
import { 
  Search, 
  ArrowRight, 
  X, 
  MessageCircle, 
  BookOpen, 
  Clock, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { AdiraLogo } from '../common/AdiraLogo';

export const ArtikelView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['Semua', 'Syarat & Proses', 'Take Over', 'Edukasi Finansial'];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
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
            <span>Ditulis oleh praktisi pembiayaan resmi AXI</span>
            <span aria-hidden="true">·</span>
            <span>Update reguler & informatif</span>
          </div>
        </div>

        {/* Bento Stat Card (4 Cols) */}
        <div className="lg:col-span-4 bg-[#18181B] text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Literasi Keuangan
            </span>
            <BookOpen className="w-4 h-4 text-amber-300" />
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-black font-mono text-white block">
              {ARTICLES_DATA.length} Panduan
            </span>
            <span className="text-xs text-stone-300 block">
              Materi Edukasi Terverifikasi
            </span>
            <p className="text-[11px] text-stone-400 leading-relaxed pt-1">
              Dapatkan pemahaman utuh mengenai hak dan kewajiban debitur sebelum menandatangani kontrak pembiayaan.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openWhatsAppGeneral('Pertanyaan Seputar Panduan BPKB')}
            className="w-full py-2.5 px-4 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
          >
            Tanya Konsultan Kami
          </button>
        </div>

      </div>

      {/* BENTO ROW 2: SEARCH & CATEGORY FILTER BAR */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-[#FAF9F6] text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Cari artikel atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900 placeholder:text-stone-400 transition-all"
            />
          </div>

        </div>
      </div>

      {/* BENTO ROW 3: ARTICLES BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-2xs flex flex-col justify-between hover:border-stone-300 transition-all space-y-4"
          >
            <div className="space-y-3">
              {/* Category & Time */}
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-semibold px-2 py-0.5 rounded-md bg-stone-100 text-stone-800">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-stone-400">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h2 
                className="text-base font-bold text-stone-900 hover:text-stone-700 transition-colors cursor-pointer leading-snug"
                onClick={() => setActiveArticle(article)}
              >
                {article.title}
              </h2>

              <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-stone-100">
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
                onClick={() => openWhatsAppGeneral(`Diskusi Artikel: ${article.title}`)}
                className="p-2 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                title="Tanyakan isi artikel ini ke WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* ARTICLE READ MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setActiveArticle(null)}
          />

          <div className="relative bg-white rounded-3xl shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-4">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {activeArticle.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug mt-1">
                  {activeArticle.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-stone-400">
                  <span>{activeArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.readTime} bacaan</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

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
                  onClick={() => openWhatsAppGeneral(`Tanya Artikel: ${activeArticle.title}`)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950/20" />
                  <span>Chat Tim AXI</span>
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
