BEGIN;
INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Gerakan Anak Petani Cerdas (Komunitas Belajar Desa Gratis)', 'Pendidikan Transformatif & Pengentasan Buta Aksara', 'Pusat belajar alternatif yang menyediakan bimbingan literasi, komputer, dan bahasa asing gratis bagi ribuan anak petani di Jawa Barat.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'heni-sri-sundani';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'AgroEdu Jampang (Agrowisata Edukasi Pertanian Mandiri)', 'Kewirausahaan Sosial Agribisnis Berkelanjutan', 'Unit usaha pertanian organik yang menjadi laboratorium belajar bercocok tanam sekaligus menopang operasional sekolah gratis anak petani.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'heni-sri-sundani';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'MySkill.id (Platform Upskilling Karier & E-Learning Digital)', 'EduTech Keterampilan Kerja & Bootcamp Vokasi', 'Platform pembelajaran karier daring terpadu yang menyediakan ratusan modul video interaktif, bootcamp intensif, dan bimbingan portofolio kerja.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://myskill.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'angga-fauzan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Beasiswa Upskilling Talenta Daerah Prasejahtera', 'Inklusi Digital & Akselerasi Karier Pemuda', 'Penyaluran ribuan beasiswa pelatihan skill digital gratis bagi mahasiswa dan lulusan baru dari keluarga kurang mampu di luar Pulau Jawa.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://myskill.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'angga-fauzan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Indonesian Youth Conference (IYC & Sinergi Muda)', 'Gerakan Kepemudaan & Advokasi Kebijakan Publik', 'Konferensi tahunan pemuda lintas nusantara yang memfasilitasi dialog langsung antara pemuda daerah dengan para pemimpin bangsa.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sinergimuda.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'alanda-kariza';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Muda, Berdaya, Berkarya & Surat Penggemar', 'Karya Literatur Kepemudaan & Esai Sosial', 'Kumpulan tulisan inspiratif memandu pemuda menemukan panggilan kepemimpinan dan merintis inisiatif sosial mandiri.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'alanda-kariza';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Platform Edukasi Literasi Keuangan Felicia Tjiasaka', 'Edukasi Finansial & Analisis Pasar Modal Terbuka', 'Kanal edukasi keuangan dengan jutaan pengikut yang membedah alur laporan keuangan, portofolio investasi, dan perencanaan pensiun.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@FeliciaPutriTjiasaka', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'felicia-putri-tjiasaka';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ternak Uang (Aplikasi Belajar Investasi Generasi Muda)', 'Fintech EduTech & Komunitas Investor Pemula', 'Platform pembelajaran modul investasi saham, reksadana, dan properti yang membimbing ratusan ribu investor muda Indonesia.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://ternakuang.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'felicia-putri-tjiasaka';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'CiAS (Corporate Innovation Asia)', 'Konsultansi Strategi Inovasi & Transformasi Bisnis', 'Firma konsultan inovasi terdepan yang mendesain arsitektur transformasi korporasi dan inkubasi unit bisnis baru.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://cias.co', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'dr-indrawan-nugroho';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal Analisis Strategi Bisnis Dr. Indrawan Nugroho', 'Media Edukasi Manajemen & Studi Kasus Disrupsi', 'Koleksi ratusan video studi kasus mendalam tentang inovasi teknologi, manajemen kepemimpinan, dan persaingan pasar global.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@IndrawanNugroho', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'dr-indrawan-nugroho';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Scale-Up Biomanufaktur Vaksin Oxford-AstraZeneca', 'Rekayasa Bioteknologi & Kesehatan Global', 'Metode manufaktur skala industri untuk memproduksi vaksin vektor adenovirus bervolume tinggi dengan efisiensi biaya maksimal.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.ndm.ox.ac.uk', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'carina-joe';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Riset Sel Punca & Sistem Formulasi Protein Rekombinan', 'Publikasi Saintifik Internasional', 'Kumpulan jurnal ilmiah tentang stabilitas formulasi biologi dan rekayasa ekspresi protein untuk terapi penyakit menular.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://pubmed.ncbi.nlm.nih.gov', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'carina-joe';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Desain Produksi Visual Moana & Moana 2 (Disney)', 'Desain Seni Sinema Animasi Global', 'Rancangan visual kostum Tapa cloth, perahu tradisional Wayfinding, dan estetika visual samudera Pasifik.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://disneyanimation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'griselda-sastrawinata';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Visual Development & Costume Design ''Raya and the Last Dragon''', 'Visual Development & Wastra Nusantara', 'Eksplorasi motif kain ikat, batik, dan ornamen arsitektur tradisional rumpun Asia Tenggara ke dalam dunia Kumandra.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://disneyanimation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'griselda-sastrawinata';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'The Raid: Redemption & The Raid 2 (Sinema Laga)', 'Film Aksi & Koreografi Pencak Silat', 'Karya sinema laga revolusioner yang memperkenalkan teknik silat gerak cepat dan pertarungan ruang sempit ke kancah global.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://www.imdb.com/title/tt1899353', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'iko-uwais';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Uwais Team (Kolektif Koreografer & Stunt Silat)', 'Koreografi Laga & Manajemen Stuntman', 'Pusat pelatihan dan penyedia koreografi aksi laga profesional Indonesia untuk industri sinema Hollywood dan Asia.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://instagram.com/iko.uwais', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'iko-uwais';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album ''My Favorite Things'' (Motéma Music)', 'Album Rekaman Jazz & Grammy Nominee', 'Album debut bersejarah berisi aransemen ulang mahakarya jazz klasik yang memuncaki tangga lagu Billboard Jazz.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://joeyalexandermusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'joey-alexander';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album ''Origin'' (Verve / Mack Avenue)', 'Komposisi Musik Orisinil', 'Album penuh pertama berisi seluruh karya cipta orisinil Joey Alexander yang menampilkan kematangan eksplorasi harmoni dan ritme.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://joeyalexandermusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'joey-alexander';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Publikasi Peta Genom Kelapa Sawit (Jurnal Nature)', 'Publikasi Riset Saintifik Dunia', 'Pemetaan urutan DNA kelapa sawit dan penemuan gen penentu ketebalan cangkang buah yang meningkatkan rendemen minyak sawit lestari.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.nature.com/articles/nature12309', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'muhammad-arief-budiman';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Teknologi Deteksi Dini Bibit Sawit Unggul Berkelanjutan', 'Bioteknologi Agrikultur Terapan', 'Metode molekuler untuk mendeteksi varietas tanaman produktif tinggi sejak benih guna mencegah deforestasi lahan.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://oriongenomics.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'muhammad-arief-budiman';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Penampilan Bersejarah di Coachella Music Festival (2022)', 'Pementasan Musik Panggung Dunia', 'Penampilan spektakuler membawakan lagu ''Sempurna'' dan karya orisinil di festival musik terbesar Amerika Serikat.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/watch?v=coachella', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'niki-zefanya';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album Studio ''Nicole'' & ''Buzz'' (88rising / Virgin Music)', 'Album Rekaman Pop-R&B Kontemporer', 'Album reflektif berisi lagu-lagu hit global seperti ''High School in Jakarta'', ''Oceans & Engines'', dan ''Backburner''.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://nikizefanya.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'niki-zefanya';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Uji Klinis Aplikasi Wolbachia Melawan Demam Berdarah (NEJM)', 'Publikasi Medis Kelas Dunia & Uji Klinis', 'Studi ilmiah acak terkendali efektivitas Wolbachia yang menjadi standar emas rujukan penanganan DBD global oleh WHO.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.nejm.org/doi/full/10.1056/NEJMoa2030243', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'adi-utarini';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Menggugah Partisipasi Masyarakat dalam Sains Biomedis', 'Karya Literatur Komunikasi Sains', 'Panduan integrasi riset ilmiah biomedis mutakhir dengan pendekatan sosiologis kader posyandu dan tokoh masyarakat kampung.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://ugm.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'adi-utarini';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Paten Teknologi Microbubble Terapi Kanker Ultrasonik', 'Paten Biomedis Internasional & Terapi Medis', 'Sistem penghantaran obat tertarget memanfaatkan gelombang ultrasonik dan partikel mikro-gelembung untuk membasmi sel kanker tanpa merusak jaringan sehat.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://patents.google.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'prof-ken-soetanto';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Metode Pembelajaran Motivasi ''Soetanto Effect''', 'Pedagogi Pendidikan & Psikologi Belajar', 'Metode pendidikan interaktif yang diadopsi di berbagai universitas Jepang untuk mengubah mahasiswa berpestasi rendah menjadi peneliti unggul.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.waseda.jp', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'prof-ken-soetanto';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album ''The Sailor'' (88rising / 12Tone Music)', 'Album Rekaman Hip-Hop Sinematik', 'Album konsep naratif yang memotret pencarian jati diri perantau muda Asia melintasi samudera mimpi dunia.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://richbrian.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'rich-brian';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Lagu & Video Musik ''Kids'' (Refleksi Generasi)', 'Karya Musik & Representasi Budaya', 'Lagu reflektif bertenaga tentang anak-anak muda Asia yang mendobrak stereotip global dan menjadi tuan di panggung dunia.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/watch?v=kids', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'rich-brian';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku ''Flavors of Indonesia: William Wongso''s Culinary Wonders''', 'Literatur Gastronomi Dunia & Best Cookbook of the Year', 'Ensiklopedi kuliner nusantara komprehensif yang membedah keunikan bumbu, teknik memasak purba, dan filosofi makanan daerah.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.williamwongso.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'william-wongso';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Akuisisi Bumbu Otentik ''William Wongso Kuliner'' (Bumbu Siap Pakai)', 'Hilirisasi Kuliner Tradisional Mandiri', 'Inisiatif standardisasi bumbu pasta rempah tradisional nusantara siap masak tanpa pengawet sintetis untuk pasar global.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://williamwongso.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'william-wongso';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Jaringan Rumah Makan Padang Payakumbuah', 'Kewirausahaan Kuliner & Rantai Pasok Lokal', 'Jaringan restoran Minang modern yang menggunakan bahan baku otentik (beras solok, cabai keriting, kelapa) langsung dari petani Sumatra Barat.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://payakumbuah.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'arief-muhammad';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Gerakan Berbagi Digital ''Ikoy-Ikoyan''', 'Aksi Solidaritas & Filantropi Kreator', 'Fenomena berbagi rezeki tanpa syarat di media sosial yang membantu ribuan warga terdampak ekonomi krisis pandemi.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://instagram.com/ariefmuhammad', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'arief-muhammad';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Siniar ''Curhat Bang Denny Sumargo'' (Ruang Mediasi Publik)', 'Talkshow Humaniora & Mediasi Masalah Sosial', 'Platform dialog intim jutaan penonton yang mengangkat kisah-kisah perjuangan hidup, penebusan dosa masa lalu, dan resolusi konflik sosial.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@curhatbang', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'denny-sumargo';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Peran Sinema ''A Man Called Ahok'' & ''Miracle in Cell No. 7''', 'Seni Peran Layar Lebar', 'Penampilan akting dramatis berkarakter kuat yang menuai apresiasi luas dari kritikus film dan festival perfilman nasional.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.imdb.com/name/nm5436605', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'denny-sumargo';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal Hiburan & Serial Film Pendek VFX ''Tara Arts Movie''', 'Produksi Film Pendek Efek Visual Mandiri', 'Koleksi ratusan video parodi aksi dan sains fiksi mandiri dengan standar compositing visual effect internasional.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@taraartsmovie', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'diwantara-anugrah-putra';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Tara Arts Game Indonesia (Platform Gaming Komedi)', 'Kreator Konten & Komunitas Video Interaktif', 'Kanal gaming legendaris dengan jutaan subscriber yang mengedepankan etika bermain sportif dan komedi improvisasi santun.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@taraartsgameindonesia', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'diwantara-anugrah-putra';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Dokumenter Ekspedisi Gunung & Budaya Desa', 'Dokumenter Petualangan & Refleksi Budaya', 'Dokumentasi audio-visual pendakian gunung dengan narasi sastrawi yang menyorot kearifan lokal masyarakat lereng pegunungan.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@dzawinnur', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'dzawin-nur-ikram';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kampanye Etika Pendakian ''Gunung Bukan Tempat Sampah''', 'Konservasi Lingkungan & Advokasi Alam', 'Gerakan edukasi masif kepada ribuan pendaki muda untuk membawa pulang kembali sampah plastik dari atas gunung.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://instagram.com/dzawin_nur', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'dzawin-nur-ikram';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pembedahan Kritis Dinamika Budaya Internet & Algoritma', 'Video Esai & Kritik Media Digital', 'Rangkaian video esai analitis yang membedah arsitektur psikologi platform media sosial, polarisasi digital, dan manipulasi perhatian.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@enobening', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'eno-bening';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Modul Edukasi ''Social Media Literacy & Digital Awareness''', 'Kurikulum Pendidikan Literasi Digital', 'Panduan praktis bagi orang tua dan remaja untuk menavigasi disinformasi, privasi data, dan kecanduan algoritma di ruang digital.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://enobening.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'eno-bening';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Siniar ''Gritte Buka Praktek'' (GBP)', 'Siniar Humaniora & Advokasi Sosial', 'Program wawancara mendalam yang mengangkat kisah ketabahan hidup para penyintas penyakit kronis dan figur inspiratif akar rumput.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@gritteagatha', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'gritte-agatha';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Pendek ''Prank'' & Karya Sinema Independen', 'Penyutradaraan Sinema & Edukasi Sosial', 'Karya film pendek naratif yang mengedukasi bahaya perundungan (*bullying*) dan pentingnya komunikasi sehat dalam keluarga.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@gritteagatha', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'gritte-agatha';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'DPR Musikal (Pertunjukan Musikal Satir Konstitusi)', 'Teater Musikal & Kritik Kebijakan Publik', 'Mahakarya teater musikal orisinil berdurasi penuh yang membongkar korupsi politik dan pengkhianatan amanat rakyat di gedung dewan.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/watch?v=dprmusikal', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'jovial-andovi-da-lopez';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial ''Epic Rap Battles of Presidents'' (1 s.d. 3)', 'Produksi Hip-Hop Musikal Sejarah Bangsa', 'Karya musikal sinematik yang mempertemukan para tokoh proklamator dan presiden Indonesia dalam debat gagasan kebangsaan.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/@skinnyindonesian24', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'jovial-andovi-da-lopez';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Dokumenter Sinematik ''Sabang Sampai Merauke''', 'Dokumenter Budaya & Eksplorasi Geografi Indonesia', 'Serial perjalanan sinematik yang mendokumentasikan keindahan alam tersembunyi, tradisi adat, dan kehidupan sosial di pulau-pulau terpencil.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@leoedw', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'leonardo-edwin';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku ''Menjelajah Batas: Catatan Perantau Muda''', 'Karya Literatur Memoar & Motivasi Belajar', 'Kisah memoar perjalanan beradaptasi di negeri asing, menembus batasan rasa takut, dan menemukan kembali cinta pada tanah kelahiran.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'leonardo-edwin';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Investigasi Kasus Nyata & Forensik ''NERROR''', 'Video Esai Investigasi & Forensik Kriminal', 'Serial video riset berbasis data investigasi mendalam yang membedah kasus kejahatan global dan misteri sejarah dunia secara saintifik.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com/@nessiejudge', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'nessie-judge';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Siniar Eksklusif ''The Nerror Podcast'' (Spotify Original)', 'Siniar Audio Sinematik & Profil Psikologi Kriminal', 'Produksi siniar audio berbasis teater suara yang mengupas profil psikologis pelaku kejahatan dan kronologi misteri tak terpecahkan.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'nessie-judge';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku-Buku Mahakarya Komedi Bestseller Nasional (Kambing Jantan s.d. Ubur-Ubur Lembur)', 'Karya Literatur Komedi & Fenomena Perbukuan', 'Seri buku kumpulan esai komedi personal yang telah dicetak jutaan eksemplar dan menginspirasi jutaan generasi muda untuk menulis.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://gagasmedia.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'raditya-dika';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Filmografi Sinema Box Office (Single, Hangout, Malam Minggu Miko)', 'Penyutradaraan & Penulisan Skenario Sinema', 'Karya-karya sinema komedi cerdas yang mengawinkan genre romantis, misteri, dan satire kehidupan urban.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://imdb.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'raditya-dika';
COMMIT;
