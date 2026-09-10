-- SQL Batch for laci_03_pembangun_sistem
BEGIN;

-- Figure: Dr. Onno W. Purbo (onno-w-purbo)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'onno-w-purbo' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dr. Onno W. Purbo',
      title = 'Inisiator Internet Rakyat, RT/RW-Net, Wajanbolic & OpenBTS (Pendekar Teknologi Terbuka)',
      category = 'Pembangun Sistem',
      quote = 'Ilmu pengetahuan itu seperti air yang mengalir; semakin dibagikan secara cuma-cuma kepada rakyat jelata, ia akan semakin jernih, melimpah, dan berlipat ganda berkahnya bagi bangsa.',
      bio_paragraphs = ARRAY['Ketika akses internet di era 1990 hingga 2000-an menjadi barang mewah yang dimonopoli korporasi telekomunikasi dan hanya dinikmati elit kota besar, Onno W. Purbo memilih jalan peretas etis (ethical hacker) dan pendidik akar rumput. Mantan dosen ITB ini melepas zona nyaman akademis demi mengabdikan hidupnya mencerdaskan rakyat di pelosok nusantara.', 'Dengan kejeniusan rekayasa tepat guna, Onno menciptakan inovasi legendaris antena Wajanbolic (penguat sinyal Wi-Fi dari wajan penggorengan dapur), merintis konsep RT/RW-Net, hingga membangun stasiun pemancar seluler mandiri OpenBTS legal pertama di daerah 3T. Seluruh skema rekayasa, kode program open-source, dan ribuan buku panduannya ia bagikan secara gratis tanpa mematenkannya demi keuntungan pribadi.', 'Dianugerahi Jonathan B. Postel Service Award (penghargaan tertinggi internet dunia), Onno adalah ikon kedaulatan teknologi digital Nusantara: membuktikan bahwa kemandirian sains sejati lahir saat teknologi dapat dirakit sendiri oleh rakyat kecil dari barang-barang bekas di sekitarnya.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('onno-w-purbo', 'Dr. Onno W. Purbo', 'Inisiator Internet Rakyat, RT/RW-Net, Wajanbolic & OpenBTS (Pendekar Teknologi Terbuka)', 'Pembangun Sistem', 'Ilmu pengetahuan itu seperti air yang mengalir; semakin dibagikan secara cuma-cuma kepada rakyat jelata, ia akan semakin jernih, melimpah, dan berlipat ganda berkahnya bagi bangsa.', ARRAY['Ketika akses internet di era 1990 hingga 2000-an menjadi barang mewah yang dimonopoli korporasi telekomunikasi dan hanya dinikmati elit kota besar, Onno W. Purbo memilih jalan peretas etis (ethical hacker) dan pendidik akar rumput. Mantan dosen ITB ini melepas zona nyaman akademis demi mengabdikan hidupnya mencerdaskan rakyat di pelosok nusantara.', 'Dengan kejeniusan rekayasa tepat guna, Onno menciptakan inovasi legendaris antena Wajanbolic (penguat sinyal Wi-Fi dari wajan penggorengan dapur), merintis konsep RT/RW-Net, hingga membangun stasiun pemancar seluler mandiri OpenBTS legal pertama di daerah 3T. Seluruh skema rekayasa, kode program open-source, dan ribuan buku panduannya ia bagikan secara gratis tanpa mematenkannya demi keuntungan pribadi.', 'Dianugerahi Jonathan B. Postel Service Award (penghargaan tertinggi internet dunia), Onno adalah ikon kedaulatan teknologi digital Nusantara: membuktikan bahwa kemandirian sains sejati lahir saat teknologi dapat dirakit sendiri oleh rakyat kecil dari barang-barang bekas di sekitarnya.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1996 — 2003', 'REKAYASA WAJANBOLIC & GERAKAN RT/RW-NET', 'Menciptakan antena Wajanbolic e-goen dan memelopori gerakan jaringan internet swadaya RT/RW-Net yang menghubungkan jutaan rumah warga berbiaya murah.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 — 2013', 'OPENBTS & KEDAULATAN SELULER DESA TERPENCIL', 'Membangun BTS seluler komunitas open-source pertama di Papua dan pelosok Jawa, mendemokratisasi frekuensi telekomunikasi bagi warga yang tidak terjangkau sinyal komersial.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 — 2026', 'POSTEL SERVICE AWARD & KAMPUS TERBUKA ONNO CENTER', 'Menerima penghargaan tertinggi Internet Society (Postel Award) dan mendirikan OnnoCenter E-Learning gratis yang telah melatih lebih dari 100.000 praktisi IT lokal.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'OnnoCenter E-Learning (Kampus Terbuka Teknologi Rakyat)', 'Platform Pendidikan IT Terbuka & Sertifikasi Gratis', 'LMS daring gratis yang menyediakan puluhan modul rekayasa jaringan, cybersecurity, server Linux, dan kecerdasan buatan bagi talenta daerah.', 'https://lms.onnocenter.or.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Antena Wajanbolic & Arsitektur OpenBTS Komunitas', 'Inovasi Hardware Komunikasi Tepat Guna', 'Cetak biru perangkat keras jaringan nirkabel murah berbasis wajan dapur dan software radio terbuka untuk desa terpencil.', 'https://onnocenter.or.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Perpustakaan Digital Terbuka & 50+ Buku Teks Rekayasa', 'Buku Panduan & Repositori Open Source', 'Arsip puluhan buku ajar dan ratusan gigabyte e-book teknologi jaringan yang didistribusikan secara offline ke sekolah-sekolah pedalaman.', 'https://onnocenter.or.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menembus Batas Sinyal: Cerita dari Balik Wajanbolic dan Perjuangan Membuka Isolasi Internet Desa', 'INTERNET RAKYAT', '8 Menit Membaca', 'Catatan rekayasa Onno W. Purbo tentang bagaimana peralatan dapur sederhana mampu meruntuhkan monopoli operator telekomunikasi.', 'Ketika operator besar menolak menarik kabel fiber optik ke desa karena dianggap tidak menguntungkan secara bisnis, warga tidak boleh pasrah hidup dalam kegelapan informasi. Wajanbolic adalah simbol kemandirian: bahwa dengan nalar rekayasa, rakyat mampu membangun jalannya sendiri menuju peradaban dunia.', '/artikel/onno-w-purbo-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Filosofi Open Source: Mengapa Menyembunyikan Ilmu Pengetahuan Adalah Dosa Peradaban', 'ETIKA SAINS', '7 Menit Membaca', 'Pentingnya membebaskan ilmu pengetahuan dari belenggu paten komersial demi lompatan kecerdasan bersama anak bangsa.', 'Ilmu yang dikunci di balik dinding berbayar hanya akan melahirkan ketimpangan sosial. Kedaulatan digital bangsa ini tidak akan pernah tercapai jika generasi mudanya hanya menjadi konsumen pasif teknologi asing tanpa pernah mengerti baris kode di dalamnya.', '/artikel/onno-w-purbo-2', 2);
END $$;

