# Panduan Desain Sistem (Design System Guidelines) - Sequrra

Dokumen ini adalah panduan desain sistem (Design System) yang digunakan untuk proses slicing UI (pengembangan frontend) untuk landing page Sequrra. Agen AI (seperti saya) dan pengembang harus mengikuti aturan ini untuk memastikan konsistensi desain.

## 1. Warna (Colors)
Sistem warna menggunakan palet khusus yang dikonfigurasi pada Tailwind CSS. Berikut adalah daftar warna utama yang digunakan berdasarkan desain:

### Primary (Teal/Cyan)
Digunakan untuk elemen utama brand, tombol (buttons), dan status aktif.
- **Warna Utama (500):** `#0988a3` (Warna dominan brand)
- Variasi: `50` hingga `900` (`#e6f3f6` hingga `#043944`)

### Secondary (Orange/Amber)
Digunakan untuk aksen (accent), highlight, dan elemen sekunder yang butuh perhatian.
- **Warna Utama (500):** `#f7941d`
- Variasi: `50` hingga `900` (`#fef4e8` hingga `#683e0c`)

### Neutral (Monokrom/Abu-abu)
Digunakan untuk teks (body, heading), background, dan border.
- **Base/Background:** `#f5f5f5`
- Variasi: `50` hingga `900` (`#fefefe` hingga `#151515`)

### Feedback & Status
Digunakan untuk notifikasi dan status aksi.
- **Success (Hijau):** `300` (#d7ffb8), `500` (#aee286), `700` (#58a700)
- **Warning (Kuning):** `300` (#fff8e4), `500` (#ffd79d), `700` (#ff9600)
- **Error (Merah):** `300` (#ffdfe0), `500` (#ff9696), `700` (#ff4b4b)

*Catatan Implementasi Tailwind:* Pastikan menggunakan class seperti `bg-primary-500` atau `text-neutral-900` sesuai dengan nama variabel CSS (`--color-*`).

## 2. Tipografi (Typography)
Sistem desain ini menggunakan dua keluarga font (font-family) utama:
1. **Inter** (umumnya digunakan untuk body text atau UI bersih)
2. **Plus Jakarta Sans** (umumnya digunakan untuk Heading atau elemen brand)

Pastikan mengonfigurasi `tailwind.config.js` atau `index.css` (Tailwind v4) untuk memiliki `font-inter` dan `font-plus-jakarta`.

### Skala Ukuran Teks (Font Sizes)
Gunakan ukuran berikut untuk konsistensi hierarki teks, dan gunakan class Tailwind (seperti `text-[64px]` atau utilities kustom jika sudah didefinisikan).

#### Headings (H1 - H6)
- **H1:** `64px` (Gunakan untuk hero section)
- **H2:** `48px` (Gunakan untuk judul section utama)
- **H3:** `40px` (Gunakan untuk sub-section)
- **H4:** `32px` (Gunakan untuk judul kartu/card)
- **H5:** `24px`
- **H6:** `20px`

#### Body Text
- **Large:** `20px` (Teks sorotan/intro)
- **Medium:** `18px`
- **Regular:** `16px` (Default / Base body text)
- **Small:** `14px` (Meta data, label kecil)
- **Tiny:** `12px` (Catatan kaki, caption)

### Ketebalan Teks (Font Weights)
Untuk setiap skala (baik Heading maupun Body), kami menggunakan 4 variasi ketebalan:
- **Regular (400):** `font-normal`
- **Medium (500):** `font-medium`
- **SemiBold (600):** `font-semibold`
- **Bold (700):** `font-bold`

## 3. Komponen Utama & Pola Desain (Pattern)
Saat melakukan proses slicing komponen dari gambar yang diberikan:

1. **Hero Section:** Latar belakang (background) utamanya menggunakan warna **Primary** (`bg-primary-500` atau gradasi). Pastikan menggunakan teks berwarna kontras (`text-neutral-50` atau putih).
2. **Card (Kartu):** Banyak menggunakan style card (misalnya untuk fitur "Total Keamanan" dan "Langkah-langkah"). Gunakan background putih atau abu-abu terang dengan sedikit shadow (misal `shadow-sm` atau `shadow-md`), serta pastikan *border-radius* (rounded) proporsional (misal `rounded-xl` atau `rounded-2xl`).
3. **Pill/Badge:** Pada section "Langkah-langkah", terdapat angka di dalam badge kotak dengan ujung tumpul, gunakan background primary atau neutral dengan teks yang kontras.
4. **Button:**
   - **Primary Button:**
     - **Default:** Background `bg-primary-500`, Teks SemiBold 16px (`text-[16px] font-semibold`) dengan warna `text-neutral-50`.
     - **Hover:** Background `bg-primary-600`, Teks SemiBold 16px dengan warna `text-neutral-50`.
     - **Pressed:** Background `bg-primary-700`, Teks SemiBold 16px dengan warna `text-neutral-50`.
   - **Secondary Button:**
     - **Default:** Tanpa background (`bg-transparent`), Border `border border-primary-500`, Teks SemiBold 16px dengan warna `text-primary-500`.
     - **Hover:** Background `bg-primary-50`, Border `border border-primary-500`, Teks SemiBold 16px dengan warna `text-primary-500`.
     - **Pressed:** Background `bg-primary-100`, Border `border border-primary-500`, Teks SemiBold 16px dengan warna `text-primary-500`.

## 4. Instruksi untuk AI (Antigravity)
- Selalu patuhi skala warna dan font ini saat membuat komponen UI. Jangan menebak warna lain di luar palet yang disediakan.
- Bila pengguna meminta "slice bagian hero", gunakan variabel `primary-500` untuk background, dan `font-plus-jakarta` (atau Inter, sesuaikan observasi desain) dengan ukuran text dari sistem (misal H1 64px `text-[64px]`).
- Terapkan pendekatan Mobile-First (responsif), meskipun ukuran yang didefinisikan (seperti H1 64px) adalah untuk desktop. Turunkan ukurannya (misalnya `text-4xl md:text-[64px]`) untuk layar yang lebih kecil.
