export type Reservoir = {
  id: string;
  name: string;
  elevation: number;
  normal: number;
  delta: number;
  trend: number[];
};

export const tmaData: Reservoir[] = [
  {
    id: "utama",
    name: "Bendungan Utama",
    elevation: 264.32,
    normal: 265.0,
    delta: 0.18,
    trend: [263.6, 263.8, 263.9, 264.0, 264.1, 264.2, 264.32],
  },
  {
    id: "sadel-1",
    name: "Sadel 1",
    elevation: 263.95,
    normal: 265.0,
    delta: -0.05,
    trend: [264.1, 264.05, 264.0, 263.95, 263.95, 263.9, 263.95],
  },
  {
    id: "sadel-2",
    name: "Sadel 2",
    elevation: 264.12,
    normal: 265.0,
    delta: 0.09,
    trend: [263.9, 263.95, 264.0, 264.05, 264.1, 264.1, 264.12],
  },
];

export const latestSeismic = {
  magnitude: 3.4,
  distance: 42,
  depth: 10,
  time: "13 Mei 2026, 04:21 WIB",
  region: "Tenggara Bendungan",
  status: "Aman",
};

export const weatherData = {
  rainfall24h: 8.4,
  temperature: 27.6,
  humidity: 78,
  windKmh: 9,
};

export const overallScore = {
  value: 85.21,
  status: "Sangat Terpelihara",
};

export type InstrumentPoint = {
  id: string;
  x: number; // %
  y: number; // %
  name: string;
  category: string;
  condition: "Baik" | "Perlu Perhatian" | "Rusak";
  description: string;
  image?: string;
};

export const morningGloryPoints: InstrumentPoint[] = [
  {
    id: "mg-vn-01",
    x: 52,
    y: 48,
    name: "V-Notch MG-01",
    category: "V-Notch",
    condition: "Baik",
    description:
      "Pengukur debit rembesan tipe V-notch terpasang di outlet morning glory. Pembacaan rutin harian.",
  },
  {
    id: "mg-pz-02",
    x: 38,
    y: 62,
    name: "Piezometer P-02",
    category: "Piezometer",
    condition: "Baik",
    description:
      "Mengukur tekanan air pori pada tubuh bendungan di sekitar struktur morning glory.",
  },
  {
    id: "mg-3d-03",
    x: 60,
    y: 40,
    name: "3D Joint Meter MG-03",
    category: "Three Dimention Joint",
    condition: "Perlu Perhatian",
    description:
      "Memantau pergerakan tiga dimensi pada sambungan beton morning glory. Tren menunjukkan deformasi minor.",
  },
  {
    id: "mg-ic-04",
    x: 70,
    y: 55,
    name: "Inclinometer IC-04",
    category: "Inclinometer",
    condition: "Baik",
    description: "Memantau kemiringan struktur spillway. Hasil bacaan stabil.",
  },
  {
    id: "mg-hd-05",
    x: 28,
    y: 30,
    name: "Hidroklimatologi HK-05",
    category: "Hidroklimatologi",
    condition: "Baik",
    description: "Stasiun pengukur curah hujan dan suhu di area puncak bendungan.",
  },
];

export const accessGalleryPoints: InstrumentPoint[] = [
  {
    id: "ag-lk-01",
    x: 30,
    y: 70,
    name: "Leakage L-01",
    category: "Leakage",
    condition: "Baik",
    description:
      "Pengukur kebocoran di lantai access gallery. Pembacaan rutin mingguan, dalam batas aman.",
  },
  {
    id: "ag-ep-02",
    x: 50,
    y: 55,
    name: "Electric Piezometer EP-02",
    category: "Electric Piezometer",
    condition: "Baik",
    description: "Piezometer elektrik untuk pemantauan tekanan air pori secara real-time.",
  },
  {
    id: "ag-sp-03",
    x: 65,
    y: 75,
    name: "Seepage S-03",
    category: "Seepage",
    condition: "Perlu Perhatian",
    description:
      "Pengukur rembesan total melalui pondasi. Sedikit peningkatan sejak periode hujan terakhir.",
  },
  {
    id: "ag-ds-04",
    x: 78,
    y: 50,
    name: "Dispositip D-04",
    category: "Dispositip",
    condition: "Baik",
    description: "Pengukur differential settlement antara filter dan core.",
  },
  {
    id: "ag-ow-05",
    x: 18,
    y: 60,
    name: "Observation Well OW-05",
    category: "Observation Well",
    condition: "Baik",
    description: "Sumur pantau muka air tanah di sekitar pondasi gallery.",
  },
];

export const instrumentList = [
  { id: "hidroklimatologi", label: "Hidroklimatologi", unit: "mm", base: 4 },
  { id: "observation-well", label: "Observation Well", unit: "m", base: 12 },
  { id: "piezometer", label: "Piezometer", unit: "kPa", base: 220 },
  { id: "leakage", label: "Leakage", unit: "L/min", base: 6 },
  { id: "electric-piezometer", label: "Electric Piezometer", unit: "kPa", base: 240 },
  { id: "dispositip", label: "Dispositip", unit: "mm", base: 2 },
  { id: "seepage", label: "Seepage", unit: "L/min", base: 18 },
  { id: "v-notch", label: "V-Notch", unit: "L/s", base: 1.4 },
  { id: "3d-joint-mg", label: "3D Joint Morning Glory", unit: "mm", base: 0.6 },
  { id: "3d-joint-ag", label: "3D Joint Access Gallery", unit: "mm", base: 0.5 },
  { id: "rig-magnet", label: "Rig Magnet", unit: "mm", base: 1.2 },
];

export type SeriesPoint = { date: string; value: number };

export function generateSeries(base: number, days = 60, seed = 1): SeriesPoint[] {
  const out: SeriesPoint[] = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const noise = Math.sin((i + seed) * 0.4) * base * 0.08 + (Math.random() - 0.5) * base * 0.05;
    out.push({
      date: d.toISOString().slice(0, 10),
      value: Number((base + noise).toFixed(2)),
    });
  }
  return out;
}
