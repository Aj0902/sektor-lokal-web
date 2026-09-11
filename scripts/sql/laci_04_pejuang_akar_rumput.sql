-- SQL Batch for laci_04_pejuang_akar_rumput
BEGIN;

-- Figure: Rukka Sombolinggi (rukka-sombolinggi)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'rukka-sombolinggi' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Rukka Sombolinggi',
      title = 'Sekretaris Jenderal AMAN (Aliansi Masyarakat Adat Nusantara) & Tokoh Adat Toraja',
      category = 'Pejuang Akar Rumput',
      quote = 'Masyarakat adat bukan perambah atau penghambat pembangunan; kami adalah penjaga sah tanah leluhur dan benteng pertahanan ekologis terakhir dari kepunahan iklim bumi.',
      bio_paragraphs = ARRAY['Lahir dan dibesarkan dalam komunitas adat Toraja di Sulawesi Selatan, Rukka Sombolinggi telah menyaksikan sendiri bagaimana tanah ulayat, hutan adat, dan kuburan leluhur masyarakat adat di seluruh pelosok nusantara dirampas secara brutal oleh ekspansi korporasi sawit, tambang, dan proyek infrastruktur atas nama pembangunan.', 'Sebagai perempuan pertama yang memimpin Aliansi Masyarakat Adat Nusantara (AMAN), organisasi yang menaungi lebih dari 2.500 komunitas adat di Indonesia, Rukka membawa suara perlawanan masyarakat adat ke forum tertinggi Perserikatan Bangsa-Bangsa (PBB). Ia konsisten memperjuangkan pengesahan Undang-Undang Masyarakat Adat dan pemetaan jutaan hektare wilayah adat secara mandiri.', 'Bagi generasi muda yang peduli keadilan sosial, Rukka adalah kompas keteguhan: membuktikan bahwa martabat ruang hidup leluhur adalah harga mati yang tidak boleh dikompromikan oleh kepentingan modal oligarki.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('rukka-sombolinggi', 'Rukka Sombolinggi', 'Sekretaris Jenderal AMAN (Aliansi Masyarakat Adat Nusantara) & Tokoh Adat Toraja', 'Pejuang Akar Rumput', 'Masyarakat adat bukan perambah atau penghambat pembangunan; kami adalah penjaga sah tanah leluhur dan benteng pertahanan ekologis terakhir dari kepunahan iklim bumi.', ARRAY['Lahir dan dibesarkan dalam komunitas adat Toraja di Sulawesi Selatan, Rukka Sombolinggi telah menyaksikan sendiri bagaimana tanah ulayat, hutan adat, dan kuburan leluhur masyarakat adat di seluruh pelosok nusantara dirampas secara brutal oleh ekspansi korporasi sawit, tambang, dan proyek infrastruktur atas nama pembangunan.', 'Sebagai perempuan pertama yang memimpin Aliansi Masyarakat Adat Nusantara (AMAN), organisasi yang menaungi lebih dari 2.500 komunitas adat di Indonesia, Rukka membawa suara perlawanan masyarakat adat ke forum tertinggi Perserikatan Bangsa-Bangsa (PBB). Ia konsisten memperjuangkan pengesahan Undang-Undang Masyarakat Adat dan pemetaan jutaan hektare wilayah adat secara mandiri.', 'Bagi generasi muda yang peduli keadilan sosial, Rukka adalah kompas keteguhan: membuktikan bahwa martabat ruang hidup leluhur adalah harga mati yang tidak boleh dikompromikan oleh kepentingan modal oligarki.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1999 - 2005', 'KONGRES PERTAMA MASYARAKAT ADAT & ADVOKASI PBB', 'Terlibat dalam pembentukan AMAN dan memimpin advokasi hak-hak masyarakat adat di forum UN Permanent Forum on Indigenous Issues di New York.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 - 2017', 'KEMENANGAN MK 35 & SEKJEN AMAN', 'Mengawal putusan bersejarah Mahkamah Konstitusi No. 35/PUU-X/2012 (Hutan Adat Bukan Hutan Negara) dan terpilih sebagai Sekretaris Jenderal AMAN.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2026', 'PEMETAAN WILAYAH ADAT & DANA ABADI NUSANTARA', 'Memimpin pemetaan partisipatif lebih dari 20 juta hektare wilayah adat dan menginisiasi Dana Abadi Nusantara untuk kemandirian ekonomi komunitas adat.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'AMAN (Aliansi Masyarakat Adat Nusantara)', 'Organisasi Gerakan Hak Asasi & Kedaulatan Wilayah Adat', 'Gerakan masyarakat sipil adat terbesar di dunia yang mengadvokasi pengakuan hukum, perlindungan hutan ulayat, dan sekolah adat.', 'https://aman.or.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Badan Registrasi Wilayah Adat (BRWA)', 'Sistem Informasi Geografis & Pemetaan Partisipatif', 'Lembaga pemetaan wilayah adat berbasis data spasial dan sosial mandiri yang telah mendaftarkan belasan juta hektare tanah leluhur.', 'https://brwa.or.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sekolah Adat & Lumbung Ekonomi Komunitas', 'Pendidikan Kontekstual & Kedaulatan Pangan Adat', 'Jaringan sekolah adat untuk mengajarkan bahasa ibu, kosmologi tradisi, dan pengelolaan benih pusaka kepada anak-anak muda adat.', 'https://aman.or.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Tanah Adat Bukan Komoditas: Mengapa Perlindungan Hutan Ulayat Adalah Kunci Selamat dari Krisis Iklim', 'HAK MASYARAKAT ADAT', '8 Menit Membaca', 'Analisis Rukka Sombolinggi tentang peran masyarakat adat sebagai penjaga 80% keanekaragaman hayati bumi.', 'Data sains global membuktikan bahwa tutupan hutan yang paling terjaga dan memiliki serapan karbon tertinggi di dunia adalah hutan yang dikelola oleh masyarakat adat berdasarkan hukum adat. Mengkriminalisasi masyarakat adat sama saja dengan menghancurkan pertahanan iklim kita sendiri.', '/artikel/rukka-sombolinggi-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menagih Janji RUU Masyarakat Adat: Dua Dekade Terkatung-katung di Meja Parlemen', 'ADVOCACY & HUKUM', '7 Menit Membaca', 'Catatan kritis atas lambannya kemauan politik negara dalam mengakui hak konstitusional jutaan warga adat.', 'Negara tidak boleh terus memandang masyarakat adat sebagai objek ilegal di tanah kelahirannya sendiri. Pengesahan RUU Masyarakat Adat adalah utang sejarah Republik yang harus segera dilunasi demi keadilan antargenerasi.', '/artikel/rukka-sombolinggi-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'AMAN (Aliansi Masyarakat Adat Nusantara)', 'Organisasi Gerakan Hak Asasi & Kedaulatan Wilayah Adat', 'Gerakan masyarakat sipil adat terbesar di dunia yang mengadvokasi pengakuan hukum, perlindungan hutan ulayat, dan sekolah adat.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://aman.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Badan Registrasi Wilayah Adat (BRWA)', 'Sistem Informasi Geografis & Pemetaan Partisipatif', 'Lembaga pemetaan wilayah adat berbasis data spasial dan sosial mandiri yang telah mendaftarkan belasan juta hektare tanah leluhur.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://brwa.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: dr. Lie Dharmawan (dr-lie-dharmawan)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'dr-lie-dharmawan' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'dr. Lie Dharmawan',
      title = 'Pendiri doctorSHARE & Penggagas Rumah Sakit Apung Swadaya Pertama di Dunia',
      category = 'Pejuang Akar Rumput',
      quote = 'Jika orang miskin dan warga pulau terpencil tidak bisa datang ke rumah sakit besar di kota, maka rumah sakitlah yang harus berlayar menembus ombak mendatangi mereka.',
      bio_paragraphs = ARRAY['Lahir dari keluarga sangat miskin di Padang dan sempat dilarang bermimpi menjadi dokter karena tidak memiliki uang, Lie Dharmawan (Lie Tek Bie) membuktikan bahwa ketabahan dan panggilan nurani mampu meruntuhkan segala kemustahilan. Setelah bekerja serabutan hingga berhasil menyelesaikan pendidikan dokter bedah umum, bedah toraks, jantung, dan pembuluh darah di Jerman, Lie memilih pulang ke tanah air.', 'Titik balik hidupnya terjadi saat ia menyaksikan seorang ibu di Kepulauan Kei membawa anaknya yang sakit sekarat berlayar berhari-hari dengan perahu kecil demi mencari bantuan medis. Tergerak oleh penderitaan warga kepulauan yang tak terjangkau fasilitas kesehatan, dr. Lie menjual rumah pribadinya dan mendirikan doctorSHARE (Yayasan Dokter Peduli).', 'Ia menyulap kapal kayu tradisional menjadi Rumah Sakit Apung (RSA) pertama di dunia, lengkap dengan kamar operasi bedah steril, rontgen, dan USG. Bersama ratusan dokter dan perawat relawan, armada RSA doctorSHARE telah mengarungi ribuan pulau terpencil nusantara, mengoperasi dan mengobati ratusan ribu warga papa secara cuma-cuma.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('dr-lie-dharmawan', 'dr. Lie Dharmawan', 'Pendiri doctorSHARE & Penggagas Rumah Sakit Apung Swadaya Pertama di Dunia', 'Pejuang Akar Rumput', 'Jika orang miskin dan warga pulau terpencil tidak bisa datang ke rumah sakit besar di kota, maka rumah sakitlah yang harus berlayar menembus ombak mendatangi mereka.', ARRAY['Lahir dari keluarga sangat miskin di Padang dan sempat dilarang bermimpi menjadi dokter karena tidak memiliki uang, Lie Dharmawan (Lie Tek Bie) membuktikan bahwa ketabahan dan panggilan nurani mampu meruntuhkan segala kemustahilan. Setelah bekerja serabutan hingga berhasil menyelesaikan pendidikan dokter bedah umum, bedah toraks, jantung, dan pembuluh darah di Jerman, Lie memilih pulang ke tanah air.', 'Titik balik hidupnya terjadi saat ia menyaksikan seorang ibu di Kepulauan Kei membawa anaknya yang sakit sekarat berlayar berhari-hari dengan perahu kecil demi mencari bantuan medis. Tergerak oleh penderitaan warga kepulauan yang tak terjangkau fasilitas kesehatan, dr. Lie menjual rumah pribadinya dan mendirikan doctorSHARE (Yayasan Dokter Peduli).', 'Ia menyulap kapal kayu tradisional menjadi Rumah Sakit Apung (RSA) pertama di dunia, lengkap dengan kamar operasi bedah steril, rontgen, dan USG. Bersama ratusan dokter dan perawat relawan, armada RSA doctorSHARE telah mengarungi ribuan pulau terpencil nusantara, mengoperasi dan mengobati ratusan ribu warga papa secara cuma-cuma.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2009', 'PENDIRIAN DOCTORSHARE (YAYASAN DOKTER PEDULI)', 'Mendirikan doctorSHARE bersama relawan medis muda untuk memberikan pelayanan kesehatan cuma-cuma bagi korban bencana dan masyarakat terisolasi.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013', 'PELAYARAN PERDANA RUMAH SAKIT APUNG DR. LIE A. DHARMAWAN', 'Meluncurkan RSA kapal kayu pertama yang dirakit dari hasil menjual rumah pribadi, berlayar melayani operasi bedah mayor di Kepulauan Maluku dan Papua.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2026', 'EKSPANSI ARMADA RSA & RUMAH SAKIT TERBANG', 'Mengoperasikan armada RSA Nusa Waluya I, II, dan program Pelayanan Medis Udara (Flying Doctors) untuk menembus pegunungan pedalaman.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Rumah Sakit Apung (RSA) doctorSHARE', 'Inovasi Fasilitas Medis Maritim Swadaya', 'Armada kapal bedah terapung berstandar medis internasional yang berlayar ke pulau-pulau 3T melayani operasi bedah mayor dan persalinan gratis.', 'https://doctorshare.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Dokter Terbang (Flying Doctors Indonesia)', 'Layanan Darurat Medis Daerah Terisolir', 'Tim dokter spesialis relawan yang diterbangkan menggunakan pesawat perintis ke lembah-lembah terpencil Papua dan pelosok Kalimantan.', 'https://doctorshare.org', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pusat Rawat Gizi & Edukasi Ibu-Anak Pesisir', 'Program Pencegahan Stunting Akar Rumput', 'Klinik intervensi nutrisi dan pendampingan 1.000 hari pertama kehidupan bagi balita kurang gizi di kepulauan terpencil.', 'https://doctorshare.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membedah di Atas Gelombang Samudra: Kisah dr. Lie Dharmawan dan Rumah Sakit Apung Pertama Dunia', 'KEMANUSIAAN MEDIS', '8 Menit Membaca', 'Catatan perjuangan para dokter relawan melakukan operasi bedah darurat di tengah goyangan ombak laut timur Indonesia.', 'Ketika lampu ruang operasi dinyalakan di lambung kapal kayu dan pisau bedah digerakkan di tengah hempasan ombak Samudra Pasifik, semua sekat suku, agama, dan status sosial runtuh. Yang ada hanyalah sumpah suci menyelamatkan nyawa manusia yang paling membutuhkan pertolongan.', '/artikel/dr-lie-dharmawan-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjual Rumah demi Membeli Kapal: Mengapa Pengabdian Tidak Mengenal Hitung-Hitungan Bisnis', 'INSPIRASI HIDUP', '7 Menit Membaca', 'Refleksi filosofis dr. Lie Dharmawan tentang hakikat kekayaan sejati seorang manusia.', 'Uang dan rumah mewah akan habis ditinggalkan saat kita mati. Namun senyum seorang ibu yang anaknya berhasil diselamatkan dari maut di atas kapal bedah adalah harta abadi yang tidak ternilai oleh apa pun di dunia ini.', '/artikel/dr-lie-dharmawan-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Rumah Sakit Apung (RSA) doctorSHARE', 'Inovasi Fasilitas Medis Maritim Swadaya', 'Armada kapal bedah terapung berstandar medis internasional yang berlayar ke pulau-pulau 3T melayani operasi bedah mayor dan persalinan gratis.', 'Donasi Medis (Mulai Rp 25.000)', 'Dukung Inisiatif', 'https://doctorshare.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Dokter Terbang (Flying Doctors Indonesia)', 'Layanan Darurat Medis Daerah Terisolir', 'Tim dokter spesialis relawan yang diterbangkan menggunakan pesawat perintis ke lembah-lembah terpencil Papua dan pelosok Kalimantan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://doctorshare.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Mama Aleta Baun (mama-aleta-baun)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'mama-aleta-baun' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Mama Aleta Baun',
      title = 'Tokoh Adat Suku Mollo NTT, Goldman Environmental Prize Winner & Penjaga Pegunungan Mutis',
      category = 'Pejuang Akar Rumput',
      quote = 'Batu adalah tulang kita, air adalah darah kita, tanah adalah daging kita, dan hutan adalah rambut kita. Menyerahkan tanah ulayat kepada tambang marmer sama saja dengan memutilasi tubuh kita sendiri.',
      bio_paragraphs = ARRAY['Di pedalaman Pegunungan Mutis, Timor Tengah Selatan, Nusa Tenggara Timur, Mama Aleta Baun memimpin perlawanan damai yang mengguncang korporasi tambang marmer dan pemegang konsesi perusak lingkungan. Menghadapi ancaman pembunuhan, penyerangan fisik, hingga terpaksa bersembunyi di dalam hutan bersama bayinya, Mama Aleta menolak menyerah.', 'Menyadari bahwa marmer yang hendak dikeruk perusahaan adalah batu sakral penahan mata air bagi tiga suku besar (Mollo, Miomafo, Amanatun), Mama Aleta memobilisasi ratusan perempuan adat untuk menggelar aksi duduk menenun kain tradisional di mulut tambang selama setahun penuh. Aksi tanpa kekerasan ini melumpuhkan total alat-alat berat perusahaan hingga tambang ditutup secara permanen.', 'Dianugerahi Goldman Environmental Prize 2013, Mama Aleta membuktikan kekuatan kearifan lokal perempuan adat: mengubah tenun pewarna alami menjadi senjata perlawanan menjaga keabadian mata air nusantara.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('mama-aleta-baun', 'Mama Aleta Baun', 'Tokoh Adat Suku Mollo NTT, Goldman Environmental Prize Winner & Penjaga Pegunungan Mutis', 'Pejuang Akar Rumput', 'Batu adalah tulang kita, air adalah darah kita, tanah adalah daging kita, dan hutan adalah rambut kita. Menyerahkan tanah ulayat kepada tambang marmer sama saja dengan memutilasi tubuh kita sendiri.', ARRAY['Di pedalaman Pegunungan Mutis, Timor Tengah Selatan, Nusa Tenggara Timur, Mama Aleta Baun memimpin perlawanan damai yang mengguncang korporasi tambang marmer dan pemegang konsesi perusak lingkungan. Menghadapi ancaman pembunuhan, penyerangan fisik, hingga terpaksa bersembunyi di dalam hutan bersama bayinya, Mama Aleta menolak menyerah.', 'Menyadari bahwa marmer yang hendak dikeruk perusahaan adalah batu sakral penahan mata air bagi tiga suku besar (Mollo, Miomafo, Amanatun), Mama Aleta memobilisasi ratusan perempuan adat untuk menggelar aksi duduk menenun kain tradisional di mulut tambang selama setahun penuh. Aksi tanpa kekerasan ini melumpuhkan total alat-alat berat perusahaan hingga tambang ditutup secara permanen.', 'Dianugerahi Goldman Environmental Prize 2013, Mama Aleta membuktikan kekuatan kearifan lokal perempuan adat: mengubah tenun pewarna alami menjadi senjata perlawanan menjaga keabadian mata air nusantara.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1996 - 2007', 'AKSI TENUN DAMAI & PENOLAKAN TAMBANG MARMER', 'Memimpin aksi ratusan perempuan Mollo menenun di lokasi tambang batu marmer Gunung Anjaf dan Nausus hingga izin tambang dibatalkan total.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013', 'GOLDMAN ENVIRONMENTAL PRIZE DI SAN FRANCISCO', 'Menerima penghargaan lingkungan tertinggi dunia (Goldman Prize) atas keberhasilan melindungi hutan suaka Pegunungan Mutis tanpa pertumpahan darah.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 - 2026', 'PENGEMBANGAN EKONOMI KAIN TENUN & BANK BENIH', 'Membangun koperasi perempuan penenun pewarna alami dan konservasi benih tanaman pangan lokal di Timor Tengah Selatan.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Koperasi Tenun Pewarna Alami Suku Mollo', 'Ekonomi Adat Berkelanjutan & Kriya Tradisional', 'Unit usaha mandiri ratusan perempuan penenun NTT yang menggunakan tanaman pewarna alami tanpa merusak kelestarian hutan.', 'https://sektorlokal.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kawasan Lindung Adat Pegunungan Mutis', 'Konservasi Tanah Ulayat & Mata Air Alami', 'Wilayah hutan suaka adat yang diselamatkan dari tambang marmer, kini menjadi sumber air abadi bagi ribuan keluarga petani di pulau Timor.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Bank Benih Pusaka & Lumbung Pangan Mandiri Mollo', 'Kedaulatan Pangan Tradisional', 'Pusat pelestarian varietas jagung lokal dan umbi-umbian tahan kekeringan warisan leluhur Timor.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Senjata Bernama Alat Tenun: Bagaimana Ibu-Ibu Mollo Mengalahkan Perusahaan Tambang Raksasa', 'PERLAWANAN DAMAI', '8 Menit Membaca', 'Kisah keberanian Mama Aleta Baun menggelar aksi menenun kain di tengah dinginnya kabut gunung dan ancaman preman bersenjata.', 'Kaum lelaki adat kerap diprovokasi untuk bentrok fisik yang berujung penjara. Mama Aleta mengambil strategi brilian: menempatkan perempuan di garis depan dengan alat tenun mereka. Duduk menenun di mulut tambang membuktikan bahwa kearifan budaya perempuan mampu menghentikan mesin-mesin penghancur bumi.', '/artikel/mama-aleta-baun-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kosmologi Tubuh dan Tanah: Filsafat Ekologi Suku Mollo yang Mengajarkan Keseimbangan Hidup', 'KEARIFAN ADAT', '7 Menit Membaca', 'Menelusuri ajaran leluhur Timor tentang hubungan sakral antara manusia dan bentang alam sekitarnya.', 'Bagi masyarakat adat Mollo, merusak tanah sama dengan melukai daging sendiri. Menjual batu marmer sama dengan menjual tulang belulang leluhur. Kesadaran kosmis inilah yang menjadi benteng pertahanan moral mereka melawan godaan uang suap tambang.', '/artikel/mama-aleta-baun-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Koperasi Tenun Pewarna Alami Suku Mollo', 'Ekonomi Adat Berkelanjutan & Kriya Tradisional', 'Unit usaha mandiri ratusan perempuan penenun NTT yang menggunakan tanaman pewarna alami tanpa merusak kelestarian hutan.', 'Rp 450.000 - Rp 2.250.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Kawasan Lindung Adat Pegunungan Mutis', 'Konservasi Tanah Ulayat & Mata Air Alami', 'Wilayah hutan suaka adat yang diselamatkan dari tambang marmer, kini menjadi sumber air abadi bagi ribuan keluarga petani di pulau Timor.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Gunretno (gunretno)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'gunretno' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Gunretno',
      title = 'Koordinator JMPPK & Tokoh Sedulur Sikep Penjaga Karst Pegunungan Kendeng',
      category = 'Pejuang Akar Rumput',
      quote = 'Ibu bumi wis maringi, ibu bumi dilarani, ibu bumi bakal nuntut. Tanah dan tandon air karst diciptakan untuk menghidupi petani, bukan untuk dihancurkan pabrik semen.',
      bio_paragraphs = ARRAY['Memegang teguh ajaran luhur Sedulur Sikep (Samin) yang anti-kekerasan, menjunjung kejujuran, dan berakar pada kedaulatan tanah pangan, Gunretno memimpin perjuangan ribuan petani di kawasan Pegunungan Kendeng (Pati, Rembang, Blora, Grobogan) melawan ancaman ekspansi pabrik semen skala raksasa.', 'Gunretno dan Jaringan Masyarakat Peduli Pegunungan Kendeng (JMPPK) membuktikan bahwa bukit-bukit karst Kendeng adalah cekungan air tanah alami (akuifer) yang mengairi ratusan ribu hektare sawah lumbung pangan Jawa Tengah. Aksi simbolik damai yang mereka gelar, seperti berjalan kaki ratusan kilometer Pati-Semarang hingga menyemen kedua kaki di depan Istana Negara Jakarta, menjadi ikon perlawanan agraria paling menggugah nurani bangsa.', 'Bagi generasi muda, Gunretno adalah teladan keteguhan prinsip hidup: membuktikan bahwa petani pangan adalah soko guru peradaban yang memiliki hak moral tertinggi untuk mempertahankan tanah kelolanya dari kerakusan industri ekstraktif.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('gunretno', 'Gunretno', 'Koordinator JMPPK & Tokoh Sedulur Sikep Penjaga Karst Pegunungan Kendeng', 'Pejuang Akar Rumput', 'Ibu bumi wis maringi, ibu bumi dilarani, ibu bumi bakal nuntut. Tanah dan tandon air karst diciptakan untuk menghidupi petani, bukan untuk dihancurkan pabrik semen.', ARRAY['Memegang teguh ajaran luhur Sedulur Sikep (Samin) yang anti-kekerasan, menjunjung kejujuran, dan berakar pada kedaulatan tanah pangan, Gunretno memimpin perjuangan ribuan petani di kawasan Pegunungan Kendeng (Pati, Rembang, Blora, Grobogan) melawan ancaman ekspansi pabrik semen skala raksasa.', 'Gunretno dan Jaringan Masyarakat Peduli Pegunungan Kendeng (JMPPK) membuktikan bahwa bukit-bukit karst Kendeng adalah cekungan air tanah alami (akuifer) yang mengairi ratusan ribu hektare sawah lumbung pangan Jawa Tengah. Aksi simbolik damai yang mereka gelar, seperti berjalan kaki ratusan kilometer Pati-Semarang hingga menyemen kedua kaki di depan Istana Negara Jakarta, menjadi ikon perlawanan agraria paling menggugah nurani bangsa.', 'Bagi generasi muda, Gunretno adalah teladan keteguhan prinsip hidup: membuktikan bahwa petani pangan adalah soko guru peradaban yang memiliki hak moral tertinggi untuk mempertahankan tanah kelolanya dari kerakusan industri ekstraktif.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2006 - 2014', 'PENDIRIAN JMPPK & PENOLAKAN PABRIK SEMEN DI PATI', 'Mengorganisir petani lintas kabupaten mendirikan JMPPK dan berhasil membatalkan rencana pembangunan pabrik semen di Sukolilo Pati lewat putusan MA.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2017', 'AKSI MENYEMEN KAKI DI DEPAN ISTANA NEGARA', 'Memimpin aksi damai para Kartini Kendeng menyemen kaki di hadapan Istana Presiden, mendesak dilakukannya Kajian Lingkungan Hidup Strategis (KLHS) Kendeng.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2026', 'PENGUATAN TANI MANDIRI & SEKOLAH SAMIN SIKEP', 'Mengembangkan pertanian organik lestari bebas pupuk kimia dan melestarikan pendidikan etika Sedulur Sikep bagi generasi muda tani.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'JMPPK (Jaringan Masyarakat Peduli Pegunungan Kendeng)', 'Gerakan Perlindungan Ekosistem Karst & Hak Tani', 'Koalisi petani akar rumput yang memperjuangkan perlindungan tandon air alami Pegunungan Kendeng dari kerusakan tambang.', 'https://jmppkkendeng.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Praktik Tani Organik Sedulur Sikep Sukolilo', 'Kedaulatan Pangan Alami & Tanpa Utang Kimia', 'Model pertanian padi organik mandiri yang tidak bergantung pada benih hibrida industri dan pupuk kimia sintetis.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Omah Kendeng & Pusat Edukasi Agraria Warga', 'Ruang Belajar Budaya & Advokasi Lingkungan', 'Balai pertemuan warga dan mahasiswa untuk mempelajari hukum agraria, ekologi karst, dan falsafah hidup Samin Sikep.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menyemen Kaki Demi Air: Mengapa Pegunungan Karst Kendeng Adalah Nafas Hidup Petani Jawa', 'HAK AGRARIA', '8 Menit Membaca', 'Catatan perjuangan para Kartini Kendeng menyuarakan jeritan tanah air yang hendak ditambang pabrik semen.', 'Semen tidak bisa dimakan saat paceklik tiba. Ketika gua-gua karst dan sungai bawah tanah di Kendeng diledakkan dinamit, mata air akan mati dan ribuan hektare sawah akan berubah menjadi gurun pasir. Petani berdiri menjaga Kendeng bukan untuk diri mereka sendiri, melainkan agar seluruh rakyat Indonesia tetap bisa makan nasi.', '/artikel/gunretno-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Ajaran Sedulur Sikep: Menolak Kekerasan dan Menjaga Kejujuran di Tengah Godaan Uang Ganti Rugi', 'FALSAFAH HIDUP', '7 Menit Membaca', 'Menelusuri etika hidup Samin yang mengajarkan bahwa tanah adalah ibu yang tidak boleh diperjualbelikan.', 'Bagi masyarakat Sedulur Sikep, bertani bukan sekadar profesi mencari uang, melainkan ibadah merawat bumi. Keteguhan mereka menolak amplop suap perusahaan adalah cermin keluhuran budi pekerti yang menampar kemunafikan modern.', '/artikel/gunretno-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'JMPPK (Jaringan Masyarakat Peduli Pegunungan Kendeng)', 'Gerakan Perlindungan Ekosistem Karst & Hak Tani', 'Koalisi petani akar rumput yang memperjuangkan perlindungan tandon air alami Pegunungan Kendeng dari kerusakan tambang.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://jmppkkendeng.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Praktik Tani Organik Sedulur Sikep Sukolilo', 'Kedaulatan Pangan Alami & Tanpa Utang Kimia', 'Model pertanian padi organik mandiri yang tidak bergantung pada benih hibrida industri dan pupuk kimia sintetis.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Lian Gogali (lian-gogali)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'lian-gogali' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Lian Gogali',
      title = 'Pendiri Institut Mosintuwu Poso & Penggerak Sekolah Perempuan Perdamaian Desa',
      category = 'Pejuang Akar Rumput',
      quote = 'Perdamaian sejati pascakonflik tidak lahir dari ruang seminar elit atau perundingan politisi; ia dibangun dari dapur bersama, kebun pangan, dan lingkaran belajar perempuan lintas agama di desa.',
      bio_paragraphs = ARRAY['Kala Poso, Sulawesi Tengah, luluh lantak oleh konflik komunal berdarah bernuansa agama pada awal dekade 2000-an yang menyisakan trauma mendalam, dendam antargenerasi, dan segregasi pemukiman warga Muslim dan Kristen, Lian Gogali menolak membiarkan tanah kelahirannya hancur dalam lingkaran kebencian.', 'Melalui riset magisternya di Universitas Sanata Dharma tentang suara perempuan di wilayah konflik, Lian mendirikan Institut Mosintuwu pada 2009. Ia merintis Sekolah Perempuan Mosintuwu, sebuah ruang perjumpaan aman di mana ibu-ibu Muslim dan Kristen yang dulunya saling bermusuhan duduk melingkar bersama, belajar tentang hak asasi, mengelola lumbung pangan desa, dan membangun koperasi ekonomi bersama.', 'Dianugerahi Coexist Prize dan Tanenbaum Peacemaker in Action Award, Lian membuktikan bahwa perempuan desa adalah aktor perdamaian paling tangguh: merajut kembali persaudaraan di atas puing-puing konflik melalui gotong royong ekonomi dan kedaulatan budaya lokal.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('lian-gogali', 'Lian Gogali', 'Pendiri Institut Mosintuwu Poso & Penggerak Sekolah Perempuan Perdamaian Desa', 'Pejuang Akar Rumput', 'Perdamaian sejati pascakonflik tidak lahir dari ruang seminar elit atau perundingan politisi; ia dibangun dari dapur bersama, kebun pangan, dan lingkaran belajar perempuan lintas agama di desa.', ARRAY['Kala Poso, Sulawesi Tengah, luluh lantak oleh konflik komunal berdarah bernuansa agama pada awal dekade 2000-an yang menyisakan trauma mendalam, dendam antargenerasi, dan segregasi pemukiman warga Muslim dan Kristen, Lian Gogali menolak membiarkan tanah kelahirannya hancur dalam lingkaran kebencian.', 'Melalui riset magisternya di Universitas Sanata Dharma tentang suara perempuan di wilayah konflik, Lian mendirikan Institut Mosintuwu pada 2009. Ia merintis Sekolah Perempuan Mosintuwu, sebuah ruang perjumpaan aman di mana ibu-ibu Muslim dan Kristen yang dulunya saling bermusuhan duduk melingkar bersama, belajar tentang hak asasi, mengelola lumbung pangan desa, dan membangun koperasi ekonomi bersama.', 'Dianugerahi Coexist Prize dan Tanenbaum Peacemaker in Action Award, Lian membuktikan bahwa perempuan desa adalah aktor perdamaian paling tangguh: merajut kembali persaudaraan di atas puing-puing konflik melalui gotong royong ekonomi dan kedaulatan budaya lokal.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2007 - 2009', 'RISET KONFLIK POSO & PENDIRIAN INSTITUT MOSINTUWU', 'Mewawancarai ratusan korban konflik komunal Poso dan mendirikan Institut Mosintuwu untuk merajut perdamaian berbasis kedaulatan perempuan desa.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 - 2018', 'SEKOLAH PEREMPUAN DESA & PERPUSTAKAAN KELILING', 'Mengembangkan Sekolah Perempuan di puluhan desa pascakonflik dan mengoperasikan perpustakaan keliling motor pintar menembus pelosok Danau Poso.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2026', 'FESTIVAL MOSINTUWU & DIPLOMASI KEDAULATAN DANAU', 'Menyelenggarakan Festival Mosintuwu merayakan keanekaragaman pangan lokal dan memimpin advokasi perlindungan Danau Poso dari proyek PLTA eksploitatif.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Institut Mosintuwu (Pusat Rekonsiliasi & Kedaulatan Desa)', 'Lembaga Bina Perdamaian & Hak Asasi Perempuan', 'Organisasi akar rumput terdepan di Sulawesi Tengah yang melatih ribuan perempuan desa dalam advokasi anggaran, kesehatan reproduksi, dan perdamaian.', 'https://mosintuwu.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sekolah Perempuan & Sekolah Toleransi Poso', 'Pendidikan Kritis Warga Pascakonflik', 'Kurikulum pendidikan emansipatoris lintas iman yang memulihkan trauma komunal dan membangun solidaritas ekonomi bersama.', 'https://mosintuwu.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Dodoha Mosintuwu & Lumbung Pangan Lokal', 'Restoran Komunitas & Konservasi Pangan', 'Pusat kuliner dan ekowisata berbasis bahan pangan organik lokal Poso yang dikelola bersama oleh perempuan lintas agama.', 'https://mosintuwu.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Merawat Damai dari Dapur Bersama: Kisah Ibu-Ibu Poso Meruntuhkan Tembok Prasangka Agama', 'BINA PERDAMAIAN', '8 Menit Membaca', 'Bagaimana Sekolah Perempuan Mosintuwu menyembuhkan luka trauma perang saudara di Sulawesi Tengah.', 'Ketika para elit politik dan pemuka agama sibuk berdebat di panggung, ibu-ibu desa di Poso memilih bertemu di dapur. Memasak sayur daun kelor bersama dan berbagi resep bumbu membuktikan bahwa kemanusiaan dan cinta kasih ibu selalu lebih kuat dibanding racun fanatisme kebencian.', '/artikel/lian-gogali-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjaga Denyut Danau Poso: Melindungi Ikan Sidat Purba dan Ruang Hidup Masyarakat Adat', 'EKOLOGI BUDAYA', '7 Menit Membaca', 'Perjuangan warga Danau Poso mempertahankan tradisi menangkap ikan sidat alami dari pengerukan proyek industri.', 'Danau Poso bukan sekadar waduk penampung air untuk turbin pembangkit listrik; ia adalah ruang spiritual dan sumber pangan ratusan generasi warga adat. Menjaga danau adalah menjaga peradaban Poso yang damai.', '/artikel/lian-gogali-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Institut Mosintuwu (Pusat Rekonsiliasi & Kedaulatan Desa)', 'Lembaga Bina Perdamaian & Hak Asasi Perempuan', 'Organisasi akar rumput terdepan di Sulawesi Tengah yang melatih ribuan perempuan desa dalam advokasi anggaran, kesehatan reproduksi, dan perdamaian.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://mosintuwu.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Sekolah Perempuan & Sekolah Toleransi Poso', 'Pendidikan Kritis Warga Pascakonflik', 'Kurikulum pendidikan emansipatoris lintas iman yang memulihkan trauma komunal dan membangun solidaritas ekonomi bersama.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://mosintuwu.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Eva Susanti Bande (eva-susanti-bande)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'eva-susanti-bande' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Eva Susanti Bande',
      title = 'Pejuang Agraria, Pendiri Front Rakyat Advokasi Sawit (FRAS) Sulteng & Yap Thiam Hien Awardee',
      category = 'Pejuang Akar Rumput',
      quote = 'Penjara dan teror aparat tidak akan pernah mampu membungkam jeritan petani gurem yang tanah kelolanya dirampas secara sewenang-wenang oleh korporasi perkebunan monokultur.',
      bio_paragraphs = ARRAY['Di bumi Sulawesi Tengah di mana ribuan hektare tanah garapan petani kecil dan masyarakat adat digusur oleh ekspansi perkebunan kelapa sawit monokultur skala raksasa, Eva Susanti Bande berdiri tegak tanpa rasa takut. Alumnus Fakultas Ilmu Sosial dan Politik Universitas Tadulako ini mendedikasikan seluruh hidupnya mengorganisir serikat-serikat tani akar rumput.', 'Keberaniannya memimpin aksi membela hak tanah petani di Kabupaten Banggai membuatnya dikriminalisasi oleh aparat dan dijatuhi hukuman penjara lebih dari 4 tahun pada 2014. Namun jeruji besi tidak memadamkan api perjuangannya. Begitu bebas setelah menerima grasi presiden, Eva langsung kembali ke pematang sawah dan tenda-tenda perjuangan petani, mendampingi warga merebut kembali hak atas ruang hidupnya.', 'Dianugerahi penghargaan hak asasi manusia tertinggi di Indonesia, Yap Thiam Hien Award 2018, Eva Bande adalah simbol ketangguhan advokasi agraria sejati: membuktikan integritas aktivisme lapangan yang tak tergoyahkan oleh represi kekuasaan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('eva-susanti-bande', 'Eva Susanti Bande', 'Pejuang Agraria, Pendiri Front Rakyat Advokasi Sawit (FRAS) Sulteng & Yap Thiam Hien Awardee', 'Pejuang Akar Rumput', 'Penjara dan teror aparat tidak akan pernah mampu membungkam jeritan petani gurem yang tanah kelolanya dirampas secara sewenang-wenang oleh korporasi perkebunan monokultur.', ARRAY['Di bumi Sulawesi Tengah di mana ribuan hektare tanah garapan petani kecil dan masyarakat adat digusur oleh ekspansi perkebunan kelapa sawit monokultur skala raksasa, Eva Susanti Bande berdiri tegak tanpa rasa takut. Alumnus Fakultas Ilmu Sosial dan Politik Universitas Tadulako ini mendedikasikan seluruh hidupnya mengorganisir serikat-serikat tani akar rumput.', 'Keberaniannya memimpin aksi membela hak tanah petani di Kabupaten Banggai membuatnya dikriminalisasi oleh aparat dan dijatuhi hukuman penjara lebih dari 4 tahun pada 2014. Namun jeruji besi tidak memadamkan api perjuangannya. Begitu bebas setelah menerima grasi presiden, Eva langsung kembali ke pematang sawah dan tenda-tenda perjuangan petani, mendampingi warga merebut kembali hak atas ruang hidupnya.', 'Dianugerahi penghargaan hak asasi manusia tertinggi di Indonesia, Yap Thiam Hien Award 2018, Eva Bande adalah simbol ketangguhan advokasi agraria sejati: membuktikan integritas aktivisme lapangan yang tak tergoyahkan oleh represi kekuasaan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2007 - 2010', 'PENDIRIAN FRAS & AKSI PETANI BANGGAI', 'Mendirikan Front Rakyat Advokasi Sawit (FRAS) Sulawesi Tengah memobilisasi ribuan petani menuntut pengembalian tanah adat yang dirampas korporasi.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014', 'KRIMINALISASI, PENJARA & GRASI PRESIDEN', 'Dipenjara atas tuduhan memimpin aksi pembelaan petani, menjadi simbol ketidakadilan hukum agraria nasional hingga memperoleh grasi.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2026', 'YAP THIAM HIEN AWARD & REDISTRIBUSI TANAH OBET', 'Meraih Yap Thiam Hien Award 2018 dan memimpin penyelesaian redistribusi ribuan hektare Tanah Obyek Reforma Agraria (TORA) bagi keluarga tani.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'FRAS Sulteng (Front Rakyat Advokasi Sawit)', 'Serikat Pembela Hak Petani & Keadilan Agraria', 'Organisasi advokasi lapangan yang mendampingi komunitas petani gurem melawan perampasan tanah dan intimidasi perusahaan perkebunan.', 'https://sektorlokal.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Koperasi Tani Mandiri Berbasis Pangan Polikultur', 'Kedaulatan Pertanian Rakyat', 'Inisiatif pemulihan tanah bekas konsesi sawit menjadi kebun pangan polikultur (kakao, jagung, rempah) milik keluarga tani.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sekolah Advokasi Hukum Kritis Petani', 'Pendidikan Hukum Emansipatoris Akar Rumput', 'Pelatihan paralegal desa untuk melatih para petani memahami hak-hak konstitusional atas tanah dan menangani konflik agraria.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Balik Jeruji Penjara ke Pematang Sawah: Catatan Ketabahan Eva Bande Membela Hak Petani', 'HAK ASASI MANUSIA', '8 Menit Membaca', 'Kesaksian Eva Bande tentang bagaimana represi aparat tidak pernah mampu mematahkan solidaritas petani kecil.', 'Penjara hanya bisa mengurung fisik seorang manusia, tetapi ia tidak akan pernah bisa mengurung kebenaran. Selama petani masih lapar di tanah kelahirannya sendiri, perjuangan merebut kembali hak atas tanah adalah mandat konstitusi yang harus terus dijalankan.', '/artikel/eva-susanti-bande-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Monokultur Sawit vs Kedaulatan Pangan: Menghitung Biaya Kerusakan Sosial di Pelosok Sulawesi', 'AGRARIA & EKOLOGI', '7 Menit Membaca', 'Pembedahan mendalam tentang hancurnya struktur ekonomi desa ketika kebun pangan rakyat disulap menjadi perkebunan monokultur kelapa sawit.', 'Ketika seluruh tanah desa ditanami sawit, petani kehilangan kemampuan menanam pangannya sendiri. Mereka terpaksa membeli beras dan sayur dengan harga mahal dari luar. Kedaulatan sejati lahir saat desa mampu memberi makan warganya sendiri.', '/artikel/eva-susanti-bande-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'FRAS Sulteng (Front Rakyat Advokasi Sawit)', 'Serikat Pembela Hak Petani & Keadilan Agraria', 'Organisasi advokasi lapangan yang mendampingi komunitas petani gurem melawan perampasan tanah dan intimidasi perusahaan perkebunan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Koperasi Tani Mandiri Berbasis Pangan Polikultur', 'Kedaulatan Pertanian Rakyat', 'Inisiatif pemulihan tanah bekas konsesi sawit menjadi kebun pangan polikultur (kakao, jagung, rempah) milik keluarga tani.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Mansetus Balawala (mansetus-balawala)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'mansetus-balawala' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Mansetus Balawala',
      title = 'Pendiri Yayasan Kesehatan untuk Semua (YKS) Flores Timur & Ramon Magsaysay Awardee',
      category = 'Pejuang Akar Rumput',
      quote = 'Menyelamatkan nyawa ibu melahirkan di pelosok tidak membutuhkan helikopter atau peralatan mahal; yang dibutuhkan adalah ketulusan hati mengendarai sepeda motor menembus jalan cadas pegunungan.',
      bio_paragraphs = ARRAY['Di pelosok Flores Timur dan Pulau Adonara, Nusa Tenggara Timur, daerah dengan topografi pegunungan terjal dan jalanan berbatu cadas yang tidak bisa dilalui mobil ambulans konvensional, angka kematian ibu melahirkan dan bayi sempat berada pada tingkat yang sangat memilukan. Mansetus Balawala, seorang pegawai bersahaja di Larantuka, menolak pasrah pada keterbatasan fasilitas negara.', 'Pada 2002, Mansetus mendirikan Yayasan Kesehatan untuk Semua (YKS). Ia memodifikasi sepeda motor menjadi armada ambulans darurat roda dua yang dilengkapi dengan kotak perlengkapan medis, tandu samping, dan tangki bensin khusus. Bersama jaringan sukarelawan pengendara motor desa dan skema asuransi mikro tradisional (iuran gotong royong warga), armada motor Mansetus telah menyelamatkan ribuan ibu hamil berisiko tinggi dengan membawanya tepat waktu ke puskesmas terdekat.', 'Atas dedikasi kemanusiaannya yang sederhana namun revolusioner, Mansetus dianugerahi Ramon Magsaysay Award 2008 (sering disebut Hadiah Nobel Asia): membuktikan bahwa inovasi sosial tepat guna yang berakar pada empati mampu mengalahkan kemewahan teknologi mahal.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('mansetus-balawala', 'Mansetus Balawala', 'Pendiri Yayasan Kesehatan untuk Semua (YKS) Flores Timur & Ramon Magsaysay Awardee', 'Pejuang Akar Rumput', 'Menyelamatkan nyawa ibu melahirkan di pelosok tidak membutuhkan helikopter atau peralatan mahal; yang dibutuhkan adalah ketulusan hati mengendarai sepeda motor menembus jalan cadas pegunungan.', ARRAY['Di pelosok Flores Timur dan Pulau Adonara, Nusa Tenggara Timur, daerah dengan topografi pegunungan terjal dan jalanan berbatu cadas yang tidak bisa dilalui mobil ambulans konvensional, angka kematian ibu melahirkan dan bayi sempat berada pada tingkat yang sangat memilukan. Mansetus Balawala, seorang pegawai bersahaja di Larantuka, menolak pasrah pada keterbatasan fasilitas negara.', 'Pada 2002, Mansetus mendirikan Yayasan Kesehatan untuk Semua (YKS). Ia memodifikasi sepeda motor menjadi armada ambulans darurat roda dua yang dilengkapi dengan kotak perlengkapan medis, tandu samping, dan tangki bensin khusus. Bersama jaringan sukarelawan pengendara motor desa dan skema asuransi mikro tradisional (iuran gotong royong warga), armada motor Mansetus telah menyelamatkan ribuan ibu hamil berisiko tinggi dengan membawanya tepat waktu ke puskesmas terdekat.', 'Atas dedikasi kemanusiaannya yang sederhana namun revolusioner, Mansetus dianugerahi Ramon Magsaysay Award 2008 (sering disebut Hadiah Nobel Asia): membuktikan bahwa inovasi sosial tepat guna yang berakar pada empati mampu mengalahkan kemewahan teknologi mahal.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2002', 'PENDIRIAN YAYASAN KESEHATAN UNTUK SEMUA (YKS)', 'Mendirikan YKS di Flores Timur, menggalang sukarelawan pengendara motor untuk menjemput pasien gawat darurat di desa-desa terisolasi.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2008', 'RAMON MAGSAYSAY AWARD DI MANILA', 'Menerima penghargaan prestisius Ramon Magsaysay Award di Filipina atas kepemimpinan inovasi transportasi medis perdesaan berbasis komunitas.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 - 2026', 'EKSPANSI AMBULANS MOTOR & SKEMA ASURANSI MIKRO DESA', 'Memperluas jangkauan armada motor ke pulau-pulau tetangga (Solor dan Lembata) serta membina posyandu mandiri di ratusan dusun NTT.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Armada Ambulans Motor Desa Flores Timur (YKS)', 'Inovasi Transportasi Medis Tepat Guna', 'Armada sepeda motor modifikasi khusus yang menembus jalan setapak hutan dan pegunungan terjal untuk evakuasi darurat ibu melahirkan.', 'https://sektorlokal.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Skema Asuransi Mikro Gotong Royong Kesehatan', 'Fintech Sosial Komunal Berbasis Iuran Sukarela', 'Tabungan kesehatan komunitas yang dikelola bersama warga desa untuk mendanai biaya operasional bensin motor ambulans dan obat-obatan.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pusat Pelatihan Relawan Kesehatan Motor Pelosok', 'Pemberdayaan Kader Medis Desa', 'Pelatihan pertolongan pertama pada kecelakaan (P3K) dan deteksi tanda bahaya kehamilan bagi para pemuda pengendara motor di NTT.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Motor Penyelamat Nyawa di Jalur Cadas Flores: Kisah Kemanusiaan Mansetus Balawala', 'INOVASI KESEHATAN', '7 Menit Membaca', 'Perjalanan dramatis para relawan motor menembus badai malam di pegunungan NTT demi menyelamatkan nyawa ibu dan bayi.', 'Di jalanan sempit berbatu di mana mobil ambulans mogok tak berdaya, deru sepeda motor Mansetus adalah suara harapan bagi seorang ibu yang sedang berjuang antara hidup dan mati. Kemanusiaan sejati tidak menunggu jalan aspal mulus dibangun; ia melompat menembus rintangan demi menyelamatkan sesama.', '/artikel/mansetus-balawala-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Asuransi Beras dan Uang Receh: Pelajaran Kemandirian Kesehatan dari Warga Desa Flores', 'GOTONG ROYONG', '6 Menit Membaca', 'Bagaimana warga miskin desa mampu membiayai sistem ambulans mandiri tanpa bergantung pada subsidi pemerintah.', 'Dengan menyisihkan segenggam beras atau koin receh setiap panen, warga membuktikan bahwa rasa memiliki komunal adalah jaminan kesehatan paling kokoh di pelosok nusantara.', '/artikel/mansetus-balawala-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Armada Ambulans Motor Desa Flores Timur (YKS)', 'Inovasi Transportasi Medis Tepat Guna', 'Armada sepeda motor modifikasi khusus yang menembus jalan setapak hutan dan pegunungan terjal untuk evakuasi darurat ibu melahirkan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Skema Asuransi Mikro Gotong Royong Kesehatan', 'Fintech Sosial Komunal Berbasis Iuran Sukarela', 'Tabungan kesehatan komunitas yang dikelola bersama warga desa untuk mendanai biaya operasional bensin motor ambulans dan obat-obatan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Maria Catarina Sumarsih (maria-catarina-sumarsih)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'maria-catarina-sumarsih' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Maria Catarina Sumarsih',
      title = 'Inisiator Aksi Kamisan, Pembela Hak Asasi Manusia & Penjaga Api Moral Keadilan Bangsa',
      category = 'Pejuang Akar Rumput',
      quote = 'Payung hitam kami yang berdiri diam di seberang Istana Negara setiap Kamis sore adalah saksi bisu bahwa kebenaran tidak akan pernah padam dan kejahatan kemanusiaan tidak boleh diputihkan oleh kekuasaan.',
      bio_paragraphs = ARRAY['Ketika putra tercintanya, Bernardinus Realino Norma Irawan (Wawan), seorang mahasiswa Fakultas Ekonomi Universitas Atma Jaya yang bertugas sebagai relawan tim medis kemanusiaan, ditembak mati oleh peluru aparat keamanan dalam Tragedi Semanggi I pada 13 November 1998, Maria Catarina Sumarsih memilih tidak tenggelam dalam ratapan kesedihan.', 'Ia mengubah duka lara seorang ibu menjadi api perlawanan moral paling konsisten dalam sejarah Republik Indonesia. Sejak 18 Januari 2007, bersama keluarga korban pelanggaran HAM berat masa lalu lainnya, Sumarsih berdiri tegap di seberang Istana Kepresidenan Jakarta setiap hari Kamis sore, mengenakan baju hitam dan memegang payung hitam dalam Aksi Kamisan.', 'Hampir dua dekade berlalu menembus terik matahari dan guyuran hujan badai serta berganti-ganti presiden, Sumarsih tetap berdiri diam tanpa lelah menuntut penuntasan pengadilan HAM ad hoc dan menolak impunitas bagi para jenderal pelanggar hak asasi manusia. Sumarsih adalah kompas moral peradaban bangsa kita.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('maria-catarina-sumarsih', 'Maria Catarina Sumarsih', 'Inisiator Aksi Kamisan, Pembela Hak Asasi Manusia & Penjaga Api Moral Keadilan Bangsa', 'Pejuang Akar Rumput', 'Payung hitam kami yang berdiri diam di seberang Istana Negara setiap Kamis sore adalah saksi bisu bahwa kebenaran tidak akan pernah padam dan kejahatan kemanusiaan tidak boleh diputihkan oleh kekuasaan.', ARRAY['Ketika putra tercintanya, Bernardinus Realino Norma Irawan (Wawan), seorang mahasiswa Fakultas Ekonomi Universitas Atma Jaya yang bertugas sebagai relawan tim medis kemanusiaan, ditembak mati oleh peluru aparat keamanan dalam Tragedi Semanggi I pada 13 November 1998, Maria Catarina Sumarsih memilih tidak tenggelam dalam ratapan kesedihan.', 'Ia mengubah duka lara seorang ibu menjadi api perlawanan moral paling konsisten dalam sejarah Republik Indonesia. Sejak 18 Januari 2007, bersama keluarga korban pelanggaran HAM berat masa lalu lainnya, Sumarsih berdiri tegap di seberang Istana Kepresidenan Jakarta setiap hari Kamis sore, mengenakan baju hitam dan memegang payung hitam dalam Aksi Kamisan.', 'Hampir dua dekade berlalu menembus terik matahari dan guyuran hujan badai serta berganti-ganti presiden, Sumarsih tetap berdiri diam tanpa lelah menuntut penuntasan pengadilan HAM ad hoc dan menolak impunitas bagi para jenderal pelanggar hak asasi manusia. Sumarsih adalah kompas moral peradaban bangsa kita.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1998', 'GUGURNYA WAWAN DALAM TRAGEDI SEMANGGI I', 'Kehilangan putra sulungnya yang ditembak aparat saat menolong demonstran korban penembakan di Jakarta, mengawali perjalanan advokasi keadilan seumur hidup.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2007', 'AWAL MULA AKSI KAMISAN DI SEBERANG ISTANA', 'Menginisiasi Aksi Kamisan pertama bersama JSKK (Jaringan Solidaritas Korban untuk Keadilan), menuntut pengusutan tuntas kasus Trisakti, Semanggi, dan penculikan aktivis.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 - 2026', '800+ PEKAN PAYUNG HITAM & INSPIRASI LINTAS GENERASI', 'Mempertahankan Aksi Kamisan melampaui 800 pekan berturut-turut, menjadi simbol perlawanan damai yang diadopsi oleh pemuda di puluhan kota Indonesia.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Aksi Kamisan (Gerakan Payung Hitam Menolak Lupa)', 'Gerakan Moral Hak Asasi Manusia & Melawan Impunitas', 'Aksi diam damai setiap Kamis sore di seberang Istana Presiden yang telah berlangsung selama belasan tahun menuntut pengadilan HAM ad hoc.', 'https://aksikamisan.net', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'JSKK (Jaringan Solidaritas Korban untuk Keadilan)', 'Koalisi Keluarga Korban Pelanggaran HAM Berat', 'Wadah persaudaraan keluarga korban kejahatan kemanusiaan masa lalu yang saling menguatkan dalam merawat ingatan kolektif bangsa.', 'https://kontras.org', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Arsip Dokumen Sejarah & Memorialisasi Tragedi Semanggi', 'Dokumentasi Forensik & Sejarah Kemanusiaan', 'Pengarsipan bukti-bukti balistik, kesaksian saksi kunci, dan kronik penembakan mahasiswa 1998 untuk menolak pemutarbalikan sejarah.', 'https://kontras.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Payung Hitam Melawan Lupa: Keteguhan Seorang Ibu yang Menolak Berdamai dengan Impunitas', 'HAK ASASI MANUSIA', '8 Menit Membaca', 'Perjalanan hidup Sumarsih merawat api keadilan di bawah terik dan hujan di seberang gerbang Istana Negara.', 'Negara sering kali berharap para keluarga korban akan lelah, menua, dan perlahan melupakan luka mereka. Namun Sumarsih membuktikan bahwa cinta seorang ibu pada anaknya dan komitmen pada keadilan adalah kekuatan spiritual yang tidak akan pernah bisa dikalahkan oleh waktu atau kekuasaan politik manapun.', '/artikel/maria-catarina-sumarsih-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menolak Rekonsiliasi Palsu Tanpa Pengungkapan Kebenaran: Mengapa Keadilan HAM Harus Ditegakkan', 'ETIKA REPUBLIK', '7 Menit Membaca', 'Pentingnya mengadili para pelaku kejahatan kemanusiaan agar tragedi kelam masa lalu tidak berulang kepada generasi muda hari ini.', 'Memaafkan tanpa pengakuan bersalah dan pengungkapan kebenaran hukum adalah pemutihan atas kejahatan. Sebuah bangsa tidak akan pernah memiliki fondasi moral yang kokoh jika kuburan para martir demokrasinya terus ditutup-tutupi dengan kepalsuan.', '/artikel/maria-catarina-sumarsih-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Aksi Kamisan (Gerakan Payung Hitam Menolak Lupa)', 'Gerakan Moral Hak Asasi Manusia & Melawan Impunitas', 'Aksi diam damai setiap Kamis sore di seberang Istana Presiden yang telah berlangsung selama belasan tahun menuntut pengadilan HAM ad hoc.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://aksikamisan.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'JSKK (Jaringan Solidaritas Korban untuk Keadilan)', 'Koalisi Keluarga Korban Pelanggaran HAM Berat', 'Wadah persaudaraan keluarga korban kejahatan kemanusiaan masa lalu yang saling menguatkan dalam merawat ingatan kolektif bangsa.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://kontras.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Hendro Utomo (hendro-utomo)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'hendro-utomo' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Hendro Utomo',
      title = 'Pendiri Food Bank of Indonesia (FOI) & Pelopor Gerakan Food Rescue Nusantara',
      category = 'Pejuang Akar Rumput',
      quote = 'Di balik gemerlap pesta kota besar yang membuang jutaan ton makanan sisa setiap hari, ada balita di kampung kumuh yang tidur dengan perut lapar. Menyelamatkan makanan berlebih adalah jembatan keadilan kemanusiaan.',
      bio_paragraphs = ARRAY['Menyaksikan paradoks memilukan di perkotaan Indonesia, di mana industri perhotelan, ritel modern, dan katering membuang gunungan makanan berlebih yang masih sangat layak santap ke TPA, sementara ribuan balita di gang-gang sempit perkotaan menderita gizi buruk dan stunting akibat kelaparan tersembunyi, Hendro Utomo tergerak hatinya.', 'Pada 2015, Hendro mendirikan Food Bank of Indonesia (FOI). Ia membangun jaringan logistik penyelamatan makanan (food rescue) terstruktur pertama di Indonesia, menghubungkan industri pangan yang memiliki kelebihan pasokan dengan ribuan kader posyandu, Pendidikan Anak Usia Dini (PAUD), dan dapur lansia di ratusan kampung miskin.', 'Melalui program ''Sayap dari Sayap'' dan ''Dapur Pangan Anak Negeri'', FOI telah mendistribusikan puluhan juta porsi makanan bergizi kepada ratusan ribu anak balita, membuktikan bahwa penanganan krisis pangan tidak selalu membutuhkan pembukaan lahan baru, melainkan keadilan redistribusi logistik makanan berlebih.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('hendro-utomo', 'Hendro Utomo', 'Pendiri Food Bank of Indonesia (FOI) & Pelopor Gerakan Food Rescue Nusantara', 'Pejuang Akar Rumput', 'Di balik gemerlap pesta kota besar yang membuang jutaan ton makanan sisa setiap hari, ada balita di kampung kumuh yang tidur dengan perut lapar. Menyelamatkan makanan berlebih adalah jembatan keadilan kemanusiaan.', ARRAY['Menyaksikan paradoks memilukan di perkotaan Indonesia, di mana industri perhotelan, ritel modern, dan katering membuang gunungan makanan berlebih yang masih sangat layak santap ke TPA, sementara ribuan balita di gang-gang sempit perkotaan menderita gizi buruk dan stunting akibat kelaparan tersembunyi, Hendro Utomo tergerak hatinya.', 'Pada 2015, Hendro mendirikan Food Bank of Indonesia (FOI). Ia membangun jaringan logistik penyelamatan makanan (food rescue) terstruktur pertama di Indonesia, menghubungkan industri pangan yang memiliki kelebihan pasokan dengan ribuan kader posyandu, Pendidikan Anak Usia Dini (PAUD), dan dapur lansia di ratusan kampung miskin.', 'Melalui program ''Sayap dari Sayap'' dan ''Dapur Pangan Anak Negeri'', FOI telah mendistribusikan puluhan juta porsi makanan bergizi kepada ratusan ribu anak balita, membuktikan bahwa penanganan krisis pangan tidak selalu membutuhkan pembukaan lahan baru, melainkan keadilan redistribusi logistik makanan berlebih.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015', 'PENDIRIAN FOOD BANK OF INDONESIA (FOI)', 'Mendirikan FOI sebagai bank makanan nirlaba terstruktur pertama yang mengumpulkan kelebihan makanan layak santap dari ritel dan industri kuliner.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2020', 'EKSPANSI LOGISTIK RANTAI DINGIN & RESPON PANDEMI', 'Mengoperasikan armada mobil pendingin penyelamat makanan di berbagai provinsi dan mendistribusikan jutaan paket pangan darurat saat krisis wabah.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'PROGRAM PENGENTASAN STUNTING 1.000 HARI KEHIDUPAN', 'Bermitra dengan ribuan PAUD dan posyandu desa menekan angka stunting pada balita dari keluarga rentan di berbagai kota besar.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Food Bank of Indonesia (Jejaring Food Rescue Nasional)', 'Logistik Kemanusiaan & Penyelamatan Makanan', 'Organisasi penyelamat makanan berlebih industri yang telah menyalurkan jutaan porsi makanan bergizi ke balita dan lansia prasejahtera.', 'https://foodbankindonesia.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Sayap dari Sayap (Nutrisi PAUD & Posyandu)', 'Intervensi Gizi Dini Anak Negeri', 'Penyediaan sarapan bergizi harian bagi puluhan ribu anak-anak usia dini di sekolah-sekolah rakyat pelosok kampung.', 'https://foodbankindonesia.org', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Audit & Kampanye Pengurangan Food Waste Perkotaan', 'Riset Ketahanan Pangan & Edukasi Publik', 'Modul literasi bagi sektor horeka (hotel, restoran, kafe) untuk menekan limbah makanan dan mendonasikan kelebihan pasokan secara aman.', 'https://foodbankindonesia.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Ironi Piring Makanan: Mengapa Kelaparan Balita Terjadi di Tengah Gunungan Sampah Makanan Kota', 'KETAHANAN PANGAN', '7 Menit Membaca', 'Pembedahan data FOI tentang jutaan ton makanan yang terbuang percuma setiap tahun dan solusinya bagi pengentasan stunting.', 'Indonesia adalah salah satu negara pembuang makanan terbesar di dunia, namun pada saat yang sama jutaan anak kita mengalami stunting akibat kekurangan gizi protein. Masalah ini bukanlah ketiadaan makanan, melainkan kegagalan sistem distribusi logistik yang adil.', '/artikel/hendro-utomo-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Ibu-Ibu Kader Posyandu: Garda Terdepan Penyelamat Generasi dari Ancaman Gizi Buruk', 'KEKUATAN KOMUNAL', '6 Menit Membaca', 'Peran vital jaringan ibu-ibu kampung dalam memasak dan membagikan makanan sehat bagi balita rentan.', 'Tanpa dedikasi para ibu kader posyandu yang memasak sukarela di dapur-dapur umum kampung, jutaan porsi makanan bergizi tidak akan pernah sampai ke perut anak-anak yang membutuhkan. Mereka adalah pahlawan ketahanan pangan sejati.', '/artikel/hendro-utomo-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Food Bank of Indonesia (Jejaring Food Rescue Nasional)', 'Logistik Kemanusiaan & Penyelamatan Makanan', 'Organisasi penyelamat makanan berlebih industri yang telah menyalurkan jutaan porsi makanan bergizi ke balita dan lansia prasejahtera.', 'Paket Donasi Pangan Rp 50.000', 'Dukung Inisiatif', 'https://foodbankindonesia.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Program Sayap dari Sayap (Nutrisi PAUD & Posyandu)', 'Intervensi Gizi Dini Anak Negeri', 'Penyediaan sarapan bergizi harian bagi puluhan ribu anak-anak usia dini di sekolah-sekolah rakyat pelosok kampung.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://foodbankindonesia.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Saur Marlina (Butet) Manurung (butet-manurung)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'butet-manurung' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Saur Marlina (Butet) Manurung',
      title = 'Pendiri Sokola Institute & Pelopor Pendidikan Emansipatoris Orang Rimba',
      category = 'Pejuang Akar Rumput',
      quote = 'Pendidikan bagi masyarakat adat bukan untuk mengubah mereka menjadi orang kota yang kehilangan akar budaya, melainkan senjata literasi agar mereka berdaya membela hak tanah ulayatnya dari perampasan.',
      bio_paragraphs = ARRAY['Mengawali langkah pada 1999 dengan tinggal di dalam lebatnya rimba belantara Taman Nasional Bukit Duabelas, Jambi, Saur Marlina (Butet) Manurung mendedikasikan hidupnya mendidik anak-anak Orang Rimba (Suku Anak Dalam). Alumnus Antropologi dan Sastra Indonesia Universitas Padjadjaran ini menolak model pendidikan formal penyeragaman yang mencabut masyarakat adat dari kosmologinya.', 'Menyadari bahwa Orang Rimba kerap ditipu dan dipaksa menandatangani surat pelepasan tanah adat dengan cap jempol karena buta huruf, Butet merancang metode baca-tulis kontekstual yang disesuaikan dengan ritme hidup masyarakat rimba. Bersama rekan-rekannya, ia mendirikan Sokola Institute, sebuah lembaga pendidikan alternatif yang telah membuka puluhan sekolah rimba di pedalaman Jambi, Papua, Flores, hingga Halmahera.', 'Dianugerahi Ramon Magsaysay Award 2014, Butet Manurung membuktikan filosofi pendidikan pembebasan sejati: membekali masyarakat adat dengan literasi kritis agar mereka mampu berdialog sejajar dan melindungi rimba kelahirannya dari kepunahan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('butet-manurung', 'Saur Marlina (Butet) Manurung', 'Pendiri Sokola Institute & Pelopor Pendidikan Emansipatoris Orang Rimba', 'Pejuang Akar Rumput', 'Pendidikan bagi masyarakat adat bukan untuk mengubah mereka menjadi orang kota yang kehilangan akar budaya, melainkan senjata literasi agar mereka berdaya membela hak tanah ulayatnya dari perampasan.', ARRAY['Mengawali langkah pada 1999 dengan tinggal di dalam lebatnya rimba belantara Taman Nasional Bukit Duabelas, Jambi, Saur Marlina (Butet) Manurung mendedikasikan hidupnya mendidik anak-anak Orang Rimba (Suku Anak Dalam). Alumnus Antropologi dan Sastra Indonesia Universitas Padjadjaran ini menolak model pendidikan formal penyeragaman yang mencabut masyarakat adat dari kosmologinya.', 'Menyadari bahwa Orang Rimba kerap ditipu dan dipaksa menandatangani surat pelepasan tanah adat dengan cap jempol karena buta huruf, Butet merancang metode baca-tulis kontekstual yang disesuaikan dengan ritme hidup masyarakat rimba. Bersama rekan-rekannya, ia mendirikan Sokola Institute, sebuah lembaga pendidikan alternatif yang telah membuka puluhan sekolah rimba di pedalaman Jambi, Papua, Flores, hingga Halmahera.', 'Dianugerahi Ramon Magsaysay Award 2014, Butet Manurung membuktikan filosofi pendidikan pembebasan sejati: membekali masyarakat adat dengan literasi kritis agar mereka mampu berdialog sejajar dan melindungi rimba kelahirannya dari kepunahan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1999 - 2003', 'TINGGAL BERSAMA ORANG RIMBA & SOKOLA RIMBA', 'Tinggal di hutan Bukit Duabelas Jambi, mengembangkan metode belajar membaca di atas pohon dan mendirikan Sokola Rimba pertama.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2004 - 2013', 'PENDIRIAN SOKOLA INSTITUTE & BUKU BESTSELLER', 'Meresmikan Sokola Institute, menerbitkan buku legendaris Sokola Rimba yang diadaptasi menjadi film bioskop oleh Riri Riza dan Mira Lesmana.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 - 2026', 'RAMON MAGSAYSAY AWARD & PENDIDIKAN ADAT NUSANTARA', 'Menerima Ramon Magsaysay Award di Manila dan memperluas program Sokola ke komunitas adat Suku Asmat Papua, Kajang, dan kepulauan terluar.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sokola Institute (Sekolah Literasi Kontekstual Adat)', 'Pendidikan Emansipatoris & Hak Masyarakat Adat', 'Lembaga pendidikan alternatif nirlaba yang menyediakan akses literasi baca-tulis-hitung kontekstual bagi suku-suku pedalaman nusantara.', 'https://sokola.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Sokola Rimba (Pengalaman Belajar Bersama Orang Rimba)', 'Karya Literatur Antropologi & Pendidikan', 'Buku catatan etnografis mendalam tentang dinamika perjumpaan budaya, kearifan rimba, dan perjuangan hak tanah Orang Rimba.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kaderisasi Guru Muda & Kader Penjaga Hutan Adat', 'Pemberdayaan Pemuda Adat Pedalaman', 'Program pembinaan anak-anak rimba yang telah melek huruf untuk menjadi guru bagi adik-adiknya dan juru runding hak ulayat sukunya.', 'https://sokola.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membaca untuk Bertahan Hidup: Mengapa Literasi Adalah Benteng Perlindungan Hutan Rimba', 'PENDIDIKAN ADAT', '8 Menit Membaca', 'Catatan Butet Manurung tentang bagaimana kemampuan membaca menyelamatkan wilayah adat dari jebakan kontrak palsu korporasi.', 'Anak-anak Orang Rimba belajar membaca bukan untuk mengejar ijazah sekolah atau menjadi pegawai kantoran. Mereka belajar membaca agar mampu membaca surat perjanjian batas tanah konsesi dan menolak ditipu oleh perambah hutan yang ingin mencaplok rumah leluhur mereka.', '/artikel/butet-manurung-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghormati Ritme Hidup Pedalaman: Pendidikan yang Tidak Merusak Jiwa dan Budaya Leluhur', 'ANTROPOLOGI PENDIDIKAN', '7 Menit Membaca', 'Bahaya model sekolah formal seragam yang memaksakan kurikulum kota kepada masyarakat adat.', 'Pendidikan yang memaksakan anak rimba memakai seragam rapi dan duduk diam di kelas beton justru akan mencabut mereka dari keterampilan bertahan hidup di alam. Pendidikan sejati harus merangkul kosmologi lokal dan memperkuat jati diri mereka sebagai penjaga rimba.', '/artikel/butet-manurung-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Sokola Institute (Sekolah Literasi Kontekstual Adat)', 'Pendidikan Emansipatoris & Hak Masyarakat Adat', 'Lembaga pendidikan alternatif nirlaba yang menyediakan akses literasi baca-tulis-hitung kontekstual bagi suku-suku pedalaman nusantara.', 'Bebas Biaya / Donasi Swadaya', 'Dukung Inisiatif', 'https://sokola.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Sokola Rimba (Pengalaman Belajar Bersama Orang Rimba)', 'Karya Literatur Antropologi & Pendidikan', 'Buku catatan etnografis mendalam tentang dinamika perjumpaan budaya, kearifan rimba, dan perjuangan hak tanah Orang Rimba.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

COMMIT;
