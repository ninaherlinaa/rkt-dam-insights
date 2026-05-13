# Rencana Pengembangan Dashboard Bendungan RKT 4

## Arsitektur Routing (Hybrid)

```
/                  → Home (panel utama + Morning Glory + Access Gallery, scroll dengan anchor)
/instrumen         → Halaman instrumen (sidebar + grafik)
/evaluasi          → Dashboard evaluasi kinerja (halaman lama saat ini)
```

Top navigation bar global (sticky) di semua halaman:
`Beranda · Morning Glory · Access Gallery · Instrumentasi · Kinerja`
- Morning Glory & Access Gallery = scroll ke anchor di `/`
- Instrumentasi → `/instrumen`
- Kinerja → `/evaluasi`

## 1. Halaman Beranda (`/`)

**Section A — Panel Utama Monitoring**
- Hero ringkas (judul + nama bendungan)
- Kartu TMA 3 waduk (RKT 4 Utama, Sadel 1, Sadel 2) dengan ikon air, nilai elevasi (m), delta vs hari lalu, mini sparkline
- Kartu Rata-rata Skor Evaluasi Kinerja saat ini (link ke /evaluasi)
- Kartu Kondisi Terkini: gempa terakhir (magnitudo, jarak, waktu), curah hujan 24 jam, status pintu
- Strip status cepat: cuaca, debit inflow/outflow

**Section B — Morning Glory (#morning-glory)**
- Peta interaktif (komponen `InstrumentMap`):
  - Gambar dasar morning glory + bendungan (AI-generated)
  - Titik instrumen (dot berwarna per kategori) sebagai overlay absolute (koordinat %)
  - Klik titik → Dialog: nama, tipe, lokasi, kondisi, deskripsi, opsional gambar
  - Kontrol zoom in/out (react-zoom-pan-pinch) + tombol maximize (fullscreen Dialog)
- Penjelasan Morning Glory & bendungan di bawah peta

**Section C — Access Gallery (#access-gallery)**
- Sama dengan B, gambar & titik berbeda
- Penjelasan access gallery

**Section D — CTA dua tombol besar**
- "Lihat Instrumen" → /instrumen
- "Lihat Evaluasi Kinerja" → /evaluasi

## 2. Halaman Instrumen (`/instrumen`)

Layout:
```
┌──────────────┬───────────────────────────────────┐
│ Sidebar 1/4  │  Filter: [Bendungan ▼] [Tanggal] │
│ - Hidroklim. │  ─────────────────────────────── │
│ - Obs Well   │                                   │
│ - Piezo      │            Grafik Garis           │
│ - Leakage    │       (1 instrumen terpilih,      │
│ - El. Piezo  │        time-series mock data)     │
│ - Dispositip │                                   │
│ - Seepage    │                                   │
│ - V-notch    │                                   │
│ - 3D Joint MG│                                   │
│ - 3D Joint AG│                                   │
│ - Rig Magnet │                                   │
└──────────────┴───────────────────────────────────┘
```
- Recharts LineChart, dataset mock per instrumen (60 hari)
- Dropdown bendungan: Utama / Sadel 1 / Sadel 2
- Date picker rentang tanggal (shadcn Calendar)
- Default selection: Hidroklimatologi

## 3. Halaman Evaluasi (`/evaluasi`)

- Pindahkan konten `Index.tsx` saat ini (DashboardHeader, ScoreCards, semua aspect components) ke `pages/Evaluasi.tsx`
- Tambahkan TopNav

## Aset Gambar (AI Generated)

1. `morning-glory-map.jpg` — view atas spillway morning glory + crest bendungan, gaya skema engineering
2. `access-gallery-map.jpg` — penampang/diagram access gallery di dalam tubuh bendungan

## Mock Data

`src/data/mock.ts`:
- `tmaData` — 3 waduk: elevation, normal, sparkline points
- `latestSeismic` — magnitude, distance, time
- `weatherData` — rainfall, temperature
- `instrumentPoints.morningGlory` — array `{id, x%, y%, name, category, condition, description, image?}`
- `instrumentPoints.accessGallery` — sama
- `instrumentSeries` — record per instrumen → array `{date, value}` (60 hari, sinus + noise)

## File Baru
- `src/components/layout/TopNav.tsx`
- `src/components/home/HeroPanel.tsx`
- `src/components/home/TmaCards.tsx`
- `src/components/home/ConditionCards.tsx`
- `src/components/home/InstrumentMap.tsx` (reusable untuk MG & AG)
- `src/components/home/InstrumentMapSection.tsx` (judul + map + deskripsi)
- `src/components/home/CtaButtons.tsx`
- `src/pages/Home.tsx`
- `src/pages/Instrumen.tsx`
- `src/pages/Evaluasi.tsx` (pindahan dari Index)
- `src/data/mock.ts`
- `src/assets/morning-glory-map.jpg`
- `src/assets/access-gallery-map.jpg`

## File Diubah
- `src/App.tsx` — tambah routes /instrumen & /evaluasi, ganti / ke Home
- `src/pages/Index.tsx` — jadi alias Home (atau dihapus, ganti route)

## Dependensi Baru
- `react-zoom-pan-pinch` untuk zoom peta
- `date-fns` (sudah ada via shadcn) untuk date picker

## Catatan Teknis
- Tetap pakai design tokens (semantic colors di index.css), tidak ada warna hardcode
- TopNav sticky dengan blur backdrop
- Smooth scroll untuk anchor links via `scroll-behavior: smooth` di html
- Instrument map fullscreen pakai shadcn Dialog dengan max-w-screen-xl

Mau aku eksekusi rencana ini?