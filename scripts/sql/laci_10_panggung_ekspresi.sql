-- SQL Batch for laci_10_panggung_ekspresi
BEGIN;

-- Figure: Arief Muhammad (arief-muhammad)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'arief-muhammad' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Arief Muhammad',
      title = 'Pelopor Kreator Digital, Maestro Pemasaran Viral Organik & Pendiri Rumah Makan Padang Payakumbuah',
      category = 'Panggung Ekspresi',
      quote = 'Bikin konten viral itu gampang kalau modal sensasi sampah. Yang susah itu merawat reputasi dan mengonversi perhatian jutaan orang di layar menjadi perputaran ekonomi riil yang menghidupi ratusan keluarga karyawan di dunia nyata.',
      bio_paragraphs = ARRAY['Perjalanan Arief Muhammad adalah cetak biru paling legendaris dalam evolusi kreator digital Indonesia. Dimulai dari balik anonimitas akun Twitter @Poconggg pada dekade 2000-an yang melahirkan buku bestseller nasional, sarjana hukum Universitas Trisakti ini tidak pernah terjebak dalam nostalgia satu era. Ia secara konsisten membaca pergeseran algoritma media sosial dari Twitter, blog, YouTube, hingga Instagram.', 'Kekuatan utama Arief terletak pada kejeniusannya merancang strategi pemasaran gerilya (*guerrilla marketing*) dan narasi organik yang tidak terasa seperti iklan paksaan. Dari ''iklan baliho politik'' satire yang mempromosikan merek pakaian Makna hingga tradisi lelang mobil ikonis ''ikoy-ikoyan'' yang menjadi tren berbagi nasional, Arief membuktikan bahwa perhatian publik (*attention economy*) dapat dikelola secara elegan.', 'Puncaknya, ia memvalidasi pengaruh digitalnya ke sektor riil dengan mendirikan jaringan kuliner Rumah Makan Padang Payakumbuah—mengangkat cita rasa dan bahan baku otentik dari petani dan peternak Sumatra Barat menjadi jaringan restoran modern bernilai miliaran rupiah yang membuka ratusan lapangan kerja lokal.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('arief-muhammad', 'Arief Muhammad', 'Pelopor Kreator Digital, Maestro Pemasaran Viral Organik & Pendiri Rumah Makan Padang Payakumbuah', 'Panggung Ekspresi', 'Bikin konten viral itu gampang kalau modal sensasi sampah. Yang susah itu merawat reputasi dan mengonversi perhatian jutaan orang di layar menjadi perputaran ekonomi riil yang menghidupi ratusan keluarga karyawan di dunia nyata.', ARRAY['Perjalanan Arief Muhammad adalah cetak biru paling legendaris dalam evolusi kreator digital Indonesia. Dimulai dari balik anonimitas akun Twitter @Poconggg pada dekade 2000-an yang melahirkan buku bestseller nasional, sarjana hukum Universitas Trisakti ini tidak pernah terjebak dalam nostalgia satu era. Ia secara konsisten membaca pergeseran algoritma media sosial dari Twitter, blog, YouTube, hingga Instagram.', 'Kekuatan utama Arief terletak pada kejeniusannya merancang strategi pemasaran gerilya (*guerrilla marketing*) dan narasi organik yang tidak terasa seperti iklan paksaan. Dari ''iklan baliho politik'' satire yang mempromosikan merek pakaian Makna hingga tradisi lelang mobil ikonis ''ikoy-ikoyan'' yang menjadi tren berbagi nasional, Arief membuktikan bahwa perhatian publik (*attention economy*) dapat dikelola secara elegan.', 'Puncaknya, ia memvalidasi pengaruh digitalnya ke sektor riil dengan mendirikan jaringan kuliner Rumah Makan Padang Payakumbuah—mengangkat cita rasa dan bahan baku otentik dari petani dan peternak Sumatra Barat menjadi jaringan restoran modern bernilai miliaran rupiah yang membuka ratusan lapangan kerja lokal.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2009 — 2012', 'ERA ANONIM POCONGGG, BUKU LARIS & FILM LAYAR LEBAR', 'Membangun fenomena kultur internet Twitter lewat akun anonim @Poconggg dan merilis novel laris yang diadaptasi ke bioskop.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 — 2020', 'TRANSISI KREATOR YOUTUBE & STRATEGI PEMASARAN VIRAL', 'Menjadi pelopor vlogging otomotif dan gaya hidup, serta memelopori kampanye pemasaran gerilya yang merevolusi agensi digital.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'DUTA KULINER MINANG & EKSPANSI PAYAKUMBUAH', 'Dinobatkan sebagai Duta Kuliner Minangkabau dan mengekspansi puluhan cabang RM Padang Payakumbuah berbasis pasokan lokal.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Jaringan Rumah Makan Padang Payakumbuah', 'Kewirausahaan Kuliner & Rantai Pasok Lokal', 'Jaringan restoran Minang modern yang menggunakan bahan baku otentik (beras solok, cabai keriting, kelapa) langsung dari petani Sumatra Barat.', 'https://payakumbuah.id', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Gerakan Berbagi Digital ''Ikoy-Ikoyan''', 'Aksi Solidaritas & Filantropi Kreator', 'Fenomena berbagi rezeki tanpa syarat di media sosial yang membantu ribuan warga terdampak ekonomi krisis pandemi.', 'https://instagram.com/ariefmuhammad', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Brand Fesyen Prepp Studio & Billionaire''s Project', 'Brand Fesyen Lokal & Pemasaran Gerilya', 'Merek pakaian pria mandiri yang menguasai pasar urban anak muda lewat strategi peluncuran produk tematik viral.', 'https://preppstudio.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mengubah Jutaan Followers Jadi Lapangan Kerja Riil: Rahasia Bisnis Arief Muhammad', 'BISNIS KREATIF', '8 Menit Membaca', 'Bagaimana menjembatani popularitas media sosial yang fana menjadi aset fisik, pabrik, dan restoran yang tahan banting.', 'Banyak kreator kaget saat algoritmanya turun dan pemasukannya lenyap. Saya selalu memandang media sosial sebagai corong pemasaran, bukan tujuan akhir. Tujuan akhir adalah membangun bisnis riil dengan tata kelola profesional dan rantai pasok mandiri.', '/artikel/arief-muhammad-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Duta Kuliner Minang: Menjaga Standar Rasa Otentik di Era Waralaba Cepat Saji', 'KULINER TRADISIONAL', '7 Menit Membaca', 'Pentingnya mempertahankan beras Solok dan bumbu asli Sumatra Barat di tengah godaan kompromi efisiensi biaya.', 'Membuat masakan Padang di Jakarta bukan berarti boleh menurunkan kualitas bumbu demi margin keuntungan. Rasa otentik adalah kehormatan budaya. Jika kita kompromi dengan bahan baku tiruan, kita sedang membohongi lidah para penikmat kuliner warisan leluhur.', '/artikel/arief-muhammad-2', 2);
END $$;

-- Figure: Denny Sumargo (denny-sumargo)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'denny-sumargo' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Denny Sumargo',
      title = 'Mantan Atlet Basket Timnas, Aktor Sinema & Pengampu Siniar Resolusi Konflik ''Curhat Bang''',
      category = 'Panggung Ekspresi',
      quote = 'Gua tidak pernah menempatkan diri sebagai hakim moral atas tamu yang datang. Ruang dengar ini ada agar setiap manusia yang pernah terpuruk punya kesempatan menceritakan lukanya tanpa harus dihakimi sebelum selesai bicara.',
      bio_paragraphs = ARRAY['Perjalanan Denny Sumargo adalah kisah tentang kelahiran kembali seorang pejuang. Dikenal di panggung olahraga sebagai bintang bola basket nasional dan legenda klub Satria Muda serta Aspac, pria asal Makassar ini berhasil mengantarkan timnya meraih berbagai gelar juara liga tertinggi Indonesia. Namun titik balik hidupnya teruji ketika ia didera berbagai skandal fitnah dan pembunuhan karakter yang hampir menghancurkan kariernya.', 'Alih-alih tenggelam dalam kepahitan, Denny menata ulang hidupnya melalui seni peran sinema (membintangi 5 cm, A Man Called Ahok, hingga Miracle in Cell No. 7) dan kemudian mendirikan kanal siniar ''Curhat Bang Denny Sumargo''. Di ruang dengar ini, Denny bertransformasi menjadi salah satu pewawancara paling disegani di Indonesia.', 'Kekuatan unik Denny terletak pada empati lapangan, ketulusan mendengarkan, dan keberanian menghadirkan pihak-pihak yang berseteru dalam satu meja tanpa sensasionalisme murahan—menjadikan kanalnya sebagai ruang mediasi publik dan rekonsiliasi kemanusiaan yang dipercaya jutaan warga.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('denny-sumargo', 'Denny Sumargo', 'Mantan Atlet Basket Timnas, Aktor Sinema & Pengampu Siniar Resolusi Konflik ''Curhat Bang''', 'Panggung Ekspresi', 'Gua tidak pernah menempatkan diri sebagai hakim moral atas tamu yang datang. Ruang dengar ini ada agar setiap manusia yang pernah terpuruk punya kesempatan menceritakan lukanya tanpa harus dihakimi sebelum selesai bicara.', ARRAY['Perjalanan Denny Sumargo adalah kisah tentang kelahiran kembali seorang pejuang. Dikenal di panggung olahraga sebagai bintang bola basket nasional dan legenda klub Satria Muda serta Aspac, pria asal Makassar ini berhasil mengantarkan timnya meraih berbagai gelar juara liga tertinggi Indonesia. Namun titik balik hidupnya teruji ketika ia didera berbagai skandal fitnah dan pembunuhan karakter yang hampir menghancurkan kariernya.', 'Alih-alih tenggelam dalam kepahitan, Denny menata ulang hidupnya melalui seni peran sinema (membintangi 5 cm, A Man Called Ahok, hingga Miracle in Cell No. 7) dan kemudian mendirikan kanal siniar ''Curhat Bang Denny Sumargo''. Di ruang dengar ini, Denny bertransformasi menjadi salah satu pewawancara paling disegani di Indonesia.', 'Kekuatan unik Denny terletak pada empati lapangan, ketulusan mendengarkan, dan keberanian menghadirkan pihak-pihak yang berseteru dalam satu meja tanpa sensasionalisme murahan—menjadikan kanalnya sebagai ruang mediasi publik dan rekonsiliasi kemanusiaan yang dipercaya jutaan warga.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2000 — 2011', 'JUARA BOLA BASKET NASIONAL & TIMNAS INDONESIA', 'Menjadi bintang guard legendaris di kompetisi IBL, menjuarai liga berkali-kali bersama Satria Muda dan memperkuat Timnas Basket.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2012 — 2019', 'SINEMA INDONESIA & PEMBUKTIAN AKTING PIALA CITRA', 'Menempuh karir akting layar lebar yang diakui kritis lewat peran emosional di 5 cm dan memenangkan penghargaan Indonesian Movie Actor Awards.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 — 2026', 'SINIAR CURHAT BANG & RUANG REKONSILIASI PUBLIK', 'Membangun kanal podcast berorientasi humaniora dan penuntasan konflik keluarga/sosial yang menjadi rujukan perbincangan publik nasional.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Siniar ''Curhat Bang Denny Sumargo'' (Ruang Mediasi Publik)', 'Talkshow Humaniora & Mediasi Masalah Sosial', 'Platform dialog intim jutaan penonton yang mengangkat kisah-kisah perjuangan hidup, penebusan dosa masa lalu, dan resolusi konflik sosial.', 'https://youtube.com/@curhatbang', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Peran Sinema ''A Man Called Ahok'' & ''Miracle in Cell No. 7''', 'Seni Peran Layar Lebar', 'Penampilan akting dramatis berkarakter kuat yang menuai apresiasi luas dari kritikus film dan festival perfilman nasional.', 'https://www.imdb.com/name/nm5436605', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Gerakan Bantuan Medis & Kemanusiaan Warga Prasejahtera', 'Aksi Sosial & Filantropi Spontan', 'Inisiatif penggalangan dana langsung dan pendampingan advokasi pengobatan medis darurat bagi narasumber podcast yang membutuhkan.', 'https://youtube.com/@curhatbang', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Seni Mendengarkan Tanpa Menghakimi: Catatan di Balik Meja Siniar Denny Sumargo', 'HUMANIORA & DIALOG', '8 Menit Membaca', 'Mengapa memberi ruang bicara bagi orang yang sedang terpojok adalah bentuk pertolongan pertama bagi kesehatan mental.', 'Saat seseorang datang dengan sejuta masalah dan hujatan publik di pundaknya, hal pertama yang dia butuhkan bukanlah penceramah, melainkan manusia lain yang mau menatap matanya dan mendengarkan keluh kesahnya secara utuh tanpa mencuri panggung.', '/artikel/denny-sumargo-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kekuatan Penebusan Diri: Dari Lapangan Basket ke Perjalanan Menjadi Manusia Lebih Baik', 'REFLEKSI HIDUP', '7 Menit Membaca', 'Kisah Denny menghadapi titik terendah dalam hidup dan bagaimana kegagalan membentuk kedewasaan emosional.', 'Jatuh dan difitnah itu sakit sekali. Tapi kalau lo tidak melarikan diri dan memilih berdamai dengan rasa sakit itu, lo akan keluar sebagai manusia yang punya empati lebih besar pada penderitaan orang lain.', '/artikel/denny-sumargo-2', 2);
END $$;

-- Figure: Diwantara Anugrah Putra (Tara Arts) (diwantara-anugrah-putra)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'diwantara-anugrah-putra' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Diwantara Anugrah Putra (Tara Arts)',
      title = 'Pelopor Kreator Efek Visual Otodidak, Master Sinematografi Komedi & Pendiri Tara Arts',
      category = 'Panggung Ekspresi',
      quote = 'Bikin efek visual itu bukan soal spek komputer mahal puluhan juta. Ini soal imajinasi liar dan ketekunan belajar di malam hari saat orang lain sudah tidur lelap.',
      bio_paragraphs = ARRAY['Diwantara Anugrah Putra (dikenal akrab sebagai Bang Tara) adalah legenda hidup komunitas kreator digital Indonesia yang telah menginspirasi puluhan ribu pembuat video mandiri sejak era awal YouTube pada 2009. Berbekal komputer rakitan sederhana dan kegemaran membaca manual software grafis di kamar tidurnya di Karawaci, Tangerang, Tara mempelajari teknik compositing, rotoscoping, dan 3D visual effects murni secara otodidak.', 'Lewat kanal Tara Arts Movie dan Tara Arts Game Indonesia bersama saudaranya Gema, Tara menyajikan konten hiburan berbasis keahlian visual tingkat tinggi yang dibalut humor spontan khas Betawi-Indonesia yang hangat dan bersahabat. Video parodi efek visualnya seperti pertarungan lightsaber dan sihir Harry Potter versi lokal ditonton puluhan juta kali jauh sebelum tren kreator konten merebak di tanah air.', 'Konsistensi Tara Arts selama lebih dari 15 tahun tanpa pernah mengorbankan kesantunan, kreativitas orisinil, dan kehangatan keluarga menjadikannya panutan moral bagi generasi kreator video muda di Indonesia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('diwantara-anugrah-putra', 'Diwantara Anugrah Putra (Tara Arts)', 'Pelopor Kreator Efek Visual Otodidak, Master Sinematografi Komedi & Pendiri Tara Arts', 'Panggung Ekspresi', 'Bikin efek visual itu bukan soal spek komputer mahal puluhan juta. Ini soal imajinasi liar dan ketekunan belajar di malam hari saat orang lain sudah tidur lelap.', ARRAY['Diwantara Anugrah Putra (dikenal akrab sebagai Bang Tara) adalah legenda hidup komunitas kreator digital Indonesia yang telah menginspirasi puluhan ribu pembuat video mandiri sejak era awal YouTube pada 2009. Berbekal komputer rakitan sederhana dan kegemaran membaca manual software grafis di kamar tidurnya di Karawaci, Tangerang, Tara mempelajari teknik compositing, rotoscoping, dan 3D visual effects murni secara otodidak.', 'Lewat kanal Tara Arts Movie dan Tara Arts Game Indonesia bersama saudaranya Gema, Tara menyajikan konten hiburan berbasis keahlian visual tingkat tinggi yang dibalut humor spontan khas Betawi-Indonesia yang hangat dan bersahabat. Video parodi efek visualnya seperti pertarungan lightsaber dan sihir Harry Potter versi lokal ditonton puluhan juta kali jauh sebelum tren kreator konten merebak di tanah air.', 'Konsistensi Tara Arts selama lebih dari 15 tahun tanpa pernah mengorbankan kesantunan, kreativitas orisinil, dan kehangatan keluarga menjadikannya panutan moral bagi generasi kreator video muda di Indonesia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2008 — 2011', 'BELAJAR VFX OTODIDAK & KANAL TARA ARTS MOVIE', 'Mempelajari software After Effects secara mandiri dan memproduksi film-film pendek beranimasi efek visual tinggi yang memukau komunitas internet awal.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2012 — 2018', 'TARA ARTS GAME INDONESIA & KOMUNITAS GAMING POSITIF', 'Mendirikan kanal gaming berorientasi hiburan ramah keluarga yang mengedukasi generasi muda tentang apresiasi narasi video game.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 — 2026', 'TUTORIAL VFX GRATIS & EKOSISTEM KREATOR MANDIRI', 'Secara konsisten membagikan ribuan jam tutorial efek visual gratis dan menyelenggarakan kompetisi video pendek untuk mengasah bakat animator lokal.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kanal Hiburan & Serial Film Pendek VFX ''Tara Arts Movie''', 'Produksi Film Pendek Efek Visual Mandiri', 'Koleksi ratusan video parodi aksi dan sains fiksi mandiri dengan standar compositing visual effect internasional.', 'https://youtube.com/@taraartsmovie', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Tara Arts Game Indonesia (Platform Gaming Komedi)', 'Kreator Konten & Komunitas Video Interaktif', 'Kanal gaming legendaris dengan jutaan subscriber yang mengedepankan etika bermain sportif dan komedi improvisasi santun.', 'https://youtube.com/@taraartsgameindonesia', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Modul Edukasi Belajar Efek Visual Komputasi untuk Pemula', 'Pendidikan Kreatif & Repositori Tutorial', 'Seri video edukasi praktis mengajarkan dasar-dasar animasi 3D, CGI, dan editing video bagi anak-anak muda daerah tanpa biaya.', 'https://youtube.com/@taraarts', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Magis di Balik Layar Hijau: 15 Tahun Perjalanan Tara Arts Membangun Komunitas Kreatif', 'EFEK VISUAL & SENI', '7 Menit Membaca', 'Bagaimana kecintaan murni pada efek film melahirkan salah satu komunitas kreator paling solid dan loyal di Indonesia.', 'Di masa awal, merender video 30 detik butuh waktu semalaman dan komputernya sering mati mendadak. Tapi rasa takjub saat melihat hasil gambarmu di layar bisa terbang atau mengeluarkan petir membuat rasa lelah itu hilang seketika. Jangan biarkan keterbatasan alat mematikan mimpi kreatifmu.', '/artikel/diwantara-anugrah-putra-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjaga Kesantunan di Jagat Digital: Mengapa Komedi Tanpa Toxic Selalu Bertahan Lama', 'KULTUR DIGITAL', '6 Menit Membaca', 'Prinsip etika Tara Arts dalam menyajikan hiburan yang bisa ditonton bersama anak-anak dan orang tua.', 'Membuat orang tertawa dengan mencaci maki atau menyebarkan drama itu jalan pintas murahan. Komedi yang bernyawa adalah komedi yang lahir dari keakraban tulus, celetukan spontan, dan rasa hormat kepada setiap pasang mata penonton.', '/artikel/diwantara-anugrah-putra-2', 2);
END $$;

-- Figure: Dzawin Nur Ikram (dzawin-nur-ikram)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'dzawin-nur-ikram' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Dzawin Nur Ikram',
      title = 'Komika Filosofis Rimba, Penjelajah Pegunungan & Dokumentator Kearifan Tradisi Desa',
      category = 'Panggung Ekspresi',
      quote = 'Gunung tidak pernah menuntut kamu menjadi siapa-siapa. Di atas ketinggian tiga ribu meter, kamu cuma sebutir debu di hadapan keagungan semesta. Berjalanlah dengan rendah hati.',
      bio_paragraphs = ARRAY['Dzawin Nur Ikram mengukir jalur yang sangat berbeda dari kebanyakan figur industri hiburan perkotaan. Lahir di Bogor dan menimba ilmu di Pondok Pesantren serta Jurusan Sastra Arab UIN Syarif Hidayatullah Jakarta, Dzawin memulai karier publiknya lewat panggung Stand Up Comedy Indonesia (SUCI 4) dengan materi satire santri yang segar dan cerdas.', 'Ketika panggung komedi komersial mulai membuatnya jenuh, Dzawin mengambil ransel dan memilih jalan petualangan rimba. Lewat kanalnya ''Markas Petualang'', ia mendaki puncak-puncak gunung tertinggi nusantara dan dunia (termasuk Himalaya), mendokumentasikan keindahan alam liar sekaligus membedah filsafat hidup sunyi di ketinggian.', 'Karyanya bukan sekadar video traveling estetik; Dzawin menyajikan jurnalisme perjalanan berbasis dialog mendalam dengan para kuli panggul (*porter*), petani lereng gunung, dan penjaga mata air pedalaman—mengajarkan generasi muda untuk menghargai bumi dan tradisi lokal dengan kerendahan hati.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('dzawin-nur-ikram', 'Dzawin Nur Ikram', 'Komika Filosofis Rimba, Penjelajah Pegunungan & Dokumentator Kearifan Tradisi Desa', 'Panggung Ekspresi', 'Gunung tidak pernah menuntut kamu menjadi siapa-siapa. Di atas ketinggian tiga ribu meter, kamu cuma sebutir debu di hadapan keagungan semesta. Berjalanlah dengan rendah hati.', ARRAY['Dzawin Nur Ikram mengukir jalur yang sangat berbeda dari kebanyakan figur industri hiburan perkotaan. Lahir di Bogor dan menimba ilmu di Pondok Pesantren serta Jurusan Sastra Arab UIN Syarif Hidayatullah Jakarta, Dzawin memulai karier publiknya lewat panggung Stand Up Comedy Indonesia (SUCI 4) dengan materi satire santri yang segar dan cerdas.', 'Ketika panggung komedi komersial mulai membuatnya jenuh, Dzawin mengambil ransel dan memilih jalan petualangan rimba. Lewat kanalnya ''Markas Petualang'', ia mendaki puncak-puncak gunung tertinggi nusantara dan dunia (termasuk Himalaya), mendokumentasikan keindahan alam liar sekaligus membedah filsafat hidup sunyi di ketinggian.', 'Karyanya bukan sekadar video traveling estetik; Dzawin menyajikan jurnalisme perjalanan berbasis dialog mendalam dengan para kuli panggul (*porter*), petani lereng gunung, dan penjaga mata air pedalaman—mengajarkan generasi muda untuk menghargai bumi dan tradisi lokal dengan kerendahan hati.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2017', 'SUCI 4, RAJA LAWAK MALAYSIA & STAND UP SATIRE', 'Meraih posisi 3 besar SUCI 4 Kompas TV dan memenangkan panggung komedi internasional Maharaja Lawak Mega di Malaysia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2021', 'TRANSISI EKSPEDISI RIMBA & KANAL MARKAS PETUALANG', 'Meninggalkan panggung studio televisi dan mendokumentasikan ekspedisi pendakian gunung ekstrem serta kehidupan warga lereng.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 — 2026', 'EKSPEDISI HIMALAYA, SOSIOLOGI GUNUNG & BUKU CATATAN', 'Menyelesaikan pendakian di pegunungan Himalaya dan mengampanyekan etika pendakian bebas sampah (Zero Waste Mountaineering) di seluruh nusantara.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Dokumenter Ekspedisi Gunung & Budaya Desa', 'Dokumenter Petualangan & Refleksi Budaya', 'Dokumentasi audio-visual pendakian gunung dengan narasi sastrawi yang menyorot kearifan lokal masyarakat lereng pegunungan.', 'https://youtube.com/@dzawinnur', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kampanye Etika Pendakian ''Gunung Bukan Tempat Sampah''', 'Konservasi Lingkungan & Advokasi Alam', 'Gerakan edukasi masif kepada ribuan pendaki muda untuk membawa pulang kembali sampah plastik dari atas gunung.', 'https://instagram.com/dzawin_nur', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku & Narasi Perjalanan: Catatan Langkah Santri Pengelana', 'Literatur Perjalanan & Refleksi Batin', 'Kumpulan esai reflektif tentang kesunyian alam, perenungan spiritual, dan perjumpaan dengan masyarakat adat terpencil.', 'https://youtube.com/@dzawinnur', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Mencari Tuhan di Puncak Sunyi: Catatan Refleksi Perjalanan Dzawin Nur', 'FILSAFAT ALAM', '7 Menit Membaca', 'Bagaimana dinginnya malam di tenda gunung mengajarkan arti kesederhanaan dan kepasrahan hidup seorang manusia.', 'Saat kamu kehabisan napas di tanjakan berbatu dan suhu menyentuh minus derajat, semua atribut sosial—gelar sarjana, jumlah subscriber, saldo rekening—lenyap seketika. Yang tersisa hanyalah dialog jujur antara napasmu dan Penciptamu.', '/artikel/dzawin-nur-ikram-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menghormati Keringat Porter: Kisah di Balik Layar Pendakian Gunung Indonesia', 'SOSIAL & EMPATI', '6 Menit Membaca', 'Mengapa kita wajib memanusiakan para warga lokal yang memikul beban di jalur-jalur pendakian rimba nusantara.', 'Banyak pendaki bergaya pahlawan di media sosial setelah sampai puncak, tapi lupa bahwa tenda dan makanannya dipikul oleh bapak-bapak tua yang betisnya mengeras menahan beban puluhan kilogram demi menyekolahkan anaknya. Menghargai mereka adalah ujian empati pertama di gunung.', '/artikel/dzawin-nur-ikram-2', 2);
END $$;

-- Figure: Eno Bening (eno-bening)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'eno-bening' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Eno Bening',
      title = 'Kritikus Budaya Internet, Analis Wacana Algoritma & Edukator Literasi Media Digital',
      category = 'Panggung Ekspresi',
      quote = 'Bila lo mengonsumsi konten media sosial tanpa memahami bagaimana algoritma memanipulasi emosi lo, lo bukan lagi pengguna internet—lo adalah produk yang sedang diperjualbelikan kepada pemasang iklan.',
      bio_paragraphs = ARRAY['Eno Bening Nugroho adalah salah satu pemikir dan kritikus budaya internet paling konsisten dan artikulatif di Indonesia. Dengan latar belakang pendidikan filsafat dari Universitas Indonesia, Eno membedah fenomena media sosial bukan sekadar dari kulit gosip atau drama viral, melainkan melalui kacamata teori media kritis, semiotika, dan ekonomi politik digital.', 'Lewat kanal YouTube dan platform analisisnya, Eno memelopori rubrik-rubrik pembedahan wacana yang mengedukasi ratusan ribu kreator dan penikmat konten digital tentang bahaya *echo chamber*, radikalisasi algoritma, perang klik (*clickbait*), serta manipulasi psikologis di balik tren internet modern.', 'Sebagai pendidik literasi media, Eno berperan sebagai benteng akal sehat bagi generasi muda: mengajak mereka menjadi warganet yang kritis, sadar data privasi, dan mampu memanfaatkan internet sebagai alat pembebasan pengetahuan alih-alih menjadi korban kecanduan layar.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('eno-bening', 'Eno Bening', 'Kritikus Budaya Internet, Analis Wacana Algoritma & Edukator Literasi Media Digital', 'Panggung Ekspresi', 'Bila lo mengonsumsi konten media sosial tanpa memahami bagaimana algoritma memanipulasi emosi lo, lo bukan lagi pengguna internet—lo adalah produk yang sedang diperjualbelikan kepada pemasang iklan.', ARRAY['Eno Bening Nugroho adalah salah satu pemikir dan kritikus budaya internet paling konsisten dan artikulatif di Indonesia. Dengan latar belakang pendidikan filsafat dari Universitas Indonesia, Eno membedah fenomena media sosial bukan sekadar dari kulit gosip atau drama viral, melainkan melalui kacamata teori media kritis, semiotika, dan ekonomi politik digital.', 'Lewat kanal YouTube dan platform analisisnya, Eno memelopori rubrik-rubrik pembedahan wacana yang mengedukasi ratusan ribu kreator dan penikmat konten digital tentang bahaya *echo chamber*, radikalisasi algoritma, perang klik (*clickbait*), serta manipulasi psikologis di balik tren internet modern.', 'Sebagai pendidik literasi media, Eno berperan sebagai benteng akal sehat bagi generasi muda: mengajak mereka menjadi warganet yang kritis, sadar data privasi, dan mampu memanfaatkan internet sebagai alat pembebasan pengetahuan alih-alih menjadi korban kecanduan layar.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2012 — 2016', 'STUDI FILSAFAT UI & ANALISIS KULTUR MEME AWAL', 'Mendalami filsafat kontemporer di UI dan mulai membedah fenomena meme internet sebagai bahasa komunikasi baru generasi digital.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2021', 'KRITIK BUDAYA YOUTUBE & DEKONSTRUKSI ALGORITMA', 'Membangun ruang diskursus kritis tentang ekosistem kreator konten, etika monetisasi, dan psikologi konsumsi media di Indonesia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 — 2026', 'EDUKASI SOSIAL MEDIA LITERACY & WORKSHOP KREATIF', 'Mengajar literasi algoritma dan etika produksi digital di berbagai kampus, lembaga independen, dan komunitas kreator nusantara.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pembedahan Kritis Dinamika Budaya Internet & Algoritma', 'Video Esai & Kritik Media Digital', 'Rangkaian video esai analitis yang membedah arsitektur psikologi platform media sosial, polarisasi digital, dan manipulasi perhatian.', 'https://youtube.com/@enobening', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Modul Edukasi ''Social Media Literacy & Digital Awareness''', 'Kurikulum Pendidikan Literasi Digital', 'Panduan praktis bagi orang tua dan remaja untuk menavigasi disinformasi, privasi data, dan kecanduan algoritma di ruang digital.', 'https://enobening.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Siniar Diskursus Pop-Culture & Dekonstruksi Wacana', 'Siniar Diskursus Pemikiran & Filsafat Media', 'Dialog mendalam bersama para sosiolog, praktisi teknologi, dan kreator tentang masa depan peradaban internet nusantara.', 'https://spotify.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Di Balik Tirai Algoritma: Bagaimana Media Sosial Merancang Kemarahan Publik Demi Profit', 'KRITIK MEDIA', '8 Menit Membaca', 'Pembedahan teori ekonomi perhatian (attention economy) dan mengapa kabar buruk selalu lebih cepat viral dibanding kabar baik.', 'Algoritma tidak peduli apakah sebuah informasi itu benar atau berbahaya bagi kohesi bangsa. Yang diukur oleh sistem adalah tingkat keterlibatan (engagement). Dan emosi manusia yang paling mudah memicu komentar dan share adalah kemarahan dan ketakutan. Menyadari jebakan ini adalah langkah pertama merebut kembali kemerdekaan berpikir kita.', '/artikel/eno-bening-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Etika Kreator Konten: Batas Antara Menghibur dan Mengeksploitasi Kemiskinan', 'ETIKA DIGITAL', '7 Menit Membaca', 'Kritik tajam terhadap tren ''poverty porn'' dan perlunya martabat manusia dijaga di atas target penonton.', 'Membantu orang miskin di depan kamera dengan musik melankolis demi monetisasi iklan bukanlah filantropi, melainkan eksploitasi martabat kaum rentan. Kreator sejati menciptakan nilai tambah dan inspirasi, bukan menjual penderitaan sesama demi angka penonton.', '/artikel/eno-bening-2', 2);
END $$;

-- Figure: Gritte Agatha (gritte-agatha)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'gritte-agatha' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Gritte Agatha',
      title = 'Aktris, Sutradara Film Pendek & Pengampu Siniar Humaniora Inspiratif ''Gritte Buka Praktek''',
      category = 'Panggung Ekspresi',
      quote = 'Setiap orang yang kita temui di jalan punya pertarungan hidupnya masing-masing yang tidak kita ketahui. Memberi mereka ruang untuk bercerita adalah cara kita merawat rasa welas asih antarsesama manusia.',
      bio_paragraphs = ARRAY['Mengawali kariernya sejak masa kanak-kanak sebagai bintang sinetron dan film layar lebar (dikenal lewat peran ikoniknya di Get Married The Series), Griselda Agatha (dikenal sebagai Gritte Agatha) menunjukkan transformasi karier yang luar biasa matang di era media baru. Alumnus Desain Komunikasi Visual Universitas Multimedia Nusantara ini memadukan kepekaan sinematografi dengan empati jurnalistik.', 'Lewat kanal YouTube pribadinya dan rubrik legendaris ''Gritte Buka Praktek'' (GBP), Gritte menyediakan panggung aman dan hangat bagi ratusan penyintas penyakit langka, korban kekerasan domestik, pejuang disabilitas, dan sosok-sosok inspiratif yang kerap luput dari liputan media arus utama.', 'Pendekatannya yang santun, tanpa sensasionalisme, dan berfokus pada kekuatan ketabahan manusia menjadikan karyanya sebagai salah satu ruang edukasi empati dan kesehatan mental paling dipercaya di Indonesia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('gritte-agatha', 'Gritte Agatha', 'Aktris, Sutradara Film Pendek & Pengampu Siniar Humaniora Inspiratif ''Gritte Buka Praktek''', 'Panggung Ekspresi', 'Setiap orang yang kita temui di jalan punya pertarungan hidupnya masing-masing yang tidak kita ketahui. Memberi mereka ruang untuk bercerita adalah cara kita merawat rasa welas asih antarsesama manusia.', ARRAY['Mengawali kariernya sejak masa kanak-kanak sebagai bintang sinetron dan film layar lebar (dikenal lewat peran ikoniknya di Get Married The Series), Griselda Agatha (dikenal sebagai Gritte Agatha) menunjukkan transformasi karier yang luar biasa matang di era media baru. Alumnus Desain Komunikasi Visual Universitas Multimedia Nusantara ini memadukan kepekaan sinematografi dengan empati jurnalistik.', 'Lewat kanal YouTube pribadinya dan rubrik legendaris ''Gritte Buka Praktek'' (GBP), Gritte menyediakan panggung aman dan hangat bagi ratusan penyintas penyakit langka, korban kekerasan domestik, pejuang disabilitas, dan sosok-sosok inspiratif yang kerap luput dari liputan media arus utama.', 'Pendekatannya yang santun, tanpa sensasionalisme, dan berfokus pada kekuatan ketabahan manusia menjadikan karyanya sebagai salah satu ruang edukasi empati dan kesehatan mental paling dipercaya di Indonesia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2008 — 2016', 'AKTRIS REMAJA & STUDI DESAIN KOMUNIKASI VISUAL', 'Membintangi puluhan judul film dan sinetron populer nasional sembari menyelesaikan studi sarjana DKV di UMN.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2020', 'SUTRADARA FILM PENDEK & LAHIRNYA ''BUKA PRAKTEK''', 'Menyutradarai film-film pendek independen bertema keluarga dan meluncurkan rubrik dialog humaniora inspiratif GBP.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'ADU VOKASI DISABILITAS, KESEHATAN MENTAL & KONTEN POSITIF', 'Memproduksi ratusan episode edukasi penyakit langka dan aktif menggalang bantuan sosial untuk pemulihan narasumber yang berjuang.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Siniar ''Gritte Buka Praktek'' (GBP)', 'Siniar Humaniora & Advokasi Sosial', 'Program wawancara mendalam yang mengangkat kisah ketabahan hidup para penyintas penyakit kronis dan figur inspiratif akar rumput.', 'https://youtube.com/@gritteagatha', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Film Pendek ''Prank'' & Karya Sinema Independen', 'Penyutradaraan Sinema & Edukasi Sosial', 'Karya film pendek naratif yang mengedukasi bahaya perundungan (*bullying*) dan pentingnya komunikasi sehat dalam keluarga.', 'https://youtube.com/@gritteagatha', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Penggalangan Donasi Pasien Medis Langka', 'Aksi Filantropi & Kemanusiaan', 'Kemitraan penggalangan dana crowdfunding bagi pembiayaan operasi dan kursi roda narasumber podcast yang membutuhkan.', 'https://kitabisa.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Belajar Keberanian dari Para Pejuang Sunyi: Catatan di Balik Meja ''Buka Praktek''', 'HUMANIORA & EMPATI', '7 Menit Membaca', 'Pelajaran berharga tentang arti syukur dan ketabahan batin dari pertemuan dengan ratusan narasumber berjiwa baja.', 'Setiap kali selesai merekam wawancara dengan orang tua yang merawat anak dengan penyakit langka selama belasan tahun tanpa mengeluh, saya merasa masalah hidup saya sehari-hari sangat kecil. Ketabahan mereka adalah guru kehidupan terbaik yang mengajarkan makna cinta tanpa syarat.', '/artikel/gritte-agatha-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menjaga Etika Wawancara Penyintas Trauma di Era Kejar Penonton', 'ETIKA MEDIA', '6 Menit Membaca', 'Pentingnya mengutamakan kenyamanan psikologis narasumber dibanding mencari potongan klip yang mengejutkan.', 'Narasumber yang membagikan trauma hidupnya bukan komoditas untuk memancing air mata penonton demi views. Kita punya kewajiban moral untuk menjaga batas privasi dan memastikan mereka merasa aman dan didukung setelah kamera dimatikan.', '/artikel/gritte-agatha-2', 2);
END $$;

-- Figure: Jovial & Andovi da Lopez (SkinnyIndonesian24) (jovial-andovi-da-lopez)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'jovial-andovi-da-lopez' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Jovial & Andovi da Lopez (SkinnyIndonesian24)',
      title = 'Pelopor Musikal Sinema Digital, Satir Demokrasi & Penggagas Mahakarya ''DPR Musikal'' & ''Epic Rap Battles of Presidensi''',
      category = 'Panggung Ekspresi',
      quote = 'Bila anak muda tidak peduli pada politik, masa depan negeri ini akan terus ditentukan oleh orang-orang yang tidak peduli pada nasib mereka. Kita membungkus kritik dengan seni musikal agar pesan itu bergaung di dada generasi penerus.',
      bio_paragraphs = ARRAY['Jovial da Lopez dan Andovi da Lopez adalah duo bersaudara revolusioner dalam jagat hiburan digital Indonesia lewat kanal SkinnyIndonesian24. Mengawali karier pembuatan konten komedi sejak 2011 saat masih menempuh studi di Universitas Indonesia (Jovial di Fisika MIPA dan Andovi di Hukum UI), mereka menetapkan standar artistik dan integritas moral yang sangat tinggi di tengah maraknya konten instan.', 'Karya-karya mereka adalah mahakarya seni pertunjukan digital yang memadukan kritik politik tajam dengan teater musikal megah. Mulai dari serial video legendaris ''Epic Rap Battles of Presidents'' yang mengedukasi sejarah kepemimpinan bangsa, hingga ''DPR Musikal''—sebuah pertunjukan musikal satir orisinil berdurasi panjang yang membongkar intrik legislasi dan korupsi politik dengan standar produksi teater Broadway.', 'Keputusan mereka untuk menutup kanal SkinnyIndonesian24 tepat di usia 10 tahun pada 2021 membuktikan integritas tanpa tanding: bahwa bagi mereka, berkarya adalah persembahan pengabdian bangsa, bukan sekadar perburuan algoritma monetisasi seumur hidup.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('jovial-andovi-da-lopez', 'Jovial & Andovi da Lopez (SkinnyIndonesian24)', 'Pelopor Musikal Sinema Digital, Satir Demokrasi & Penggagas Mahakarya ''DPR Musikal'' & ''Epic Rap Battles of Presidensi''', 'Panggung Ekspresi', 'Bila anak muda tidak peduli pada politik, masa depan negeri ini akan terus ditentukan oleh orang-orang yang tidak peduli pada nasib mereka. Kita membungkus kritik dengan seni musikal agar pesan itu bergaung di dada generasi penerus.', ARRAY['Jovial da Lopez dan Andovi da Lopez adalah duo bersaudara revolusioner dalam jagat hiburan digital Indonesia lewat kanal SkinnyIndonesian24. Mengawali karier pembuatan konten komedi sejak 2011 saat masih menempuh studi di Universitas Indonesia (Jovial di Fisika MIPA dan Andovi di Hukum UI), mereka menetapkan standar artistik dan integritas moral yang sangat tinggi di tengah maraknya konten instan.', 'Karya-karya mereka adalah mahakarya seni pertunjukan digital yang memadukan kritik politik tajam dengan teater musikal megah. Mulai dari serial video legendaris ''Epic Rap Battles of Presidents'' yang mengedukasi sejarah kepemimpinan bangsa, hingga ''DPR Musikal''—sebuah pertunjukan musikal satir orisinil berdurasi panjang yang membongkar intrik legislasi dan korupsi politik dengan standar produksi teater Broadway.', 'Keputusan mereka untuk menutup kanal SkinnyIndonesian24 tepat di usia 10 tahun pada 2021 membuktikan integritas tanpa tanding: bahwa bagi mereka, berkarya adalah persembahan pengabdian bangsa, bukan sekadar perburuan algoritma monetisasi seumur hidup.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2011 — 2014', 'ERA AWAL YOUTUBE INDONESIA & SATIR AKADEMIK UI', 'Merintis video komedi sketsa cerdas dari bangku kuliah UI dan mendobrak kebiasaan komedi slapstick pertelevisian nasional.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 — 2020', 'EPIC RAP BATTLES OF PRESIDENSI & EDUKASI SEJARAH BANGSA', 'Memproduksi seri video musikal sejarah kepresidenan Indonesia yang ditonton puluhan juta kali dan menjadi materi ajar sekolah.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'DPR MUSIKAL, FAREWELL 10 TAHUN & TEATER NARATIF', 'Mementaskan ''DPR Musikal'' sebagai mahakarya kritik konstitusi dan terus memproduksi pentas teater musikal edukasi publik independen.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'DPR Musikal (Pertunjukan Musikal Satir Konstitusi)', 'Teater Musikal & Kritik Kebijakan Publik', 'Mahakarya teater musikal orisinil berdurasi penuh yang membongkar korupsi politik dan pengkhianatan amanat rakyat di gedung dewan.', 'https://youtube.com/watch?v=dprmusikal', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial ''Epic Rap Battles of Presidents'' (1 s.d. 3)', 'Produksi Hip-Hop Musikal Sejarah Bangsa', 'Karya musikal sinematik yang mempertemukan para tokoh proklamator dan presiden Indonesia dalam debat gagasan kebangsaan.', 'https://youtube.com/@skinnyindonesian24', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Beasiswa Kuliah Perintis Da Lopez (Pendidikan Nusa Tenggara)', 'Filantropi Pendidikan & Talenta Daerah', 'Program beasiswa penuh bagi putra-putri berprestasi dari Indonesia Timur untuk menempuh pendidikan di perguruan tinggi negeri terbaik.', 'https://youtube.com/@skinnyindonesian24', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Di Balik Layar DPR Musikal: Mengapa Kritik Politik Harus Berani dan Berkelas', 'SENI & POLITIK', '8 Menit Membaca', 'Kisah Jovial dan Andovi merogoh tabungan pribadi demi mewujudkan pentas musikal yang membangkitkan kesadaran kritis anak muda.', 'Kritik terhadap dewan perwakilan rakyat tidak melulu harus berupa lemparan batu atau umpatan di jalanan. Ketika kita mengemas fakta kebobrokan sistem ke dalam bait lagu, dialog berbobot, dan orkestrasi yang indah, kritik itu menembus akal sehat penonton dan menetap lama di kepalanya.', '/artikel/jovial-andovi-da-lopez-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Pamit di Puncak Panggung: Menjaga Integritas Karya di Atas Godaan Uang Algoritma', 'INTEGRITAS KREATIF', '7 Menit Membaca', 'Alasan filosofis SkinnyIndonesian24 berhenti tepat di perayaan 10 tahun berkarya.', 'Setiap seniman harus tahu kapan lagu terakhirnya harus dimainkan. Berhenti di saat karyamu masih dihargai dan dicintai adalah cara menjaga kesucian karya agar tidak terdegradasi menjadi sekadar pabrik konten pencari uang receh.', '/artikel/jovial-andovi-da-lopez-2', 2);
END $$;

-- Figure: Leonardo Edwin (leonardo-edwin)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'leonardo-edwin' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Leonardo Edwin',
      title = 'Duta Budaya Nusantara, Dokumentator Petualangan Global & Penjelajah Sabang Sampai Merauke',
      category = 'Panggung Ekspresi',
      quote = 'Bila lo sudah mengelilingi kampus-kampus di Amerika dan puncak-puncak salju di luar negeri, lo akan menyadari bahwa tidak ada tempat yang keindahan alam dan kehangatan orang-orangnya semegah tanah air kita sendiri.',
      bio_paragraphs = ARRAY['Leonardo Edwin adalah representasi generasi muda Indonesia yang berwawasan global namun mencintai akar budaya tanah airnya dengan sepenuh jiwa. Lahir dan besar di Batam, Kepulauan Riau, Leo menempuh pendidikan sarjana di University of Washington, Seattle, Amerika Serikat di bidang Sistem Informasi dan Manajemen Sumber Daya Alam.', 'Lewat kanalnya, Leo mendokumentasikan perjuangan hidup sebagai mahasiswa rantau mandiri di Amerika, ketekunannya mendaki puncak-puncak gunung salju di Cascade Range, serta kecintaannya memperkenalkan bahasa dan makanan Indonesia kepada mahasiswa internasional. Karyanya menginspirasi jutaan pelajar di tanah air tentang kedisiplinan belajar, etika kerja paruh waktu, dan pentingnya adaptasi budaya.', 'Sepulangnya ke Indonesia, Leo mendedikasikan waktu dan energinya untuk ekspedisi ''Sabang Sampai Merauke''—menjelajahi pelosok pedalaman Papua, pedesaan Nusa Tenggara, hingga kepulauan terluar, mendokumentasikan tradisi lokal, suku adat, dan keanekaragaman hayati nusantara dengan visual sinematik yang memukau.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('leonardo-edwin', 'Leonardo Edwin', 'Duta Budaya Nusantara, Dokumentator Petualangan Global & Penjelajah Sabang Sampai Merauke', 'Panggung Ekspresi', 'Bila lo sudah mengelilingi kampus-kampus di Amerika dan puncak-puncak salju di luar negeri, lo akan menyadari bahwa tidak ada tempat yang keindahan alam dan kehangatan orang-orangnya semegah tanah air kita sendiri.', ARRAY['Leonardo Edwin adalah representasi generasi muda Indonesia yang berwawasan global namun mencintai akar budaya tanah airnya dengan sepenuh jiwa. Lahir dan besar di Batam, Kepulauan Riau, Leo menempuh pendidikan sarjana di University of Washington, Seattle, Amerika Serikat di bidang Sistem Informasi dan Manajemen Sumber Daya Alam.', 'Lewat kanalnya, Leo mendokumentasikan perjuangan hidup sebagai mahasiswa rantau mandiri di Amerika, ketekunannya mendaki puncak-puncak gunung salju di Cascade Range, serta kecintaannya memperkenalkan bahasa dan makanan Indonesia kepada mahasiswa internasional. Karyanya menginspirasi jutaan pelajar di tanah air tentang kedisiplinan belajar, etika kerja paruh waktu, dan pentingnya adaptasi budaya.', 'Sepulangnya ke Indonesia, Leo mendedikasikan waktu dan energinya untuk ekspedisi ''Sabang Sampai Merauke''—menjelajahi pelosok pedalaman Papua, pedesaan Nusa Tenggara, hingga kepulauan terluar, mendokumentasikan tradisi lokal, suku adat, dan keanekaragaman hayati nusantara dengan visual sinematik yang memukau.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2022', 'KULIAH DI SEATTLE & VLOG PERANTAUAN MANDIRI', 'Menyelesaikan studi di University of Washington sembari bekerja paruh waktu dan mendokumentasikan kehidupan mahasiswa perantau.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022', 'EKSPEDISI PUNCAK PAPUA & PENDAKIAN GUNUNG SALJU DUNIA', 'Menaklukkan puncak Carstensz Pyramid Papua dan gunung-gunung bersalju di Amerika Utara dengan membawa bendera Merah Putih.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 — 2026', 'SERI EKSPEDISI NUSANTARA & DIPLOMASI PARIWISATA', 'Menjelajahi ratusan desa adat di seluruh nusantara dan mengampanyekan pariwisata berkelanjutan yang menghormati masyarakat lokal.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Dokumenter Sinematik ''Sabang Sampai Merauke''', 'Dokumenter Budaya & Eksplorasi Geografi Indonesia', 'Serial perjalanan sinematik yang mendokumentasikan keindahan alam tersembunyi, tradisi adat, dan kehidupan sosial di pulau-pulau terpencil.', 'https://youtube.com/@leoedw', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku ''Menjelajah Batas: Catatan Perantau Muda''', 'Karya Literatur Memoar & Motivasi Belajar', 'Kisah memoar perjalanan beradaptasi di negeri asing, menembus batasan rasa takut, dan menemukan kembali cinta pada tanah kelahiran.', 'https://gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Inisiatif Bantuan Perlengkapan Sekolah Siswa Pedalaman', 'Aksi Sosial & Pendidikan Daerah 3T', 'Penyaluran sepatu, tas, dan buku bacaan bagi anak-anak sekolah dasar di pelosok pegunungan Papua dan NTT.', 'https://instagram.com/leo_edw', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menemukan Rumah di Pelosok Negeri: Catatan Perjalanan Leonardo Edwin', 'BUDAYA & PERJALANAN', '7 Menit Membaca', 'Refleksi Leo tentang kehangatan warga desa pedalaman yang mengajarkan arti persaudaraan sejati di tengah perbedaan.', 'Saat singgah di gubuk seorang bapak petani di pedalaman Flores atau Papua, mereka rela menyembelih ayam satu-satunya miliknya demi menjamu tamu yang baru dikenalnya satu jam lalu. Keramahan tulus seperti ini adalah harta karun bangsa kita yang paling mewah.', '/artikel/leonardo-edwin-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Disiplin di Perantauan: Kiat Menjaga Karakter dan Semangat Belajar di Luar Negeri', 'PENDIDIKAN & KARAKTER', '6 Menit Membaca', 'Pengalaman membagi waktu antara kuliah berat, kerja paruh waktu di dapur, dan menjaga konsistensi berkarya.', 'Tinggal jauh dari orang tua melatih kemandirian total. Kamu belajar mengelola uang receh, memasak makananmu sendiri, dan tidak menyerah saat musim dingin membekukan semangatmu. Disiplin diri adalah fondasi dari segala pencapaian besar.', '/artikel/leonardo-edwin-2', 2);
END $$;

-- Figure: Nessie Judge (nessie-judge)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'nessie-judge' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Nessie Judge',
      title = 'Pelopor Investigasi Naratif Misteri Terbesar Indonesia, Pencerita Forensik Digital & Kreator ''NERROR''',
      category = 'Panggung Ekspresi',
      quote = 'Di balik setiap misteri sejarah dan kasus kriminal yang belum terpecahkan, ada hak korban yang harus didengar dan fakta saintifik forensik yang harus diungkapkan secara jernih tanpa bias sensasi.',
      bio_paragraphs = ARRAY['Nasreen Anis Putrina Judge (dikenal sebagai Nessie Judge) adalah pelopor format video esai investigasi kejahatan nyata (*true crime*) dan misteri sejarah terbesar di Asia Tenggara lewat rubrik legendaris ''NERROR'' (Nessie Horror). Menyelesaikan studi magister administrasi bisnis di Finlandia, Nessie menyuntikkan standar ketelitian riset akademik dan etika jurnalisme ke dalam platform video hiburan digital.', 'Kemampuan Nessie merangkum berkas forensik kepolisian yang rumit, arsip sejarah konspirasi dunia, hingga kasus-kasus pelanggaran hak asasi yang terabaikan menjadi gaya bertutur naratif yang mencekam dan sangat edukatif. Ia menolak gaya takhayul murahan; setiap kasus dibedah melalui kronologi logis, profil psikologi kriminal, dan bukti saintifik.', 'Melalui jutaan penggemar setianya (''Nerrorist''), Nessie tidak hanya menyajikan tontonan menegangkan, tetapi juga membangun kesadaran kolektif generasi muda tentang keselamatan diri, bahaya manipulasi psikologis predator sosial, dan kepedulian terhadap keadilan bagi para korban kejahatan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('nessie-judge', 'Nessie Judge', 'Pelopor Investigasi Naratif Misteri Terbesar Indonesia, Pencerita Forensik Digital & Kreator ''NERROR''', 'Panggung Ekspresi', 'Di balik setiap misteri sejarah dan kasus kriminal yang belum terpecahkan, ada hak korban yang harus didengar dan fakta saintifik forensik yang harus diungkapkan secara jernih tanpa bias sensasi.', ARRAY['Nasreen Anis Putrina Judge (dikenal sebagai Nessie Judge) adalah pelopor format video esai investigasi kejahatan nyata (*true crime*) dan misteri sejarah terbesar di Asia Tenggara lewat rubrik legendaris ''NERROR'' (Nessie Horror). Menyelesaikan studi magister administrasi bisnis di Finlandia, Nessie menyuntikkan standar ketelitian riset akademik dan etika jurnalisme ke dalam platform video hiburan digital.', 'Kemampuan Nessie merangkum berkas forensik kepolisian yang rumit, arsip sejarah konspirasi dunia, hingga kasus-kasus pelanggaran hak asasi yang terabaikan menjadi gaya bertutur naratif yang mencekam dan sangat edukatif. Ia menolak gaya takhayul murahan; setiap kasus dibedah melalui kronologi logis, profil psikologi kriminal, dan bukti saintifik.', 'Melalui jutaan penggemar setianya (''Nerrorist''), Nessie tidak hanya menyajikan tontonan menegangkan, tetapi juga membangun kesadaran kolektif generasi muda tentang keselamatan diri, bahaya manipulasi psikologis predator sosial, dan kepedulian terhadap keadilan bagi para korban kejahatan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2012 — 2016', 'ERA AWAL KREATIF & MASTER BISNIS FINLANDIA', 'Mempelajari kultur media digital dan menyelesaikan program magister Master of Business Administration di Finlandia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2021', 'LAHIRNYA RUBRIK ''NERROR'' & REVOLUSI TRUE CRIME LOKAL', 'Menciptakan format video investigasi true crime saintifik pertama di Indonesia yang memecahkan rekor jutaan penonton per episode.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 — 2026', 'ADU VOKASI KESELAMATAN PEREMPUAN & PODCAST MISTERI', 'Mengembangkan semesta siniar investigasi mendalam dan aktif menyuarakan edukasi penanganan kekerasan terhadap perempuan.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Investigasi Kasus Nyata & Forensik ''NERROR''', 'Video Esai Investigasi & Forensik Kriminal', 'Serial video riset berbasis data investigasi mendalam yang membedah kasus kejahatan global dan misteri sejarah dunia secara saintifik.', 'https://youtube.com/@nessiejudge', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Siniar Eksklusif ''The Nerror Podcast'' (Spotify Original)', 'Siniar Audio Sinematik & Profil Psikologi Kriminal', 'Produksi siniar audio berbasis teater suara yang mengupas profil psikologis pelaku kejahatan dan kronologi misteri tak terpecahkan.', 'https://open.spotify.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Kampanye Edukasi Keselamatan Digital & ''Red Flags'' Kejahatan', 'Edukasi Keamanan Diri & Kesadaran Sosial', 'Panduan mengenali tanda-tanda bahaya manipulasi sosial dan langkah-langkah proteksi diri bagi remaja di ruang publik dan siber.', 'https://instagram.com/nessiejudge', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Di Balik Berkas Forensik NERROR: Menjaga Etika Menceritakan Tragedi Korban', 'RISET & ETIKA', '8 Menit Membaca', 'Bagaimana Nessie menyusun naskah investigasi kriminal dengan tetap menghormati duka keluarga korban.', 'Menceritakan kasus kejahatan nyata bukanlah ajang mencari ketakutan murahan. Kami menghabiskan belasan jam memverifikasi laporan persidangan dan hasil otopsi resmi agar tidak menyebarkan fitnah, serta selalu memastikan fokus cerita ada pada penegakan keadilan bagi korban.', '/artikel/nessie-judge-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Pentingnya Melek Forensik bagi Generasi Muda: Jangan Mudah Percaya Konspirasi Liar', 'LITERASI LOGIKA', '7 Menit Membaca', 'Mengapa berpikir kritis dan berbasis bukti adalah benteng melawan kabar bohong di era media sosial.', 'Di internet, teori konspirasi yang liar sangat cepat menyebar karena memuaskan rasa penasaran manusia. Tugas kita adalah melatih nalar skeptis yang sehat: selalu uji sumber informasinya, periksa bukti fisiknya, dan jangan mengambil kesimpulan hanya berdasarkan cocoklogi.', '/artikel/nessie-judge-2', 2);
END $$;

-- Figure: Raditya Dika (raditya-dika)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'raditya-dika' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Raditya Dika',
      title = 'Bapak Komedi Modern Indonesia, Sutradara Sinema, Penulis Buku Bestseller & Pendidik Literasi Finansial',
      category = 'Panggung Ekspresi',
      quote = 'Menulis komedi itu bukan soal mencari hal lucu dari langit. Komedi adalah kejujuran menertawakan kelemahan, ketakutan, dan rasa malu lo sendiri di depan cermin, lalu membungkusnya agar orang lain merasa tidak sendirian.',
      bio_paragraphs = ARRAY['Dika Angkasaputra Moerwani Nasution (dikenal sebagai Raditya Dika) adalah figur raksasa yang mengubah secara fundamental lanskap industri hiburan, penerbitan buku, dan sinema komedi Indonesia selama dua dekade terakhir. Memulai dari blog pribadi yang diadaptasi menjadi novel legendaris Kambing Jantan (2005), Dika memicu gelombang besar kebangkitan minat baca dan menulis generasi muda di tanah air.', 'Sebagai salah satu pelopor utama Stand Up Comedy Indonesia dan sutradara/penulis skenario film box-office terkemuka (Cinta Brontosaurus, Manusia Setengah Salmon, Single, hingga Hangout), Dika membuktikan bahwa komedi berakar pada kepekaan observasi kehidupan sehari-hari, kegelisahan sosial kelas menengah, dan hubungan keluarga yang intim.', 'Di era kematangannya, Raditya Dika bertransformasi menjadi mentor literasi finansial paling bersahabat di Indonesia—mengedukasi jutaan anak muda tentang investasi reksa dana, dana darurat, dan persiapan pensiun mandiri dengan bahasa tutur yang membumi dan bebas dari istilah teknis yang membingungkan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('raditya-dika', 'Raditya Dika', 'Bapak Komedi Modern Indonesia, Sutradara Sinema, Penulis Buku Bestseller & Pendidik Literasi Finansial', 'Panggung Ekspresi', 'Menulis komedi itu bukan soal mencari hal lucu dari langit. Komedi adalah kejujuran menertawakan kelemahan, ketakutan, dan rasa malu lo sendiri di depan cermin, lalu membungkusnya agar orang lain merasa tidak sendirian.', ARRAY['Dika Angkasaputra Moerwani Nasution (dikenal sebagai Raditya Dika) adalah figur raksasa yang mengubah secara fundamental lanskap industri hiburan, penerbitan buku, dan sinema komedi Indonesia selama dua dekade terakhir. Memulai dari blog pribadi yang diadaptasi menjadi novel legendaris Kambing Jantan (2005), Dika memicu gelombang besar kebangkitan minat baca dan menulis generasi muda di tanah air.', 'Sebagai salah satu pelopor utama Stand Up Comedy Indonesia dan sutradara/penulis skenario film box-office terkemuka (Cinta Brontosaurus, Manusia Setengah Salmon, Single, hingga Hangout), Dika membuktikan bahwa komedi berakar pada kepekaan observasi kehidupan sehari-hari, kegelisahan sosial kelas menengah, dan hubungan keluarga yang intim.', 'Di era kematangannya, Raditya Dika bertransformasi menjadi mentor literasi finansial paling bersahabat di Indonesia—mengedukasi jutaan anak muda tentang investasi reksa dana, dana darurat, dan persiapan pensiun mandiri dengan bahasa tutur yang membumi dan bebas dari istilah teknis yang membingungkan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2010', 'ERA BLOGGING KAMBING JANTAN & REVOLUSI NOVEL LOKAL', 'Merilis novel debut fenomenal Kambing Jantan yang menjadi pemicu kebangkitan genre buku komedi personal di toko buku Indonesia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2011 — 2017', 'PELOPOR STAND-UP COMEDY & SUTRADARA BOX OFFICE', 'Menjadi pionir kompetisi stand-up comedy nasional serta menyutradarai dan membintangi deretan film layar lebar terlaris.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2026', 'LITERASI FINANSIAL MANDIRI & SINIAR KELUARGA', 'Memelopori konten edukasi perencanaan keuangan pemula dan mengasuh siniar reflektif tentang kepenulisan serta filosofi berkeluarga.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku-Buku Mahakarya Komedi Bestseller Nasional (Kambing Jantan s.d. Ubur-Ubur Lembur)', 'Karya Literatur Komedi & Fenomena Perbukuan', 'Seri buku kumpulan esai komedi personal yang telah dicetak jutaan eksemplar dan menginspirasi jutaan generasi muda untuk menulis.', 'https://gagasmedia.net', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Filmografi Sinema Box Office (Single, Hangout, Malam Minggu Miko)', 'Penyutradaraan & Penulisan Skenario Sinema', 'Karya-karya sinema komedi cerdas yang mengawinkan genre romantis, misteri, dan satire kehidupan urban.', 'https://imdb.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Seri Edukasi Literasi Finansial & Investasi Pemula (YouTube)', 'Pendidikan Finansial & Pengelolaan Kekayaan Mandiri', 'Panduan praktis pengelolaan keuangan, pentingnya dana darurat, dan filosofi hidup hemat (frugal living) bagi generasi muda.', 'https://youtube.com/@radityadika', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Seni Menulis dari Kerapuhan Diri: 20 Tahun Perjalanan Kreatif Raditya Dika', 'PENULISAN & KARYA', '8 Menit Membaca', 'Bagaimana mengubah rasa malu, kegagalan cinta, dan kecanggungan sosial menjadi karya tulisan yang abadi.', 'Saat menulis buku pertama, saya hanya menceritakan betapa bodoh dan canggungnya saya saat kuliah di Adelaide. Pembaca menyukainya bukan karena saya hebat, tapi karena mereka melihat kelemahan diri mereka sendiri di dalam cerita itu. Jangan takut terlihat tidak sempurna dalam tulisanmu.', '/artikel/raditya-dika-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Tenang Finansial di Usia Muda: Mengapa Gaya Hidup Sederhana Menyelamatkan Masa Depan', 'LITERASI KEUANGAN', '7 Menit Membaca', 'Pesan Raditya Dika tentang bahaya jebakan gengsi perkotaan dan nikmatnya memiliki kebebasan waktu.', 'Kaya yang sesungguhnya bukan tentang pamer jam tangan mahal atau mobil mewah di media sosial untuk memukau orang yang tidak kamu sukai. Kaya itu adalah saat kamu punya dana darurat yang cukup, tidak punya utang konsumtif, dan bebas menentukan apa yang ingin kamu kerjakan setiap pagi tanpa tekanan.', '/artikel/raditya-dika-2', 2);
END $$;

COMMIT;
