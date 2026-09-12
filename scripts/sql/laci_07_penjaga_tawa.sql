-- SQL Batch for laci_07_penjaga_tawa
BEGIN;

-- Figure: Pandji Pragiwaksono (pandji-pragiwaksono)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'pandji-pragiwaksono' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Pandji Pragiwaksono',
      title = 'Pelopor Stand-Up Comedy Indonesia, Pendiri Comika Corp & Komika Satir Politik',
      category = 'Penjaga Tawa',
      quote = 'Komedi tunggal bukan sekadar pelawak yang melempar lelucon receh; ia adalah seni menguji nalar publik, membongkar kemunafikan penguasa, dan menertawakan ketakutan terbesar bangsa.',
      bio_paragraphs = ARRAY['Mengawali karier sebagai penyiar radio dan presenter televisi, Pandji Pragiwaksono mengambil peran historis sebagai pionir yang membidani kelahiran industri Stand-Up Comedy modern di Indonesia sejak 2011. Lulusan Desain Produk ITB ini melihat komedi tunggal sebagai senjata intelektual untuk mendidik warga membicarakan isu tabu secara rasional.', 'Melalui tur komedi tunggal keliling dunianya, seperti Mesakke Bangsaku, Juru Bicara, Pragiwaksono, hingga Komoidoi, Pandji berani membedah isu hak asasi manusia, kebrutalan sensor penyiaran, politik identitas pemilu, hingga kritik terhadap institusi kepolisian dan kepresidenan. Ia kemudian mendirikan Comika Corp, ekosistem industri komedi mandiri yang memfasilitasi ratusan komika daerah memiliki kedaulatan karya melalui platform digital sendiri.', 'Kini menembus panggung legendaris Comedy Cellar di New York City, Pandji membuktikan bahwa komedi berbasis nalar kritis anak bangsa mampu berdiri sejajar di pusat peradaban komedi dunia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('pandji-pragiwaksono', 'Pandji Pragiwaksono', 'Pelopor Stand-Up Comedy Indonesia, Pendiri Comika Corp & Komika Satir Politik', 'Penjaga Tawa', 'Komedi tunggal bukan sekadar pelawak yang melempar lelucon receh; ia adalah seni menguji nalar publik, membongkar kemunafikan penguasa, dan menertawakan ketakutan terbesar bangsa.', ARRAY['Mengawali karier sebagai penyiar radio dan presenter televisi, Pandji Pragiwaksono mengambil peran historis sebagai pionir yang membidani kelahiran industri Stand-Up Comedy modern di Indonesia sejak 2011. Lulusan Desain Produk ITB ini melihat komedi tunggal sebagai senjata intelektual untuk mendidik warga membicarakan isu tabu secara rasional.', 'Melalui tur komedi tunggal keliling dunianya, seperti Mesakke Bangsaku, Juru Bicara, Pragiwaksono, hingga Komoidoi, Pandji berani membedah isu hak asasi manusia, kebrutalan sensor penyiaran, politik identitas pemilu, hingga kritik terhadap institusi kepolisian dan kepresidenan. Ia kemudian mendirikan Comika Corp, ekosistem industri komedi mandiri yang memfasilitasi ratusan komika daerah memiliki kedaulatan karya melalui platform digital sendiri.', 'Kini menembus panggung legendaris Comedy Cellar di New York City, Pandji membuktikan bahwa komedi berbasis nalar kritis anak bangsa mampu berdiri sejajar di pusat peradaban komedi dunia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2011 - 2013', 'MEMBIDANI STAND-UP COMEDY INDONESIA & MESAKKE BANGSAKU', 'Membentuk komunitas Standupindo dan menggelar tur komedi tunggal Mesakke Bangsaku membedah isu korupsi dan HAM di berbagai kota dunia.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2020', 'TUR DUNIA JURU BICARA & PENDIRIAN COMIKA CORP', 'Menggelar tur keliling 5 benua ''Juru Bicara'' dan mendirikan ekosistem industri komedi Comika.id yang memfasilitasi kemandirian ratusan komika.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2026', 'MENEMBUS PANGGUNG COMEDY CELLAR NEW YORK', 'Menetap di New York City, menjadi komika Indonesia pertama yang rutin tampil di klub komedi paling legendaris dunia, Comedy Cellar.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Comika Corp (Ekosistem Industri Komedi Tunggal Mandiri)', 'Industri Kreatif & Platform Monetisasi Komika', 'Perusahaan media dan manajemen komedi terbesar di Indonesia yang menyediakan aplikasi streaming spesial komedi, akademi, dan festival.', 'https://comika.id', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi: Juru Bicara & Mesakke Bangsaku', 'Karya Stand-Up Comedy Satir Sosial-Politik', 'Pertunjukan komedi tunggal berdurasi 2 jam yang membedah kejahatan korupsi, HAM masa lalu, dan diskriminasi minoritas secara tajam.', 'https://comika.id', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Berani Mengubah & Seni Menertawakan Diri Sendiri', 'Karya Tulis Literasi Sosial & Kepemudaan', 'Kumpulan esai motivasi kritis yang membimbing generasi muda agar tidak apatis terhadap masa depan politik dan demokrasi bangsa.', 'https://www.gramedia.com', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Komedi Sebagai Oposisi Nalar: Mengapa Penguasa Selalu Takut pada Lelucon yang Cerdas', 'SATIR POLITIK', '8 Menit Membaca', 'Pembedahan Pandji Pragiwaksono tentang bagaimana tawa rakyat mampu meruntuhkan wibawa palsu kediktatoran.', 'Otoritarianisme bisa membungkam orasi demonstran dengan gas air mata dan pasal karet undang-undang, namun mereka tidak pernah mampu membungkam tawa penonton saat kemunafikan mereka ditertawakan di atas panggung komedi. Tawa adalah bentuk pembangkangan sipil yang paling membahagiakan.', '/artikel/pandji-pragiwaksono-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membangun Kedaulatan Kreator: Kisah Comika Melawan Monopoli Algoritma Raksasa Digital', 'EKONOMI KREATIF', '7 Menit Membaca', 'Strategi membangun platform digital mandiri agar seniman tidak bergantung pada monetisasi iklan media sosial.', 'Kreator yang hanya menggantungkan hidupnya pada algoritma media sosial asing akan selalu hidup dalam ketakutan disensor. Memiliki platform distribusi berbayar sendiri adalah satu-satunya jalan agar komika bisa bebas berbicara tanpa takut akunnya dimatikan.', '/artikel/pandji-pragiwaksono-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Comika Corp (Ekosistem Industri Komedi Tunggal Mandiri)', 'Industri Kreatif & Platform Monetisasi Komika', 'Perusahaan media dan manajemen komedi terbesar di Indonesia yang menyediakan aplikasi streaming spesial komedi, akademi, dan festival.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi: Juru Bicara & Mesakke Bangsaku', 'Karya Stand-Up Comedy Satir Sosial-Politik', 'Pertunjukan komedi tunggal berdurasi 2 jam yang membedah kejahatan korupsi, HAM masa lalu, dan diskriminasi minoritas secara tajam.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Arie Kriting (arie-kriting)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'arie-kriting' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Arie Kriting',
      title = 'Komika, Penulis Skenario & Sutradara Satir Ketimpangan Indonesia Timur',
      category = 'Penjaga Tawa',
      quote = 'Indonesia Timur bukan sekadar pemanis eksotis di layar kaca yang hanya dieksploitasi keindahan alamnya; suara, air mata, dan ketimpangan pembangunan kami adalah denyut nadi yang menuntut keadilan Republik.',
      bio_paragraphs = ARRAY['Lahir di Kendari, Sulawesi Tenggara, dan menyelesaikan studi Perencanaan Wilayah dan Kota di Institut Teknologi Nasional (ITN) Malang, Satriaddan Maharinga Djati (Arie Kriting) membawa bekal analisis tata ruang kota ke atas panggung komedi tunggal.', 'Kala panggung komedi Jakarta dipenuhi lelucon khas anak metropolitan, Arie menggebrak dengan persona kedaulatan Indonesia Timur yang bangga, cerdas, dan sarat kritik tajam atas sentralisme Jawa, rasisme terselubung di layar kaca, hingga eksploitasi kekayaan alam Papua dan Maluku yang tidak menetes ke perut warga lokal.', 'Melalui karya penyutradaraan dan skenario film layar lebar, Arie konsisten membela kaum marjinal: membuktikan bahwa tawa yang lahir dari getirnya ketimpangan sosial adalah instrumen ampuh untuk menggugah kesadaran persatuan bangsa yang berkeadilan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('arie-kriting', 'Arie Kriting', 'Komika, Penulis Skenario & Sutradara Satir Ketimpangan Indonesia Timur', 'Penjaga Tawa', 'Indonesia Timur bukan sekadar pemanis eksotis di layar kaca yang hanya dieksploitasi keindahan alamnya; suara, air mata, dan ketimpangan pembangunan kami adalah denyut nadi yang menuntut keadilan Republik.', ARRAY['Lahir di Kendari, Sulawesi Tenggara, dan menyelesaikan studi Perencanaan Wilayah dan Kota di Institut Teknologi Nasional (ITN) Malang, Satriaddan Maharinga Djati (Arie Kriting) membawa bekal analisis tata ruang kota ke atas panggung komedi tunggal.', 'Kala panggung komedi Jakarta dipenuhi lelucon khas anak metropolitan, Arie menggebrak dengan persona kedaulatan Indonesia Timur yang bangga, cerdas, dan sarat kritik tajam atas sentralisme Jawa, rasisme terselubung di layar kaca, hingga eksploitasi kekayaan alam Papua dan Maluku yang tidak menetes ke perut warga lokal.', 'Melalui karya penyutradaraan dan skenario film layar lebar, Arie konsisten membela kaum marjinal: membuktikan bahwa tawa yang lahir dari getirnya ketimpangan sosial adalah instrumen ampuh untuk menggugah kesadaran persatuan bangsa yang berkeadilan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013', 'JUARA STAND-UP COMEDY & PERSONA INDONESIA TIMUR', 'Menjadi juara Stand Up Comedy Indonesia Kompas TV dengan materi kritik ketimpangan pembangunan Indonesia Timur yang fenomenal.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2020', 'PENULIS SKENARIO & ADVOKASI TOLERANSI KEBANGSAAN', 'Menulis skenario film box office (Susah Sinyal, Warkop DKI Reborn) dan aktif memimpin kampanye toleransi kemanusiaan melawan rasisme.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'SUTRADARA SERIAL KOMEDI KRITIS & ILMU GAGAL', 'Menyutradarai karya sinema dan menggelar tur komedi tunggal Ilmu Gagal membedah perjalanan hidup melawan stigma sosial.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi Tunggal: Ilmu Gagal', 'Karya Stand-Up Comedy & Refleksi Kehidupan', 'Pertunjukan komedi tunggal yang membedah kegagalan, penolakan sosial, dan kebanggaan berdiri sebagai orang timur di ibu kota.', 'https://comika.id', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Penulisan Skenario Film Sinema Satir Ketimpangan', 'Karya Sinematografi & Skenario Film', 'Karya naskah film layar lebar yang mengangkat realitas ketiadaan sinyal telekomunikasi dan ketimpangan fasilitas daerah pelosok.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kampanye Hentikan Rasisme & Solidaritas Papua', 'Advokasi Kemanusiaan & Anti-Diskriminasi', 'Aksi vokal membela mahasiswa dan warga Indonesia Timur dari diskriminasi perlakuan hukum dan stigma rasial.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Tertawa di Tengah Gelap: Mengapa Komedi Indonesia Timur Bukan Sekadar Aksen Lucu', 'SATIR BUDAYA', '7 Menit Membaca', 'Catatan Arie Kriting tentang bagaimana materi komedinya adalah bentuk jeritan atas ketiadaan listrik dan jalan aspal di pelosok.', 'Banyak orang menertawakan cerita kami tentang tanah yang berbatu dan sinyal yang hilang. Namun di balik tawa itu, ada pesan serius: Indonesia tidak boleh hanya dibangun di Pulau Jawa. Kami bukan penonton di rumah kami sendiri.', '/artikel/arie-kriting-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Merawat Bhinneka Tanpa Kemunafikan: Menolak Standar Ganda dalam Memandang Saudara Timur', 'KEADILAN SOSIAL', '6 Menit Membaca', 'Pentingnya memperlakukan warga Indonesia Timur secara setara dalam hukum, kesempatan kerja, dan representasi media.', 'Persatuan tidak bisa dibangun di atas narasi belas kasihan. Persatuan sejati lahir saat kita mengakui bahwa kekayaan tambang emas dan nikel di timur dinikmati oleh seluruh republik, dan tanah kelahirannya berhak mendapatkan keadilan yang sama.', '/artikel/arie-kriting-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi Tunggal: Ilmu Gagal', 'Karya Stand-Up Comedy & Refleksi Kehidupan', 'Pertunjukan komedi tunggal yang membedah kegagalan, penolakan sosial, dan kebanggaan berdiri sebagai orang timur di ibu kota.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Penulisan Skenario Film Sinema Satir Ketimpangan', 'Karya Sinematografi & Skenario Film', 'Karya naskah film layar lebar yang mengangkat realitas ketiadaan sinyal telekomunikasi dan ketimpangan fasilitas daerah pelosok.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Abdur Arsyad (abdur-arsyad)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'abdur-arsyad' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Abdur Arsyad',
      title = 'Komika, Penulis Skenario, Master Matematika & Kritikus Kebijakan Publik Satir',
      category = 'Penjaga Tawa',
      quote = 'Komedi yang bermartabat tidak lahir dari menertawakan penderitaan si miskin atau cacat fisik seseorang, melainkan dari keberanian menertawakan keangkuhan para pembuat kebijakan yang tidak tahu malu.',
      bio_paragraphs = ARRAY['Meraih gelar Sarjana Pendidikan Matematika dari Universitas Muhammadiyah Malang dan Magister Pendidikan Matematika dari Universitas Negeri Malang, Abdurrahim Arsyad (Abdur Arsyad) adalah salah satu komika dengan kecerdasan logika silogisme paling mematikan di panggung komedi Indonesia.', 'Berasal dari Larantuka, Flores Timur, Abdur terkenal lewat rima puisi perlawanan dan monolog satir berdurasi panjang yang menelanjangi kegagalan proyek food estate, impor pangan yang merugikan petani, hingga manipulasi pasal-pasal undang-undang oleh politisi Senayan. Abdur menolak komedi slapstick receh dan konsisten membungkus data fakta kebijakan publik ke dalam humor cerdas yang menghibur sekaligus menampar nalar.', 'Melalui karya pertunjukan komedi tunggalnya seperti ''Pahlawan Perlu Tanda Jasa'' dan serial ''Keluarga Berencana'', Abdur membuktikan bahwa komedi adalah medium paling efektif untuk mengedukasi rakyat melek politik dan menuntut akuntabilitas negara.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('abdur-arsyad', 'Abdur Arsyad', 'Komika, Penulis Skenario, Master Matematika & Kritikus Kebijakan Publik Satir', 'Penjaga Tawa', 'Komedi yang bermartabat tidak lahir dari menertawakan penderitaan si miskin atau cacat fisik seseorang, melainkan dari keberanian menertawakan keangkuhan para pembuat kebijakan yang tidak tahu malu.', ARRAY['Meraih gelar Sarjana Pendidikan Matematika dari Universitas Muhammadiyah Malang dan Magister Pendidikan Matematika dari Universitas Negeri Malang, Abdurrahim Arsyad (Abdur Arsyad) adalah salah satu komika dengan kecerdasan logika silogisme paling mematikan di panggung komedi Indonesia.', 'Berasal dari Larantuka, Flores Timur, Abdur terkenal lewat rima puisi perlawanan dan monolog satir berdurasi panjang yang menelanjangi kegagalan proyek food estate, impor pangan yang merugikan petani, hingga manipulasi pasal-pasal undang-undang oleh politisi Senayan. Abdur menolak komedi slapstick receh dan konsisten membungkus data fakta kebijakan publik ke dalam humor cerdas yang menghibur sekaligus menampar nalar.', 'Melalui karya pertunjukan komedi tunggalnya seperti ''Pahlawan Perlu Tanda Jasa'' dan serial ''Keluarga Berencana'', Abdur membuktikan bahwa komedi adalah medium paling efektif untuk mengedukasi rakyat melek politik dan menuntut akuntabilitas negara.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014', 'RUNNER-UP STAND-UP COMEDY INDONESIA & MONOLOG PUISI', 'Mengguncang panggung komedi nasional dengan gaya tutur monolog puitis bertenaga tinggi tentang realitas pedalaman NTT.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 - 2022', 'PENULIS SKENARIO FILM & TUR KOMEDI PAHLAWAN PERLU TANDA JASA', 'Menulis skenario film komedi dan menggelar tur komedi tunggal membedah nasib guru honorer dan guru perbatasan yang terabaikan.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'SERI PODCAST SATIR KEBIJAKAN & REKOR SPESIAL COMIKA', 'Memproduksi podcast dan konten video analisis kritis kebijakan publik yang ditonton jutaan warga serta memecahkan rekor penjualan tiket Comika.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi: Pahlawan Perlu Tanda Jasa', 'Karya Komedi Tunggal Satir Pendidikan', 'Pertunjukan komedi fenomenal yang menuntut kenaikan gaji layak bagi guru honorer dan membongkar kemunafikan birokrasi pendidikan.', 'https://comika.id', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Komedi Tunggal: Kontras Kebijakan Publik', 'Kritik Kebijakan Berbalut Nalar Matematika', 'Rangkaian video monolog bedah anggaran negara, subsidi pupuk petani, dan kedaulatan pangan menggunakan logika sains presisi.', 'https://youtube.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku & Skenario: Cerita dari Ujung Timur', 'Karya Tulis Naratif & Skenario Sinema', 'Dokumentasi kisah ketabahan hidup masyarakat kepulauan Flores Timur dalam menavigasi pendidikan dan kesehatan.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Matematika di Balik Lelucon: Mengapa Humor Cerdas Membutuhkan Presisi Logika dan Data', 'LOGIKA KOMEDI', '7 Menit Membaca', 'Analisis Abdur Arsyad tentang bagaimana menyusun premis komedi berbasis data statistik anggaran negara.', 'Membuat lelucon tentang kebijakan pemerintah bukan soal asal memaki di panggung. Kamu harus membaca dokumen APBN, memahami struktur defisit fiskal, dan melihat bagaimana uang rakyat dipotong di tengah jalan. Ketika data itu disajikan dengan logika matematika yang runut, lelucon tersebut menjadi peluru kebenaran yang tak terbantahkan.', '/artikel/abdur-arsyad-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Guru Honorer dan Gaji Rp 300 Ribu: Jeritan dari Balik Papan Tulis Pelosok', 'PENDIDIKAN KRITIS', '6 Menit Membaca', 'Catatan keprihatinan Abdur atas nasib para pendidik yang mencerdaskan anak bangsa di daerah terpencil tanpa jaminan hidup layak.', 'Kita menuntut anak-anak kita menjadi pintar dan berkarakter, namun kita membiarkan para gurunya makan nasi aking dan berutang beras di warung. Menolak menaikkan derajat guru honorer adalah bentuk pengkhianatan paling nyata terhadap masa depan bangsa.', '/artikel/abdur-arsyad-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi: Pahlawan Perlu Tanda Jasa', 'Karya Komedi Tunggal Satir Pendidikan', 'Pertunjukan komedi fenomenal yang menuntut kenaikan gaji layak bagi guru honorer dan membongkar kemunafikan birokrasi pendidikan.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Serial Komedi Tunggal: Kontras Kebijakan Publik', 'Kritik Kebijakan Berbalut Nalar Matematika', 'Rangkaian video monolog bedah anggaran negara, subsidi pupuk petani, dan kedaulatan pangan menggunakan logika sains presisi.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Bintang Emon (bintang-emon)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'bintang-emon' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Bintang Emon',
      title = 'Komika & Kreator Konten Satir Sosial-Politik (Penggagas Serial Viral ''DPO'')',
      category = 'Penjaga Tawa',
      quote = 'Kalau kritik rakyat dianggap sebagai ancaman atau penghinaan, berarti yang perlu diperbaiki adalah cara berpikir dan kinerja para pejabatnya, bukan membungkam suara warganya.',
      bio_paragraphs = ARRAY['Mengawali langkah dari komunitas Stand Up Indo Bandung Barat hingga menjuarai kompetisi Stand Up Comedy Academy (SUCA) 3 di televisi, Gusti Muhammad Bintang Ikhtiar Pratama (Bintang Emon) menjelma menjadi fenomena kreator konten satir paling berpengaruh di jagat media sosial Indonesia.', 'Melalui serial video pendek ikoniknya ''Dewan Perwakilan Omel-Omel'' (DPO), Bintang Emon membungkus kegelisahan warga sehari-hari, mulai dari bahaya penularan virus, kejanggalan tuntutan hukum kasus penyiraman air keras penyidik KPK Novel Baswedan, hingga aturan konyol pembatasan internet, ke dalam monolog humor berdurasi 1 menit yang sangat padat, cerdas, dan menohok tepat sasaran.', 'Meski sempat mengalami teror digital dan tuduhan fitnah terstruktur akibat keberaniannya mengkritik ketidakadilan hukum, Bintang Emon tetap konsisten berdiri di garis depan nalar sehat: membuktikan bahwa anak muda tidak takut bersuara membela kebenaran dengan senjata humor cerdas.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('bintang-emon', 'Bintang Emon', 'Komika & Kreator Konten Satir Sosial-Politik (Penggagas Serial Viral ''DPO'')', 'Penjaga Tawa', 'Kalau kritik rakyat dianggap sebagai ancaman atau penghinaan, berarti yang perlu diperbaiki adalah cara berpikir dan kinerja para pejabatnya, bukan membungkam suara warganya.', ARRAY['Mengawali langkah dari komunitas Stand Up Indo Bandung Barat hingga menjuarai kompetisi Stand Up Comedy Academy (SUCA) 3 di televisi, Gusti Muhammad Bintang Ikhtiar Pratama (Bintang Emon) menjelma menjadi fenomena kreator konten satir paling berpengaruh di jagat media sosial Indonesia.', 'Melalui serial video pendek ikoniknya ''Dewan Perwakilan Omel-Omel'' (DPO), Bintang Emon membungkus kegelisahan warga sehari-hari, mulai dari bahaya penularan virus, kejanggalan tuntutan hukum kasus penyiraman air keras penyidik KPK Novel Baswedan, hingga aturan konyol pembatasan internet, ke dalam monolog humor berdurasi 1 menit yang sangat padat, cerdas, dan menohok tepat sasaran.', 'Meski sempat mengalami teror digital dan tuduhan fitnah terstruktur akibat keberaniannya mengkritik ketidakadilan hukum, Bintang Emon tetap konsisten berdiri di garis depan nalar sehat: membuktikan bahwa anak muda tidak takut bersuara membela kebenaran dengan senjata humor cerdas.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017', 'JUARA STAND UP COMEDY ACADEMY (SUCA) 3', 'Menjuarai kompetisi komedi nasional di televisi berkat gaya tutur pencerita yang lincah dan membumi.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020', 'GELOMBANG DPO, VIRAL GA SENGAJA & SERANGAN SIBER', 'Merilis serial DPO tentang kejanggalan kasus Novel Baswedan yang ditonton puluhan juta kali, menghadapi serangan bot fitnah di media sosial dengan dukungan jutaan warganet.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2026', 'SPESIAL SHOW TANGKAP GUA & EDUKASI PEMILU MUDA', 'Menggelar tur pertunjukan tunggal ''Tangkap Gua'' dan memproduksi konten literasi pemilu objektif bagi jutaan pemilih pemula.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Video: DPO (Dewan Perwakilan Omel-Omel)', 'Karya Satir Digital & Pengawasan Kebijakan', 'Format video esai komedi singkat berdaya viral puluhan juta penonton yang mengkritik absurditas regulasi dan ketidakadilan hukum.', 'https://instagram.com/bintangemon', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pertunjukan Komedi Tunggal: Tangkap Gua', 'Karya Stand-Up Comedy Satir Berani', 'Spesial komedi berdurasi panjang yang membedah kebebasan berekspresi, paranoia aparat, dan dinamika pernikahan muda.', 'https://comika.id', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kampanye Literasi Nalar Sehat & Anti Pembodohan Publik', 'Edukasi Sipil Digital Generasi Muda', 'Kolaborasi bersama koalisi masyarakat sipil mengedukasi bahaya korupsi dan pentingnya menjaga akal sehat di tengah tahun politik.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Ga Sengaja dan Absurditas Keadilan: Bagaimana 1 Menit Video Bintang Emon Mengguncang Publik', 'SATIR HUKUM', '7 Menit Membaca', 'Catatan fenomena keberanian Bintang Emon menertawakan kejanggalan tuntutan hukum kasus air keras.', 'Ketika alasan hukum yang diajukan jaksa terasa begitu menghina akal sehat masyarakat, humor Bintang Emon hadir bukan sekadar untuk menghibur, melainkan untuk menegaskan bahwa rakyat tidak sebodoh yang dipikirkan penguasa. Menertawakan kebohongan adalah cara rakyat menolak dibodohi.', '/artikel/bintang-emon-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghadapi Teror Buzzer Digital: Mengapa Keberanian Bersuara Tidak Boleh Padam oleh Intimidasi', 'KEBEBASAN BEREKSPRESI', '6 Menit Membaca', 'Refleksi Bintang Emon saat menghadapi serangan fitnah akun anonim setelah melontarkan kritik publik.', 'Buzzer bayaran diciptakan untuk menciptakan rasa takut dan membuat orang-orang waras memilih diam. Ketika jutaan warga bersatu memasang badan membela kebenaran, intimidasi digital tersebut hancur tak berdaya di hadapan kekuatan solidaritas organik.', '/artikel/bintang-emon-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Serial Video: DPO (Dewan Perwakilan Omel-Omel)', 'Karya Satir Digital & Pengawasan Kebijakan', 'Format video esai komedi singkat berdaya viral puluhan juta penonton yang mengkritik absurditas regulasi dan ketidakadilan hukum.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://instagram.com/bintangemon', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Pertunjukan Komedi Tunggal: Tangkap Gua', 'Karya Stand-Up Comedy Satir Berani', 'Spesial komedi berdurasi panjang yang membedah kebebasan berekspresi, paranoia aparat, dan dinamika pernikahan muda.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Mamat Alkatiri (mamat-alkatiri)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'mamat-alkatiri' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Mamat Alkatiri',
      title = 'Komika, Podcaster & Pengkritik Realitas Sosial Ketimpangan Papua',
      category = 'Penjaga Tawa',
      quote = 'Kemarahan kami di atas panggung bukan untuk menebar kebencian; ia adalah letupan nurani yang tak tertahankan melihat ketimpangan dan penderitaan nyata yang dialami saudara-saudara kami di pelosok Papua.',
      bio_paragraphs = ARRAY['Lahir di Ambon dan besar di Fakfak, Papua Barat, Mohammed Yusran Alkatiri (Mamat Alkatiri) menempuh studi Kedokteran Gigi di Universitas Muhammadiyah Yogyakarta sebelum menyalurkan seluruh energinya ke panggung komedi tunggal nasional.', 'Mamat membawa gaya bertutur yang meledak-ledak, penuh energi kemarahan yang jujur, dan berani menabrak topik-topik sensitif seputar diskriminasi rasial, pelanggaran HAM di Papua, hingga korupsi dana otonomi khusus yang tidak dinikmati rakyat jelata di bumi cenderawasih. Di balik gaya komedinya yang berapi-api, Mamat memiliki kehangatan empati dan kepedulian mendalam pada anak-anak jalanan dan pendidikan daerah.', 'Melalui serial podcastnya dan penampilan panggung, Mamat adalah penyuara realitas tanpa filter: membuktikan bahwa komedi berdaya dobrak tinggi mampu menjadi medium advokasi kemanusiaan yang memaksa para elit pengambil kebijakan membuka mata.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('mamat-alkatiri', 'Mamat Alkatiri', 'Komika, Podcaster & Pengkritik Realitas Sosial Ketimpangan Papua', 'Penjaga Tawa', 'Kemarahan kami di atas panggung bukan untuk menebar kebencian; ia adalah letupan nurani yang tak tertahankan melihat ketimpangan dan penderitaan nyata yang dialami saudara-saudara kami di pelosok Papua.', ARRAY['Lahir di Ambon dan besar di Fakfak, Papua Barat, Mohammed Yusran Alkatiri (Mamat Alkatiri) menempuh studi Kedokteran Gigi di Universitas Muhammadiyah Yogyakarta sebelum menyalurkan seluruh energinya ke panggung komedi tunggal nasional.', 'Mamat membawa gaya bertutur yang meledak-ledak, penuh energi kemarahan yang jujur, dan berani menabrak topik-topik sensitif seputar diskriminasi rasial, pelanggaran HAM di Papua, hingga korupsi dana otonomi khusus yang tidak dinikmati rakyat jelata di bumi cenderawasih. Di balik gaya komedinya yang berapi-api, Mamat memiliki kehangatan empati dan kepedulian mendalam pada anak-anak jalanan dan pendidikan daerah.', 'Melalui serial podcastnya dan penampilan panggung, Mamat adalah penyuara realitas tanpa filter: membuktikan bahwa komedi berdaya dobrak tinggi mampu menjadi medium advokasi kemanusiaan yang memaksa para elit pengambil kebijakan membuka mata.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018', 'RUNNER-UP STAND UP COMEDY INDONESIA (SUCI) 7', 'Menjadi runner-up SUCI 7 dengan materi perlawanan stigma daerah timur dan ketimpangan sosial Papua yang menggelegar.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2022', 'TUR KOMEDI TUNGGAL & ADVOKASI MAHASISWA PAPUA', 'Menggelar tur komedi tunggal membedah rasisme struktural dan mendampingi asrama mahasiswa Papua saat terjadi insiden diskriminasi.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'PODCAST PODKESMAS/TITIK KUMPUL & AKTOR SINEMA', 'Membangun podcast dialog kebangsaan independen dan membintangi film-film komedi layar lebar bertema persaudaraan nusantara.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi: Kemarahan dari Fakfak', 'Karya Stand-Up Comedy Realitas Papua', 'Pertunjukan komedi tunggal yang membedah keabsurdan janji manis pembangunan dan penderitaan warga pedalaman Papua.', 'https://comika.id', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Podcast Titik Kumpul & Dialog Lintas Perspektif', 'Kanal Audio Digital Kebangsaan', 'Program bincang-bincang santai yang membedah isu sosial, politik, dan kebudayaan tanpa sekat basa-basi bersama tokoh publik.', 'https://youtube.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Donasi Buku & Fasilitas Belajar Anak Papua', 'Gerakan Filantropi Pendidikan Perintis', 'Penggalangan bantuan buku ajar, sepatu, dan seragam sekolah bagi anak-anak di kampung-kampung terpencil Papua Barat.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Di Balik Nada Tinggi Mamat Alkatiri: Mengapa Tanah Papua Berhak Mendapatkan Keadilan Hakiki', 'KEADILAN SOSIAL', '7 Menit Membaca', 'Kesaksian Mamat tentang eksploitasi sumber daya alam Papua yang berbanding terbalik dengan fasilitas rumah sakit dan sekolah di pelosok.', 'Papua menyumbangkan triliunan rupiah dari tambang tembaga dan gas alamnya untuk kas negara, namun mengapa mama-mama di pasar masih harus melahirkan di atas perahu karena puskesmas tidak memiliki dokter? Kemarahan Mamat di atas panggung adalah suara nurani yang menagih keadilan martabat manusia.', '/artikel/mamat-alkatiri-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghapus Stigma Rasial: Menolak Standar Ganda Perlakuan Hukum bagi Mahasiswa Timur', 'HAK ASASI MANUSIA', '6 Menit Membaca', 'Pentingnya merawat persaudaraan kebangsaan yang tulus tanpa prasangka primordial.', 'Kita tidak bisa mengaku mencintai Papua bila kita hanya mencintai tanah dan burung cenderawasihnya, tetapi mencurigai dan merendahkan manusianya. Mencintai Papua berarti mencintai rakyatnya dan mendengarkan jeritan hati mereka.', '/artikel/mamat-alkatiri-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi: Kemarahan dari Fakfak', 'Karya Stand-Up Comedy Realitas Papua', 'Pertunjukan komedi tunggal yang membedah keabsurdan janji manis pembangunan dan penderitaan warga pedalaman Papua.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Podcast Titik Kumpul & Dialog Lintas Perspektif', 'Kanal Audio Digital Kebangsaan', 'Program bincang-bincang santai yang membedah isu sosial, politik, dan kebudayaan tanpa sekat basa-basi bersama tokoh publik.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Sadana Agung Sulistya (sadana-agung-sulistya)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'sadana-agung-sulistya' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Sadana Agung Sulistya',
      title = 'Komika Satir Perdesaan, Aktor Sinema & Penggerak Guyub Tani Kebumen',
      category = 'Penjaga Tawa',
      quote = 'Guyon wong ndeso itu bukan buat merendahkan diri, tapi cara paling anggun menertawakan getirnya hidup bertani di tengah gempuran harga pupuk dan tengkulak.',
      bio_paragraphs = ARRAY['Lahir dan besar di pelosok pedesaan Kebumen, Jawa Tengah, Sadana Agung Sulistya membawa keaslian dialek ngapak dan atmosfer sawah perdesaan yang sangat kental ke atas panggung Stand Up Comedy Indonesia (SUCI 6). Berbeda dengan materi komika perkotaan yang serba glamor, Sadana justru membongkar keabsurdan relasi kuasa antara petani gurem, aparat desa, dan tengkulak gabah dengan humor satir yang amat cerdas.', 'Gaya komedinya memadukan keluguan khas wong ndeso dengan ketajaman observasi sosiologis. Sadana menunjukkan bahwa tawa orang desa bukanlah lelucon slapstick yang bodoh, melainkan strategi kultural untuk merawat kewarasan batin saat harga panen anjlok dan biaya hidup kian mencekik.', 'Melalui perannya di berbagai film layar lebar sinema independen dan konten digital komedi sawah, Sadana konsisten menjaga martabat identitas perdesaan nusantara: membuktikan bahwa kejujuran bertutur dari tanah kelahiran adalah pesona artistik yang tak lekang oleh waktu.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('sadana-agung-sulistya', 'Sadana Agung Sulistya', 'Komika Satir Perdesaan, Aktor Sinema & Penggerak Guyub Tani Kebumen', 'Penjaga Tawa', 'Guyon wong ndeso itu bukan buat merendahkan diri, tapi cara paling anggun menertawakan getirnya hidup bertani di tengah gempuran harga pupuk dan tengkulak.', ARRAY['Lahir dan besar di pelosok pedesaan Kebumen, Jawa Tengah, Sadana Agung Sulistya membawa keaslian dialek ngapak dan atmosfer sawah perdesaan yang sangat kental ke atas panggung Stand Up Comedy Indonesia (SUCI 6). Berbeda dengan materi komika perkotaan yang serba glamor, Sadana justru membongkar keabsurdan relasi kuasa antara petani gurem, aparat desa, dan tengkulak gabah dengan humor satir yang amat cerdas.', 'Gaya komedinya memadukan keluguan khas wong ndeso dengan ketajaman observasi sosiologis. Sadana menunjukkan bahwa tawa orang desa bukanlah lelucon slapstick yang bodoh, melainkan strategi kultural untuk merawat kewarasan batin saat harga panen anjlok dan biaya hidup kian mencekik.', 'Melalui perannya di berbagai film layar lebar sinema independen dan konten digital komedi sawah, Sadana konsisten menjaga martabat identitas perdesaan nusantara: membuktikan bahwa kejujuran bertutur dari tanah kelahiran adalah pesona artistik yang tak lekang oleh waktu.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016', 'FINALIS 4 BESAR STAND UP COMEDY INDONESIA (SUCI) 6', 'Mencuri perhatian publik nasional dengan materi kehidupan petani Kebumen dan dinamika sosial masyarakat ngapak.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2022', 'AKTOR SINEMA LAYAR LEBAR & SERIAL KOMEDI', 'Membintangi sejumlah film bioskop komedi berlatar budaya lokal dan menyuarakan kegelisahan pemuda desa.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'KONTEN KOMEDI SAWAH & ADVOKASI GUYUB PETANI', 'Mengembangkan serial sketsa komedi perdesaan mandiri dan aktif mendampingi kelompok tani muda di Kebumen.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Spesial Show Komedi: Balada Wong Tani Kebumen', 'Karya Stand-Up Comedy Budaya Lokal', 'Pertunjukan komedi tunggal yang membedah romantika kehidupan pedesaan, birokrasi pupuk subsidi, dan ketangguhan mental petani Jawa.', 'https://comika.id', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Sketsa Komedi Perdesaan Sadana', 'Karya Audio-Visual Komedi Sawah', 'Rangkaian video komedi situasi di pematang sawah dan pos ronda yang memotret kehangatan serta kelucuan warga desa.', 'https://youtube.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Guyub Komunitas Tani Muda Kebumen', 'Pemberdayaan Petani Milenial & Regenerasi Desa', 'Ruang kumpul dan berbagi pengetahuan bagi pemuda desa di Kebumen untuk menekuni pertanian organik bernilai tambah.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Tawa dari Gubuk Sawah: Bagaimana Sadana Agung Membela Martabat Wong Ndeso', 'SATIR PERDESAAN', '7 Menit Membaca', 'Pembedahan gaya komedi Sadana yang membongkar stereotip orang desa yang kerap dipandang rendah di televisi arus utama.', 'Menjadi anak petani di pelosok desa sering kali dijadikan bahan tertawaan oleh orang kota. Melalui panggung komedi tunggal, Sadana membalikkan keadaan: ia menertawakan keangkuhan orang kota yang tidak tahu bagaimana sebutir padi ditanam dan dirawat.', '/artikel/sadana-agung-sulistya-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menolak Urbanisasi Buta: Mengapa Pemuda Desa Harus Bangga Menjaga Tanah Leluhur', 'SOSIOLOGI DESA', '6 Menit Membaca', 'Pentingnya membangun peradaban ekonomi kreatif yang berakar di kampung halaman tanpa harus terasing di rimba Jakarta.', 'Jika semua pemuda desa pergi merantau ke Jakarta untuk menjadi buruh, siapa yang akan meneruskan sawah orang tua kita? Sadana membuktikan bahwa dengan kreativitas dan konsistensi berkarya, kamu bisa menghidupi keluarga dan membanggakan desamu dari teras rumah sendiri.', '/artikel/sadana-agung-sulistya-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Spesial Show Komedi: Balada Wong Tani Kebumen', 'Karya Stand-Up Comedy Budaya Lokal', 'Pertunjukan komedi tunggal yang membedah romantika kehidupan pedesaan, birokrasi pupuk subsidi, dan ketangguhan mental petani Jawa.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Serial Sketsa Komedi Perdesaan Sadana', 'Karya Audio-Visual Komedi Sawah', 'Rangkaian video komedi situasi di pematang sawah dan pos ronda yang memotret kehangatan serta kelucuan warga desa.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Bene Dion Rajagukguk (bene-dion-rajagukguk)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'bene-dion-rajagukguk' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Bene Dion Rajagukguk',
      title = 'Komika, Penulis Skenario & Sutradara Sinema Fenomena ''Ngeri-Ngeri Sedap''',
      category = 'Penjaga Tawa',
      quote = 'Keluarga bukanlah tempat untuk memaksakan gengsi dan ego adat yang menindas batin anak-anak; keluarga adalah rumah tempat setiap anak diterima dan dicintai apa adanya.',
      bio_paragraphs = ARRAY['Menyelesaikan pendidikan di Teknik Industri Universitas Gadjah Mada dengan predikat cum laude, Bene Dion Rajagukguk memilih membaktikan kecerdasan rekayasa ceritanya ke dalam dunia komedi tunggal, penulisan skenario, dan penyutradaraan sinema nasional.', 'Karya penyutradaraannya mencapai puncak mahakarya lewat film ''Ngeri-Ngeri Sedap'' (2022), sebuah drama komedi keluarga berlatar budaya Batak di Danau Toba yang ditonton lebih dari 2,8 juta penonton di bioskop, meraih 5 nominasi FFI, dan terpilih mewakili Indonesia di ajang Academy Awards (Piala Oscar) ke-95. Bene berhasil memotret benturan antargenerasi, tuntutan adat patriarkal, dan luka batin anak rantau dengan keseimbangan tawa yang meledak dan tangis haru yang melegakan.', 'Melalui karya-karyanya seperti ''Ghost Writer'', ''Induk Gajah'', dan serial ''Agak Laen'', Bene membuktikan kepiawaiannya sebagai maestro pencerita: menyuguhkan komedi yang berakar kuat pada dinamika kultural lokal namun memiliki resonansi universal bagi seluruh keluarga Indonesia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('bene-dion-rajagukguk', 'Bene Dion Rajagukguk', 'Komika, Penulis Skenario & Sutradara Sinema Fenomena ''Ngeri-Ngeri Sedap''', 'Penjaga Tawa', 'Keluarga bukanlah tempat untuk memaksakan gengsi dan ego adat yang menindas batin anak-anak; keluarga adalah rumah tempat setiap anak diterima dan dicintai apa adanya.', ARRAY['Menyelesaikan pendidikan di Teknik Industri Universitas Gadjah Mada dengan predikat cum laude, Bene Dion Rajagukguk memilih membaktikan kecerdasan rekayasa ceritanya ke dalam dunia komedi tunggal, penulisan skenario, dan penyutradaraan sinema nasional.', 'Karya penyutradaraannya mencapai puncak mahakarya lewat film ''Ngeri-Ngeri Sedap'' (2022), sebuah drama komedi keluarga berlatar budaya Batak di Danau Toba yang ditonton lebih dari 2,8 juta penonton di bioskop, meraih 5 nominasi FFI, dan terpilih mewakili Indonesia di ajang Academy Awards (Piala Oscar) ke-95. Bene berhasil memotret benturan antargenerasi, tuntutan adat patriarkal, dan luka batin anak rantau dengan keseimbangan tawa yang meledak dan tangis haru yang melegakan.', 'Melalui karya-karyanya seperti ''Ghost Writer'', ''Induk Gajah'', dan serial ''Agak Laen'', Bene membuktikan kepiawaiannya sebagai maestro pencerita: menyuguhkan komedi yang berakar kuat pada dinamika kultural lokal namun memiliki resonansi universal bagi seluruh keluarga Indonesia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2012 - 2014', 'KOMIKA STAND UP COMEDY INDONESIA & PENULIS SKENARIO', 'Menjadi finalis SUCI 3 dan merintis karier sebagai konsultan komedi dan penulis skenario film layar lebar terkemuka.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2022', 'DEBUT SUTRADARA & MAWAKILI INDONESIA DI OSCAR', 'Menyutradarai film debut Ghost Writer dan mahakarya Ngeri-Ngeri Sedap yang terpilih sebagai perwakilan resmi Indonesia di Academy Awards ke-95.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'FENOMENA AGAK LAEN & SINEMA BOX OFFICE HISTORIKAL', 'Menjadi produser dan penulis serial fenomena Agak Laen yang memecahkan rekor lebih dari 9 juta penonton di bioskop Indonesia.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Film Bioskop: Ngeri-Ngeri Sedap (Perwakilan Oscar Indonesia)', 'Karya Sinema Komedi Drama Keluarga & Budaya Batak', 'Film fenomenal yang membedah keharmonisan keluarga, luka adat, dan kerinduan orang tua pada anak rantau di tepian Danau Toba.', 'https://netflix.com', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Film: Agak Laen (Box Office Historikal)', 'Karya Sinema Komedi Komunal & Hiburan Rakyat', 'Produksi film komedi horor yang memecahkan rekor box office sinema nasional dengan jutaan penonton lintas daerah.', 'https://ima-jinari.id', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku & Skenario: Ngeri-Ngeri Sedap (Novel Grafis)', 'Karya Sastra Naratif & Naskah Sinema', 'Karya adaptasi literatur yang mendokumentasikan falsafah kekerabatan Batak Dalihan Na Tolu dalam dinamika zaman modern.', 'https://www.gramedia.com', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Di Balik Tawa Ngeri-Ngeri Sedap: Mengapa Luka Keluarga Adalah Cerita Paling Menghanyutkan', 'SINEMA & BUDAYA', '8 Menit Membaca', 'Analisis Bene Dion tentang bagaimana membedah benturan ego orang tua dan impian anak rantau tanpa menghakimi.', 'Banyak orang tua di Indonesia yang mencintai anak-anaknya dengan cara yang kaku dan menuntut, sehingga tanpa sadar melukai batin anak mereka sendiri. Ngeri-Ngeri Sedap hadir seperti cermin yang membuat setiap ayah dan anak yang menontonnya saling memaafkan dan berpelukan kembali.', '/artikel/bene-dion-rajagukguk-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kekuatan Cerita Lokal Nusantara: Menolak Inferioritas Menembus Panggung Academy Awards', 'INDUSTRI FILM', '7 Menit Membaca', 'Strategi mengangkat keunikan budaya daerah Danau Toba menjadi karya sinema yang diakui juri internasional di Los Angeles.', 'Semakin lokal sebuah cerita, semakin universal resonansi emosinya. Kita tidak perlu meniru gaya bercerita Hollywood untuk memikat dunia; cukup gali kejujuran hubungan keluarga di kampung halaman kita sendiri.', '/artikel/bene-dion-rajagukguk-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Film Bioskop: Ngeri-Ngeri Sedap (Perwakilan Oscar Indonesia)', 'Karya Sinema Komedi Drama Keluarga & Budaya Batak', 'Film fenomenal yang membedah keharmonisan keluarga, luka adat, dan kerinduan orang tua pada anak rantau di tepian Danau Toba.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://netflix.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Serial Film: Agak Laen (Box Office Historikal)', 'Karya Sinema Komedi Komunal & Hiburan Rakyat', 'Produksi film komedi horor yang memecahkan rekor box office sinema nasional dengan jutaan penonton lintas daerah.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://ima-jinari.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Yono Bakrie (yono-bakrie)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'yono-bakrie' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Yono Bakrie',
      title = 'Komika, Juara Stand Up Comedy Indonesia IX & Penyuara Realitas Kelas Pekerja',
      category = 'Penjaga Tawa',
      quote = 'Kekurangan fisik dan latar belakang keluarga pas-pasan bukan alasan untuk rendah diri; saat kamu berani menertawakannya dengan jujur di atas panggung, ia berubah menjadi kekuatan yang membedakanmu dari dunia.',
      bio_paragraphs = ARRAY['Berasal dari Samarinda, Kalimantan Timur, dan sempat bekerja serabutan sebagai buruh pabrik, sales keliling, hingga penjaga warung, Suyono (Yono Bakrie) menempuh perjalanan hidup yang sarat liku sebelum merebut mahkota Juara 1 Stand Up Comedy Indonesia (SUCI) IX pada 2021.', 'Yono menghadirkan komedi yang sangat otentik, membumi, dan berakar kuat pada realitas pahit kelas pekerja akar rumput: getirnya mencari kontrakan murah, canggungnya berhadapan dengan gaya hidup konsumtif kota Jakarta, hingga lika-liku percintaan pemuda desa yang sering kali diremehkan.', 'Bagi generasi muda kelas pekerja yang sedang berjuang meniti karier di kota besar, Yono Bakrie adalah simbol ketabahan dan optimisme: membuktikan bahwa kejujuran menerima diri apa adanya dan ketekunan mengasah bakat mampu mengantarkan anak kampung biasa merajai panggung komedi nasional.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('yono-bakrie', 'Yono Bakrie', 'Komika, Juara Stand Up Comedy Indonesia IX & Penyuara Realitas Kelas Pekerja', 'Penjaga Tawa', 'Kekurangan fisik dan latar belakang keluarga pas-pasan bukan alasan untuk rendah diri; saat kamu berani menertawakannya dengan jujur di atas panggung, ia berubah menjadi kekuatan yang membedakanmu dari dunia.', ARRAY['Berasal dari Samarinda, Kalimantan Timur, dan sempat bekerja serabutan sebagai buruh pabrik, sales keliling, hingga penjaga warung, Suyono (Yono Bakrie) menempuh perjalanan hidup yang sarat liku sebelum merebut mahkota Juara 1 Stand Up Comedy Indonesia (SUCI) IX pada 2021.', 'Yono menghadirkan komedi yang sangat otentik, membumi, dan berakar kuat pada realitas pahit kelas pekerja akar rumput: getirnya mencari kontrakan murah, canggungnya berhadapan dengan gaya hidup konsumtif kota Jakarta, hingga lika-liku percintaan pemuda desa yang sering kali diremehkan.', 'Bagi generasi muda kelas pekerja yang sedang berjuang meniti karier di kota besar, Yono Bakrie adalah simbol ketabahan dan optimisme: membuktikan bahwa kejujuran menerima diri apa adanya dan ketekunan mengasah bakat mampu mengantarkan anak kampung biasa merajai panggung komedi nasional.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2019', 'PERINTIS STAND-UP SAMARINDA & MERANTAU KE JAKARTA', 'Membangun komunitas Standupindo Samarinda dan nekat merantau ke ibu kota dengan modal tekad mengasah komedi di panggung jalanan.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021', 'JUARA 1 STAND UP COMEDY INDONESIA (SUCI) IX', 'Menjuarai SUCI IX Kompas TV dengan persona keluguan yang cerdas dan materi kelas pekerja yang memikat dewan juri.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2026', 'TUR KOMEDI TUNGGAL & KARYA SINEMA KOMEDI', 'Menggelar tur pertunjukan tunggal di berbagai kota dan membintangi film-film komedi layar lebar bertema persahabatan anak kos.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi Tunggal: Balada Perantau Samarinda', 'Karya Stand-Up Comedy Kelas Pekerja', 'Pertunjukan komedi tunggal yang membedah keabsurdan adaptasi anak daerah saat bertahan hidup di rimba metropolitan Jakarta.', 'https://comika.id', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Komedi Sketsa & Konten Relatable Warga', 'Karya Audio-Visual Komedi Situasional', 'Rangkaian sketsa komedi digital yang memotret dinamika kehidupan sehari-hari anak kos, ojek daring, dan pekerja paruh waktu.', 'https://youtube.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Mentorship Komunitas Komedi Kalimantan Timur', 'Pemberdayaan Talenta Kreator Daerah', 'Program lokakarya penulisan materi komedi gratis bagi para pemuda di Samarinda, Balikpapan, dan pelosok Kalimantan.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Buruh Pabrik Menjadi Juara Nasional: Kisah Perjuangan Hidup Yono Bakrie', 'INSPIRASI KERJA', '7 Menit Membaca', 'Perjalanan ketekunan Yono Bakrie melewati penolakan demi penolakan sebelum meraih kesuksesan di panggung komedi.', 'Hidup susah bukan untuk diratapi di sudut kamar. Ketika kamu berani membawa kepedihan hidup itu ke atas panggung dan membagikannya menjadi tawa bagi orang lain, kamu sedang mengubah kepedihan menjadi berkah dan sumber penghidupan yang halal.', '/artikel/yono-bakrie-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kejujuran di Atas Panggung: Mengapa Materi Komedi yang Membumi Selalu Dicintai Rakyat', 'ESTETIKA KOMEDI', '6 Menit Membaca', 'Pentingnya mengangkat cerita riil kehidupan sehari-hari masyarakat biasa dibanding lelucon palsu yang mengada-ada.', 'Penonton tidak pernah bisa dibohongi. Mereka tahu mana lelucon yang dibuat-buat dan mana yang lahir dari pengalaman nyata menahan lapar di akhir bulan. Kejujuran rasa adalah kunci utama seorang penutur cerita.', '/artikel/yono-bakrie-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi Tunggal: Balada Perantau Samarinda', 'Karya Stand-Up Comedy Kelas Pekerja', 'Pertunjukan komedi tunggal yang membedah keabsurdan adaptasi anak daerah saat bertahan hidup di rimba metropolitan Jakarta.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Serial Komedi Sketsa & Konten Relatable Warga', 'Karya Audio-Visual Komedi Situasional', 'Rangkaian sketsa komedi digital yang memotret dinamika kehidupan sehari-hari anak kos, ojek daring, dan pekerja paruh waktu.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Nopek Novian (nopek-novian)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'nopek-novian' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Nopek Novian',
      title = 'Komika, Penutur Kisah Tani Gurem Madiun & Kreator Komedi Komunal',
      category = 'Penjaga Tawa',
      quote = 'Tumbuh dari keluarga petani gurem di Madiun mengajarkan saya bahwa tawa adalah cara orang kecil bertahan hidup dan merawat kebersamaan di tengah lilitan utang pupuk dan gagal panen.',
      bio_paragraphs = ARRAY['Berasal dari keluarga petani gurem di Desa Sumberbendo, Saradan, Madiun, Arif Novianto (Nopek Novian) membawa keaslian dialek Jawa Timuran yang kental, lugas, dan apa adanya ke dalam panggung hiburan nasional.', 'Nopek mengangkat cerita nyata tentang getirnya kehidupan di pedesaan Jawa: mahalnya harga pupuk pertanian, susahnya mencari modal menikah, hingga rasa canggung luar biasa saat seorang anak petani bergaul dengan kalangan selebritas perkotaan. Gaya bicaranya yang ceplas-ceplos tanpa polesan kepalsuan menjadikannya sosok yang sangat dicintai oleh jutaan warganet dari berbagai lapisan masyarakat.', 'Melalui kanal digital mandiri dan pertunjukan komedinya, Nopek konsisten membanggakan tanah kelahirannya: membuktikan bahwa identitas anak desa dan logat daerah bukanlah hal yang memalukan, melainkan modal budaya yang sangat bernilai tinggi.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('nopek-novian', 'Nopek Novian', 'Komika, Penutur Kisah Tani Gurem Madiun & Kreator Komedi Komunal', 'Penjaga Tawa', 'Tumbuh dari keluarga petani gurem di Madiun mengajarkan saya bahwa tawa adalah cara orang kecil bertahan hidup dan merawat kebersamaan di tengah lilitan utang pupuk dan gagal panen.', ARRAY['Berasal dari keluarga petani gurem di Desa Sumberbendo, Saradan, Madiun, Arif Novianto (Nopek Novian) membawa keaslian dialek Jawa Timuran yang kental, lugas, dan apa adanya ke dalam panggung hiburan nasional.', 'Nopek mengangkat cerita nyata tentang getirnya kehidupan di pedesaan Jawa: mahalnya harga pupuk pertanian, susahnya mencari modal menikah, hingga rasa canggung luar biasa saat seorang anak petani bergaul dengan kalangan selebritas perkotaan. Gaya bicaranya yang ceplas-ceplos tanpa polesan kepalsuan menjadikannya sosok yang sangat dicintai oleh jutaan warganet dari berbagai lapisan masyarakat.', 'Melalui kanal digital mandiri dan pertunjukan komedinya, Nopek konsisten membanggakan tanah kelahirannya: membuktikan bahwa identitas anak desa dan logat daerah bukanlah hal yang memalukan, melainkan modal budaya yang sangat bernilai tinggi.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017', 'FINALIS STAND UP COMEDY ACADEMY (SUCA) 3', 'Mencuri perhatian pemirsa nasional di SUCA 3 dengan materi kehidupan anak petani Madiun yang sangat segar dan membumi.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2022', 'GELOMBANG KONTEN DIGITAL DESA & VIRAL KEBERSAMAAN', 'Membangun kanal digital mandiri meliput kehidupan warga kampung dan kolaborasi bersama figur publik dengan gaya merakyat.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 - 2026', 'SPESIAL SHOW KAMPUNG HALAMAN & SINEMA LAYAR LEBAR', 'Menggelar pertunjukan komedi tunggal di berbagai kota Jawa Timur dan membintangi film layar lebar bertema budaya perdesaan.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi: Sambat Petani Saradan', 'Karya Stand-Up Comedy Budaya Perdesaan', 'Pertunjukan komedi tunggal yang membedah romantika kehidupan anak muda di pedesaan Jawa dan suka duka bertani.', 'https://youtube.com', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kanal Vlog Merakyat Nopek Novian', 'Dokumentasi Komedi Kehidupan Komunal', 'Serial video dokumentasi kehidupan desa, kuliner warung pinggir jalan, dan interaksi hangat bersama warga kampung.', 'https://youtube.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pemberdayaan Pemuda Kreatif Madiun', 'Inisiatif Komunitas Kreator Daerah', 'Wadah kolaborasi pembuatan konten video sketsa bagi para pemuda di Jawa Timur untuk mengembangkan bakat digitalnya.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Tawa dari Pematang Sawah: Bagaimana Nopek Novian Mengangkat Martabat Petani Desa', 'KOMEDI MERAKYAT', '7 Menit Membaca', 'Kisah di balik materi komedi Nopek yang membongkar realitas kehidupan kaum tani di Jawa Timur.', 'Nopek tidak pernah malu mengakui bahwa orang tuanya adalah petani yang mencangkul tanah setiap pagi. Dengan membawa cerita sawah ke layar gawai jutaan orang kota, ia mengingatkan seluruh bangsa bahwa tanpa jerih payah para petani di desa, orang-orang kota tidak akan pernah bisa makan.', '/artikel/nopek-novian-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menolak Gengsi Perkotaan: Menjaga Keaslian Diri di Tengah Kemilau Industri Hiburan', 'IDENTITAS LOKAL', '6 Menit Membaca', 'Pentingnya mempertahankan jati diri budaya lokal dan menolak kepalsuan pencitraan selebritas.', 'Banyak orang daerah yang merantau ke Jakarta berusaha keras menyembunyikan logat bicaranya karena takut dianggap udik. Nopek membuktikan sebaliknya: kebanggaan pada bahasa daerah dan ketulusan sikap kampung adalah daya tarik paling otentik yang tidak bisa ditiru siapa pun.', '/artikel/nopek-novian-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Spesial Komedi: Sambat Petani Saradan', 'Karya Stand-Up Comedy Budaya Perdesaan', 'Pertunjukan komedi tunggal yang membedah romantika kehidupan anak muda di pedesaan Jawa dan suka duka bertani.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Kanal Vlog Merakyat Nopek Novian', 'Dokumentasi Komedi Kehidupan Komunal', 'Serial video dokumentasi kehidupan desa, kuliner warung pinggir jalan, dan interaksi hangat bersama warga kampung.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Dustin Tiffani (dustin-tiffani)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga_demo1 WHERE slug = 'dustin-tiffani' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga_demo1 SET
      name = 'Dustin Tiffani',
      title = 'Komika Absurd, Kreator Komedi Kelas Pekerja & Ikon Spontanitas Nusantara',
      category = 'Penjaga Tawa',
      quote = 'Kekurangan artikulasi bicara dan cara berpikir yang tidak biasa bukanlah aib yang harus disembunyikan; saat kamu merangkulnya dengan tulus dan kerja keras, ia menjadi karakter unik yang dicintai jutaan orang.',
      bio_paragraphs = ARRAY['Mengawali langkah dari kehidupan kelas pekerja keras di pinggiran Jakarta Barat sebagai pegawai percetakan fotokopi dan penyiar radio komunitas, Dustin Tiffani (akrab dijuluki Zero Logic) menghadirkan warna komedi absurd dan spontanitas yang tiada duanya dalam industri hiburan Indonesia.', 'Karakternya yang lugu, susunan kalimatnya yang melompat-lompat di luar nalar konvensional, serta ketulusannya yang tanpa rekayasa mencuri perhatian publik luas lewat program ''Majelis Lucu Indonesia'' dan podcast ''Pingin Siaran''. Di balik gaya bertuturnya yang unik, Dustin adalah sosok pekerja keras yang pantang menyerah dan setia kawan.', 'Dustin membuktikan pesan inklusivitas yang sangat kuat: bahwa di industri kreatif modern, seseorang tidak harus berparas rupawan atau berbicara seperti pembawa acara berita formal untuk sukses, kejujuran menjadi diri sendiri adalah pesona paling magnetis.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga_demo1 (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('dustin-tiffani', 'Dustin Tiffani', 'Komika Absurd, Kreator Komedi Kelas Pekerja & Ikon Spontanitas Nusantara', 'Penjaga Tawa', 'Kekurangan artikulasi bicara dan cara berpikir yang tidak biasa bukanlah aib yang harus disembunyikan; saat kamu merangkulnya dengan tulus dan kerja keras, ia menjadi karakter unik yang dicintai jutaan orang.', ARRAY['Mengawali langkah dari kehidupan kelas pekerja keras di pinggiran Jakarta Barat sebagai pegawai percetakan fotokopi dan penyiar radio komunitas, Dustin Tiffani (akrab dijuluki Zero Logic) menghadirkan warna komedi absurd dan spontanitas yang tiada duanya dalam industri hiburan Indonesia.', 'Karakternya yang lugu, susunan kalimatnya yang melompat-lompat di luar nalar konvensional, serta ketulusannya yang tanpa rekayasa mencuri perhatian publik luas lewat program ''Majelis Lucu Indonesia'' dan podcast ''Pingin Siaran''. Di balik gaya bertuturnya yang unik, Dustin adalah sosok pekerja keras yang pantang menyerah dan setia kawan.', 'Dustin membuktikan pesan inklusivitas yang sangat kuat: bahwa di industri kreatif modern, seseorang tidak harus berparas rupawan atau berbicara seperti pembawa acara berita formal untuk sukses, kejujuran menjadi diri sendiri adalah pesona paling magnetis.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM works_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga_demo1 WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga_demo1 WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2018', 'DARI PEGAWAI PERCETAKAN KE RADIO KOMUNITAS', 'Bekerja di percetakan fotokopi sembari merintis siaran radio malam di Radio Bahana FM Jakarta dengan gaya absurd khas.', 1);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2021', 'FENOMENA MAJELIS LUCU INDONESIA & VIRAL NASIONAL', 'Meledak di kanal digital MLI dan program Pingin Siaran bersama Tretan Muslim dan Coki Pardede, menjadi ikon komedi baru.', 2);
  INSERT INTO life_events_warga_demo1 (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2026', 'PROGRAM TELEVISI NASIONAL & KREATOR MULTIPLATFORM', 'Membintangi program varietas televisi nasional, serial komedi streaming, dan menjadi brand ambassador jenama lokal terkemuka.', 3);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Komedi: Pingin Siaran & Majelis Lucu', 'Karya Komedi Absurd & Dialog Spontan Digital', 'Serial bincang-bincang komedi improvisasi yang menampilkan gaya berpikir unik dan reaksi spontan Dustin yang viral jutaan kali.', 'https://youtube.com', 1);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Sketsa Komedi Perkantoran & Percetakan', 'Karya Audio-Visual Komedi Kelas Pekerja', 'Sketsa komedi yang mengangkat lika-liku perjuangan pekerja percetakan fotokopi dan buruh harian lepas perkotaan.', 'https://youtube.com', 2);
  INSERT INTO works_warga_demo1 (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Dukungan Wirausaha Percetakan Grafis Mandiri', 'Pemberdayaan Usaha Kecil Sablon & Percetakan', 'Kolaborasi mempromosikan bengkel-bengkel sablon dan percetakan kecil di Jakarta Barat agar mendapatkan akses pesanan modern.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kemenangan Menjadi Diri Sendiri: Kisah Dustin Tiffani Menaklukkan Panggung Hiburan', 'INSPIRASI HIDUP', '7 Menit Membaca', 'Perjalanan hidup Dustin dari anak fotokopi yang sempat diremehkan hingga menjadi ikon komedi terpopuler.', 'Dunia sering kali memaksa kita untuk masuk ke dalam kotak standar yang seragam. Dustin membuktikan bahwa keunikan cara berpikir yang selama ini dianggap aneh oleh orang lain justru menjadi pintu rezeki yang luar biasa ketika dijalani dengan ketulusan hati dan kerja keras.', '/artikel/dustin-tiffani-1', 1);
  INSERT INTO articles_warga_demo1 (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Absurditas yang Menyatukan: Mengapa Tawa Spontan Tanpa Skenario Mampu Melegakan Pikiran', 'PSIKOLOGI HUMOR', '6 Menit Membaca', 'Pembedahan fenomena komedi non-linear Dustin dalam meredakan kepenatan hidup masyarakat perkotaan.', 'Di tengah rutinitas kantor yang kaku dan penuh tekanan target kerja, menyaksikan keluguan dan kejujuran Dustin adalah katarsis yang sangat menyegarkan. Tawa yang meledak dari kepolosan murni mengingatkan kita untuk tidak menganggap hidup ini terlalu kaku dan tegang.', '/artikel/dustin-tiffani-2', 2);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Program Komedi: Pingin Siaran & Majelis Lucu', 'Karya Komedi Absurd & Dialog Spontan Digital', 'Serial bincang-bincang komedi improvisasi yang menampilkan gaya berpikir unik dan reaksi spontan Dustin yang viral jutaan kali.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga_demo1 (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Serial Sketsa Komedi Perkantoran & Percetakan', 'Karya Audio-Visual Komedi Kelas Pekerja', 'Sketsa komedi yang mengangkat lika-liku perjuangan pekerja percetakan fotokopi dan buruh harian lepas perkotaan.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

COMMIT;
