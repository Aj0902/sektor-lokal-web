-- SQL Batch for laci_08_pencerah_generasi
BEGIN;

-- Figure: Ferry Irwandi (ferry-irwandi)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'ferry-irwandi' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Ferry Irwandi',
      title = 'Co-founder Malaka Project, Mantan Auditor Kemenkeu & Edukator Nalar Kritis',
      category = 'Pencerah Generasi',
      quote = 'Di tengah gempuran algoritma yang menjajakan kecemasan dan iming-iming kaya instan, nalar kritis itu bukan untuk gaya-gayaan. Ia adalah tameng utama agar hidup lo tetap waras dan merdeka dari manipulasi.',
      bio_paragraphs = ARRAY['Sebagai mantan pegawai Kementerian Keuangan lulusan STAN yang bertahun-tahun bertugas mengaudit anggaran negara, Ferry Irwandi paham betul bagaimana sistem birokrasi dan pasar keuangan bekerja dari dalam. Menghadapi jutaan anak muda dan warga biasa yang terus-menerus terjebak skema tipu-tipu investasi bodong dan judi online berkedok game di media sosial, ia mengambil langkah berani: menanggalkan status abdi negara yang aman demi membangun ruang edukasi independen yang berani bicara jujur dan tajam.', 'Lewat Malaka Project dan kanal pribadinya, Ferry tak sekadar melontarkan kritik di layar kaca; ia turun gelanggang menciptakan aksi nyata. Mulai dari membongkar matematika kotor industri judi online dan skema Ponzi kripto, mengajak generasi muda menerapkan stoikisme praktis sebagai tameng kecemasan, hingga menggalang dana gotong royong publik yang fantastis, mencapai lebih dari Rp 10,7 Miliar, untuk menalangi beasiswa kuliah dan UKT ribuan mahasiswa di berbagai pelosok daerah.', 'Bagi generasi muda yang muak dengan dogma palsu cepat kaya, Ferry Irwandi adalah jangkar akal sehat: membuktikan bahwa nalar kritis, transparansi finansial, dan keberpihakan pada sesama adalah investasi martabat tertinggi di era disrupsi digital.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('ferry-irwandi', 'Ferry Irwandi', 'Co-founder Malaka Project, Mantan Auditor Kemenkeu & Edukator Nalar Kritis', 'Pencerah Generasi', 'Di tengah gempuran algoritma yang menjajakan kecemasan dan iming-iming kaya instan, nalar kritis itu bukan untuk gaya-gayaan. Ia adalah tameng utama agar hidup lo tetap waras dan merdeka dari manipulasi.', ARRAY['Sebagai mantan pegawai Kementerian Keuangan lulusan STAN yang bertahun-tahun bertugas mengaudit anggaran negara, Ferry Irwandi paham betul bagaimana sistem birokrasi dan pasar keuangan bekerja dari dalam. Menghadapi jutaan anak muda dan warga biasa yang terus-menerus terjebak skema tipu-tipu investasi bodong dan judi online berkedok game di media sosial, ia mengambil langkah berani: menanggalkan status abdi negara yang aman demi membangun ruang edukasi independen yang berani bicara jujur dan tajam.', 'Lewat Malaka Project dan kanal pribadinya, Ferry tak sekadar melontarkan kritik di layar kaca; ia turun gelanggang menciptakan aksi nyata. Mulai dari membongkar matematika kotor industri judi online dan skema Ponzi kripto, mengajak generasi muda menerapkan stoikisme praktis sebagai tameng kecemasan, hingga menggalang dana gotong royong publik yang fantastis, mencapai lebih dari Rp 10,7 Miliar, untuk menalangi beasiswa kuliah dan UKT ribuan mahasiswa di berbagai pelosok daerah.', 'Bagi generasi muda yang muak dengan dogma palsu cepat kaya, Ferry Irwandi adalah jangkar akal sehat: membuktikan bahwa nalar kritis, transparansi finansial, dan keberpihakan pada sesama adalah investasi martabat tertinggi di era disrupsi digital.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 - 2020', 'ABDI NEGARA & AUDITOR KEMENKEU', 'Mengabdi di bawah bendera Kementerian Keuangan, mengaudit arus anggaran negara dan menyaksikan langsung timpangnya literasi finansial warga.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021', 'TITIK BALIK RESIGNASI & INDEPENDENSI NARASI', 'Memilih melepaskan posisi stabil ASN demi memperjuangkan independensi edukasi publik dan advokasi akal sehat tanpa sekat protokoler birokrasi.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2023', 'KELAHIRAN MALAKA PROJECT & PERANG MELAWAN JUDOL', 'Mendirikan Malaka Project sebagai wahana diskursus independen, membedah secara saintifik manipulasi algoritma judi online dan skema ponzi digital.', 3);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2024 - 2026', 'GERAKAN BEASISWA 10,7 MILIAR & BANTUAN UKT', 'Menghimpun solidaritas gotong royong publik menembus Rp 10,7 Miliar untuk beasiswa kuliah dan subsidi UKT mahasiswa dari keluarga prasejahtera.', 4);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Investigasi & Pembongkaran Matematika Judi Online', 'Riset Finansial & Advokasi Publik', 'Pembedahan saintifik tentang probabilitas bandar judi online dan arsitektur penipuan finansial digital yang menguras kantong jutaan warga.', 'https://youtube.com/@ferryirwandi', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Malaka Project (Platform Video Esai Nalar Kritis)', 'Media Riset & Diskursus Independen', 'Platform video esai berbobot dengan jutaan pelanggan yang menguliti isu filsafat praktis, ekonomi makro, dan kesadaran politik anak muda.', 'https://malakaproject.id', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku Panduan Bernalar & Stoikisme Terapan', 'Karya Tulis & Panduan Hidup', 'Buku panduan merakit kembali nalar rasional dan menavigasi ketidakpastian hidup lewat filosofi dikotomi kendali yang membumi.', 'https://www.gramedia.com', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kanal Gotong Royong Beasiswa Mahasiswa Daerah (Kitabisa)', 'Filantropi & Pendidikan Transformatif', 'Inisiatif crowdfunding terbuka yang telah mendanai SPP/UKT ribuan mahasiswa daerah berprestasi yang terancam putus kuliah.', 'https://kitabisa.com', 4);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membongkar Jebakan Ilusi: Catatan Investigasi Ferry Irwandi Melawan Gurita Judol', 'INVESTIGASI & ADVOKASI', '8 Menit Membaca', 'Kisah di balik layar perlawanan Ferry membongkar manipulasi psikologis di balik judi online: mengapa bandar tidak pernah kalah.', 'Sepanjang tahun, pesan masuk Ferry Irwandi dipenuhi curhatan pilu. Mahasiswa kehilangan tabungan kuliah, buruh terjerat utang pinjol demi ''kemenangan semu''. Bagi Ferry, ini bukan masalah nasib buruk, melainkan rekayasa matematika algoritma. Secara probabilitas, sistem judi online dirancang agar pemain 100% bangkrut pada akhirnya. Mengedukasi nalar publik adalah satu-satunya vaksin melawan manipulasi ini.', '/artikel/ferry-irwandi-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Tenang di Tengah Badai: Stoikisme Praktis untuk Generasi yang Gampang Cemas', 'FILSAFAT PRAKTIS', '7 Menit Membaca', 'Bagaimana filosofi dikotomi kendali menyelamatkan Ferry saat menghadapi serangan siber dan risiko resign dari kemapanan.', 'Ketika meninggalkan zona nyaman ASN pada 2021, rasa cemas tentu hadir. Di titik itulah Stoikisme berhenti menjadi sekadar kutipan estetis di media sosial dan menjadi jangkar hidup. Fokus hanya pada apa yang bisa dikendalikan, kualitas karya, kejujuran pikiran, dan keberanian melangkah, adalah cara menjadi batu karang di tengah badai opini publik.', '/artikel/ferry-irwandi-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Investigasi & Pembongkaran Matematika Judi Online', 'Riset Finansial & Advokasi Publik', 'Pembedahan saintifik tentang probabilitas bandar judi online dan arsitektur penipuan finansial digital yang menguras kantong jutaan warga.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://youtube.com/@ferryirwandi', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Malaka Project (Platform Video Esai Nalar Kritis)', 'Media Riset & Diskursus Independen', 'Platform video esai berbobot dengan jutaan pelanggan yang menguliti isu filsafat praktis, ekonomi makro, dan kesadaran politik anak muda.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://malakaproject.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Najwa Shihab (najwa-shihab)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'najwa-shihab' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Najwa Shihab',
      title = 'Jurnalis Investigatif, Pewawancara Kritis Kekuasaan, Pendiri Narasi & Duta Baca Indonesia',
      category = 'Pencerah Generasi',
      quote = 'Kekuasaan cenderung korup, dan satu-satunya obat penawar dari penyakit itu adalah warga yang berani mengawasi, bertanya, dan menagih janji tanpa rasa takut.',
      bio_paragraphs = ARRAY['Karier Najwa Shihab tidak dibangun dari kenyamanan meja redaksi ber-AC, melainkan dari keberaniannya turun ke lapangan meliput bencana tsunami Aceh 2004 hingga mencecar para pejabat tinggi di kursi panas Mata Najwa. Alumnus Fakultas Hukum UI ini membuktikan bahwa wawancara jurnalistik yang tajam dapat menjadi panggung pengadilan publik ketika sistem hukum formal kerap ragu menghadapi kekuasaan.', 'Ketika iklim pertelevisian nasional kian terjebak pada komersialisasi rating dangkal dan konglomerasi politik, Najwa mengambil langkah independen dengan mendirikan Narasi pada 2018. Ia membangun ekosistem jurnalisme partisipatif dan newsroom berbasis investigasi data (OSINT) yang menjadikan anak muda bukan sekadar penonton, melainkan agen pengawal demokrasi dan akuntabilitas kebijakan publik.', 'Sebagai Duta Baca Indonesia selama bertahun-tahun, Najwa terus menjelajahi pelosok nusantara menyalakan lentera literasi: membuktikan bahwa membaca dan berpikir kritis adalah syarat mutlak bagi lahirnya warga negara yang merdeka dan bermartabat.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('najwa-shihab', 'Najwa Shihab', 'Jurnalis Investigatif, Pewawancara Kritis Kekuasaan, Pendiri Narasi & Duta Baca Indonesia', 'Pencerah Generasi', 'Kekuasaan cenderung korup, dan satu-satunya obat penawar dari penyakit itu adalah warga yang berani mengawasi, bertanya, dan menagih janji tanpa rasa takut.', ARRAY['Karier Najwa Shihab tidak dibangun dari kenyamanan meja redaksi ber-AC, melainkan dari keberaniannya turun ke lapangan meliput bencana tsunami Aceh 2004 hingga mencecar para pejabat tinggi di kursi panas Mata Najwa. Alumnus Fakultas Hukum UI ini membuktikan bahwa wawancara jurnalistik yang tajam dapat menjadi panggung pengadilan publik ketika sistem hukum formal kerap ragu menghadapi kekuasaan.', 'Ketika iklim pertelevisian nasional kian terjebak pada komersialisasi rating dangkal dan konglomerasi politik, Najwa mengambil langkah independen dengan mendirikan Narasi pada 2018. Ia membangun ekosistem jurnalisme partisipatif dan newsroom berbasis investigasi data (OSINT) yang menjadikan anak muda bukan sekadar penonton, melainkan agen pengawal demokrasi dan akuntabilitas kebijakan publik.', 'Sebagai Duta Baca Indonesia selama bertahun-tahun, Najwa terus menjelajahi pelosok nusantara menyalakan lentera literasi: membuktikan bahwa membaca dan berpikir kritis adalah syarat mutlak bagi lahirnya warga negara yang merdeka dan bermartabat.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2001 - 2017', 'ERA METRO TV, LIPUTAN TSUNAMI & MATA NAJWA', 'Merintis karir jurnalisme lapangan, meliput bencana Aceh, dan memandu talkshow politik paling berpengaruh di Indonesia, Mata Najwa.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018', 'PENDIRIAN MEDIA NARASI & INDEPENDENSI REDAKSI', 'Mendirikan ekosistem media digital Narasi, membangun jurnalisme investigasi terbuka yang berpihak pada kepentingan publik dan warga muda.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2026', 'WAWANCARA KURSI KOSONG & ADVOKASI LITERASI NASIONAL', 'Melakukan wawancara simbolik kursi kosong Menkes saat krisis pandemi dan memimpin gerakan literasi membaca di ratusan kampus dan perpustakaan daerah.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Mata Najwa (Program Dialog Politik & Akuntabilitas)', 'Jurnalisme Investigasi & Talkshow Kebijakan Publik', 'Program bincang-bincang politik independen yang menjadi rujukan warga dalam menguji integritas para calon pemimpin dan pembuat kebijakan.', 'https://narasi.tv', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Narasi TV & Narasi Newsroom (Investigasi Open Source)', 'Ekosistem Media Digital Warga & Investigasi OSINT', 'Redaksi jurnalisme data yang mengungkap pembajakan ruang publik, kekerasan aparat, dan penyelewengan kekuasaan.', 'https://narasi.tv', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Catatan Najwa (Refleksi Kritis Republik)', 'Karya Literatur Jurnalisme & Kritik Sosial', 'Kumpulan esai rima puitis tajam yang menguliti realitas kepalsuan hukum, politik transaksional, dan harapan generasi muda.', 'https://www.gramedia.com', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Di Balik Wawancara Kursi Kosong: Mengapa Pejabat Publik Wajib Menjawab Pertanyaan Rakyat', 'ETIKA JURNALISME', '8 Menit Membaca', 'Catatan Najwa Shihab tentang fungsi pers sebagai anjing penjaga (watchdog) demokrasi yang tidak boleh tunduk pada protokoler kekuasaan.', 'Jabatan publik dibiayai oleh pajak keringat rakyat. Ketika krisis melanda dan nyawa warga terancam, pejabat yang memegang wewenang tidak boleh bersembunyi di balik ajudan. Bertanya dan menuntut transparansi adalah hak paling mendasar dari setiap warga negara.', '/artikel/najwa-shihab-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Literasi Adalah Kunci Kedaulatan: Mengapa Bangsa yang Malas Membaca Mudah Dibohongi', 'LITERASI BANGSA', '7 Menit Membaca', 'Pentingnya menumbuhkan tradisi membaca buku mendalam di tengah godaan konten pendek yang serba instan.', 'Minat baca yang rendah bukanlah takdir genetik anak Indonesia; ia adalah akibat dari ketiadaan akses buku bermutu di pelosok daerah. Menyalakan perpustakaan keliling dan ruang baca desa adalah ikhtiar merawat kedaulatan akal sehat bangsa.', '/artikel/najwa-shihab-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Mata Najwa (Program Dialog Politik & Akuntabilitas)', 'Jurnalisme Investigasi & Talkshow Kebijakan Publik', 'Program bincang-bincang politik independen yang menjadi rujukan warga dalam menguji integritas para calon pemimpin dan pembuat kebijakan.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://narasi.tv', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Narasi TV & Narasi Newsroom (Investigasi Open Source)', 'Ekosistem Media Digital Warga & Investigasi OSINT', 'Redaksi jurnalisme data yang mengungkap pembajakan ruang publik, kekerasan aparat, dan penyelewengan kekuasaan.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://narasi.tv', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Gita Wirjawan (gita-wirjawan)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'gita-wirjawan' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Gita Wirjawan',
      title = 'Inisiator Siniar Edukasi Geopolitik ''Endgame'', Mantan Menteri Perdagangan & Pendidik Peradaban',
      category = 'Pencerah Generasi',
      quote = 'Pendidikan berkualitas, penguasaan sains teknologi, dan rasa ingin tahu yang tak pernah padam adalah satu-satunya jembatan emas bagi Indonesia untuk melompat dari jebakan negara berkembang.',
      bio_paragraphs = ARRAY['Mengawali karier sebagai bankir investasi global di Wall Street hingga dipercaya memimpin Badan Koordinasi Penanaman Modal (BKPM) dan menjabat sebagai Menteri Perdagangan RI (2011 - 2014), Gita Irawan Wirjawan memiliki perspektif ekonomi makro dan geopolitik global yang sangat komprehensif.', 'Kala panggung diskursus digital Indonesia dipenuhi gosip selebritas dan perdebatan politik dangkal, Gita menghadirkan terobosan kultural lewat podcast ''Endgame''. Dalam format perbincangan mendalam berdurasi 2, 3 jam, Gita mewawancarai ratusan ilmuwan, pemenang Nobel, sejarawan, insinyur deep-tech, hingga tokoh akar rumput, menyajikan wawasan tentang transisi energi, kecerdasan buatan, dan arsitektur peradaban masa depan.', 'Melalui pendirian Ancora Foundation dan peran akademisnya di Stanford University, Gita mendedikasikan hidupnya untuk membuka akses beasiswa pendidikan tinggi kelas dunia bagi anak-anak muda Indonesia: membuktikan bahwa kemajuan peradaban selalu dimulai dari pembenahan kualitas pikiran generasinya.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('gita-wirjawan', 'Gita Wirjawan', 'Inisiator Siniar Edukasi Geopolitik ''Endgame'', Mantan Menteri Perdagangan & Pendidik Peradaban', 'Pencerah Generasi', 'Pendidikan berkualitas, penguasaan sains teknologi, dan rasa ingin tahu yang tak pernah padam adalah satu-satunya jembatan emas bagi Indonesia untuk melompat dari jebakan negara berkembang.', ARRAY['Mengawali karier sebagai bankir investasi global di Wall Street hingga dipercaya memimpin Badan Koordinasi Penanaman Modal (BKPM) dan menjabat sebagai Menteri Perdagangan RI (2011 - 2014), Gita Irawan Wirjawan memiliki perspektif ekonomi makro dan geopolitik global yang sangat komprehensif.', 'Kala panggung diskursus digital Indonesia dipenuhi gosip selebritas dan perdebatan politik dangkal, Gita menghadirkan terobosan kultural lewat podcast ''Endgame''. Dalam format perbincangan mendalam berdurasi 2, 3 jam, Gita mewawancarai ratusan ilmuwan, pemenang Nobel, sejarawan, insinyur deep-tech, hingga tokoh akar rumput, menyajikan wawasan tentang transisi energi, kecerdasan buatan, dan arsitektur peradaban masa depan.', 'Melalui pendirian Ancora Foundation dan peran akademisnya di Stanford University, Gita mendedikasikan hidupnya untuk membuka akses beasiswa pendidikan tinggi kelas dunia bagi anak-anak muda Indonesia: membuktikan bahwa kemajuan peradaban selalu dimulai dari pembenahan kualitas pikiran generasinya.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2008 - 2014', 'PENGABDIAN NEGARA DI BKPM & KEMENTERIAN PERDAGANGAN', 'Memimpin reformasi iklim investasi nasional di BKPM dan menjabat Menteri Perdagangan memperjuangkan kedaulatan ekspor di WTO Bali 2013.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2022', 'PELUNCURAN PODCAST ENDGAME & DIALOG PERADABAN', 'Meluncurkan serial podcast Endgame yang merevolusi standar dialog intelektual panjang (longform) di kalangan jutaan pemuda nusantara.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'VISITING SCHOLAR STANFORD & ADVOKASI TALENTA GENOMIK', 'Menjadi Visiting Scholar di Stanford University dan menginisiasi pendanaan riset genomik, bioteknologi, dan semikonduktor masa depan.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Endgame Podcast (Siniar Geopolitik & Sains Masa Depan)', 'Media Edukasi Wawasan Global & Wawancara Mendalam', 'Platform dialog intelektual berkualitas tinggi yang membedah arsitektur kecerdasan buatan, energi terbarukan, dan sejarah peradaban bangsa.', 'https://youtube.com/@GitaWirjawan', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Ancora Foundation (Beasiswa Pendidikan Tinggi Global)', 'Filantropi Pendidikan & Pembinaan Kepemimpinan', 'Yayasan beasiswa yang telah mengirimkan ratusan talenta terbaik Indonesia menempuh studi magister dan doktoral di Harvard, Oxford, dan Cambridge.', 'https://ancorafoundation.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Peta Jalan Talenta Semikonduktor & Sains AI', 'Advokasi Kebijakan Riset Deep-Tech Nasional', 'Kemitraan strategis menjembatani universitas riset global dengan talenta rekayasa dalam negeri untuk lompatan industri bernilai tinggi.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghindari Middle Income Trap: Mengapa Reformasi Pendidikan dan Riset Genomik Adalah Harga Mati', 'GEOPOLITIK & EKONOMI', '8 Menit Membaca', 'Analisis Gita Wirjawan tentang bagaimana negara-negara maju seperti Korea Selatan dan Taiwan melompat lewat penguasaan sains mutakhir.', 'Sebuah negara tidak akan pernah kaya hanya dengan mengandalkan ekspor komoditas tanah mentah. Satu-satunya modal yang nilainya berlipat ganda tanpa batas adalah kecerdasan manusia. Menginvestasikan anggaran negara pada riset bioteknologi, kecerdasan buatan, dan matematika murni adalah syarat mutlak agar Indonesia keluar dari jebakan pendapatan menengah.', '/artikel/gita-wirjawan-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Endgame: Merawat Rasa Ingin Tahu Intelektual di Tengah Kedangkalan Informasi', 'LITERASI INTI', '7 Menit Membaca', 'Pentingnya mendengarkan perbincangan panjang yang menguji kedalaman argumen dibanding rangkuman instan.', 'Dunia terlalu rumit untuk dijelaskan dalam video 30 detik. Ketika generasi muda membiasakan diri menyimak dialektika pemikiran panjang berjam-jam, mereka sedang melatih otot kognitif untuk memecahkan persoalan peradaban yang kompleks.', '/artikel/gita-wirjawan-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Endgame Podcast (Siniar Geopolitik & Sains Masa Depan)', 'Media Edukasi Wawasan Global & Wawancara Mendalam', 'Platform dialog intelektual berkualitas tinggi yang membedah arsitektur kecerdasan buatan, energi terbarukan, dan sejarah peradaban bangsa.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@GitaWirjawan', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Ancora Foundation (Beasiswa Pendidikan Tinggi Global)', 'Filantropi Pendidikan & Pembinaan Kepemimpinan', 'Yayasan beasiswa yang telah mengirimkan ratusan talenta terbaik Indonesia menempuh studi magister dan doktoral di Harvard, Oxford, dan Cambridge.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://ancorafoundation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Kalis Mardiasih (kalis-mardiasih)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'kalis-mardiasih' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Kalis Mardiasih',
      title = 'Penulis, Kolumnis & Edukator Kesetaraan Gender Humanis Berakar Nilai Pesantren',
      category = 'Pencerah Generasi',
      quote = 'Membela hak perempuan dan mengajarkan Islam yang ramah, adil, dan membebaskan adalah ikhtiar merawat martabat kemanusiaan di akar rumput masyarakat.',
      bio_paragraphs = ARRAY['Berasal dari keluarga pesantren di Blora, Jawa Tengah, Kalis Mardiasih membawa pemahaman khazanah kitab kuning klasik yang mendalam ke dalam diskursus kesetaraan gender dan perlindungan perempuan modern di Indonesia.', 'Kalis mendobrak tafsir-tafsir patriarkal yang kerap digunakan untuk melegitimasi kekerasan dalam rumah tangga, perkawinan anak di bawah umur, dan pembungkaman suara perempuan. Melalui buku-buku bestsellernya, seperti ''Muslimah yang Memperdebatkan Kepalsuan'', ''Hijrah Jangan Jauh-Jauh'', hingga ''Sebab Bebek Tak Pernah Bersedih'' - Kalis menyajikan argumen fiqih emansipatoris dengan bahasa tutur yang sangat segar, jenaka, dan membumi bagi generasi muda.', 'Bagi ribuan santriwati dan pemuda Muslim, Kalis Mardiasih adalah lentera pencerahan: membuktikan bahwa beragama dengan taat dan memperjuangkan keadilan hak asasi perempuan adalah dua hal yang saling menguatkan dan berakar pada ajaran kasih sayang semesta.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('kalis-mardiasih', 'Kalis Mardiasih', 'Penulis, Kolumnis & Edukator Kesetaraan Gender Humanis Berakar Nilai Pesantren', 'Pencerah Generasi', 'Membela hak perempuan dan mengajarkan Islam yang ramah, adil, dan membebaskan adalah ikhtiar merawat martabat kemanusiaan di akar rumput masyarakat.', ARRAY['Berasal dari keluarga pesantren di Blora, Jawa Tengah, Kalis Mardiasih membawa pemahaman khazanah kitab kuning klasik yang mendalam ke dalam diskursus kesetaraan gender dan perlindungan perempuan modern di Indonesia.', 'Kalis mendobrak tafsir-tafsir patriarkal yang kerap digunakan untuk melegitimasi kekerasan dalam rumah tangga, perkawinan anak di bawah umur, dan pembungkaman suara perempuan. Melalui buku-buku bestsellernya, seperti ''Muslimah yang Memperdebatkan Kepalsuan'', ''Hijrah Jangan Jauh-Jauh'', hingga ''Sebab Bebek Tak Pernah Bersedih'' - Kalis menyajikan argumen fiqih emansipatoris dengan bahasa tutur yang sangat segar, jenaka, dan membumi bagi generasi muda.', 'Bagi ribuan santriwati dan pemuda Muslim, Kalis Mardiasih adalah lentera pencerahan: membuktikan bahwa beragama dengan taat dan memperjuangkan keadilan hak asasi perempuan adalah dua hal yang saling menguatkan dan berakar pada ajaran kasih sayang semesta.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2019', 'KOLUMNIS ISLAM EMANSIPATORIS & BUKU DEBUT', 'Menulis ratusan esai viral di Mojok.co dan menerbitkan buku Muslimah yang Memperdebatkan Kepalsuan membedah keadilan gender berakar pesantren.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2022', 'ADVOKASI PENGESAHAN UU TPKS & HIJRAH JANGAN JAUH-JAUH', 'Memimpin kampanye masyarakat sipil mengawal pengesahan UU Tindak Pidana Kekerasan Seksual (UU TPKS) dan merilis buku Hijrah Jangan Jauh-Jauh.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'LOKAKARYA PENDIDIKAN PESANTREN RAMAH ANAK', 'Menggelar roadshow pelatihan pencegahan kekerasan berbasis gender dan kesehatan reproduksi di ratusan pesantren di Pulau Jawa dan Madura.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Muslimah yang Memperdebatkan Kepalsuan', 'Karya Literatur Fiqih Emansipatoris & Gender', 'Kumpulan esai reflektif yang membongkar bias patriarki dalam penafsiran agama dan membela otonomi perempuan.', 'https://www.gramedia.com', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Hijrah Jangan Jauh-Jauh, Nanti Lupa Pulang', 'Kritik Sosial Fenomena Keagamaan Populer', 'Pembedahan fenomena hijrah instan perkotaan yang kerap melupakan etika kesantunan dan empati sosial sehari-hari.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Modul Advokasi Pesantren Aman & Bebas Kekerasan', 'Kurikulum Perlindungan Santri Putri', 'Panduan pencegahan kekerasan seksual dan penanganan trauma bagi pengurus pondok pesantren dan santri di berbagai daerah.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mengaji Keadilan Gender dari Serambi Pesantren: Kisah Kalis Mardiasih Membela Hak Perempuan', 'GENDER & AGAMA', '7 Menit Membaca', 'Bagaimana ajaran kitab kuning klasik sebenarnya sangat menjunjung tinggi martabat dan perlindungan perempuan.', 'Banyak orang mengira perjuangan hak perempuan adalah produk impor dari barat. Kalis membuktikan bahwa nilai-nilai keadilan hakiki, perlindungan dari kekerasan, dan kemuliaan akal perempuan sudah termaktub jelas dalam khazanah Islam klasik yang diajarkan para ulama nusantara.', '/artikel/kalis-mardiasih-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Hijrah Tanpa Kehilangan Akal Sehat: Menolak Ekstremisme Agama yang Menghakimi Sesama', 'LITERASI KEAGAMAAN', '6 Menit Membaca', 'Pentingnya beragama dengan mendahulukan akhlak mulia dan kepedulian sosial dibanding simbol pakaian luar.', 'Beragama bukanlah perlombaan merasa paling suci dan gemar mengkafirkan orang lain. Hijrah sejati adalah ketika perilakumu membuat tetanggamu merasa aman dan orang tuamu merasa dihormati dengan penuh cinta kasih.', '/artikel/kalis-mardiasih-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Muslimah yang Memperdebatkan Kepalsuan', 'Karya Literatur Fiqih Emansipatoris & Gender', 'Kumpulan esai reflektif yang membongkar bias patriarki dalam penafsiran agama dan membela otonomi perempuan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Hijrah Jangan Jauh-Jauh, Nanti Lupa Pulang', 'Kritik Sosial Fenomena Keagamaan Populer', 'Pembedahan fenomena hijrah instan perkotaan yang kerap melupakan etika kesantunan dan empati sosial sehari-hari.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Gerald Sebastian (gerald-sebastian)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'gerald-sebastian' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Gerald Sebastian',
      title = 'Co-founder & CEO Kok Bisa? (Pelopor Edukasi Animasi Sains & Literasi Visual Nusantara)',
      category = 'Pencerah Generasi',
      quote = 'Sains dan pengetahuan tidak harus rumit dan membosankan; ketika kita mengemas ilmu dengan visual animasi yang memikat dan pertanyaan sehari-hari yang menggelitik, jutaan anak bangsa akan jatuh cinta pada ilmu pengetahuan.',
      bio_paragraphs = ARRAY['Mengawali proyek tugas kuliah di program studi Desain Komunikasi Visual (DKV) Universitas Multimedia Nusantara pada 2015 bersama Ketut Yoga Saskara dan Alvin Hendranto, Gerald Sebastian gelisah melihat bagaimana sains di sekolah kerap diajarkan secara kaku, hafalan rumus mati, dan membosankan bagi jutaan pelajar Indonesia.', 'Gerald dan timnya mendirikan kanal YouTube ''Kok Bisa?''. Dengan memadukan karakter kartun yang ekspresif, riset ilmiah saintifik terverifikasi, dan narasi yang menjawab pertanyaan keseharian yang unik, mulai dari ''Kenapa Kita Bisa Kentut?'', ''Bagaimana Virus Menyerang Sel Tubuh?'', hingga ''Apa yang Terjadi Jika Bumi Berhenti Berputar?'' - Kok Bisa? menjelma menjadi kanal edukasi animasi sains terbesar di Indonesia dengan lebih dari 4,5 juta pelanggan.', 'Gerald membuktikan revolusi pedagogi visual: bahwa animasi anak bangsa mampu mengubah generasi yang malas membaca menjadi pembelajar yang haus akan sains, astronomi, sejarah, dan teknologi.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('gerald-sebastian', 'Gerald Sebastian', 'Co-founder & CEO Kok Bisa? (Pelopor Edukasi Animasi Sains & Literasi Visual Nusantara)', 'Pencerah Generasi', 'Sains dan pengetahuan tidak harus rumit dan membosankan; ketika kita mengemas ilmu dengan visual animasi yang memikat dan pertanyaan sehari-hari yang menggelitik, jutaan anak bangsa akan jatuh cinta pada ilmu pengetahuan.', ARRAY['Mengawali proyek tugas kuliah di program studi Desain Komunikasi Visual (DKV) Universitas Multimedia Nusantara pada 2015 bersama Ketut Yoga Saskara dan Alvin Hendranto, Gerald Sebastian gelisah melihat bagaimana sains di sekolah kerap diajarkan secara kaku, hafalan rumus mati, dan membosankan bagi jutaan pelajar Indonesia.', 'Gerald dan timnya mendirikan kanal YouTube ''Kok Bisa?''. Dengan memadukan karakter kartun yang ekspresif, riset ilmiah saintifik terverifikasi, dan narasi yang menjawab pertanyaan keseharian yang unik, mulai dari ''Kenapa Kita Bisa Kentut?'', ''Bagaimana Virus Menyerang Sel Tubuh?'', hingga ''Apa yang Terjadi Jika Bumi Berhenti Berputar?'' - Kok Bisa? menjelma menjadi kanal edukasi animasi sains terbesar di Indonesia dengan lebih dari 4,5 juta pelanggan.', 'Gerald membuktikan revolusi pedagogi visual: bahwa animasi anak bangsa mampu mengubah generasi yang malas membaca menjadi pembelajar yang haus akan sains, astronomi, sejarah, dan teknologi.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015', 'PELUNCURAN EPISODE PERTAMA KOK BISA?', 'Merilis video animasi pertama tentang ''Kenapa Kita Bisa Menangis'' dari kamar indekos di Tangerang.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2021', 'YOUTUBE LEARNING FUND & BUKU KOK BISA?', 'Menerima hibah riset YouTube Learning Fund global, menerbitkan buku sains anak bestseller, dan bermitra dengan LIPI dan Kemendikbud.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2026', 'AKADEMI KOK BISA & KAMPANYE SAINS IKLIM NUSANTARA', 'Melatih ribuan guru sekolah dasar memproduksi media ajar visual interaktif dan meluncurkan serial edukasi mitigasi krisis iklim.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kanal YouTube Kok Bisa? (Platform Animasi Edukasi Terbesar)', 'Media Edukasi Sains Populer & Animasi Digital', 'Koleksi ratusan video animasi berstandar riset ilmiah yang telah ditonton lebih dari 700 juta kali oleh pelajar dan keluarga Indonesia.', 'https://youtube.com/@KokBisa', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Kok Bisa? Tanya Jawab Sains Seru Dunia', 'Karya Literatur Sains Populer Anak & Remaja', 'Buku visual interaktif yang merangkum misteri sains biologi, fisika, dan teknologi dalam bahasa sederhana yang menyenangkan.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Akademi Pendidik Kreator Visual Kok Bisa', 'Pelatihan Vokasi Guru & Teknologi Pendidikan', 'Program lokakarya bagi para guru di daerah 3T untuk membuat modul pembelajaran digital yang memikat siswa di ruang kelas.', 'https://kokbisa.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menyalakan Rasa Ingin Tahu: Bagaimana Animasi Mengubah Anak-Anak Menjadi Pecinta Sains', 'TEKNOLOGI PENDIDIKAN', '7 Menit Membaca', 'Metodologi Kok Bisa? meramu jurnal penelitian ilmiah yang rumit menjadi cerita animasi visual yang mudah dimengerti anak SD.', 'Anak-anak pada dasarnya memiliki rasa ingin tahu yang tak terbatas. Kesalahan kita adalah menyajikan sains sebagai rumus angka mati yang harus dihafal untuk ujian. Ketika sains dihadirkan sebagai petualangan menjawab misteri semesta, anak-anak akan belajar dengan mata yang berbinar-binar.', '/artikel/gerald-sebastian-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Demokratisasi Konten Edukasi: Melawan Arus Sensasionalisme Algoritma Media Sosial', 'LITERASI DIGITAL', '6 Menit Membaca', 'Tantangan mempertahankan mutu dan akurasi fakta di tengah ekosistem internet yang lebih menguntungkan konten sensasi.', 'Membuat konten edukasi animasi membutuhkan riset berhari-hari dan biaya produksi yang tidak sedikit. Mempertahankan komitmen mencerdaskan bangsa di tengah godaan konten clickbait adalah bentuk dedikasi kebangsaan yang sesungguhnya.', '/artikel/gerald-sebastian-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Kanal YouTube Kok Bisa? (Platform Animasi Edukasi Terbesar)', 'Media Edukasi Sains Populer & Animasi Digital', 'Koleksi ratusan video animasi berstandar riset ilmiah yang telah ditonton lebih dari 700 juta kali oleh pelajar dan keluarga Indonesia.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@KokBisa', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Kok Bisa? Tanya Jawab Sains Seru Dunia', 'Karya Literatur Sains Populer Anak & Remaja', 'Buku visual interaktif yang merangkum misteri sains biologi, fisika, dan teknologi dalam bahasa sederhana yang menyenangkan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Heni Sri Sundani (heni-sri-sundani)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'heni-sri-sundani' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Heni Sri Sundani',
      title = 'Pendiri Gerakan Anak Petani Cerdas & AgroEdu Jampang (Mantan Buruh Migran Pencerah Desa)',
      category = 'Pencerah Generasi',
      quote = 'Mantan buruh migran pun mampu mendirikan perpustakaan dan sekolah gratis bagi ribuan anak petani desa; pendidikan adalah satu-satunya kunci memutus rantai kemiskinan antargenerasi.',
      bio_paragraphs = ARRAY['Terlahir dari keluarga petani miskin di Dusun Sasak, Desa Kalijati, Karawang, Heni Sri Sundani sempat terpaksa merantau ke Hong Kong bekerja sebagai Pekerja Migran Indonesia (buruh migran/PRT) demi membantu ekonomi keluarganya. Namun di tengah kerasnya jam kerja mengurus rumah tangga majikan, Heni memanfaatkan hari liburnya untuk menempuh kuliah sarjana di Saint Mary''s University Hong Kong hingga lulus dengan predikat cum laude.', 'Sepulang ke tanah air, Heni menolak menikmati kesuksesan seorang diri. Bersama suaminya, ia mendirikan Gerakan Anak Petani Cerdas dan AgroEdu Jampang di Bogor. Heni menyulap rumahnya menjadi perpustakaan gratis dan pusat belajar bahasa Inggris, komputer, serta pertanian modern bagi ribuan anak petani miskin yang terancam putus sekolah.', 'Masuk dalam daftar Forbes 30 Under 30 Asia dan diakui sebagai salah satu tokoh paling inspiratif dunia, Heni Sri Sundani membuktikan kekuatan emansipasi pendidikan: mengubah keringat mantan buruh migran menjadi jalan terang bagi ribuan anak desa meraih masa depan gemilang.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('heni-sri-sundani', 'Heni Sri Sundani', 'Pendiri Gerakan Anak Petani Cerdas & AgroEdu Jampang (Mantan Buruh Migran Pencerah Desa)', 'Pencerah Generasi', 'Mantan buruh migran pun mampu mendirikan perpustakaan dan sekolah gratis bagi ribuan anak petani desa; pendidikan adalah satu-satunya kunci memutus rantai kemiskinan antargenerasi.', ARRAY['Terlahir dari keluarga petani miskin di Dusun Sasak, Desa Kalijati, Karawang, Heni Sri Sundani sempat terpaksa merantau ke Hong Kong bekerja sebagai Pekerja Migran Indonesia (buruh migran/PRT) demi membantu ekonomi keluarganya. Namun di tengah kerasnya jam kerja mengurus rumah tangga majikan, Heni memanfaatkan hari liburnya untuk menempuh kuliah sarjana di Saint Mary''s University Hong Kong hingga lulus dengan predikat cum laude.', 'Sepulang ke tanah air, Heni menolak menikmati kesuksesan seorang diri. Bersama suaminya, ia mendirikan Gerakan Anak Petani Cerdas dan AgroEdu Jampang di Bogor. Heni menyulap rumahnya menjadi perpustakaan gratis dan pusat belajar bahasa Inggris, komputer, serta pertanian modern bagi ribuan anak petani miskin yang terancam putus sekolah.', 'Masuk dalam daftar Forbes 30 Under 30 Asia dan diakui sebagai salah satu tokoh paling inspiratif dunia, Heni Sri Sundani membuktikan kekuatan emansipasi pendidikan: mengubah keringat mantan buruh migran menjadi jalan terang bagi ribuan anak desa meraih masa depan gemilang.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 - 2011', 'BEKERJA DI HONG KONG & KULIAH CUM LAUDE', 'Bekerja sebagai asisten rumah tangga di Hong Kong sembari menyelesaikan gelar sarjana manajemen bisnis dengan predikat kelulusan tertinggi.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 - 2016', 'PENDIRIAN GERAKAN ANAK PETANI CERDAS & FORBES 30U30', 'Mendirikan komunitas belajar gratis dan perpustakaan desa bagi anak-anak petani di Bogor dan masuk dalam daftar Forbes 30 Under 30 Asia.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 - 2026', 'AGROEDU JAMPANG & BEASISWA PENDIDIKAN TINGGI', 'Mengembangkan agrowisata edukasi AgroEdu Jampang dan membiayai ratusan anak petani binaan menembus universitas negeri terkemuka.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Gerakan Anak Petani Cerdas (Komunitas Belajar Desa Gratis)', 'Pendidikan Transformatif & Pengentasan Buta Aksara', 'Pusat belajar alternatif yang menyediakan bimbingan literasi, komputer, dan bahasa asing gratis bagi ribuan anak petani di Jawa Barat.', 'https://sektorlokal.id', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'AgroEdu Jampang (Agrowisata Edukasi Pertanian Mandiri)', 'Kewirausahaan Sosial Agribisnis Berkelanjutan', 'Unit usaha pertanian organik yang menjadi laboratorium belajar bercocok tanam sekaligus menopang operasional sekolah gratis anak petani.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Dari Hong Kong ke Jampang (Memoar Inspirasi)', 'Karya Literatur Memoar & Motivasi Hidup', 'Catatan perjalanan hidup perjuangan buruh migran meraih pendidikan tinggi dan membangun desa kelahirannya.', 'https://www.gramedia.com', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Kasur Majikan ke Wisuda Cum Laude: Kisah Ketabahan Heni Sri Sundani', 'INSPIRASI PEREMPUAN', '7 Menit Membaca', 'Perjalanan luar biasa seorang buruh migran belajar di sela-sela mencuci piring demi mengubah nasib anak-anak petani di tanah air.', 'Tidak ada pekerjaan halal yang hina. Ketika Heni mencuci lantai dan menggosok baju di Hong Kong, ia memegang buku pelajaran di tangan kirinya. Ia membuktikan bahwa tekad belajar yang membara mampu meruntuhkan segala sekat diskriminasi sosial.', '/artikel/heni-sri-sundani-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Memutus Rantai Kemiskinan Petani: Mengapa Anak Desa Berhak Mendapatkan Akses Pendidikan Terbaik', 'PENDIDIKAN DESA', '6 Menit Membaca', 'Pentingnya membekali anak-anak perdesaan dengan keterampilan digital dan bahasa global tanpa mencabut mereka dari kecintaan pada pertanian.', 'Anak petani tidak boleh selamanya terjebak menjadi buruh cangkul yang diperas tengkulak. Dengan membekali mereka literasi digital dan teknologi agribisnis modern, mereka akan tumbuh menjadi arsitek-arsitek pertanian mandiri yang memimpin kedaulatan pangan bangsanya.', '/artikel/heni-sri-sundani-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Gerakan Anak Petani Cerdas (Komunitas Belajar Desa Gratis)', 'Pendidikan Transformatif & Pengentasan Buta Aksara', 'Pusat belajar alternatif yang menyediakan bimbingan literasi, komputer, dan bahasa asing gratis bagi ribuan anak petani di Jawa Barat.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'AgroEdu Jampang (Agrowisata Edukasi Pertanian Mandiri)', 'Kewirausahaan Sosial Agribisnis Berkelanjutan', 'Unit usaha pertanian organik yang menjadi laboratorium belajar bercocok tanam sekaligus menopang operasional sekolah gratis anak petani.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Angga Fauzan (angga-fauzan)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'angga-fauzan' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Angga Fauzan',
      title = 'Co-founder & CEO MySkill (Inovator Upskilling Karier & Demokratisasi Skill Digital Inklusif)',
      category = 'Pencerah Generasi',
      quote = 'Akses pendidikan vokasi dan keterampilan karier kelas dunia harus bisa diraih oleh anak desa manapun tanpa terhalang sekat biaya mahal dan jarak geografis.',
      bio_paragraphs = ARRAY['Tumbuh besar dari keluarga bersahaja di Boyolali, Jawa Tengah, di mana keluarganya sempat terpaksa tinggal di bekas kandang kambing setelah rumahnya digusur, Angga Fauzan membuktikan bahwa keterbatasan ekonomi ekstrem bukanlah akhir dari cita-cita seorang anak desa.', 'Melalui beasiswa Bidikmisi, Angga menyelesaikan studi Desain Komunikasi Visual di ITB dan melanjutkan magister di University of Edinburgh, Skotlandia, melalui beasiswa LPDP. Menyadari tingginya angka pengangguran lulusan perguruan tinggi akibat kesenjangan antara kurikulum kampus dan kebutuhan industri digital modern, pada 2021 Angga mendirikan MySkill.', 'MySkill berkembang pesat menjadi platform upskilling karier terbesar di Indonesia yang telah melatih lebih dari 1,5 juta generasi muda dalam bidang data science, digital marketing, UI/UX, dan software development dengan biaya terjangkau. Masuk dalam daftar Forbes 30 Under 30 Asia, Angga adalah bukti nyata bahwa talenta dari pelosok desa mampu memimpin revolusi pendidikan vokasi digital nasional.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('angga-fauzan', 'Angga Fauzan', 'Co-founder & CEO MySkill (Inovator Upskilling Karier & Demokratisasi Skill Digital Inklusif)', 'Pencerah Generasi', 'Akses pendidikan vokasi dan keterampilan karier kelas dunia harus bisa diraih oleh anak desa manapun tanpa terhalang sekat biaya mahal dan jarak geografis.', ARRAY['Tumbuh besar dari keluarga bersahaja di Boyolali, Jawa Tengah, di mana keluarganya sempat terpaksa tinggal di bekas kandang kambing setelah rumahnya digusur, Angga Fauzan membuktikan bahwa keterbatasan ekonomi ekstrem bukanlah akhir dari cita-cita seorang anak desa.', 'Melalui beasiswa Bidikmisi, Angga menyelesaikan studi Desain Komunikasi Visual di ITB dan melanjutkan magister di University of Edinburgh, Skotlandia, melalui beasiswa LPDP. Menyadari tingginya angka pengangguran lulusan perguruan tinggi akibat kesenjangan antara kurikulum kampus dan kebutuhan industri digital modern, pada 2021 Angga mendirikan MySkill.', 'MySkill berkembang pesat menjadi platform upskilling karier terbesar di Indonesia yang telah melatih lebih dari 1,5 juta generasi muda dalam bidang data science, digital marketing, UI/UX, dan software development dengan biaya terjangkau. Masuk dalam daftar Forbes 30 Under 30 Asia, Angga adalah bukti nyata bahwa talenta dari pelosok desa mampu memimpin revolusi pendidikan vokasi digital nasional.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 - 2019', 'DARI BOYOLALI KE EDINBURGH LEWAT BEASISWA', 'Menempuh studi DKV ITB lewat Bidikmisi dan menyelesaikan S2 di Edinburgh University lewat beasiswa LPDP.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021', 'PENDIRIAN MYSKILL & BOOTCAMP INKLUSIF', 'Mendirikan MySkill untuk menjembatani kesenjangan keterampilan kerja anak muda daerah dengan industri teknologi modern.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'MELATIH 1,5 JUTA WARGA & FORBES 30 UNDER 30', 'Menerima pengakuan Forbes 30 Under 30 Asia dan menyalurkan puluhan ribu talenta daerah ke perusahaan rintisan dan korporasi nasional.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'MySkill.id (Platform Upskilling Karier & E-Learning Digital)', 'EduTech Keterampilan Kerja & Bootcamp Vokasi', 'Platform pembelajaran karier daring terpadu yang menyediakan ratusan modul video interaktif, bootcamp intensif, dan bimbingan portofolio kerja.', 'https://myskill.id', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Beasiswa Upskilling Talenta Daerah Prasejahtera', 'Inklusi Digital & Akselerasi Karier Pemuda', 'Penyaluran ribuan beasiswa pelatihan skill digital gratis bagi mahasiswa dan lulusan baru dari keluarga kurang mampu di luar Pulau Jawa.', 'https://myskill.id', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kanal Komunitas Pemburu Beasiswa & Literasi Studi Lanjut', 'Mentorship Pendidikan Internasional', 'Panduan terstruktur menulis esai beasiswa LPDP dan bimbingan wawancara bagi pemuda daerah perintis.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Kandang Kambing Menembus Skotlandia: Kisah Perjuangan Hidup Angga Fauzan', 'MOBILITAS SOSIAL', '7 Menit Membaca', 'Perjalanan ketabahan Angga membuktikan bahwa beasiswa pendidikan adalah instrumen pengubah takdir paling nyata di Indonesia.', 'Ketika hidupmu dimulai dari titik minus, menyerah adalah hal yang paling mudah. Namun ketika kamu memegang teguh keyakinan bahwa pendidikan mampu mengubah garis keturunan keluargamu, setiap pintu beasiswa yang terbuka akan kamu perjuangkan dengan darah dan air mata.', '/artikel/angga-fauzan-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjembatani Kesenjangan Skill Kerja: Mengapa Ijazah Sarjana Saja Tidak Lagi Cukup', 'KARIER DIGITAL', '6 Menit Membaca', 'Pentingnya penguasaan keterampilan teknis terapan data dan kecerdasan buatan bagi generasi muda di era disrupsi.', 'Industri kerja modern tidak lagi bertanya di mana kamu kuliah, melainkan kemampuan riil apa yang bisa kamu eksekusi dan portofolio apa yang pernah kamu buat. Belajar keterampilan digital secara mandiri adalah cara terbaik mengamankan masa depan karier.', '/artikel/angga-fauzan-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'MySkill.id (Platform Upskilling Karier & E-Learning Digital)', 'EduTech Keterampilan Kerja & Bootcamp Vokasi', 'Platform pembelajaran karier daring terpadu yang menyediakan ratusan modul video interaktif, bootcamp intensif, dan bimbingan portofolio kerja.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://myskill.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Program Beasiswa Upskilling Talenta Daerah Prasejahtera', 'Inklusi Digital & Akselerasi Karier Pemuda', 'Penyaluran ribuan beasiswa pelatihan skill digital gratis bagi mahasiswa dan lulusan baru dari keluarga kurang mampu di luar Pulau Jawa.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://myskill.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Alanda Kariza (alanda-kariza)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'alanda-kariza' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Alanda Kariza',
      title = 'Inisiator Indonesian Youth Conference (IYC), Penulis Sosial & Penggerak Kepemimpinan Pemuda',
      category = 'Pencerah Generasi',
      quote = 'Kepemimpinan pemuda bukan soal menunggu diberi giliran oleh generasi tua; ia adalah keberanian mengambil inisiatif sosial sejak dini untuk memecahkan persoalan di sekitar kita.',
      bio_paragraphs = ARRAY['Mengawali kiprah sosial sejak usia 15 tahun saat mendirikan komunitas ''The Cure for Tomorrow'' untuk mengedukasi mitigasi krisis iklim pasca-bencana banjir besar Jakarta 2007, Alanda Kariza adalah pionir gerakan kepemudaan modern di Indonesia.', 'Pada 2010 di usia 19 tahun, Alanda menginisiasi Indonesian Youth Conference (IYC), sebuah forum konferensi nasional pemuda independen pertama yang mempertemukan ratusan delegasi pemuda dari 33 provinsi untuk menyusun manifesto aspirasi pemuda dan menyalurkannya langsung kepada para pembuat kebijakan. Alanda juga konsisten menulis buku-buku advokasi sosial dan pengembangan diri yang menginspirasi generasi muda.', 'Menyelesaikan studi magister di bidang Social Policy di University of Oxford melalui beasiswa Chevening, Alanda Kariza membuktikan kepemimpinan perempuan muda: konsisten menjembatani aspirasi akar rumput dengan perumusan kebijakan publik yang inklusif.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('alanda-kariza', 'Alanda Kariza', 'Inisiator Indonesian Youth Conference (IYC), Penulis Sosial & Penggerak Kepemimpinan Pemuda', 'Pencerah Generasi', 'Kepemimpinan pemuda bukan soal menunggu diberi giliran oleh generasi tua; ia adalah keberanian mengambil inisiatif sosial sejak dini untuk memecahkan persoalan di sekitar kita.', ARRAY['Mengawali kiprah sosial sejak usia 15 tahun saat mendirikan komunitas ''The Cure for Tomorrow'' untuk mengedukasi mitigasi krisis iklim pasca-bencana banjir besar Jakarta 2007, Alanda Kariza adalah pionir gerakan kepemudaan modern di Indonesia.', 'Pada 2010 di usia 19 tahun, Alanda menginisiasi Indonesian Youth Conference (IYC), sebuah forum konferensi nasional pemuda independen pertama yang mempertemukan ratusan delegasi pemuda dari 33 provinsi untuk menyusun manifesto aspirasi pemuda dan menyalurkannya langsung kepada para pembuat kebijakan. Alanda juga konsisten menulis buku-buku advokasi sosial dan pengembangan diri yang menginspirasi generasi muda.', 'Menyelesaikan studi magister di bidang Social Policy di University of Oxford melalui beasiswa Chevening, Alanda Kariza membuktikan kepemimpinan perempuan muda: konsisten menjembatani aspirasi akar rumput dengan perumusan kebijakan publik yang inklusif.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2009 - 2010', 'PENDIRIAN INDONESIAN YOUTH CONFERENCE (IYC)', 'Menggagas IYC dan mendirikan Sinergi Muda, memobilisasi ribuan pemuda dari seluruh penjuru Indonesia dalam merumuskan agenda pembangunan.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018', 'BEASISWA CHEVENING & STUDI KEBIJAKAN DI OXFORD', 'Meraih beasiswa bergengsi Chevening dan menyelesaikan studi kebijakan sosial di University of Oxford di Inggris.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2026', 'ADVISOR KEBIJAKAN PUBLIK & PENULIS LITERATUR SOSIAL', 'Menjadi konsultan kebijakan di lembaga pembangunan internasional dan aktif menulis karya reflektif kepemimpinan perempuan muda.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Indonesian Youth Conference (IYC & Sinergi Muda)', 'Gerakan Kepemudaan & Advokasi Kebijakan Publik', 'Konferensi tahunan pemuda lintas nusantara yang memfasilitasi dialog langsung antara pemuda daerah dengan para pemimpin bangsa.', 'https://sinergimuda.org', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Muda, Berdaya, Berkarya & Surat Penggemar', 'Karya Literatur Kepemudaan & Esai Sosial', 'Kumpulan tulisan inspiratif memandu pemuda menemukan panggilan kepemimpinan dan merintis inisiatif sosial mandiri.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Edukasi Kebijakan Sosial & Pemberdayaan Perempuan', 'Riset Kebijakan Inklusif & Mentorship', 'Program pembinaan advokasi bagi para pemimpin komunitas perempuan muda di berbagai daerah nusantara.', 'https://alandakariza.com', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Pemuda Bukan Sekadar Objek Politik: Kisah IYC Mengubah Aspirasi Menjadi Kebijakan Riil', 'KEPEMIMPINAN PEMUDA', '7 Menit Membaca', 'Catatan Alanda Kariza tentang pentingnya melibatkan suara anak muda dalam penyusunan undang-undang.', 'Setiap pemilu, pemuda selalu dijadikan komoditas suara kampanye. Melalui IYC, kami membuktikan bahwa pemuda memiliki gagasan teknis yang sangat matang tentang tata kota, pendidikan, dan lingkungan bila diberi ruang bicara yang setara di meja pengambil kebijakan.', '/artikel/alanda-kariza-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membina Gerakan yang Berkelanjutan: Dari Semangat Emosional Menuju Struktur Organisasi yang Kuat', 'ORGANISASI SOSIAL', '6 Menit Membaca', 'Panduan praktis mengelola komunitas nirlaba agar tidak mati suri setelah acara selesai.', 'Banyak inisiatif sosial pemuda yang bubar setelah setahun karena hanya bersandar pada semangat berapi-api tanpa tata kelola keuangan yang transparan dan regenerasi kepemimpinan. Gerakan yang hebat adalah gerakan yang mampu terus berjalan meski para pendirinya telah melangkah ke peran lain.', '/artikel/alanda-kariza-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Indonesian Youth Conference (IYC & Sinergi Muda)', 'Gerakan Kepemudaan & Advokasi Kebijakan Publik', 'Konferensi tahunan pemuda lintas nusantara yang memfasilitasi dialog langsung antara pemuda daerah dengan para pemimpin bangsa.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://sinergimuda.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Muda, Berdaya, Berkarya & Surat Penggemar', 'Karya Literatur Kepemudaan & Esai Sosial', 'Kumpulan tulisan inspiratif memandu pemuda menemukan panggilan kepemimpinan dan merintis inisiatif sosial mandiri.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Felicia Putri Tjiasaka (felicia-putri-tjiasaka)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'felicia-putri-tjiasaka' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Felicia Putri Tjiasaka',
      title = 'Edukator Literasi Finansial Objektif, Analis Pasar Modal & Penggagas ''Ternak Uang''',
      category = 'Pencerah Generasi',
      quote = 'Melek finansial bukan soal memamerkan kekayaan mewah di media sosial; ia adalah fondasi kemerdekaan hidup agar generasi muda tidak terjebak dalam ilusi gaya hidup konsumtif yang menjebak masa depan.',
      bio_paragraphs = ARRAY['Mengawali karier sebagai analis riset pasar modal dan equity research analyst profesional bersertifikasi CFA (Chartered Financial Analyst) Level III, Felicia Putri Tjiasaka menguasai seluk-beluk instrumen investasi saham, obligasi, dan reksadana dari lantai bursa saham.', 'Kala media sosial di tahun 2020 dibanjiri oleh ''influencer saham'' palsu dan promotor skema ponzi yang menjebak jutaan pemula, Felicia tampil sebagai antitesis: menyajikan edukasi literasi keuangan yang objektif, transparan, berbasis data laporan keuangan riil, dan tanpa embel-embel janji kaya kilat. Bersama rekannya, ia mendirikan platform edukasi Ternak Uang.', 'Melalui konten-konten video edukasi di YouTube dan TikTok yang telah ditonton ratusan juta kali, Felicia membimbing generasi Z dan milenial memahami manajemen arus kas, dana darurat, dan investasi rasional: membuktikan bahwa kebebasan finansial sejati dibangun dari kedisiplinan hidup dan pemahaman risiko yang jujur.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('felicia-putri-tjiasaka', 'Felicia Putri Tjiasaka', 'Edukator Literasi Finansial Objektif, Analis Pasar Modal & Penggagas ''Ternak Uang''', 'Pencerah Generasi', 'Melek finansial bukan soal memamerkan kekayaan mewah di media sosial; ia adalah fondasi kemerdekaan hidup agar generasi muda tidak terjebak dalam ilusi gaya hidup konsumtif yang menjebak masa depan.', ARRAY['Mengawali karier sebagai analis riset pasar modal dan equity research analyst profesional bersertifikasi CFA (Chartered Financial Analyst) Level III, Felicia Putri Tjiasaka menguasai seluk-beluk instrumen investasi saham, obligasi, dan reksadana dari lantai bursa saham.', 'Kala media sosial di tahun 2020 dibanjiri oleh ''influencer saham'' palsu dan promotor skema ponzi yang menjebak jutaan pemula, Felicia tampil sebagai antitesis: menyajikan edukasi literasi keuangan yang objektif, transparan, berbasis data laporan keuangan riil, dan tanpa embel-embel janji kaya kilat. Bersama rekannya, ia mendirikan platform edukasi Ternak Uang.', 'Melalui konten-konten video edukasi di YouTube dan TikTok yang telah ditonton ratusan juta kali, Felicia membimbing generasi Z dan milenial memahami manajemen arus kas, dana darurat, dan investasi rasional: membuktikan bahwa kebebasan finansial sejati dibangun dari kedisiplinan hidup dan pemahaman risiko yang jujur.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2019', 'ANALIS PASAR MODAL & SERTIFIKASI CFA', 'Bekerja sebagai analis pasar modal di sekuritas terkemuka dan meraih sertifikasi internasional Certified Financial Planner (CFP) dan CFA.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020', 'PELOPOR EDUKASI FINANSIAL DIGITAL & TERNAK UANG', 'Memulai edukasi finansial independen di media sosial dan mendirikan platform pembelajaran investasi Ternak Uang.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'LITERASI KEUANGAN MASSAL & FORBES 30 UNDER 30', 'Masuk dalam daftar Forbes 30 Under 30 Asia dan melatih jutaan generasi muda agar merdeka dari jebakan judi online dan pinjaman daring ilegal.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Platform Edukasi Literasi Keuangan Felicia Tjiasaka', 'Edukasi Finansial & Analisis Pasar Modal Terbuka', 'Kanal edukasi keuangan dengan jutaan pengikut yang membedah alur laporan keuangan, portofolio investasi, dan perencanaan pensiun.', 'https://youtube.com/@FeliciaPutriTjiasaka', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Ternak Uang (Aplikasi Belajar Investasi Generasi Muda)', 'Fintech EduTech & Komunitas Investor Pemula', 'Platform pembelajaran modul investasi saham, reksadana, dan properti yang membimbing ratusan ribu investor muda Indonesia.', 'https://ternakuang.id', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kampanye Waspada Pinjol Ilegal & Skema Tipu-Tipu Investasi', 'Advokasi Konsumen Finansial & Literasi Publik', 'Program edukasi bersama regulator keuangan membongkar modus penipuan robot trading dan pinjaman online berbunga mencekik.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membongkar Ilusi Flexing: Mengapa Gaya Hidup Mewah di Medsos Sering Kali Menyembunyikan Utang', 'LITERASI KEUANGAN', '7 Menit Membaca', 'Pembedahan Felicia Putri tentang bahaya fomo finansial dan pentingnya fokus pada nilai kekayaan bersih (net worth) riil.', 'Banyak anak muda yang rela berutang demi membeli barang bermerek hanya untuk terlihat kaya di depan orang-orang yang bahkan tidak mereka sukai. Kekayaan sejati tidak terlihat pada pakaian yang mencolok, melainkan pada ketenangan pikiran saat memiliki tabungan dana darurat dan aset produktif yang terus bertumbuh.', '/artikel/felicia-putri-tjiasaka-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Investasi Tanpa Rasa Serakah: Cara Membangun Portofolio Saham yang Tahan Badai Krisis', 'PASAR MODAL', '6 Menit Membaca', 'Panduan analisis fundamental memilih perusahaan yang memiliki tata kelola bagus dan arus kas operasional yang sehat.', 'Pasar saham bukan kasino tempat menebak angka keberuntungan. Membeli saham berarti membeli kepemilikan bisnis nyata. Ketika kamu memahami model bisnis perusahaan dan membelinya pada harga yang wajar, kamu tidak akan panik saat pasar sedang terkoreksi turun.', '/artikel/felicia-putri-tjiasaka-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Platform Edukasi Literasi Keuangan Felicia Tjiasaka', 'Edukasi Finansial & Analisis Pasar Modal Terbuka', 'Kanal edukasi keuangan dengan jutaan pengikut yang membedah alur laporan keuangan, portofolio investasi, dan perencanaan pensiun.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@FeliciaPutriTjiasaka', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Ternak Uang (Aplikasi Belajar Investasi Generasi Muda)', 'Fintech EduTech & Komunitas Investor Pemula', 'Platform pembelajaran modul investasi saham, reksadana, dan properti yang membimbing ratusan ribu investor muda Indonesia.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://ternakuang.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Dr. Indrawan Nugroho (dr-indrawan-nugroho)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'dr-indrawan-nugroho' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Dr. Indrawan Nugroho',
      title = 'Pakar Inovasi Korporasi, CEO CiAS & Analis Strategi Disrupsi Bisnis',
      category = 'Pencerah Generasi',
      quote = 'Di era disrupsi eksponensial, inovasi bukan lagi pilihan tambahan di ruang rapat; ia adalah instrumen bertahan hidup. Perusahaan yang menolak mendisrupsi dirinya sendiri akan segera didisrupsi oleh zaman.',
      bio_paragraphs = ARRAY['Meraih gelar Doktor dalam bidang Manajemen Stratejik dengan fokus pada inovasi korporasi, Dr. Indrawan Nugroho adalah salah satu konsultan strategi dan analis disrupsi bisnis paling terkemuka di Indonesia. Melalui firma inovasi CiAS (Corporate Innovation Asia), Indrawan telah mendampingi ratusan korporasi BUMN, multinasional, dan perusahaan rintisan dalam merancang transformasi digital dan model bisnis baru.', 'Kala dunia bisnis dihantam gelombang kecerdasan buatan, perubahan perilaku konsumen, dan runtuhnya model bisnis tradisional, Indrawan membagikan ilmunya secara terbuka lewat kanal YouTube pribadinya. Dengan kemampuan membedah studi kasus bisnis dunia (seperti kejatuhan Kodak, kebangkitan Tesla, manuver OpenAI, dan dinamika startup lokal) secara visual, runtut, dan mudah dipahami, kanalnya diakses jutaan profesional dan wirausahawan muda.', 'Bagi generasi pemimpin masa depan, Indrawan Nugroho adalah kompas navigasi strategis: membimbing pelaku usaha agar memiliki kelincahan berpikir (agile mindset) dan keberanian mengambil risiko inovasi sebelum terlindas oleh gelombang perubahan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('dr-indrawan-nugroho', 'Dr. Indrawan Nugroho', 'Pakar Inovasi Korporasi, CEO CiAS & Analis Strategi Disrupsi Bisnis', 'Pencerah Generasi', 'Di era disrupsi eksponensial, inovasi bukan lagi pilihan tambahan di ruang rapat; ia adalah instrumen bertahan hidup. Perusahaan yang menolak mendisrupsi dirinya sendiri akan segera didisrupsi oleh zaman.', ARRAY['Meraih gelar Doktor dalam bidang Manajemen Stratejik dengan fokus pada inovasi korporasi, Dr. Indrawan Nugroho adalah salah satu konsultan strategi dan analis disrupsi bisnis paling terkemuka di Indonesia. Melalui firma inovasi CiAS (Corporate Innovation Asia), Indrawan telah mendampingi ratusan korporasi BUMN, multinasional, dan perusahaan rintisan dalam merancang transformasi digital dan model bisnis baru.', 'Kala dunia bisnis dihantam gelombang kecerdasan buatan, perubahan perilaku konsumen, dan runtuhnya model bisnis tradisional, Indrawan membagikan ilmunya secara terbuka lewat kanal YouTube pribadinya. Dengan kemampuan membedah studi kasus bisnis dunia (seperti kejatuhan Kodak, kebangkitan Tesla, manuver OpenAI, dan dinamika startup lokal) secara visual, runtut, dan mudah dipahami, kanalnya diakses jutaan profesional dan wirausahawan muda.', 'Bagi generasi pemimpin masa depan, Indrawan Nugroho adalah kompas navigasi strategis: membimbing pelaku usaha agar memiliki kelincahan berpikir (agile mindset) dan keberanian mengambil risiko inovasi sebelum terlindas oleh gelombang perubahan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 - 2015', 'PENDIRIAN CIAS & KONSULTANSI INOVASI KORPORASI', 'Mendirikan Corporate Innovation Asia (CiAS) dan merancang kerangka kerja inovasi terapan bagi perusahaan-perusahaan terkemuka Indonesia.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2022', 'GELOMBANG EDUKASI DIGITAL & ANALISIS DISRUPSI', 'Membangun kanal video analisis bisnis harian yang menjadi rujukan wajib bagi para eksekutif, akademisi, dan mahasiswa manajemen.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'PROGRAM INOVATOR NUSANTARA & AI STRATEGY ROADMAP', 'Memimpin penyusunan peta jalan integrasi kecerdasan buatan bagi industri manufaktur dan perbankan nasional.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'CiAS (Corporate Innovation Asia)', 'Konsultansi Strategi Inovasi & Transformasi Bisnis', 'Firma konsultan inovasi terdepan yang mendesain arsitektur transformasi korporasi dan inkubasi unit bisnis baru.', 'https://cias.co', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kanal Analisis Strategi Bisnis Dr. Indrawan Nugroho', 'Media Edukasi Manajemen & Studi Kasus Disrupsi', 'Koleksi ratusan video studi kasus mendalam tentang inovasi teknologi, manajemen kepemimpinan, dan persaingan pasar global.', 'https://youtube.com/@IndrawanNugroho', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Corporate Innovation Mastery & Agile Thinking', 'Karya Literatur Manajemen Bisnis Stratejik', 'Buku panduan praktis bagi para pemimpin korporasi dalam membangun budaya inovasi dan mengeksekusi ide disruptif.', 'https://cias.co', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Jebakan Keberhasilan Masa Lalu: Mengapa Perusahaan Raksasa Kerap Buta Melihat Ancaman Disrupsi', 'STRATEGI BISNIS', '7 Menit Membaca', 'Analisis Dr. Indrawan Nugroho tentang innovator''s dilemma dan mengapa kepuasan pada profit saat ini adalah awal dari kehancuran.', 'Perusahaan besar jarang bangkrut karena produknya buruk; mereka bangkrut karena mereka terlalu lama menikmati kesuksesan produk lama mereka dan menolak berinvestasi pada teknologi baru yang awalnya tampak kecil. Inovasi menuntut kerendahan hati untuk terus merasa lapar dan siap merusak model bisnis sendiri demi masa depan.', '/artikel/dr-indrawan-nugroho-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Memimpin di Era Ketidakpastian: Keterampilan Berpikir Kritis yang Wajib Dimiliki Pemimpin Masa Depan', 'KEPEMIMPINAN', '6 Menit Membaca', 'Pentingnya mengadopsi pola pikir adaptif dan eksperimen cepat dalam menavigasi disrupsi kecerdasan buatan.', 'Rencana bisnis 5 tahunan yang kaku sudah usang. Pemimpin modern harus mampu membaca sinyal-sinyal perubahan pasar yang samar, melakukan eksperimen cepat berbiaya murah, dan berani mengubah haluan kapal sebelum badai disrupsi menenggelamkannya.', '/artikel/dr-indrawan-nugroho-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'CiAS (Corporate Innovation Asia)', 'Konsultansi Strategi Inovasi & Transformasi Bisnis', 'Firma konsultan inovasi terdepan yang mendesain arsitektur transformasi korporasi dan inkubasi unit bisnis baru.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://cias.co', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Kanal Analisis Strategi Bisnis Dr. Indrawan Nugroho', 'Media Edukasi Manajemen & Studi Kasus Disrupsi', 'Koleksi ratusan video studi kasus mendalam tentang inovasi teknologi, manajemen kepemimpinan, dan persaingan pasar global.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@IndrawanNugroho', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

COMMIT;