-- Figure: Dr. Warsito P. Taruno (warsito-p-taruno)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'warsito-p-taruno' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dr. Warsito P. Taruno',
      title = 'Penemu Teknologi Tomografi 4D (ECVT) & Pendiri CTech Labs Edwar Technology',
      category = 'Pembangun Sistem',
      quote = 'Kemajuan sains terdepan suatu bangsa tidak ditentukan oleh kemegahan gedung risetnya, melainkan oleh keteguhan hati para penelitinya yang pantang menyerah meski dihadang keterbatasan fasilitas dan birokrasi.',
      bio_paragraphs = ARRAY['Lahir di pedesaan Solo dan menempuh pendidikan sarjana hingga doktoral di bidang Teknik Kimia di Shizuoka University Jepang, Dr. Warsito Purwo Taruno adalah ilmuwan fisika Indonesia yang berhasil memecahkan tantangan pemindaian volumetrik berkecepatan tinggi dunia. Penemuannya, Electrical Capacitance Volume Tomography (ECVT) 4D, diakui sebagai sistem tomografi medan listrik pertama dan tercepat di muka bumi.', 'Teknologi ECVT ciptaan Warsito diadopsi oleh badan antariksa dunia NASA untuk pemindaian turbulensi bahan bakar pesawat ulang-alik dan riset eksplorasi energi di AS dan Jepang. Sepulang ke Indonesia, dari sebuah laboratorium riset mandiri di ruko sederhana di Tangerang (CTech Labs), Warsito mengembangkan aplikasi ECVT untuk pemindaian kanker otak dan payudara (ECCT) berbasis medan listrik kapasitif berdaya rendah yang terjangkau bagi rakyat kecil.', 'Meski sempat menghadapi resistensi regulasi di dalam negeri, Warsito tetap teguh memegang paten internasionalnya. Ia adalah bukti otentik bahwa riset sains fundamental kelas dunia mampu lahir dari garasi laboratorium mandiri di tanah air.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('warsito-p-taruno', 'Dr. Warsito P. Taruno', 'Penemu Teknologi Tomografi 4D (ECVT) & Pendiri CTech Labs Edwar Technology', 'Pembangun Sistem', 'Kemajuan sains terdepan suatu bangsa tidak ditentukan oleh kemegahan gedung risetnya, melainkan oleh keteguhan hati para penelitinya yang pantang menyerah meski dihadang keterbatasan fasilitas dan birokrasi.', ARRAY['Lahir di pedesaan Solo dan menempuh pendidikan sarjana hingga doktoral di bidang Teknik Kimia di Shizuoka University Jepang, Dr. Warsito Purwo Taruno adalah ilmuwan fisika Indonesia yang berhasil memecahkan tantangan pemindaian volumetrik berkecepatan tinggi dunia. Penemuannya, Electrical Capacitance Volume Tomography (ECVT) 4D, diakui sebagai sistem tomografi medan listrik pertama dan tercepat di muka bumi.', 'Teknologi ECVT ciptaan Warsito diadopsi oleh badan antariksa dunia NASA untuk pemindaian turbulensi bahan bakar pesawat ulang-alik dan riset eksplorasi energi di AS dan Jepang. Sepulang ke Indonesia, dari sebuah laboratorium riset mandiri di ruko sederhana di Tangerang (CTech Labs), Warsito mengembangkan aplikasi ECVT untuk pemindaian kanker otak dan payudara (ECCT) berbasis medan listrik kapasitif berdaya rendah yang terjangkau bagi rakyat kecil.', 'Meski sempat menghadapi resistensi regulasi di dalam negeri, Warsito tetap teguh memegang paten internasionalnya. Ia adalah bukti otentik bahwa riset sains fundamental kelas dunia mampu lahir dari garasi laboratorium mandiri di tanah air.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2000 — 2004', 'PENEMUAN FUNDAMENTAL ECVT DI JEPANG & AS', 'Menemukan rumus matematika rekonstruksi tomografi medan listrik 4D berkecepatan tinggi di Ohio State University dan mematenkannya secara global.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2011', 'PENDIRIAN CTECH LABS & APLIKASI MEDIS KANKER', 'Mendirikan CTech Labs Edwar Technology di Tangerang, merancang alat pemindai tomografi kanker payudara dan helm medan listrik terapi sel kanker (ECCT).', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2012 — 2026', 'ADOPSI NASA & EKSPANSI KLINIS INTERNASIONAL', 'Teknologi tomografinya digunakan dalam rekayasa kedirgantaraan NASA dan uji klinis terapi onkologi di Jepang, India, dan Eropa.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Teknologi ECVT 4D (Electrical Capacitance Volume Tomography)', 'Paten Sains Terapan & Instrumentasi Industri', 'Teknologi pemindaian tomografi volumetrik medan listrik kecepatan tinggi pertama di dunia yang diadopsi NASA dan industri energi internasional.', 'https://ctechlabs.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'CTech Labs Edwar Technology', 'Laboratorium Riset Fisika Medis & Industri Mandiri', 'Pusat riset sains terapan di Tangerang yang merancang instrumen tomografi industri dan terapi medis berbasis gelombang listrik kapasitif.', 'https://ctechlabs.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'ECCT (Electro-Capacitive Cancer Therapy)', 'Inovasi Alat Terapi Medis Terjangkau', 'Perangkat terapi kanker non-radiasi berdaya rendah yang dirancang untuk menghambat pembelahan sel tumor secara non-invasif.', 'https://ctechlabs.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Garasi Tangerang Menembus NASA: Perjalanan Panjang Paten Tomografi 4D Warsito Taruno', 'SAINS FUNDAMENTAL', '8 Menit Membaca', 'Kisah di balik layar penemuan rumus matematika rekonstruksi medan listrik yang mengubah standar pemindaian volumetrik dunia.', 'Sains tidak mengenal paspor atau kasta gedung laboratorium. Di hadapan hukum-hukum fisika, rumus matematika yang dirancang di ruko sederhana Tangerang memiliki kekuatan yang sama mutlaknya dengan laboratorium elit di Silicon Valley.', '/artikel/warsito-p-taruno-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Hilirisasi Sains Mandiri: Menghadapi Tembok Skeptisisme dan Mempertahankan Kedaulatan Riset', 'KEDAULATAN TEKNOLOGI', '7 Menit Membaca', 'Pentingnya melindungi hak kekayaan intelektual penemu lokal agar tidak dirampas oleh korporasi asing.', 'Banyak ilmuwan Indonesia di luar negeri tergoda menjual patennya kepada raksasa multinasional. Menolak tawaran triliunan rupiah demi membawa teknologi tersebut pulang ke tanah air adalah bentuk nasionalisme sains yang sesungguhnya.', '/artikel/warsito-p-taruno-2', 2);
END $$;

-- Figure: Ainun Najib (ainun-najib)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'ainun-najib' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Ainun Najib',
      title = 'Arsitek Sistem Sains Data Sipil, Inisiator KawalPemilu & KawalCOVID19',
      category = 'Pembangun Sistem',
      quote = 'Sains data dan teknologi sipil adalah benteng penjaga kejujuran demokrasi ketika narasi kekuasaan mencoba memanipulasi kenyataan di lapangan.',
      bio_paragraphs = ARRAY['Berakar dari tanah santri di Gresik hingga menembus olimpiade informatika internasional dan berkarier sebagai arsitek data terkemuka di Singapura, Ainun Najib adalah perintis gerakan teknologi sipil (civic tech) paling berpengaruh dalam sejarah politik modern Indonesia.', 'Kala integritas pemilu presiden 2014 terancam oleh klaim kemenangan sepihak dan ancaman manipulasi suara berjenjang, Ainun bersama jaringan diaspora teknologi menginisiasi KawalPemilu.org—sebuah platform crowdsourcing terbuka yang mendigitalkan dan mengagregasi jutaan lembar formulir C1 plano langsung dari Tempat Pemungutan Suara (TPS). Ketika pandemi melanda, ia kembali menggerakkan KawalCOVID19 sebagai rujukan independen data sains wabah.', 'Ainun membuktikan bahwa kemampuan koding dan arsitektur data rekayasa tingkat tinggi di tangan warga yang berintegritas dapat menjadi tameng penyelamat demokrasi dan keselamatan nyawa jutaan rakyat dari kebohongan politik.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('ainun-najib', 'Ainun Najib', 'Arsitek Sistem Sains Data Sipil, Inisiator KawalPemilu & KawalCOVID19', 'Pembangun Sistem', 'Sains data dan teknologi sipil adalah benteng penjaga kejujuran demokrasi ketika narasi kekuasaan mencoba memanipulasi kenyataan di lapangan.', ARRAY['Berakar dari tanah santri di Gresik hingga menembus olimpiade informatika internasional dan berkarier sebagai arsitek data terkemuka di Singapura, Ainun Najib adalah perintis gerakan teknologi sipil (civic tech) paling berpengaruh dalam sejarah politik modern Indonesia.', 'Kala integritas pemilu presiden 2014 terancam oleh klaim kemenangan sepihak dan ancaman manipulasi suara berjenjang, Ainun bersama jaringan diaspora teknologi menginisiasi KawalPemilu.org—sebuah platform crowdsourcing terbuka yang mendigitalkan dan mengagregasi jutaan lembar formulir C1 plano langsung dari Tempat Pemungutan Suara (TPS). Ketika pandemi melanda, ia kembali menggerakkan KawalCOVID19 sebagai rujukan independen data sains wabah.', 'Ainun membuktikan bahwa kemampuan koding dan arsitektur data rekayasa tingkat tinggi di tangan warga yang berintegritas dapat menjadi tameng penyelamat demokrasi dan keselamatan nyawa jutaan rakyat dari kebohongan politik.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2007 — 2013', 'KARIER REKAYASA DATA DI SINGAPURA & GRAB', 'Bekerja sebagai konsultan analitika data senior di IBM dan memimpin arsitektur data sains di perusahaan teknologi global.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2019', 'INVENTASI KAWALPEMILU & REVOLUSI CIVIC TECH', 'Meluncurkan KawalPemilu.org yang memobilisasi puluhan ribu relawan digital memverifikasi formulir C1 secara real-time, mengamankan keabsahan hasil pemilu.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 — 2026', 'KAWALCOVID19 & PENGEMBANGAN TALENTA DIGITAL SANTRI', 'Menginisiasi KawalCOVID19 untuk transparansi data pandemi dan mengadvokasi percepatan literasi kecerdasan buatan bagi santri di nusantara.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'KawalPemilu.org (Platform Transparansi Rekapitulasi Suara)', 'Civic Tech & Sains Data Demokrasi', 'Sistem verifikasi data formulir C1 berbasis crowdsourcing independen yang menjadi jangkar kebenaran publik melawan manipulasi suara.', 'https://kawalpemilu.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'KawalCOVID19 (Inisiatif Data & Informasi Pandemi)', 'Kompilasi Data Sains Kesehatan Masyarakat', 'Platform agregasi data independen yang memetakan ketersediaan tempat tidur RS, oksigen, dan verifikasi fakta seputar wabah virus.', 'https://kawalcovid19.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Gerakan Ekosistem Diaspora Teknologi Nusantara', 'Jejaring Talenta Sains Global & Pembinaan', 'Inisiatif menghubungkan insinyur perangkat lunak Indonesia di Silicon Valley, Eropa, dan Asia untuk mentransfer keahlian deep-tech ke dalam negeri.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Civic Tech: Bagaimana Baris Kode Pemrograman Menjaga Kejujuran Kotak Suara Demokrasi', 'DATA & DEMOKRASI', '7 Menit Membaca', 'Pembedahan arsitektur sistem KawalPemilu dalam memvalidasi jutaan data formulir C1 di tengah serangan siber.', 'Ketika kedua kubu politik saling mengklaim kemenangan berdasarkan hitung cepat internal, transparansi data mentah TPS adalah satu-satunya juru damai. Gotong royong ribuan relawan mengetik data C1 membuktikan kekuatan teknologi sipil yang merdeka.', '/artikel/ainun-najib-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Sains Data vs Politik Pandemi: Pelajaran dari Keterbukaan Informasi Darurat Kesehatan', 'SAINS DATA', '8 Menit Membaca', 'Pentingnya penyajian data epidemiologi yang jujur tanpa polesan narasi politik demi menyelamatkan nyawa warga.', 'Dalam krisis kesehatan masyarakat, satu angka yang disembunyikan dapat berakibat pada ribuan nyawa yang kehilangan akses penanganan. Keterbukaan data publik adalah syarat mutlak keselamatan bersama.', '/artikel/ainun-najib-2', 2);
END $$;

-- Figure: Dr. Khoirul Anwar (khoirul-anwar)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'khoirul-anwar' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dr. Khoirul Anwar',
      title = 'Penemu Paten Dua FFT OFDM (Fondasi 4G LTE) & Direktur AdWiTech Telkom University',
      category = 'Pembangun Sistem',
      quote = 'Dari kesederhanaan pematang sawah di Kediri, rumus matematika nirkabel dapat diracik menjadi standar telekomunikasi yang menghubungkan miliaran telepon pintar di seluruh penjuru bumi.',
      bio_paragraphs = ARRAY['Tumbuh dari keluarga petani sederhana di Dusun Jabon, Desa Juwet, Kunjang, Kediri, Khoirul Anwar kecil terbiasa belajar matematika di bawah temaram lampu minyak tanah sembari menggembalakan sapi. Ketekunan otodidaknya mengantarkannya meraih beasiswa ke Teknik Elektro ITB hingga menyelesaikan program master dan doktor di Nara Institute of Science and Technology (NAIST) Jepang.', 'Kala dunia riset telekomunikasi global buntu menghadapi masalah interferensi sinyal pada transmisi data nirkabel kecepatan tinggi di area padat bangunan, Khoirul Anwar menemukan solusi revolusioner: algoritma transmisi berbasis dua Fast Fourier Transform (FFT) berpasangan (Two-dimensional FFT OFDM). Algoritma temuannya ini kemudian dipatenkan dan diakui secara luas sebagai salah satu fondasi utama standar konektivitas nirkabel 4G LTE dan 5G dunia.', 'Sepulang ke Indonesia untuk memimpin Advanced Wireless Technologies (AdWiTech) di Telkom University, Khoirul Anwar konsisten mendidik generasi periset muda: membuktikan bahwa anak desa nusantara mampu memegang kunci arsitektur teknologi komunikasi tercepat dunia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('khoirul-anwar', 'Dr. Khoirul Anwar', 'Penemu Paten Dua FFT OFDM (Fondasi 4G LTE) & Direktur AdWiTech Telkom University', 'Pembangun Sistem', 'Dari kesederhanaan pematang sawah di Kediri, rumus matematika nirkabel dapat diracik menjadi standar telekomunikasi yang menghubungkan miliaran telepon pintar di seluruh penjuru bumi.', ARRAY['Tumbuh dari keluarga petani sederhana di Dusun Jabon, Desa Juwet, Kunjang, Kediri, Khoirul Anwar kecil terbiasa belajar matematika di bawah temaram lampu minyak tanah sembari menggembalakan sapi. Ketekunan otodidaknya mengantarkannya meraih beasiswa ke Teknik Elektro ITB hingga menyelesaikan program master dan doktor di Nara Institute of Science and Technology (NAIST) Jepang.', 'Kala dunia riset telekomunikasi global buntu menghadapi masalah interferensi sinyal pada transmisi data nirkabel kecepatan tinggi di area padat bangunan, Khoirul Anwar menemukan solusi revolusioner: algoritma transmisi berbasis dua Fast Fourier Transform (FFT) berpasangan (Two-dimensional FFT OFDM). Algoritma temuannya ini kemudian dipatenkan dan diakui secara luas sebagai salah satu fondasi utama standar konektivitas nirkabel 4G LTE dan 5G dunia.', 'Sepulang ke Indonesia untuk memimpin Advanced Wireless Technologies (AdWiTech) di Telkom University, Khoirul Anwar konsisten mendidik generasi periset muda: membuktikan bahwa anak desa nusantara mampu memegang kunci arsitektur teknologi komunikasi tercepat dunia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2008', 'PENEMUAN DUA FFT OFDM DI JEPANG', 'Merancang dan mematenkan algoritma komputasi ganda FFT yang memecahkan hambatan interferensi sinyal seluler berkecepatan tinggi di NAIST Jepang.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 — 2015', 'STANDARISASI 4G LTE & RISET JAIST', 'Menjadi asisten profesor di JAIST dan mematenkan sistem transmisi berdaya hemat energi yang diadopsi dalam standar nirkabel 4G dan 5G.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 — 2026', 'PULANG KE TANAH AIR & MEMIMPIN ADWITECH', 'Mendirikan AdWiTech di Telkom University Bandung, memimpin riset radar sensor lokal, komunikasi kuantum, dan transmisi satelit nasional.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Paten Internasional Dua FFT OFDM (Fondasi Transmisi 4G LTE)', 'Paten Teknologi Telekomunikasi Nirkabel', 'Algoritma komputasi sinyal nirkabel berefisiensi tinggi yang menjadi salah satu standar fundamental konektivitas 4G LTE dan 5G dunia.', 'https://adwitech.telkomuniversity.ac.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'AdWiTech (Advanced Wireless Technologies Center)', 'Pusat Riset Telekomunikasi Terdepan', 'Laboratorium riset nirkabel di Bandung yang mengembangkan teknologi komunikasi kebencanaan, IoT cerdas, dan radar maritim mandiri.', 'https://adwitech.telkomuniversity.ac.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sistem Transmisi Sinyal Bencana Berdaya Rendah', 'Rekayasa Teknologi Mitigasi Krisis', 'Perangkat pemancar sinyal darurat yang mampu menembus reruntuhan gempa dan daerah tanpa listrik menggunakan algoritma nirkabel adaptif.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Inspirasi dari Kediri untuk Dunia: Kisah di Balik Algoritma Dua FFT yang Menggerakkan 4G LTE', 'REKAYASA TELEKOMUNIKASI', '8 Menit Membaca', 'Perjalanan hidup Khoirul Anwar dari anak petani Kediri hingga menjadi penemu paten telekomunikasi yang digunakan miliaran orang.', 'Keterbatasan fasilitas di masa kecil bukanlah penghalang untuk menguasai sains paling rumit di dunia. Ketika kita melatih nalar matematika dengan rasa ingin tahu yang mendalam, rumus-rumus abstrak itu dapat diubah menjadi teknologi yang membebaskan jutaan manusia dari keterisolasian informasi.', '/artikel/khoirul-anwar-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kedaulatan Spektrum Nirkabel: Mengapa Indonesia Harus Mengembangkan Teknologi 5G dan 6G Sendiri', 'SAINS & INDUSTRI', '7 Menit Membaca', 'Pentingnya kemandirian industri perangkat keras telekomunikasi agar tidak selamanya membayar royalti lisensi ke luar negeri.', 'Sebagai negara kepulauan terbesar di dunia dengan ratusan juta pengguna ponsel pintar, kita tidak boleh hanya menjadi pasar empuk bagi vendor teknologi global. Membangun laboratorium riset nirkabel lokal adalah investasi strategis martabat bangsa.', '/artikel/khoirul-anwar-2', 2);
END $$;

-- Figure: Jim Geovedi (jim-geovedi)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'jim-geovedi' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Jim Geovedi',
      title = 'Pakar Keamanan Siber Global, Arsitek Infrastruktur Satelit & Peretas Etis Otodidak',
      category = 'Pembangun Sistem',
      quote = 'Keamanan sistem digital bukan soal seberapa tebal benteng pertahananmu, melainkan seberapa jujur kamu mengenali celah dan kerapuhan di dalam dirimu sendiri.',
      bio_paragraphs = ARRAY['Belajar pemrograman dan keamanan jaringan secara otodidak dari kehidupan jalanan di Bandar Lampung setelah lulus SMA, Jim Geovedi menjelma menjadi salah satu legenda keamanan siber paling disegani di dunia. Reputasi globalnya meledak saat ia mendemonstrasikan kemampuan meretas dan mengendalikan arah orbit satelit luar angkasa dalam konferensi keamanan siber internasional pada 2006 dan 2009.', 'Jim menolak menggunakan keahlian elitnya untuk kejahatan finansial atau spionase gelap. Ia memilih jalan peretas etis (white-hat hacker), mendirikan perusahaan audit keamanan siber di London dan Berlin, serta membantu mengamankan infrastruktur perbankan global, sistem telekomunikasi satelit, dan pusat data pertahanan kritis dari serangan siber antar-negara.', 'Bagi generasi muda penggiat teknologi informasi, Jim Geovedi adalah inspirasi otodidak tertinggi: membuktikan bahwa keahlian teknologi tingkat dewa tidak selalu lahir dari ijazah kampus mahal, melainkan dari rasa ingin tahu yang tak kenal lelah dan komitmen etika integritas yang tak tergoyahkan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('jim-geovedi', 'Jim Geovedi', 'Pakar Keamanan Siber Global, Arsitek Infrastruktur Satelit & Peretas Etis Otodidak', 'Pembangun Sistem', 'Keamanan sistem digital bukan soal seberapa tebal benteng pertahananmu, melainkan seberapa jujur kamu mengenali celah dan kerapuhan di dalam dirimu sendiri.', ARRAY['Belajar pemrograman dan keamanan jaringan secara otodidak dari kehidupan jalanan di Bandar Lampung setelah lulus SMA, Jim Geovedi menjelma menjadi salah satu legenda keamanan siber paling disegani di dunia. Reputasi globalnya meledak saat ia mendemonstrasikan kemampuan meretas dan mengendalikan arah orbit satelit luar angkasa dalam konferensi keamanan siber internasional pada 2006 dan 2009.', 'Jim menolak menggunakan keahlian elitnya untuk kejahatan finansial atau spionase gelap. Ia memilih jalan peretas etis (white-hat hacker), mendirikan perusahaan audit keamanan siber di London dan Berlin, serta membantu mengamankan infrastruktur perbankan global, sistem telekomunikasi satelit, dan pusat data pertahanan kritis dari serangan siber antar-negara.', 'Bagi generasi muda penggiat teknologi informasi, Jim Geovedi adalah inspirasi otodidak tertinggi: membuktikan bahwa keahlian teknologi tingkat dewa tidak selalu lahir dari ijazah kampus mahal, melainkan dari rasa ingin tahu yang tak kenal lelah dan komitmen etika integritas yang tak tergoyahkan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1998 — 2004', 'BELAJAR OTODIDAK DI JALANAN & RISET JARINGAN', 'Mempelajari arsitektur jaringan komputer dan sistem operasi Linux secara mandiri di warung internet, merintis komunitas keamanan siber Indonesia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2006 — 2009', 'DEMONSTRASI KENDALI SATELIT DI PANGGUNG DUNIA', 'Mengguncang dunia keamanan siber internasional di Amsterdam dan Kuala Lumpur atas pembuktian kerentanan sistem navigasi satelit orbit bumi.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2012 — 2026', 'KONSULTANSI INFRASTRUKTUR SIBER GLOBAL DI EROPA', 'Memimpin firma audit keamanan siber di London, mengamankan arsitektur kecerdasan buatan, sistem pembayaran finansial, dan data satelit global.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Audit Keamanan Infrastruktur Satelit & Telekomunikasi Global', 'Keamanan Siber Tingkat Tinggi & Ruang Angkasa', 'Layanan uji penetrasi dan audit arsitektur keamanan sistem transmisi satelit dan pusat komputasi awan multinasional.', 'https://geovedi.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Arsitektur Kriptografi & Perlindungan Sistem Finansial', 'Kriptografi & Rekayasa Keamanan Siber', 'Rancang bangun benteng pertahanan siber untuk transaksi perbankan skala masif dan pencegahan kebocoran data nasabah.', 'https://geovedi.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Mentorship Komunitas Peretas Etis Nusantara', 'Edukasi Keamanan Siber & Etika Digital', 'Bimbingan informal bagi ribuan talenta muda keamanan siber Indonesia agar menyalurkan keahliannya untuk melindungi data publik.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menggeser Orbit Satelit: Pelajaran Penting tentang Kerapuhan Infrastruktur Digital Dunia', 'CYBERSECURITY', '7 Menit Membaca', 'Catatan investigasi Jim Geovedi tentang bagaimana teknologi luar angkasa yang tampak canggih sering kali menyimpan celah keamanan mendasar.', 'Tidak ada sistem di dunia ini yang 100% aman. Keangkuhan para pembuat sistem yang merasa bentengnya tak tertembus adalah pintu masuk paling mudah bagi serangan siber. Keamanan sejati membutuhkan kerendahan hati untuk terus menguji dan menambal celah setiap saat.', '/artikel/jim-geovedi-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjadi Peretas Etis: Memilih Integritas di Tengah Godaan Uang Gelap Dunia Siber', 'ETIKA PERETAS', '6 Menit Membaca', 'Pentingnya kompas moral bagi generasi muda yang memiliki kemampuan meretas agar tidak terjerumus dalam kejahatan siber transnasional.', 'Kemampuan meretas seperti memegang pisau bedah bermata dua: kamu bisa menggunakannya untuk menyelamatkan nyawa atau untuk merampok orang lain. Kehormatan seorang hacker diukur dari etika yang ia pegang teguh saat berada dalam kegelapan tanpa pengawasan siapa pun.', '/artikel/jim-geovedi-2', 2);
END $$;

-- Figure: Dr. Ayu Purwarianti (ayu-purwarianti)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'ayu-purwarianti' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dr. Ayu Purwarianti',
      title = 'Ketua Pusat Riset AI ITB, Co-founder Prosa.ai & Pelopor NLP Bahasa Indonesia',
      category = 'Pembangun Sistem',
      quote = 'Kedaulatan linguistik bangsa ini harus dijaga di era kecerdasan buatan; jangan sampai bahasa ibu kita dan ratusan bahasa daerah terhapus dari peradaban komputasi algoritma.',
      bio_paragraphs = ARRAY['Jauh sebelum demam kecerdasan buatan dan Large Language Models (LLM) melanda dunia, Dr. Ayu Purwarianti telah mendedikasikan lebih dari dua dekade hidupnya meneliti Natural Language Processing (NLP) khusus untuk sintaksis, fonetik, dan korpus Bahasa Indonesia serta bahasa daerah nusantara. Meraih gelar doktor dari Toyohashi University of Technology Jepang, ia kini menjabat sebagai Ketua Pusat Riset AI di ITB.', 'Ayu menyadari bahaya laten jika ekosistem komputasi kecerdasan buatan hanya dikuasai oleh model-model bahasa asing: mesin tidak akan mampu memahami konteks kultural, dialek lokal, dan nilai-nilai kebangsaan Indonesia. Maka ia menginisiasi pembangunan korpus dataset bahasa nasional dan ikut mendirikan Prosa.ai—perusahaan deep-tech lokal yang mengembangkan teknologi Speech-to-Text, Voice Biometrics, dan Text Processing berakurasi tinggi untuk dialek Indonesia.', 'Bagi generasi muda insinyur AI, Ayu Purwarianti adalah benteng penjaga kedaulatan bahasa: memastikan bahwa peradaban kecerdasan buatan masa depan tetap berakar pada kekayaan linguistik tanah air sendiri.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('ayu-purwarianti', 'Dr. Ayu Purwarianti', 'Ketua Pusat Riset AI ITB, Co-founder Prosa.ai & Pelopor NLP Bahasa Indonesia', 'Pembangun Sistem', 'Kedaulatan linguistik bangsa ini harus dijaga di era kecerdasan buatan; jangan sampai bahasa ibu kita dan ratusan bahasa daerah terhapus dari peradaban komputasi algoritma.', ARRAY['Jauh sebelum demam kecerdasan buatan dan Large Language Models (LLM) melanda dunia, Dr. Ayu Purwarianti telah mendedikasikan lebih dari dua dekade hidupnya meneliti Natural Language Processing (NLP) khusus untuk sintaksis, fonetik, dan korpus Bahasa Indonesia serta bahasa daerah nusantara. Meraih gelar doktor dari Toyohashi University of Technology Jepang, ia kini menjabat sebagai Ketua Pusat Riset AI di ITB.', 'Ayu menyadari bahaya laten jika ekosistem komputasi kecerdasan buatan hanya dikuasai oleh model-model bahasa asing: mesin tidak akan mampu memahami konteks kultural, dialek lokal, dan nilai-nilai kebangsaan Indonesia. Maka ia menginisiasi pembangunan korpus dataset bahasa nasional dan ikut mendirikan Prosa.ai—perusahaan deep-tech lokal yang mengembangkan teknologi Speech-to-Text, Voice Biometrics, dan Text Processing berakurasi tinggi untuk dialek Indonesia.', 'Bagi generasi muda insinyur AI, Ayu Purwarianti adalah benteng penjaga kedaulatan bahasa: memastikan bahwa peradaban kecerdasan buatan masa depan tetap berakar pada kekayaan linguistik tanah air sendiri.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2002 — 2007', 'DOKTORAL NLP DI JEPANG & RISET AWAL BAHASA', 'Menyelesaikan riset pemrosesan bahasa alami di Jepang dan mulai membangun korpus tata bahasa komputasi Bahasa Indonesia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2020', 'PENDIRIAN PROSA.AI & PUSAT RISET AI ITB', 'Ikut mendirikan Prosa.ai dan diangkat sebagai Ketua Pusat Riset Kecerdasan Buatan ITB, memimpin kolaborasi riset AI industri dan akademisi.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'PENGEMBANGAN MODEL LLM & VOICE BIOMETRICS LOKAL', 'Memimpin riset Large Language Model berbasis bahasa daerah nusantara dan teknologi pengenalan suara biometrik perbankan nasional.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Prosa.ai (Deep-Tech AI NLP & Voice Engine)', 'Kecerdasan Buatan & Pemrosesan Bahasa Alami', 'Platform AI percakapan dan sintesis suara berbahasa Indonesia berakurasi tinggi yang digunakan oleh sektor perbankan dan layanan publik.', 'https://prosa.ai', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Korpus Data NLP Bahasa Daerah Nusantara (Pusat AI ITB)', 'Dataset Sains Komputasi Linguistik', 'Basis data terbuka korpus digital bahasa Jawa, Sunda, Minang, dan puluhan bahasa daerah untuk melatih mesin AI masa depan.', 'https://ai.itb.ac.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sistem Biometrik Suara & Pemilah Hoaks Teks AI', 'Keamanan Finansial & Forensik Digital', 'Inovasi autentikasi identitas berbasis gelombang frekuensi suara unik dan sistem pendeteksi otomatis ujaran kebencian berbasis NLP.', 'https://prosa.ai', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kedaulatan Bahasa di Era LLM: Mengapa Kita Harus Melatih Model AI dengan Korpus Lokal Sendiri', 'KECERDASAN BUATAN', '7 Menit Membaca', 'Analisis Dr. Ayu Purwarianti tentang bahaya bias budaya algoritma jika kita hanya bergantung pada model AI buatan raksasa Silicon Valley.', 'Bahasa bukan sekadar deretan kata; ia mengandung etika, kesantunan, dan kosmologi sebuah bangsa. Jika mesin kecerdasan buatan hanya belajar dari data bahasa Inggris, cara berpikir generasi kita perlahan akan terasing dari akar budayanya sendiri.', '/artikel/ayu-purwarianti-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menyelamatkan Bahasa Daerah dari Kepunahan Digital: Misi Sains Melatih Algoritma Berbahasa Ibu', 'LINGUISTIK KOMPUTASI', '6 Menit Membaca', 'Tantangan mendokumentasikan ratusan dialek nusantara ke dalam format data digital yang dapat dipelajari oleh komputer.', 'Ratusan bahasa daerah di Indonesia terancam punah karena penutur aslinya kian berkurang. Mendigitalisasikannya ke dalam model NLP adalah ikhtiar sains menjaga warisan leluhur agar tetap hidup di era peradaban algoritma.', '/artikel/ayu-purwarianti-2', 2);
END $$;

-- Figure: Irzan Raditya (irzan-raditya)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'irzan-raditya' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Irzan Raditya',
      title = 'Co-founder & CEO Kata.ai (Pelopor Conversational AI Nusantara)',
      category = 'Pembangun Sistem',
      quote = 'Sebuah bangsa akan kehilangan kedaulatan ekonominya jika mesin-mesin kecerdasan buatan masa depan tidak mampu memahami bahasa gaul dan dialek informal rakyatnya sendiri.',
      bio_paragraphs = ARRAY['Sepulang menempuh studi Computer Science di University of Applied Sciences di Berlin dan sempat berkarier di ekosistem startup Eropa, Irzan Raditya melihat peluang emas untuk membangun produk deep-tech kecerdasan buatan di tanah kelahirannya.', 'Pada 2016, Irzan mendirikan Kata.ai—sebuah perusahaan teknologi perintis yang membangun Natural Language Understanding (NLU) komersial pertama yang dirancang khusus untuk membedah dialek informal, bahasa gaul, dan struktur percakapan sehari-hari masyarakat Indonesia. Platform Kata.ai memproses ratusan juta interaksi percakapan konsumen per bulan untuk korporasi besar telekomunikasi, perbankan, hingga ribuan UMKM.', 'Irzan membuktikan kepemimpinan wirausaha teknologi muda Indonesia yang mampu membangun deep-tech berstandar global tanpa ketergantungan pada API luar negeri, serta konsisten membuka jalan bagi ekosistem AI nasional.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('irzan-raditya', 'Irzan Raditya', 'Co-founder & CEO Kata.ai (Pelopor Conversational AI Nusantara)', 'Pembangun Sistem', 'Sebuah bangsa akan kehilangan kedaulatan ekonominya jika mesin-mesin kecerdasan buatan masa depan tidak mampu memahami bahasa gaul dan dialek informal rakyatnya sendiri.', ARRAY['Sepulang menempuh studi Computer Science di University of Applied Sciences di Berlin dan sempat berkarier di ekosistem startup Eropa, Irzan Raditya melihat peluang emas untuk membangun produk deep-tech kecerdasan buatan di tanah kelahirannya.', 'Pada 2016, Irzan mendirikan Kata.ai—sebuah perusahaan teknologi perintis yang membangun Natural Language Understanding (NLU) komersial pertama yang dirancang khusus untuk membedah dialek informal, bahasa gaul, dan struktur percakapan sehari-hari masyarakat Indonesia. Platform Kata.ai memproses ratusan juta interaksi percakapan konsumen per bulan untuk korporasi besar telekomunikasi, perbankan, hingga ribuan UMKM.', 'Irzan membuktikan kepemimpinan wirausaha teknologi muda Indonesia yang mampu membangun deep-tech berstandar global tanpa ketergantungan pada API luar negeri, serta konsisten membuka jalan bagi ekosistem AI nasional.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 — 2016', 'PENDIRIAN YESBOSS & KELAHIRAN KATA.AI', 'Merintis layanan asisten virtual YesBoss dan bertransformasi membangun platform B2B Conversational AI Kata.ai.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2020', 'EKSPANSI INDUSTRI ENTERPRISE & KATA PLATFORM', 'Meluncurkan Kata Platform yang mengotomatisasi interaksi jutaan pelanggan Telkomsel (Veronika), Unilever, dan BCA.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'INTEGRASI GENERATIVE AI & AI ETHICS POLICY', 'Mengintegrasikan Generative AI enterprise yang aman dan aktif menyusun peta jalan etika kecerdasan buatan nasional.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kata.ai Conversational Platform (Mesin NLU Bahasa Gaul)', 'Platform B2B Conversational AI Enterprise', 'Infrastruktur pemrosesan jutaan pesan percakapan harian dengan akurasi pemahaman dialek informal Indonesia tertinggi.', 'https://kata.ai', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kata Omnichat & Asisten Cerdas UMKM', 'Software SaaS Otomasi Layanan Pelanggan', 'Platform perpesanan terpadu berbasis AI yang membantu pengusaha kecil mengelola ribuan pesanan WhatsApp secara otomatis.', 'https://kata.ai', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Kolaborasi Komunitas AI Indonesia', 'Ekosistem Inovasi Deep-Tech', 'Forum lokakarya tahunan yang mempertemukan ratusan insinyur AI lokal untuk berbagi riset terapan kecerdasan buatan.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membedah Bahasa Gaul dengan Algoritma: Bagaimana Kata.ai Mengajari Mesin Mengerti Konteks Percakapan Warga', 'KECERDASAN BUATAN', '7 Menit Membaca', 'Tantangan rekayasa NLU saat menghadapi bahasa Indonesia informal yang penuh singkatan, rima gaul, dan kode campur.', 'Bahasa percakapan di Indonesia adalah salah satu yang paling dinamis di dunia. Kata yang sama bisa memiliki arti bertolak belakang tergantung pada nada dan konteks kalimatnya. Mengajarkan nuansa kultural ini pada mesin adalah karya rekayasa sains yang membutuhkan pemahaman mendalam atas jiwa bangsa kita.', '/artikel/irzan-raditya-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Deep-Tech dari Tanah Air: Mengapa Kita Harus Percaya Diri Membangun Infrastruktur AI Sendiri', 'STARTUP & DISRUPSI', '6 Menit Membaca', 'Pentingnya wirausaha teknologi Indonesia berani berinvestasi pada riset fundamental dan tidak sekadar menjadi agen reseller teknologi luar.', 'Membangun produk deep-tech membutuhkan nafas panjang dan ketekunan riset bertahun-tahun. Namun inilah satu-satunya cara agar talenta teknologi kita tidak hanya menjadi pasar konsumen, melainkan pemilik arsitektur teknologi itu sendiri.', '/artikel/irzan-raditya-2', 2);
END $$;

-- Figure: Romi Satria Wahono (romi-satria-wahono)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'romi-satria-wahono' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Romi Satria Wahono',
      title = 'Pendiri IlmuKomputer.com & Brainmatics (Pelopor Open Knowledge Rekayasa Perangkat Lunak)',
      category = 'Pembangun Sistem',
      quote = 'Pendidikan teknologi tidak boleh menjadi barang dagangan mahal yang dimonopoli segelintir orang; ilmu rekayasa perangkat lunak harus dibuka selebar-lebarnya agar anak bangsa manapun bisa menjadi arsitek sistem yang unggul.',
      bio_paragraphs = ARRAY['Di awal era 2000-an saat materi ajar pemrograman komputer dan sistem basis data masih sangat langka, mahal, dan terkunci di universitas ternama, Romi Satria Wahono melakukan revolusi ilmu terbuka. Sepulang menyelesaikan pendidikan sarjana hingga doktor di Saitama University Jepang, ia mendirikan portal IlmuKomputer.com pada 2003.', 'Portal IlmuKomputer.com membagikan ribuan artikel, tutorial, dan video rekayasa perangkat lunak secara gratis dengan lisensi terbuka. Atas inisiatifnya tersebut, Romi dianugerahi penghargaan tertinggi World Summit on the Information Society (WSIS Award) dari PBB. Melalui Brainmatics, ia juga secara konsisten melatih ratusan ribu praktisi dan akademisi IT Indonesia dengan metodologi rekayasa software presisi.', 'Bagi ratusan ribu programmer dan profesional IT tanah air yang belajar secara otodidak, Romi Satria Wahono adalah guru bangsa: sosok pendidik yang mengajarkan logika algoritma dari prinsip pertama tanpa gimik jalan pintas cepat kaya.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('romi-satria-wahono', 'Romi Satria Wahono', 'Pendiri IlmuKomputer.com & Brainmatics (Pelopor Open Knowledge Rekayasa Perangkat Lunak)', 'Pembangun Sistem', 'Pendidikan teknologi tidak boleh menjadi barang dagangan mahal yang dimonopoli segelintir orang; ilmu rekayasa perangkat lunak harus dibuka selebar-lebarnya agar anak bangsa manapun bisa menjadi arsitek sistem yang unggul.', ARRAY['Di awal era 2000-an saat materi ajar pemrograman komputer dan sistem basis data masih sangat langka, mahal, dan terkunci di universitas ternama, Romi Satria Wahono melakukan revolusi ilmu terbuka. Sepulang menyelesaikan pendidikan sarjana hingga doktor di Saitama University Jepang, ia mendirikan portal IlmuKomputer.com pada 2003.', 'Portal IlmuKomputer.com membagikan ribuan artikel, tutorial, dan video rekayasa perangkat lunak secara gratis dengan lisensi terbuka. Atas inisiatifnya tersebut, Romi dianugerahi penghargaan tertinggi World Summit on the Information Society (WSIS Award) dari PBB. Melalui Brainmatics, ia juga secara konsisten melatih ratusan ribu praktisi dan akademisi IT Indonesia dengan metodologi rekayasa software presisi.', 'Bagi ratusan ribu programmer dan profesional IT tanah air yang belajar secara otodidak, Romi Satria Wahono adalah guru bangsa: sosok pendidik yang mengajarkan logika algoritma dari prinsip pertama tanpa gimik jalan pintas cepat kaya.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2003', 'PELUNCURAN ILMUKOMPUTER.COM & PENGHARGAAN PBB', 'Mendirikan portal open knowledge IlmuKomputer.com yang memenangkan World Summit Award (WSIS) dari Perserikatan Bangsa-Bangsa di Jenewa.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2012', 'PENDIRIAN BRAINMATICS & RISET SOFTWARE ENGINEERING', 'Membangun Brainmatics sebagai pusat pelatihan dan riset profesional IT terakreditasi, melahirkan kurikulum software engineering standar industri.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 — 2026', 'EDUKASI DATA MINING & AI BERBASIS LOGIKA KUAT', 'Memimpin edukasi nasional tentang machine learning, data mining saintifik, dan metodologi riset komputasi bagi ribuan dosen dan mahasiswa.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'IlmuKomputer.com (Portal Open Knowledge IT Pertama)', 'Repositori Pendidikan Komputasi Terbuka', 'Situs edukasi teknologi informasi gratis legendaris yang telah melatih jutaan talenta pemrograman dan rekayasa jaringan Indonesia.', 'https://ilmukomputer.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Brainmatics (Pusat Pelatihan & Sertifikasi IT Profesional)', 'Institusi Pengembangan Talenta Perangkat Lunak', 'Lembaga pelatihan standar industri untuk software architecture, database management, dan machine learning bersertifikasi resmi.', 'https://brainmatics.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Metodologi Riset Komputasi & Software Engineering Romi', 'Karya Akademik & Panduan Penelitian', 'Panduan terstruktur merancang penelitian sains komputer yang valid, terukur secara empiris, dan bebas dari plagiarisme ilmiah.', 'https://romisatriawahono.net', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Belajar Koding dari Logika Dasar: Mengapa Tidak Ada Jalan Pintas Menjadi Software Engineer Andal', 'SOFTWARE ENGINEERING', '7 Menit Membaca', 'Refleksi Romi Satria Wahono tentang pentingnya menguasai algoritma, struktur data, dan arsitektur sistem dibanding sekadar menghafal framework tren sesaat.', 'Framework dan bahasa pemrograman akan selalu berganti setiap beberapa tahun sekali. Namun logika berpikir algoritmik dan pemahaman mendalam atas arsitektur sistem adalah fondasi abadi yang membuat seorang insinyur perangkat lunak mampu bertahan menavigasi disrupsi teknologi apa pun.', '/artikel/romi-satria-wahono-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Revolusi Open Knowledge: Catatan 20 Tahun Membuka Pintu Akses Ilmu Komputer untuk Rakyat', 'PENDIDIKAN TERBUKA', '6 Menit Membaca', 'Kisah perjuangan mendemokratisasi modul ajar pemrograman bagi anak-anak daerah yang tidak mampu kuliah di kampus mahal.', 'Ketika ilmu pengetahuan dibagikan secara ikhlas tanpa sekat ekonomi, kita sedang menyalakan ribuan lilin harapan di pelosok nusantara. Talenta hebat bisa lahir dari mana saja, asalkan mereka diberi kesempatan dan bahan ajar yang jujur.', '/artikel/romi-satria-wahono-2', 2);
END $$;

-- Figure: Dr. Eng. Sunu Wibirama (sunu-wibirama)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'sunu-wibirama' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dr. Eng. Sunu Wibirama',
      title = 'Peneliti Human-Computer Interaction & AI Biomedis UGM',
      category = 'Pembangun Sistem',
      quote = 'Teknologi antarmuka manusia dan komputer bukan sekadar soal membuat gawai canggih yang memukau mata, melainkan bagaimana kecerdasan buatan mampu membaca kerapuhan fisik manusia dan menolongnya pulih.',
      bio_paragraphs = ARRAY['Menyelesaikan pendidikan magister dan doktor dalam bidang Human-Computer Interaction (HCI) di Tokai University Jepang, Dr. Eng. Sunu Wibirama adalah salah satu periset terdepan Indonesia yang memadukan komputasi kecerdasan buatan, pelacakan pandangan mata (eye-tracking), dan rekayasa biomedis presisi di Universitas Gadjah Mada (UGM).', 'Karya-karya riset terapan Sunu berfokus pada instrumen diagnostik kesehatan non-invasif berbiaya rendah—mulai dari deteksi dini gangguan saraf motorik pada pasien stroke, sistem pemantauan kelelahan pengemudi transportasi publik, hingga alat bantu komunikasi bagi penyandang disabilitas fisik total (ALS) menggunakan pergerakan pupil mata.', 'Sunu mendedikasikan ilmunya untuk kemanusiaan: konsisten membimbing ratusan mahasiswa rekayasa biomedis lokal dan mematenkan instrumen medis terjangkau agar rumah sakit di daerah terpencil dapat memiliki alat diagnostik berkualitas tinggi.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('sunu-wibirama', 'Dr. Eng. Sunu Wibirama', 'Peneliti Human-Computer Interaction & AI Biomedis UGM', 'Pembangun Sistem', 'Teknologi antarmuka manusia dan komputer bukan sekadar soal membuat gawai canggih yang memukau mata, melainkan bagaimana kecerdasan buatan mampu membaca kerapuhan fisik manusia dan menolongnya pulih.', ARRAY['Menyelesaikan pendidikan magister dan doktor dalam bidang Human-Computer Interaction (HCI) di Tokai University Jepang, Dr. Eng. Sunu Wibirama adalah salah satu periset terdepan Indonesia yang memadukan komputasi kecerdasan buatan, pelacakan pandangan mata (eye-tracking), dan rekayasa biomedis presisi di Universitas Gadjah Mada (UGM).', 'Karya-karya riset terapan Sunu berfokus pada instrumen diagnostik kesehatan non-invasif berbiaya rendah—mulai dari deteksi dini gangguan saraf motorik pada pasien stroke, sistem pemantauan kelelahan pengemudi transportasi publik, hingga alat bantu komunikasi bagi penyandang disabilitas fisik total (ALS) menggunakan pergerakan pupil mata.', 'Sunu mendedikasikan ilmunya untuk kemanusiaan: konsisten membimbing ratusan mahasiswa rekayasa biomedis lokal dan mematenkan instrumen medis terjangkau agar rumah sakit di daerah terpencil dapat memiliki alat diagnostik berkualitas tinggi.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2008 — 2013', 'DOKTORAL HCI DI JEPANG & RISET EYE-TRACKING', 'Meneliti interaksi visual manusia dan komputer di Tokai University, mengembangkan algoritma pelacakan pandangan mata 3D presisi tinggi.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2020', 'PENDIRIAN LAB BIOMEDIS UGM & PATEN ALAT KESEHATAN', 'Membangun laboratorium riset antarmuka biomedis di DTETI FT UGM dan mematenkan sistem deteksi kelelahan mata untuk keselamatan transportasi.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'AI DIAGNOSTIK SARAF & INSTRUMEN DISABILITAS', 'Mengembangkan perangkat bantu komunikasi bagi pasien lumpuh total dan sistem AI pembacaan citra medis retina untuk deteksi komplikasi diabetes.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sistem Eye-Tracking Diagnostik Pasien Gangguan Saraf (UGM Lab)', 'Rekayasa Biomedis & Antarmuka Manusia-Komputer', 'Alat pemantau pergerakan pupil mata berkecepatan tinggi untuk mendeteksi disfungsi neurologis dan rehabilitasi stroke secara presisi.', 'https://sunu.staff.ugm.ac.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sistem Deteksi Kelelahan Pengemudi Berbasis AI Visual', 'Teknologi Keselamatan Transportasi Cerdas', 'Sensor kamera cerdas yang membaca pola kedipan mata dan posisi kepala pengemudi bus/truk untuk mencegah kecelakaan di jalan tol.', 'https://ugm.ac.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Alat Bantu Komunikasi Pasien ALS & Lumpuh Total', 'Teknologi Asistif Disabilitas Mandiri', 'Keyboard virtual yang dikendalikan murni oleh kedipan dan arah pandang mata bagi pasien yang kehilangan kemampuan bicara dan motorik.', 'https://sunu.staff.ugm.ac.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membaca Pikiran Lewat Sorot Mata: Bagaimana AI Membantu Pasien Lumpuh Berkomunikasi Kembali', 'BIOMEDIS & AI', '7 Menit Membaca', 'Kisah haru di balik pengembangan teknologi asistif eye-tracking bagi pasien penyakit saraf ALS di Yogyakarta.', 'Ketika seseorang terkunci dalam tubuhnya sendiri yang tidak bisa digerakkan, matanya adalah satu-satunya jendela batin yang tersisa. Memberi mereka kemampuan berbicara kembali lewat sensor pandangan mata adalah momen di mana sains bertemu dengan mukjizat empati kemanusiaan.', '/artikel/sunu-wibirama-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Hilirisasi Alat Kesehatan Lokal: Memutus Ketergantungan Rumah Sakit pada Mesin Impor Mahal', 'KEDAULATAN MEDIS', '6 Menit Membaca', 'Pentingnya memproduksi instrumen biomedis di dalam negeri agar biaya pengobatan rakyat kecil tidak melambung tinggi.', 'Sebagian besar alat diagnostik di rumah sakit kita adalah barang impor dengan harga miliaran rupiah yang membebani anggaran BPJS. Memproduksi sensor medis berkualitas tinggi dengan komponen lokal adalah kunci pemerataan keadilan kesehatan.', '/artikel/sunu-wibirama-2', 2);
END $$;

-- Figure: Prof. Yohanes Surya, Ph.D. (yohanes-surya)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'yohanes-surya' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Prof. Yohanes Surya, Ph.D.',
      title = 'Fisikawan, Arsitek Pembina Tim Olimpiade Fisika Indonesia (TOFI) & Penggagas Metode Gasing',
      category = 'Pembangun Sistem',
      quote = 'Tidak ada anak yang bodoh di dunia ini; yang ada hanyalah anak yang belum mendapatkan kesempatan bertemu dengan guru yang mengajar dengan metode yang gampang, asyik, dan menyenangkan.',
      bio_paragraphs = ARRAY['Meraih gelar Ph.D dalam bidang Fisika Teoretis dari College of William and Mary di Amerika Serikat dengan prestasi gemilang, Prof. Yohanes Surya memilih kembali ke tanah air untuk membuktikan sebuah tesis berani: bahwa anak-anak Indonesia mampu mengalahkan raksasa sains dunia seperti Amerika, Rusia, dan Tiongkok di ajang International Physics Olympiad (IPhO).', 'Melalui Tim Olimpiade Fisika Indonesia (TOFI) yang ia asuh dengan disiplin dan kecintaan mendalam, Yohanes melahirkan puluhan peraih medali emas dunia, termasuk predikat Absolute Winner. Tak berhenti di panggung olimpiade elit, Yohanes kemudian mendedikasikan energinya ke daerah paling tertinggal di pelosok Papua, NTT, dan Maluku, melatih anak-anak pedalaman yang dianggap ''tidak bisa berhitung'' hingga mampu menguasai matematika kalkulus rumit dalam hitungan bulan melalui Metode GASING (Gampang, Asyik, Menyenangkan).', 'Bagi dunia pendidikan Indonesia, Yohanes Surya adalah arsitek pencetak peradaban: membuktikan secara empiris bahwa kecerdasan sains anak bangsa adalah anugerah merata yang hanya membutuhkan metode pengajaran yang memanusiakan akal dan hati.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('yohanes-surya', 'Prof. Yohanes Surya, Ph.D.', 'Fisikawan, Arsitek Pembina Tim Olimpiade Fisika Indonesia (TOFI) & Penggagas Metode Gasing', 'Pembangun Sistem', 'Tidak ada anak yang bodoh di dunia ini; yang ada hanyalah anak yang belum mendapatkan kesempatan bertemu dengan guru yang mengajar dengan metode yang gampang, asyik, dan menyenangkan.', ARRAY['Meraih gelar Ph.D dalam bidang Fisika Teoretis dari College of William and Mary di Amerika Serikat dengan prestasi gemilang, Prof. Yohanes Surya memilih kembali ke tanah air untuk membuktikan sebuah tesis berani: bahwa anak-anak Indonesia mampu mengalahkan raksasa sains dunia seperti Amerika, Rusia, dan Tiongkok di ajang International Physics Olympiad (IPhO).', 'Melalui Tim Olimpiade Fisika Indonesia (TOFI) yang ia asuh dengan disiplin dan kecintaan mendalam, Yohanes melahirkan puluhan peraih medali emas dunia, termasuk predikat Absolute Winner. Tak berhenti di panggung olimpiade elit, Yohanes kemudian mendedikasikan energinya ke daerah paling tertinggal di pelosok Papua, NTT, dan Maluku, melatih anak-anak pedalaman yang dianggap ''tidak bisa berhitung'' hingga mampu menguasai matematika kalkulus rumit dalam hitungan bulan melalui Metode GASING (Gampang, Asyik, Menyenangkan).', 'Bagi dunia pendidikan Indonesia, Yohanes Surya adalah arsitek pencetak peradaban: membuktikan secara empiris bahwa kecerdasan sains anak bangsa adalah anugerah merata yang hanya membutuhkan metode pengajaran yang memanusiakan akal dan hati.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1993 — 2006', 'MEMIMPIN TOFI & JUARA DUNIA OLIMPIADE FISIKA', 'Membina Tim Olimpiade Fisika Indonesia hingga meraih predikat Juara Umum Dunia dan Absolute Winner IPhO di Singapura dan Salamanca.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2007 — 2015', 'PENDIRIAN SURYA INSTITUTE & GERAKAN PAPUA PINTAR', 'Membangun Surya Institute dan melatih ratusan anak-anak suku pedalaman Papua dan NTT menguasai sains dan matematika hingga menembus universitas dunia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 — 2026', 'METODE GASING NASIONAL & PENGENTASAN NUMERASI', 'Mengimplementasikan pelatihan numerasi Metode GASING di ratusan kabupaten/kota di seluruh Indonesia, melatih puluhan ribu guru sekolah dasar.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Metode GASING (Gampang, Asyik, dan Menyenangkan)', 'Metodologi Pengajaran Matematika & Sains Revolusioner', 'Pendekatan pembelajaran berhitung tanpa rumus mati berbasis logika visual dan eksplorasi konkret yang mempercepat penguasaan matematika dasar.', 'https://suryainstitute.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'TOFI (Tim Olimpiade Fisika Indonesia)', 'Program Pembinaan Talenta Sains Unggul Dunia', 'Kawah candradimuka pembinaan fisika intensif yang telah menyumbangkan lebih dari 100 medali emas internasional bagi Republik Indonesia.', 'https://suryainstitute.org', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Transformasi Numerasi Daerah Tertinggal (Papua & 3T)', 'Pendidikan Pembebasan & Emansipasi Wilayah 3T', 'Inisiatif percepatan numerasi kilat bagi puluhan ribu anak-anak dan guru di pedalaman Papua, NTT, dan kepulauan terluar.', 'https://suryainstitute.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membongkar Mitos Matematika Sulit: Bagaimana Anak-Anak Pedalaman Papua Menguasai Kalkulus dalam Hitungan Bulan', 'PENDIDIKAN SAINS', '8 Menit Membaca', 'Kisah di balik keberhasilan metode GASING Yohanes Surya meruntuhkan stigma keterbelakangan kecerdasan di wilayah timur Indonesia.', 'Ketika seorang anak gagal memahami matematika di sekolah, itu bukan karena otaknya lambat, melainkan karena guru memaksanya menghafal rumus abstrak tanpa membangun pemahaman konkret terlebih dahulu. Ketika rasa takut pada angka dihilangkan dan diganti dengan permainan logika yang asyik, potensi kejeniusan anak akan meledak tanpa batas.', '/artikel/yohanes-surya-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Penonton Menjadi Juara Dunia: Pelajaran dari Kawah Candradimuka Olimpiade Fisika', 'KUALITAS TALENTA', '7 Menit Membaca', 'Filosofi pembinaan mental juara dan disiplin riset dalam menaklukkan soal-soal fisika teoretis tersulit di panggung internasional.', 'Meraih medali emas olimpiade sains bukan soal memiliki bakat bawaan sejak lahir, melainkan tentang ketahanan duduk berjam-jam membedah kerumitan persoalan dengan kesabaran tanpa batas. Ketahanan mental inilah yang harus kita wariskan kepada seluruh generasi penerus bangsa.', '/artikel/yohanes-surya-2', 2);
END $$;

COMMIT;
