import { FullBranch } from '../data/branchesData';

export function updatePageSeo(title: string, description: string) {
  if (typeof document === 'undefined') return;
  document.title = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description);
  }
}

export function updateBranchSeo(branch: FullBranch) {
  const title = `Kantor Cabang ${branch.name} (${branch.city}) · Dana Cepat BPKB Adira`;
  const description = `Alamat kantor cabang ${branch.name} di ${branch.city}, ${branch.province}. Layanan gadai BPKB motor, mobil, truk, dan pickup resmi Mitra AXI Adira Finance. Jam buka: ${branch.hours}. Hubungi WhatsApp: ${branch.whatsapp}.`;
  updatePageSeo(title, description);

  // Update hash for deep linking and local SEO
  if (typeof window !== 'undefined') {
    const slug = branch.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    window.history.replaceState(null, '', `#cabang/${branch.city.toLowerCase()}/${slug}`);
  }
}
