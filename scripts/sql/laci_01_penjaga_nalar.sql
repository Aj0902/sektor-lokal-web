-- SQL Batch for laci_01_penjaga_nalar
BEGIN;

-- Figure: Abigail Limuria (abigail-limuria)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'abigail-limuria' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Abigail Limuria',
      title = 'Co-founder Bijak Memilih, What Is Up Indonesia (WIUI) & Penulis Buku Lalita',
      category = 'Penjaga Nalar',
      quote = 'Memilih bukan sekadar urusan mencoblos figur yang populer di linimasa, melainkan keberanian menentukan masa depan bersama lewat pembedahan rekam jejak dan sikap atas isu kebijakan riil.',
      bio_paragraphs = ARRAY['Di tengah riuhnya pemilu dan polarisasi politik digital yang kerap terjebak pada gimik sensasional, drama personal kandidat, dan perang tagar nir-makna, Abigail Limuria merasa gelisah melihat jutaan pemilih muda kebingungan menentukan arah tanpa pegangan data yang objektif. Bersama rekannya di Think Policy, ia menolak pasrah pada apatisme politik generasi muda dan memilih merintis platform Bijak Memilih.', 'Abigail mendobrak kebiasaan kampanye konvensional dengan mendekonstruksi dokumen kebijakan partai dan figur kandidat ke dalam format visual informasi yang ringkas (bite-sized data), independen, dan berbasis isu krusial, mulai dari krisis iklim, pemberantasan korupsi, hingga hak asasi manusia. Sebelumnya, lewat buku Lalita (kisah 51 perempuan inspiratif) dan platform What Is Up Indonesia (WIUI), ia telah konsisten menyuarakan literasi sipil dan kesetaraan gender dalam bahasa yang akrab dengan dinamika anak muda urban.', 'Bagi generasi muda yang muak dengan dogma politik usang, ikhtiar Abigail membuktikan bahwa aktivisme sipil di era digital tidak harus berupa orasi bising di jalanan, melainkan bisa berbentuk arsitektur informasi yang jernih, transparan, dan memberdayakan warga untuk mengambil keputusan secara merdeka.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('abigail-limuria', 'Abigail Limuria', 'Co-founder Bijak Memilih, What Is Up Indonesia (WIUI) & Penulis Buku Lalita', 'Penjaga Nalar', 'Memilih bukan sekadar urusan mencoblos figur yang populer di linimasa, melainkan keberanian menentukan masa depan bersama lewat pembedahan rekam jejak dan sikap atas isu kebijakan riil.', ARRAY['Di tengah riuhnya pemilu dan polarisasi politik digital yang kerap terjebak pada gimik sensasional, drama personal kandidat, dan perang tagar nir-makna, Abigail Limuria merasa gelisah melihat jutaan pemilih muda kebingungan menentukan arah tanpa pegangan data yang objektif. Bersama rekannya di Think Policy, ia menolak pasrah pada apatisme politik generasi muda dan memilih merintis platform Bijak Memilih.', 'Abigail mendobrak kebiasaan kampanye konvensional dengan mendekonstruksi dokumen kebijakan partai dan figur kandidat ke dalam format visual informasi yang ringkas (bite-sized data), independen, dan berbasis isu krusial, mulai dari krisis iklim, pemberantasan korupsi, hingga hak asasi manusia. Sebelumnya, lewat buku Lalita (kisah 51 perempuan inspiratif) dan platform What Is Up Indonesia (WIUI), ia telah konsisten menyuarakan literasi sipil dan kesetaraan gender dalam bahasa yang akrab dengan dinamika anak muda urban.', 'Bagi generasi muda yang muak dengan dogma politik usang, ikhtiar Abigail membuktikan bahwa aktivisme sipil di era digital tidak harus berupa orasi bising di jalanan, melainkan bisa berbentuk arsitektur informasi yang jernih, transparan, dan memberdayakan warga untuk mengambil keputusan secara merdeka.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2020', 'PELUNCURAN BUKU LALITA & WIUI', 'Menulis buku Lalita: 51 Cerita Perempuan Hebat Indonesia bersama Grace Kadiman dan mendirikan media What Is Up Indonesia untuk menyajikan isu sosial-politik dalam format visual berbahasa Inggris bagi diaspora dan generasi muda.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023', 'KELAHIRAN BIJAK MEMILIH', 'Menginisiasi gerakan independen bersama Think Policy, membedah manifesto partai politik dan rekam jejak legislatif menjelang Pemilu 2024 tanpa berafiliasi dengan paslon manapun.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2024 - 2026', 'EKOSISTEM LITERASI KEBIJAKAN MUDA', 'Memperluas jangkauan edukasi kebijakan publik ke kampus-kampus dan komunitas lokal di berbagai provinsi, memberdayakan jutaan pemilih pemula agar melek data kebijakan.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Bijak Memilih (Platform Riset Politik Warga)', 'Civic-Tech & Data Kebijakan', 'Platform agregasi data rekam jejak partai politik dan kandidat yang diakses jutaan pemilih muda untuk melihat sikap partai terhadap isu iklim, korupsi, dan ketenagakerjaan.', 'https://bijakmemilih.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Lalita (51 Cerita Perempuan Hebat Indonesia)', 'Karya Tulis & Literasi Gender', 'Buku antologi profil perempuan pelopor Nusantara lintas disiplin dari seni, sains, hingga aktivisme lingkungan hidup.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'What Is Up Indonesia (WIUI)', 'Media Jurnalisme Independen', 'Kanal informasi alternatif berbasis media sosial yang menerjemahkan dinamika politik Indonesia ke dalam konteks global yang lugas dan berimbang.', 'https://whatisupindonesia.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mendekonstruksi Gimik Politik: Bagaimana Gen-Z Bisa Menguji Janji Kampanye Lewat Rekam Jejak Data', 'LITERASI KEBIJAKAN', '6 Menit Membaca', 'Mengapa menuntut transparansi rekam jejak partai politik adalah satu-satunya benteng melawan manipulasi pemilu di era algoritma.', 'Setiap lima tahun sekali, panggung politik kita dipenuhi tarian gimik, janji manis, dan baliho raksasa yang menutupi pohon-pohon kota. Namun di balik riuhnya pesta demokrasi, substansi kebijakan yang menyangkut hidup jutaan warga sering kali luput dibicarakan. Abigail Limuria dan tim Bijak Memilih membuktikan bahwa ketika data diurai secara jernih berdasarkan isu riil, seperti krisis iklim dan korupsi, pemilih muda memiliki kekuatan nalar luar biasa untuk menentukan arah bangsanya secara bermartabat.', '/artikel/abigail-limuria-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menolak Terjebak Polarisasi: Mengapa Isu Krisis Iklim Harus Menjadi Ujian Terberat Partai Politik', 'DIALEKTIKA WARGA', '7 Menit Membaca', 'Bagaimana membedah komitmen ekologis partai politik di balik retorika ekonomi ekstraktif yang mengorbankan ruang hidup rakyat.', 'Politik bukan sekadar siapa yang memegang kursi kekuasaan, melainkan kebijakan apa yang akan diputuskan saat hutan dibabat dan banjir menenggelamkan pemukiman warga. Melalui pembedahan sikap fraksi di parlemen, literasi politik independen menjadi instrumen warga untuk menagih pertanggungjawaban etis dari setiap pembuat undang-undang.', '/artikel/abigail-limuria-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Bijak Memilih (Platform Riset Politik Warga)', 'Civic-Tech & Data Kebijakan', 'Platform agregasi data rekam jejak partai politik dan kandidat yang diakses jutaan pemilih muda untuk melihat sikap partai terhadap isu iklim, korupsi, dan ketenagakerjaan.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://bijakmemilih.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Lalita (51 Cerita Perempuan Hebat Indonesia)', 'Karya Tulis & Literasi Gender', 'Buku antologi profil perempuan pelopor Nusantara lintas disiplin dari seni, sains, hingga aktivisme lingkungan hidup.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Bivitri Susanti (bivitri-susanti)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'bivitri-susanti' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Bivitri Susanti',
      title = 'Pakar Hukum Tata Negara, Co-founder PSHK & Dosen STHI Jentera',
      category = 'Penjaga Nalar',
      quote = 'Hukum yang kehilangan etika dan integritas bukan lagi instrumen keadilan, melainkan senjata bagi penguasa untuk melegitimasi kesewenang-wenangan secara legalistik.',
      bio_paragraphs = ARRAY['Ketika manipulasi hukum (autocratic legalism) kian marak digunakan oleh penguasa untuk memuluskan kepentingan dinasti dan pelemahan lembaga demokrasi, Bivitri Susanti hadir sebagai salah satu suara akademisi hukum paling lantang dan tanpa kompromi di Republik ini. Sebagai alumnus Fakultas Hukum UI dan peraih gelar doktor dari University of Washington, ia menolak menutup mata di balik menara gading kampus.', 'Bersama rekan-rekannya, Bivitri mendirikan Pusat Studi Hukum dan Kebijakan Indonesia (PSHK) serta Sekolah Tinggi Hukum Indonesia (STHI) Jentera, sebuah institusi pendidikan hukum yang dirancang khusus untuk mencetak pendekar hukum yang berpihak pada keadilan warga, bukan sekadar pelayan birokrasi korporasi. Keterlibatannya dalam film dokumenter investigasi Dirty Vote membongkar secara telanjang bagaimana instrumen negara disalahgunakan demi mempertahankan kekuasaan.', 'Bagi warga sipil dan generasi muda, ketajaman analisis Bivitri mengajarkan hal paling fundamental: bahwa undang-undang bukanlah kitab suci yang kebal kritik, dan kewarganegaraan yang berdaulat menuntut keberanian untuk terus menguji apakah hukum masih berpihak pada rakyat banyak.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('bivitri-susanti', 'Bivitri Susanti', 'Pakar Hukum Tata Negara, Co-founder PSHK & Dosen STHI Jentera', 'Penjaga Nalar', 'Hukum yang kehilangan etika dan integritas bukan lagi instrumen keadilan, melainkan senjata bagi penguasa untuk melegitimasi kesewenang-wenangan secara legalistik.', ARRAY['Ketika manipulasi hukum (autocratic legalism) kian marak digunakan oleh penguasa untuk memuluskan kepentingan dinasti dan pelemahan lembaga demokrasi, Bivitri Susanti hadir sebagai salah satu suara akademisi hukum paling lantang dan tanpa kompromi di Republik ini. Sebagai alumnus Fakultas Hukum UI dan peraih gelar doktor dari University of Washington, ia menolak menutup mata di balik menara gading kampus.', 'Bersama rekan-rekannya, Bivitri mendirikan Pusat Studi Hukum dan Kebijakan Indonesia (PSHK) serta Sekolah Tinggi Hukum Indonesia (STHI) Jentera, sebuah institusi pendidikan hukum yang dirancang khusus untuk mencetak pendekar hukum yang berpihak pada keadilan warga, bukan sekadar pelayan birokrasi korporasi. Keterlibatannya dalam film dokumenter investigasi Dirty Vote membongkar secara telanjang bagaimana instrumen negara disalahgunakan demi mempertahankan kekuasaan.', 'Bagi warga sipil dan generasi muda, ketajaman analisis Bivitri mengajarkan hal paling fundamental: bahwa undang-undang bukanlah kitab suci yang kebal kritik, dan kewarganegaraan yang berdaulat menuntut keberanian untuk terus menguji apakah hukum masih berpihak pada rakyat banyak.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1998 - 2000', 'REFORMASI & PENDIRIAN PSHK', 'Turun dalam gelombang reformasi 1998 dan mendirikan Pusat Studi Hukum dan Kebijakan Indonesia (PSHK) untuk mengawal reformasi konstitusi dan peradilan.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2011 - 2015', 'PENDIRIAN STHI JENTERA', 'Memelopori pendirian Sekolah Tinggi Hukum Indonesia Jentera guna mereformasi kurikulum pendidikan hukum berbasis etika, integritas, dan advokasi publik pro bono.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2024 - 2026', 'INVESTIGASI DIRTY VOTE & ADVOKASI KONSTITUSI', 'Menjadi narasumber kunci dalam film dokumenter investigasi Dirty Vote yang ditonton puluhan juta warga, membedah kecurangan pemilu struktural dan pembajakan mahkamah konstitusi.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'PSHK (Pusat Studi Hukum & Kebijakan Indonesia)', 'Lembaga Riset & Advokasi Reformasi Hukum', 'Think tank independen yang memproduksi analisis kritis rancangan undang-undang dan pengawasan kinerja legislasi parlemen.', 'https://pshk.or.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'STHI Jentera (Sekolah Tinggi Hukum Indonesia)', 'Institusi Pendidikan Hukum Transformatif', 'Kampus hukum alternatif yang mendidik praktisi dan akademisi hukum berintegritas tinggi dengan beasiswa penuh bagi aktivis masyarakat sipil.', 'https://jentera.ac.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Dokumenter Investigasi: Dirty Vote', 'Karya Audio-Visual & Pendidikan Publik', 'Film dokumenter independen yang mengungkap anatomi manipulasi hukum tata negara dan penggunaan instrumen kekuasaan dalam pemilu.', 'https://youtube.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Autocratic Legalism: Bagaimana Penguasa Menggunakan Pasal Hukum untuk Membungkam Demokrasi', 'HUKUM TATA NEGARA', '8 Menit Membaca', 'Membedah cara kerja otoritarianisme baru yang tidak lagi memakai moncong senjata, melainkan manipulasi pasal regulasi dan mahkamah peradilan.', 'Otoritarianisme modern telah bermutasi. Penguasa hari ini tidak perlu lagi membubarkan parlemen dengan dekrit militer; mereka cukup menyusun undang-undang kilat di tengah malam, melumpuhkan komisi antikorupsi lewat revisi regulasi, dan menempatkan kroni di mahkamah konstitusi. Bivitri Susanti mengingatkan kita bahwa ketika hukum telah dibajak menjadi alat kekuasaan, kepatuhan buta adalah bentuk pengkhianatan terhadap keadilan sejati.', '/artikel/bivitri-susanti-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Etika Bernegara yang Hilang: Mengapa Mahkamah Konstitusi Harus Direbut Kembali oleh Rakyat', 'KONSTITUSI & ETIKA', '7 Menit Membaca', 'Refleksi kritis atas runtuhnya marwah penjaga konstitusi dan bagaimana gerakan warga sipil bisa merawat api perlawanan moral.', 'Negara hukum tanpa etika hanyalah kesewenang-wenangan yang dilegalkan di atas kertas bersegel. Memulihkan marwah konstitusi bukanlah pekerjaan instan di meja politisi, melainkan gerakan panjang warga sipil terdidik yang menolak dinormalisasi oleh kepalsuan hukum prosedural.', '/artikel/bivitri-susanti-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'PSHK (Pusat Studi Hukum & Kebijakan Indonesia)', 'Lembaga Riset & Advokasi Reformasi Hukum', 'Think tank independen yang memproduksi analisis kritis rancangan undang-undang dan pengawasan kinerja legislasi parlemen.', 'Riset Independen & Pro-Bono', 'Dukung Inisiatif', 'https://pshk.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'STHI Jentera (Sekolah Tinggi Hukum Indonesia)', 'Institusi Pendidikan Hukum Transformatif', 'Kampus hukum alternatif yang mendidik praktisi dan akademisi hukum berintegritas tinggi dengan beasiswa penuh bagi aktivis masyarakat sipil.', 'Program Sarjana & Beasiswa Penuh', 'Dukung Inisiatif', 'https://jentera.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Dandhy Dwi Laksono (dandhy-dwi-laksono)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'dandhy-dwi-laksono' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dandhy Dwi Laksono',
      title = 'Jurnalis Investigasi, Pendiri Watchdoc & Penggagas Ekspedisi Indonesia Baru',
      category = 'Penjaga Nalar',
      quote = 'Jurnalisme investigasi bukan sekadar memberitakan peristiwa di permukaan, melainkan keberanian berpihak pada rakyat tertindas dan mengusik rasa nyaman kekuasaan yang lalim.',
      bio_paragraphs = ARRAY['Dandhy Dwi Laksono adalah jurnalis investigasi independen yang memilih keluar dari kemapanan industri televisi komersial demi melahirkan jurnalisme audio-visual yang mengakar pada realitas penderitaan rakyat. Melalui rumah produksi Watchdoc Documentary, Dandhy membuktikan bahwa karya dokumenter berdaya dobrak tinggi bisa diproduksi secara mandiri di bawah model koperasi pekerja media.', 'Karya-karyanya, mulai dari Samin vs Semen, Sexy Killers, Rayuan Pulau Palsu, hingga Ekspedisi Indonesia Baru (perjalanan keliling nusantara menggunakan sepeda motor), menjadi saksi bisu atas perampasan ruang hidup petani, perusakan hutan oleh oligarki tambang batu bara, dan luka sejarah Papua. Film-filmnya diputar swadaya di ribuan pos ronda, balai desa, pematang sawah, dan kampus tanpa bergantung pada jaringan bioskop korporasi.', 'Bagi generasi muda, konsistensi Dandhy selama puluhan tahun adalah kompas moral jurnalisme presisi: bahwa kamera dan pena adalah senjata perlawanan warga untuk menolak tunduk pada pembodohan publik dan represi kekuasaan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('dandhy-dwi-laksono', 'Dandhy Dwi Laksono', 'Jurnalis Investigasi, Pendiri Watchdoc & Penggagas Ekspedisi Indonesia Baru', 'Penjaga Nalar', 'Jurnalisme investigasi bukan sekadar memberitakan peristiwa di permukaan, melainkan keberanian berpihak pada rakyat tertindas dan mengusik rasa nyaman kekuasaan yang lalim.', ARRAY['Dandhy Dwi Laksono adalah jurnalis investigasi independen yang memilih keluar dari kemapanan industri televisi komersial demi melahirkan jurnalisme audio-visual yang mengakar pada realitas penderitaan rakyat. Melalui rumah produksi Watchdoc Documentary, Dandhy membuktikan bahwa karya dokumenter berdaya dobrak tinggi bisa diproduksi secara mandiri di bawah model koperasi pekerja media.', 'Karya-karyanya, mulai dari Samin vs Semen, Sexy Killers, Rayuan Pulau Palsu, hingga Ekspedisi Indonesia Baru (perjalanan keliling nusantara menggunakan sepeda motor), menjadi saksi bisu atas perampasan ruang hidup petani, perusakan hutan oleh oligarki tambang batu bara, dan luka sejarah Papua. Film-filmnya diputar swadaya di ribuan pos ronda, balai desa, pematang sawah, dan kampus tanpa bergantung pada jaringan bioskop korporasi.', 'Bagi generasi muda, konsistensi Dandhy selama puluhan tahun adalah kompas moral jurnalisme presisi: bahwa kamera dan pena adalah senjata perlawanan warga untuk menolak tunduk pada pembodohan publik dan represi kekuasaan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2009 - 2011', 'PENDIRIAN WATCHDOC DOCUMENTARY', 'Mendirikan Watchdoc bersama Andhy Panca Kurniawan sebagai rumah produksi dokumenter independen berbadan hukum koperasi pekerja media.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2019', 'EKSPEDISI INDONESIA BIRU & SEXY KILLERS', 'Mengelilingi Indonesia dengan sepeda motor merekam konflik agraria, melahirkan dokumenter Sexy Killers yang ditonton lebih dari 35 juta kali dan mengubah wacana energi nasional.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'RAMON MAGSAYSAY AWARD & EKSPEDISI INDONESIA BARU', 'Menerima penghargaan prestisius Ramon Magsaysay Award 2021 atas nama Watchdoc dan meluncurkan Ekspedisi Indonesia Baru memotret ekonomi sirkular dan ketahanan warga pelosok.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Watchdoc Documentary Maker', 'Koperasi Jurnalisme Investigasi Audio-Visual', 'Rumah produksi dokumenter independen yang telah memproduksi lebih dari 200 film investigasi lingkungan, agraria, dan hak asasi manusia.', 'https://watchdoc.co.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Dokumenter: Sexy Killers', 'Film Investigasi Oligarki & Energi', 'Investigasi keterkaitan antara tambang batu bara di Kalimantan, PLTU di Pulau Jawa, dan gurita bisnis elit politik nasional.', 'https://youtube.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Ekspedisi Indonesia Baru', 'Riset Penjelajahan & Ekonomi Komunal', 'Perjalanan dokumentasi keliling Nusantara memetakan kearifan lokal, energi terbarukan mandiri desa, dan kedaulatan pangan warga adat.', 'https://indonesiabaru.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Layar Tancap di Pematang Sawah: Mengapa Distribusi Terbuka Adalah Nyawa Jurnalisme Independen', 'JURNALISME WARGA', '8 Menit Membaca', 'Catatan refleksi Dandhy Laksono tentang bagaimana lisensi terbuka (Creative Commons) meruntuhkan monopoli informasi korporasi.', 'Ketika media arus utama disandera kepentingan konglomerasi pemilik frekuensi publik, dokumenter investigasi harus menemukan jalannya sendiri menuju rakyat. Memutar film di balai desa diiringi singkong rebus dan kopi tubruk warga adalah bentuk perayaan kedaulatan informasi yang sesungguhnya.', '/artikel/dandhy-dwi-laksono-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghitung Harga Nyata Batu Bara: Dari Debu PLTU hingga Hancurnya Ruang Hidup Petani', 'INVESTIGASI EKOLOGI', '9 Menit Membaca', 'Pembedahan mendalam atas biaya ekologis dan kemanusiaan di balik kemilau ekspor komoditas ekstraktif nasional.', 'Listrik yang menyalakan gemerlap kota-kota megapolitan sering kali dibayar mahal dengan hancurnya paru-paru anak-anak di dekat cerobong PLTU dan lubang-lubang maut bekas tambang yang ditinggalkan begitu saja. Jurnalisme hadir untuk memastikan luka tersebut tidak pernah terhapus dari ingatan kolektif bangsa.', '/artikel/dandhy-dwi-laksono-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Watchdoc Documentary Maker', 'Koperasi Jurnalisme Investigasi Audio-Visual', 'Rumah produksi dokumenter independen yang telah memproduksi lebih dari 200 film investigasi lingkungan, agraria, dan hak asasi manusia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://watchdoc.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Dokumenter: Sexy Killers', 'Film Investigasi Oligarki & Energi', 'Investigasi keterkaitan antara tambang batu bara di Kalimantan, PLTU di Pulau Jawa, dan gurita bisnis elit politik nasional.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Dr. Fahruddin Faiz (fahruddin-faiz)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'fahruddin-faiz' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dr. Fahruddin Faiz',
      title = 'Dosen Filsafat UIN Sunan Kalijaga & Pengampu Ngaji Filsafat Masjid Jendral Sudirman',
      category = 'Penjaga Nalar',
      quote = 'Filsafat bukan untuk membuatmu merasa lebih tinggi atau lebih pintar dari orang lain, melainkan instrumen agar batinmu lebih jernih, bijaksana, dan tidak mudah menghakimi sesama.',
      bio_paragraphs = ARRAY['Di tengah stigma bahwa filsafat adalah ilmu rumit yang menyesatkan atau elitis, Dr. Fahruddin Faiz mengambil jalan yang sangat unik dan teduh: membawa diskursus filsafat barat dan timur ke dalam serambi masjid. Sejak 2013, ia mengampu forum mingguan Ngaji Filsafat di Masjid Jendral Sudirman Yogyakarta secara gratis, terbuka, dan inklusif bagi siapa saja.', 'Dengan gaya tutur berbahasa Jawa-Indonesia yang tenang, penuh analogi keseharian, dan diselingi senyum santun, Fahruddin Faiz membedah pemikiran para filsuf besar, dari Socrates, Al-Ghazali, Rumi, Marcus Aurelius, hingga Jean-Paul Sartre. Rekaman kajiannya yang disebarluaskan secara sukarela di platform digital telah didengar oleh jutaan generasi muda yang sedang mengalami krisis eksistensial, kecemasan mental, dan kejenuhan atas kepalsuan media sosial.', 'Bagi anak muda di era disrupsi, Fahruddin Faiz adalah oase intelektual dan spiritual: mengajarkan bahwa berpikir kritis tidak harus diiringi kesombongan, dan kebijaksanaan hidup selalu berakar pada kerendahan hati untuk terus belajar menata diri sendiri.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('fahruddin-faiz', 'Dr. Fahruddin Faiz', 'Dosen Filsafat UIN Sunan Kalijaga & Pengampu Ngaji Filsafat Masjid Jendral Sudirman', 'Penjaga Nalar', 'Filsafat bukan untuk membuatmu merasa lebih tinggi atau lebih pintar dari orang lain, melainkan instrumen agar batinmu lebih jernih, bijaksana, dan tidak mudah menghakimi sesama.', ARRAY['Di tengah stigma bahwa filsafat adalah ilmu rumit yang menyesatkan atau elitis, Dr. Fahruddin Faiz mengambil jalan yang sangat unik dan teduh: membawa diskursus filsafat barat dan timur ke dalam serambi masjid. Sejak 2013, ia mengampu forum mingguan Ngaji Filsafat di Masjid Jendral Sudirman Yogyakarta secara gratis, terbuka, dan inklusif bagi siapa saja.', 'Dengan gaya tutur berbahasa Jawa-Indonesia yang tenang, penuh analogi keseharian, dan diselingi senyum santun, Fahruddin Faiz membedah pemikiran para filsuf besar, dari Socrates, Al-Ghazali, Rumi, Marcus Aurelius, hingga Jean-Paul Sartre. Rekaman kajiannya yang disebarluaskan secara sukarela di platform digital telah didengar oleh jutaan generasi muda yang sedang mengalami krisis eksistensial, kecemasan mental, dan kejenuhan atas kepalsuan media sosial.', 'Bagi anak muda di era disrupsi, Fahruddin Faiz adalah oase intelektual dan spiritual: mengajarkan bahwa berpikir kritis tidak harus diiringi kesombongan, dan kebijaksanaan hidup selalu berakar pada kerendahan hati untuk terus belajar menata diri sendiri.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013', 'AWAL MULA NGAJI FILSAFAT', 'Memulai sesi pertama Ngaji Filsafat di serambi Masjid Jendral Sudirman Yogyakarta bersama segelintir mahasiswa pencari kebenaran.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 - 2020', 'GELOMBANG DIGITAL & OASE GENERASI MUDA', 'Rekaman kajian menyebar masif di Spotify dan YouTube, menjadikan filsafat sebagai rujukan kesehatan mental dan pencarian makna hidup bagi jutaan anak muda Indonesia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'PUBLIKASI KARYA & DIPLOMASI KEARIFAN', 'Menerbitkan belasan buku filsafat terapan seperti Menjadi Manusia, Menata Jiwa, dan Ihwal Sesat Pikir, memperkuat fondasi nalar sehat di masyarakat akar rumput.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Ngaji Filsafat Masjid Jendral Sudirman', 'Forum Literasi Intelektual & Kebijaksanaan Publik', 'Kajian filsafat terbuka gratis yang telah berlangsung lebih dari satu dekade dengan arsip ratusan tema pemikiran dunia.', 'https://mjsshow.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Menjadi Manusia, Menata Jiwa', 'Karya Tulis & Filsafat Terapan', 'Buku panduan reflektif yang mengawinkan kebijaksanaan tasawuf dengan pemikiran kritis filsafat dalam menavigasi luka batin dan kegelisahan modern.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Ihwal Sesat Pikir (Fallacy Intelektual)', 'Panduan Logika & Nalar Sehat', 'Karya edukatif membedah ragam bias kognitif dan kerancuan berpikir yang sering menjebak debat publik di media sosial.', 'https://www.gramedia.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menenangkan Batin di Tengah Kegaduhan: Mengapa Filsafat Stoik dan Tasawuf Relevan untuk Generasi Cemas', 'FILSAFAT & REFLEKSI', '7 Menit Membaca', 'Menelusuri titik temu antara konsep pengendalian diri Marcus Aurelius dan ketenangan jiwa tasawuf Al-Ghazali.', 'Kecemasan manusia modern kerap lahir dari ketidakmampuan membedakan antara apa yang bisa kita kendalikan dan apa yang berada di luar jangkauan kita. Dr. Fahruddin Faiz mengajak kita melihat bahwa kebijaksanaan sejati bukanlah kemampuan menguasai dunia luar, melainkan kemampuan menaklukkan ego dan hawa nafsu di dalam diri sendiri.', '/artikel/fahruddin-faiz-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Bebas dari Jebakan Sesat Pikir: Menjaga Kejernihan Nalar di Era Algoritma Adu Domba', 'LOGIKA & DIALEKTIKA', '6 Menit Membaca', 'Panduan sederhana mengenali argumentum ad hominem dan false dilemma dalam percakapan publik sehari-hari.', 'Ketika perdebatan di media sosial lebih didominasi oleh cacian personal daripada pengujian premis data, nalar publik sedang mengalami krisis berat. Mengasah logika bukanlah untuk memenangkan adu mulut, melainkan untuk menjaga agar pikiran kita tidak mudah diracuni oleh kebencian.', '/artikel/fahruddin-faiz-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Ngaji Filsafat Masjid Jendral Sudirman', 'Forum Literasi Intelektual & Kebijaksanaan Publik', 'Kajian filsafat terbuka gratis yang telah berlangsung lebih dari satu dekade dengan arsip ratusan tema pemikiran dunia.', 'Bebas Biaya (Akses Publik)', 'Dukung Inisiatif', 'https://mjsshow.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Menjadi Manusia, Menata Jiwa', 'Karya Tulis & Filsafat Terapan', 'Buku panduan reflektif yang mengawinkan kebijaksanaan tasawuf dengan pemikiran kritis filsafat dalam menavigasi luka batin dan kegelisahan modern.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Aribowo Sasmito (aribowo-sasmito)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'aribowo-sasmito' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Aribowo Sasmito',
      title = 'Co-founder & Fact-Check Specialist MAFINDO (Masyarakat Anti Fitnah Indonesia)',
      category = 'Penjaga Nalar',
      quote = 'Di tengah banjir hoaks dan polarisasi algoritma buatan, verifikasi fakta saintifik adalah benteng pertahanan terakhir yang menjaga kewarasan akal sehat bangsa.',
      bio_paragraphs = ARRAY['Ketika gelombang disinformasi, fitnah politik, dan rekayasa kecerdasan buatan (deepfake) mengancam kohesi sosial dan perdamaian di Indonesia, Aribowo Sasmito mendedikasikan hidupnya di garis depan pemeriksaan fakta. Sebagai salah satu pendiri MAFINDO (Masyarakat Anti Fitnah Indonesia), ia memimpin jejaring ribuan relawan cek fakta dari Aceh hingga Papua.', 'Aribowo mengembangkan platform TurnBackHoax.id yang menjadi basis data klarifikasi hoaks terbesar dan paling terpercaya di Indonesia. Kerja kerasnya memastikan bahwa setiap klaim bohong, mulai dari teori konspirasi kesehatan, rekayasa penipuan finansial, hingga manipulasi dokumen pemilu, dibongkar dengan metodologi saintifik terakreditasi International Fact-Checking Network (IFCN).', 'Bagi masyarakat yang hidup di era banjir informasi, Aribowo adalah lentera penjaga nalar: membimbing generasi digital agar memiliki otot skeptisisme metodis, selalu menguji kebenaran sebelum membagikan informasi.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('aribowo-sasmito', 'Aribowo Sasmito', 'Co-founder & Fact-Check Specialist MAFINDO (Masyarakat Anti Fitnah Indonesia)', 'Penjaga Nalar', 'Di tengah banjir hoaks dan polarisasi algoritma buatan, verifikasi fakta saintifik adalah benteng pertahanan terakhir yang menjaga kewarasan akal sehat bangsa.', ARRAY['Ketika gelombang disinformasi, fitnah politik, dan rekayasa kecerdasan buatan (deepfake) mengancam kohesi sosial dan perdamaian di Indonesia, Aribowo Sasmito mendedikasikan hidupnya di garis depan pemeriksaan fakta. Sebagai salah satu pendiri MAFINDO (Masyarakat Anti Fitnah Indonesia), ia memimpin jejaring ribuan relawan cek fakta dari Aceh hingga Papua.', 'Aribowo mengembangkan platform TurnBackHoax.id yang menjadi basis data klarifikasi hoaks terbesar dan paling terpercaya di Indonesia. Kerja kerasnya memastikan bahwa setiap klaim bohong, mulai dari teori konspirasi kesehatan, rekayasa penipuan finansial, hingga manipulasi dokumen pemilu, dibongkar dengan metodologi saintifik terakreditasi International Fact-Checking Network (IFCN).', 'Bagi masyarakat yang hidup di era banjir informasi, Aribowo adalah lentera penjaga nalar: membimbing generasi digital agar memiliki otot skeptisisme metodis, selalu menguji kebenaran sebelum membagikan informasi.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2016', 'GERAKAN FORUM ANTI FITNAH & PENDIRIAN MAFINDO', 'Mengorganisir forum relawan pemeriksa fakta melawan sentimen SARA dan meresmikan Masyarakat Anti Fitnah Indonesia (MAFINDO) sebagai organisasi berbadan hukum.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2020', 'AKREDITASI IFCN & COALITION CHECK FAKTA', 'Membawa MAFINDO meraih sertifikasi internasional IFCN dan memelopori koalisi CekFakta.com bersama puluhan media independen nasional.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'BENTENG PENANGKAL HOAKS AI & LITERASI DIGITAL', 'Memimpin riset dan modul pelatihan deteksi disinformasi berbasis kecerdasan buatan, melatih ratusan ribu lansia, ibu rumah tangga, dan pelajar di pelosok daerah.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'TurnBackHoax.id (Database Klarifikasi Fakta Terbesar)', 'Platform Verifikasi Fakta & Civic-Tech', 'Repositori terbuka verifikasi fakta dengan puluhan ribu arsip klarifikasi hoaks yang menjadi rujukan jurnalis dan aparat penegak hukum.', 'https://turnbackhoax.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'CekFakta.com (Koalisi Cek Fakta Kolaboratif)', 'Kolaborasi Media & Masyarakat Sipil', 'Jaringan pemeriksa fakta kolaboratif lintas redaksi media nasional dan komunitas sipil di bawah naungan AJI, AMSI, dan MAFINDO.', 'https://cekfakta.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Modul Literasi Kritis & Deteksi Disinformasi AI', 'Kurikulum Pendidikan Digital Warga', 'Modul ajar publik untuk mengidentifikasi rekayasa audio-visual generative AI, phishing, dan bot manipulasi politik.', 'https://mafindo.or.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Anatomi Industri Hoaks: Mengapa Kebohongan Bergerak Enam Kali Lebih Cepat dari Fakta?', 'LITERASI DIGITAL', '7 Menit Membaca', 'Analisis saintifik tentang bagaimana algoritma media sosial memonetisasi kemarahan dan bias kognitif manusia.', 'Hoaks tidak lahir di ruang hampa; ia diproduksi secara terstruktur untuk mengeksploitasi rasa takut dan kecemasan warga. Aribowo Sasmito membedah bahwa senjata paling ampuh melawan disinformasi bukanlah sensor represif negara, melainkan daya kritis warga untuk menolak menjadi penyambung lidah kebohongan.', '/artikel/aribowo-sasmito-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mendeteksi Deepfake dan Rekayasa AI: Panduan Bertahan Hidup di Era Kembaran Digital Palsu', 'SAINS & TEKNOLOGI', '6 Menit Membaca', 'Teknik forensik sederhana membedakan rekaman video/suara asli dengan manipulasi algoritma kecerdasan buatan.', 'Di masa depan di mana suara dan wajah siapa pun dapat dipalsukan hanya dalam hitungan detik, mata telanjang tidak lagi cukup. Memverifikasi metadata dan rantai sumber adalah keterampilan bertahan hidup paling mendasar bagi generasi digital.', '/artikel/aribowo-sasmito-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'TurnBackHoax.id (Database Klarifikasi Fakta Terbesar)', 'Platform Verifikasi Fakta & Civic-Tech', 'Repositori terbuka verifikasi fakta dengan puluhan ribu arsip klarifikasi hoaks yang menjadi rujukan jurnalis dan aparat penegak hukum.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://turnbackhoax.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'CekFakta.com (Koalisi Cek Fakta Kolaboratif)', 'Kolaborasi Media & Masyarakat Sipil', 'Jaringan pemeriksa fakta kolaboratif lintas redaksi media nasional dan komunitas sipil di bawah naungan AJI, AMSI, dan MAFINDO.', '100% Akses Publik Bebas', 'Dukung Inisiatif', 'https://cekfakta.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Yanuar Nugroho, Ph.D. (yanuar-nugroho)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'yanuar-nugroho' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Yanuar Nugroho, Ph.D.',
      title = 'Peneliti Kebijakan Publik, Koordinator Penasihat KSP (2015 - 2019) & Co-founder Nalar Institute',
      category = 'Penjaga Nalar',
      quote = 'Kebijakan publik yang tidak berlandaskan data empiris dan sains adalah bentuk kezaliman teknokratis yang mempertaruhkan nasib jutaan rakyat miskin.',
      bio_paragraphs = ARRAY['Menggabungkan kecermatan akademis global dengan pengalaman membedah labirin birokrasi istana, Yanuar Nugroho adalah salah satu pemikir kebijakan publik paling berpengaruh di Indonesia. Meraih gelar Ph.D dari University of Manchester dan berkarier sebagai peneliti inovasi sosial, Yanuar terpanggil pulang untuk mengabdi sebagai Deputi II Kantor Staf Presiden (KSP) 2015 - 2019.', 'Di dalam birokrasi, Yanuar berjuang keras menanamkan tradisi Evidence-Based Policy, memastikan bahwa setiap keputusan pembangunan negara, mulai dari dana desa hingga bantuan sosial, dirancang berdasarkan riset saintifik dan data lapangan yang solid, bukan sekadar kompromi politisi transaksional. Melalui Nalar Institute dan Centre for Innovation Policy and Governance (CIPG), ia terus membina ekosistem think tank independen di tanah air.', 'Bagi generasi muda yang ingin membawa perubahan struktural, Yanuar adalah teladan teknokrat berintegritas: membuktikan bahwa kritik terhadap negara harus disertai penguasaan data yang presisi dan arsitektur solusi yang dapat dieksekusi secara nyata.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('yanuar-nugroho', 'Yanuar Nugroho, Ph.D.', 'Peneliti Kebijakan Publik, Koordinator Penasihat KSP (2015 - 2019) & Co-founder Nalar Institute', 'Penjaga Nalar', 'Kebijakan publik yang tidak berlandaskan data empiris dan sains adalah bentuk kezaliman teknokratis yang mempertaruhkan nasib jutaan rakyat miskin.', ARRAY['Menggabungkan kecermatan akademis global dengan pengalaman membedah labirin birokrasi istana, Yanuar Nugroho adalah salah satu pemikir kebijakan publik paling berpengaruh di Indonesia. Meraih gelar Ph.D dari University of Manchester dan berkarier sebagai peneliti inovasi sosial, Yanuar terpanggil pulang untuk mengabdi sebagai Deputi II Kantor Staf Presiden (KSP) 2015 - 2019.', 'Di dalam birokrasi, Yanuar berjuang keras menanamkan tradisi Evidence-Based Policy, memastikan bahwa setiap keputusan pembangunan negara, mulai dari dana desa hingga bantuan sosial, dirancang berdasarkan riset saintifik dan data lapangan yang solid, bukan sekadar kompromi politisi transaksional. Melalui Nalar Institute dan Centre for Innovation Policy and Governance (CIPG), ia terus membina ekosistem think tank independen di tanah air.', 'Bagi generasi muda yang ingin membawa perubahan struktural, Yanuar adalah teladan teknokrat berintegritas: membuktikan bahwa kritik terhadap negara harus disertai penguasaan data yang presisi dan arsitektur solusi yang dapat dieksekusi secara nyata.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2008 - 2014', 'RISET INTERNASIONAL DI MANCHESTER', 'Menjadi pengajar dan periset senior di Manchester Institute of Innovation Research, meneliti dinamika media sosial, inovasi teknologi, dan masyarakat sipil.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2019', 'DEPUTI II KANTOR STAF PRESIDEN (KSP)', 'Memimpin pengawasan program prioritas nasional, integrasi Satu Data Indonesia, dan reformasi kebijakan berbasis bukti saintifik di lingkaran kepresidenan.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2026', 'PENDIRIAN NALAR INSTITUTE & CIPG', 'Membangun wadah think tank kebijakan publik independen dan menjadi Visiting Fellow di ISEAS Yusof Ishak Institute Singapura.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Nalar Institute (Think Tank Kebijakan Publik)', 'Riset Kebijakan & Tata Kelola Negara', 'Lembaga riset independen yang mengadvokasi perumusan kebijakan berbasis data saintifik dan transparansi tata kelola publik.', 'https://nalarinstitute.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Satu Data Indonesia', 'Arsitektur Data Nasional', 'Kerangka regulasi dan integrasi basis data tunggal nasional untuk memastikan akurasi penyaluran bantuan sosial dan perencanaan pembangunan.', 'https://data.go.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku & Monograf Riset Tata Kelola Sains', 'Karya Akademik & Advokasi Kebijakan', 'Kumpulan publikasi internasional yang mengupas dinamika inovasi sosial dan kemandirian riset di negara berkembang.', 'https://cipg.or.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Merawat Nalar Teknokratis: Mengapa Kebijakan Berbasis Bukti Adalah Harga Mati Pembangunan', 'KEBIJAKAN PUBLIK', '8 Menit Membaca', 'Mengapa keputusan populis jangka pendek yang mengabaikan data sains selalu berujung pada pemborosan anggaran negara.', 'Ketika keputusan pembangunan hanya didasarkan pada intuisi politisi atau kepentingan oligarki menjelang pemilu, rakyat miskinkah yang menanggung kerugian paling fatal. Evidence-based policy adalah benteng pertahanan akal sehat agar negara dikelola dengan ilmu pengetahuan, bukan angan-angan kosong.', '/artikel/yanuar-nugroho-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Labirin Reformasi Birokrasi: Catatan dari Garis Depan Pengawasan Program Prioritas', 'TATA KELOLA NEGARA', '7 Menit Membaca', 'Strategi membongkar sekat ego sektoral kementerian dan membangun transparansi layanan publik.', 'Mengubah birokrasi yang gemuk dan lamban membutuhkan kombinasi kepemimpinan berani, sistem metrik kinerja yang terukur, dan pengawasan masyarakat sipil yang tak kenal lelah.', '/artikel/yanuar-nugroho-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Nalar Institute (Think Tank Kebijakan Publik)', 'Riset Kebijakan & Tata Kelola Negara', 'Lembaga riset independen yang mengadvokasi perumusan kebijakan berbasis data saintifik dan transparansi tata kelola publik.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://nalarinstitute.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Satu Data Indonesia', 'Arsitektur Data Nasional', 'Kerangka regulasi dan integrasi basis data tunggal nasional untuk memastikan akurasi penyaluran bantuan sosial dan perencanaan pembangunan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://data.go.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Prof. Sulfikar Amir (sulfikar-amir)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'sulfikar-amir' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Prof. Sulfikar Amir',
      title = 'Sosiolog Sains, Teknologi & Ketahanan Bencana (Nanyang Technological University Singapura)',
      category = 'Penjaga Nalar',
      quote = 'Infrastruktur publik yang dibangun megah tanpa analisis sosiologis dan mitigasi bencana bukanlah simbol kemajuan, melainkan bom waktu kerentanan sosial.',
      bio_paragraphs = ARRAY['Mengawali pendidikan di jurusan Desain Produk ITB sebelum meraih gelar doktor dalam bidang Science and Technology Studies (STS) dari Rensselaer Polytechnic Institute New York, Prof. Sulfikar Amir adalah salah satu intelektual diaspora Indonesia paling vokal di panggung dunia. Kini menjabat sebagai Associate Professor di NTU Singapura, kepakarannya berfokus pada sosiologi kebencanaan dan risiko infrastruktur.', 'Kala pandemi COVID-19 dan proyek-proyek mercusuar infrastruktur pemerintah menuai polemik, Sulfikar tak segan menyuntikkan kritik ilmiah berbasis data simulasi ke linimasa publik. Ia konsisten mengingatkan para pembuat kebijakan tentang bahaya Institutional Vulnerability, kerapuhan tata kota dan tata kelola keselamatan yang kerap dikorbankan demi percepatan politik.', 'Bagi generasi muda, Sulfikar memperlihatkan model ilmuwan sejati: independen, berani menantang narasi populis penguasa dengan ketelitian metodologis, dan mendedikasikan sains demi keselamatan hidup warga.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('sulfikar-amir', 'Prof. Sulfikar Amir', 'Sosiolog Sains, Teknologi & Ketahanan Bencana (Nanyang Technological University Singapura)', 'Penjaga Nalar', 'Infrastruktur publik yang dibangun megah tanpa analisis sosiologis dan mitigasi bencana bukanlah simbol kemajuan, melainkan bom waktu kerentanan sosial.', ARRAY['Mengawali pendidikan di jurusan Desain Produk ITB sebelum meraih gelar doktor dalam bidang Science and Technology Studies (STS) dari Rensselaer Polytechnic Institute New York, Prof. Sulfikar Amir adalah salah satu intelektual diaspora Indonesia paling vokal di panggung dunia. Kini menjabat sebagai Associate Professor di NTU Singapura, kepakarannya berfokus pada sosiologi kebencanaan dan risiko infrastruktur.', 'Kala pandemi COVID-19 dan proyek-proyek mercusuar infrastruktur pemerintah menuai polemik, Sulfikar tak segan menyuntikkan kritik ilmiah berbasis data simulasi ke linimasa publik. Ia konsisten mengingatkan para pembuat kebijakan tentang bahaya Institutional Vulnerability, kerapuhan tata kota dan tata kelola keselamatan yang kerap dikorbankan demi percepatan politik.', 'Bagi generasi muda, Sulfikar memperlihatkan model ilmuwan sejati: independen, berani menantang narasi populis penguasa dengan ketelitian metodologis, dan mendedikasikan sains demi keselamatan hidup warga.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 - 2008', 'DOKTORAL STS DI NEW YORK', 'Menyelesaikan riset doktoral tentang sosiologi teknologi nuklir dan keselamatan industri di Rensselaer Polytechnic Institute AS.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 - 2019', 'RISET TATA KOTA & RISIKO BENCANA DI NTU', 'Mengembangkan simulasi ketahanan perkotaan dan keselamatan transportasi publik di Nanyang Technological University Singapura.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2026', 'KOMUNIKASI SAINS PANDEMI & KRITIK TATA RUANG IKN', 'Menerbitkan riset simulasi mitigasi wabah dan memproduksi serial analisis kritis terhadap risiko ekologis dan finansial pemindahan ibu kota baru.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: The Technological State in Indonesia', 'Monograf Sosiologi Teknologi & Sejarah', 'Karya akademik prestisius yang mengupas sejarah rezim teknonasionallisme Indonesia dan dinamika industri strategis bangsa.', 'https://routledge.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Simulasi Ketahanan Urban & Pandemi (NTU Lab)', 'Riset Sains Komputasi & Kebencanaan', 'Model komputasi epidemiologis yang memetakan kerentanan pemukiman padat dan sistem transportasi massal di Asia Tenggara.', 'https://ntu.edu.sg', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kanal Edukasi Publik: Sosiologi Kota & Risiko', 'Komunikasi Sains & Literasi Warga', 'Rangkaian video esai dan infografis yang membedah isu tata kelola perkotaan, keselamatan publik, dan mitigasi krisis iklim.', 'https://youtube.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kota yang Rentan: Mengapa Ambisi Beton Tanpa Tata Ruang Hijau Mengundang Bencana', 'SOSIOLOGI TATA KOTA', '8 Menit Membaca', 'Pembedahan mendalam tentang krisis banjir, amblesan tanah Jakarta, dan ilusi penyelesaian berbasis proyek fisik semata.', 'Sebuah kota tidak bisa diselamatkan hanya dengan membangun tanggul raksasa bila eksploitasi air tanah dan perusakan daerah resapan air di hulu terus dibiarkan. Tata kota yang adil harus menempatkan keselamatan warga di atas keuntungan spekulan tanah.', '/artikel/sulfikar-amir-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Sains di Meja Penguasa: Pelajaran Pahit dari Komunikasi Krisis dan Ketahanan Publik', 'SAINS & KEBIJAKAN', '7 Menit Membaca', 'Refleksi kritis atas bahaya mengabaikan peringatan ilmuwan dalam perumusan kebijakan darurat nasional.', 'Ketika data saintifik disembunyikan demi menjaga stabilitas pasar atau citra politik, harga yang harus dibayar adalah nyawa rakyat. Kejujuran data adalah fondasi utama rasa saling percaya antara warga dan negara.', '/artikel/sulfikar-amir-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: The Technological State in Indonesia', 'Monograf Sosiologi Teknologi & Sejarah', 'Karya akademik prestisius yang mengupas sejarah rezim teknonasionallisme Indonesia dan dinamika industri strategis bangsa.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://routledge.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Simulasi Ketahanan Urban & Pandemi (NTU Lab)', 'Riset Sains Komputasi & Kebencanaan', 'Model komputasi epidemiologis yang memetakan kerentanan pemukiman padat dan sistem transportasi massal di Asia Tenggara.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ntu.edu.sg', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Zen RS (Zen Rachmat Sugito) (zen-rs)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'zen-rs' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Zen RS (Zen Rachmat Sugito)',
      title = 'Esais Naratif, Mantan Pemimpin Redaksi Tirto.id & Kurator Jurnalisme Presisi',
      category = 'Penjaga Nalar',
      quote = 'Membaca panjang dan menulis berbobot adalah bentuk perlawanan batin paling tangguh melawan kedangkalan peradaban serba instan.',
      bio_paragraphs = ARRAY['Di tengah tsunami konten pendek yang memangkas rentang perhatian publik menjadi hitungan detik, Zen RS konsisten merawat marwah jurnalisme presisi dan keindahan esai naratif. Sebagai salah satu arsitek di balik kelahiran Tirto.id dan pelopor jurnalisme data di tanah air, Zen membuktikan bahwa riset mendalam, infografis presisi, dan kekuatan bahasa sastra dapat berjalan beriringan.', 'Karya-karya esainya, baik tentang sepak bola, sejarah sosial, sastra dunia, hingga potret kehidupan sehari-hari, dikenal memiliki ketajaman analitis yang memukau sekaligus kelembutan estetika tutur yang menghanyutkan. Karyanya seperti Simpul Bahasa Sepak Bola dan Jiwa yang Patah menjadi rujukan wajib bagi generasi penulis muda yang ingin belajar merangkai kata dengan bobot pikiran yang jernih.', 'Bagi pembaca muda di era digital, Zen RS adalah penjaga kedalaman nalar: mengajarkan seni membaca lambat (slow reading) dan kenikmatan merenungi kompleksitas realitas manusia di balik angka-angka statistik kering.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('zen-rs', 'Zen RS (Zen Rachmat Sugito)', 'Esais Naratif, Mantan Pemimpin Redaksi Tirto.id & Kurator Jurnalisme Presisi', 'Penjaga Nalar', 'Membaca panjang dan menulis berbobot adalah bentuk perlawanan batin paling tangguh melawan kedangkalan peradaban serba instan.', ARRAY['Di tengah tsunami konten pendek yang memangkas rentang perhatian publik menjadi hitungan detik, Zen RS konsisten merawat marwah jurnalisme presisi dan keindahan esai naratif. Sebagai salah satu arsitek di balik kelahiran Tirto.id dan pelopor jurnalisme data di tanah air, Zen membuktikan bahwa riset mendalam, infografis presisi, dan kekuatan bahasa sastra dapat berjalan beriringan.', 'Karya-karya esainya, baik tentang sepak bola, sejarah sosial, sastra dunia, hingga potret kehidupan sehari-hari, dikenal memiliki ketajaman analitis yang memukau sekaligus kelembutan estetika tutur yang menghanyutkan. Karyanya seperti Simpul Bahasa Sepak Bola dan Jiwa yang Patah menjadi rujukan wajib bagi generasi penulis muda yang ingin belajar merangkai kata dengan bobot pikiran yang jernih.', 'Bagi pembaca muda di era digital, Zen RS adalah penjaga kedalaman nalar: mengajarkan seni membaca lambat (slow reading) dan kenikmatan merenungi kompleksitas realitas manusia di balik angka-angka statistik kering.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2008 - 2015', 'ERA ESAIS SEPAK BOLA & BUDAYA', 'Menulis kolom-kolom esai legendaris di berbagai media nasional, mengubah cara pandang publik bahwa sepak bola adalah cermin sosiologi dan politik kebudayaan.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2021', 'MEMBANGUN JURNALISME PRESISI TIRTO.ID', 'Memimpin redaksi Tirto.id sebagai Pemimpin Redaksi, memelopori standar jurnalisme data, periksa fakta terakreditasi, dan esai naratif investigasi di Indonesia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2026', 'KURATOR LITERATUR & KELAS PENULISAN NARATIF', 'Membina generasi penulis baru melalui lokakarya penulisan esai mendalam dan mengkurasi penerbitan karya sastra bermartabat.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Simpul Bahasa Sepak Bola', 'Karya Esai Sosiologi & Sastra Olahraga', 'Kumpulan esai masterclass yang membedah taktik sepak bola dunia melalui lensa filsafat, sejarah perang, dan kebudayaan.', 'https://www.gramedia.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Jiwa yang Patah (Antologi Esai)', 'Karya Tulis Humaniora & Refleksi', 'Pembedahan mendalam tentang kesepian, luka sejarah bangsa, dan pencarian martabat manusia di tengah modernitas.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Arsitektur Redaksi Tirto.id (Jurnalisme Presisi)', 'Inovasi Model Redaksi Digital', 'Pengembangan format periksa fakta, jurnalisme infografis data terukur, dan penulisan longform mendalam di media digital Indonesia.', 'https://tirto.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Seni Membaca Lambat: Mengapa Kedalaman Pikiran Tidak Bisa Dibeli dengan Rangkuman Instan', 'LITERASI & SASTRA', '8 Menit Membaca', 'Refleksi Zen RS tentang bahaya kognitif konsumsi informasi sepotong-sepotong di media sosial.', 'Membaca teks panjang bukanlah sekadar aktivitas mengumpulkan fakta, melainkan melatih kesabaran batin untuk menyelami lapisan-lapisan makna yang tersembunyi. Ketika kita kehilangan kemampuan membaca mendalam, kita perlahan kehilangan kemampuan memahami kerumitan jiwa manusia lain.', '/artikel/zen-rs-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Sepak Bola Sebagai Cermin Bangsa: Dari Drama Taktik Hingga Ketimpangan Struktur Sosial', 'KULTUR & DIALEKTIKA', '7 Menit Membaca', 'Bagaimana lapangan hijau memantulkan luka politik, korupsi federasi, dan ketangguhan suporter akar rumput.', 'Di atas lapangan berumput, kita tidak hanya menyaksikan 22 manusia mengejar bola, melainkan pertarungan identitas kelas, impian kaum papa, dan drama peradaban manusia yang paling jujur dan tanpa tedeng aling-aling.', '/artikel/zen-rs-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Simpul Bahasa Sepak Bola', 'Karya Esai Sosiologi & Sastra Olahraga', 'Kumpulan esai masterclass yang membedah taktik sepak bola dunia melalui lensa filsafat, sejarah perang, dan kebudayaan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Jiwa yang Patah (Antologi Esai)', 'Karya Tulis Humaniora & Refleksi', 'Pembedahan mendalam tentang kesepian, luka sejarah bangsa, dan pencarian martabat manusia di tengah modernitas.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Cania Citta Irlanie (cania-citta)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'cania-citta' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Cania Citta Irlanie',
      title = 'Co-founder Malaka Project, Video Esais & Analis Diskursus Publik',
      category = 'Penjaga Nalar',
      quote = 'Kemerdekaan berpikir dan hak individu bukanlah kemewahan ideologis yang bisa ditawar, melainkan fondasi utama agar manusia tidak diperbudak oleh dogma kekuasaan.',
      bio_paragraphs = ARRAY['Alumnus Ilmu Politik Universitas Indonesia ini dikenal lewat keberaniannya mendobrak konsensus populis dengan dialektika argumen yang tertata rapi dan berbasis prinsip pertama (first-principles thinking). Cania menolak terjebak dalam perdebatan politik identitas yang dangkal, emosional, dan penuh penghakiman moral sepihak.', 'Sebagai salah satu penggagas dan motor utama di balik Malaka Project, Cania memproduksi ratusan video esai berbobot tinggi yang membedah batasan wewenang negara, filsafat kebebasan individu, hak kepemilikan pribadi, hingga teori ekonomi pasar. Gaya bertuturnya yang tenang, runut secara silogisme logika, dan tegas menuntut lawan bicaranya untuk menguji premis argumen sebelum melontarkan kesimpulan.', 'Bagi generasi muda yang haus akan diskursus intelektual yang segar dan bernas, Cania adalah sosok pemikir independen: merangsang keberanian kaum muda untuk berdebat secara rasional tanpa ad hominem, dan membiasakan diri berpikir kritis sebelum mempercayai klaim penguasa.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('cania-citta', 'Cania Citta Irlanie', 'Co-founder Malaka Project, Video Esais & Analis Diskursus Publik', 'Penjaga Nalar', 'Kemerdekaan berpikir dan hak individu bukanlah kemewahan ideologis yang bisa ditawar, melainkan fondasi utama agar manusia tidak diperbudak oleh dogma kekuasaan.', ARRAY['Alumnus Ilmu Politik Universitas Indonesia ini dikenal lewat keberaniannya mendobrak konsensus populis dengan dialektika argumen yang tertata rapi dan berbasis prinsip pertama (first-principles thinking). Cania menolak terjebak dalam perdebatan politik identitas yang dangkal, emosional, dan penuh penghakiman moral sepihak.', 'Sebagai salah satu penggagas dan motor utama di balik Malaka Project, Cania memproduksi ratusan video esai berbobot tinggi yang membedah batasan wewenang negara, filsafat kebebasan individu, hak kepemilikan pribadi, hingga teori ekonomi pasar. Gaya bertuturnya yang tenang, runut secara silogisme logika, dan tegas menuntut lawan bicaranya untuk menguji premis argumen sebelum melontarkan kesimpulan.', 'Bagi generasi muda yang haus akan diskursus intelektual yang segar dan bernas, Cania adalah sosok pemikir independen: merangsang keberanian kaum muda untuk berdebat secara rasional tanpa ad hominem, dan membiasakan diri berpikir kritis sebelum mempercayai klaim penguasa.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2019', 'DEBAT MAHASISWA & AKTIVISME OPOSISI NALAR', 'Merintis karir sebagai analis media dan video esais, dikenal luas atas keberaniannya mendebat kebijakan ekonomi-politik negara di forum publik.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2023', 'PENDIRIAN MALAKA PROJECT', 'Mendirikan Malaka Project bersama rekan-rekannya, membangun media edukasi pemikiran berbasis langganan dan platform YouTube berdaya jangkau jutaan penonton.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2024 - 2026', 'PENGEMBANGAN KURIKULUM LOGIKA & FILSAFAT KEBEBASAN', 'Mengembangkan kelas-kelas pemikiran kritis mandiri, membimbing ribuan anak muda memahami relasi antara hak sipil, inovasi teknologi, dan supremasi hukum.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Malaka Project (Kanal Edukasi Pemikiran Kritis)', 'Media Diskursus Intelektual Independen', 'Platform video esai politik, filsafat, dan ekonomi yang menjadi rujukan perdebatan rasional anak muda Indonesia.', 'https://malakaproject.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Esai: Batas Wewenang Negara vs Hak Individu', 'Kajian Filsafat Politik & Konstitusi', 'Rangkaian analisis video membedah bahaya overregulasi birokrasi dan pentingnya perlindungan privasi serta kebebasan sipil warga.', 'https://youtube.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kelas Logika & Debat Metodis', 'Kurikulum Pendidikan Nalar Kritis', 'Lokakarya terstruktur yang mengajarkan cara mengidentifikasi logical fallacy, menyusun premis argumen kuat, dan berdebat secara etis.', 'https://malakaproject.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menimbang Batas Negara: Mengapa Kebebasan Individu Adalah Kunci Kemakmuran Bangsa', 'FILSAFAT POLITIK', '7 Menit Membaca', 'Pembedahan kritis atas bahaya paternalisme negara yang merampas inisiatif dan kemandirian warga.', 'Ketika negara mencampuri terlalu jauh ruang privat dan urusan ekonomi warga dengan ribuan izin dan larangan, inovasi akan mati dan korupsi akan tumbuh subur. Kedaulatan sejati lahir saat warga diberi kebebasan bertanggung jawab untuk menentukan jalan hidupnya sendiri.', '/artikel/cania-citta-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Etika Berdebat Tanpa Sesat Pikir: Menolak Normalisasi Ad Hominem di Ruang Publik', 'LOGIKA & DIALEKTIKA', '6 Menit Membaca', 'Panduan praktis menguji validitas argumen tanpa terjebak pada sentimen kebencian personal.', 'Menyerang latar belakang suku, agama, atau fisik seseorang saat beradu pendapat adalah tanda bangkrutnya isi kepala. Sebuah masyarakat hanya akan maju bila warganya mampu menguji ide dan gagasan secara objektif.', '/artikel/cania-citta-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Malaka Project (Kanal Edukasi Pemikiran Kritis)', 'Media Diskursus Intelektual Independen', 'Platform video esai politik, filsafat, dan ekonomi yang menjadi rujukan perdebatan rasional anak muda Indonesia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://malakaproject.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Serial Esai: Batas Wewenang Negara vs Hak Individu', 'Kajian Filsafat Politik & Konstitusi', 'Rangkaian analisis video membedah bahaya overregulasi birokrasi dan pentingnya perlindungan privasi serta kebebasan sipil warga.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Rocky Gerung (rocky-gerung)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'rocky-gerung' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Rocky Gerung',
      title = 'Filsuf Publik, Penggagas Diskursus Akal Sehat & Pengkritik Kebijakan',
      category = 'Penjaga Nalar',
      quote = 'Kritik adalah vitamin bagi demokrasi; negara yang alergi terhadap kritik adalah negara yang sedang memelihara kebodohan dan kepalsuan.',
      bio_paragraphs = ARRAY['Sebagai mantan dosen Filsafat di Universitas Indonesia selama belasan tahun, Rocky Gerung adalah figur sentral yang mempopulerkan diskursus ''Akal Sehat'' dan dekonstruksi logika kekuasaan ke ruang publik luas. Dengan retorika satir yang tajam, metafora epistemologi yang mematikan, dan penguasaan filsafat barat-timur yang mendalam, Rocky konsisten menjadi oposisi nalar bagi rezim manapun.', 'Rocky menolak tunduk pada protokoler feodal dan basa-basi politik. Di hadapan jutaan penonton televisi dan forum mahasiswa di seluruh Indonesia, ia menelanjangi kesesatan berpikir (logical fallacy) pejabat publik, manipulasi undang-undang, hingga bahaya kepalsuan etika di balik proyek-proyek mercusuar negara.', 'Bagi generasi muda, Rocky Gerung mengajarkan seni merawat ketidaksetujuan secara elegan: bahwa keberanian untuk berpikir mandiri dan menolak didikte oleh kekuasaan adalah harga mati dari seorang warga negara yang merdeka.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('rocky-gerung', 'Rocky Gerung', 'Filsuf Publik, Penggagas Diskursus Akal Sehat & Pengkritik Kebijakan', 'Penjaga Nalar', 'Kritik adalah vitamin bagi demokrasi; negara yang alergi terhadap kritik adalah negara yang sedang memelihara kebodohan dan kepalsuan.', ARRAY['Sebagai mantan dosen Filsafat di Universitas Indonesia selama belasan tahun, Rocky Gerung adalah figur sentral yang mempopulerkan diskursus ''Akal Sehat'' dan dekonstruksi logika kekuasaan ke ruang publik luas. Dengan retorika satir yang tajam, metafora epistemologi yang mematikan, dan penguasaan filsafat barat-timur yang mendalam, Rocky konsisten menjadi oposisi nalar bagi rezim manapun.', 'Rocky menolak tunduk pada protokoler feodal dan basa-basi politik. Di hadapan jutaan penonton televisi dan forum mahasiswa di seluruh Indonesia, ia menelanjangi kesesatan berpikir (logical fallacy) pejabat publik, manipulasi undang-undang, hingga bahaya kepalsuan etika di balik proyek-proyek mercusuar negara.', 'Bagi generasi muda, Rocky Gerung mengajarkan seni merawat ketidaksetujuan secara elegan: bahwa keberanian untuk berpikir mandiri dan menolak didikte oleh kekuasaan adalah harga mati dari seorang warga negara yang merdeka.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1990 - 2015', 'MENGAJAR FILSAFAT DI UNIVERSITAS INDONESIA', 'Mengajar epistemologi, etika politik, dan filsafat hukum di Departemen Filsafat UI, membimbing ribuan mahasiswa berpikir kritis tanpa kompromi.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2020', 'FENOMENA AKAL SEHAT & DEKONSTRUKSI PUBLIK', 'Membawa perdebatan filsafat ke siaran televisi nasional dan mimbar kampus, mempopulerkan istilah ''Akal Sehat'' sebagai instrumen pengawasan kekuasaan.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'PENDIRIAN ROCKY GERUNG OFFICIAL & SEKOLAH PIKIRAN', 'Membangun kanal edukasi independen berdaya jangkau jutaan pelanggan, konsisten mengkritisi kebijakan lingkungan, agraria, dan kemunduran demokrasi.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Rocky Gerung Official (Mimbar Oposisi Akal Sehat)', 'Kanal Pendidikan Filsafat Publik', 'Platform video analisis kritis harian yang membedah isu politik nasional dan internasional lewat kacamata filsafat dan hukum tata negara.', 'https://youtube.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku & Esai Filsafat Politik Indonesia', 'Karya Akademik & Kritik Demokrasi', 'Kumpulan tulisan akademik tentang hak asasi manusia, kebebasan berekspresi, dan etika lingkungan hidup.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Forum Mimbar Bebas Kampus Nusantara', 'Gerakan Literasi Kritis Mahasiswa', 'Rangkaian kuliah umum dan diskusi filsafat di ratusan universitas di seluruh pelosok Indonesia guna membangkitkan nalar kritis pemuda.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Demokrasi Tanpa Oposisi Adalah Monarki Terselubung: Mengapa Nalar Kritis Harus Terus Bekerja', 'FILSAFAT POLITIK', '8 Menit Membaca', 'Pembedahan filosofis tentang fungsi oposisi sebagai penjaga kesehatan akal sehat republik.', 'Negara tidak boleh meminta warganya untuk selalu memuji dan berterima kasih; tugas negara adalah melayani, dan tugas warga adalah terus mengawasi dan mengkritik. Ketika seluruh partai dan lembaga bungkam bersatu dalam kekuasaan, nalar warga sipillah yang harus menjadi parlemen jalanan.', '/artikel/rocky-gerung-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Etika Lingkungan vs Kerakusan Ekstraktif: Menagih Hak Konstitusional Generasi Mendatang', 'EKOLOGI & HUKUM', '7 Menit Membaca', 'Mengapa mengeksploitasi alam demi keuntungan oligarki jangka pendek adalah kejahatan antar-generasi.', 'Gunung, hutan, dan sungai bukanlah komoditas mati yang boleh dikeruk hingga tandus demi selembar laporan pertumbuhan ekonomi semu. Alam memiliki hak moral untuk dijaga demi keberlangsungan hidup anak cucu kita.', '/artikel/rocky-gerung-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Rocky Gerung Official (Mimbar Oposisi Akal Sehat)', 'Kanal Pendidikan Filsafat Publik', 'Platform video analisis kritis harian yang membedah isu politik nasional dan internasional lewat kacamata filsafat dan hukum tata negara.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku & Esai Filsafat Politik Indonesia', 'Karya Akademik & Kritik Demokrasi', 'Kumpulan tulisan akademik tentang hak asasi manusia, kebebasan berekspresi, dan etika lingkungan hidup.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

COMMIT;
