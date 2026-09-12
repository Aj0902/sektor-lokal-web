BEGIN;
DELETE FROM initiatives_warga_demo1;
DELETE FROM testimonials_warga_demo1;

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Bijak Memilih (Platform Riset Politik Warga)', 'Civic-Tech & Data Kebijakan', 'Platform agregasi data rekam jejak partai politik dan kandidat yang diakses jutaan pemilih muda untuk melihat sikap partai terhadap isu iklim, korupsi, dan ketenagakerjaan.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://bijakmemilih.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'abigail-limuria';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Lalita (51 Cerita Perempuan Hebat Indonesia)', 'Karya Tulis & Literasi Gender', 'Buku antologi profil perempuan pelopor Nusantara lintas disiplin dari seni, sains, hingga aktivisme lingkungan hidup.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'abigail-limuria';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'PSHK (Pusat Studi Hukum & Kebijakan Indonesia)', 'Lembaga Riset & Advokasi Reformasi Hukum', 'Think tank independen yang memproduksi analisis kritis rancangan undang-undang dan pengawasan kinerja legislasi parlemen.', 'Riset Independen & Pro-Bono', 'Dukung Inisiatif', 'https://pshk.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'bivitri-susanti';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'STHI Jentera (Sekolah Tinggi Hukum Indonesia)', 'Institusi Pendidikan Hukum Transformatif', 'Kampus hukum alternatif yang mendidik praktisi dan akademisi hukum berintegritas tinggi dengan beasiswa penuh bagi aktivis masyarakat sipil.', 'Program Sarjana & Beasiswa Penuh', 'Dukung Inisiatif', 'https://jentera.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'bivitri-susanti';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Watchdoc Documentary Maker', 'Koperasi Jurnalisme Investigasi Audio-Visual', 'Rumah produksi dokumenter independen yang telah memproduksi lebih dari 200 film investigasi lingkungan, agraria, dan hak asasi manusia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://watchdoc.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'dandhy-dwi-laksono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Dokumenter: Sexy Killers', 'Film Investigasi Oligarki & Energi', 'Investigasi keterkaitan antara tambang batu bara di Kalimantan, PLTU di Pulau Jawa, dan gurita bisnis elit politik nasional.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'dandhy-dwi-laksono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ngaji Filsafat Masjid Jendral Sudirman', 'Forum Literasi Intelektual & Kebijaksanaan Publik', 'Kajian filsafat terbuka gratis yang telah berlangsung lebih dari satu dekade dengan arsip ratusan tema pemikiran dunia.', 'Bebas Biaya (Akses Publik)', 'Dukung Inisiatif', 'https://mjsshow.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'fahruddin-faiz';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Menjadi Manusia, Menata Jiwa', 'Karya Tulis & Filsafat Terapan', 'Buku panduan reflektif yang mengawinkan kebijaksanaan tasawuf dengan pemikiran kritis filsafat dalam menavigasi luka batin dan kegelisahan modern.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'fahruddin-faiz';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'TurnBackHoax.id (Database Klarifikasi Fakta Terbesar)', 'Platform Verifikasi Fakta & Civic-Tech', 'Repositori terbuka verifikasi fakta dengan puluhan ribu arsip klarifikasi hoaks yang menjadi rujukan jurnalis dan aparat penegak hukum.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://turnbackhoax.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'aribowo-sasmito';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'CekFakta.com (Koalisi Cek Fakta Kolaboratif)', 'Kolaborasi Media & Masyarakat Sipil', 'Jaringan pemeriksa fakta kolaboratif lintas redaksi media nasional dan komunitas sipil di bawah naungan AJI, AMSI, dan MAFINDO.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://cekfakta.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'aribowo-sasmito';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Nalar Institute (Think Tank Kebijakan Publik)', 'Riset Kebijakan & Tata Kelola Negara', 'Lembaga riset independen yang mengadvokasi perumusan kebijakan berbasis data saintifik dan transparansi tata kelola publik.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://nalarinstitute.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'yanuar-nugroho';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Inisiatif Satu Data Indonesia', 'Arsitektur Data Nasional', 'Kerangka regulasi dan integrasi basis data tunggal nasional untuk memastikan akurasi penyaluran bantuan sosial dan perencanaan pembangunan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://data.go.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'yanuar-nugroho';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: The Technological State in Indonesia', 'Monograf Sosiologi Teknologi & Sejarah', 'Karya akademik prestisius yang mengupas sejarah rezim teknonasionallisme Indonesia dan dinamika industri strategis bangsa.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://routledge.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'sulfikar-amir';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Simulasi Ketahanan Urban & Pandemi (NTU Lab)', 'Riset Sains Komputasi & Kebencanaan', 'Model komputasi epidemiologis yang memetakan kerentanan pemukiman padat dan sistem transportasi massal di Asia Tenggara.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ntu.edu.sg', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'sulfikar-amir';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Simpul Bahasa Sepak Bola', 'Karya Esai Sosiologi & Sastra Olahraga', 'Kumpulan esai masterclass yang membedah taktik sepak bola dunia melalui lensa filsafat, sejarah perang, dan kebudayaan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'zen-rs';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Jiwa yang Patah (Antologi Esai)', 'Karya Tulis Humaniora & Refleksi', 'Pembedahan mendalam tentang kesepian, luka sejarah bangsa, dan pencarian martabat manusia di tengah modernitas.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'zen-rs';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Malaka Project (Kanal Edukasi Pemikiran Kritis)', 'Media Diskursus Intelektual Independen', 'Platform video esai politik, filsafat, dan ekonomi yang menjadi rujukan perdebatan rasional anak muda Indonesia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://malakaproject.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'cania-citta';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Esai: Batas Wewenang Negara vs Hak Individu', 'Kajian Filsafat Politik & Konstitusi', 'Rangkaian analisis video membedah bahaya overregulasi birokrasi dan pentingnya perlindungan privasi serta kebebasan sipil warga.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'cania-citta';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Rocky Gerung Official (Mimbar Oposisi Akal Sehat)', 'Kanal Pendidikan Filsafat Publik', 'Platform video analisis kritis harian yang membedah isu politik nasional dan internasional lewat kacamata filsafat dan hukum tata negara.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'rocky-gerung';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku & Esai Filsafat Politik Indonesia', 'Karya Akademik & Kritik Demokrasi', 'Kumpulan tulisan akademik tentang hak asasi manusia, kebebasan berekspresi, dan etika lingkungan hidup.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'rocky-gerung';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Yayasan HAkA (Hutan, Alam dan Lingkungan Aceh)', 'Konservasi Hutan Hujan & Advokasi Kebijakan', 'Organisasi nirlaba penjaga Ekosistem Leuser yang mengintegrasikan sains data pemetaan satelit, litigasi hukum tata ruang, dan pemberdayaan komunitas.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://haka.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'farwiza-farhan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Inisiatif Patroli Ranger Perempuan Leuser (Mpu Uteun)', 'Pemberdayaan Perempuan Adat & Satwa Liar', 'Kelompok perempuan penjaga hutan pertama di Aceh yang secara mandiri memetakan ancaman perambahan dan melindungi sumber air desa.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://haka.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'farwiza-farhan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Waste4Change (Sistem Pengelolaan Sampah Holistik)', 'Inovasi Manajemen Limbah & Daur Ulang', 'Platform pengelolaan sampah berbasis teknologi yang melayani ratusan kawasan komersial, perumahan, dan industri dengan standar pemilahan ketat.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://waste4change.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'm-bijaksana-junerosano';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Greeneration Foundation', 'Yayasan Edukasi Perilaku Hijau', 'Organisasi nirlaba penggerak kampanye diet kantong plastik dan edukasi gaya hidup minim sampah di seluruh Indonesia.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://greeneration.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'm-bijaksana-junerosano';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Hutan Beringin Mandiri Bukit Gendol (250+ Hektare)', 'Reboisasi Swadaya & Konservasi Air', 'Hamparan hutan lindung buatan hasil jerih payah tunggal lebih dari 28 tahun menanam 200.000+ pohon beringin yang menghidupkan kembali mata air perdesaan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'mbah-sadiman';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sistem Irigasi Mata Air Sendang Unon', 'Infrastruktur Air Alami Berkelanjutan', 'Jaringan mata air yang mengairi sawah ribuan keluarga petani di Kecamatan Bulukerto tanpa pungutan biaya pompa.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'mbah-sadiman';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Perkumpulan Telapak (Gerakan Kedaulatan Sumber Daya Alam)', 'Advokasi Kehutanan Sosial & Media Investigasi', 'Organisasi masyarakat sipil yang mempelopori kampanye anti-pembalakan liar dan perhutanan sosial berbasis masyarakat adat.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://telapak.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'silverius-oscar-unggul';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Koperasi Hutan Jaya Mandiri (KHJM Konawe Selatan)', 'Koperasi Industri Kayu Lestari Bersertifikat FSC', 'Badan usaha milik ribuan petani lokal yang mengekspor kayu bersertifikat ramah lingkungan ke pasar Eropa dan Amerika Serikat.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://telapak.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'silverius-oscar-unggul';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'ECOTON (Ecological Observation and Wetlands Conservation)', 'Lembaga Riset Sains Lahan Basah & Litigasi Lingkungan', 'Organisasi penjaga sungai terdepan yang memproduksi data kualitas air, mikroplastik, dan litigasi pencemaran limbah B3 industri.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://ecoton.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'prigi-arisandi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ekspedisi Sungai Nusantara (ESN)', 'Sains Warga & Pemetaan Kesehatan Air Nasional', 'Riset keliling sungai di seluruh kepulauan Indonesia menguji kadar kontaminasi partikel mikroplastik pada air minum dan ikan konsumsi.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://ecoton.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'prigi-arisandi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Divers Clean Action (DCA Indonesia)', 'Yayasan Konservasi Laut & Riset Sampah Bahari', 'Organisasi pemuda maritim yang telah membersihkan ratusan ton sampah bawah laut dan melatih kader penjaga laut di pelosok kepulauan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://diverscleanaction.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'swietenia-puspa-lestari';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Indonesia Youth Marine Debris Summit (IYMDS)', 'Konferensi Kepemimpinan Pesisir Generasi Muda', 'Ajang inkubasi tahunan yang melatih ratusan pemuda dari 34 provinsi untuk merancang program solusi sampah di daerah asalnya.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://diverscleanaction.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'swietenia-puspa-lestari';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Evoware Seaweed Packaging (Kemasan Dapat Dimakan)', 'Inovasi Deep-Tech Material Sirkular', 'Kemasan alternatif pembungkus bumbu mi instan, burger, dan kopi yang larut dalam air dan ramah lingkungan.', 'Rp 25.000 - Rp 120.000', 'Dukung Inisiatif', 'https://evoware.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'david-christian';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Evoworld & Gerakan #RethinkPlastic', 'Platform Produk Ramah Lingkungan & Kampanye', 'Ekosistem penyedia sedotan beras, kemasan ramah lingkungan, dan edukasi pengurangan plastik sekali pakai untuk sektor perhotelan dan F&B.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://rethink-plastic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'david-christian';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'CV Majestic Buana Group (Pabrik Daur Ulang Plastik)', 'Manufaktur Sirkular & Pengolahan Biji Plastik', 'Sentra pengolahan sampah plastik skala industri yang mengolah ribuan ton limbah botol PET dan plastik keras setiap bulannya.', 'Rp 18.000 - Rp 85.000 / kg', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'mohammad-baedowy';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Rancang Bangun Mesin Pencacah Plastik Komunal Baedowy', 'Rekayasa Alat Tepat Guna UMKM', 'Inovasi mesin pencacah dan pencuci plastik berdaya tahan tinggi yang diadopsi oleh ratusan bank sampah dan koperasi daerah.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'mohammad-baedowy';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Diskografi Navicula (Album Perlawanan Ekologis)', 'Karya Musik Grunge & Lirik Kritis', 'Koleksi album musik independen berdaya dobrak sosial yang mengampanyekan penyelamatan hutan hujan dan keadilan hukum.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://naviculamusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'i-gede-robi-supriyanto';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Dokumenter Bioskop: Pulau Plastik', 'Film Investigasi Sains Lingkungan', 'Dokumenter layar lebar yang mengungkap anatomi polusi plastik sekali pakai, impor limbah, dan kontaminasi mikroplastik pada tubuh manusia.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://pulauplastik.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'i-gede-robi-supriyanto';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Patroli Udara & Konservasi Rimba Dulan (Yayasan Kalaweit)', 'Pemantauan Satwa Udara & Perlindungan Kanopi', 'Operasi pemantauan deforestasi udara menggunakan paramotor dan perlindungan cagar alam satwa owa di pedalaman Kalimantan Tengah.', 'Rp 150.000 - Rp 450.000 / tiket', 'Dukung Inisiatif', 'https://kalaweit.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'andrew-kalaweit';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal Dokumenter Alam Rimba Andrew Kalaweit', 'Karya Audio-Visual & Pendidikan Konservasi', 'Rangkaian video esai dokumenter kehidupan liar hutan hujan tropis yang telah ditonton puluhan juta kali oleh generasi muda dunia.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'andrew-kalaweit';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'OnnoCenter E-Learning (Kampus Terbuka Teknologi Rakyat)', 'Platform Pendidikan IT Terbuka & Sertifikasi Gratis', 'LMS daring gratis yang menyediakan puluhan modul rekayasa jaringan, cybersecurity, server Linux, dan kecerdasan buatan bagi talenta daerah.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://lms.onnocenter.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'onno-w-purbo';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Antena Wajanbolic & Arsitektur OpenBTS Komunitas', 'Inovasi Hardware Komunikasi Tepat Guna', 'Cetak biru perangkat keras jaringan nirkabel murah berbasis wajan dapur dan software radio terbuka untuk desa terpencil.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://onnocenter.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'onno-w-purbo';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Teknologi ECVT 4D (Electrical Capacitance Volume Tomography)', 'Paten Sains Terapan & Instrumentasi Industri', 'Teknologi pemindaian tomografi volumetrik medan listrik kecepatan tinggi pertama di dunia yang diadopsi NASA dan industri energi internasional.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ctechlabs.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'warsito-p-taruno';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'CTech Labs Edwar Technology', 'Laboratorium Riset Fisika Medis & Industri Mandiri', 'Pusat riset sains terapan di Tangerang yang merancang instrumen tomografi industri dan terapi medis berbasis gelombang listrik kapasitif.', 'Freemium / B2B (Mulai Rp 299.000/bln)', 'Dukung Inisiatif', 'https://ctechlabs.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'warsito-p-taruno';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'KawalPemilu.org (Platform Transparansi Rekapitulasi Suara)', 'Civic Tech & Sains Data Demokrasi', 'Sistem verifikasi data formulir C1 berbasis crowdsourcing independen yang menjadi jangkar kebenaran publik melawan manipulasi suara.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://kawalpemilu.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'ainun-najib';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'KawalCOVID19 (Inisiatif Data & Informasi Pandemi)', 'Kompilasi Data Sains Kesehatan Masyarakat', 'Platform agregasi data independen yang memetakan ketersediaan tempat tidur RS, oksigen, dan verifikasi fakta seputar wabah virus.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://kawalcovid19.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'ainun-najib';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Paten Internasional Dua FFT OFDM (Fondasi Transmisi 4G LTE)', 'Paten Teknologi Telekomunikasi Nirkabel', 'Algoritma komputasi sinyal nirkabel berefisiensi tinggi yang menjadi salah satu standar fundamental konektivitas 4G LTE dan 5G dunia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://adwitech.telkomuniversity.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'khoirul-anwar';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'AdWiTech (Advanced Wireless Technologies Center)', 'Pusat Riset Telekomunikasi Terdepan', 'Laboratorium riset nirkabel di Bandung yang mengembangkan teknologi komunikasi kebencanaan, IoT cerdas, dan radar maritim mandiri.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://adwitech.telkomuniversity.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'khoirul-anwar';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Audit Keamanan Infrastruktur Satelit & Telekomunikasi Global', 'Keamanan Siber Tingkat Tinggi & Ruang Angkasa', 'Layanan uji penetrasi dan audit arsitektur keamanan sistem transmisi satelit dan pusat komputasi awan multinasional.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://geovedi.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'jim-geovedi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Arsitektur Kriptografi & Perlindungan Sistem Finansial', 'Kriptografi & Rekayasa Keamanan Siber', 'Rancang bangun benteng pertahanan siber untuk transaksi perbankan skala masif dan pencegahan kebocoran data nasabah.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://geovedi.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'jim-geovedi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Prosa.ai (Deep-Tech AI NLP & Voice Engine)', 'Kecerdasan Buatan & Pemrosesan Bahasa Alami', 'Platform AI percakapan dan sintesis suara berbahasa Indonesia berakurasi tinggi yang digunakan oleh sektor perbankan dan layanan publik.', 'Freemium / B2B (Mulai Rp 299.000/bln)', 'Dukung Inisiatif', 'https://prosa.ai', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'ayu-purwarianti';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Korpus Data NLP Bahasa Daerah Nusantara (Pusat AI ITB)', 'Dataset Sains Komputasi Linguistik', 'Basis data terbuka korpus digital bahasa Jawa, Sunda, Minang, dan puluhan bahasa daerah untuk melatih mesin AI masa depan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ai.itb.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'ayu-purwarianti';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kata.ai Conversational Platform (Mesin NLU Bahasa Gaul)', 'Platform B2B Conversational AI Enterprise', 'Infrastruktur pemrosesan jutaan pesan percakapan harian dengan akurasi pemahaman dialek informal Indonesia tertinggi.', 'Freemium / B2B (Mulai Rp 299.000/bln)', 'Dukung Inisiatif', 'https://kata.ai', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'irzan-raditya';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kata Omnichat & Asisten Cerdas UMKM', 'Software SaaS Otomasi Layanan Pelanggan', 'Platform perpesanan terpadu berbasis AI yang membantu pengusaha kecil mengelola ribuan pesanan WhatsApp secara otomatis.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://kata.ai', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'irzan-raditya';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'IlmuKomputer.com (Portal Open Knowledge IT Pertama)', 'Repositori Pendidikan Komputasi Terbuka', 'Situs edukasi teknologi informasi gratis legendaris yang telah melatih jutaan talenta pemrograman dan rekayasa jaringan Indonesia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ilmukomputer.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'romi-satria-wahono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Brainmatics (Pusat Pelatihan & Sertifikasi IT Profesional)', 'Institusi Pengembangan Talenta Perangkat Lunak', 'Lembaga pelatihan standar industri untuk software architecture, database management, dan machine learning bersertifikasi resmi.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://brainmatics.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'romi-satria-wahono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sistem Eye-Tracking Diagnostik Pasien Gangguan Saraf (UGM Lab)', 'Rekayasa Biomedis & Antarmuka Manusia-Komputer', 'Alat pemantau pergerakan pupil mata berkecepatan tinggi untuk mendeteksi disfungsi neurologis dan rehabilitasi stroke secara presisi.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sunu.staff.ugm.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'sunu-wibirama';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sistem Deteksi Kelelahan Pengemudi Berbasis AI Visual', 'Teknologi Keselamatan Transportasi Cerdas', 'Sensor kamera cerdas yang membaca pola kedipan mata dan posisi kepala pengemudi bus/truk untuk mencegah kecelakaan di jalan tol.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ugm.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'sunu-wibirama';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Metode GASING (Gampang, Asyik, dan Menyenangkan)', 'Metodologi Pengajaran Matematika & Sains Revolusioner', 'Pendekatan pembelajaran berhitung tanpa rumus mati berbasis logika visual dan eksplorasi konkret yang mempercepat penguasaan matematika dasar.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://suryainstitute.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'yohanes-surya';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'TOFI (Tim Olimpiade Fisika Indonesia)', 'Program Pembinaan Talenta Sains Unggul Dunia', 'Kawah candradimuka pembinaan fisika intensif yang telah menyumbangkan lebih dari 100 medali emas internasional bagi Republik Indonesia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://suryainstitute.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'yohanes-surya';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'AMAN (Aliansi Masyarakat Adat Nusantara)', 'Organisasi Gerakan Hak Asasi & Kedaulatan Wilayah Adat', 'Gerakan masyarakat sipil adat terbesar di dunia yang mengadvokasi pengakuan hukum, perlindungan hutan ulayat, dan sekolah adat.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://aman.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'rukka-sombolinggi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Badan Registrasi Wilayah Adat (BRWA)', 'Sistem Informasi Geografis & Pemetaan Partisipatif', 'Lembaga pemetaan wilayah adat berbasis data spasial dan sosial mandiri yang telah mendaftarkan belasan juta hektare tanah leluhur.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://brwa.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'rukka-sombolinggi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Rumah Sakit Apung (RSA) doctorSHARE', 'Inovasi Fasilitas Medis Maritim Swadaya', 'Armada kapal bedah terapung berstandar medis internasional yang berlayar ke pulau-pulau 3T melayani operasi bedah mayor dan persalinan gratis.', 'Donasi Medis (Mulai Rp 25.000)', 'Dukung Inisiatif', 'https://doctorshare.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'dr-lie-dharmawan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Dokter Terbang (Flying Doctors Indonesia)', 'Layanan Darurat Medis Daerah Terisolir', 'Tim dokter spesialis relawan yang diterbangkan menggunakan pesawat perintis ke lembah-lembah terpencil Papua dan pelosok Kalimantan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://doctorshare.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'dr-lie-dharmawan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Koperasi Tenun Pewarna Alami Suku Mollo', 'Ekonomi Adat Berkelanjutan & Kriya Tradisional', 'Unit usaha mandiri ratusan perempuan penenun NTT yang menggunakan tanaman pewarna alami tanpa merusak kelestarian hutan.', 'Rp 450.000 - Rp 2.250.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'mama-aleta-baun';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kawasan Lindung Adat Pegunungan Mutis', 'Konservasi Tanah Ulayat & Mata Air Alami', 'Wilayah hutan suaka adat yang diselamatkan dari tambang marmer, kini menjadi sumber air abadi bagi ribuan keluarga petani di pulau Timor.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'mama-aleta-baun';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'JMPPK (Jaringan Masyarakat Peduli Pegunungan Kendeng)', 'Gerakan Perlindungan Ekosistem Karst & Hak Tani', 'Koalisi petani akar rumput yang memperjuangkan perlindungan tandon air alami Pegunungan Kendeng dari kerusakan tambang.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://jmppkkendeng.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'gunretno';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Praktik Tani Organik Sedulur Sikep Sukolilo', 'Kedaulatan Pangan Alami & Tanpa Utang Kimia', 'Model pertanian padi organik mandiri yang tidak bergantung pada benih hibrida industri dan pupuk kimia sintetis.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'gunretno';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Institut Mosintuwu (Pusat Rekonsiliasi & Kedaulatan Desa)', 'Lembaga Bina Perdamaian & Hak Asasi Perempuan', 'Organisasi akar rumput terdepan di Sulawesi Tengah yang melatih ribuan perempuan desa dalam advokasi anggaran, kesehatan reproduksi, dan perdamaian.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://mosintuwu.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'lian-gogali';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sekolah Perempuan & Sekolah Toleransi Poso', 'Pendidikan Kritis Warga Pascakonflik', 'Kurikulum pendidikan emansipatoris lintas iman yang memulihkan trauma komunal dan membangun solidaritas ekonomi bersama.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://mosintuwu.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'lian-gogali';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'FRAS Sulteng (Front Rakyat Advokasi Sawit)', 'Serikat Pembela Hak Petani & Keadilan Agraria', 'Organisasi advokasi lapangan yang mendampingi komunitas petani gurem melawan perampasan tanah dan intimidasi perusahaan perkebunan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'eva-susanti-bande';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Koperasi Tani Mandiri Berbasis Pangan Polikultur', 'Kedaulatan Pertanian Rakyat', 'Inisiatif pemulihan tanah bekas konsesi sawit menjadi kebun pangan polikultur (kakao, jagung, rempah) milik keluarga tani.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'eva-susanti-bande';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Armada Ambulans Motor Desa Flores Timur (YKS)', 'Inovasi Transportasi Medis Tepat Guna', 'Armada sepeda motor modifikasi khusus yang menembus jalan setapak hutan dan pegunungan terjal untuk evakuasi darurat ibu melahirkan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'mansetus-balawala';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Skema Asuransi Mikro Gotong Royong Kesehatan', 'Fintech Sosial Komunal Berbasis Iuran Sukarela', 'Tabungan kesehatan komunitas yang dikelola bersama warga desa untuk mendanai biaya operasional bensin motor ambulans dan obat-obatan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'mansetus-balawala';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Aksi Kamisan (Gerakan Payung Hitam Menolak Lupa)', 'Gerakan Moral Hak Asasi Manusia & Melawan Impunitas', 'Aksi diam damai setiap Kamis sore di seberang Istana Presiden yang telah berlangsung selama belasan tahun menuntut pengadilan HAM ad hoc.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://aksikamisan.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'maria-catarina-sumarsih';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'JSKK (Jaringan Solidaritas Korban untuk Keadilan)', 'Koalisi Keluarga Korban Pelanggaran HAM Berat', 'Wadah persaudaraan keluarga korban kejahatan kemanusiaan masa lalu yang saling menguatkan dalam merawat ingatan kolektif bangsa.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://kontras.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'maria-catarina-sumarsih';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Food Bank of Indonesia (Jejaring Food Rescue Nasional)', 'Logistik Kemanusiaan & Penyelamatan Makanan', 'Organisasi penyelamat makanan berlebih industri yang telah menyalurkan jutaan porsi makanan bergizi ke balita dan lansia prasejahtera.', 'Paket Donasi Pangan Rp 50.000', 'Dukung Inisiatif', 'https://foodbankindonesia.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'hendro-utomo';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Sayap dari Sayap (Nutrisi PAUD & Posyandu)', 'Intervensi Gizi Dini Anak Negeri', 'Penyediaan sarapan bergizi harian bagi puluhan ribu anak-anak usia dini di sekolah-sekolah rakyat pelosok kampung.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://foodbankindonesia.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'hendro-utomo';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sokola Institute (Sekolah Literasi Kontekstual Adat)', 'Pendidikan Emansipatoris & Hak Masyarakat Adat', 'Lembaga pendidikan alternatif nirlaba yang menyediakan akses literasi baca-tulis-hitung kontekstual bagi suku-suku pedalaman nusantara.', 'Bebas Biaya / Donasi Swadaya', 'Dukung Inisiatif', 'https://sokola.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'butet-manurung';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Sokola Rimba (Pengalaman Belajar Bersama Orang Rimba)', 'Karya Literatur Antropologi & Pendidikan', 'Buku catatan etnografis mendalam tentang dinamika perjumpaan budaya, kearifan rimba, dan perjuangan hak tanah Orang Rimba.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'butet-manurung';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spedagi Bamboo Bicycle (Sepeda Bambu Lestari)', 'Desain Industri Kriya Mobilitas Hijau', 'Sepeda bambu berstandar internasional yang mengintegrasikan kekuatan serat bambu lokal Temanggung dengan estetika desain modern.', 'Rp 7.500.000 - Rp 14.500.000', 'Dukung Inisiatif', 'https://spedagi.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'singgih-susilo-kartono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pasar Papringan Temanggung', 'Rekayasa Sosial & Pasar Tradisional Bebas Plastik', 'Destinasi ekonomi komunal dua mingguan di tengah kebun bambu yang memberdayakan ratusan ibu-ibu desa menggunakan mata uang koin bambu.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://pasarpapringan.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'singgih-susilo-kartono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'JAVARA Indigenous Indonesia (Pangan Pusaka Nusantara)', 'Agribisnis Pangan Organik & Ekspor Heritage', 'Kurasi produk pangan alami terbesar di Indonesia yang memasok beras pusaka, garam artisanal, dan rempah liar ke pasar dunia.', 'Rp 35.000 - Rp 165.000 / pack', 'Dukung Inisiatif', 'https://javara.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'helianti-hilman';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Javara Academy & Sekolah Wirausaha Pangan Desa', 'Pendidikan Vokasi Agribisnis & Pelestarian Benih', 'Inkubator bisnis yang melatih ribuan keluarga petani mengadopsi standar sertifikasi organik internasional dan pengolahan pangan.', 'Rp 35.000 - Rp 165.000 / pack', 'Dukung Inisiatif', 'https://javara.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'helianti-hilman';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Du''Anyam (Wirausaha Sosial Kriya Daun Lontar)', 'Wirausaha Sosial & Kriya Anyaman Inklusif', 'Brand kriya sosial yang memasok produk anyaman berkualitas tinggi untuk sektor hospitality global dan suvenir korporasi.', 'Rp 120.000 - Rp 650.000', 'Dukung Inisiatif', 'https://duanyam.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'azalea-ayuningtyas';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Intervensi Gizi & Kesehatan Ibu Hamil NTT', 'Kesehatan Masyarakat & Penanganan Stunting', 'Program pemberian paket nutrisi protein dan pendampingan posyandu bagi keluarga penganyam di desa terpencil Flores.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://duanyam.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'azalea-ayuningtyas';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pipiltin Cocoa (Cokelat Artisan Bean-to-Bar Nusantara)', 'Manufaktur Cokelat Premium Single Origin', 'Lini produk cokelat murni berbahan 100% kakao lokal tanpa lemak nabati sawit yang mengangkat kekayaan profil tanah kepulauan Indonesia.', 'Rp 45.000 - Rp 135.000 / bar', 'Dukung Inisiatif', 'https://pipiltincocoa.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'tissa-aunilla';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Kemitraan Fermentasi Petani Kakao Daerah', 'Pemberdayaan Rantai Pasok Petani Kakao', 'Pelatihan standardisasi fermentasi dan pembelian langsung biji kakao dari petani di Aceh, Flores, Bali, dan Papua dengan harga premium.', 'Rp 45.000 - Rp 135.000 / bar', 'Dukung Inisiatif', 'https://pipiltincocoa.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'tissa-aunilla';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Brodo Footwear (Brand Sepatu Kulit & Sneakers Lokal)', 'Manufaktur Alas Kaki Kontemporer & Direct-to-Consumer', 'Lini produk sepatu kulit formal, boots, dan sneakers pria dengan standar uji mutu industri yang diproduksi oleh sentra pengrajin lokal Jawa Barat.', 'Rp 375.000 - Rp 899.000', 'Dukung Inisiatif', 'https://bro.do', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'yukka-harsono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ekosistem Mitra Pengrajin Kulit Cibaduyut Brodo', 'Pemberdayaan Sentra Manufaktur Tradisional', 'Program standardisasi jahit sol, pola presisi, dan transfer teknologi mesin potong kulit bagi puluhan bengkel pengrajin lokal.', 'Rp 375.000 - Rp 899.000', 'Dukung Inisiatif', 'https://bro.do', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'yukka-harsono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Batik Kultur by Dea Valencia', 'Fesyen Wastra Kontemporer & Butik Inklusif', 'Brand busana batik ready-to-wear premium yang memadukan kain batik tulis/cap tradisional dengan siluet modern untuk pasar global.', 'Rp 450.000 - Rp 2.250.000', 'Dukung Inisiatif', 'https://batikkultur.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'dea-valencia';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Workshop Inklusif Pemberdayaan Difabel Semarang', 'Fasilitas Manufaktur Ramah Disabilitas', 'Sentra produksi garmen yang dirancang ergonomis untuk mempekerjakan puluhan penjahit dan pembuat pola penyandang disabilitas secara setara.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://batikkultur.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'dea-valencia';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Hirka Footwear (Sepatu Kulit Eksotis Ceker Ayam)', 'Inovasi Manufaktur Material Sirkular & Fesyen Mewah', 'Koleksi sepatu kulit premium berbahan baku limbah ceker ayam dengan pola sisik alami unik yang diproduksi secara handmade di Bandung.', 'Rp 1.450.000 - Rp 3.200.000', 'Dukung Inisiatif', 'https://hirka.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'nurman-farieka-ramdhany';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Formula Penyamakan Kulit Unggas Ramah Lingkungan', 'Rekayasa Kimia Kulit Tepat Guna', 'Metode pemrosesan penyamakan kulit ceker ayam tanpa bahan kimia berbahaya kromium yang aman bagi lingkungan dan perajin.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://hirka.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'nurman-farieka-ramdhany';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Rumah Mocaf Indonesia (Tepung Singkong Bebas Gluten)', 'Agroindustri Pangan Lokal & Hilirisasi Pertanian', 'Produsen tepung singkong fermentasi organik pengganti terigu gandum bersertifikat bebas gluten yang memasok industri roti dan kue global.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://rumahmocaf.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'riza-azyumarridha-azra';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Mocafine & Lini Pangan Olahan Gluten-Free', 'Produk Konsumen Sehat Berbasis Singkong', 'Produk turunan tepung Mocaf berupa mi sehat non-gandum, tepung bumbu krispi, dan kue kering untuk gaya hidup sehat dan penderita autisme.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://rumahmocaf.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'riza-azyumarridha-azra';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Foodizz (Akademi Bisnis Kuliner Digital)', 'EduTech Wirausaha F&B & Inkubator Bisnis', 'Platform pembelajaran digital komprehensif yang melatih ratusan ribu pengusaha kuliner dalam tata kelola operasional, HPP, dan scaling-up.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://foodizz.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'stefanie-kurniadi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku Panduan: 10 Langkah Membangun Bisnis Kuliner yang Berkelanjutan', 'Buku Bisnis Terapan & Manajemen F&B', 'Karya literatur praktis membedah cara menghitung Food Cost, standardisasi resep, dan manajemen kas restoran.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://foodizz.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'stefanie-kurniadi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Asgar Muda Foundation (Inkubator Wirausaha Pemuda Garut)', 'Pemberdayaan Pemuda Perdesaan & Inkubasi Bisnis', 'Yayasan sosial yang telah mencetak ribuan wirausahawan muda di Jawa Barat berbasis potensi agribisnis dan kriya lokal.', 'Rp 150.000 - Rp 1.200.000', 'Dukung Inisiatif', 'https://asgarmuda.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'goris-mustaqim';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sentra Kerajinan Kulit Sukaregang Berdaya', 'Modernisasi Kriya Tradisional Daerah', 'Program peningkatan standar desain dan akses pemasaran digital bagi puluhan bengkel perajin jaket dan tas kulit di Garut.', 'Rp 150.000 - Rp 1.200.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'goris-mustaqim';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Diskografi Efek Rumah Kaca (Album Perlawanan & Kontemplasi)', 'Karya Musik Indie & Lirik Kritis Sosial', 'Album-album mahakarya musik Indonesia (Efek Rumah Kaca, Kamar Gelap, Sinestesia, Rimpang) yang memotret realitas politik dan luka kemanusiaan.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://efekrumahkaca.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'cholil-mahmud';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pandai Besi & Eksplorasi Musik Akustik Kamar', 'Kolektif Musik Orkestrasi Eksperimental', 'Proyek musikal yang merekonstruksi lagu-lagu ERK dalam aransemen megah bernuansa teatrikal yang didanai secara crowdfunding publik.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://efekrumahkaca.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'cholil-mahmud';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Mantra Mantra (Karya Musik Terapi Mental)', 'Karya Musik Psikologi Terapan & Pop Eksperimental', 'Album konsep pemulihan batin yang mengintegrasikan frekuensi audio relaksasi untuk meredakan kecemasan dan serangan panik.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'kunto-aji';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Pengantar Purwakala (Siklus Pendewasaan Diri)', 'Eksplorasi Musik Kontemplatif & Pertumbuhan Batin', 'Lanjutan perjalanan refleksi tentang menerima kehilangan, merawat harapan baru, dan menua dengan penuh kesadaran.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'kunto-aji';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: MARKERS AND SUCH PENS FLASHDISKS', 'Karya Musik Pop Puitis & Narasi Kehidupan', 'Album yang merayakan kehangatan hubungan sehari-hari, peran menjadi ayah, dan rekonsiliasi rindu kepada mereka yang telah tiada.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'sal-priadi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Berhati (Eksplorasi Cinta Teatrikal)', 'Musik Romantisisme Gelap & Sastra Audio', 'Kumpulan lagu puitis bertema cinta, kepasrahan batin, dan keintiman hubungan manusia dengan aransemen orkestrasi megah.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'sal-priadi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album Hindia: Menari dengan Bayangan', 'Karya Musik Pop Alternatif & Kesehatan Mental', 'Album konsep fenomenal yang merangkum kegelisahan anak muda dalam menavigasi karir, asmara, dan luka masa kecil.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'baskara-putra';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album Hindia: Lagipula Hidup Akan Berakhir', 'Karya Musik Eksistensial & Kritik Zaman', 'Album ganda 28 trek yang membedah krisis iklim, kapitalisme modern, inflasi harga rumah, dan masa depan generasi muda.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'baskara-putra';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Selamat Ulang Tahun (Karya Mahakarya Pendewasaan)', 'Karya Musik Folk Akustik & Narasi Keluarga', 'Album konsep yang mendokumentasikan rasa terima kasih kepada keluarga dan ketakutan menyongsong usia dewasa.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'nadin-amizah';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Untuk Dunia, Cinta, dan Kotornya', 'Musik Folk Teatrikal & Penerimaan Diri', 'Eksplorasi emosi tentang mencintai seseorang secara utuh bersama segala trauma dan ketidaksempurnaannya.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'nadin-amizah';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Tidak Ada New York Hari Ini (Kumpulan Puisi)', 'Karya Sastra Puisi & Fotografi', 'Antologi puisi kesunyian perkotaan yang fenomenal dengan terjemahan multibahasa dan ilustrasi fotografi analog.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'm-aan-mansyur';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Melihat Api Bekerja', 'Karya Sastra Puisi & Ilustrasi', 'Kumpulan puisi pemenang Kusala Sastra Khatulistiwa yang membedah cinta, ingatan kehilangan, dan rasa sakit secara visual puitis.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'm-aan-mansyur';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Bioskop: Yuni (Platform Prize TIFF)', 'Karya Sinema Realisme Sosial & Pendidikan Remaja', 'Film yang membedah dilema pernikahan dini, impian pendidikan tinggi perempuan muda, dan dogma keagamaan sempit di Banten.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://fourcoloursfilms.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'kamila-andini';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Bioskop: Nana (Before, Now & Then)', 'Sinema Sejarah Puitis & Trauma Masa Lalu', 'Drama sejarah berbahasa Sunda tentang ketabahan perempuan korban pergolakan politik 1960-an yang meraih Silver Bear di Berlinale.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://fourcoloursfilms.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'kamila-andini';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Nanti Kita Cerita Tentang Hari Ini (NKCTHI)', 'Karya Literatur Visual & Refleksi Batin', 'Buku panduan emosional keluarga dan pendewasaan diri yang menjadi rujukan anak muda dalam menavigasi duka dan harapan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'marchella-fp';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Kamu Terlalu Banyak Bercanda (KTBB)', 'Karya Tulis Eksplorasi Sisi Gelap & Emosi Manusia', 'Kumpulan surat batin yang membedah rasa marah, kecewa, dan ketakutan yang sering kali dipaksa disembunyikan di balik senyuman.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'marchella-fp';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Novel: Cantik Itu Luka (Beauty Is a Wound)', 'Mahakarya Sastra Realisme Magis Indonesia', 'Epik sastra yang mengisahkan sejarah kekerasan Indonesia dari masa penjajahan Belanda, pendudukan Jepang, hingga pembantaian 1965.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'eka-kurniawan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Novel: Lelaki Harimau (Man Tiger)', 'Karya Sastra Tragedi & Mitologi Psikologis', 'Pembedahan mendalam tentang kemiskinan perdesaan, kekerasan domestik, dan mitos harimau gaib yang diakui dunia internasional.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'eka-kurniawan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Trilogi Buku: The Book of Forbidden Feelings', 'Karya Seni Visual & Antologi Sastra Ilustrasi', 'Seri buku visual batin yang merayakan emosi-emosi manusia yang sering disembunyikan, kesepian, rasa hampa, dan kecanggungan hidup.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'lala-bohang';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pameran Instalasi Seni: Ruang Batin yang Sunyi', 'Seni Rupa Kontemporer & Ilustrasi Konseptual', 'Instalasi visual yang menggabungkan gambar tinta, objek temuan sehari-hari, dan rekaman audio monolog batin.', 'Rp 50.000 - Rp 350.000', 'Dukung Inisiatif', 'https://lalabohang.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'lala-bohang';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Comika Corp (Ekosistem Industri Komedi Tunggal Mandiri)', 'Industri Kreatif & Platform Monetisasi Komika', 'Perusahaan media dan manajemen komedi terbesar di Indonesia yang menyediakan aplikasi streaming spesial komedi, akademi, dan festival.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'pandji-pragiwaksono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi: Juru Bicara & Mesakke Bangsaku', 'Karya Stand-Up Comedy Satir Sosial-Politik', 'Pertunjukan komedi tunggal berdurasi 2 jam yang membedah kejahatan korupsi, HAM masa lalu, dan diskriminasi minoritas secara tajam.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'pandji-pragiwaksono';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi Tunggal: Ilmu Gagal', 'Karya Stand-Up Comedy & Refleksi Kehidupan', 'Pertunjukan komedi tunggal yang membedah kegagalan, penolakan sosial, dan kebanggaan berdiri sebagai orang timur di ibu kota.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'arie-kriting';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Penulisan Skenario Film Sinema Satir Ketimpangan', 'Karya Sinematografi & Skenario Film', 'Karya naskah film layar lebar yang mengangkat realitas ketiadaan sinyal telekomunikasi dan ketimpangan fasilitas daerah pelosok.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'arie-kriting';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi: Pahlawan Perlu Tanda Jasa', 'Karya Komedi Tunggal Satir Pendidikan', 'Pertunjukan komedi fenomenal yang menuntut kenaikan gaji layak bagi guru honorer dan membongkar kemunafikan birokrasi pendidikan.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'abdur-arsyad';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Komedi Tunggal: Kontras Kebijakan Publik', 'Kritik Kebijakan Berbalut Nalar Matematika', 'Rangkaian video monolog bedah anggaran negara, subsidi pupuk petani, dan kedaulatan pangan menggunakan logika sains presisi.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'abdur-arsyad';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Video: DPO (Dewan Perwakilan Omel-Omel)', 'Karya Satir Digital & Pengawasan Kebijakan', 'Format video esai komedi singkat berdaya viral puluhan juta penonton yang mengkritik absurditas regulasi dan ketidakadilan hukum.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://instagram.com/bintangemon', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'bintang-emon';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pertunjukan Komedi Tunggal: Tangkap Gua', 'Karya Stand-Up Comedy Satir Berani', 'Spesial komedi berdurasi panjang yang membedah kebebasan berekspresi, paranoia aparat, dan dinamika pernikahan muda.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'bintang-emon';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi: Kemarahan dari Fakfak', 'Karya Stand-Up Comedy Realitas Papua', 'Pertunjukan komedi tunggal yang membedah keabsurdan janji manis pembangunan dan penderitaan warga pedalaman Papua.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'mamat-alkatiri';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Podcast Titik Kumpul & Dialog Lintas Perspektif', 'Kanal Audio Digital Kebangsaan', 'Program bincang-bincang santai yang membedah isu sosial, politik, dan kebudayaan tanpa sekat basa-basi bersama tokoh publik.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'mamat-alkatiri';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Show Komedi: Balada Wong Tani Kebumen', 'Karya Stand-Up Comedy Budaya Lokal', 'Pertunjukan komedi tunggal yang membedah romantika kehidupan pedesaan, birokrasi pupuk subsidi, dan ketangguhan mental petani Jawa.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'sadana-agung-sulistya';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Sketsa Komedi Perdesaan Sadana', 'Karya Audio-Visual Komedi Sawah', 'Rangkaian video komedi situasi di pematang sawah dan pos ronda yang memotret kehangatan serta kelucuan warga desa.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'sadana-agung-sulistya';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Bioskop: Ngeri-Ngeri Sedap (Perwakilan Oscar Indonesia)', 'Karya Sinema Komedi Drama Keluarga & Budaya Batak', 'Film fenomenal yang membedah keharmonisan keluarga, luka adat, dan kerinduan orang tua pada anak rantau di tepian Danau Toba.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://netflix.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'bene-dion-rajagukguk';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Film: Agak Laen (Box Office Historikal)', 'Karya Sinema Komedi Komunal & Hiburan Rakyat', 'Produksi film komedi horor yang memecahkan rekor box office sinema nasional dengan jutaan penonton lintas daerah.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://ima-jinari.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'bene-dion-rajagukguk';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi Tunggal: Balada Perantau Samarinda', 'Karya Stand-Up Comedy Kelas Pekerja', 'Pertunjukan komedi tunggal yang membedah keabsurdan adaptasi anak daerah saat bertahan hidup di rimba metropolitan Jakarta.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'yono-bakrie';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Komedi Sketsa & Konten Relatable Warga', 'Karya Audio-Visual Komedi Situasional', 'Rangkaian sketsa komedi digital yang memotret dinamika kehidupan sehari-hari anak kos, ojek daring, dan pekerja paruh waktu.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'yono-bakrie';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi: Sambat Petani Saradan', 'Karya Stand-Up Comedy Budaya Perdesaan', 'Pertunjukan komedi tunggal yang membedah romantika kehidupan anak muda di pedesaan Jawa dan suka duka bertani.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'nopek-novian';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal Vlog Merakyat Nopek Novian', 'Dokumentasi Komedi Kehidupan Komunal', 'Serial video dokumentasi kehidupan desa, kuliner warung pinggir jalan, dan interaksi hangat bersama warga kampung.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'nopek-novian';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Komedi: Pingin Siaran & Majelis Lucu', 'Karya Komedi Absurd & Dialog Spontan Digital', 'Serial bincang-bincang komedi improvisasi yang menampilkan gaya berpikir unik dan reaksi spontan Dustin yang viral jutaan kali.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'dustin-tiffani';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Sketsa Komedi Perkantoran & Percetakan', 'Karya Audio-Visual Komedi Kelas Pekerja', 'Sketsa komedi yang mengangkat lika-liku perjuangan pekerja percetakan fotokopi dan buruh harian lepas perkotaan.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'dustin-tiffani';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Investigasi & Pembongkaran Matematika Judi Online', 'Riset Finansial & Advokasi Publik', 'Pembedahan saintifik tentang probabilitas bandar judi online dan arsitektur penipuan finansial digital yang menguras kantong jutaan warga.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://youtube.com/@ferryirwandi', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'ferry-irwandi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Malaka Project (Platform Video Esai Nalar Kritis)', 'Media Riset & Diskursus Independen', 'Platform video esai berbobot dengan jutaan pelanggan yang menguliti isu filsafat praktis, ekonomi makro, dan kesadaran politik anak muda.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://malakaproject.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'ferry-irwandi';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Mata Najwa (Program Dialog Politik & Akuntabilitas)', 'Jurnalisme Investigasi & Talkshow Kebijakan Publik', 'Program bincang-bincang politik independen yang menjadi rujukan warga dalam menguji integritas para calon pemimpin dan pembuat kebijakan.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://narasi.tv', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'najwa-shihab';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Narasi TV & Narasi Newsroom (Investigasi Open Source)', 'Ekosistem Media Digital Warga & Investigasi OSINT', 'Redaksi jurnalisme data yang mengungkap pembajakan ruang publik, kekerasan aparat, dan penyelewengan kekuasaan.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://narasi.tv', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'najwa-shihab';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Endgame Podcast (Siniar Geopolitik & Sains Masa Depan)', 'Media Edukasi Wawasan Global & Wawancara Mendalam', 'Platform dialog intelektual berkualitas tinggi yang membedah arsitektur kecerdasan buatan, energi terbarukan, dan sejarah peradaban bangsa.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@GitaWirjawan', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'gita-wirjawan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ancora Foundation (Beasiswa Pendidikan Tinggi Global)', 'Filantropi Pendidikan & Pembinaan Kepemimpinan', 'Yayasan beasiswa yang telah mengirimkan ratusan talenta terbaik Indonesia menempuh studi magister dan doktoral di Harvard, Oxford, dan Cambridge.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://ancorafoundation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'gita-wirjawan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Muslimah yang Memperdebatkan Kepalsuan', 'Karya Literatur Fiqih Emansipatoris & Gender', 'Kumpulan esai reflektif yang membongkar bias patriarki dalam penafsiran agama dan membela otonomi perempuan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'kalis-mardiasih';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Hijrah Jangan Jauh-Jauh, Nanti Lupa Pulang', 'Kritik Sosial Fenomena Keagamaan Populer', 'Pembedahan fenomena hijrah instan perkotaan yang kerap melupakan etika kesantunan dan empati sosial sehari-hari.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'kalis-mardiasih';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal YouTube Kok Bisa? (Platform Animasi Edukasi Terbesar)', 'Media Edukasi Sains Populer & Animasi Digital', 'Koleksi ratusan video animasi berstandar riset ilmiah yang telah ditonton lebih dari 700 juta kali oleh pelajar dan keluarga Indonesia.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@KokBisa', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'gerald-sebastian';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Kok Bisa? Tanya Jawab Sains Seru Dunia', 'Karya Literatur Sains Populer Anak & Remaja', 'Buku visual interaktif yang merangkum misteri sains biologi, fisika, dan teknologi dalam bahasa sederhana yang menyenangkan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'gerald-sebastian';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Gerakan Anak Petani Cerdas (Komunitas Belajar Desa Gratis)', 'Pendidikan Transformatif & Pengentasan Buta Aksara', 'Pusat belajar alternatif yang menyediakan bimbingan literasi, komputer, dan bahasa asing gratis bagi ribuan anak petani di Jawa Barat.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'heni-sri-sundani';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'AgroEdu Jampang (Agrowisata Edukasi Pertanian Mandiri)', 'Kewirausahaan Sosial Agribisnis Berkelanjutan', 'Unit usaha pertanian organik yang menjadi laboratorium belajar bercocok tanam sekaligus menopang operasional sekolah gratis anak petani.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'heni-sri-sundani';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'MySkill.id (Platform Upskilling Karier & E-Learning Digital)', 'EduTech Keterampilan Kerja & Bootcamp Vokasi', 'Platform pembelajaran karier daring terpadu yang menyediakan ratusan modul video interaktif, bootcamp intensif, dan bimbingan portofolio kerja.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://myskill.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'angga-fauzan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Beasiswa Upskilling Talenta Daerah Prasejahtera', 'Inklusi Digital & Akselerasi Karier Pemuda', 'Penyaluran ribuan beasiswa pelatihan skill digital gratis bagi mahasiswa dan lulusan baru dari keluarga kurang mampu di luar Pulau Jawa.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://myskill.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'angga-fauzan';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Indonesian Youth Conference (IYC & Sinergi Muda)', 'Gerakan Kepemudaan & Advokasi Kebijakan Publik', 'Konferensi tahunan pemuda lintas nusantara yang memfasilitasi dialog langsung antara pemuda daerah dengan para pemimpin bangsa.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sinergimuda.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'alanda-kariza';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Muda, Berdaya, Berkarya & Surat Penggemar', 'Karya Literatur Kepemudaan & Esai Sosial', 'Kumpulan tulisan inspiratif memandu pemuda menemukan panggilan kepemimpinan dan merintis inisiatif sosial mandiri.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'alanda-kariza';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Platform Edukasi Literasi Keuangan Felicia Tjiasaka', 'Edukasi Finansial & Analisis Pasar Modal Terbuka', 'Kanal edukasi keuangan dengan jutaan pengikut yang membedah alur laporan keuangan, portofolio investasi, dan perencanaan pensiun.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@FeliciaPutriTjiasaka', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'felicia-putri-tjiasaka';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ternak Uang (Aplikasi Belajar Investasi Generasi Muda)', 'Fintech EduTech & Komunitas Investor Pemula', 'Platform pembelajaran modul investasi saham, reksadana, dan properti yang membimbing ratusan ribu investor muda Indonesia.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://ternakuang.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'felicia-putri-tjiasaka';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'CiAS (Corporate Innovation Asia)', 'Konsultansi Strategi Inovasi & Transformasi Bisnis', 'Firma konsultan inovasi terdepan yang mendesain arsitektur transformasi korporasi dan inkubasi unit bisnis baru.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://cias.co', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'dr-indrawan-nugroho';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal Analisis Strategi Bisnis Dr. Indrawan Nugroho', 'Media Edukasi Manajemen & Studi Kasus Disrupsi', 'Koleksi ratusan video studi kasus mendalam tentang inovasi teknologi, manajemen kepemimpinan, dan persaingan pasar global.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@IndrawanNugroho', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'dr-indrawan-nugroho';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Scale-Up Biomanufaktur Vaksin Oxford-AstraZeneca', 'Rekayasa Bioteknologi & Kesehatan Global', 'Metode manufaktur skala industri untuk memproduksi vaksin vektor adenovirus bervolume tinggi dengan efisiensi biaya maksimal.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.ndm.ox.ac.uk', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'carina-joe';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Riset Sel Punca & Sistem Formulasi Protein Rekombinan', 'Publikasi Saintifik Internasional', 'Kumpulan jurnal ilmiah tentang stabilitas formulasi biologi dan rekayasa ekspresi protein untuk terapi penyakit menular.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://pubmed.ncbi.nlm.nih.gov', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'carina-joe';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Desain Produksi Visual Moana & Moana 2 (Disney)', 'Desain Seni Sinema Animasi Global', 'Rancangan visual kostum Tapa cloth, perahu tradisional Wayfinding, dan estetika visual samudera Pasifik.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://disneyanimation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'griselda-sastrawinata';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Visual Development & Costume Design ''Raya and the Last Dragon''', 'Visual Development & Wastra Nusantara', 'Eksplorasi motif kain ikat, batik, dan ornamen arsitektur tradisional rumpun Asia Tenggara ke dalam dunia Kumandra.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://disneyanimation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'griselda-sastrawinata';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'The Raid: Redemption & The Raid 2 (Sinema Laga)', 'Film Aksi & Koreografi Pencak Silat', 'Karya sinema laga revolusioner yang memperkenalkan teknik silat gerak cepat dan pertarungan ruang sempit ke kancah global.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://www.imdb.com/title/tt1899353', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'iko-uwais';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Uwais Team (Kolektif Koreografer & Stunt Silat)', 'Koreografi Laga & Manajemen Stuntman', 'Pusat pelatihan dan penyedia koreografi aksi laga profesional Indonesia untuk industri sinema Hollywood dan Asia.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://instagram.com/iko.uwais', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'iko-uwais';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album ''My Favorite Things'' (Motéma Music)', 'Album Rekaman Jazz & Grammy Nominee', 'Album debut bersejarah berisi aransemen ulang mahakarya jazz klasik yang memuncaki tangga lagu Billboard Jazz.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://joeyalexandermusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'joey-alexander';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album ''Origin'' (Verve / Mack Avenue)', 'Komposisi Musik Orisinil', 'Album penuh pertama berisi seluruh karya cipta orisinil Joey Alexander yang menampilkan kematangan eksplorasi harmoni dan ritme.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://joeyalexandermusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'joey-alexander';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Publikasi Peta Genom Kelapa Sawit (Jurnal Nature)', 'Publikasi Riset Saintifik Dunia', 'Pemetaan urutan DNA kelapa sawit dan penemuan gen penentu ketebalan cangkang buah yang meningkatkan rendemen minyak sawit lestari.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.nature.com/articles/nature12309', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'muhammad-arief-budiman';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Teknologi Deteksi Dini Bibit Sawit Unggul Berkelanjutan', 'Bioteknologi Agrikultur Terapan', 'Metode molekuler untuk mendeteksi varietas tanaman produktif tinggi sejak benih guna mencegah deforestasi lahan.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://oriongenomics.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'muhammad-arief-budiman';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Penampilan Bersejarah di Coachella Music Festival (2022)', 'Pementasan Musik Panggung Dunia', 'Penampilan spektakuler membawakan lagu ''Sempurna'' dan karya orisinil di festival musik terbesar Amerika Serikat.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/watch?v=coachella', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'niki-zefanya';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album Studio ''Nicole'' & ''Buzz'' (88rising / Virgin Music)', 'Album Rekaman Pop-R&B Kontemporer', 'Album reflektif berisi lagu-lagu hit global seperti ''High School in Jakarta'', ''Oceans & Engines'', dan ''Backburner''.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://nikizefanya.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'niki-zefanya';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Uji Klinis Aplikasi Wolbachia Melawan Demam Berdarah (NEJM)', 'Publikasi Medis Kelas Dunia & Uji Klinis', 'Studi ilmiah acak terkendali efektivitas Wolbachia yang menjadi standar emas rujukan penanganan DBD global oleh WHO.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.nejm.org/doi/full/10.1056/NEJMoa2030243', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'adi-utarini';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Menggugah Partisipasi Masyarakat dalam Sains Biomedis', 'Karya Literatur Komunikasi Sains', 'Panduan integrasi riset ilmiah biomedis mutakhir dengan pendekatan sosiologis kader posyandu dan tokoh masyarakat kampung.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://ugm.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'adi-utarini';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Paten Teknologi Microbubble Terapi Kanker Ultrasonik', 'Paten Biomedis Internasional & Terapi Medis', 'Sistem penghantaran obat tertarget memanfaatkan gelombang ultrasonik dan partikel mikro-gelembung untuk membasmi sel kanker tanpa merusak jaringan sehat.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://patents.google.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'prof-ken-soetanto';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Metode Pembelajaran Motivasi ''Soetanto Effect''', 'Pedagogi Pendidikan & Psikologi Belajar', 'Metode pendidikan interaktif yang diadopsi di berbagai universitas Jepang untuk mengubah mahasiswa berpestasi rendah menjadi peneliti unggul.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.waseda.jp', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'prof-ken-soetanto';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album ''The Sailor'' (88rising / 12Tone Music)', 'Album Rekaman Hip-Hop Sinematik', 'Album konsep naratif yang memotret pencarian jati diri perantau muda Asia melintasi samudera mimpi dunia.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://richbrian.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'rich-brian';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Lagu & Video Musik ''Kids'' (Refleksi Generasi)', 'Karya Musik & Representasi Budaya', 'Lagu reflektif bertenaga tentang anak-anak muda Asia yang mendobrak stereotip global dan menjadi tuan di panggung dunia.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/watch?v=kids', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'rich-brian';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku ''Flavors of Indonesia: William Wongso''s Culinary Wonders''', 'Literatur Gastronomi Dunia & Best Cookbook of the Year', 'Ensiklopedi kuliner nusantara komprehensif yang membedah keunikan bumbu, teknik memasak purba, dan filosofi makanan daerah.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.williamwongso.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'william-wongso';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Akuisisi Bumbu Otentik ''William Wongso Kuliner'' (Bumbu Siap Pakai)', 'Hilirisasi Kuliner Tradisional Mandiri', 'Inisiatif standardisasi bumbu pasta rempah tradisional nusantara siap masak tanpa pengawet sintetis untuk pasar global.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://williamwongso.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'william-wongso';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Jaringan Rumah Makan Padang Payakumbuah', 'Kewirausahaan Kuliner & Rantai Pasok Lokal', 'Jaringan restoran Minang modern yang menggunakan bahan baku otentik (beras solok, cabai keriting, kelapa) langsung dari petani Sumatra Barat.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://payakumbuah.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'arief-muhammad';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Gerakan Berbagi Digital ''Ikoy-Ikoyan''', 'Aksi Solidaritas & Filantropi Kreator', 'Fenomena berbagi rezeki tanpa syarat di media sosial yang membantu ribuan warga terdampak ekonomi krisis pandemi.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://instagram.com/ariefmuhammad', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'arief-muhammad';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Siniar ''Curhat Bang Denny Sumargo'' (Ruang Mediasi Publik)', 'Talkshow Humaniora & Mediasi Masalah Sosial', 'Platform dialog intim jutaan penonton yang mengangkat kisah-kisah perjuangan hidup, penebusan dosa masa lalu, dan resolusi konflik sosial.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@curhatbang', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'denny-sumargo';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Peran Sinema ''A Man Called Ahok'' & ''Miracle in Cell No. 7''', 'Seni Peran Layar Lebar', 'Penampilan akting dramatis berkarakter kuat yang menuai apresiasi luas dari kritikus film dan festival perfilman nasional.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.imdb.com/name/nm5436605', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'denny-sumargo';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal Hiburan & Serial Film Pendek VFX ''Tara Arts Movie''', 'Produksi Film Pendek Efek Visual Mandiri', 'Koleksi ratusan video parodi aksi dan sains fiksi mandiri dengan standar compositing visual effect internasional.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@taraartsmovie', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'diwantara-anugrah-putra';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Tara Arts Game Indonesia (Platform Gaming Komedi)', 'Kreator Konten & Komunitas Video Interaktif', 'Kanal gaming legendaris dengan jutaan subscriber yang mengedepankan etika bermain sportif dan komedi improvisasi santun.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@taraartsgameindonesia', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'diwantara-anugrah-putra';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Dokumenter Ekspedisi Gunung & Budaya Desa', 'Dokumenter Petualangan & Refleksi Budaya', 'Dokumentasi audio-visual pendakian gunung dengan narasi sastrawi yang menyorot kearifan lokal masyarakat lereng pegunungan.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@dzawinnur', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'dzawin-nur-ikram';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kampanye Etika Pendakian ''Gunung Bukan Tempat Sampah''', 'Konservasi Lingkungan & Advokasi Alam', 'Gerakan edukasi masif kepada ribuan pendaki muda untuk membawa pulang kembali sampah plastik dari atas gunung.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://instagram.com/dzawin_nur', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'dzawin-nur-ikram';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pembedahan Kritis Dinamika Budaya Internet & Algoritma', 'Video Esai & Kritik Media Digital', 'Rangkaian video esai analitis yang membedah arsitektur psikologi platform media sosial, polarisasi digital, dan manipulasi perhatian.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@enobening', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'eno-bening';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Modul Edukasi ''Social Media Literacy & Digital Awareness''', 'Kurikulum Pendidikan Literasi Digital', 'Panduan praktis bagi orang tua dan remaja untuk menavigasi disinformasi, privasi data, dan kecanduan algoritma di ruang digital.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://enobening.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'eno-bening';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Siniar ''Gritte Buka Praktek'' (GBP)', 'Siniar Humaniora & Advokasi Sosial', 'Program wawancara mendalam yang mengangkat kisah ketabahan hidup para penyintas penyakit kronis dan figur inspiratif akar rumput.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@gritteagatha', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'gritte-agatha';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Pendek ''Prank'' & Karya Sinema Independen', 'Penyutradaraan Sinema & Edukasi Sosial', 'Karya film pendek naratif yang mengedukasi bahaya perundungan (*bullying*) dan pentingnya komunikasi sehat dalam keluarga.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@gritteagatha', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'gritte-agatha';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'DPR Musikal (Pertunjukan Musikal Satir Konstitusi)', 'Teater Musikal & Kritik Kebijakan Publik', 'Mahakarya teater musikal orisinil berdurasi penuh yang membongkar korupsi politik dan pengkhianatan amanat rakyat di gedung dewan.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/watch?v=dprmusikal', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'jovial-andovi-da-lopez';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial ''Epic Rap Battles of Presidents'' (1 s.d. 3)', 'Produksi Hip-Hop Musikal Sejarah Bangsa', 'Karya musikal sinematik yang mempertemukan para tokoh proklamator dan presiden Indonesia dalam debat gagasan kebangsaan.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/@skinnyindonesian24', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'jovial-andovi-da-lopez';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Dokumenter Sinematik ''Sabang Sampai Merauke''', 'Dokumenter Budaya & Eksplorasi Geografi Indonesia', 'Serial perjalanan sinematik yang mendokumentasikan keindahan alam tersembunyi, tradisi adat, dan kehidupan sosial di pulau-pulau terpencil.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@leoedw', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'leonardo-edwin';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku ''Menjelajah Batas: Catatan Perantau Muda''', 'Karya Literatur Memoar & Motivasi Belajar', 'Kisah memoar perjalanan beradaptasi di negeri asing, menembus batasan rasa takut, dan menemukan kembali cinta pada tanah kelahiran.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'leonardo-edwin';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Investigasi Kasus Nyata & Forensik ''NERROR''', 'Video Esai Investigasi & Forensik Kriminal', 'Serial video riset berbasis data investigasi mendalam yang membedah kasus kejahatan global dan misteri sejarah dunia secara saintifik.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@nessiejudge', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'nessie-judge';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Siniar Eksklusif ''The Nerror Podcast'' (Spotify Original)', 'Siniar Audio Sinematik & Profil Psikologi Kriminal', 'Produksi siniar audio berbasis teater suara yang mengupas profil psikologis pelaku kejahatan dan kronologi misteri tak terpecahkan.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'nessie-judge';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku-Buku Mahakarya Komedi Bestseller Nasional (Kambing Jantan s.d. Ubur-Ubur Lembur)', 'Karya Literatur Komedi & Fenomena Perbukuan', 'Seri buku kumpulan esai komedi personal yang telah dicetak jutaan eksemplar dan menginspirasi jutaan generasi muda untuk menulis.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://gagasmedia.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga_demo1 p WHERE p.slug = 'raditya-dika';

INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Filmografi Sinema Box Office (Single, Hangout, Malam Minggu Miko)', 'Penyutradaraan & Penulisan Skenario Sinema', 'Karya-karya sinema komedi cerdas yang mengawinkan genre romantis, misteri, dan satire kehidupan urban.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://imdb.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga_demo1 p WHERE p.slug = 'raditya-dika';

COMMIT;
