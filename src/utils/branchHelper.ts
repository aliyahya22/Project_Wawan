export function formatBranchDisplayName(branch: { name: string; city?: string; phone?: string }, includePhone = false): string {
  let clean = branch.name
    .replace(/Adira\s+AXI\s+Cabang\s+/gi, '')
    .replace(/Adira\s+AXI\s+/gi, '')
    .replace(/Adira\s+Cabang\s+/gi, '')
    .replace(/Cabang\s+/gi, '')
    .replace(/Adira\s+Finance\s+/gi, '')
    .trim();

  // If formatted as "Kota - Area", convert to "Area Kota" (e.g. Jakarta Selatan - Fatmawati -> Fatmawati Jakarta Selatan)
  if (clean.includes(' - ')) {
    const parts = clean.split(' - ');
    if (parts.length === 2 && parts[0].trim() && parts[1].trim()) {
      clean = `${parts[1].trim()} ${parts[0].trim()}`;
    }
  }

  if (includePhone) {
    const phone = '085288157752';
    return `Adira Finance ${clean} - ${phone}`;
  }

  return `Adira Finance ${clean}`;
}
