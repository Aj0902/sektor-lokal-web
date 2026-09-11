-- SQL Batch for laci_05_arsitek_usaha_mandiri
BEGIN;

-- Figure: Singgih Susilo Kartono (singgih-susilo-kartono)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'singgih-susilo-kartono' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Singgih Susilo Kartono',
      title = 'Pendiri Spedagi, Magno Design & Penggagas Pasar Papringan Temanggung',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Karya berstandar kelas dunia tidak harus lahir dari gedung pencakar langit kota metropolitan; ia bisa berakar kokoh dari pelosok dusun desa tempat kita memuliakan tanah dan bambu sendiri.',
      bio_paragraphs = ARRAY['Setelah menyelesaikan studi Desain Produk di ITB dan meraih berbagai tawaran karier mapan di kota besar, Singgih Susilo Kartono memilih jalan yang dianggap anomali: pulang ke kampung halamannya di Dusun Kandangan, Temanggung, Jawa Tengah. Ia menolak anggapan bahwa masa depan cerah hanya milik mereka yang melakukan urbanisasi.', 'Dari bengkel kerjanya di desa, Singgih merancang radio kayu Magno yang memenangkan penghargaan desain tertinggi dunia seperti Good Design Award Jepang dan Brit Insurance Design of the Year London. Ia kemudian melahirkan Spedagi, sepeda bambu lestari yang telah teruji melintasi rute Paris-Brest-Paris 1.200 km, serta merekayasa sosial revitalisasi perdesaan melalui Pasar Papringan, sebuah pasar kuliner dan kriya tradisional bebas plastik yang menggerakkan perputaran ekonomi miliaran rupiah bagi ratusan warga desa.', 'Bagi generasi muda, Singgih Susilo Kartono adalah bapak gerakan desa kreatif: membuktikan bahwa kemandirian lokal, kelestarian material bambu, dan desain industri presisi mampu mengangkat harkat desa menjadi mercusuar peradaban dunia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('singgih-susilo-kartono', 'Singgih Susilo Kartono', 'Pendiri Spedagi, Magno Design & Penggagas Pasar Papringan Temanggung', 'Arsitek Usaha Mandiri', 'Karya berstandar kelas dunia tidak harus lahir dari gedung pencakar langit kota metropolitan; ia bisa berakar kokoh dari pelosok dusun desa tempat kita memuliakan tanah dan bambu sendiri.', ARRAY['Setelah menyelesaikan studi Desain Produk di ITB dan meraih berbagai tawaran karier mapan di kota besar, Singgih Susilo Kartono memilih jalan yang dianggap anomali: pulang ke kampung halamannya di Dusun Kandangan, Temanggung, Jawa Tengah. Ia menolak anggapan bahwa masa depan cerah hanya milik mereka yang melakukan urbanisasi.', 'Dari bengkel kerjanya di desa, Singgih merancang radio kayu Magno yang memenangkan penghargaan desain tertinggi dunia seperti Good Design Award Jepang dan Brit Insurance Design of the Year London. Ia kemudian melahirkan Spedagi, sepeda bambu lestari yang telah teruji melintasi rute Paris-Brest-Paris 1.200 km, serta merekayasa sosial revitalisasi perdesaan melalui Pasar Papringan, sebuah pasar kuliner dan kriya tradisional bebas plastik yang menggerakkan perputaran ekonomi miliaran rupiah bagi ratusan warga desa.', 'Bagi generasi muda, Singgih Susilo Kartono adalah bapak gerakan desa kreatif: membuktikan bahwa kemandirian lokal, kelestarian material bambu, dan desain industri presisi mampu mengangkat harkat desa menjadi mercusuar peradaban dunia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2004 - 2008', 'KELAHIRAN RADIO KAYU MAGNO & PENGHARGAAN DUNIA', 'Merancang radio kayu Magno di Temanggung, diekspor ke puluhan negara dan meraih Good Design Award Jepang serta D&AD Yellow Pencil di London.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 - 2018', 'SEPEDA BAMBU SPEDAGI & KELAHIRAN PASAR PAPRINGAN', 'Menciptakan sepeda bambu Spedagi berstandar uji Jerman dan menyulap kebun bambu kumuh menjadi Pasar Papringan berbasis koin pring.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2026', 'ICVRD & EKOSISTEM DESA LESTARI NUSANTARA', 'Memimpin International Conference on Village Revitalization (ICVRD) dan menduplikasi model ekonomi Spedagi ke berbagai penjuru Indonesia.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Spedagi Bamboo Bicycle (Sepeda Bambu Lestari)', 'Desain Industri Kriya Mobilitas Hijau', 'Sepeda bambu berstandar internasional yang mengintegrasikan kekuatan serat bambu lokal Temanggung dengan estetika desain modern.', 'https://spedagi.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pasar Papringan Temanggung', 'Rekayasa Sosial & Pasar Tradisional Bebas Plastik', 'Destinasi ekonomi komunal dua mingguan di tengah kebun bambu yang memberdayakan ratusan ibu-ibu desa menggunakan mata uang koin bambu.', 'https://pasarpapringan.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Magno Wooden Radio & Craft', 'Kriya Kayu Berkelanjutan & Reboisasi Desa', 'Perangkat audio kayu kerajinan tangan berpresisi tinggi dengan program penanaman kembali pohon untuk setiap kayu yang dipanen.', 'https://magno-design.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membangun dari Dusun: Mengapa Menjadi Tuan di Desa Sendiri Jauh Lebih Keren dari Urbanisasi', 'REVITALISASI DESA', '8 Menit Membaca', 'Filosofi Singgih Susilo Kartono tentang potensi ekonomi perdesaan yang mandiri dan berdaya saing global.', 'Urbanisasi massal telah mengosongkan desa-desa kita dari pemuda-pemuda cerdasnya. Ketika sarjana desa kembali dan mengolah bambu serta tanah kelahirannya dengan desain industri yang matang, desa tidak lagi menjadi wilayah tertinggal, melainkan pusat penciptaan karya bernilai tinggi.', '/artikel/singgih-susilo-kartono-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Falsafah Pasar Papringan: Mengembalikan Kebun Bambu Menjadi Ruang Perjumpaan Manusia', 'EKONOMI KOMUNAL', '7 Menit Membaca', 'Bagaimana kebun bambu kotor yang dulunya tempat pembuangan sampah disulap menjadi ruang ekonomi beromzet ratusan juta rupiah.', 'Pasar Papringan bukan sekadar tempat jual beli makanan tradisional; ia adalah ruang rekonsiliasi manusia dengan alamnya. Mengharamkan kantong plastik dan menggunakan wadah daun pisang serta koin bambu adalah latihan hidup selaras dengan alam.', '/artikel/singgih-susilo-kartono-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Spedagi Bamboo Bicycle (Sepeda Bambu Lestari)', 'Desain Industri Kriya Mobilitas Hijau', 'Sepeda bambu berstandar internasional yang mengintegrasikan kekuatan serat bambu lokal Temanggung dengan estetika desain modern.', 'Rp 7.500.000 - Rp 14.500.000', 'Dukung Inisiatif', 'https://spedagi.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Pasar Papringan Temanggung', 'Rekayasa Sosial & Pasar Tradisional Bebas Plastik', 'Destinasi ekonomi komunal dua mingguan di tengah kebun bambu yang memberdayakan ratusan ibu-ibu desa menggunakan mata uang koin bambu.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://pasarpapringan.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Helianti Hilman (helianti-hilman)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'helianti-hilman' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Helianti Hilman',
      title = 'Pendiri JAVARA Indigenous Indonesia & Pelopor Pangan Pusaka Nusantara',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Kedaulatan pangan bangsa ini terkubur dalam benih pusaka leluhur; saat beras merah dan rempah lokal disajikan di meja dunia, nusantara sedang menegakkan martabat kedaulatan tanahnya.',
      bio_paragraphs = ARRAY['Meninggalkan karier mapan sebagai konsultan hukum ekonomi internasional, Helianti Hilman tergerak nuraninya saat menjelajahi pelosok perdesaan nusantara dan mendapati para petani tua menyimpan ribuan varietas benih pusaka (heritage seeds) tanaman pangan yang terancam punah akibat penyeragaman benih hibrida industri.', 'Pada 2008, Helianti mendirikan JAVARA Indigenous Indonesia. Ia membangun ekosistem rantai pasok pangan organik yang bermitra dengan lebih dari 50.000 petani kecil, nelayan tradisional, dan perajin pangan lokal di seluruh Indonesia. Helianti mengkurasi ratusan produk pangan warisan, mulai dari beras pusaka beraneka warna, gula kelapa kristal, garam laut vulkanik, hingga rempah liar, dan membawanya menembus rak-rak ritel premium di lebih dari 35 negara.', 'Dianugerahi Ernst & Young Social Entrepreneur of the Year dan Schwab Foundation Social Innovator di Davos, Helianti membuktikan bahwa kekayaan hayati pangan leluhur adalah komoditas bernilai tambah tertinggi bila dikelola dengan standar mutu modern.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('helianti-hilman', 'Helianti Hilman', 'Pendiri JAVARA Indigenous Indonesia & Pelopor Pangan Pusaka Nusantara', 'Arsitek Usaha Mandiri', 'Kedaulatan pangan bangsa ini terkubur dalam benih pusaka leluhur; saat beras merah dan rempah lokal disajikan di meja dunia, nusantara sedang menegakkan martabat kedaulatan tanahnya.', ARRAY['Meninggalkan karier mapan sebagai konsultan hukum ekonomi internasional, Helianti Hilman tergerak nuraninya saat menjelajahi pelosok perdesaan nusantara dan mendapati para petani tua menyimpan ribuan varietas benih pusaka (heritage seeds) tanaman pangan yang terancam punah akibat penyeragaman benih hibrida industri.', 'Pada 2008, Helianti mendirikan JAVARA Indigenous Indonesia. Ia membangun ekosistem rantai pasok pangan organik yang bermitra dengan lebih dari 50.000 petani kecil, nelayan tradisional, dan perajin pangan lokal di seluruh Indonesia. Helianti mengkurasi ratusan produk pangan warisan, mulai dari beras pusaka beraneka warna, gula kelapa kristal, garam laut vulkanik, hingga rempah liar, dan membawanya menembus rak-rak ritel premium di lebih dari 35 negara.', 'Dianugerahi Ernst & Young Social Entrepreneur of the Year dan Schwab Foundation Social Innovator di Davos, Helianti membuktikan bahwa kekayaan hayati pangan leluhur adalah komoditas bernilai tambah tertinggi bila dikelola dengan standar mutu modern.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2008', 'PENDIRIAN JAVARA INDIGENOUS INDONESIA', 'Membangun Javara dengan modal swadaya, mendokumentasikan benih pusaka petani lokal dari Aceh hingga Papua.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 - 2018', 'EKSPOR PANGAN ORGANIK GLOBAL & EY AWARD', 'Mengekspor lebih dari 200 produk pangan pusaka bersertifikat organik ke Eropa, AS, dan Jepang serta meraih EY Social Entrepreneur of the Year.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2026', 'SEKOLAH PANGAN ALAMI & AKADEMI TANI MUDA', 'Mendirikan Javara Academy untuk melatih petani muda dan perempuan desa dalam mengolah bahan pangan lokal menjadi produk bernilai tambah ekspor.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'JAVARA Indigenous Indonesia (Pangan Pusaka Nusantara)', 'Agribisnis Pangan Organik & Ekspor Heritage', 'Kurasi produk pangan alami terbesar di Indonesia yang memasok beras pusaka, garam artisanal, dan rempah liar ke pasar dunia.', 'https://javara.co.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Javara Academy & Sekolah Wirausaha Pangan Desa', 'Pendidikan Vokasi Agribisnis & Pelestarian Benih', 'Inkubator bisnis yang melatih ribuan keluarga petani mengadopsi standar sertifikasi organik internasional dan pengolahan pangan.', 'https://javara.co.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Arsip Keanekaragaman Benih Pusaka (Heritage Seeds Bank)', 'Konservasi Plasma Nutfah Tanaman Pangan', 'Repositori benih tanaman pangan pusaka tradisional tahan perubahan iklim yang dilindungi dari kepunahan industri.', 'https://javara.co.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menyelamatkan Benih Leluhur: Mengapa Keanekaragaman Hayati Pangan Adalah Senjata Melawan Krisis Iklim', 'KEDAULATAN PANGAN', '8 Menit Membaca', 'Pentingnya mempertahankan varietas beras dan umbi lokal yang tahan hama alami tanpa ketergantungan pupuk kimia.', 'Revolusi hijau telah menyeragamkan ribuan varietas beras kita menjadi segelintir benih hibrida yang rentan kekeringan dan bergantung pada pestisida kimia. Memuliakan kembali benih pusaka warisan leluhur adalah satu-satunya jaminan ketahanan pangan bangsa kita di masa depan.', '/artikel/helianti-hilman-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Dapur Desa Menembus Pasar Dunia: Cara Membangun Produk Pangan Lokal Berstandar Ekspor', 'AGRIBISNIS SIRKULAR', '7 Menit Membaca', 'Strategi Helianti Hilman mengemas kearifan garam artisanal dan gula semut kelapa menjadi produk bernilai tinggi.', 'Petani kita tidak boleh selamanya hanya menjadi penjual gabah mentah dengan harga murah. Memberi sentuhan pengolahan higienis dan sertifikasi organik adalah cara menaikkan derajat ekonomi keluarga tani menjadi bermartabat.', '/artikel/helianti-hilman-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'JAVARA Indigenous Indonesia (Pangan Pusaka Nusantara)', 'Agribisnis Pangan Organik & Ekspor Heritage', 'Kurasi produk pangan alami terbesar di Indonesia yang memasok beras pusaka, garam artisanal, dan rempah liar ke pasar dunia.', 'Rp 35.000 - Rp 165.000 / pack', 'Dukung Inisiatif', 'https://javara.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Javara Academy & Sekolah Wirausaha Pangan Desa', 'Pendidikan Vokasi Agribisnis & Pelestarian Benih', 'Inkubator bisnis yang melatih ribuan keluarga petani mengadopsi standar sertifikasi organik internasional dan pengolahan pangan.', 'Rp 35.000 - Rp 165.000 / pack', 'Dukung Inisiatif', 'https://javara.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Azalea Ayuningtyas (azalea-ayuningtyas)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'azalea-ayuningtyas' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Azalea Ayuningtyas',
      title = 'Co-founder & CEO Du''Anyam (Pemberdayaan Kriya Anyaman Lontar & Kesehatan Ibu-Anak NTT)',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Menganyam daun lontar di pelosok Flores Timur bukan sekadar melestarikan seni kriya etnik, melainkan instrumen memutus rantai kemiskinan dan malnutrisi ibu-anak melalui kedaulatan ekonomi perempuan.',
      bio_paragraphs = ARRAY['Setelah menyelesaikan studi di Harvard T.H. Chan School of Public Health di Amerika Serikat, Azalea Ayuningtyas (akrab disapa Ayu) memilih tidak menetap di luar negeri. Ia langsung terjun ke pelosok Flores Timur, Nusa Tenggara Timur, daerah dengan angka kematian ibu melahirkan dan malnutrisi anak yang sangat tinggi.', 'Ayu menyadari bahwa akar masalah malnutrisi pada ibu hamil adalah kemiskinan struktural: ibu-ibu desa tidak memiliki penghasilan tunai mandiri untuk membeli makanan bergizi. Melihat potensi keahlian menganyam daun lontar yang diwarisi turun-temurun, Ayu bersama rekan-rekannya mendirikan Du''Anyam pada 2014.', 'Du''Anyam menghubungkan ribuan ibu penganyam lontar di pelosok NTT dengan pasar B2B perhotelan, korporasi nasional, hingga suvenir resmi Asian Games. Keuntungan penjualan dialokasikan langsung untuk makanan bergizi, pemeriksaan kehamilan rutin, dan beasiswa anak. Ayu membuktikan kekuatan wirausaha sosial: mengubah anyaman daun lontar menjadi penyelamat nyawa generasi masa depan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('azalea-ayuningtyas', 'Azalea Ayuningtyas', 'Co-founder & CEO Du''Anyam (Pemberdayaan Kriya Anyaman Lontar & Kesehatan Ibu-Anak NTT)', 'Arsitek Usaha Mandiri', 'Menganyam daun lontar di pelosok Flores Timur bukan sekadar melestarikan seni kriya etnik, melainkan instrumen memutus rantai kemiskinan dan malnutrisi ibu-anak melalui kedaulatan ekonomi perempuan.', ARRAY['Setelah menyelesaikan studi di Harvard T.H. Chan School of Public Health di Amerika Serikat, Azalea Ayuningtyas (akrab disapa Ayu) memilih tidak menetap di luar negeri. Ia langsung terjun ke pelosok Flores Timur, Nusa Tenggara Timur, daerah dengan angka kematian ibu melahirkan dan malnutrisi anak yang sangat tinggi.', 'Ayu menyadari bahwa akar masalah malnutrisi pada ibu hamil adalah kemiskinan struktural: ibu-ibu desa tidak memiliki penghasilan tunai mandiri untuk membeli makanan bergizi. Melihat potensi keahlian menganyam daun lontar yang diwarisi turun-temurun, Ayu bersama rekan-rekannya mendirikan Du''Anyam pada 2014.', 'Du''Anyam menghubungkan ribuan ibu penganyam lontar di pelosok NTT dengan pasar B2B perhotelan, korporasi nasional, hingga suvenir resmi Asian Games. Keuntungan penjualan dialokasikan langsung untuk makanan bergizi, pemeriksaan kehamilan rutin, dan beasiswa anak. Ayu membuktikan kekuatan wirausaha sosial: mengubah anyaman daun lontar menjadi penyelamat nyawa generasi masa depan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014', 'PENDIRIAN DU''ANYAM DI FLORES TIMUR', 'Merintis Du''Anyam di pelosok NTT bersama Melia Winata dan Hanna Keraf, mengorganisir puluhan ibu penganyam daun lontar pertama.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018', 'MERCHANDISE RESMI ASIAN GAMES & FORBES 30U30', 'Du''Anyam terpilih sebagai merchandise resmi Asian Games 2018 dan Ayu masuk dalam daftar bergengsi Forbes 30 Under 30 Asia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2026', 'EKSPANSI KARYA ANYAMAN & PLATFORM KRIYA DIGITAL', 'Memberdayakan lebih dari 1.500 perempuan perajin anyaman di NTT, Papua, dan Kalimantan Barat serta meluncurkan platform B2B kriya.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Du''Anyam (Wirausaha Sosial Kriya Daun Lontar)', 'Wirausaha Sosial & Kriya Anyaman Inklusif', 'Brand kriya sosial yang memasok produk anyaman berkualitas tinggi untuk sektor hospitality global dan suvenir korporasi.', 'https://duanyam.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Intervensi Gizi & Kesehatan Ibu Hamil NTT', 'Kesehatan Masyarakat & Penanganan Stunting', 'Program pemberian paket nutrisi protein dan pendampingan posyandu bagi keluarga penganyam di desa terpencil Flores.', 'https://duanyam.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Krealogi (Digitalisasi Rantai Pasok Kriya UMKM)', 'Platform Ekosistem Digital Perajin', 'Aplikasi manajemen produksi dan pencatatan kas bagi ribuan kelompok perajin kriya akar rumput di berbagai provinsi.', 'https://krealogi.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Anyaman Penyelamat Nyawa: Bagaimana Daun Lontar Memutus Rantai Malnutrisi Ibu di NTT', 'WIRAUSAHA SOSIAL', '7 Menit Membaca', 'Kisah transformatif para ibu penganyam di Flores Timur yang kini mandiri secara finansial dan mampu membiayai kesehatan anaknya.', 'Ketika seorang ibu memiliki penghasilan dari anyamannya sendiri, rupiah pertama yang ia belanjakan adalah untuk membeli telur dan susu bagi anak-anaknya. Memberdayakan perempuan desa adalah investasi paling efektif untuk menghapus stunting dari muka bumi.', '/artikel/azalea-ayuningtyas-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menembus Pasar Korporasi: Menjual Kriya Etnik Bukan Berdasarkan Rasa Kasihan, Tapi Kualitas', 'MANAJEMEN KRIYA', '6 Menit Membaca', 'Pentingnya standardisasi mutu dan kontrol kualitas presisi agar produk perajin desa mampu bersaing di pasar hotel bintang lima.', 'Wirausaha sosial tidak boleh menjual produk atas dasar belas kasihan pembeli. Produk kriya anyaman lontar harus mampu berdiri tegak karena kualitas desain, ketelitian anyaman, dan ketahanan bahannya yang luar biasa.', '/artikel/azalea-ayuningtyas-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Du''Anyam (Wirausaha Sosial Kriya Daun Lontar)', 'Wirausaha Sosial & Kriya Anyaman Inklusif', 'Brand kriya sosial yang memasok produk anyaman berkualitas tinggi untuk sektor hospitality global dan suvenir korporasi.', 'Rp 120.000 - Rp 650.000', 'Dukung Inisiatif', 'https://duanyam.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Program Intervensi Gizi & Kesehatan Ibu Hamil NTT', 'Kesehatan Masyarakat & Penanganan Stunting', 'Program pemberian paket nutrisi protein dan pendampingan posyandu bagi keluarga penganyam di desa terpencil Flores.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://duanyam.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Tissa Aunilla (tissa-aunilla)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'tissa-aunilla' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Tissa Aunilla',
      title = 'Co-founder & Master Chocolatier Pipiltin Cocoa (Pelopor Bean-to-Bar Cokelat Nusantara)',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Indonesia adalah salah satu penghasil kakao terbesar di dunia, namun selama puluhan tahun kita hanya mengekspor biji mentah dan membeli kembali cokelat Eropa dengan harga mahal. Pipiltin hadir untuk membalikkan takdir itu.',
      bio_paragraphs = ARRAY['Meninggalkan karier mapan sebagai pengacara korporasi multinasional, Tissa Aunilla memilih banting setir menekuni seni pembuatan cokelat (chocolatier) hingga menempuh pendidikan profesional di Valrhona Chocolate Academy Prancis. Keputusannya didorong oleh rasa miris: Indonesia adalah produsen biji kakao terbesar ketiga dunia, tetapi rakyatnya tidak mengenal cita rasa cokelat asli berkualitas tinggi.', 'Pada 2013, bersama kakaknya Irvan Helmi (pendiri Anomali Coffee), Tissa mendirikan Pipiltin Cocoa, pelopor produsen cokelat artisan berbasis metode bean-to-bar di Indonesia. Pipiltin membeli biji kakao fermentasi langsung dari petani di Aceh (Pidie), Bali (Tabanan), Jawa Timur (Glenmore), Flores, dan Papua Barat (Ransiki) dengan harga beli di atas standar pasar.', 'Tissa membuktikan bahwa setiap tanah nusantara menghasilkan profil rasa cokelat yang unik, mulai dari fruity, earthy, hingga nutty, dan membawa produk cokelat murni buatan dalam negeri merajai pasar premium ekspor Jepang dan Eropa.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('tissa-aunilla', 'Tissa Aunilla', 'Co-founder & Master Chocolatier Pipiltin Cocoa (Pelopor Bean-to-Bar Cokelat Nusantara)', 'Arsitek Usaha Mandiri', 'Indonesia adalah salah satu penghasil kakao terbesar di dunia, namun selama puluhan tahun kita hanya mengekspor biji mentah dan membeli kembali cokelat Eropa dengan harga mahal. Pipiltin hadir untuk membalikkan takdir itu.', ARRAY['Meninggalkan karier mapan sebagai pengacara korporasi multinasional, Tissa Aunilla memilih banting setir menekuni seni pembuatan cokelat (chocolatier) hingga menempuh pendidikan profesional di Valrhona Chocolate Academy Prancis. Keputusannya didorong oleh rasa miris: Indonesia adalah produsen biji kakao terbesar ketiga dunia, tetapi rakyatnya tidak mengenal cita rasa cokelat asli berkualitas tinggi.', 'Pada 2013, bersama kakaknya Irvan Helmi (pendiri Anomali Coffee), Tissa mendirikan Pipiltin Cocoa, pelopor produsen cokelat artisan berbasis metode bean-to-bar di Indonesia. Pipiltin membeli biji kakao fermentasi langsung dari petani di Aceh (Pidie), Bali (Tabanan), Jawa Timur (Glenmore), Flores, dan Papua Barat (Ransiki) dengan harga beli di atas standar pasar.', 'Tissa membuktikan bahwa setiap tanah nusantara menghasilkan profil rasa cokelat yang unik, mulai dari fruity, earthy, hingga nutty, dan membawa produk cokelat murni buatan dalam negeri merajai pasar premium ekspor Jepang dan Eropa.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013', 'PENDIRIAN PIPILTIN COCOA BEAN-TO-BAR', 'Membangun pabrik pengolahan cokelat bean-to-bar pertama di Jakarta, memperkenalkan transparansi asal-usul biji kakao single origin lokal.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016 - 2020', 'KEMITRAAN PETANI KAKAO RANSIKI PAPUA & BALI', 'Membina kelompok tani kakao di Ransiki Papua Barat dan Tabanan Bali dalam teknik fermentasi biji kakao bermutu tinggi.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'EKSPOR COKELAT ARTISAN NUSANTARA KE JEPANG & EROPA', 'Mengekspor produk cokelat Pipiltin Cocoa ke ratusan gerai ritel di Jepang dan membuka chocolate experience store di tanah air.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pipiltin Cocoa (Cokelat Artisan Bean-to-Bar Nusantara)', 'Manufaktur Cokelat Premium Single Origin', 'Lini produk cokelat murni berbahan 100% kakao lokal tanpa lemak nabati sawit yang mengangkat kekayaan profil tanah kepulauan Indonesia.', 'https://pipiltincocoa.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Kemitraan Fermentasi Petani Kakao Daerah', 'Pemberdayaan Rantai Pasok Petani Kakao', 'Pelatihan standardisasi fermentasi dan pembelian langsung biji kakao dari petani di Aceh, Flores, Bali, dan Papua dengan harga premium.', 'https://pipiltincocoa.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pipiltin Chocolate Experience & Edukasi Gastronomi', 'Pusat Literasi Cokelat & Kuliner Nusantara', 'Ruang edukasi rasa bagi publik untuk memahami perbedaan cokelat industri sarat gula dengan cokelat murni berkarakter tanah lokal.', 'https://pipiltincocoa.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kisah Tanah dalam Sepotong Cokelat: Menjelajahi Profil Rasa Kakao Aceh hingga Papua', 'GASTRONOMI LOKAL', '7 Menit Membaca', 'Pembedahan Tissa Aunilla tentang bagaimana iklim, tanah vulkanik, dan proses fermentasi membentuk cita rasa cokelat nusantara.', 'Cokelat dari Tabanan memiliki aroma buah berry yang segar, sementara cokelat dari Ransiki Papua memiliki rasa tanah earthy yang pekat dan elegan. Menikmati cokelat single origin adalah cara mengapresiasi keanekaragaman geologis bumi pertiwi.', '/artikel/tissa-aunilla-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghentikan Kutukan Ekspor Bahan Mentah: Mengapa Hilirisasi Cokelat Harus Dimulai dari Petani', 'KEDAULATAN EKONOMI', '6 Menit Membaca', 'Pentingnya mengajarkan teknik fermentasi biji kakao agar petani lokal mendapatkan nilai tambah berkali lipat di tanah kelahirannya.', 'Biji kakao yang tidak difermentasi hanya dihargai murah oleh tengkulak. Ketika petani diajari mengontrol suhu fermentasi secara presisi, harga biji kakao mereka melonjak dan mampu membiayai pendidikan anak-anak mereka hingga bangku kuliah.', '/artikel/tissa-aunilla-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Pipiltin Cocoa (Cokelat Artisan Bean-to-Bar Nusantara)', 'Manufaktur Cokelat Premium Single Origin', 'Lini produk cokelat murni berbahan 100% kakao lokal tanpa lemak nabati sawit yang mengangkat kekayaan profil tanah kepulauan Indonesia.', 'Rp 45.000 - Rp 135.000 / bar', 'Dukung Inisiatif', 'https://pipiltincocoa.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Program Kemitraan Fermentasi Petani Kakao Daerah', 'Pemberdayaan Rantai Pasok Petani Kakao', 'Pelatihan standardisasi fermentasi dan pembelian langsung biji kakao dari petani di Aceh, Flores, Bali, dan Papua dengan harga premium.', 'Rp 45.000 - Rp 135.000 / bar', 'Dukung Inisiatif', 'https://pipiltincocoa.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Yukka Harsono (yukka-harsono)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'yukka-harsono' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Yukka Harsono',
      title = 'Co-founder & CEO Brodo Footwear (Pelopor Kebangkitan Sepatu Kulit Lokal Cibaduyut)',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Kualitas karya pengrajin kulit dalam negeri kita tidak pernah kalah dari brand sepatu ternama dunia; yang mereka butuhkan adalah desain modern, kontrol kualitas industri presisi, dan rasa bangga anak bangsa.',
      bio_paragraphs = ARRAY['Bermula dari pengalaman pribadi yang kesulitan mencari sepatu formal berukuran 46 saat hendak menghadiri wisuda Teknik Sipil ITB, Yukka Harsono bersama sahabatnya Putera Dwi Karunia memberanikan diri menjelajahi lorong-lorong bengkel pengrajin sepatu legendaris di Cibaduyut, Bandung.', 'Di Cibaduyut, Yukka menyaksikan keprihatinan mendalam: sentra pengrajin sepatu kulit terbesar di Indonesia itu mati suri dihantam serbuan sepatu impor murah. Maka pada 2010, dengan modal tabungan Rp 7 juta, Yukka mendirikan Brodo Footwear, brand sepatu pria Direct-to-Consumer (D2C) pertama di Indonesia yang mengawinkan desain kontemporer bergaya urban dengan keahlian jahit tangan pengrajin lokal Cibaduyut.', 'Brodo berkembang menjadi ikon kebangkitan brand lokal Indonesia, mempekerjakan ratusan pengrajin sepatu daerah dan terpilih sebagai sepatu resmi kontingen Indonesia di ajang Olimpiade. Yukka membuktikan bahwa anak muda mampu membangun brand manufaktur alas kaki yang bermartabat dan menjadi kebanggaan nasional.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('yukka-harsono', 'Yukka Harsono', 'Co-founder & CEO Brodo Footwear (Pelopor Kebangkitan Sepatu Kulit Lokal Cibaduyut)', 'Arsitek Usaha Mandiri', 'Kualitas karya pengrajin kulit dalam negeri kita tidak pernah kalah dari brand sepatu ternama dunia; yang mereka butuhkan adalah desain modern, kontrol kualitas industri presisi, dan rasa bangga anak bangsa.', ARRAY['Bermula dari pengalaman pribadi yang kesulitan mencari sepatu formal berukuran 46 saat hendak menghadiri wisuda Teknik Sipil ITB, Yukka Harsono bersama sahabatnya Putera Dwi Karunia memberanikan diri menjelajahi lorong-lorong bengkel pengrajin sepatu legendaris di Cibaduyut, Bandung.', 'Di Cibaduyut, Yukka menyaksikan keprihatinan mendalam: sentra pengrajin sepatu kulit terbesar di Indonesia itu mati suri dihantam serbuan sepatu impor murah. Maka pada 2010, dengan modal tabungan Rp 7 juta, Yukka mendirikan Brodo Footwear, brand sepatu pria Direct-to-Consumer (D2C) pertama di Indonesia yang mengawinkan desain kontemporer bergaya urban dengan keahlian jahit tangan pengrajin lokal Cibaduyut.', 'Brodo berkembang menjadi ikon kebangkitan brand lokal Indonesia, mempekerjakan ratusan pengrajin sepatu daerah dan terpilih sebagai sepatu resmi kontingen Indonesia di ajang Olimpiade. Yukka membuktikan bahwa anak muda mampu membangun brand manufaktur alas kaki yang bermartabat dan menjadi kebanggaan nasional.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010', 'PENDIRIAN BRODO FOOTWEAR DARI CIBADUYUT', 'Memulai produksi sepatu kulit model Signore pertama bermitra dengan pengrajin lokal Cibaduyut Bandung.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2018', 'PELOPOR D2C DIGITAL & OFFICIAL FOOTWEAR ASIAN GAMES', 'Memelopori model bisnis retail online D2C nasional dan menjadi Official Footwear partner resmi Asian Games 2018.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 - 2026', 'EXPANSI BRODO GENTLEMAN STORE & FOOTWEAR OLIMPIADE', 'Membuka jaringan gerai ritel di berbagai kota besar, memproduksi sepatu kontingen atlet Olimpiade, dan merambah ekspor Asia Tenggara.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Brodo Footwear (Brand Sepatu Kulit & Sneakers Lokal)', 'Manufaktur Alas Kaki Kontemporer & Direct-to-Consumer', 'Lini produk sepatu kulit formal, boots, dan sneakers pria dengan standar uji mutu industri yang diproduksi oleh sentra pengrajin lokal Jawa Barat.', 'https://bro.do', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Ekosistem Mitra Pengrajin Kulit Cibaduyut Brodo', 'Pemberdayaan Sentra Manufaktur Tradisional', 'Program standardisasi jahit sol, pola presisi, dan transfer teknologi mesin potong kulit bagi puluhan bengkel pengrajin lokal.', 'https://bro.do', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Beli Lokal & Bangga Buatan Indonesia Movement', 'Advokasi Kemandirian Industri Kreatif Nasional', 'Kampanye kolektif yang mengedukasi generasi muda untuk mengutamakan pembelian produk manufaktur karya anak bangsa.', 'https://bro.do', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghidupkan Kembali Cibaduyut: Kisah Brodo Meruntuhkan Dominasi Sepatu Impor', 'BRAND LOKAL', '7 Menit Membaca', 'Perjalanan Yukka Harsono merintis brand sepatu dari kamar kos hingga menjadi simbol kebanggaan anak muda perkotaan.', 'Sepatu buatan tangan pengrajin kita memiliki jiwa dan ketahanan yang luar biasa. Yang selama ini hilang hanyalah pemosisian merek yang tepat dan konsistensi menjaga mutu. Brodo membuktikan bahwa ketika brand lokal dikelola secara profesional, pasar dalam negeri akan menyambutnya dengan bangga.', '/artikel/yukka-harsono-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Bertahan dari Gempuran Barang Impor Murah: Resep Daya Tahan Industri Manufaktur Lokal', 'STRATEGI BISNIS', '6 Menit Membaca', 'Pentingnya inovasi material, loyalitas komunitas konsumen, dan kepemilikan saluran distribusi mandiri bagi pelaku UMKM.', 'Perang harga dengan barang impor murah dari pabrik raksasa luar negeri adalah bunuh diri bagi pengrajin kecil. Satu-satunya jalan menang adalah membangun kedekatan emosional dengan konsumen dan menjaga cerita otentik di balik setiap pasang sepatu yang diproduksi.', '/artikel/yukka-harsono-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Brodo Footwear (Brand Sepatu Kulit & Sneakers Lokal)', 'Manufaktur Alas Kaki Kontemporer & Direct-to-Consumer', 'Lini produk sepatu kulit formal, boots, dan sneakers pria dengan standar uji mutu industri yang diproduksi oleh sentra pengrajin lokal Jawa Barat.', 'Rp 375.000 - Rp 899.000', 'Dukung Inisiatif', 'https://bro.do', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Ekosistem Mitra Pengrajin Kulit Cibaduyut Brodo', 'Pemberdayaan Sentra Manufaktur Tradisional', 'Program standardisasi jahit sol, pola presisi, dan transfer teknologi mesin potong kulit bagi puluhan bengkel pengrajin lokal.', 'Rp 375.000 - Rp 899.000', 'Dukung Inisiatif', 'https://bro.do', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Dea Valencia (dea-valencia)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'dea-valencia' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dea Valencia',
      title = 'Pendiri Batik Kultur Semarang & Pelopor Wirausaha Fesyen Inklusif Difabel',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Batik bukan sekadar warisan wastra masa lalu, melainkan medium pembebasan sosial di mana kawan-kawan difabel membuktikan bahwa keterbatasan fisik tidak pernah menghalangi lahirnya karya jahit bermutu mahakarya.',
      bio_paragraphs = ARRAY['Mengawali usaha pada usia 17 tahun di Semarang dengan memanfaatkan potongan kain perca batik kuno yang tidak terpakai, Dea Valencia Budiampurnamurni membuktikan naluri wirausaha yang luar biasa. Ia melihat keindahan motif wastra batik tradisional yang terancam punah jika tidak dihadirkan dalam potongan busana siap pakai (ready-to-wear) kontemporer yang elegan.', 'Pada 2011, Dea mendirikan Batik Kultur. Yang membuat Batik Kultur istimewa dan disegani bukan hanya kehalusan detail jahitannya, melainkan komitmen inklusivitasnya yang radikal: lebih dari 50% dari ratusan pekerjanya adalah kawan-kawan penyandang disabilitas (tuli, bisu, dan tuna daksa). Dea merancang bengkel kerja khusus yang ramah disabilitas dan melatih mereka menjadi perajin pola dan penjahit busana berstandar butik tinggi.', 'Masuk dalam daftar Forbes 30 Under 30 Asia, Dea membuktikan bahwa bisnis fesyen mandiri kelas dunia dapat dibangun di atas fondasi keadilan sosial tanpa mengandalkan belas kasihan atau donasi karikatif.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('dea-valencia', 'Dea Valencia', 'Pendiri Batik Kultur Semarang & Pelopor Wirausaha Fesyen Inklusif Difabel', 'Arsitek Usaha Mandiri', 'Batik bukan sekadar warisan wastra masa lalu, melainkan medium pembebasan sosial di mana kawan-kawan difabel membuktikan bahwa keterbatasan fisik tidak pernah menghalangi lahirnya karya jahit bermutu mahakarya.', ARRAY['Mengawali usaha pada usia 17 tahun di Semarang dengan memanfaatkan potongan kain perca batik kuno yang tidak terpakai, Dea Valencia Budiampurnamurni membuktikan naluri wirausaha yang luar biasa. Ia melihat keindahan motif wastra batik tradisional yang terancam punah jika tidak dihadirkan dalam potongan busana siap pakai (ready-to-wear) kontemporer yang elegan.', 'Pada 2011, Dea mendirikan Batik Kultur. Yang membuat Batik Kultur istimewa dan disegani bukan hanya kehalusan detail jahitannya, melainkan komitmen inklusivitasnya yang radikal: lebih dari 50% dari ratusan pekerjanya adalah kawan-kawan penyandang disabilitas (tuli, bisu, dan tuna daksa). Dea merancang bengkel kerja khusus yang ramah disabilitas dan melatih mereka menjadi perajin pola dan penjahit busana berstandar butik tinggi.', 'Masuk dalam daftar Forbes 30 Under 30 Asia, Dea membuktikan bahwa bisnis fesyen mandiri kelas dunia dapat dibangun di atas fondasi keadilan sosial tanpa mengandalkan belas kasihan atau donasi karikatif.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2011', 'PENDIRIAN BATIK KULTUR DARI KAIN PERCA', 'Memulai usaha busana batik di rumahnya di Semarang dengan modal kain perca antik dan merekrut pekerja difabel pertamanya.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2018', 'EKSPANSI WORKSHOP INKLUSIF & FORBES 30 UNDER 30', 'Membangun fasilitas produksi ramah difabel di Semarang dan dianugerahi penghargaan bergengsi Forbes 30 Under 30 Asia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2026', 'BUTIK JAKARTA & EKSPOR WASTRA NUSANTARA DUNIA', 'Membuka galeri butik di Jakarta, melayani puluhan ribu pelanggan internasional di AS, Eropa, dan Asia, serta memberdayakan ratusan perajin difabel.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Batik Kultur by Dea Valencia', 'Fesyen Wastra Kontemporer & Butik Inklusif', 'Brand busana batik ready-to-wear premium yang memadukan kain batik tulis/cap tradisional dengan siluet modern untuk pasar global.', 'https://batikkultur.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Workshop Inklusif Pemberdayaan Difabel Semarang', 'Fasilitas Manufaktur Ramah Disabilitas', 'Sentra produksi garmen yang dirancang ergonomis untuk mempekerjakan puluhan penjahit dan pembuat pola penyandang disabilitas secara setara.', 'https://batikkultur.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Program Pelatihan Vokasi Kriya Difabel Mandiri', 'Pendidikan Keterampilan Kerja Inklusif', 'Pelatihan menjahit busana halus berstandar butik gratis bagi para pemuda difabel dari berbagai pelosok Jawa Tengah.', 'https://batikkultur.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Jahitan Mahakarya dalam Keheningan: Kisah Para Penjahit Tuli di Balik Kemegahan Batik Kultur', 'FESYEN INKLUSIF', '7 Menit Membaca', 'Perjalanan Dea Valencia membangun ruang kerja tanpa suara di mana ketelitian mata dan rasa para difabel menghasilkan busana kelas dunia.', 'Di ruang workshop Batik Kultur yang tenang, komunikasi mengalir lewat bahasa isyarat dan senyuman. Kawan-kawan difabel membuktikan bahwa keterbatasan mendengar justru memberi mereka konsentrasi batin yang luar biasa untuk menghasilkan jahitan jelujur batik yang sangat rapi dan presisi.', '/artikel/dea-valencia-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Bukan Donasi, Tapi Kesempatan Setara: Filosofi Bisnis Inklusif yang Berkelanjutan', 'WIRAUSAHA SOSIAL', '6 Menit Membaca', 'Mengapa penyandang disabilitas berhak mendapatkan gaji standar industri dan jenjang karir profesional yang adil.', 'Memberdayakan kawan-kawan difabel bukan soal memberi santunan uang receh, melainkan memberi mereka meja kerja, mesin jahit, dan kepercayaan bahwa mereka adalah manusia produktif yang mampu menopang keluarganya dengan penuh martabat.', '/artikel/dea-valencia-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Batik Kultur by Dea Valencia', 'Fesyen Wastra Kontemporer & Butik Inklusif', 'Brand busana batik ready-to-wear premium yang memadukan kain batik tulis/cap tradisional dengan siluet modern untuk pasar global.', 'Rp 450.000 - Rp 2.250.000', 'Dukung Inisiatif', 'https://batikkultur.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Workshop Inklusif Pemberdayaan Difabel Semarang', 'Fasilitas Manufaktur Ramah Disabilitas', 'Sentra produksi garmen yang dirancang ergonomis untuk mempekerjakan puluhan penjahit dan pembuat pola penyandang disabilitas secara setara.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://batikkultur.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Nurman Farieka Ramdhany (nurman-farieka-ramdhany)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'nurman-farieka-ramdhany' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Nurman Farieka Ramdhany',
      title = 'Pendiri Hirka Footwear (Inovator Sepatu Kulit Ceker Ayam Pertama di Dunia)',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Limbah ceker ayam yang menumpuk di pasar kuliner bukan sampah busuk; dengan sentuhan sains penyamakan kulit alami, ia berubah menjadi material kulit eksotis bertekstur sisik buaya yang bernilai ekonomi tinggi.',
      bio_paragraphs = ARRAY['Terlahir dalam keluarga perajin penyamakan kulit di Cibaduyut Bandung dan menempuh studi di bidang manajemen bisnis, Nurman Farieka Ramdhany terpantik melihat gunungan sampah kulit ceker ayam yang terbuang percuma setiap hari dari industri kuliner restoran cepat saji dan warung mi ayam.', 'Setelah melakukan riset eksperimen penyamakan kulit mandiri selama berbulan-bulan untuk menghilangkan bau amis dan menyempurnakan kelembutan seratnya, pada 2017 Nurman mendirikan Hirka, brand sepatu kulit pertama di dunia yang memanfaatkan material kulit ceker ayam (chicken feet leather). Tekstur sisik ceker ayam yang eksotis terbukti memiliki kemiripan estetika dengan kulit buaya dan ular tanpa harus membunuh satwa liar terancam punah.', 'Karya sepatu Hirka berhasil menembus pasar ekspor di Eropa, Singapura, dan Hong Kong serta meraih berbagai penghargaan inovasi sirkular internasional. Nurman membuktikan kejeniusan anak bangsa dalam menyulap sampah dapur menjadi komoditas fesyen mewah yang ramah lingkungan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('nurman-farieka-ramdhany', 'Nurman Farieka Ramdhany', 'Pendiri Hirka Footwear (Inovator Sepatu Kulit Ceker Ayam Pertama di Dunia)', 'Arsitek Usaha Mandiri', 'Limbah ceker ayam yang menumpuk di pasar kuliner bukan sampah busuk; dengan sentuhan sains penyamakan kulit alami, ia berubah menjadi material kulit eksotis bertekstur sisik buaya yang bernilai ekonomi tinggi.', ARRAY['Terlahir dalam keluarga perajin penyamakan kulit di Cibaduyut Bandung dan menempuh studi di bidang manajemen bisnis, Nurman Farieka Ramdhany terpantik melihat gunungan sampah kulit ceker ayam yang terbuang percuma setiap hari dari industri kuliner restoran cepat saji dan warung mi ayam.', 'Setelah melakukan riset eksperimen penyamakan kulit mandiri selama berbulan-bulan untuk menghilangkan bau amis dan menyempurnakan kelembutan seratnya, pada 2017 Nurman mendirikan Hirka, brand sepatu kulit pertama di dunia yang memanfaatkan material kulit ceker ayam (chicken feet leather). Tekstur sisik ceker ayam yang eksotis terbukti memiliki kemiripan estetika dengan kulit buaya dan ular tanpa harus membunuh satwa liar terancam punah.', 'Karya sepatu Hirka berhasil menembus pasar ekspor di Eropa, Singapura, dan Hong Kong serta meraih berbagai penghargaan inovasi sirkular internasional. Nurman membuktikan kejeniusan anak bangsa dalam menyulap sampah dapur menjadi komoditas fesyen mewah yang ramah lingkungan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2017', 'RISET PENYAMAKAN KULIT CEKER AYAM & PELUNCURAN HIRKA', 'Menemukan formula penyamakan kulit ceker ayam ramah lingkungan di Bandung dan meluncurkan produk sepatu sneakers Hirka pertama.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2021', 'EKSPOR INTERNASIONAL & PENGHARGAAN CIRCULAR FASHION', 'Meraih penghargaan inovasi wirausaha kreatif nasional dan mengekspor sepatu kulit eksotis ke Prancis, Jerman, dan Singapura.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2026', 'HILIRISASI MATERIAL KULIT SIRKULAR & KERJASAMA GLOBAL', 'Mengembangkan lini dompet, jam tangan, dan memasok lembaran material kulit ceker ayam olahan ke industri fesyen mewah Eropa.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Hirka Footwear (Sepatu Kulit Eksotis Ceker Ayam)', 'Inovasi Manufaktur Material Sirkular & Fesyen Mewah', 'Koleksi sepatu kulit premium berbahan baku limbah ceker ayam dengan pola sisik alami unik yang diproduksi secara handmade di Bandung.', 'https://hirka.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Formula Penyamakan Kulit Unggas Ramah Lingkungan', 'Rekayasa Kimia Kulit Tepat Guna', 'Metode pemrosesan penyamakan kulit ceker ayam tanpa bahan kimia berbahaya kromium yang aman bagi lingkungan dan perajin.', 'https://hirka.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pemberdayaan Rantai Pasok Peternak & Pengepul Unggas', 'Integrasi Ekonomi Sirkular Agroindustri', 'Kerjasama pengumpulan limbah ceker ayam segar dari rumah potong unggas lokal Jawa Barat untuk meningkatkan nilai tambah peternak.', 'https://hirka.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Limbah Mi Ayam Menjadi Sepatu Mewah Dunia: Kisah Riset Penyamakan Kulit Nurman Farieka', 'INOVASI MATERIAL', '7 Menit Membaca', 'Perjalanan ilmiah meracik kulit ceker ayam menjadi material alternatif kulit reptil yang berkelanjutan dan bernilai jutaan rupiah.', 'Industri fesyen mewah dunia selama berabad-abad membantai buaya dan ular demi mendapatkan pola sisik eksotis. Nurman membuktikan bahwa ceker ayam yang dianggap sampah pasar memiliki pola serat yang tak kalah megah bila diolah dengan dedikasi riset sains yang tekun.', '/artikel/nurman-farieka-ramdhany-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Ekonomi Sirkular di Sentra Cibaduyut: Pelajaran Inovasi dari Generasi Penerus Pengrajin Kulit', 'INDUSTRI KREATIF', '6 Menit Membaca', 'Bagaimana generasi muda Bandung menghidupkan kembali tradisi penyamakan kulit dengan prinsip keberlanjutan masa depan.', 'Tradisi kriya kulit tidak boleh mati di tengah perubahan zaman. Menyuntikkan riset material baru dan kepedulian lingkungan adalah cara terbaik bagi anak-anak muda Cibaduyut untuk membawa nama sentra mereka mendunia.', '/artikel/nurman-farieka-ramdhany-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Hirka Footwear (Sepatu Kulit Eksotis Ceker Ayam)', 'Inovasi Manufaktur Material Sirkular & Fesyen Mewah', 'Koleksi sepatu kulit premium berbahan baku limbah ceker ayam dengan pola sisik alami unik yang diproduksi secara handmade di Bandung.', 'Rp 1.450.000 - Rp 3.200.000', 'Dukung Inisiatif', 'https://hirka.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Formula Penyamakan Kulit Unggas Ramah Lingkungan', 'Rekayasa Kimia Kulit Tepat Guna', 'Metode pemrosesan penyamakan kulit ceker ayam tanpa bahan kimia berbahaya kromium yang aman bagi lingkungan dan perajin.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://hirka.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Riza Azyumarridha Azra (riza-azyumarridha-azra)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'riza-azyumarridha-azra' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Riza Azyumarridha Azra',
      title = 'Pendiri & CEO Rumah Mocaf Indonesia (Inovator Rantai Nilai Tepung Singkong Banjarnegara)',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Singkong bukan makanan orang miskin yang tertinggal; dengan fermentasi enzimatik modern, singkong lokal adalah tepung bebas gluten masa depan yang membebaskan bangsa ini dari jeratan impor gandum.',
      bio_paragraphs = ARRAY['Sepulang menempuh studi sarjana dan magister di bidang Teknik Elektro, Riza Azyumarridha Azra merasa teriris hatinya saat kembali ke tanah kelahirannya di Banjarnegara, Jawa Tengah, dan melihat para petani singkong menangis karena harga jual singkong anjlok hingga Rp 200 per kilogram saat panen raya, jauh di bawah biaya tanam.', 'Riza menolak membiarkan para petani terlilit utang tengkulak. Pada 2014, ia mendirikan Rumah Mocaf Indonesia. Riza memperkenalkan teknologi fermentasi enzimatik organik untuk mengolah singkong segar menjadi Modified Cassava Flour (Mocaf), tepung serbaguna bebas gluten (gluten-free) berkualitas tinggi yang mampu menggantikan tepung terigu gandum impor.', 'Melalui model koperasi terintegrasi, Rumah Mocaf kini membina ribuan petani dan ibu-ibu pengolah singkong di puluhan desa di Banjarnegara, menyerap ribuan ton singkong dengan harga beli yang adil, serta mengekspor tepung Mocaf dan produk turunannya (mi dan kukis bebas gluten) ke Inggris, Dubai, dan Turki.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('riza-azyumarridha-azra', 'Riza Azyumarridha Azra', 'Pendiri & CEO Rumah Mocaf Indonesia (Inovator Rantai Nilai Tepung Singkong Banjarnegara)', 'Arsitek Usaha Mandiri', 'Singkong bukan makanan orang miskin yang tertinggal; dengan fermentasi enzimatik modern, singkong lokal adalah tepung bebas gluten masa depan yang membebaskan bangsa ini dari jeratan impor gandum.', ARRAY['Sepulang menempuh studi sarjana dan magister di bidang Teknik Elektro, Riza Azyumarridha Azra merasa teriris hatinya saat kembali ke tanah kelahirannya di Banjarnegara, Jawa Tengah, dan melihat para petani singkong menangis karena harga jual singkong anjlok hingga Rp 200 per kilogram saat panen raya, jauh di bawah biaya tanam.', 'Riza menolak membiarkan para petani terlilit utang tengkulak. Pada 2014, ia mendirikan Rumah Mocaf Indonesia. Riza memperkenalkan teknologi fermentasi enzimatik organik untuk mengolah singkong segar menjadi Modified Cassava Flour (Mocaf), tepung serbaguna bebas gluten (gluten-free) berkualitas tinggi yang mampu menggantikan tepung terigu gandum impor.', 'Melalui model koperasi terintegrasi, Rumah Mocaf kini membina ribuan petani dan ibu-ibu pengolah singkong di puluhan desa di Banjarnegara, menyerap ribuan ton singkong dengan harga beli yang adil, serta mengekspor tepung Mocaf dan produk turunannya (mi dan kukis bebas gluten) ke Inggris, Dubai, dan Turki.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 - 2017', 'PENDIRIAN RUMAH MOCAF & PENDAMPINGAN DESA', 'Merintis Rumah Mocaf di Banjarnegara, melatih kelompok tani pertama dalam memfermentasi singkong secara higienis.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 - 2021', 'SERTIFIKASI ORGANIK & EKSPOR INTERNASIONAL', 'Meraih sertifikasi organik internasional, bebas gluten, dan menembus pasar ekspor Eropa dan Timur Tengah.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 - 2026', 'PABRIK MOCAF TERPADU & KEDAULATAN TEPUNG LOKAL', 'Mengoperasikan fasilitas pengolahan tepung singkong modern berkapasitas ratusan ton per bulan dan membina jaringan petani di Jawa Tengah.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Rumah Mocaf Indonesia (Tepung Singkong Bebas Gluten)', 'Agroindustri Pangan Lokal & Hilirisasi Pertanian', 'Produsen tepung singkong fermentasi organik pengganti terigu gandum bersertifikat bebas gluten yang memasok industri roti dan kue global.', 'https://rumahmocaf.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Mocafine & Lini Pangan Olahan Gluten-Free', 'Produk Konsumen Sehat Berbasis Singkong', 'Produk turunan tepung Mocaf berupa mi sehat non-gandum, tepung bumbu krispi, dan kue kering untuk gaya hidup sehat dan penderita autisme.', 'https://rumahmocaf.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Koperasi Petani Singkong Banjarnegara Berdaya', 'Pemberdayaan Ekonomi Komunal Perdesaan', 'Model rantai pasok terintegrasi yang menjamin kepastian harga beli singkong stabil bagi ribuan petani kecil di Jawa Tengah.', 'https://rumahmocaf.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Melawan Hegemoni Gandum Impor: Bagaimana Singkong Banjarnegara Menjadi Tepung Masa Depan Dunia', 'KEDAULATAN PANGAN', '7 Menit Membaca', 'Pembedahan potensi tepung Mocaf Riza Azra dalam mengurangi ketergantungan miliaran dolar impor gandum Indonesia.', 'Indonesia mengimpor lebih dari 10 juta ton gandum setiap tahun karena kita tidak bisa menanam gandum di iklim tropis. Menggantinya dengan tepung singkong Mocaf lokal bukan hanya menyehatkan tubuh karena bebas gluten, melainkan mengalirkan triliunan rupiah langsung ke kantong petani desa.', '/artikel/riza-azyumarridha-azra-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Rp 200 Menjadi Komoditas Ekspor: Mengubah Nasib Petani Singkong Lewat Fermentasi', 'INOVASI AGRIBISNIS', '6 Menit Membaca', 'Kisah perjuangan meyakinkan para petani desa untuk beralih memproduksi tepung fermentasi higienis.', 'Kunci memutus kemiskinan perdesaan adalah hilirisasi di tingkat petani. Ketika singkong tidak lagi dijual mentah melainkan diolah menjadi serpihan chip kering terfermentasi di rumah-rumah warga, nilai tambah ekonomi tetap berputar di dalam desa.', '/artikel/riza-azyumarridha-azra-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Rumah Mocaf Indonesia (Tepung Singkong Bebas Gluten)', 'Agroindustri Pangan Lokal & Hilirisasi Pertanian', 'Produsen tepung singkong fermentasi organik pengganti terigu gandum bersertifikat bebas gluten yang memasok industri roti dan kue global.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://rumahmocaf.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Mocafine & Lini Pangan Olahan Gluten-Free', 'Produk Konsumen Sehat Berbasis Singkong', 'Produk turunan tepung Mocaf berupa mi sehat non-gandum, tepung bumbu krispi, dan kue kering untuk gaya hidup sehat dan penderita autisme.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://rumahmocaf.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Stefanie Kurniadi (stefanie-kurniadi)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'stefanie-kurniadi' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Stefanie Kurniadi',
      title = 'Co-founder Foodizz (Akademi Edukasi Bisnis Kuliner) & Serial Culinary Entrepreneur',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Membangun bisnis kuliner bukan sekadar urusan resep masakan yang enak; ia adalah sains manajemen rantai pasok, kepatuhan finansial, standardisasi SOP, dan ketahanan membaca psikologi konsumen.',
      bio_paragraphs = ARRAY['Setelah sukses merintis dan membesarkan berbagai jenama kuliner lokal ternama di Bandung dan Jakarta, mulai dari Warunk Upnormal, Bakso Boedjangan, hingga Sambal Khas Karmila, Stefanie Kurniadi menyaksikan fakta menyedihkan di lapangan: lebih dari 80% pengusaha kuliner pemula di Indonesia gulung tikar dalam tahun pertama karena minimnya literasi sains bisnis terapan.', 'Pada 2018, Stefanie bersama rekan-rekannya mendirikan Foodizz (The 1st F&B EduTech in Indonesia). Melalui Foodizz, Stefanie mengkodifikasi belasan tahun pengalaman jatuh-bangun membangun ratusan gerai kuliner ke dalam kurikulum pembelajaran digital yang terstruktur, mudah dipahami, dan dapat dieksekusi langsung oleh pelaku UMKM makanan-minuman.', 'Melalui kelas-kelas inkubasi, podcast edukasi, dan buku panduan bisnis kuliner, Stefanie telah membimbing lebih dari 500.000 pengusaha kuliner di seluruh Indonesia agar mampu membangun bisnis makanan yang berumur panjang, taat pajak, dan mampu membuka jutaan lapangan kerja mandiri.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('stefanie-kurniadi', 'Stefanie Kurniadi', 'Co-founder Foodizz (Akademi Edukasi Bisnis Kuliner) & Serial Culinary Entrepreneur', 'Arsitek Usaha Mandiri', 'Membangun bisnis kuliner bukan sekadar urusan resep masakan yang enak; ia adalah sains manajemen rantai pasok, kepatuhan finansial, standardisasi SOP, dan ketahanan membaca psikologi konsumen.', ARRAY['Setelah sukses merintis dan membesarkan berbagai jenama kuliner lokal ternama di Bandung dan Jakarta, mulai dari Warunk Upnormal, Bakso Boedjangan, hingga Sambal Khas Karmila, Stefanie Kurniadi menyaksikan fakta menyedihkan di lapangan: lebih dari 80% pengusaha kuliner pemula di Indonesia gulung tikar dalam tahun pertama karena minimnya literasi sains bisnis terapan.', 'Pada 2018, Stefanie bersama rekan-rekannya mendirikan Foodizz (The 1st F&B EduTech in Indonesia). Melalui Foodizz, Stefanie mengkodifikasi belasan tahun pengalaman jatuh-bangun membangun ratusan gerai kuliner ke dalam kurikulum pembelajaran digital yang terstruktur, mudah dipahami, dan dapat dieksekusi langsung oleh pelaku UMKM makanan-minuman.', 'Melalui kelas-kelas inkubasi, podcast edukasi, dan buku panduan bisnis kuliner, Stefanie telah membimbing lebih dari 500.000 pengusaha kuliner di seluruh Indonesia agar mampu membangun bisnis makanan yang berumur panjang, taat pajak, dan mampu membuka jutaan lapangan kerja mandiri.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 - 2017', 'MEMBESARKAN WARUNK UPNORMAL & JARINGAN F&B', 'Ikut merintis dan membangun jaringan ratusan gerai kuliner modern berbasis warung kopi lokal di puluhan kota Indonesia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 - 2020', 'PENDIRIAN FOODIZZ THE F&B EDUTECH', 'Meluncurkan platform edukasi bisnis kuliner pertama di Indonesia, membagikan modul manajemen rantai pasok dan pemasaran F&B.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 - 2026', 'INKUBASI RATUSAN RIBU UMKM KULINER NASIONAL', 'Memimpin program inkubasi wirausaha kuliner daerah dan menerbitkan belasan buku panduan operasional F&B teruji.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Foodizz (Akademi Bisnis Kuliner Digital)', 'EduTech Wirausaha F&B & Inkubator Bisnis', 'Platform pembelajaran digital komprehensif yang melatih ratusan ribu pengusaha kuliner dalam tata kelola operasional, HPP, dan scaling-up.', 'https://foodizz.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku Panduan: 10 Langkah Membangun Bisnis Kuliner yang Berkelanjutan', 'Buku Bisnis Terapan & Manajemen F&B', 'Karya literatur praktis membedah cara menghitung Food Cost, standardisasi resep, dan manajemen kas restoran.', 'https://foodizz.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Podcast Foodizz & Serial Edukasi Kuliner Gratis', 'Kanal Literasi Wirausaha Publik', 'Ratusan episode bedah kasus bisnis kuliner riil yang diakses jutaan pelaku usaha makanan kecil di seluruh pelosok tanah air.', 'https://youtube.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mengapa Enak Saja Tidak Cukup: Membongkar 5 Kesalahan Fatal Pemula Bisnis Kuliner', 'BISNIS KULINER', '7 Menit Membaca', 'Panduan analisis Stefanie Kurniadi tentang pentingnya mengontrol HPP, limbah dapur, dan manajemen arus kas.', 'Banyak orang membuka restoran karena merasa masakannya dipuji teman-teman. Namun ketika restoran dibuka, ujian sebenarnya adalah matematika bisnis: bagaimana mengunci persentase biaya bahan baku di bawah 35% dan menjaga konsistensi rasa saat memasak 1.000 porsi per hari.', '/artikel/stefanie-kurniadi-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membangun Brand F&B yang Berumur Panjang: Menolak Terjebak Tren Makanan Viral Sesaat', 'STRATEGI MEREK', '6 Menit Membaca', 'Cara merancang menu inti yang dicintai pelanggan setia dan bertahan melampaui siklus tren musiman media sosial.', 'Makanan viral yang mengandalkan sensasi media sosial biasanya hanya bertahan 6 bulan sebelum ditinggalkan pelanggan. Bisnis kuliner yang hebat dibangun di atas kenyamanan rasa sehari-hari yang membuat pelanggan selalu ingin kembali lagi.', '/artikel/stefanie-kurniadi-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Foodizz (Akademi Bisnis Kuliner Digital)', 'EduTech Wirausaha F&B & Inkubator Bisnis', 'Platform pembelajaran digital komprehensif yang melatih ratusan ribu pengusaha kuliner dalam tata kelola operasional, HPP, dan scaling-up.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://foodizz.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Buku Panduan: 10 Langkah Membangun Bisnis Kuliner yang Berkelanjutan', 'Buku Bisnis Terapan & Manajemen F&B', 'Karya literatur praktis membedah cara menghitung Food Cost, standardisasi resep, dan manajemen kas restoran.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://foodizz.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

-- Figure: Goris Mustaqim (goris-mustaqim)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'goris-mustaqim' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Goris Mustaqim',
      title = 'Pendiri Asgar Muda Foundation & Pelopor Kewirausahaan Sosial Pemuda Garut',
      category = 'Arsitek Usaha Mandiri',
      quote = 'Pemuda daerah tidak perlu berbondong-bondong merantau ke Jakarta untuk mencari sesuap nasi; gali potensi unggulan tanah kelahiranmu dan jadilah tuan di tanah sendiri.',
      bio_paragraphs = ARRAY['Setelah menyelesaikan pendidikan di Teknik Sipil ITB dan meraih berbagai tawaran karier korporasi multinasional, Goris Mustaqim memilih pulang ke kampung halamannya di Garut, Jawa Barat. Ia resah melihat tingginya angka pengangguran pemuda desa dan fenomena urbanisasi liar yang memicu kerentanan sosial.', 'Pada 2007, Goris mendirikan Asgar Muda Foundation (Asal Garut Muda), sebuah inkubator kewirausahaan sosial pemuda pertama di tingkat kabupaten. Goris memetakan komoditas unggulan lokal Garut, mulai dari sentra kerajinan kulit Sukaregang, perkebunan minyak akar wangi (vetiver) kelas dunia, hingga agribisnis jeruk dan domba Garut, dan melatih ribuan pemuda desa menjadi wirausahawan mandiri.', 'Diakui sebagai Young Global Leader oleh World Economic Forum (WEF) di Davos dan menerima penghargaan dari Presiden RI, Goris membuktikan bahwa desentralisasi ekonomi kreatif perdesaan adalah kunci pemerataan kemakmuran bangsa.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('goris-mustaqim', 'Goris Mustaqim', 'Pendiri Asgar Muda Foundation & Pelopor Kewirausahaan Sosial Pemuda Garut', 'Arsitek Usaha Mandiri', 'Pemuda daerah tidak perlu berbondong-bondong merantau ke Jakarta untuk mencari sesuap nasi; gali potensi unggulan tanah kelahiranmu dan jadilah tuan di tanah sendiri.', ARRAY['Setelah menyelesaikan pendidikan di Teknik Sipil ITB dan meraih berbagai tawaran karier korporasi multinasional, Goris Mustaqim memilih pulang ke kampung halamannya di Garut, Jawa Barat. Ia resah melihat tingginya angka pengangguran pemuda desa dan fenomena urbanisasi liar yang memicu kerentanan sosial.', 'Pada 2007, Goris mendirikan Asgar Muda Foundation (Asal Garut Muda), sebuah inkubator kewirausahaan sosial pemuda pertama di tingkat kabupaten. Goris memetakan komoditas unggulan lokal Garut, mulai dari sentra kerajinan kulit Sukaregang, perkebunan minyak akar wangi (vetiver) kelas dunia, hingga agribisnis jeruk dan domba Garut, dan melatih ribuan pemuda desa menjadi wirausahawan mandiri.', 'Diakui sebagai Young Global Leader oleh World Economic Forum (WEF) di Davos dan menerima penghargaan dari Presiden RI, Goris membuktikan bahwa desentralisasi ekonomi kreatif perdesaan adalah kunci pemerataan kemakmuran bangsa.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;
  DELETE FROM initiatives_warga WHERE profile_id = v_profile_id;
  DELETE FROM testimonials_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2007', 'PENDIRIAN ASGAR MUDA FOUNDATION', 'Mendirikan wadah pembinaan wirausaha pemuda di Garut, mencegah urbanisasi pemuda berpendidikan ke kota besar.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2010 - 2014', 'YOUNG GLOBAL LEADER WORLD ECONOMIC FORUM', 'Dianugerahi penghargaan Young Global Leader di Davos atas model kewirausahaan sosial berbasis potensi komoditas daerah.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 - 2026', 'PENGEMBANGAN SENTRA KULIT & AGRIBISNIS AKAR WANGI', 'Memodernisasi rantai pasok industri kerajinan kulit Sukaregang dan ekspor minyak atsiri akar wangi Garut ke pasar kosmetik internasional.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Asgar Muda Foundation (Inkubator Wirausaha Pemuda Garut)', 'Pemberdayaan Pemuda Perdesaan & Inkubasi Bisnis', 'Yayasan sosial yang telah mencetak ribuan wirausahawan muda di Jawa Barat berbasis potensi agribisnis dan kriya lokal.', 'https://asgarmuda.org', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sentra Kerajinan Kulit Sukaregang Berdaya', 'Modernisasi Kriya Tradisional Daerah', 'Program peningkatan standar desain dan akses pemasaran digital bagi puluhan bengkel perajin jaket dan tas kulit di Garut.', 'https://sektorlokal.id', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Klaster Agribisnis Minyak Atsiri Akar Wangi (Vetiver Garut)', 'Pengembangan Komoditas Ekspor Perdesaan', 'Pemberdayaan petani lereng Gunung Cikuray dalam memproduksi minyak akar wangi berkualitas tinggi untuk industri parfum dunia.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mencegah Eksodus Pemuda Desa: Kisah Sukses Mengubah Potensi Garut Menjadi Lapangan Kerja Riil', 'KEWIRAUSAHAAN SOSIAL', '7 Menit Membaca', 'Refleksi Goris Mustaqim tentang bagaimana menghentikan fenomena brain drain pemuda perdesaan ke kota-kota besar.', 'Desa akan tetap miskin bila setiap anak mudanya yang pintar memilih pergi ke kota dan tidak pernah kembali. Ketika pemuda terdidik pulang dan berkolaborasi dengan kearifan petani lokal, desa akan bertransformasi menjadi lumbung kemakmuran yang mandiri.', '/artikel/goris-mustaqim-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Emas Hijau dari Lereng Cikuray: Menjaga Kualitas Minyak Akar Wangi Terbaik Dunia', 'KOMODITAS LOKAL', '6 Menit Membaca', 'Potensi ekspor minyak vetiver Garut yang menjadi bahan baku utama industri wewangian mewah Paris dan New York.', 'Tanah vulkanik Garut menghasilkan minyak akar wangi dengan kualitas aroma terbaik di muka bumi. Mengolahnya menjadi minyak suling murni di dalam negeri membuktikan bahwa bumi kita kaya akan anugerah yang tiada duanya.', '/artikel/goris-mustaqim-2', 2);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Asgar Muda Foundation (Inkubator Wirausaha Pemuda Garut)', 'Pemberdayaan Pemuda Perdesaan & Inkubasi Bisnis', 'Yayasan sosial yang telah mencetak ribuan wirausahawan muda di Jawa Barat berbasis potensi agribisnis dan kriya lokal.', 'Rp 150.000 - Rp 1.200.000', 'Dukung Inisiatif', 'https://asgarmuda.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1);
  INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
  VALUES (v_profile_id, 'Sentra Kerajinan Kulit Sukaregang Berdaya', 'Modernisasi Kriya Tradisional Daerah', 'Program peningkatan standar desain dan akses pemasaran digital bagi puluhan bengkel perajin jaket dan tas kulit di Garut.', 'Rp 150.000 - Rp 1.200.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2);
END $$;

COMMIT;
