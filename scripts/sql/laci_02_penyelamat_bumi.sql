-- SQL Batch for laci_02_penyelamat_bumi
BEGIN;

-- Figure: Farwiza Farhan (farwiza-farhan)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'farwiza-farhan' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Farwiza Farhan',
      title = 'Ketua Yayasan HAkA (Hutan, Alam dan Lingkungan Aceh) & Whitley Gold Awardee',
      category = 'Penyelamat Bumi',
      quote = 'Hutan Leuser bukan sekadar bentang alam tropis yang eksotis; ia adalah benteng terakhir tempat 4 spesies kunci bumi hidup berdampingan dan penyangga hidup jutaan warga Aceh dari kepunahan.',
      bio_paragraphs = ARRAY['Di saat bentang hutan tropis Sumatera terus tergerus oleh ekspansi perkebunan monokultur sawit, tambang, dan proyek jalan ilegal, Farwiza Farhan memilih berdiri di garis depan pertahanan Ekosistem Leuser. Alumnus konservasi lingkungan dari Oxford Brookes University ini menolak menjadi penonton kehancuran rimba kelahirannya di Aceh.', 'Melalui Yayasan HAkA yang ia dirikan, Farwiza menggabungkan pendekatan litigasi tata ruang hukum yang berani melawan izin-izin industri perusak dengan aksi nyata di lapangan: melatih dan mendampingi ranger perempuan gampong (Mpu Uteun) untuk berpatroli menembus lebatnya hutan, memutus jerat pemburu satwa, dan memulihkan kawasan kritis. Pengakuan internasional—seperti Whitley Gold Award dan masuk daftar TIME100 Next—ia jadikan pengeras suara perlawanan warga lokal di panggung global.', 'Bagi generasi muda, kepemimpinan Farwiza membuktikan bahwa penyelamatan bumi bukan soal romantisme retorika, melainkan keberanian bertarung di ruang sidang dan ketabahan merawat rimba bersama masyarakat adat.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('farwiza-farhan', 'Farwiza Farhan', 'Ketua Yayasan HAkA (Hutan, Alam dan Lingkungan Aceh) & Whitley Gold Awardee', 'Penyelamat Bumi', 'Hutan Leuser bukan sekadar bentang alam tropis yang eksotis; ia adalah benteng terakhir tempat 4 spesies kunci bumi hidup berdampingan dan penyangga hidup jutaan warga Aceh dari kepunahan.', ARRAY['Di saat bentang hutan tropis Sumatera terus tergerus oleh ekspansi perkebunan monokultur sawit, tambang, dan proyek jalan ilegal, Farwiza Farhan memilih berdiri di garis depan pertahanan Ekosistem Leuser. Alumnus konservasi lingkungan dari Oxford Brookes University ini menolak menjadi penonton kehancuran rimba kelahirannya di Aceh.', 'Melalui Yayasan HAkA yang ia dirikan, Farwiza menggabungkan pendekatan litigasi tata ruang hukum yang berani melawan izin-izin industri perusak dengan aksi nyata di lapangan: melatih dan mendampingi ranger perempuan gampong (Mpu Uteun) untuk berpatroli menembus lebatnya hutan, memutus jerat pemburu satwa, dan memulihkan kawasan kritis. Pengakuan internasional—seperti Whitley Gold Award dan masuk daftar TIME100 Next—ia jadikan pengeras suara perlawanan warga lokal di panggung global.', 'Bagi generasi muda, kepemimpinan Farwiza membuktikan bahwa penyelamatan bumi bukan soal romantisme retorika, melainkan keberanian bertarung di ruang sidang dan ketabahan merawat rimba bersama masyarakat adat.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2012 — 2013', 'PENDIRIAN YAYASAN HAkA', 'Mendirikan Yayasan Hutan, Alam dan Lingkungan Aceh (HAkA) untuk fokus menjaga dan merehabilitasi Ekosistem Leuser seluas 2,6 juta hektare.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 — 2022', 'KEMENANGAN LITIGASI TATA RUANG & WHITLEY GOLD AWARD', 'Memenangkan gugatan hukum terhadap izin pembakaran rawa gambut Tripa dan dianugerahi Whitley Gold Award 2022 dari Kerajaan Inggris atas dedikasi konservasi Leuser.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 — 2026', 'PENGUATAN RANGER PEREMPUAN GAMPONG (MPU UTEUN)', 'Mengorganisir puluhan kelompok patroli hutan perempuan adat di Aceh, memulihkan ratusan hektare koridor jelajah gajah dan badak sumatera.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Yayasan HAkA (Hutan, Alam dan Lingkungan Aceh)', 'Konservasi Hutan Hujan & Advokasi Kebijakan', 'Organisasi nirlaba penjaga Ekosistem Leuser yang mengintegrasikan sains data pemetaan satelit, litigasi hukum tata ruang, dan pemberdayaan komunitas.', 'https://haka.or.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Patroli Ranger Perempuan Leuser (Mpu Uteun)', 'Pemberdayaan Perempuan Adat & Satwa Liar', 'Kelompok perempuan penjaga hutan pertama di Aceh yang secara mandiri memetakan ancaman perambahan dan melindungi sumber air desa.', 'https://haka.or.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kampanye Global Perlindungan Suaka Badak Sumatera', 'Diplomasi Konservasi Internasional', 'Gerakan penyelamatan habitat satwa langka yang menggalang dukungan jutaan warga dunia untuk menolak deforestasi di Kawasan Ekosistem Leuser.', 'https://leuserwatch.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Benteng Terakhir Leuser: Mengapa Hutan Tropis Aceh Adalah Penentu Masa Depan Iklim Bumi', 'KONSERVASI RIMBA', '8 Menit Membaca', 'Kisah dari garis depan pertahanan hutan hujan terakhir tempat badak, gajah, orangutan, dan harimau sumatera hidup bersama.', 'Ketika pohon-pohon purba ditebang dan rawa gambut dibakar, bukan hanya rumah bagi satwa terancam punah yang hancur, melainkan sistem penopang air bagi jutaan rakyat di pesisir Aceh. Menjaga Leuser bukanlah opsi, melainkan harga mati bagi keselamatan kita semua.', '/artikel/farwiza-farhan-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mpu Uteun: Keberanian Perempuan Gampong Menjaga Rimba dari Ancaman Pembalak Liar', 'KEADILAN GENDER', '7 Menit Membaca', 'Bagaimana ibu-ibu desa di pedalaman Aceh mengambil peran kepemimpinan menjaga sumber air dan masa depan anak cucu.', 'Di tengah dominasi patriarki, para perempuan desa membuktikan bahwa cinta mereka pada tanah air dan air minum anak-anak mereka melampaui rasa takut terhadap ancaman pembalak liar.', '/artikel/farwiza-farhan-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Yayasan HAkA (Hutan, Alam dan Lingkungan Aceh)', 'Konservasi Hutan Hujan & Advokasi Kebijakan', 'Organisasi nirlaba penjaga Ekosistem Leuser yang mengintegrasikan sains data pemetaan satelit, litigasi hukum tata ruang, dan pemberdayaan komunitas.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://haka.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Patroli Ranger Perempuan Leuser (Mpu Uteun)', 'Pemberdayaan Perempuan Adat & Satwa Liar', 'Kelompok perempuan penjaga hutan pertama di Aceh yang secara mandiri memetakan ancaman perambahan dan melindungi sumber air desa.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://haka.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: M. Bijaksana Junerosano (m-bijaksana-junerosano)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'm-bijaksana-junerosano' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'M. Bijaksana Junerosano',
      title = 'Pendiri Waste4Change & Greeneration Indonesia (Pelopor Ekonomi Sirkular)',
      category = 'Penyelamat Bumi',
      quote = 'Sampah adalah cermin dari peradaban dan etika sebuah bangsa; ekonomi sirkular adalah satu-satunya jalan rasional agar peradaban kita tidak tenggelam dalam limbah sendiri.',
      bio_paragraphs = ARRAY['Sejak masih menjadi mahasiswa Teknik Lingkungan di ITB, Mohamad Bijaksana Junerosano (akrab disapa Sano) sudah menaruh kegelisahan mendalam atas krisis sampah di kota-kota besar Indonesia yang hanya berakhir di Tempat Pemrosesan Akhir (TPA) tanpa daur ulang bertanggung jawab. Tragedi longsor sampah TPA Leuwigajah 2005 menjadi titik balik hidupnya untuk mengubah sistem persampahan secara radikal.', 'Sano mendirikan Greeneration Foundation dan Waste4Change—sebuah perusahaan penyedia solusi pengelolaan sampah terpadu dari hulu ke hilir berbasis prinsip Zero Waste to Landfill. Ia membuktikan bahwa pengelolaan sampah bukan sekadar urusan memungut kotoran, melainkan industri rekayasa logistik, teknologi audit limbah, dan perubahan perilaku konsumsi masyarakat.', 'Bagi generasi muda yang mendambakan karir berdampak hijau (green jobs), Sano adalah pionir wirausaha sirkular: membuktikan bahwa idealisme menyelamatkan bumi dapat dibangun menjadi model bisnis berkelanjutan yang mempekerjakan ribuan pahlawan kebersihan secara bermartabat.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('m-bijaksana-junerosano', 'M. Bijaksana Junerosano', 'Pendiri Waste4Change & Greeneration Indonesia (Pelopor Ekonomi Sirkular)', 'Penyelamat Bumi', 'Sampah adalah cermin dari peradaban dan etika sebuah bangsa; ekonomi sirkular adalah satu-satunya jalan rasional agar peradaban kita tidak tenggelam dalam limbah sendiri.', ARRAY['Sejak masih menjadi mahasiswa Teknik Lingkungan di ITB, Mohamad Bijaksana Junerosano (akrab disapa Sano) sudah menaruh kegelisahan mendalam atas krisis sampah di kota-kota besar Indonesia yang hanya berakhir di Tempat Pemrosesan Akhir (TPA) tanpa daur ulang bertanggung jawab. Tragedi longsor sampah TPA Leuwigajah 2005 menjadi titik balik hidupnya untuk mengubah sistem persampahan secara radikal.', 'Sano mendirikan Greeneration Foundation dan Waste4Change—sebuah perusahaan penyedia solusi pengelolaan sampah terpadu dari hulu ke hilir berbasis prinsip Zero Waste to Landfill. Ia membuktikan bahwa pengelolaan sampah bukan sekadar urusan memungut kotoran, melainkan industri rekayasa logistik, teknologi audit limbah, dan perubahan perilaku konsumsi masyarakat.', 'Bagi generasi muda yang mendambakan karir berdampak hijau (green jobs), Sano adalah pionir wirausaha sirkular: membuktikan bahwa idealisme menyelamatkan bumi dapat dibangun menjadi model bisnis berkelanjutan yang mempekerjakan ribuan pahlawan kebersihan secara bermartabat.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2008', 'TITIK BALIK TRAGEDI LEUWIGAJAH & GREENERATION', 'Menyaksikan tragedi longsor sampah yang menelan ratusan korban jiwa, menginisiasi gerakan kantong belanja ramah lingkungan BaGoes dan mendirikan Greeneration Indonesia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2020', 'PENDIRIAN WASTE4CHANGE & EKONOMI SIRKULAR', 'Membangun Waste4Change sebagai ekosistem B2B pengelolaan sampah terpilah industri, mengaudit dan mengolah puluhan ribu ton sampah agar tidak berakhir di laut.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'EKSPANSI PABRIK DAUR ULANG & ADVOKASI EPR', 'Mengoperasikan fasilitas daur ulang material plastik modern dan mendorong implementasi regulasi Extended Producer Responsibility (EPR) bagi produsen korporasi.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Waste4Change (Sistem Pengelolaan Sampah Holistik)', 'Inovasi Manajemen Limbah & Daur Ulang', 'Platform pengelolaan sampah berbasis teknologi yang melayani ratusan kawasan komersial, perumahan, dan industri dengan standar pemilahan ketat.', 'https://waste4change.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Greeneration Foundation', 'Yayasan Edukasi Perilaku Hijau', 'Organisasi nirlaba penggerak kampanye diet kantong plastik dan edukasi gaya hidup minim sampah di seluruh Indonesia.', 'https://greeneration.org', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Riset Sirkularitas Material & Audit Sampah Perkotaan', 'Sains Lingkungan & Kebijakan Sirkular', 'Layanan riset forensik komposisi sampah korporasi untuk merancang kemasan ramah daur ulang dan rantai pasok tertutup.', 'https://waste4change.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menutup Keran TPA: Mengapa Pemilahan dari Sumber Adalah Kunci Selamat dari Bencana Sampah', 'EKONOMI SIRKULAR', '7 Menit Membaca', 'Membedah kegagalan sistem kumpul-angkut-buang dan bagaimana rantai pasok daur ulang bisa menghidupkan ekonomi rakyat.', 'Selama sampah organik dan plastik masih dicampur dalam satu kantong di rumah kita, tidak ada teknologi secanggih apa pun yang mampu menyelamatkan TPA dari kepunahan ruang. Perubahan harus dimulai dari dapur warga.', '/artikel/m-bijaksana-junerosano-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Extended Producer Responsibility: Menuntut Tanggung Jawab Produsen atas Gunungan Sampah Saset', 'KEBIJAKAN EKOLOGI', '8 Menit Membaca', 'Mengapa industri manufaktur harus bertanggung jawab menarik kembali limbah kemasan yang meracuni sungai dan laut.', 'Beban pengelolaan sampah plastik tidak boleh hanya ditimpakan kepada pemulung dan anggaran daerah; korporasi yang memetik laba dari produk kemasan wajib mendanai infrastruktur pengumpulan sirkular.', '/artikel/m-bijaksana-junerosano-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Waste4Change (Sistem Pengelolaan Sampah Holistik)', 'Inovasi Manajemen Limbah & Daur Ulang', 'Platform pengelolaan sampah berbasis teknologi yang melayani ratusan kawasan komersial, perumahan, dan industri dengan standar pemilahan ketat.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://waste4change.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Greeneration Foundation', 'Yayasan Edukasi Perilaku Hijau', 'Organisasi nirlaba penggerak kampanye diet kantong plastik dan edukasi gaya hidup minim sampah di seluruh Indonesia.', 'Rp 199.000 — Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://greeneration.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Mbah Sadiman (mbah-sadiman)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'mbah-sadiman' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Mbah Sadiman',
      title = 'Pahlawan Reboisasi Mandiri Lereng Gunung Lawu & Bukit Gendol Wonogiri',
      category = 'Penyelamat Bumi',
      quote = 'Dulu saya dianggap gila karena menukar bibit cengkih berharga dengan bibit beringin yang tak berbuah. Tapi saya tahu, beringin menyimpan air untuk anak cucu, bukan cengkih yang hanya menghasilkan uang sesaat.',
      bio_paragraphs = ARRAY['Di lereng Bukit Gendol, Desa Geneng, Bulukerto, Wonogiri—kawasan yang dulunya tandus, kering kerontang, dan langganan bencana kekeringan parah setiap musim kemarau—seorang pria bersahaja bernama Mbah Sadiman melakukan aksi tunggal yang mencengangkan akal sehat. Selama lebih dari 28 tahun sejak 1996, ia mendaki bukit terjal setiap hari untuk menanam ratusan ribu pohon beringin secara swadaya.', 'Di masa-masa awal, warga desa mencemoohnya dan menjulukinya ''orang gila'' karena Mbah Sadiman rela menukar bibit cengkih miliknya sendiri dengan bibit pohon beringin dan ipik yang tidak bernilai komersial di mata tengkulak. Namun Mbah Sadiman paham hakikat ekologi: akar beringin yang mencengkeram tanah adalah tandon penyimpan air terbaik di muka bumi.', 'Kini, berkat ketabahan tunggalnya tanpa pernah meminta gaji dari pemerintah, mata air di Bukit Gendol kembali memancar deras. Air bersih mengalir melimpah ke ribuan rumah warga, mengairi ratusan hektare sawah, dan membebaskan desanya dari jeratan kekeringan abadi. Mbah Sadiman adalah lambang ketulusan ekologis tertinggi Nusantara.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('mbah-sadiman', 'Mbah Sadiman', 'Pahlawan Reboisasi Mandiri Lereng Gunung Lawu & Bukit Gendol Wonogiri', 'Penyelamat Bumi', 'Dulu saya dianggap gila karena menukar bibit cengkih berharga dengan bibit beringin yang tak berbuah. Tapi saya tahu, beringin menyimpan air untuk anak cucu, bukan cengkih yang hanya menghasilkan uang sesaat.', ARRAY['Di lereng Bukit Gendol, Desa Geneng, Bulukerto, Wonogiri—kawasan yang dulunya tandus, kering kerontang, dan langganan bencana kekeringan parah setiap musim kemarau—seorang pria bersahaja bernama Mbah Sadiman melakukan aksi tunggal yang mencengangkan akal sehat. Selama lebih dari 28 tahun sejak 1996, ia mendaki bukit terjal setiap hari untuk menanam ratusan ribu pohon beringin secara swadaya.', 'Di masa-masa awal, warga desa mencemoohnya dan menjulukinya ''orang gila'' karena Mbah Sadiman rela menukar bibit cengkih miliknya sendiri dengan bibit pohon beringin dan ipik yang tidak bernilai komersial di mata tengkulak. Namun Mbah Sadiman paham hakikat ekologi: akar beringin yang mencengkeram tanah adalah tandon penyimpan air terbaik di muka bumi.', 'Kini, berkat ketabahan tunggalnya tanpa pernah meminta gaji dari pemerintah, mata air di Bukit Gendol kembali memancar deras. Air bersih mengalir melimpah ke ribuan rumah warga, mengairi ratusan hektare sawah, dan membebaskan desanya dari jeratan kekeringan abadi. Mbah Sadiman adalah lambang ketulusan ekologis tertinggi Nusantara.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1996', 'AWAL MULA PENANAMAN DI BUKIT GENDOL', 'Memulai menanam bibit beringin pertama di lereng bukit tandus yang ludes terbakar hutan, membeli bibit dari hasil barter cengkih miliknya.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2015', 'KEMBALINYA MATA AIR & PEMBALASAN CINTA ALAM', 'Akar ratusan ribu pohon beringin mulai mengunci air tanah; mata air Gendol dan Sendang Unon kembali mengalir jernih setelah puluhan tahun mati.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 — 2026', 'INSPIRASI REBOISASI DUNIA & KALPATARU', 'Menerima penghargaan Kalpataru dan menjadi rujukan konservasi berbasis ketabahan personal yang diliput media internasional (BBC, Reuters).', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Hutan Beringin Mandiri Bukit Gendol (250+ Hektare)', 'Reboisasi Swadaya & Konservasi Air', 'Hamparan hutan lindung buatan hasil jerih payah tunggal lebih dari 28 tahun menanam 200.000+ pohon beringin yang menghidupkan kembali mata air perdesaan.', 'https://sektorlokal.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sistem Irigasi Mata Air Sendang Unon', 'Infrastruktur Air Alami Berkelanjutan', 'Jaringan mata air yang mengairi sawah ribuan keluarga petani di Kecamatan Bulukerto tanpa pungutan biaya pompa.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Bank Benih & Bibit Beringin Dusun Dali', 'Konservasi Plasma Nutfah Tanaman Pengikat Air', 'Pusat pembibitan pohon beringin dan bodi mandiri yang dibagikan Mbah Sadiman kepada pemuda dan relawan pegiat lingkungan.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Orang Gila yang Menghidupkan Mata Air: Catatan Ketabahan Mbah Sadiman Menanam Beringin', 'KISAH KETABAHAN', '7 Menit Membaca', 'Pelajaran hidup tentang bagaimana ketulusan aksi di tanah lebih mulia dibanding seribu deklarasi seminar lingkungan hidup.', 'Mbah Sadiman tidak pernah mengenal istilah jargon climate change atau carbon offset. Ia hanya melihat tetangganya kehausan dan sawah desa pecah-pecah kekeringan. Dengan cangkul di pundak dan kantong berisi bibit beringin, ia membuktikan bahwa cinta seorang manusia pada buminya mampu membalikkan takdir kepunahan air.', '/artikel/mbah-sadiman-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Filsafat Beringin: Menanam untuk Generasi yang Belum Tentu Mengucapkan Terima Kasih', 'ETIKA LINGKUNGAN', '6 Menit Membaca', 'Refleksi mendalam tentang makna pengorbanan tanpa pamrih bagi masa depan peradaban anak cucu.', 'Pohon yang ditanam Mbah Sadiman baru berbuah mata air setelah puluhan tahun kemudian. Ini adalah teladan tertinggi tentang kepemimpinan ekologis: menanam pohon yang keteduhannya mungkin tidak akan pernah kita nikmati sendiri.', '/artikel/mbah-sadiman-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Hutan Beringin Mandiri Bukit Gendol (250+ Hektare)', 'Reboisasi Swadaya & Konservasi Air', 'Hamparan hutan lindung buatan hasil jerih payah tunggal lebih dari 28 tahun menanam 200.000+ pohon beringin yang menghidupkan kembali mata air perdesaan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Sistem Irigasi Mata Air Sendang Unon', 'Infrastruktur Air Alami Berkelanjutan', 'Jaringan mata air yang mengairi sawah ribuan keluarga petani di Kecamatan Bulukerto tanpa pungutan biaya pompa.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Silverius Oscar Unggul (silverius-oscar-unggul)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'silverius-oscar-unggul' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Silverius Oscar Unggul',
      title = 'Presiden Perkumpulan Telapak & Pelopor Community Logging Lestari (FSC)',
      category = 'Penyelamat Bumi',
      quote = 'Menyelamatkan hutan tidak bisa dilakukan dengan memusuhi masyarakat di sekitarnya; jadikan warga pemilik sah dari industri kayu lestari, maka mereka sendiri yang akan menjadi benteng pertahanan rimba.',
      bio_paragraphs = ARRAY['Di era 1990-an saat pembalakan liar (illegal logging) merajalela di Sulawesi Tenggara dan Kalimantan didukung oleh oknum bersenjata dan sindikat kayu transnasional, Silverius Oscar Unggul (akrab disapa Onte) bertaruh nyawa. Bersama Perkumpulan Telapak dan EIA, ia menyusup ke dalam hutan merekam aksi kejahatan kehutanan dan membawanya ke forum internasional.', 'Namun Onte menyadari satu kenyataan pahit di lapangan: warga lokal ikut menebang pohon karena mereka lapar dan tidak punya pilihan ekonomi. Maka ia mengubah paradigma perlawanan dengan mendirikan Koperasi Kehutanan Koperasi Wana Lestari Menawa (KHJM) di Konawe Selatan—koperasi masyarakat pertama di dunia yang berhasil meraih sertifikasi kelestarian hutan internasional (FSC).', 'Onte membuktikan bahwa hutan adat bisa dikelola secara lestari (community logging) dengan nilai ekspor tinggi tanpa harus membabat habis pohon. Model ini dinobatkan sebagai salah satu solusi kehutanan terbaik dunia oleh Skoll Foundation dan Schwab Foundation.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('silverius-oscar-unggul', 'Silverius Oscar Unggul', 'Presiden Perkumpulan Telapak & Pelopor Community Logging Lestari (FSC)', 'Penyelamat Bumi', 'Menyelamatkan hutan tidak bisa dilakukan dengan memusuhi masyarakat di sekitarnya; jadikan warga pemilik sah dari industri kayu lestari, maka mereka sendiri yang akan menjadi benteng pertahanan rimba.', ARRAY['Di era 1990-an saat pembalakan liar (illegal logging) merajalela di Sulawesi Tenggara dan Kalimantan didukung oleh oknum bersenjata dan sindikat kayu transnasional, Silverius Oscar Unggul (akrab disapa Onte) bertaruh nyawa. Bersama Perkumpulan Telapak dan EIA, ia menyusup ke dalam hutan merekam aksi kejahatan kehutanan dan membawanya ke forum internasional.', 'Namun Onte menyadari satu kenyataan pahit di lapangan: warga lokal ikut menebang pohon karena mereka lapar dan tidak punya pilihan ekonomi. Maka ia mengubah paradigma perlawanan dengan mendirikan Koperasi Kehutanan Koperasi Wana Lestari Menawa (KHJM) di Konawe Selatan—koperasi masyarakat pertama di dunia yang berhasil meraih sertifikasi kelestarian hutan internasional (FSC).', 'Onte membuktikan bahwa hutan adat bisa dikelola secara lestari (community logging) dengan nilai ekspor tinggi tanpa harus membabat habis pohon. Model ini dinobatkan sebagai salah satu solusi kehutanan terbaik dunia oleh Skoll Foundation dan Schwab Foundation.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1999 — 2002', 'INVESTIGASI KEJAHATAN KAYU & PENYELUNDUPAN', 'Menyusup ke hutan Tanjung Puting dan Papua membongkar penyelundupan kayu ramin liar, mempertaruhkan keselamatan diri di hadapan sindikat bersenjata.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2003 — 2008', 'PIONIR KOPERASI KEHUTANAN BERSERTIFIKAT FSC', 'Membangun koperasi petani kayu jati rakyat di Konawe Selatan hingga meraih sertifikasi Forest Stewardship Council (FSC) pertama di Asia Tenggara.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 — 2026', 'SKOLL SOCIAL ENTREPRENEUR & KEDAULATAN KADIN LOKAL', 'Menerima Skoll Award for Social Entrepreneurship dan memperluas model perhutanan sosial berbasis kepemilikan saham koperasi warga di berbagai pulau.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Perkumpulan Telapak (Gerakan Kedaulatan Sumber Daya Alam)', 'Advokasi Kehutanan Sosial & Media Investigasi', 'Organisasi masyarakat sipil yang mempelopori kampanye anti-pembalakan liar dan perhutanan sosial berbasis masyarakat adat.', 'https://telapak.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Koperasi Hutan Jaya Mandiri (KHJM Konawe Selatan)', 'Koperasi Industri Kayu Lestari Bersertifikat FSC', 'Badan usaha milik ribuan petani lokal yang mengekspor kayu bersertifikat ramah lingkungan ke pasar Eropa dan Amerika Serikat.', 'https://telapak.org', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Model Bisnis Kehutanan Berbasis Saham Komunitas', 'Wirausaha Sosial & Ekonomi Kerakyatan', 'Kerangka integrasi antara pelestarian tutupan kanopi hutan dengan pembagian keuntungan adil bagi warga desa penyangga hutan.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Pemburu Kayu Ilegal Menjadi Pemilik Saham Hutan Lestari: Kisah Transformatif Konawe Selatan', 'KEHUTANAN SOSIAL', '8 Menit Membaca', 'Bagaimana mengubah insentif ekonomi mampu menyelamatkan jutaan hektare tutupan hutan dari kehancuran.', 'Ketika warga diberi kepemilikan legal atas pohon yang mereka rawat, mereka tidak lagi butuh uang suap dari pembalak liar. Menjaga pohon tetap tegak berdiri justru memberikan kepastian hidup dan warisan masa depan bagi keluarga mereka.', '/artikel/silverius-oscar-unggul-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Investigasi di Bawah Todongan Senjata: Mengingat Kembali Perang Melawan Sindikat Kayu Ramin', 'JURNALISME INVESTIGASI', '7 Menit Membaca', 'Catatan bahaya di garis depan investigasi penyelundupan kayu mentah nusantara ke pelabuhan internasional.', 'Keberanian mendokumentasikan kejahatan kehutanan adalah awal dari perubahan regulasi. Tanpa data rekaman visual di dalam rimba, dunia internasional akan terus membeli kayu hasil rampasan dari tanah adat Indonesia.', '/artikel/silverius-oscar-unggul-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Perkumpulan Telapak (Gerakan Kedaulatan Sumber Daya Alam)', 'Advokasi Kehutanan Sosial & Media Investigasi', 'Organisasi masyarakat sipil yang mempelopori kampanye anti-pembalakan liar dan perhutanan sosial berbasis masyarakat adat.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://telapak.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Koperasi Hutan Jaya Mandiri (KHJM Konawe Selatan)', 'Koperasi Industri Kayu Lestari Bersertifikat FSC', 'Badan usaha milik ribuan petani lokal yang mengekspor kayu bersertifikat ramah lingkungan ke pasar Eropa dan Amerika Serikat.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://telapak.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Prigi Arisandi (prigi-arisandi)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'prigi-arisandi' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Prigi Arisandi',
      title = 'Pendiri ECOTON (Ecological Observation and Wetlands Conservation) & Goldman Prize Winner',
      category = 'Penyelamat Bumi',
      quote = 'Sungai bukanlah tempat pembuangan sampah atau saluran limbah beracun industri; sungai adalah urat nadi peradaban dan sumber air minum jutaan anak cucu kita.',
      bio_paragraphs = ARRAY['Mengawali kepedulian dari kondisi Kali Surabaya yang hitam pekat berbusa dan kerap mengalami peristiwa kematian ikan massal akibat gelontoran limbah pabrik kertas dan kimia, Prigi Arisandi mendedikasikan hidupnya sebagai pendekar penjaga ekosistem lahan basah. Alumnus Biologi Universitas Airlangga ini mendirikan ECOTON pada tahun 2000.', 'Prigi memadukan penelitian saintifik presisi dengan advokasi sains warga (citizen science) dan gugatan hukum perbuatan melawan hukum oleh penguasa. Melalui laboratorium independen ECOTON, ia melatih anak-anak sekolah dan warga bantaran sungai menjadi detektif pencemaran air, mendeteksi bahaya mikroplastik dalam rantai makanan ikan, serta memenangkan gugatan hukum terhadap kelalaian gubernur dalam menjaga kualitas air Kali Surabaya.', 'Atas keberaniannya melawan pencemaran korporasi dan membongkar perdagangan impor sampah plastik transnasional yang mencemari desa-desa di Jawa Timur, Prigi dianugerahi Goldman Environmental Prize 2011—penghargaan tertinggi setara Nobel di bidang perlindungan lingkungan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('prigi-arisandi', 'Prigi Arisandi', 'Pendiri ECOTON (Ecological Observation and Wetlands Conservation) & Goldman Prize Winner', 'Penyelamat Bumi', 'Sungai bukanlah tempat pembuangan sampah atau saluran limbah beracun industri; sungai adalah urat nadi peradaban dan sumber air minum jutaan anak cucu kita.', ARRAY['Mengawali kepedulian dari kondisi Kali Surabaya yang hitam pekat berbusa dan kerap mengalami peristiwa kematian ikan massal akibat gelontoran limbah pabrik kertas dan kimia, Prigi Arisandi mendedikasikan hidupnya sebagai pendekar penjaga ekosistem lahan basah. Alumnus Biologi Universitas Airlangga ini mendirikan ECOTON pada tahun 2000.', 'Prigi memadukan penelitian saintifik presisi dengan advokasi sains warga (citizen science) dan gugatan hukum perbuatan melawan hukum oleh penguasa. Melalui laboratorium independen ECOTON, ia melatih anak-anak sekolah dan warga bantaran sungai menjadi detektif pencemaran air, mendeteksi bahaya mikroplastik dalam rantai makanan ikan, serta memenangkan gugatan hukum terhadap kelalaian gubernur dalam menjaga kualitas air Kali Surabaya.', 'Atas keberaniannya melawan pencemaran korporasi dan membongkar perdagangan impor sampah plastik transnasional yang mencemari desa-desa di Jawa Timur, Prigi dianugerahi Goldman Environmental Prize 2011—penghargaan tertinggi setara Nobel di bidang perlindungan lingkungan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2000', 'PENDIRIAN ECOTON & PENELITIAN KALI SURABAYA', 'Mendirikan Ecological Observation and Wetlands Conservation (ECOTON) untuk mengawal keselamatan Daerah Aliran Sungai (DAS) Brantas.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2011', 'GOLDMAN ENVIRONMENTAL PRIZE & GUGATAN HUKUM', 'Memenangkan penghargaan bergengsi Goldman Environmental Prize di San Francisco atas keberhasilan memobilisasi warga membersihkan Kali Surabaya.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2026', 'EKSPEDISI SUNGAI NUSANTARA & INVESTIGASI MIKROPLASTIK', 'Melakukan ekspedisi menguji kualitas 68 sungai strategis nasional, mengadvokasi pelarangan saset sekali pakai dan impor sampah plastik negara maju.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'ECOTON (Ecological Observation and Wetlands Conservation)', 'Lembaga Riset Sains Lahan Basah & Litigasi Lingkungan', 'Organisasi penjaga sungai terdepan yang memproduksi data kualitas air, mikroplastik, dan litigasi pencemaran limbah B3 industri.', 'https://ecoton.or.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Ekspedisi Sungai Nusantara (ESN)', 'Sains Warga & Pemetaan Kesehatan Air Nasional', 'Riset keliling sungai di seluruh kepulauan Indonesia menguji kadar kontaminasi partikel mikroplastik pada air minum dan ikan konsumsi.', 'https://ecoton.or.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Laboratorium & Museum Plastik Terapung', 'Pusat Edukasi Sains & Literasi Ekologi', 'Fasilitas pameran edukatif yang memamerkan ribuan sampah kemasan bermerek yang mencemari sungai guna menuntut tanggung jawab korporasi.', 'https://ecoton.or.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Partikel Mikroplastik di Meja Makan: Mengapa Darurat Racun Plastik Mengancam Kesehatan Generasi', 'SAINS & KESEHATAN', '8 Menit Membaca', 'Hasil riset laboratorium ECOTON membongkar keberadaan partikel mikroplastik dalam darah dan organ tubuh manusia.', 'Plastik sekali pakai yang dibuang sembarangan tidak pernah benar-benar hilang; ia terfragmentasi menjadi partikel mikroskopis yang dimakan ikan dan akhirnya masuk ke dalam tubuh kita sendiri. Menolak plastik sekali pakai adalah soal keselamatan biologis umat manusia.', '/artikel/prigi-arisandi-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menolak Jadi Tempat Sampah Negara Maju: Melawan Impor Ilegal Limbah Kertas Bercampur Plastik', 'KEDAULATAN EKOLOGI', '7 Menit Membaca', 'Investigasi di desa-desa Jawa Timur yang dijadikan pembuangan sisa konsumsi negara-negara barat.', 'Kedaulatan bangsa ini diuji ketika kontainer-kontainer berisi sampah plastik kotor dari Amerika dan Eropa diselundupkan ke pelabuhan kita dengan kedok bahan baku industri. Indonesia bukan tempat pembuangan sampah dunia.', '/artikel/prigi-arisandi-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'ECOTON (Ecological Observation and Wetlands Conservation)', 'Lembaga Riset Sains Lahan Basah & Litigasi Lingkungan', 'Organisasi penjaga sungai terdepan yang memproduksi data kualitas air, mikroplastik, dan litigasi pencemaran limbah B3 industri.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://ecoton.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Ekspedisi Sungai Nusantara (ESN)', 'Sains Warga & Pemetaan Kesehatan Air Nasional', 'Riset keliling sungai di seluruh kepulauan Indonesia menguji kadar kontaminasi partikel mikroplastik pada air minum dan ikan konsumsi.', 'Donasi Konservasi (Mulai Rp 50.000)', 'Dukung Inisiatif', 'https://ecoton.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Swietenia Puspa Lestari (swietenia-puspa-lestari)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'swietenia-puspa-lestari' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Swietenia Puspa Lestari',
      title = 'Pendiri Divers Clean Action (DCA) & Youth Ocean Conservation Leader',
      category = 'Penyelamat Bumi',
      quote = 'Lautan Nusantara yang begitu megah tidak boleh menjadi tempat sampah raksasa peradaban darat; anak muda harus menyelam dan memimpin gerakan pembersihan dari garis pantai terdepan.',
      bio_paragraphs = ARRAY['Tumbuh besar di Kepulauan Seribu dan telah menjadi penyelam berlisensi sejak usia belia, Swietenia Puspa Lestari (akrab dipanggil Tenia) menyaksikan langsung bagaimana terumbu karang indah perlahan tertutup jaring plastik, sedotan, dan sampah saset yang hanyut dari muara sungai ibu kota. Alumnus Teknik Lingkungan ITB ini menolak berpangku tangan.', 'Pada 2015, Tenia mendirikan Divers Clean Action (DCA)—sebuah yayasan pemuda yang menggalang komunitas penyelam muda untuk membersihkan sampah bawah laut, meneliti dinamika serpihan sampah pesisir, dan mengaudit merek produsen pencemar pantai kepulauan kecil. Gerakannya berhasil memperluas koalisi ke ribuan relawan muda di berbagai wilayah pesisir nusantara.', 'Masuk dalam daftar BBC 100 Women dan Forbes 30 Under 30 Asia, Tenia adalah simbol kepemimpinan bahari generasi muda: membuktikan bahwa hobi menyelam dapat ditransformasikan menjadi aksi sains konservasi dan advokasi pelarangan plastik sekali pakai di tingkat nasional.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('swietenia-puspa-lestari', 'Swietenia Puspa Lestari', 'Pendiri Divers Clean Action (DCA) & Youth Ocean Conservation Leader', 'Penyelamat Bumi', 'Lautan Nusantara yang begitu megah tidak boleh menjadi tempat sampah raksasa peradaban darat; anak muda harus menyelam dan memimpin gerakan pembersihan dari garis pantai terdepan.', ARRAY['Tumbuh besar di Kepulauan Seribu dan telah menjadi penyelam berlisensi sejak usia belia, Swietenia Puspa Lestari (akrab dipanggil Tenia) menyaksikan langsung bagaimana terumbu karang indah perlahan tertutup jaring plastik, sedotan, dan sampah saset yang hanyut dari muara sungai ibu kota. Alumnus Teknik Lingkungan ITB ini menolak berpangku tangan.', 'Pada 2015, Tenia mendirikan Divers Clean Action (DCA)—sebuah yayasan pemuda yang menggalang komunitas penyelam muda untuk membersihkan sampah bawah laut, meneliti dinamika serpihan sampah pesisir, dan mengaudit merek produsen pencemar pantai kepulauan kecil. Gerakannya berhasil memperluas koalisi ke ribuan relawan muda di berbagai wilayah pesisir nusantara.', 'Masuk dalam daftar BBC 100 Women dan Forbes 30 Under 30 Asia, Tenia adalah simbol kepemimpinan bahari generasi muda: membuktikan bahwa hobi menyelam dapat ditransformasikan menjadi aksi sains konservasi dan advokasi pelarangan plastik sekali pakai di tingkat nasional.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015', 'PENDIRIAN DIVERS CLEAN ACTION (DCA)', 'Menginisiasi komunitas penyelam relawan pembersih sampah laut dan perintis riset limbah laut (marine debris) di Kepulauan Seribu.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2019', 'GERAKAN NO STRAW MOVEMENT & BBC 100 WOMEN', 'Memimpin kampanye penolakan sedotan plastik di ribuan gerai makanan nasional dan terpilih dalam daftar bergengsi BBC 100 Women 2019.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 — 2026', 'PENGEMBANGAN SISTEM RECYCLE DI PULAU KECIL', 'Membangun fasilitas pengumpulan dan daur ulang sampah terpadu di pulau-pulau terpencil yang selama ini tidak terjangkau truk sampah pemerintah.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Divers Clean Action (DCA Indonesia)', 'Yayasan Konservasi Laut & Riset Sampah Bahari', 'Organisasi pemuda maritim yang telah membersihkan ratusan ton sampah bawah laut dan melatih kader penjaga laut di pelosok kepulauan.', 'https://diverscleanaction.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Indonesia Youth Marine Debris Summit (IYMDS)', 'Konferensi Kepemimpinan Pesisir Generasi Muda', 'Ajang inkubasi tahunan yang melatih ratusan pemuda dari 34 provinsi untuk merancang program solusi sampah di daerah asalnya.', 'https://diverscleanaction.org', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Audit Sampah Pesisir & Kolaborasi Bersama Pulau Berdaya', 'Riset Brand Audit & Ekonomi Sirkular Pulau Kecil', 'Program audit merek produsen pencemar pesisir dan pemberdayaan perempuan pulau dalam mengolah sampah bernilai guna.', 'https://diverscleanaction.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menyelam di Bawah Kuburan Plastik: Mengapa Laut Kita Sedang Berteriak Meminta Pertolongan', 'KONSERVASI LAUT', '7 Menit Membaca', 'Kesaksian Tenia dari kedalaman laut tentang bagaimana sampah plastik merusak ekosistem terumbu karang dan penyu langka.', 'Di kedalaman 20 meter di bawah permukaan laut, keindahan karang tropis sering kali terkoyak oleh kantong plastik yang menyangkut dan membunuh biota laut. Kita tidak bisa terus berpura-pura bahwa apa yang kita buang di darat tidak akan berdampak pada lautan kita.', '/artikel/swietenia-puspa-lestari-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Pesisir Berdaulat: Mengapa Pulau-Pulau Kecil Harus Memiliki Sistem Pengelolaan Sampah Mandiri', 'EKOLOGI KEPULAUAN', '6 Menit Membaca', 'Tantangan logistik mengelola sampah di kepulauan terluar dan solusi pemberdayaan masyarakat lokal.', 'Warga pulau kecil tidak menghasilkan sampah kemasan modern, namun pantai mereka menjadi muara sampah kiriman dari kota-kota besar. Membangun fasilitas daur ulang lokal adalah bentuk keadilan lingkungan bagi masyarakat pesisir.', '/artikel/swietenia-puspa-lestari-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Divers Clean Action (DCA Indonesia)', 'Yayasan Konservasi Laut & Riset Sampah Bahari', 'Organisasi pemuda maritim yang telah membersihkan ratusan ton sampah bawah laut dan melatih kader penjaga laut di pelosok kepulauan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://diverscleanaction.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Indonesia Youth Marine Debris Summit (IYMDS)', 'Konferensi Kepemimpinan Pesisir Generasi Muda', 'Ajang inkubasi tahunan yang melatih ratusan pemuda dari 34 provinsi untuk merancang program solusi sampah di daerah asalnya.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://diverscleanaction.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: David Christian (david-christian)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'david-christian' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'David Christian',
      title = 'Co-founder Evoware & Rethink (Pelopor Material Kemasan Sirkular Rumput Laut)',
      category = 'Penyelamat Bumi',
      quote = 'Solusi terbaik dari masalah sampah plastik kemasan hilir sebenarnya sudah disediakan oleh alam nusantara di hulu: rumput laut yang dapat terurai alami dan aman dikonsumsi.',
      bio_paragraphs = ARRAY['Melihat gunungan sampah saset dan pembungkus makanan plastik yang mencemari sungai-sungai kota Jakarta sepulang menyelesaikan studi di Selandia Baru, David Christian merasa terpanggil untuk menciptakan alternatif material kemasan yang benar-benar ramah lingkungan dari akar sumber daya lokal Indonesia.', 'Pada 2015, David mendirikan Evoware—sebuah startup bioteknologi material sirkular yang mengembangkan kemasan alternatif sekali pakai berbahan dasar rumput laut (seaweed-based edible packaging). Kemasan ciptaannya tidak hanya dapat larut dalam air hangat dan terurai 100% menjadi pupuk alami dalam hitungan minggu, tetapi juga aman dikonsumsi manusia.', 'Melalui inovasi Evoware dan kampanye Rethink Plastic, David menghubungkan pemecahan darurat sampah hilir dengan peningkatan kesejahteraan ribuan keluarga petani rumput laut tradisional di pesisir Indonesia Timur, membuktikan keunggulan inovasi climate-tech anak bangsa di panggung dunia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('david-christian', 'David Christian', 'Co-founder Evoware & Rethink (Pelopor Material Kemasan Sirkular Rumput Laut)', 'Penyelamat Bumi', 'Solusi terbaik dari masalah sampah plastik kemasan hilir sebenarnya sudah disediakan oleh alam nusantara di hulu: rumput laut yang dapat terurai alami dan aman dikonsumsi.', ARRAY['Melihat gunungan sampah saset dan pembungkus makanan plastik yang mencemari sungai-sungai kota Jakarta sepulang menyelesaikan studi di Selandia Baru, David Christian merasa terpanggil untuk menciptakan alternatif material kemasan yang benar-benar ramah lingkungan dari akar sumber daya lokal Indonesia.', 'Pada 2015, David mendirikan Evoware—sebuah startup bioteknologi material sirkular yang mengembangkan kemasan alternatif sekali pakai berbahan dasar rumput laut (seaweed-based edible packaging). Kemasan ciptaannya tidak hanya dapat larut dalam air hangat dan terurai 100% menjadi pupuk alami dalam hitungan minggu, tetapi juga aman dikonsumsi manusia.', 'Melalui inovasi Evoware dan kampanye Rethink Plastic, David menghubungkan pemecahan darurat sampah hilir dengan peningkatan kesejahteraan ribuan keluarga petani rumput laut tradisional di pesisir Indonesia Timur, membuktikan keunggulan inovasi climate-tech anak bangsa di panggung dunia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 — 2017', 'PENDIRIAN EVOWARE & INOVASI KEMASAN RUMPUT LAUT', 'Mengembangkan prototipe bioplastik pertama dari rumput laut yang aman dimakan (edible) dan memenangkan berbagai penghargaan inovasi internasional.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018', 'KEMITRAAN GLOBAL & CIRCULAR DESIGN CHALLENGE', 'Meraih kemenangan di ajang Circular Design Challenge dari Ellen MacArthur Foundation di World Economic Forum Davos.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 — 2026', 'RETHINK PLASTIC & EKSPANSI HILIRISASI PESISIR', 'Memperluas lini produk sedotan ramah lingkungan dan kemasan saset industri, memberdayakan jaringan petani rumput laut di Makassar dan Nusa Tenggara.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Evoware Seaweed Packaging (Kemasan Dapat Dimakan)', 'Inovasi Deep-Tech Material Sirkular', 'Kemasan alternatif pembungkus bumbu mi instan, burger, dan kopi yang larut dalam air dan ramah lingkungan.', 'https://evoware.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Evoworld & Gerakan #RethinkPlastic', 'Platform Produk Ramah Lingkungan & Kampanye', 'Ekosistem penyedia sedotan beras, kemasan ramah lingkungan, dan edukasi pengurangan plastik sekali pakai untuk sektor perhotelan dan F&B.', 'https://rethink-plastic.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Rantai Pasok Bernilai Tambah Petani Rumput Laut', 'Pemberdayaan Ekonomi Pesisir', 'Sistem kemitraan pembelian bahan baku rumput laut langsung dari nelayan pesisir dengan harga beli yang adil di atas tengkulak.', 'https://evoware.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mengganti Plastik dengan Rumput Laut: Bagaimana Inovasi Material Lokal Bisa Menyelamatkan Bumi', 'INOVASI MATERIAL', '7 Menit Membaca', 'Perjalanan riset David Christian meracik formula kemasan saset ramah lingkungan dari kekayaan hayati pesisir nusantara.', 'Indonesia adalah salah satu produsen rumput laut terbesar di dunia, namun selama berpuluh-puluh tahun komoditas ini hanya diekspor mentah dengan nilai tambah rendah. Mengolahnya menjadi bioplastik ramah lingkungan membuktikan bahwa kita mampu memimpin revolusi material dunia.', '/artikel/david-christian-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membongkar Ilusi Greenwashing: Mengapa Biodegradable Belum Tentu Aman untuk Alam', 'SAINS SIRKULAR', '6 Menit Membaca', 'Panduan kritis membedakan kemasan yang benar-benar sirkular dengan plastik oxo-biodegradable yang justru menghasilkan mikroplastik berbahaya.', 'Banyak produk berlabel ramah lingkungan di pasaran ternyata hanya menambahkan aditif kimia yang membuat plastik pecah menjadi serpihan mikroplastik yang lebih beracun. Material sejati harus mampu kembali ke tanah tanpa meninggalkan racun bagi makhluk hidup.', '/artikel/david-christian-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Evoware Seaweed Packaging (Kemasan Dapat Dimakan)', 'Inovasi Deep-Tech Material Sirkular', 'Kemasan alternatif pembungkus bumbu mi instan, burger, dan kopi yang larut dalam air dan ramah lingkungan.', 'Rp 25.000 — Rp 120.000', 'Dukung Inisiatif', 'https://evoware.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Evoworld & Gerakan #RethinkPlastic', 'Platform Produk Ramah Lingkungan & Kampanye', 'Ekosistem penyedia sedotan beras, kemasan ramah lingkungan, dan edukasi pengurangan plastik sekali pakai untuk sektor perhotelan dan F&B.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://rethink-plastic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Mohammad Baedowy (mohammad-baedowy)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'mohammad-baedowy' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Mohammad Baedowy',
      title = 'Pendiri CV Majestic Buana & Inovator Mesin Daur Ulang Plastik Komunal',
      category = 'Penyelamat Bumi',
      quote = 'Jangan memandang pemulung dan sampah dengan rasa jijik; di balik limbah plastik yang tercecer ada putaran roda industri manufaktur dan rezeki ribuan keluarga akar rumput.',
      bio_paragraphs = ARRAY['Mengawali langkah dari nol setelah terkena pemutusan hubungan kerja (PHK) di era krisis moneter akhir 1990-an, Mohammad Baedowy tidak gengsi terjun langsung ke dunia pengumpulan sampah plastik di jalanan. Ia melihat potensi industri daur ulang riil yang selama ini dipandang sebelah mata oleh masyarakat kelas menengah.', 'Dengan keuletan luar biasa, Baedowy merancang dan memproduksi sendiri mesin pencacah dan pencuci plastik lokal yang berbiaya terjangkau. Melalui CV Majestic Buana Group, ia tidak hanya membangun pabrik pengolahan biji plastik berstandar ekspor, tetapi juga membina dan melatih ribuan pemulung, pelapak sampah, dan mantan narapidana di berbagai kota agar naik kelas menjadi pengusaha daur ulang mandiri.', 'Dianugerahi Kalpataru dan Kick Andy Heroes, Baedowy adalah teladan pejuang ekonomi sirkular berbasis akar rumput: membuktikan bahwa kemandirian daur ulang plastik nasional dibangun dari keringat para pemulung yang diberdayakan secara adil dan bermartabat.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('mohammad-baedowy', 'Mohammad Baedowy', 'Pendiri CV Majestic Buana & Inovator Mesin Daur Ulang Plastik Komunal', 'Penyelamat Bumi', 'Jangan memandang pemulung dan sampah dengan rasa jijik; di balik limbah plastik yang tercecer ada putaran roda industri manufaktur dan rezeki ribuan keluarga akar rumput.', ARRAY['Mengawali langkah dari nol setelah terkena pemutusan hubungan kerja (PHK) di era krisis moneter akhir 1990-an, Mohammad Baedowy tidak gengsi terjun langsung ke dunia pengumpulan sampah plastik di jalanan. Ia melihat potensi industri daur ulang riil yang selama ini dipandang sebelah mata oleh masyarakat kelas menengah.', 'Dengan keuletan luar biasa, Baedowy merancang dan memproduksi sendiri mesin pencacah dan pencuci plastik lokal yang berbiaya terjangkau. Melalui CV Majestic Buana Group, ia tidak hanya membangun pabrik pengolahan biji plastik berstandar ekspor, tetapi juga membina dan melatih ribuan pemulung, pelapak sampah, dan mantan narapidana di berbagai kota agar naik kelas menjadi pengusaha daur ulang mandiri.', 'Dianugerahi Kalpataru dan Kick Andy Heroes, Baedowy adalah teladan pejuang ekonomi sirkular berbasis akar rumput: membuktikan bahwa kemandirian daur ulang plastik nasional dibangun dari keringat para pemulung yang diberdayakan secara adil dan bermartabat.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2000 — 2005', 'DARI KORBAN PHK MENJADI PENGUSAHA DAUR ULANG', 'Memulai usaha pengumpulan botol plastik bekas di pinggir jalan dan merakit mesin pencacah plastik pertamanya secara otodidak di bengkel sederhana.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2006 — 2012', 'PEMBINAAN RIBUAN MITRA & PENGHARGAAN KALPATARU', 'Memperluas jaringan pabrik daur ulang ke belasan daerah, melatih ribuan pemulung, dan meraih penghargaan tertinggi Kalpataru dari Presiden RI.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 — 2026', 'MODERNISASI INDUSTRI BIJI PLASTIK & EKSPOR', 'Mengoperasikan fasilitas pengolahan botol PET dan HDPE berkualitas tinggi yang menyuplai bahan baku pabrik tekstil dan kemasan dalam/luar negeri.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'CV Majestic Buana Group (Pabrik Daur Ulang Plastik)', 'Manufaktur Sirkular & Pengolahan Biji Plastik', 'Sentra pengolahan sampah plastik skala industri yang mengolah ribuan ton limbah botol PET dan plastik keras setiap bulannya.', 'https://sektorlokal.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Rancang Bangun Mesin Pencacah Plastik Komunal Baedowy', 'Rekayasa Alat Tepat Guna UMKM', 'Inovasi mesin pencacah dan pencuci plastik berdaya tahan tinggi yang diadopsi oleh ratusan bank sampah dan koperasi daerah.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Pemberdayaan & Pelatihan Wirausaha Pemulung', 'Inkubasi Bisnis Sosial Akar Rumput', 'Pelatihan manajemen kas, standardisasi mutu sortir sampah, dan permodalan bergulir bagi komunitas pelapak sampah perkotaan.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Harta Karun di Balik Gunungan Sampah: Bagaimana Mengubah Limbah Plastik Menjadi Roda Industri Riil', 'EKONOMI SIRKULAR', '7 Menit Membaca', 'Catatan wirausaha Mohammad Baedowy tentang potensi rantai pasok daur ulang plastik bernilai triliunan rupiah.', 'Sampah plastik yang kita buang setiap hari sebenarnya adalah komoditas bernilai tinggi bila dipilah dengan benar. Memberdayakan pemulung dengan teknologi tepat guna adalah kunci membebaskan Indonesia dari ketergantungan bahan baku plastik impor.', '/artikel/mohammad-baedowy-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mengangkat Derajat Pejuang Kebersihan: Dari Pelapak Liar Menjadi Mitra Usaha Berbadan Hukum', 'KEADILAN SOSIAL', '6 Menit Membaca', 'Pentingnya memberikan akses permodalan dan perlindungan kesehatan bagi rantai pekerja informal persampahan.', 'Tanpa keringat para pemulung yang menyisir jalanan setiap subuh, sistem kebersihan kota-kota besar kita akan lumpuh total. Mereka adalah pahlawan lingkungan garis depan yang berhak diperlakukan secara terhormat.', '/artikel/mohammad-baedowy-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'CV Majestic Buana Group (Pabrik Daur Ulang Plastik)', 'Manufaktur Sirkular & Pengolahan Biji Plastik', 'Sentra pengolahan sampah plastik skala industri yang mengolah ribuan ton limbah botol PET dan plastik keras setiap bulannya.', 'Rp 18.000 — Rp 85.000 / kg', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Rancang Bangun Mesin Pencacah Plastik Komunal Baedowy', 'Rekayasa Alat Tepat Guna UMKM', 'Inovasi mesin pencacah dan pencuci plastik berdaya tahan tinggi yang diadopsi oleh ratusan bank sampah dan koperasi daerah.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: I Gede Robi Supriyanto (i-gede-robi-supriyanto)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'i-gede-robi-supriyanto' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'I Gede Robi Supriyanto',
      title = 'Vokalis Navicula, Petani Agroekologi & Aktivis Penyelamat Hutan',
      category = 'Penyelamat Bumi',
      quote = 'Bermusik cadas dengan lirik perlawanan dan mencangkul tanah di kebun organik adalah satu tarikan napas: merawat martabat tanah leluhur dari kerakusan perusak alam.',
      bio_paragraphs = ARRAY['Dikenal sebagai vokalis dan gitaris band grunge legendaris asal Bali, Navicula (Green Grunge Gentlemen), I Gede Robi Supriyanto adalah sosok seniman aktivis yang membuktikan bahwa advokasi lingkungan hidup tidak berhenti di atas panggung festival musik, melainkan berakar pada tanah tempat ia bertani.', 'Selama hampir tiga dekade, Robi menyuarakan isu darurat deforestasi kelapa sawit, krisis agraria, tata kelola sampah pesisir, dan perubahan iklim lewat lagu-lagu bertenaga tinggi seperti ''Mafia Hukum'', ''Busur Hujan'', dan ''Orangutan''. Tak sekadar menyanyi, Robi mempraktikkan langsung pertanian lestari agroekologi dan permakultur di kebun kopi dan organiknya di Bali.', 'Robi juga turun langsung memimpin ekspedisi investigasi Pulau Plastik—sebuah dokumenter kolaboratif yang membongkar ancaman mikroplastik di sungai dan rantai makanan nusantara. Bagi anak muda, Robi adalah ikon aktivisme tanah air yang keren, berakar budaya, dan konsisten melawan ketidakadilan ekologis.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('i-gede-robi-supriyanto', 'I Gede Robi Supriyanto', 'Vokalis Navicula, Petani Agroekologi & Aktivis Penyelamat Hutan', 'Penyelamat Bumi', 'Bermusik cadas dengan lirik perlawanan dan mencangkul tanah di kebun organik adalah satu tarikan napas: merawat martabat tanah leluhur dari kerakusan perusak alam.', ARRAY['Dikenal sebagai vokalis dan gitaris band grunge legendaris asal Bali, Navicula (Green Grunge Gentlemen), I Gede Robi Supriyanto adalah sosok seniman aktivis yang membuktikan bahwa advokasi lingkungan hidup tidak berhenti di atas panggung festival musik, melainkan berakar pada tanah tempat ia bertani.', 'Selama hampir tiga dekade, Robi menyuarakan isu darurat deforestasi kelapa sawit, krisis agraria, tata kelola sampah pesisir, dan perubahan iklim lewat lagu-lagu bertenaga tinggi seperti ''Mafia Hukum'', ''Busur Hujan'', dan ''Orangutan''. Tak sekadar menyanyi, Robi mempraktikkan langsung pertanian lestari agroekologi dan permakultur di kebun kopi dan organiknya di Bali.', 'Robi juga turun langsung memimpin ekspedisi investigasi Pulau Plastik—sebuah dokumenter kolaboratif yang membongkar ancaman mikroplastik di sungai dan rantai makanan nusantara. Bagi anak muda, Robi adalah ikon aktivisme tanah air yang keren, berakar budaya, dan konsisten melawan ketidakadilan ekologis.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1996 — 2012', 'KELAHIRAN NAVICULA & GREEN GRUNGE GENTLEMEN', 'Merintis Navicula di Denpasar, menjadikan musik grunge sebagai medium penyadar generasi muda atas perusakan hutan dan ketimpangan sosial.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 — 2019', 'TUR DUNIA RODEOS & PRAKTIK AGROEKOLOGI LESTARI', 'Memenangkan kompetisi musik global, tur panggung di AS dan Eropa membawa isu lingkungan Indonesia, serta mengembangkan kebun permakultur mandiri.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 — 2026', 'EKSPEDISI & FILM DOKUMENTER PULAU PLASTIK', 'Memimpin ekspedisi keliling Jawa dan Bali meneliti krisis sampah plastik, melahirkan film bioskop Pulau Plastik yang mengubah kebijakan pengurangan kantong kresek.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Diskografi Navicula (Album Perlawanan Ekologis)', 'Karya Musik Grunge & Lirik Kritis', 'Koleksi album musik independen berdaya dobrak sosial yang mengampanyekan penyelamatan hutan hujan dan keadilan hukum.', 'https://naviculamusic.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Film Dokumenter Bioskop: Pulau Plastik', 'Film Investigasi Sains Lingkungan', 'Dokumenter layar lebar yang mengungkap anatomi polusi plastik sekali pakai, impor limbah, dan kontaminasi mikroplastik pada tubuh manusia.', 'https://pulauplastik.org', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kebun Organik & Edukasi Permakultur Robi Navicula', 'Praktik Agroekologi & Kemandirian Pangan', 'Model pertanian regeneratif berbasis kearifan lokal Bali yang memadukan perlindungan tanah dengan kopi bernilai ekonomi lestari.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Grunge, Sawah, dan Perlawanan: Mengapa Peduli Bumi Itu Berkarakter dan Bernyawa', 'MUSIK & AKTIVISME', '7 Menit Membaca', 'Refleksi Robi Navicula tentang bagaimana seni musik dan tanah pertanian saling menguatkan dalam merawat nurani kemanusiaan.', 'Menjadi musisi bukan sekadar mengejar ketenaran di panggung gemerlap. Musik adalah medium untuk menyuarakan apa yang sedang menjerit di dalam tanah: hutan yang dibabat, air yang diracun, dan hak petani yang dirampas.', '/artikel/i-gede-robi-supriyanto-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Pulau Plastik: Menelusuri Jejak Racun yang Masuk ke Dalam Piring Nasi Kita', 'INVESTIGASI EKOLOGI', '8 Menit Membaca', 'Catatan perjalanan membongkar sampah saset di sungai Jawa dan ancaman mikroplastik bagi kesehatan anak bangsa.', 'Kita merasa aman saat membuang sampah plastik ke tempat sampah, tanpa menyadari sampah itu bermuara ke laut, dimakan ikan yang kita beli di pasar, dan akhirnya meracuni tubuh kita sendiri.', '/artikel/i-gede-robi-supriyanto-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Diskografi Navicula (Album Perlawanan Ekologis)', 'Karya Musik Grunge & Lirik Kritis', 'Koleksi album musik independen berdaya dobrak sosial yang mengampanyekan penyelamatan hutan hujan dan keadilan hukum.', 'Rp 350.000 — Rp 650.000', 'Dukung Inisiatif', 'https://naviculamusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Film Dokumenter Bioskop: Pulau Plastik', 'Film Investigasi Sains Lingkungan', 'Dokumenter layar lebar yang mengungkap anatomi polusi plastik sekali pakai, impor limbah, dan kontaminasi mikroplastik pada tubuh manusia.', 'Tiket Nonton / VOD Rp 45.000 — Rp 75.000', 'Dukung Inisiatif', 'https://pulauplastik.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Andrew Kalaweit (andrew-kalaweit)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'andrew-kalaweit' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Andrew Kalaweit',
      title = 'Aktivis Konservasi Satwa Liar, Pilot Paramotor Patroli Rimba Kalimantan & Edukator Hutan',
      category = 'Penyelamat Bumi',
      quote = 'Rimba Kalimantan adalah rumah bagi ribuan satwa langka yang tak bersuara; jika kita tidak berdiri menjaganya hari ini, anak cucu kita hanya akan mengenal hutan hujan lewat foto kenangan.',
      bio_paragraphs = ARRAY['Tumbuh besar di tengah lebatnya hutan hujan Kalimantan Tengah bersama keluarganya di Yayasan Kalaweit—sebuah suaka perlindungan owa, siamang, dan beruang madu—Andrew Kalaweit mendedikasikan masa mudanya untuk menjaga keasrian rimba nusantara dari ancaman deforestasi dan perburuan liar.', 'Dengan keahliannya menerbangkan paramotor di atas kanopi hutan, Andrew memantau titik-titik kebakaran hutan, penebangan liar, dan koridor satwa liar di Cagar Alam Dulan dan Pararawen. Melalui video dokumenter penjelajahan hutan mandiri yang ia rekam dan sunting sendiri, Andrew membagikan keindahan sekaligus kerapuhan rimba tropis kepada jutaan generasi muda di media sosial tanpa sensasi palsu.', 'Bagi Gen-Z, Andrew Kalaweit adalah teladan konservasionis muda yang berani dan autentik: membuktikan bahwa mencintai alam bukan sekadar slogan di kaos, melainkan gaya hidup nyata yang membutuhkan ketahanan fisik, empati pada satwa, dan dedikasi menjaga bumi.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('andrew-kalaweit', 'Andrew Kalaweit', 'Aktivis Konservasi Satwa Liar, Pilot Paramotor Patroli Rimba Kalimantan & Edukator Hutan', 'Penyelamat Bumi', 'Rimba Kalimantan adalah rumah bagi ribuan satwa langka yang tak bersuara; jika kita tidak berdiri menjaganya hari ini, anak cucu kita hanya akan mengenal hutan hujan lewat foto kenangan.', ARRAY['Tumbuh besar di tengah lebatnya hutan hujan Kalimantan Tengah bersama keluarganya di Yayasan Kalaweit—sebuah suaka perlindungan owa, siamang, dan beruang madu—Andrew Kalaweit mendedikasikan masa mudanya untuk menjaga keasrian rimba nusantara dari ancaman deforestasi dan perburuan liar.', 'Dengan keahliannya menerbangkan paramotor di atas kanopi hutan, Andrew memantau titik-titik kebakaran hutan, penebangan liar, dan koridor satwa liar di Cagar Alam Dulan dan Pararawen. Melalui video dokumenter penjelajahan hutan mandiri yang ia rekam dan sunting sendiri, Andrew membagikan keindahan sekaligus kerapuhan rimba tropis kepada jutaan generasi muda di media sosial tanpa sensasi palsu.', 'Bagi Gen-Z, Andrew Kalaweit adalah teladan konservasionis muda yang berani dan autentik: membuktikan bahwa mencintai alam bukan sekadar slogan di kaos, melainkan gaya hidup nyata yang membutuhkan ketahanan fisik, empati pada satwa, dan dedikasi menjaga bumi.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 — 2018', 'TUMBUH BESAR DI SUAKA SATWA KALAWEIT', 'Hidup dan belajar di dalam hutan Muara Teweh, merawat owa dan satwa sitaan korban perdagangan ilegal bersama sang ayah, Aurelien Brulé (Chanee).', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 — 2021', 'PILOT PARAMOTOR PATROLI RIMBA & VIRAL DIALOG ALAM', 'Menjadi pilot paramotor termuda yang memantau kebakaran hutan Kalimantan dari udara dan mendokumentasikan 24 jam bertahan hidup di tengah kanopi rimba.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 — 2026', 'PENGEMBANGAN CAGAR ALAM DULAN & EDUKASI GLOBAL', 'Memperluas zona lindung hutan Dulan seluas ribuan hektare dari ancaman konsesi perkebunan sawit melalui penggalangan dana publik mandiri.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Patroli Udara & Konservasi Rimba Dulan (Yayasan Kalaweit)', 'Pemantauan Satwa Udara & Perlindungan Kanopi', 'Operasi pemantauan deforestasi udara menggunakan paramotor dan perlindungan cagar alam satwa owa di pedalaman Kalimantan Tengah.', 'https://kalaweit.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kanal Dokumenter Alam Rimba Andrew Kalaweit', 'Karya Audio-Visual & Pendidikan Konservasi', 'Rangkaian video esai dokumenter kehidupan liar hutan hujan tropis yang telah ditonton puluhan juta kali oleh generasi muda dunia.', 'https://youtube.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Adopsi Hutan & Penyelamatan Owa Kalimantan', 'Filantropi Konservasi Satwa Langka', 'Inisiatif gotong royong publik untuk membeli kembali lahan hutan kritis dari ancaman perkebunan demi dijadikan cagar alam abadi.', 'https://kalaweit.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Melihat Rimba dari Angkasa: Mengapa Menjaga Kanopi Hutan Kalimantan Adalah Menjaga Napas Dunia', 'KONSERVASI HUTAN', '7 Menit Membaca', 'Catatan dari kokpit paramotor Andrew Kalaweit saat membelah kabut asap dan memetakan sisa hutan primer nusantara.', 'Dari ketinggian 500 meter, kita bisa melihat betapa cepatnya hamparan hijau rimba berubah menjadi petak-petak monokultur sawit yang mati rasa. Hutan adalah organisme raksasa yang saling terhubung; memotong satu bagian berarti meruntuhkan seluruh ekosistem.', '/artikel/andrew-kalaweit-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghormati Penghuni Rimba: Etika Berdampingan dengan Satwa Liar Tanpa Mengeksploitasinya', 'ETIKA SATWA', '6 Menit Membaca', 'Pentingnya membiarkan satwa liar hidup bebas di habitat aslinya dan menolak pemeliharaan satwa langka sebagai simbol status.', 'Satwa liar bukan mainan atau konten lucu untuk media sosial. Tempat terbaik bagi mereka adalah di atas pohon-pohon rimba yang rindang, merdeka dari kurungan manusia.', '/artikel/andrew-kalaweit-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Patroli Udara & Konservasi Rimba Dulan (Yayasan Kalaweit)', 'Pemantauan Satwa Udara & Perlindungan Kanopi', 'Operasi pemantauan deforestasi udara menggunakan paramotor dan perlindungan cagar alam satwa owa di pedalaman Kalimantan Tengah.', 'Rp 150.000 — Rp 450.000 / tiket', 'Dukung Inisiatif', 'https://kalaweit.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Kanal Dokumenter Alam Rimba Andrew Kalaweit', 'Karya Audio-Visual & Pendidikan Konservasi', 'Rangkaian video esai dokumenter kehidupan liar hutan hujan tropis yang telah ditonton puluhan juta kali oleh generasi muda dunia.', 'Tiket Nonton / VOD Rp 45.000 — Rp 75.000', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

COMMIT;
