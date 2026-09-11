BEGIN;
INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Bijak Memilih (Platform Riset Politik Warga)', 'Civic-Tech & Data Kebijakan', 'Platform agregasi data rekam jejak partai politik dan kandidat yang diakses jutaan pemilih muda untuk melihat sikap partai terhadap isu iklim, korupsi, dan ketenagakerjaan.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://bijakmemilih.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'abigail-limuria';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Lalita (51 Cerita Perempuan Hebat Indonesia)', 'Karya Tulis & Literasi Gender', 'Buku antologi profil perempuan pelopor Nusantara lintas disiplin dari seni, sains, hingga aktivisme lingkungan hidup.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'abigail-limuria';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'PSHK (Pusat Studi Hukum & Kebijakan Indonesia)', 'Lembaga Riset & Advokasi Reformasi Hukum', 'Think tank independen yang memproduksi analisis kritis rancangan undang-undang dan pengawasan kinerja legislasi parlemen.', 'Riset Independen & Pro-Bono', 'Dukung Inisiatif', 'https://pshk.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'bivitri-susanti';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'STHI Jentera (Sekolah Tinggi Hukum Indonesia)', 'Institusi Pendidikan Hukum Transformatif', 'Kampus hukum alternatif yang mendidik praktisi dan akademisi hukum berintegritas tinggi dengan beasiswa penuh bagi aktivis masyarakat sipil.', 'Program Sarjana & Beasiswa Penuh', 'Dukung Inisiatif', 'https://jentera.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'bivitri-susanti';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Watchdoc Documentary Maker', 'Koperasi Jurnalisme Investigasi Audio-Visual', 'Rumah produksi dokumenter independen yang telah memproduksi lebih dari 200 film investigasi lingkungan, agraria, dan hak asasi manusia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://watchdoc.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'dandhy-dwi-laksono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Dokumenter: Sexy Killers', 'Film Investigasi Oligarki & Energi', 'Investigasi keterkaitan antara tambang batu bara di Kalimantan, PLTU di Pulau Jawa, dan gurita bisnis elit politik nasional.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'dandhy-dwi-laksono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ngaji Filsafat Masjid Jendral Sudirman', 'Forum Literasi Intelektual & Kebijaksanaan Publik', 'Kajian filsafat terbuka gratis yang telah berlangsung lebih dari satu dekade dengan arsip ratusan tema pemikiran dunia.', 'Bebas Biaya (Akses Publik)', 'Dukung Inisiatif', 'https://mjsshow.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'fahruddin-faiz';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Menjadi Manusia, Menata Jiwa', 'Karya Tulis & Filsafat Terapan', 'Buku panduan reflektif yang mengawinkan kebijaksanaan tasawuf dengan pemikiran kritis filsafat dalam menavigasi luka batin dan kegelisahan modern.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'fahruddin-faiz';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'TurnBackHoax.id (Database Klarifikasi Fakta Terbesar)', 'Platform Verifikasi Fakta & Civic-Tech', 'Repositori terbuka verifikasi fakta dengan puluhan ribu arsip klarifikasi hoaks yang menjadi rujukan jurnalis dan aparat penegak hukum.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://turnbackhoax.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'aribowo-sasmito';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'CekFakta.com (Koalisi Cek Fakta Kolaboratif)', 'Kolaborasi Media & Masyarakat Sipil', 'Jaringan pemeriksa fakta kolaboratif lintas redaksi media nasional dan komunitas sipil di bawah naungan AJI, AMSI, dan MAFINDO.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://cekfakta.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'aribowo-sasmito';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Nalar Institute (Think Tank Kebijakan Publik)', 'Riset Kebijakan & Tata Kelola Negara', 'Lembaga riset independen yang mengadvokasi perumusan kebijakan berbasis data saintifik dan transparansi tata kelola publik.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://nalarinstitute.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'yanuar-nugroho';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Inisiatif Satu Data Indonesia', 'Arsitektur Data Nasional', 'Kerangka regulasi dan integrasi basis data tunggal nasional untuk memastikan akurasi penyaluran bantuan sosial dan perencanaan pembangunan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://data.go.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'yanuar-nugroho';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: The Technological State in Indonesia', 'Monograf Sosiologi Teknologi & Sejarah', 'Karya akademik prestisius yang mengupas sejarah rezim teknonasionallisme Indonesia dan dinamika industri strategis bangsa.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://routledge.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'sulfikar-amir';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Simulasi Ketahanan Urban & Pandemi (NTU Lab)', 'Riset Sains Komputasi & Kebencanaan', 'Model komputasi epidemiologis yang memetakan kerentanan pemukiman padat dan sistem transportasi massal di Asia Tenggara.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ntu.edu.sg', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'sulfikar-amir';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Simpul Bahasa Sepak Bola', 'Karya Esai Sosiologi & Sastra Olahraga', 'Kumpulan esai masterclass yang membedah taktik sepak bola dunia melalui lensa filsafat, sejarah perang, dan kebudayaan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'zen-rs';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Jiwa yang Patah (Antologi Esai)', 'Karya Tulis Humaniora & Refleksi', 'Pembedahan mendalam tentang kesepian, luka sejarah bangsa, dan pencarian martabat manusia di tengah modernitas.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'zen-rs';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Malaka Project (Kanal Edukasi Pemikiran Kritis)', 'Media Diskursus Intelektual Independen', 'Platform video esai politik, filsafat, dan ekonomi yang menjadi rujukan perdebatan rasional anak muda Indonesia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://malakaproject.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'cania-citta';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Esai: Batas Wewenang Negara vs Hak Individu', 'Kajian Filsafat Politik & Konstitusi', 'Rangkaian analisis video membedah bahaya overregulasi birokrasi dan pentingnya perlindungan privasi serta kebebasan sipil warga.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'cania-citta';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Rocky Gerung Official (Mimbar Oposisi Akal Sehat)', 'Kanal Pendidikan Filsafat Publik', 'Platform video analisis kritis harian yang membedah isu politik nasional dan internasional lewat kacamata filsafat dan hukum tata negara.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'rocky-gerung';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku & Esai Filsafat Politik Indonesia', 'Karya Akademik & Kritik Demokrasi', 'Kumpulan tulisan akademik tentang hak asasi manusia, kebebasan berekspresi, dan etika lingkungan hidup.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'rocky-gerung';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Yayasan HAkA (Hutan, Alam dan Lingkungan Aceh)', 'Konservasi Hutan Hujan & Advokasi Kebijakan', 'Organisasi nirlaba penjaga Ekosistem Leuser yang mengintegrasikan sains data pemetaan satelit, litigasi hukum tata ruang, dan pemberdayaan komunitas.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://haka.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'farwiza-farhan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Inisiatif Patroli Ranger Perempuan Leuser (Mpu Uteun)', 'Pemberdayaan Perempuan Adat & Satwa Liar', 'Kelompok perempuan penjaga hutan pertama di Aceh yang secara mandiri memetakan ancaman perambahan dan melindungi sumber air desa.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://haka.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'farwiza-farhan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Waste4Change (Sistem Pengelolaan Sampah Holistik)', 'Inovasi Manajemen Limbah & Daur Ulang', 'Platform pengelolaan sampah berbasis teknologi yang melayani ratusan kawasan komersial, perumahan, dan industri dengan standar pemilahan ketat.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://waste4change.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'm-bijaksana-junerosano';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Greeneration Foundation', 'Yayasan Edukasi Perilaku Hijau', 'Organisasi nirlaba penggerak kampanye diet kantong plastik dan edukasi gaya hidup minim sampah di seluruh Indonesia.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://greeneration.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'm-bijaksana-junerosano';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Hutan Beringin Mandiri Bukit Gendol (250+ Hektare)', 'Reboisasi Swadaya & Konservasi Air', 'Hamparan hutan lindung buatan hasil jerih payah tunggal lebih dari 28 tahun menanam 200.000+ pohon beringin yang menghidupkan kembali mata air perdesaan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'mbah-sadiman';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sistem Irigasi Mata Air Sendang Unon', 'Infrastruktur Air Alami Berkelanjutan', 'Jaringan mata air yang mengairi sawah ribuan keluarga petani di Kecamatan Bulukerto tanpa pungutan biaya pompa.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'mbah-sadiman';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Perkumpulan Telapak (Gerakan Kedaulatan Sumber Daya Alam)', 'Advokasi Kehutanan Sosial & Media Investigasi', 'Organisasi masyarakat sipil yang mempelopori kampanye anti-pembalakan liar dan perhutanan sosial berbasis masyarakat adat.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://telapak.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'silverius-oscar-unggul';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Koperasi Hutan Jaya Mandiri (KHJM Konawe Selatan)', 'Koperasi Industri Kayu Lestari Bersertifikat FSC', 'Badan usaha milik ribuan petani lokal yang mengekspor kayu bersertifikat ramah lingkungan ke pasar Eropa dan Amerika Serikat.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://telapak.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'silverius-oscar-unggul';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'ECOTON (Ecological Observation and Wetlands Conservation)', 'Lembaga Riset Sains Lahan Basah & Litigasi Lingkungan', 'Organisasi penjaga sungai terdepan yang memproduksi data kualitas air, mikroplastik, dan litigasi pencemaran limbah B3 industri.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://ecoton.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'prigi-arisandi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ekspedisi Sungai Nusantara (ESN)', 'Sains Warga & Pemetaan Kesehatan Air Nasional', 'Riset keliling sungai di seluruh kepulauan Indonesia menguji kadar kontaminasi partikel mikroplastik pada air minum dan ikan konsumsi.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://ecoton.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'prigi-arisandi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Divers Clean Action (DCA Indonesia)', 'Yayasan Konservasi Laut & Riset Sampah Bahari', 'Organisasi pemuda maritim yang telah membersihkan ratusan ton sampah bawah laut dan melatih kader penjaga laut di pelosok kepulauan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://diverscleanaction.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'swietenia-puspa-lestari';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Indonesia Youth Marine Debris Summit (IYMDS)', 'Konferensi Kepemimpinan Pesisir Generasi Muda', 'Ajang inkubasi tahunan yang melatih ratusan pemuda dari 34 provinsi untuk merancang program solusi sampah di daerah asalnya.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://diverscleanaction.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'swietenia-puspa-lestari';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Evoware Seaweed Packaging (Kemasan Dapat Dimakan)', 'Inovasi Deep-Tech Material Sirkular', 'Kemasan alternatif pembungkus bumbu mi instan, burger, dan kopi yang larut dalam air dan ramah lingkungan.', 'Rp 25.000 - Rp 120.000', 'Dukung Inisiatif', 'https://evoware.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'david-christian';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Evoworld & Gerakan #RethinkPlastic', 'Platform Produk Ramah Lingkungan & Kampanye', 'Ekosistem penyedia sedotan beras, kemasan ramah lingkungan, dan edukasi pengurangan plastik sekali pakai untuk sektor perhotelan dan F&B.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://rethink-plastic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'david-christian';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'CV Majestic Buana Group (Pabrik Daur Ulang Plastik)', 'Manufaktur Sirkular & Pengolahan Biji Plastik', 'Sentra pengolahan sampah plastik skala industri yang mengolah ribuan ton limbah botol PET dan plastik keras setiap bulannya.', 'Rp 18.000 - Rp 85.000 / kg', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'mohammad-baedowy';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Rancang Bangun Mesin Pencacah Plastik Komunal Baedowy', 'Rekayasa Alat Tepat Guna UMKM', 'Inovasi mesin pencacah dan pencuci plastik berdaya tahan tinggi yang diadopsi oleh ratusan bank sampah dan koperasi daerah.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'mohammad-baedowy';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Diskografi Navicula (Album Perlawanan Ekologis)', 'Karya Musik Grunge & Lirik Kritis', 'Koleksi album musik independen berdaya dobrak sosial yang mengampanyekan penyelamatan hutan hujan dan keadilan hukum.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://naviculamusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'i-gede-robi-supriyanto';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Dokumenter Bioskop: Pulau Plastik', 'Film Investigasi Sains Lingkungan', 'Dokumenter layar lebar yang mengungkap anatomi polusi plastik sekali pakai, impor limbah, dan kontaminasi mikroplastik pada tubuh manusia.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://pulauplastik.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'i-gede-robi-supriyanto';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Patroli Udara & Konservasi Rimba Dulan (Yayasan Kalaweit)', 'Pemantauan Satwa Udara & Perlindungan Kanopi', 'Operasi pemantauan deforestasi udara menggunakan paramotor dan perlindungan cagar alam satwa owa di pedalaman Kalimantan Tengah.', 'Rp 150.000 - Rp 450.000 / tiket', 'Dukung Inisiatif', 'https://kalaweit.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'andrew-kalaweit';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal Dokumenter Alam Rimba Andrew Kalaweit', 'Karya Audio-Visual & Pendidikan Konservasi', 'Rangkaian video esai dokumenter kehidupan liar hutan hujan tropis yang telah ditonton puluhan juta kali oleh generasi muda dunia.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'andrew-kalaweit';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'OnnoCenter E-Learning (Kampus Terbuka Teknologi Rakyat)', 'Platform Pendidikan IT Terbuka & Sertifikasi Gratis', 'LMS daring gratis yang menyediakan puluhan modul rekayasa jaringan, cybersecurity, server Linux, dan kecerdasan buatan bagi talenta daerah.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://lms.onnocenter.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'onno-w-purbo';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Antena Wajanbolic & Arsitektur OpenBTS Komunitas', 'Inovasi Hardware Komunikasi Tepat Guna', 'Cetak biru perangkat keras jaringan nirkabel murah berbasis wajan dapur dan software radio terbuka untuk desa terpencil.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://onnocenter.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'onno-w-purbo';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Teknologi ECVT 4D (Electrical Capacitance Volume Tomography)', 'Paten Sains Terapan & Instrumentasi Industri', 'Teknologi pemindaian tomografi volumetrik medan listrik kecepatan tinggi pertama di dunia yang diadopsi NASA dan industri energi internasional.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ctechlabs.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'warsito-p-taruno';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'CTech Labs Edwar Technology', 'Laboratorium Riset Fisika Medis & Industri Mandiri', 'Pusat riset sains terapan di Tangerang yang merancang instrumen tomografi industri dan terapi medis berbasis gelombang listrik kapasitif.', 'Freemium / B2B (Mulai Rp 299.000/bln)', 'Dukung Inisiatif', 'https://ctechlabs.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'warsito-p-taruno';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'KawalPemilu.org (Platform Transparansi Rekapitulasi Suara)', 'Civic Tech & Sains Data Demokrasi', 'Sistem verifikasi data formulir C1 berbasis crowdsourcing independen yang menjadi jangkar kebenaran publik melawan manipulasi suara.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://kawalpemilu.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'ainun-najib';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'KawalCOVID19 (Inisiatif Data & Informasi Pandemi)', 'Kompilasi Data Sains Kesehatan Masyarakat', 'Platform agregasi data independen yang memetakan ketersediaan tempat tidur RS, oksigen, dan verifikasi fakta seputar wabah virus.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://kawalcovid19.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'ainun-najib';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Paten Internasional Dua FFT OFDM (Fondasi Transmisi 4G LTE)', 'Paten Teknologi Telekomunikasi Nirkabel', 'Algoritma komputasi sinyal nirkabel berefisiensi tinggi yang menjadi salah satu standar fundamental konektivitas 4G LTE dan 5G dunia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://adwitech.telkomuniversity.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'khoirul-anwar';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'AdWiTech (Advanced Wireless Technologies Center)', 'Pusat Riset Telekomunikasi Terdepan', 'Laboratorium riset nirkabel di Bandung yang mengembangkan teknologi komunikasi kebencanaan, IoT cerdas, dan radar maritim mandiri.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://adwitech.telkomuniversity.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'khoirul-anwar';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Audit Keamanan Infrastruktur Satelit & Telekomunikasi Global', 'Keamanan Siber Tingkat Tinggi & Ruang Angkasa', 'Layanan uji penetrasi dan audit arsitektur keamanan sistem transmisi satelit dan pusat komputasi awan multinasional.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://geovedi.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'jim-geovedi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Arsitektur Kriptografi & Perlindungan Sistem Finansial', 'Kriptografi & Rekayasa Keamanan Siber', 'Rancang bangun benteng pertahanan siber untuk transaksi perbankan skala masif dan pencegahan kebocoran data nasabah.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://geovedi.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'jim-geovedi';
COMMIT;
