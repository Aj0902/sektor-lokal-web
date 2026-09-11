-- SQL Batch for laci_09_duta_talenta
BEGIN;

-- Figure: Dr. Carina Joe (carina-joe)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'carina-joe' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dr. Carina Joe',
      title = 'Lead Scientist Formulasi Vaksin Oxford-AstraZeneca & Peneliti Bioteknologi Global',
      category = 'Duta Talenta',
      quote = 'Bekerja di laboratorium bukan soal mengejar tepuk tangan panggung. Saat pandemi mengancam miliaran nyawa manusia, setiap tetes formula yang kami sempurnakan adalah benteng pertahanan terakhir peradaban.',
      bio_paragraphs = ARRAY['Ketika pandemi COVID-19 melumpuhkan seluruh dunia, Dr. Carina Joe berada di episentrum perlombaan sains terbesar abad ke-21. Sebagai ilmuwan pascadoktoral senior di Jenner Institute, Universitas Oxford, perempuan kelahiran Jakarta ini memegang peranan krusial sebagai penemu metode scale-up manufaktur formula vaksin ChAdOx1 nCoV-19 (Oxford-AstraZeneca)—meningkatkan hasil produksi virus dari skala laboratorium kecil menjadi miliaran dosis dalam waktu rekor.', 'Tantangan terbesar yang dipecahkan Carina bukanlah sekadar menciptakan formula di cawan petri, melainkan merekayasa sistem bioreaktor berskala industri agar vaksin dapat diproduksi massal dengan biaya yang sangat murah dan disimpan pada suhu lemari pendingin biasa. Berkat terobosannya, lebih dari 3 miliar dosis vaksin berhasil didistribusikan ke 180 negara di dunia, menyelamatkan jutaan nyawa terutama di negara-negara berkembang.', 'Dedikasi Dr. Carina Joe membuktikan bahwa ketelitian saintifik, etika kemanusiaan, dan daya juang diaspora peneliti Indonesia mampu menjadi tulang punggung penyelamatan krisis kesehatan global tanpa pamrih komersialisasi berlebihan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('carina-joe', 'Dr. Carina Joe', 'Lead Scientist Formulasi Vaksin Oxford-AstraZeneca & Peneliti Bioteknologi Global', 'Duta Talenta', 'Bekerja di laboratorium bukan soal mengejar tepuk tangan panggung. Saat pandemi mengancam miliaran nyawa manusia, setiap tetes formula yang kami sempurnakan adalah benteng pertahanan terakhir peradaban.', ARRAY['Ketika pandemi COVID-19 melumpuhkan seluruh dunia, Dr. Carina Joe berada di episentrum perlombaan sains terbesar abad ke-21. Sebagai ilmuwan pascadoktoral senior di Jenner Institute, Universitas Oxford, perempuan kelahiran Jakarta ini memegang peranan krusial sebagai penemu metode scale-up manufaktur formula vaksin ChAdOx1 nCoV-19 (Oxford-AstraZeneca)—meningkatkan hasil produksi virus dari skala laboratorium kecil menjadi miliaran dosis dalam waktu rekor.', 'Tantangan terbesar yang dipecahkan Carina bukanlah sekadar menciptakan formula di cawan petri, melainkan merekayasa sistem bioreaktor berskala industri agar vaksin dapat diproduksi massal dengan biaya yang sangat murah dan disimpan pada suhu lemari pendingin biasa. Berkat terobosannya, lebih dari 3 miliar dosis vaksin berhasil didistribusikan ke 180 negara di dunia, menyelamatkan jutaan nyawa terutama di negara-negara berkembang.', 'Dedikasi Dr. Carina Joe membuktikan bahwa ketelitian saintifik, etika kemanusiaan, dan daya juang diaspora peneliti Indonesia mampu menjadi tulang punggung penyelamatan krisis kesehatan global tanpa pamrih komersialisasi berlebihan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 — 2018', 'STUDI BIOTEKNOLOGI & RISET STEM CELL AUSTRALIA', 'Menyelesaikan pendidikan doktoral dan riset pascadoktoral di bidang bioteknologi dan kultur sel di University of Queensland dan RMIT Australia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 — 2021', 'EPISENTRUM OXFORD & SCALE-UP VAKSIN ASTRAZENECA', 'Memimpin rekayasa proses manufaktur formulasi vaksin AstraZeneca di Jenner Institute, melipatgandakan kapasitas produksi hingga 3 miliar dosis.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 — 2026', 'ADVOKASI RISET KESEHATAN NASIONAL & GLOBAL AWARDS', 'Meraih penghargaan sains internasional bergengsi dan aktif membina jejaring transfer teknologi bioteknologi bagi universitas serta periset di Indonesia.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Scale-Up Biomanufaktur Vaksin Oxford-AstraZeneca', 'Rekayasa Bioteknologi & Kesehatan Global', 'Metode manufaktur skala industri untuk memproduksi vaksin vektor adenovirus bervolume tinggi dengan efisiensi biaya maksimal.', 'https://www.ndm.ox.ac.uk', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Riset Sel Punca & Sistem Formulasi Protein Rekombinan', 'Publikasi Saintifik Internasional', 'Kumpulan jurnal ilmiah tentang stabilitas formulasi biologi dan rekayasa ekspresi protein untuk terapi penyakit menular.', 'https://pubmed.ncbi.nlm.nih.gov', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Kolaborasi Transfer Teknologi Sains Indonesia', 'Pengembangan Talenta & Riset Nasional', 'Jembatan kemitraan strategis antara institusi riset biomedis Oxford dengan pusat bioteknologi dan kampus riset di tanah air.', 'https://brin.go.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Perlombaan Melawan Waktu di Laboratorium Oxford: Catatan Dr. Carina Joe Merakit Miliaran Vaksin', 'SAINS & KEMANUSIAAN', '8 Menit Membaca', 'Kisah di balik layar saat tim peneliti bekerja 16 jam sehari demi memastikan vaksin terjangkau bagi negara-negara berkembang.', 'Di musim semi 2020, laboratorium Oxford dipenuhi ketegangan tinggi. Kami tahu kegagalan di tabung reaksi berarti ribuan nyawa hilang tiap hari. Keputusan untuk melepas paten tanpa keuntungan komersial selama pandemi adalah prinsip moral yang kami pegang teguh: sains sejati ada untuk melayani kaum paling rentan.', '/artikel/carina-joe-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kedaulatan Bioteknologi: Mengapa Indonesia Harus Menyiapkan Ekosistem Riset Farmasi Mandiri', 'KEDAULATAN KESEHATAN', '7 Menit Membaca', 'Pandangan Dr. Carina Joe tentang pentingnya investasi laboratorium dan apresiasi terhadap peneliti lokal agar tidak bergantung pada impor obat.', 'Indonesia memiliki keanekaragaman hayati raksasa dan talenta muda yang cerdas. Yang kita butuhkan adalah kontinuitas pendanaan riset dasar dan infrastruktur laboratorium berstandar global agar saat pandemi berikutnya datang, kita tidak lagi menjadi konsumen di antrean belakang.', '/artikel/carina-joe-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Scale-Up Biomanufaktur Vaksin Oxford-AstraZeneca', 'Rekayasa Bioteknologi & Kesehatan Global', 'Metode manufaktur skala industri untuk memproduksi vaksin vektor adenovirus bervolume tinggi dengan efisiensi biaya maksimal.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.ndm.ox.ac.uk', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Riset Sel Punca & Sistem Formulasi Protein Rekombinan', 'Publikasi Saintifik Internasional', 'Kumpulan jurnal ilmiah tentang stabilitas formulasi biologi dan rekayasa ekspresi protein untuk terapi penyakit menular.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://pubmed.ncbi.nlm.nih.gov', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Griselda Sastrawinata-Lemay (griselda-sastrawinata)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'griselda-sastrawinata' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Griselda Sastrawinata-Lemay',
      title = 'Associate Production Designer & Visual Development Artist Walt Disney Animation Studios',
      category = 'Duta Talenta',
      quote = 'Di balik setiap helai kain, perahu layar, dan motif magis dalam animasi dunia, ada riset budaya berbulan-bulan. Seni visual bukan sekadar gambar indah, melainkan cara kita menghormati jiwa dari tradisi sebuah bangsa.',
      bio_paragraphs = ARRAY['Karier Griselda Sastrawinata-Lemay di industri animasi Hollywood adalah cerminan dari dedikasi tanpa kompromi pada detail visual dan ketelitian riset budaya. Lahir di Jakarta dan menempuh pendidikan di ArtCenter College of Design Pasadena, Griselda berhasil menembus lingkaran elit studio animasi dunia, dimulai dari DreamWorks hingga dipercaya menjadi Visual Development Artist dan Associate Production Designer di Walt Disney Animation Studios.', 'Sentuhan artistiknya menjadi nyawa visual di balik film-film animasi legendaris seperti Moana, Frozen II, Raya and the Last Dragon, Encanto, hingga Moana 2. Dalam perancangan kostum karakter dan properti mitologis, Griselda dikenal piawai menggabungkan riset antropologis tenun tradisional kepulauan Pasifik dan Asia Tenggara dengan teknologi rendering komputasi digital terkini.', 'Griselda secara konsisten menjadi mentor bagi para ilustrator dan animator muda Indonesia, membuktikan bahwa seniman berakar tradisi lokal memiliki tempat terhormat di panggung sinema animasi global.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('griselda-sastrawinata', 'Griselda Sastrawinata-Lemay', 'Associate Production Designer & Visual Development Artist Walt Disney Animation Studios', 'Duta Talenta', 'Di balik setiap helai kain, perahu layar, dan motif magis dalam animasi dunia, ada riset budaya berbulan-bulan. Seni visual bukan sekadar gambar indah, melainkan cara kita menghormati jiwa dari tradisi sebuah bangsa.', ARRAY['Karier Griselda Sastrawinata-Lemay di industri animasi Hollywood adalah cerminan dari dedikasi tanpa kompromi pada detail visual dan ketelitian riset budaya. Lahir di Jakarta dan menempuh pendidikan di ArtCenter College of Design Pasadena, Griselda berhasil menembus lingkaran elit studio animasi dunia, dimulai dari DreamWorks hingga dipercaya menjadi Visual Development Artist dan Associate Production Designer di Walt Disney Animation Studios.', 'Sentuhan artistiknya menjadi nyawa visual di balik film-film animasi legendaris seperti Moana, Frozen II, Raya and the Last Dragon, Encanto, hingga Moana 2. Dalam perancangan kostum karakter dan properti mitologis, Griselda dikenal piawai menggabungkan riset antropologis tenun tradisional kepulauan Pasifik dan Asia Tenggara dengan teknologi rendering komputasi digital terkini.', 'Griselda secara konsisten menjadi mentor bagi para ilustrator dan animator muda Indonesia, membuktikan bahwa seniman berakar tradisi lokal memiliki tempat terhormat di panggung sinema animasi global.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2014', 'ARTCENTER PASADENA & ERA DREAMWORKS ANIMATION', 'Lulus dengan predikat kehormatan di ArtCenter College of Design dan berkontribusi sebagai Visual Development Artist di film Shrek Forever After dan Puss in Boots.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 — 2020', 'DISNEY ANIMATION STUDIOS & DESAIN MOANA / FROZEN II', 'Bergabung dengan Walt Disney Animation Studios, mendesain busana karakter utama Moana, gaun eselsa Frozen II, dan elemen visual Raya.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'ASSOCIATE PRODUCTION DESIGNER & MENTORING TALENTA', 'Dipercaya memimpin departemen desain produksi untuk Moana 2 dan membagikan keahlian industri lewat masterclass animasi di tanah air.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Desain Produksi Visual Moana & Moana 2 (Disney)', 'Desain Seni Sinema Animasi Global', 'Rancangan visual kostum Tapa cloth, perahu tradisional Wayfinding, dan estetika visual samudera Pasifik.', 'https://disneyanimation.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Visual Development & Costume Design ''Raya and the Last Dragon''', 'Visual Development & Wastra Nusantara', 'Eksplorasi motif kain ikat, batik, dan ornamen arsitektur tradisional rumpun Asia Tenggara ke dalam dunia Kumandra.', 'https://disneyanimation.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Masterclass Desain Visual & Karakter Animasi Indonesia', 'Edukasi Industri Kreatif & Mentorship', 'Lokakarya reguler membimbing ribuan mahasiswa seni rupa dan animator muda nusantara menembus standar studio global.', 'https://instagram.com/grizandnorm', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjahit Dongeng di Kanvas Digital: Rahasia Riset Visual Griselda Sastrawinata', 'SENI ANIMASI', '7 Menit Membaca', 'Bagaimana riset tekstil kuno dan kebiasaan masyarakat adat diterjemahkan menjadi busana digital yang hidup dan bernyawa.', 'Setiap lipatan kain yang dikenakan karakter animasi di layar memiliki cerita masa lalu. Kami menghabiskan ratusan jam mempelajari bagaimana serat pohon dipukul dan diwarnai lumpur agar saat karakter bergerak di tengah badai laut, teksturnya terasa otentik di mata penonton.', '/artikel/griselda-sastrawinata-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Jakarta ke Studio Animasi Hollywood: Pesan Griselda untuk Kreator Muda', 'INDUSTRI KREATIF', '6 Menit Membaca', 'Kiat menjaga kedisiplinan sketsa harian, etika kerja studio, dan keunikan perspektif lokal dalam berkarya.', 'Kunci bertahan di industri kreatif dunia bukanlah bakat bawaan yang instan, melainkan ketahanan merevisi karya ratusan kali tanpa kehilangan cinta pada proses menggambar itu sendiri.', '/artikel/griselda-sastrawinata-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Desain Produksi Visual Moana & Moana 2 (Disney)', 'Desain Seni Sinema Animasi Global', 'Rancangan visual kostum Tapa cloth, perahu tradisional Wayfinding, dan estetika visual samudera Pasifik.', 'Tiket Nonton / VOD Rp 45.000 — Rp 75.000', 'Dukung Inisiatif', 'https://disneyanimation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Visual Development & Costume Design ''Raya and the Last Dragon''', 'Visual Development & Wastra Nusantara', 'Eksplorasi motif kain ikat, batik, dan ornamen arsitektur tradisional rumpun Asia Tenggara ke dalam dunia Kumandra.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://disneyanimation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Iko Uwais (iko-uwais)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'iko-uwais' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Iko Uwais',
      title = 'Aktor Laga Internasional, Koreografer Silat Tradisional & Pendiri Uwais Team',
      category = 'Duta Talenta',
      quote = 'Pencak silat bukan sekadar teknik mematahkan lawan, ia adalah filosofi kesantunan, penguasaan rasa batin, dan keindahan gerak warisan leluhur yang harus dipertahankan kemurniannya.',
      bio_paragraphs = ARRAY['Sebelum menggebrak panggung sinema aksi Hollywood, Uwais Qorny (dikenal sebagai Iko Uwais) adalah seorang sopir truk ekspedisi yang tekun berlatih di perguruan silat Tiga Berantai Jakarta sejak usia sepuluh tahun. Ketangguhan teknik silat Harimau dan Minang yang dikuasainya menarik sutradara Gareth Evans, melahirkan kolaborasi sinematik legendaris dalam Merantau (2009) dan The Raid (2011).', 'The Raid tidak hanya menjadi film laga berperingkat tinggi di kancah perfilman dunia, tetapi merevolusi standar koreografi aksi global. Melalui Uwais Team, Iko membawa keaslian bantingan, kuncian, dan keanggunan gerak pencak silat ke produksi film-film blockbuster internasional seperti The Night Comes for Us, Mile 22, Snake Eyes, hingga The Expendables 4.', 'Keberhasilan Iko Uwais mengangkat pencak silat dari gelanggang gelanggang kampung menjadi bahasa aksi sinema dunia adalah bukti autentik bahwa kekayaan budaya beladiri tradisional memiliki daya getar universal yang tak tertandingi.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('iko-uwais', 'Iko Uwais', 'Aktor Laga Internasional, Koreografer Silat Tradisional & Pendiri Uwais Team', 'Duta Talenta', 'Pencak silat bukan sekadar teknik mematahkan lawan, ia adalah filosofi kesantunan, penguasaan rasa batin, dan keindahan gerak warisan leluhur yang harus dipertahankan kemurniannya.', ARRAY['Sebelum menggebrak panggung sinema aksi Hollywood, Uwais Qorny (dikenal sebagai Iko Uwais) adalah seorang sopir truk ekspedisi yang tekun berlatih di perguruan silat Tiga Berantai Jakarta sejak usia sepuluh tahun. Ketangguhan teknik silat Harimau dan Minang yang dikuasainya menarik sutradara Gareth Evans, melahirkan kolaborasi sinematik legendaris dalam Merantau (2009) dan The Raid (2011).', 'The Raid tidak hanya menjadi film laga berperingkat tinggi di kancah perfilman dunia, tetapi merevolusi standar koreografi aksi global. Melalui Uwais Team, Iko membawa keaslian bantingan, kuncian, dan keanggunan gerak pencak silat ke produksi film-film blockbuster internasional seperti The Night Comes for Us, Mile 22, Snake Eyes, hingga The Expendables 4.', 'Keberhasilan Iko Uwais mengangkat pencak silat dari gelanggang gelanggang kampung menjadi bahasa aksi sinema dunia adalah bukti autentik bahwa kekayaan budaya beladiri tradisional memiliki daya getar universal yang tak tertandingi.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2008', 'JUARA PENCAK SILAT NASIONAL & PENEMUAN BAKAT', 'Meraih predikat Pesilat Terbaik Kejuaraan Silat Nasional sebelum ditemukan oleh sutradara Gareth Evans di sanggar silat.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2009 — 2014', 'FENOMENA MERANTAU, THE RAID & REVOLUSI AKSI DUNIA', 'Membintangi dan menata koreografi The Raid yang menjadi kultus film aksi dunia dan memenangkan festival film internasional.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 — 2026', 'HOLLYWOOD, UWAIS TEAM & DIPLOMASI BUDAYA BELADIRI', 'Mendirikan Uwais Team, membintangi film-film laga Hollywood papan atas, dan melatih puluhan aktor laga internasional bertarung dengan teknik silat.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'The Raid: Redemption & The Raid 2 (Sinema Laga)', 'Film Aksi & Koreografi Pencak Silat', 'Karya sinema laga revolusioner yang memperkenalkan teknik silat gerak cepat dan pertarungan ruang sempit ke kancah global.', 'https://www.imdb.com/title/tt1899353', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Uwais Team (Kolektif Koreografer & Stunt Silat)', 'Koreografi Laga & Manajemen Stuntman', 'Pusat pelatihan dan penyedia koreografi aksi laga profesional Indonesia untuk industri sinema Hollywood dan Asia.', 'https://instagram.com/iko.uwais', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Peran Sinema Laga Hollywood (Mile 22, Wu Assassins, Expend4bles)', 'Akting Sinema Internasional', 'Peran utama dan antagonis di film aksi blockbuster dunia dengan mempertahankan identitas bela diri silat nusantara.', 'https://www.imdb.com/name/nm3299397', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Darah, Keringat, dan Filosofi Silat: Perjalanan Iko Uwais Merevolusi Sinema Aksi Dunia', 'SINEMA & BUDAYA', '8 Menit Membaca', 'Kisah perjuangan Iko dari latihan fisik keras di sanggar kayu hingga memimpin koreografi laga bersama aktor-aktor papan atas dunia.', 'Di luar negeri, mereka kagum bukan cuma karena kecepatan pukulan kami, tapi karena di dalam silat ada ritme dan rasa. Setiap gerakan pukulan dan tangkisan selalu diimbangi dengan sikap hormat. Silat adalah pertahanan diri yang menjunjung tinggi kemanusiaan lawan.', '/artikel/iko-uwais-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membangun Industri Stunt Profesional: Visi Uwais Team untuk Masa Depan Aktor Laga Lokal', 'INDUSTRI KREATIF', '6 Menit Membaca', 'Bagaimana Uwais Team menerapkan standar keselamatan tinggi dan regenerasi atlet silat menjadi stunt performer profesional.', 'Aksi laga yang keren adalah aksi yang aman. Kami tidak ingin talenta muda mengorbankan cedera fatal demi sebuah adegan. Disiplin, perhitungan matematis jarak, dan saling percaya adalah fondasi dari setiap koreografi laga kelas dunia.', '/artikel/iko-uwais-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'The Raid: Redemption & The Raid 2 (Sinema Laga)', 'Film Aksi & Koreografi Pencak Silat', 'Karya sinema laga revolusioner yang memperkenalkan teknik silat gerak cepat dan pertarungan ruang sempit ke kancah global.', 'Tiket Nonton / VOD Rp 45.000 — Rp 75.000', 'Dukung Inisiatif', 'https://www.imdb.com/title/tt1899353', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Uwais Team (Kolektif Koreografer & Stunt Silat)', 'Koreografi Laga & Manajemen Stuntman', 'Pusat pelatihan dan penyedia koreografi aksi laga profesional Indonesia untuk industri sinema Hollywood dan Asia.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://instagram.com/iko.uwais', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Joey Alexander (joey-alexander)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'joey-alexander' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Joey Alexander',
      title = 'Komposer Jazz, Pianis Virtuoso & 3x Nomine Grammy Awards Termuda Indonesia',
      category = 'Duta Talenta',
      quote = 'Bermain jazz bukan tentang pamer kerumitan jari di tuts piano. Ini tentang mendengarkan dengan seluruh jiwa, berdialog secara jujur dengan rekan bermusik, dan membiarkan melodi mengalir bebas tanpa kepalsuan.',
      bio_paragraphs = ARRAY['Bakat musik Joey Alexander lahir dari kepekaan intuitif luar biasa. Mulai belajar piano secara otodidak pada usia enam tahun di Denpasar, Bali, Joey membedah harmoni album-album jazz klasik peninggalan ayahnya lewat pendengaran tanpa notasi balok formal. Pada usia sembilan tahun, ia memenangkan Grand Prix di Master-Jam Fest Odessa, Ukraina, mengalahkan puluhan musisi jazz dewasa dari seluruh dunia.', 'Undangan dari legenda jazz dunia Wynton Marsalis membawanya tampil di Jazz at Lincoln Center New York pada usia 11 tahun. Debut albumnya, My Favorite Things (2015), langsung mendobrak tangga musik Billboard 200 dan mengantarkannya meraih 3 nominasi Grammy Awards—menjadikannya musisi Indonesia pertama sekaligus salah satu nomine termuda sepanjang sejarah Grammy.', 'Kini sebagai komposer matang yang merilis karya-karya orisinil seperti Warna, Origin, dan Continuance, Joey Alexander terus berkeliling panggung jazz prestisius dunia di Blue Note, Newport Jazz Festival, dan Carnegie Hall, membawa kedalaman harmoni nusantara ke jantung musik jazz dunia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('joey-alexander', 'Joey Alexander', 'Komposer Jazz, Pianis Virtuoso & 3x Nomine Grammy Awards Termuda Indonesia', 'Duta Talenta', 'Bermain jazz bukan tentang pamer kerumitan jari di tuts piano. Ini tentang mendengarkan dengan seluruh jiwa, berdialog secara jujur dengan rekan bermusik, dan membiarkan melodi mengalir bebas tanpa kepalsuan.', ARRAY['Bakat musik Joey Alexander lahir dari kepekaan intuitif luar biasa. Mulai belajar piano secara otodidak pada usia enam tahun di Denpasar, Bali, Joey membedah harmoni album-album jazz klasik peninggalan ayahnya lewat pendengaran tanpa notasi balok formal. Pada usia sembilan tahun, ia memenangkan Grand Prix di Master-Jam Fest Odessa, Ukraina, mengalahkan puluhan musisi jazz dewasa dari seluruh dunia.', 'Undangan dari legenda jazz dunia Wynton Marsalis membawanya tampil di Jazz at Lincoln Center New York pada usia 11 tahun. Debut albumnya, My Favorite Things (2015), langsung mendobrak tangga musik Billboard 200 dan mengantarkannya meraih 3 nominasi Grammy Awards—menjadikannya musisi Indonesia pertama sekaligus salah satu nomine termuda sepanjang sejarah Grammy.', 'Kini sebagai komposer matang yang merilis karya-karya orisinil seperti Warna, Origin, dan Continuance, Joey Alexander terus berkeliling panggung jazz prestisius dunia di Blue Note, Newport Jazz Festival, dan Carnegie Hall, membawa kedalaman harmoni nusantara ke jantung musik jazz dunia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2009 — 2013', 'BELAJAR OTODIDAK DI BALI & JUARA GRAND PRIX ODESSA', 'Mempelajari piano jazz lewat rekaman vinyl klasik dan menjuarai kompetisi jazz internasional di Ukraina pada usia 9 tahun.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2016', 'JAZZ AT LINCOLN CENTER & 3X NOMINASI GRAMMY AWARDS', 'Tampil memukau di panggung New York dan mencetak sejarah sebagai musisi Indonesia pertama yang meraih nominasi Grammy di usia 12 tahun.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2026', 'EKSPLORASI KOMPOSISI ORISINIL & TUR DUNIA', 'Merilis album orisinil bersama trio jazz kelas dunia dan menggelar tur konser di panggung-panggung jazz paling bergengsi di Amerika, Eropa, dan Asia.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album ''My Favorite Things'' (Motéma Music)', 'Album Rekaman Jazz & Grammy Nominee', 'Album debut bersejarah berisi aransemen ulang mahakarya jazz klasik yang memuncaki tangga lagu Billboard Jazz.', 'https://joeyalexandermusic.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album ''Origin'' (Verve / Mack Avenue)', 'Komposisi Musik Orisinil', 'Album penuh pertama berisi seluruh karya cipta orisinil Joey Alexander yang menampilkan kematangan eksplorasi harmoni dan ritme.', 'https://joeyalexandermusic.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pementasan Newport Jazz Festival & Blue Note New York', 'Penampilan Panggung Musik Dunia', 'Rangkaian pertunjukan live legendaris di panggung festival jazz tertua dan klub jazz paling terhormat di dunia.', 'https://youtube.com/@joeyalexandermusic', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Di Balik Tuts Piano Jazz: Dialog Batin Joey Alexander Menyentuh Panggung Dunia', 'SENI MUSIK', '7 Menit Membaca', 'Kisah tentang kebebasan improvisasi, disiplin latihan sunyi, dan kerendahan hati seorang virtuoso muda di New York.', 'Di atas panggung jazz, tidak ada tempat untuk berbohong. Bila hatimu sedang kalut atau sombong, tuts piano akan membocorkannya ke telinga penonton. Jazz menuntut kejujuran total: kamu harus rela melepas ego dan menjadi instrumen bagi musik itu sendiri.', '/artikel/joey-alexander-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Denpasar ke Carnegie Hall: Perjalanan Panjang Menjaga Kejernihan Rasa Bermusik', 'REFLEKSI KARYA', '6 Menit Membaca', 'Bagaimana Joey menjaga cinta pada musik agar tidak terdistorsi oleh ketenaran panggung industri global.', 'Penghargaan dan nominasi adalah bonus yang menyenangkan, namun kebahagiaan sejati tetap sama seperti saat saya berusia enam tahun di Bali: duduk di depan piano, memejamkan mata, dan menemukan melodi yang mampu menghibur jiwa orang lain.', '/artikel/joey-alexander-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Album ''My Favorite Things'' (Motéma Music)', 'Album Rekaman Jazz & Grammy Nominee', 'Album debut bersejarah berisi aransemen ulang mahakarya jazz klasik yang memuncaki tangga lagu Billboard Jazz.', 'Rp 350.000 — Rp 650.000', 'Dukung Inisiatif', 'https://joeyalexandermusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Album ''Origin'' (Verve / Mack Avenue)', 'Komposisi Musik Orisinil', 'Album penuh pertama berisi seluruh karya cipta orisinil Joey Alexander yang menampilkan kematangan eksplorasi harmoni dan ritme.', 'Rp 350.000 — Rp 650.000', 'Dukung Inisiatif', 'https://joeyalexandermusic.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Muhammad Arief Budiman, Ph.D. (muhammad-arief-budiman)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'muhammad-arief-budiman' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Muhammad Arief Budiman, Ph.D.',
      title = 'Ilmuwan Genetika Tanaman Global, Direktur Riset Orion Genomics & Pemeta Genom Kelapa Sawit',
      category = 'Duta Talenta',
      quote = 'Beras dan pangan yang kita makan setiap hari adalah hasil dari kode genetik alam yang luar biasa rumit. Memetakan DNA tanaman bukan untuk merusak alam, melainkan untuk memastikan bumi tetap mampu memberi makan peradaban tanpa membabat habis hutan rimba.',
      bio_paragraphs = ARRAY['Muhammad Arief Budiman adalah sosok ilmuwan biologi molekuler dan genetika tanaman kelas dunia asal Yogyakarta yang kiprahnya menjadi rujukan riset agrikultur internasional. Menyelesaikan pendidikan sarjana di Institut Pertanian Bogor (IPB) dan meraih gelar doktor dalam bidang genetika tanaman dari Texas A&M University, Arief telah memimpin berbagai proyek pemetaan genomik tanaman strategis dunia.', 'Sebagai Direktur Riset dan Operasi Laboratorium di Orion Genomics, St. Louis, Amerika Serikat, Arief memimpin terobosan monumental dalam pemetaan genom kelapa sawit (*Elaeis guineensis*). Penemuannya atas penanda genetik *Shell gene* memungkinkan perkebunan menyeleksi bibit sawit unggul sejak fase kecambah, melipatgandakan produktivitas minyak per hektare hingga 30% tanpa perlu memperluas pembukaan lahan hutan baru.', 'Karyanya yang dipublikasikan di jurnal sains paling bergengsi dunia, Nature, menjadi sumbangsih nyata sains Indonesia bagi solusi krisis pangan dan keberlanjutan lingkungan hidup global.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('muhammad-arief-budiman', 'Muhammad Arief Budiman, Ph.D.', 'Ilmuwan Genetika Tanaman Global, Direktur Riset Orion Genomics & Pemeta Genom Kelapa Sawit', 'Duta Talenta', 'Beras dan pangan yang kita makan setiap hari adalah hasil dari kode genetik alam yang luar biasa rumit. Memetakan DNA tanaman bukan untuk merusak alam, melainkan untuk memastikan bumi tetap mampu memberi makan peradaban tanpa membabat habis hutan rimba.', ARRAY['Muhammad Arief Budiman adalah sosok ilmuwan biologi molekuler dan genetika tanaman kelas dunia asal Yogyakarta yang kiprahnya menjadi rujukan riset agrikultur internasional. Menyelesaikan pendidikan sarjana di Institut Pertanian Bogor (IPB) dan meraih gelar doktor dalam bidang genetika tanaman dari Texas A&M University, Arief telah memimpin berbagai proyek pemetaan genomik tanaman strategis dunia.', 'Sebagai Direktur Riset dan Operasi Laboratorium di Orion Genomics, St. Louis, Amerika Serikat, Arief memimpin terobosan monumental dalam pemetaan genom kelapa sawit (*Elaeis guineensis*). Penemuannya atas penanda genetik *Shell gene* memungkinkan perkebunan menyeleksi bibit sawit unggul sejak fase kecambah, melipatgandakan produktivitas minyak per hektare hingga 30% tanpa perlu memperluas pembukaan lahan hutan baru.', 'Karyanya yang dipublikasikan di jurnal sains paling bergengsi dunia, Nature, menjadi sumbangsih nyata sains Indonesia bagi solusi krisis pangan dan keberlanjutan lingkungan hidup global.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1994 — 2002', 'IPB, DOKTORAL TEXAS A&M & RISET GENOMIK TANAMAN', 'Menempuh pendidikan biologi molekuler di IPB dan meraih beasiswa doktoral di Texas A&M University dalam pemetaan DNA tanaman.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2003 — 2013', 'DIREKTUR ORION GENOMICS & PENEMUAN NATURE', 'Memimpin tim periset genomik di AS dan menerbitkan penemuan regulasi gen sawit di jurnal Nature yang merevolusi agrikultur global.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2026', 'KONSULTASI BIOTEKNOLOGI PANGAN & MENTORING RISET', 'Mengembangkan teknologi bioteknologi penangkal penyakit tanaman pangan dan aktif mentransfer ilmu genomik ke universitas riset di tanah air.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Publikasi Peta Genom Kelapa Sawit (Jurnal Nature)', 'Publikasi Riset Saintifik Dunia', 'Pemetaan urutan DNA kelapa sawit dan penemuan gen penentu ketebalan cangkang buah yang meningkatkan rendemen minyak sawit lestari.', 'https://www.nature.com/articles/nature12309', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Teknologi Deteksi Dini Bibit Sawit Unggul Berkelanjutan', 'Bioteknologi Agrikultur Terapan', 'Metode molekuler untuk mendeteksi varietas tanaman produktif tinggi sejak benih guna mencegah deforestasi lahan.', 'https://oriongenomics.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Riset Epigenetik Tanaman Pangan & Ketahanan Iklim', 'Pengembangan Sains Hayati', 'Pengembangan protokol analisis DNA untuk menciptakan varietas tanaman pangan yang tahan terhadap kekeringan dan serangan hama.', 'https://scholar.google.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membaca Kode Rahasia DNA Tanaman: Kisah Dr. Arief Budiman Menembus Jurnal Nature', 'SAINS & LINGKUNGAN', '8 Menit Membaca', 'Bagaimana sains genetika presisi dapat menjadi senjata ampuh menghentikan laju deforestasi hutan tropis.', 'Jika kita bisa memproduksi minyak dua kali lipat lebih banyak dari satu pohon sawit yang sama melalui seleksi genetika yang tepat, petani dan industri tidak perlu lagi menebang hutan perawan. Sains hadir untuk memberikan efisiensi yang menyelamatkan ekosistem.', '/artikel/muhammad-arief-budiman-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Diaspora Peneliti dan Kedaulatan Pangan: Menghubungkan Laboratorium Dunia dengan Sawah Nusantara', 'RISET & INOVASI', '7 Menit Membaca', 'Pentingnya kolaborasi riset genomik tanaman pangan lokal agar Indonesia berdaulat atas benih padinya sendiri.', 'Benih adalah kedaulatan sebuah bangsa. Membiarkan kepemilikan genetik varietas tanaman lokal dikuasai korporasi luar negeri adalah ancaman geopolitik serius. Kita harus membangun bank genom tanaman pangan mandiri yang dijaga oleh anak-anak bangsa.', '/artikel/muhammad-arief-budiman-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Publikasi Peta Genom Kelapa Sawit (Jurnal Nature)', 'Publikasi Riset Saintifik Dunia', 'Pemetaan urutan DNA kelapa sawit dan penemuan gen penentu ketebalan cangkang buah yang meningkatkan rendemen minyak sawit lestari.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.nature.com/articles/nature12309', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Teknologi Deteksi Dini Bibit Sawit Unggul Berkelanjutan', 'Bioteknologi Agrikultur Terapan', 'Metode molekuler untuk mendeteksi varietas tanaman produktif tinggi sejak benih guna mencegah deforestasi lahan.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://oriongenomics.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: NIKI (Niki Zefanya) (niki-zefanya)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'niki-zefanya' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'NIKI (Niki Zefanya)',
      title = 'Penyanyi, Penulis Lagu, Musisi Pop Kontemporer Global & Bintang 88rising',
      category = 'Duta Talenta',
      quote = 'Bagi seorang gadis remaja dari Jakarta yang dulu bernyanyi di depan webcam kamar tidur, berdiri di panggung Coachella membawakan lagu tentang rumah adalah pengingat bahwa mimpi kita tidak pernah terlalu jauh untuk digapai.',
      bio_paragraphs = ARRAY['Nicole Zefanya (dikenal sebagai NIKI) mengukir sejarah sebagai salah satu solois perempuan Indonesia paling berpengaruh di industri musik internasional. Merintis musik dari kamar tidurnya di Jakarta dengan mengunggah video akustik di YouTube, kejujuran lirik dan kepiawaiannya memproduseri lagu R&B kontemporer menarik perhatian label rekaman 88rising di Amerika Serikat.', 'Album-albumnya seperti MOONCHILD, Nicole, dan Buzz membuktikan kualitasnya sebagai penyanyi-penulis lagu berkelas dunia yang piawai merangkum kerentanan patah hati, kecemasan masa muda, dan kerinduan pada tanah kelahiran. Lagu hit seperti ''Every Summertime'' dan ''High School in Jakarta'' memuncaki tangga lagu internasional dan menjadi soundtrack budaya pop generasi Z lintas benua.', 'Puncaknya, NIKI mencetak sejarah sebagai musisi perempuan Indonesia pertama yang tampil di festival musik paling prestisius di dunia, Coachella Valley Music and Arts Festival, dengan membanggakan identitas nusantara di hadapan puluhan ribu penonton dunia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('niki-zefanya', 'NIKI (Niki Zefanya)', 'Penyanyi, Penulis Lagu, Musisi Pop Kontemporer Global & Bintang 88rising', 'Duta Talenta', 'Bagi seorang gadis remaja dari Jakarta yang dulu bernyanyi di depan webcam kamar tidur, berdiri di panggung Coachella membawakan lagu tentang rumah adalah pengingat bahwa mimpi kita tidak pernah terlalu jauh untuk digapai.', ARRAY['Nicole Zefanya (dikenal sebagai NIKI) mengukir sejarah sebagai salah satu solois perempuan Indonesia paling berpengaruh di industri musik internasional. Merintis musik dari kamar tidurnya di Jakarta dengan mengunggah video akustik di YouTube, kejujuran lirik dan kepiawaiannya memproduseri lagu R&B kontemporer menarik perhatian label rekaman 88rising di Amerika Serikat.', 'Album-albumnya seperti MOONCHILD, Nicole, dan Buzz membuktikan kualitasnya sebagai penyanyi-penulis lagu berkelas dunia yang piawai merangkum kerentanan patah hati, kecemasan masa muda, dan kerinduan pada tanah kelahiran. Lagu hit seperti ''Every Summertime'' dan ''High School in Jakarta'' memuncaki tangga lagu internasional dan menjadi soundtrack budaya pop generasi Z lintas benua.', 'Puncaknya, NIKI mencetak sejarah sebagai musisi perempuan Indonesia pertama yang tampil di festival musik paling prestisius di dunia, Coachella Valley Music and Arts Festival, dengan membanggakan identitas nusantara di hadapan puluhan ribu penonton dunia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2017', 'ERA COVERS YOUTUBE DI JAKARTA & PENEMUAN BAKAT', 'Mengunggah lagu-lagu ciptaan sendiri dan cover akustik di YouTube dari kamar tidurnya sebelum direkrut oleh 88rising.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2021', 'DEBUT AMERIKA, EP ZEPHYR & ALBUM MOONCHILD', 'Pindah ke Los Angeles, merilis EP Zephyr dan album konsep MOONCHILD yang menuai pujian kritis dari media musik dunia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 — 2026', 'SEJARAH COACHELLA, ALBUM NICOLE & TUR DUNIA', 'Menjadi penyanyi perempuan Indonesia pertama di panggung utama Coachella dan menggelar tur konser solo keliling dunia (The Nicole Tour & Buzz Tour).', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Penampilan Bersejarah di Coachella Music Festival (2022)', 'Pementasan Musik Panggung Dunia', 'Penampilan spektakuler membawakan lagu ''Sempurna'' dan karya orisinil di festival musik terbesar Amerika Serikat.', 'https://youtube.com/watch?v=coachella', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album Studio ''Nicole'' & ''Buzz'' (88rising / Virgin Music)', 'Album Rekaman Pop-R&B Kontemporer', 'Album reflektif berisi lagu-lagu hit global seperti ''High School in Jakarta'', ''Oceans & Engines'', dan ''Backburner''.', 'https://nikizefanya.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Original Soundtrack Marvel Studios ''Shang-Chi'' (Every Summertime)', 'Karya Musik Sinema Hollywood', 'Lagu hit global yang menjadi lagu tema utama film blockbuster Marvel Studios dan memuncaki tangga lagu Spotify global.', 'https://spotify.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Jakarta ke Gurun Coachella: Kejujuran Lirik NIKI Memikat Telinga Dunia', 'SENI MUSIK', '7 Menit Membaca', 'Catatan perjalanan emosional NIKI menulis lagu-lagu personal yang merangkum kerapuhan dan kekuatan perempuan muda.', 'Waktu menulis di kamar tidur dengan gitar tua, saya tidak pernah membayangkan ribuan orang di New York, London, dan Paris akan ikut menyanyikan lirik tentang SMA di Jakarta. Musik punya sihir aneh: semakin spesifik dan jujur cerita pribadimu, semakin universal resonansinya di hati pendengar.', '/artikel/niki-zefanya-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Identitas dan Representasi Asia di Panggung Musik Global: Refleksi NIKI Zefanya', 'KARYA & REPUTASI', '6 Menit Membaca', 'Bagaimana musisi muda Asia Tenggara kini memegang kendali atas narasinya sendiri di industri hiburan barat.', 'Dulu kita terbiasa melihat standar pop barat yang seragam. Hari ini, anak-anak muda di seluruh dunia mendengarkan musisi Asia tanpa merasa itu hal yang aneh. Menjadi diri sendiri dan bangga pada akar budaya adalah kekuatan terbesar seorang seniman.', '/artikel/niki-zefanya-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Penampilan Bersejarah di Coachella Music Festival (2022)', 'Pementasan Musik Panggung Dunia', 'Penampilan spektakuler membawakan lagu ''Sempurna'' dan karya orisinil di festival musik terbesar Amerika Serikat.', 'Rilisan Digital / Fisik Rp 49.000 — Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/watch?v=coachella', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Album Studio ''Nicole'' & ''Buzz'' (88rising / Virgin Music)', 'Album Rekaman Pop-R&B Kontemporer', 'Album reflektif berisi lagu-lagu hit global seperti ''High School in Jakarta'', ''Oceans & Engines'', dan ''Backburner''.', 'Rp 350.000 — Rp 650.000', 'Dukung Inisiatif', 'https://nikizefanya.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Prof. dr. Adi Utarini, M.Sc., MPH, Ph.D. (adi-utarini)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'adi-utarini' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Prof. dr. Adi Utarini, M.Sc., MPH, Ph.D.',
      title = 'Guru Besar Kedokteran Tropis UGM, Pemimpin Riset Wolbachia & Top 100 Tokoh Berpengaruh Versi TIME',
      category = 'Duta Talenta',
      quote = 'Sains yang paling canggih sekalipun akan mandul bila tidak disambut dengan rasa percaya oleh warga di gang-gang kampung. Mengalahkan demam berdarah dimulai dari dialog kopi sore bersama para ibu kader kesehatan.',
      bio_paragraphs = ARRAY['Prof. dr. Adi Utarini adalah sosok ilmuwan kesehatan masyarakat dan peneliti kedokteran tropis dari Universitas Gadjah Mada (UGM) yang berhasil memimpin salah satu uji klinis paling sukses dalam sejarah pengendalian penyakit menular di dunia. Sebagai pemimpin Proyek Aplikasi Nyamuk Wolbachia (World Mosquito Program Yogyakarta), perempuan yang akrab disapa Prof. Uut ini memimpin tim peneliti multi-disiplin selama hampir satu dekade.', 'Uji klinis acak terkendali (Randomized Controlled Trial) berskala luas yang dilakukannya di Yogyakarta membuktikan bahwa pelepasan nyamuk *Aedes aegypti* yang disuntik bakteri alami *Wolbachia* berhasil menurunkan kasus penularan demam berdarah dengue (DBD) hingga 77% dan menurunkan rawat inap rumah sakit hingga 86%. Hasil riset monumental ini dipublikasikan di *The New England Journal of Medicine* (NEJM) dan diadopsi oleh Badan Kesehatan Dunia (WHO).', 'Atas pencapaian ilmiah yang menyelamatkan jutaan nyawa anak-anak dari ancaman DBD, Prof. Adi Utarini dinobatkan oleh majalah TIME sebagai salah satu dari 100 Tokoh Paling Berpengaruh di Dunia (TIME100) dan masuk dalam daftar 10 Ilmuwan Berpengaruh Dunia versi jurnal *Nature*.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('adi-utarini', 'Prof. dr. Adi Utarini, M.Sc., MPH, Ph.D.', 'Guru Besar Kedokteran Tropis UGM, Pemimpin Riset Wolbachia & Top 100 Tokoh Berpengaruh Versi TIME', 'Duta Talenta', 'Sains yang paling canggih sekalipun akan mandul bila tidak disambut dengan rasa percaya oleh warga di gang-gang kampung. Mengalahkan demam berdarah dimulai dari dialog kopi sore bersama para ibu kader kesehatan.', ARRAY['Prof. dr. Adi Utarini adalah sosok ilmuwan kesehatan masyarakat dan peneliti kedokteran tropis dari Universitas Gadjah Mada (UGM) yang berhasil memimpin salah satu uji klinis paling sukses dalam sejarah pengendalian penyakit menular di dunia. Sebagai pemimpin Proyek Aplikasi Nyamuk Wolbachia (World Mosquito Program Yogyakarta), perempuan yang akrab disapa Prof. Uut ini memimpin tim peneliti multi-disiplin selama hampir satu dekade.', 'Uji klinis acak terkendali (Randomized Controlled Trial) berskala luas yang dilakukannya di Yogyakarta membuktikan bahwa pelepasan nyamuk *Aedes aegypti* yang disuntik bakteri alami *Wolbachia* berhasil menurunkan kasus penularan demam berdarah dengue (DBD) hingga 77% dan menurunkan rawat inap rumah sakit hingga 86%. Hasil riset monumental ini dipublikasikan di *The New England Journal of Medicine* (NEJM) dan diadopsi oleh Badan Kesehatan Dunia (WHO).', 'Atas pencapaian ilmiah yang menyelamatkan jutaan nyawa anak-anak dari ancaman DBD, Prof. Adi Utarini dinobatkan oleh majalah TIME sebagai salah satu dari 100 Tokoh Paling Berpengaruh di Dunia (TIME100) dan masuk dalam daftar 10 Ilmuwan Berpengaruh Dunia versi jurnal *Nature*.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2000 — 2010', 'DOKTORAL SWEDIA & GURU BESAR FK-KMK UGM', 'Menyelesaikan studi doktoral di Umeå University Swedia dan dikukuhkan sebagai Guru Besar Ilmu Kesehatan Masyarakat FK-KMK UGM.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2011 — 2020', 'RISET MONUMENTAL WOLBACHIA & PUBLIKASI NEJM', 'Memimpin uji klinis nyamuk ber-Wolbachia di Yogyakarta yang membuktikan efektivitas penurunan kasus DBD hingga 77%.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'TIME100, NATURE''S 10 & IMPLEMENTASI SKALA NASIONAL', 'Meraih pengakuan dunia sebagai ilmuwan terkemuka dan memandu perluasan program pelepasan Wolbachia di kota-kota endemik Indonesia.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Uji Klinis Aplikasi Wolbachia Melawan Demam Berdarah (NEJM)', 'Publikasi Medis Kelas Dunia & Uji Klinis', 'Studi ilmiah acak terkendali efektivitas Wolbachia yang menjadi standar emas rujukan penanganan DBD global oleh WHO.', 'https://www.nejm.org/doi/full/10.1056/NEJMoa2030243', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Menggugah Partisipasi Masyarakat dalam Sains Biomedis', 'Karya Literatur Komunikasi Sains', 'Panduan integrasi riset ilmiah biomedis mutakhir dengan pendekatan sosiologis kader posyandu dan tokoh masyarakat kampung.', 'https://ugm.ac.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Konser Amal & Edukasi Musik ''Membangun Harmoni Kesehatan''', 'Seni Musik & Penggalangan Dana Kemanusiaan', 'Inisiatif pertunjukan piano klasik swadaya Prof. Uut untuk penggalangan dana riset kanker dan beasiswa mahasiswa kedokteran.', 'https://fk.ugm.ac.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjinakkan Nyamuk Bersama Ibu-Ibu Kampung: Rahasia Keberhasilan Riset Wolbachia di Yogyakarta', 'KESEHATAN MASYARAKAT', '8 Menit Membaca', 'Catatan Prof. Adi Utarini tentang bagaimana pendekatan kultural dan transparansi informasi memenangkan kepercayaan warga.', 'Banyak ilmuwan gagal bukan karena hipotesis laboratoriumnya keliru, tapi karena mereka lupa menyapa masyarakat tempat riset itu dijalankan. Di Yogyakarta, kami menitipkan ember-ember telur nyamuk di rumah-rumah warga. Tanpa kerelaan para ibu rumah tangga menjaga ember tersebut di teras rumahnya, sains ini tidak akan pernah menyelamatkan dunia.', '/artikel/adi-utarini-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Daftar TIME100 dan Tanggung Jawab Moral Peneliti Indonesia di Panggung Internasional', 'SAINS & DIPLOMASI', '7 Menit Membaca', 'Refleksi Prof. Adi Utarini tentang pentingnya riset berorientasi pemecahan masalah riil masyarakat kelas bawah.', 'Penghargaan dunia hanyalah pengingat bahwa penderitaan akibat penyakit tropis adalah nyata di negara-negara selatan. Tugas utama periset adalah melahirkan solusi yang terjangkau, aman, dan dapat dinikmati oleh rakyat miskin tanpa terbebani biaya mahal.', '/artikel/adi-utarini-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Uji Klinis Aplikasi Wolbachia Melawan Demam Berdarah (NEJM)', 'Publikasi Medis Kelas Dunia & Uji Klinis', 'Studi ilmiah acak terkendali efektivitas Wolbachia yang menjadi standar emas rujukan penanganan DBD global oleh WHO.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.nejm.org/doi/full/10.1056/NEJMoa2030243', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku: Menggugah Partisipasi Masyarakat dalam Sains Biomedis', 'Karya Literatur Komunikasi Sains', 'Panduan integrasi riset ilmiah biomedis mutakhir dengan pendekatan sosiologis kader posyandu dan tokoh masyarakat kampung.', 'Rp 85.000 — Rp 185.000', 'Dukung Inisiatif', 'https://ugm.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Prof. Ken Kawan Soetanto (prof-ken-soetanto)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'prof-ken-soetanto' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Prof. Ken Kawan Soetanto',
      title = 'Ilmuwan Biomedis Rekayasa Ultrasonik, Pemegang 4 Gelar Doktor & Guru Besar Universitas Waseda Jepang',
      category = 'Duta Talenta',
      quote = 'Pendidikan yang sejati bukan sekadar mengisi kepala murid dengan rumus-rumus dingin, melainkan menyalakan api motivasi di dalam jiwanya agar ia percaya bahwa batas kemampuannya ada di tak terhingga.',
      bio_paragraphs = ARRAY['Kisah hidup Prof. Ken Kawan Soetanto adalah epos ketangguhan intelektual luar biasa. Lahir di Surabaya dari keluarga sederhana, Ken merantau ke Jepang pada dekade 1970-an dengan keterbatasan bahasa dan ekonomi. Lewat kedisiplinan belajar yang ekstrem, ia mencetak rekor akademik dunia yang mencengangkan: meraih 4 gelar Doktor dari universitas-universitas terkemuka di Jepang dalam bidang Teknik Elektro (Tokyo Institute of Technology), Kedokteran (Tokyo Women''s Medical University), Farmasi (Science University of Tokyo), dan Pendidikan (Waseda University).', 'Dalam dunia sains medis terapan, Prof. Soetanto adalah pelopor teknologi agen kontras mikro-gelembung (*microbubbles*) untuk pencitraan ultrasonik presisi tinggi dan terapi penghantaran obat kanker tertarget. Di bidang pendidikan, ia menciptakan ''Metode Efek Soetanto'' (*Soetanto Effect*)—sebuah pedagogi revolusioner yang dirancang untuk membangkitkan rasa percaya diri dan daya nalar mahasiswa yang putus asa.', 'Sebagai salah satu profesor asing paling dihormati di Jepang yang mengajar di Universitas Waseda dan pernah menjadi Dekan di Toin University of Yokohama, Prof. Ken Soetanto adalah bukti hidup kedahsyatan tekad anak bangsa yang menembus benteng tradisi akademik ketat di Negeri Sakura.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('prof-ken-soetanto', 'Prof. Ken Kawan Soetanto', 'Ilmuwan Biomedis Rekayasa Ultrasonik, Pemegang 4 Gelar Doktor & Guru Besar Universitas Waseda Jepang', 'Duta Talenta', 'Pendidikan yang sejati bukan sekadar mengisi kepala murid dengan rumus-rumus dingin, melainkan menyalakan api motivasi di dalam jiwanya agar ia percaya bahwa batas kemampuannya ada di tak terhingga.', ARRAY['Kisah hidup Prof. Ken Kawan Soetanto adalah epos ketangguhan intelektual luar biasa. Lahir di Surabaya dari keluarga sederhana, Ken merantau ke Jepang pada dekade 1970-an dengan keterbatasan bahasa dan ekonomi. Lewat kedisiplinan belajar yang ekstrem, ia mencetak rekor akademik dunia yang mencengangkan: meraih 4 gelar Doktor dari universitas-universitas terkemuka di Jepang dalam bidang Teknik Elektro (Tokyo Institute of Technology), Kedokteran (Tokyo Women''s Medical University), Farmasi (Science University of Tokyo), dan Pendidikan (Waseda University).', 'Dalam dunia sains medis terapan, Prof. Soetanto adalah pelopor teknologi agen kontras mikro-gelembung (*microbubbles*) untuk pencitraan ultrasonik presisi tinggi dan terapi penghantaran obat kanker tertarget. Di bidang pendidikan, ia menciptakan ''Metode Efek Soetanto'' (*Soetanto Effect*)—sebuah pedagogi revolusioner yang dirancang untuk membangkitkan rasa percaya diri dan daya nalar mahasiswa yang putus asa.', 'Sebagai salah satu profesor asing paling dihormati di Jepang yang mengajar di Universitas Waseda dan pernah menjadi Dekan di Toin University of Yokohama, Prof. Ken Soetanto adalah bukti hidup kedahsyatan tekad anak bangsa yang menembus benteng tradisi akademik ketat di Negeri Sakura.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1974 — 1988', 'MERANTAU KE JEPANG & MERAIH 4 GELAR DOKTOR', 'Belajar mandiri di Jepang dan menyelesaikan empat program doktoral dalam rekayasa elektro, kedokteran biomedis, farmasi, dan pedagogi.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1989 — 2005', 'RISET MIKRO-GELEMBUNG ULTRASONIK & DREXEL UNIVERSITY AS', 'Menjadi profesor peneliti di Drexel University AS dan mematenkan teknologi agen kontras ultrasonik untuk deteksi tumor dini.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2006 — 2026', 'GURU BESAR WASEDA UNIVERSITY & SOETANTO METHOD', 'Mengajar ribuan mahasiswa di Waseda University Jepang dan menerbitkan puluhan buku motivasi pendidikan yang menjadi bestseller di Jepang.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Paten Teknologi Microbubble Terapi Kanker Ultrasonik', 'Paten Biomedis Internasional & Terapi Medis', 'Sistem penghantaran obat tertarget memanfaatkan gelombang ultrasonik dan partikel mikro-gelembung untuk membasmi sel kanker tanpa merusak jaringan sehat.', 'https://patents.google.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Metode Pembelajaran Motivasi ''Soetanto Effect''', 'Pedagogi Pendidikan & Psikologi Belajar', 'Metode pendidikan interaktif yang diadopsi di berbagai universitas Jepang untuk mengubah mahasiswa berpestasi rendah menjadi peneliti unggul.', 'https://www.waseda.jp', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku-Buku Bestseller Pendidikan di Jepang (Kodansha & PHP)', 'Literatur Pendidikan & Motivasi Hidup', 'Seri buku ajar dan refleksi hidup yang menginspirasi jutaan pembaca Jepang tentang filosofi ketekunan menuntut ilmu tanpa henti.', 'https://amazon.co.jp', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menaklukkan Tradisi Akademik Jepang: Perjalanan Prof. Ken Soetanto Meraih 4 Gelar Doktor', 'PENDIDIKAN & KETANGGUHAN', '8 Menit Membaca', 'Kisah inspiratif tentang bagaimana anak kampung dari Surabaya menjadi guru besar legendaris di universitas paling bergengsi di Tokyo.', 'Ketika saya pertama kali tiba di Tokyo tanpa bisa berbahasa Jepang, banyak orang meremehkan. Namun saya berprinsip: jika orang lain belajar 5 jam, saya harus belajar 10 jam. Otak manusia itu elastis; yang membedakan keberhasilan adalah seberapa besar rasa lapar jiwamu untuk menyerap ilmu pengetahuan.', '/artikel/prof-ken-soetanto-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Metode Efek Soetanto: Mengapa Kasih Sayang Guru Lebih Berharga daripada Angka Ujian', 'PEDAGOGI BELAJAR', '7 Menit Membaca', 'Bagaimana mengubah murid yang kehilangan arah menjadi peneliti berprestasi dengan memulihkan harga diri mereka terlebih dahulu.', 'Tidak ada anak yang bodoh sejak lahir. Yang ada adalah anak yang jiwanya layu karena sering direndahkan. Sebelum mengajarkan rumus matematika atau biologi yang rumit, seorang pendidik wajib menyalakan kembali rasa percaya diri di dada muridnya.', '/artikel/prof-ken-soetanto-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Paten Teknologi Microbubble Terapi Kanker Ultrasonik', 'Paten Biomedis Internasional & Terapi Medis', 'Sistem penghantaran obat tertarget memanfaatkan gelombang ultrasonik dan partikel mikro-gelembung untuk membasmi sel kanker tanpa merusak jaringan sehat.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://patents.google.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Metode Pembelajaran Motivasi ''Soetanto Effect''', 'Pedagogi Pendidikan & Psikologi Belajar', 'Metode pendidikan interaktif yang diadopsi di berbagai universitas Jepang untuk mengubah mahasiswa berpestasi rendah menjadi peneliti unggul.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://www.waseda.jp', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Rich Brian (Brian Imanuel) (rich-brian)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'rich-brian' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Rich Brian (Brian Imanuel)',
      title = 'Rapper, Produser Musik Global, Rapper Asia Pertama Pemuncak Billboard Hip-Hop & Pilar 88rising',
      category = 'Duta Talenta',
      quote = 'Bila lo belajar bahasa Inggris lewat video YouTube dan internet dari kamar lo di Jakarta, jangan biarkan orang bilang batasan geografis bisa mengurung karya lo. Internet adalah panggung tanpa batas bagi siapa pun yang berani orisinil.',
      bio_paragraphs = ARRAY['Perjalanan Brian Imanuel Soewarno (dikenal sebagai Rich Brian) adalah salah satu anomali paling memukau dalam sejarah musik hip-hop modern. Tumbuh dengan belajar di rumah (*homeschooling*) di Jakarta Barat, Brian belajar merangkai lirik rap dan menguasai bahasa Inggris secara fasih secara otodidak melalui internet, video YouTube, dan rubik.', 'Pada 2016, single debutnya yang viral, ''Dat $tikk'', mengejutkan komunitas hip-hop dunia karena warna suaranya yang berat dan aliran rima (*flow*) yang sangat presisi. Bakat mentahnya diasah bersama label 88rising di Los Angeles, hingga merilis album debut Amen (2018) yang mencetak sejarah spektakuler: menjadikannya musisi Asia pertama dalam sejarah yang menempati peringkat #1 di tangga lagu iTunes Hip-Hop Charts.', 'Melalui album-album lanjutannya seperti The Sailor dan Brightside, Brian bertransformasi dari sekadar sensasi internet menjadi komposer, produser, dan penutur kisah diaspora muda yang disegani di festival-festival musik raksasa dunia dari Head in the Clouds hingga Coachella.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('rich-brian', 'Rich Brian (Brian Imanuel)', 'Rapper, Produser Musik Global, Rapper Asia Pertama Pemuncak Billboard Hip-Hop & Pilar 88rising', 'Duta Talenta', 'Bila lo belajar bahasa Inggris lewat video YouTube dan internet dari kamar lo di Jakarta, jangan biarkan orang bilang batasan geografis bisa mengurung karya lo. Internet adalah panggung tanpa batas bagi siapa pun yang berani orisinil.', ARRAY['Perjalanan Brian Imanuel Soewarno (dikenal sebagai Rich Brian) adalah salah satu anomali paling memukau dalam sejarah musik hip-hop modern. Tumbuh dengan belajar di rumah (*homeschooling*) di Jakarta Barat, Brian belajar merangkai lirik rap dan menguasai bahasa Inggris secara fasih secara otodidak melalui internet, video YouTube, dan rubik.', 'Pada 2016, single debutnya yang viral, ''Dat $tikk'', mengejutkan komunitas hip-hop dunia karena warna suaranya yang berat dan aliran rima (*flow*) yang sangat presisi. Bakat mentahnya diasah bersama label 88rising di Los Angeles, hingga merilis album debut Amen (2018) yang mencetak sejarah spektakuler: menjadikannya musisi Asia pertama dalam sejarah yang menempati peringkat #1 di tangga lagu iTunes Hip-Hop Charts.', 'Melalui album-album lanjutannya seperti The Sailor dan Brightside, Brian bertransformasi dari sekadar sensasi internet menjadi komposer, produser, dan penutur kisah diaspora muda yang disegani di festival-festival musik raksasa dunia dari Head in the Clouds hingga Coachella.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 — 2015', 'HOMESCHOOLING JAKARTA & BELAJAR OTODIDAK DI YOUTUBE', 'Mempelajari komposisi musik, video editing, dan bahasa Inggris dari internet dari rumahnya di Jakarta Barat.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 — 2018', 'VIRAL DAT $TIKK, 88RISING & SEJARAH ALBUM AMEN', 'Menjadi fenomena global dan mencetak sejarah sebagai artis Asia pertama yang memuncaki peringkat #1 Billboard Hip-Hop Charts.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 — 2026', 'ALBUM THE SAILOR, COACHELLA & KELAS DUNIA', 'Merilis album mahakarya The Sailor yang direkam bersama orkestra simfoni dan memimpin panggung festival musik dunia.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album ''The Sailor'' (88rising / 12Tone Music)', 'Album Rekaman Hip-Hop Sinematik', 'Album konsep naratif yang memotret pencarian jati diri perantau muda Asia melintasi samudera mimpi dunia.', 'https://richbrian.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Lagu & Video Musik ''Kids'' (Refleksi Generasi)', 'Karya Musik & Representasi Budaya', 'Lagu reflektif bertenaga tentang anak-anak muda Asia yang mendobrak stereotip global dan menjadi tuan di panggung dunia.', 'https://youtube.com/watch?v=kids', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Soundtrack Film Marvel Studios ''Shang-Chi and The Legend of The Ten Rings''', 'Karya Musik Sinema Hollywood', 'Kolaborasi lagu tema film superhero Hollywood bersama musisi-musisi papan atas global.', 'https://spotify.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Kamar Tidur Jakarta Barat ke Puncak Hip-Hop Dunia: Refleksi Brian Imanuel', 'HIP-HOP & IDENTITAS', '7 Menit Membaca', 'Bagaimana rasa ingin tahu otodidak dan keberanian bereksplorasi mengubah seorang remaja pemalu menjadi bintang dunia.', 'Banyak orang mengira saya punya koneksi industri di Amerika. Faktanya, saya merekam rap pertama saya dengan mikrofon murahan di pojok kamar tidur. Internet telah meratakan lapangan bermain; kualitas eksekusi dan keaslian suaramu adalah satu-satunya mata uang yang berlaku.', '/artikel/rich-brian-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'The Sailor: Metafora Perahu Layar dan Keberanian Berkelana Anak Bangsa', 'KARYA & REPUTASI', '6 Menit Membaca', 'Makna di balik simbol pelaut nusantara dalam karya-karya musik internasional Rich Brian.', 'Nenek moyang kita adalah penjelajah samudera yang tidak gentar menghadapi ombak raksasa. Menghidupkan kembali semangat itu di era modern berarti berani melompat ke arena global tanpa pernah melupakan tanah tempat kakimu pertama kali berpijak.', '/artikel/rich-brian-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Album ''The Sailor'' (88rising / 12Tone Music)', 'Album Rekaman Hip-Hop Sinematik', 'Album konsep naratif yang memotret pencarian jati diri perantau muda Asia melintasi samudera mimpi dunia.', 'Rp 350.000 — Rp 650.000', 'Dukung Inisiatif', 'https://richbrian.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Lagu & Video Musik ''Kids'' (Refleksi Generasi)', 'Karya Musik & Representasi Budaya', 'Lagu reflektif bertenaga tentang anak-anak muda Asia yang mendobrak stereotip global dan menjadi tuan di panggung dunia.', 'Rilisan Digital / Fisik Rp 49.000 — Rp 250.000', 'Dukung Inisiatif', 'https://youtube.com/watch?v=kids', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: William Wongso (william-wongso)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'william-wongso' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'William Wongso',
      title = 'Diplomat Kuliner Tradisional Nusantara, Pakar Gastronomi Legendaris & Penulis Cita Rasa Indonesia',
      category = 'Duta Talenta',
      quote = 'Rendang bukan sekadar masakan daging berbumbu kelapa. Di dalamnya ada kosmologi kesabaran mengaduk kuali selama delapan jam, kearifan rempah rimba tropis, dan harga diri kebudayaan bangsa yang tak ternilai harganya.',
      bio_paragraphs = ARRAY['William Wirjaatmadja Wongso (dikenal luas sebagai William Wongso) adalah raksasa gastronomi nusantara yang mendedikasikan lebih dari lima dekade hidupnya untuk mendokumentasikan, membela, dan mempromosikan keaslian kuliner tradisional Indonesia ke panggung diplomasi internasional. Pria kelahiran Malang ini menjelajahi ribuan desa, pasar tradisional, dan dapur tetua adat dari Sabang sampai Merauke demi meneliti profil rasa bumbu otentik nusantara.', 'Keahliannya diakui secara global oleh para juru masak elit dunia. Ia adalah anggota kehormatan *Chaîne des Rôtisseurs*, penerima penghargaan tertinggi diplomasi kuliner dari pemerintah Prancis (*Chevalier dans l’Ordre National du Mérite*), dan tokoh kunci yang memandu chef legendaris Gordon Ramsay dalam mendalami seni memasak rendang asli di pedalaman Tanah Datar, Sumatra Barat untuk tayangan *National Geographic*.', 'Mahakaryanya, buku *Flavors of Indonesia: William Wongso''s Culinary Wonders*, memenangkan penghargaan paling bergengsi dunia *Gourmand World Cookbook Awards* sebagai Buku Masakan Terbaik Dunia (Best Cookbook of the Year), mengukuhkan rempah nusantara sebagai mahakarya gastronomi peradaban manusia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('william-wongso', 'William Wongso', 'Diplomat Kuliner Tradisional Nusantara, Pakar Gastronomi Legendaris & Penulis Cita Rasa Indonesia', 'Duta Talenta', 'Rendang bukan sekadar masakan daging berbumbu kelapa. Di dalamnya ada kosmologi kesabaran mengaduk kuali selama delapan jam, kearifan rempah rimba tropis, dan harga diri kebudayaan bangsa yang tak ternilai harganya.', ARRAY['William Wirjaatmadja Wongso (dikenal luas sebagai William Wongso) adalah raksasa gastronomi nusantara yang mendedikasikan lebih dari lima dekade hidupnya untuk mendokumentasikan, membela, dan mempromosikan keaslian kuliner tradisional Indonesia ke panggung diplomasi internasional. Pria kelahiran Malang ini menjelajahi ribuan desa, pasar tradisional, dan dapur tetua adat dari Sabang sampai Merauke demi meneliti profil rasa bumbu otentik nusantara.', 'Keahliannya diakui secara global oleh para juru masak elit dunia. Ia adalah anggota kehormatan *Chaîne des Rôtisseurs*, penerima penghargaan tertinggi diplomasi kuliner dari pemerintah Prancis (*Chevalier dans l’Ordre National du Mérite*), dan tokoh kunci yang memandu chef legendaris Gordon Ramsay dalam mendalami seni memasak rendang asli di pedalaman Tanah Datar, Sumatra Barat untuk tayangan *National Geographic*.', 'Mahakaryanya, buku *Flavors of Indonesia: William Wongso''s Culinary Wonders*, memenangkan penghargaan paling bergengsi dunia *Gourmand World Cookbook Awards* sebagai Buku Masakan Terbaik Dunia (Best Cookbook of the Year), mengukuhkan rempah nusantara sebagai mahakarya gastronomi peradaban manusia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1970 — 1990', 'EKSPLORASI GASTRONOMI EROPA & RISET KULINER TRADISIONAL', 'Menempuh pendidikan kuliner dan pembuatan roti di Prancis, Jerman, dan Swiss sebelum mendedikasikan hidup meriset bumbu nusantara.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '1991 — 2015', 'DIPLOMASI KULINER PRESIDENSIAL & DUTA REMPAH', 'Menjadi konsultan jamuan kenegaraan kepresidenan dan memimpin diplomasi promosi makanan Indonesia di kedutaan dan festival dunia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 — 2026', 'BEST COOKBOOK OF THE YEAR & GORDON RAMSAY UNCHARTED', 'Memenangkan Best Cookbook of the Year di ajang Gourmand Awards dan menjadi mentor Gordon Ramsay dalam serial National Geographic.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku ''Flavors of Indonesia: William Wongso''s Culinary Wonders''', 'Literatur Gastronomi Dunia & Best Cookbook of the Year', 'Ensiklopedi kuliner nusantara komprehensif yang membedah keunikan bumbu, teknik memasak purba, dan filosofi makanan daerah.', 'https://www.williamwongso.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Akuisisi Bumbu Otentik ''William Wongso Kuliner'' (Bumbu Siap Pakai)', 'Hilirisasi Kuliner Tradisional Mandiri', 'Inisiatif standardisasi bumbu pasta rempah tradisional nusantara siap masak tanpa pengawet sintetis untuk pasar global.', 'https://williamwongso.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Mentoring Gordon Ramsay: Uncharted Sumatra Barat (National Geographic)', 'Diplomasi Budaya & Tayangan Televisi Global', 'Edisi khusus penayangan kuliner rendang Minang otentik yang disaksikan oleh puluhan juta pemirsa di seluruh dunia.', 'https://www.nationalgeographic.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjaga Kemurnian Rempah Leluhur: Catatan 50 Tahun Perjalanan Dapur William Wongso', 'GASTRONOMI NUSANTARA', '8 Menit Membaca', 'Kisah perburuan bumbu asli di pasar-pasar tradisional pedalaman dan perlawanan terhadap simplifikasi bumbu instan.', 'Kuliner kita kaya bukan karena teknik kimianya, tapi karena kita dianugerahi tanah vulkanik paling subur untuk rempah terbaik di dunia. Menghilangkan asam kandis pada masakan Sumatra atau melupakan daun mangkokan pada kuliner Jawa adalah pengkhianatan terhadap warisan rasa leluhur.', '/artikel/william-wongso-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Diplomasi Rendang di Meja Perjamuan Dunia: Mengapa Makanan Adalah Bahasa Tertinggi Bangsa', 'DIPLOMASI BUDAYA', '7 Menit Membaca', 'Bagaimana sepiring kuliner tradisional mampu meruntuhkan sekat diplomasi politik dan membuka pintu penghormatan bangsa-bangsa.', 'Saat para pemimpin negara mencicipi rendang yang dimasak dengan kesabaran api kayu, mereka tidak hanya mengecap makanan yang lezat; mereka sedang mengecap sejarah panjang perdagangan rempah nusantara yang pernah menggerakkan peradaban dunia.', '/artikel/william-wongso-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku ''Flavors of Indonesia: William Wongso''s Culinary Wonders''', 'Literatur Gastronomi Dunia & Best Cookbook of the Year', 'Ensiklopedi kuliner nusantara komprehensif yang membedah keunikan bumbu, teknik memasak purba, dan filosofi makanan daerah.', 'Rp 85.000 — Rp 185.000', 'Dukung Inisiatif', 'https://www.williamwongso.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Akuisisi Bumbu Otentik ''William Wongso Kuliner'' (Bumbu Siap Pakai)', 'Hilirisasi Kuliner Tradisional Mandiri', 'Inisiatif standardisasi bumbu pasta rempah tradisional nusantara siap masak tanpa pengawet sintetis untuk pasar global.', 'Karya Budaya / Mulai Rp 75.000', 'Dukung Inisiatif', 'https://williamwongso.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

COMMIT;
