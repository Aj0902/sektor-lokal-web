-- SQL Batch for laci_06_perawat_jiwa_rasa
BEGIN;

-- Figure: Cholil Mahmud (cholil-mahmud)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'cholil-mahmud' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Cholil Mahmud',
      title = 'Vokalis/Gitaris Efek Rumah Kaca & Komposer Narasi Kritis Nusantara',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Pasar dan panggung komersial bisa diciptakan dan direkayasa oleh industri, tapi kejujuran nurani dalam bermusik dan berpihak pada korban ketidakadilan tak akan pernah bisa diperjualbelikan.',
      bio_paragraphs = ARRAY['Sebagai vokalis, gitaris, dan penulis lirik utama di balik grup musik independen Efek Rumah Kaca (ERK) dan Pandai Besi, Cholil Mahmud adalah salah satu komposer paling berpengaruh yang merekam luka politik, kegelisahan sosial, dan kerapuhan moral bangsa Indonesia ke dalam karya musik yang kontemplatif dan abadi.', 'Karya-karyanya—seperti ''Di Udara'' (lagu perlawanan mengenang pembunuhan aktivis HAM Munir), ''Hilang'', ''Cinta Melulu'', ''Desember'', hingga album epik ''Rimpang''—menjadi lagu wajib bagi gerakan masyarakat sipil, demonstrasi mahasiswa, dan refleksi batin jutaan anak muda. Cholil menolak kompromi integritas terhadap sensor korporasi dan memilih jalur kemandirian ekosistem musik independen.', 'Bagi generasi muda, Cholil Mahmud membuktikan bahwa musik bukan sekadar komoditas hiburan pelarian sesaat, melainkan senjata puitis untuk merawat ingatan kolektif bangsa, menyembuhkan luka batin, dan menolak tunduk pada impunitas kekuasaan.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('cholil-mahmud', 'Cholil Mahmud', 'Vokalis/Gitaris Efek Rumah Kaca & Komposer Narasi Kritis Nusantara', 'Perawat Jiwa & Rasa', 'Pasar dan panggung komersial bisa diciptakan dan direkayasa oleh industri, tapi kejujuran nurani dalam bermusik dan berpihak pada korban ketidakadilan tak akan pernah bisa diperjualbelikan.', ARRAY['Sebagai vokalis, gitaris, dan penulis lirik utama di balik grup musik independen Efek Rumah Kaca (ERK) dan Pandai Besi, Cholil Mahmud adalah salah satu komposer paling berpengaruh yang merekam luka politik, kegelisahan sosial, dan kerapuhan moral bangsa Indonesia ke dalam karya musik yang kontemplatif dan abadi.', 'Karya-karyanya—seperti ''Di Udara'' (lagu perlawanan mengenang pembunuhan aktivis HAM Munir), ''Hilang'', ''Cinta Melulu'', ''Desember'', hingga album epik ''Rimpang''—menjadi lagu wajib bagi gerakan masyarakat sipil, demonstrasi mahasiswa, dan refleksi batin jutaan anak muda. Cholil menolak kompromi integritas terhadap sensor korporasi dan memilih jalur kemandirian ekosistem musik independen.', 'Bagi generasi muda, Cholil Mahmud membuktikan bahwa musik bukan sekadar komoditas hiburan pelarian sesaat, melainkan senjata puitis untuk merawat ingatan kolektif bangsa, menyembuhkan luka batin, dan menolak tunduk pada impunitas kekuasaan.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2001 — 2008', 'KELAHIRAN EFEK RUMAH KACA & ALBUM DEBUT', 'Membentuk Efek Rumah Kaca di Jakarta, meluncurkan album debut dengan hit ''Cinta Melulu'' dan ''Di Udara'' yang menggebrak industri musik arus utama.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2015 — 2018', 'ALBUM SINISTIKISME & PENAMPILAN DI FESTIVAL DUNIA', 'Merilis album Sinestesia dan tampil di panggung musik internasional SXSW Austin Texas, menyuarakan isu hak asasi manusia Indonesia.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 — 2026', 'ALBUM RIMPANG & KEMANDIRIAN LABEL KENGAN', 'Merilis album mahakarya Rimpang yang mengupas jejaring solidaritas akar rumput dan mengoperasikan studio rekaman mandiri.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Diskografi Efek Rumah Kaca (Album Perlawanan & Kontemplasi)', 'Karya Musik Indie & Lirik Kritis Sosial', 'Album-album mahakarya musik Indonesia (Efek Rumah Kaca, Kamar Gelap, Sinestesia, Rimpang) yang memotret realitas politik dan luka kemanusiaan.', 'https://efekrumahkaca.net', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pandai Besi & Eksplorasi Musik Akustik Kamar', 'Kolektif Musik Orkestrasi Eksperimental', 'Proyek musikal yang merekonstruksi lagu-lagu ERK dalam aransemen megah bernuansa teatrikal yang didanai secara crowdfunding publik.', 'https://efekrumahkaca.net', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Gerakan Musik Pro-Bono Pembela Hak Asasi Manusia', 'Advokasi Keadilan Sosial Lewat Seni', 'Konsistensi tampil di Aksi Kamisan, panggung solidaritas petani Kendeng, dan konser amal buruh korban PHK.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Di Udara dan Selamanya Mengudara: Kisah di Balik Lagu Perlawanan Mengenang Munir', 'MUSIK & KEADILAN', '8 Menit Membaca', 'Catatan refleksi Cholil Mahmud tentang bagaimana sebaris lirik mampu menjadi benteng penjaga ingatan keadilan generasi muda.', 'Ketika pembunuh Munir masih bebas berkeliaran dan kekuasaan mencoba menghapus jejak kejahatan masa lalu, lagu Di Udara dinyanyikan ribuan anak muda di jalanan. Musik memiliki kekuatan magis untuk menolak lupa saat hukum negara lumpuh tak berdaya.', '/artikel/cholil-mahmud-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Rimpang: Filsafat Menjalar Diam-Diam Melawan Rezim Keangkuhan', 'DIALEKTIKA MUSIK', '7 Menit Membaca', 'Pembedahan konsep filosofis akar rimpang dalam album terbaru Efek Rumah Kaca sebagai model solidaritas komunal.', 'Seperti akar rimpang yang tumbuh diam-diam di bawah tanah yang gelap, gerakan perlawanan warga tidak butuh lampu sorot panggung yang silau. Ia menjalar dan saling menguatkan di bawah tanah hingga mampu merobohkan tembok kezaliman.', '/artikel/cholil-mahmud-2', 2);
END $$;

-- Figure: Kunto Aji (kunto-aji)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'kunto-aji' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Kunto Aji',
      title = 'Musisi, Penulis Lagu & Penggagas Album Terapi Batin ''Mantra Mantra''',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Memaafkan diri sendiri, berdamai dengan luka masa lalu, dan menerima kerapuhan batin adalah langkah paling berani sebelum melangkah menaklukkan dunia luar.',
      bio_paragraphs = ARRAY['Setelah menembus industri musik melalui ajang pencarian bakat televisi dan mencicipi popularitas pop konvensional, Kunto Aji Wibisono mengambil keputusan artistik yang sangat berani: keluar dari pakem lagu cinta klise demi mendengarkan jeritan kecemasan batin generasi muda.', 'Melalui riset mendalam bersama para psikolog klinis dan eksplorasi frekuensi audio 396 Hz (solfeggio frequency), Kunto Aji melahirkan album legendaris ''Mantra Mantra'' pada 2018. Lagu-lagu seperti ''Rehat'', ''Pilu Membiru'', dan ''Topik Semalam'' menjelma menjadi terapi kolektif yang menemani jutaan anak muda Indonesia saat menghadapi overthinking, quarter-life crisis, trauma keluarga, dan depresi mental perkotaan.', 'Kunto Aji membuktikan bahwa karya musik yang jujur dan menyentuh kerentanan batin terdalam manusia memiliki daya magis yang melampaui tren pasar—ia menjadi teman setia tempat jiwa-jiwa yang lelah menemukan ruang untuk bernapas dan pulih.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('kunto-aji', 'Kunto Aji', 'Musisi, Penulis Lagu & Penggagas Album Terapi Batin ''Mantra Mantra''', 'Perawat Jiwa & Rasa', 'Memaafkan diri sendiri, berdamai dengan luka masa lalu, dan menerima kerapuhan batin adalah langkah paling berani sebelum melangkah menaklukkan dunia luar.', ARRAY['Setelah menembus industri musik melalui ajang pencarian bakat televisi dan mencicipi popularitas pop konvensional, Kunto Aji Wibisono mengambil keputusan artistik yang sangat berani: keluar dari pakem lagu cinta klise demi mendengarkan jeritan kecemasan batin generasi muda.', 'Melalui riset mendalam bersama para psikolog klinis dan eksplorasi frekuensi audio 396 Hz (solfeggio frequency), Kunto Aji melahirkan album legendaris ''Mantra Mantra'' pada 2018. Lagu-lagu seperti ''Rehat'', ''Pilu Membiru'', dan ''Topik Semalam'' menjelma menjadi terapi kolektif yang menemani jutaan anak muda Indonesia saat menghadapi overthinking, quarter-life crisis, trauma keluarga, dan depresi mental perkotaan.', 'Kunto Aji membuktikan bahwa karya musik yang jujur dan menyentuh kerentanan batin terdalam manusia memiliki daya magis yang melampaui tren pasar—ia menjadi teman setia tempat jiwa-jiwa yang lelah menemukan ruang untuk bernapas dan pulih.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2015', 'HIT TERLALU LAMA SENDIRI & KEMANDIRIAN MUSIK', 'Merilis single Terlalu Lama Sendiri secara independen, memenangkan penghargaan Musik AMI Awards dan menolak didikte label besar.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2020', 'PELUNCURAN ALBUM MANTRA MANTRA & KARYA TERBAIK AMI', 'Merilis album mahakarya Mantra Mantra yang dinobatkan sebagai Album Terbaik Terbaik AMI Awards 2019 dan menjadi rujukan kesehatan mental anak muda.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 — 2026', 'ALBUM PENGANTAR PURBAKALA & KONSER TERAPI SUBUH', 'Meluncurkan album Pengantar Purwakala dan menggelar konser bersejarah saat fajar subuh di Candi Prambanan sebagai medium katarsis batin.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album: Mantra Mantra (Karya Musik Terapi Mental)', 'Karya Musik Psikologi Terapan & Pop Eksperimental', 'Album konsep pemulihan batin yang mengintegrasikan frekuensi audio relaksasi untuk meredakan kecemasan dan serangan panik.', 'https://open.spotify.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album: Pengantar Purwakala (Siklus Pendewasaan Diri)', 'Eksplorasi Musik Kontemplatif & Pertumbuhan Batin', 'Lanjutan perjalanan refleksi tentang menerima kehilangan, merawat harapan baru, dan menua dengan penuh kesadaran.', 'https://open.spotify.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Konser Katarsis Batin & Sesi Berbagi Pilu Membiru', 'Ruang Pemulihan Emosi Publik', 'Pertunjukan musik intim yang membuka ruang aman bagi penonton untuk menceritakan luka trauma dan menangis bersama secara melegakan.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menenangkan Badai di Kepala: Bagaimana Frekuensi Musik Kunto Aji Menjadi Terapi Kolektif Generasi Cemas', 'KESEHATAN MENTAL', '8 Menit Membaca', 'Pembedahan sains di balik frekuensi 396 Hz dan lirik lagu Rehat dalam menurunkan detak jantung dan hormon stres.', 'Di era linimasa yang menuntut kita untuk selalu produktif dan memamerkan kesuksesan semu, lagu Rehat hadir sebagai pelukan hangat yang berbisik: tidak apa-apa untuk berhenti sejenak. Mengakui bahwa kita sedang tidak baik-baik saja adalah awal dari pemulihan jiwa.', '/artikel/kunto-aji-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Pilu Membiru: Ketika Musik Menjadi Jembatan Berdamai dengan Penyesalan yang Tak Terucapkan', 'KATARSIS BATIN', '7 Menit Membaca', 'Kisah-kisah haru ribuan pendengar yang berhasil melewati duka kehilangan orang tercinta lewat lagu Kunto Aji.', 'Luka batin yang dipendam terlalu lama akan menjadi racun yang menggerogoti kesehatan fisik. Musik yang jujur membuka katup penahan air mata, membiarkan rasa duka mengalir keluar hingga batin kembali merasa lapang.', '/artikel/kunto-aji-2', 2);
END $$;

-- Figure: Sal Priadi (sal-priadi)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'sal-priadi' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Sal Priadi',
      title = 'Musisi, Penulis Lirik Puitis & Pencerita Keintiman Hubungan Manusia',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Menulis lirik lagu adalah cara mengabadikan kehangatan obrolan kecil di meja makan, getar canggung jatuh cinta, dan doa tulus seorang manusia bagi orang-orang terkasihnya.',
      bio_paragraphs = ARRAY['Lahir dan tumbuh di Malang, Jawa Timur, Salmantyo Ashrizky Priadi (Sal Priadi) menghadirkan warna baru yang sangat segar dan teatrikal dalam khazanah musik pop puitis Indonesia. Dengan diksi bahasa Indonesia yang kaya, rima yang tak lazim, dan intonasi tutur yang penuh penghayatan intim, Sal memotret dinamika asmara dan relasi keluarga secara mendalam.', 'Karya-karyanya—mulai dari ''Kultusan'', ''Ikat Aku di Tulang Belikatmu'', ''Amin Paling Serius'', hingga album fenomena ''MARKERS AND SUCH PENS FLASHDISKS'' dengan hit ''Gala Bunga Matahari''—berhasil menyentuh lapisan emosi paling lembut jutaan pendengar lintas generasi. Lagunya menjadi medium pelepasan rindu bagi mereka yang ditinggalkan orang tua atau pasangan tercinta.', 'Bagi generasi muda, Sal Priadi adalah perawat kepekaan rasa: mengajarkan bahwa di dunia modern yang serba tergesa-gesa dan sinis, mengekspresikan cinta dan kelembutan kata adalah bentuk keberanian manusiawi yang paling agung.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('sal-priadi', 'Sal Priadi', 'Musisi, Penulis Lirik Puitis & Pencerita Keintiman Hubungan Manusia', 'Perawat Jiwa & Rasa', 'Menulis lirik lagu adalah cara mengabadikan kehangatan obrolan kecil di meja makan, getar canggung jatuh cinta, dan doa tulus seorang manusia bagi orang-orang terkasihnya.', ARRAY['Lahir dan tumbuh di Malang, Jawa Timur, Salmantyo Ashrizky Priadi (Sal Priadi) menghadirkan warna baru yang sangat segar dan teatrikal dalam khazanah musik pop puitis Indonesia. Dengan diksi bahasa Indonesia yang kaya, rima yang tak lazim, dan intonasi tutur yang penuh penghayatan intim, Sal memotret dinamika asmara dan relasi keluarga secara mendalam.', 'Karya-karyanya—mulai dari ''Kultusan'', ''Ikat Aku di Tulang Belikatmu'', ''Amin Paling Serius'', hingga album fenomena ''MARKERS AND SUCH PENS FLASHDISKS'' dengan hit ''Gala Bunga Matahari''—berhasil menyentuh lapisan emosi paling lembut jutaan pendengar lintas generasi. Lagunya menjadi medium pelepasan rindu bagi mereka yang ditinggalkan orang tua atau pasangan tercinta.', 'Bagi generasi muda, Sal Priadi adalah perawat kepekaan rasa: mengajarkan bahwa di dunia modern yang serba tergesa-gesa dan sinis, mengekspresikan cinta dan kelembutan kata adalah bentuk keberanian manusiawi yang paling agung.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2019', 'DEBUT KULTUSAN & DUET AMIN PALING SERIUS', 'Merilis single debut Kultusan dan berduet bersama Nadin Amizah dalam Amin Paling Serius yang melambungkan namanya di panggung nasional.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 — 2022', 'ALBUM BERHATI & KARIER AKTING TEATRIKAL', 'Meluncurkan album debut Berhati dan merambah dunia seni peran membintangi film Seperti Dendam, Rindu Harus Dibayar Tuntas.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2024 — 2026', 'FENOMENA GALA BUNGA MATAHARI & TUR NUSANTARA', 'Merilis album Markers and Such Pens Flashdisks dengan hit Gala Bunga Matahari yang viral jutaan kali sebagai lagu rekonsiliasi duka.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album: MARKERS AND SUCH PENS FLASHDISKS', 'Karya Musik Pop Puitis & Narasi Kehidupan', 'Album yang merayakan kehangatan hubungan sehari-hari, peran menjadi ayah, dan rekonsiliasi rindu kepada mereka yang telah tiada.', 'https://open.spotify.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album: Berhati (Eksplorasi Cinta Teatrikal)', 'Musik Romantisisme Gelap & Sastra Audio', 'Kumpulan lagu puitis bertema cinta, kepasrahan batin, dan keintiman hubungan manusia dengan aransemen orkestrasi megah.', 'https://open.spotify.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Karya Teater & Seni Peran Sinematik', 'Eksplorasi Seni Pertunjukan & Lakon', 'Penampilan akting karakter yang memukau dalam film adaptasi sastra dan pertunjukan teater musikal independen.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Gala Bunga Matahari: Bagaimana Sal Priadi Mengubah Rasa Duka Menjadi Doa Rindu yang Menyejukkan', 'SASTRA MUSIK', '7 Menit Membaca', 'Pembedahan lirik puitis tentang dialog imajiner dengan orang tercinta yang telah berpulang ke surga.', 'Kehilangan orang tua atau pasangan adalah duka terberat yang sering kali membuat seseorang merasa hampa. Lirik Gala Bunga Matahari menghadirkan gambaran surga yang indah dan tenang, membantu jutaan orang yang berduka untuk tersenyum sembari melepas rindu dengan penuh keikhlasan.', '/artikel/sal-priadi-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Merawat Diksi Bahasa Indonesia: Keberanian Sal Priadi Menulis Lirik yang Melawan Klise', 'LITERATUR POP', '6 Menit Membaca', 'Bagaimana kekayaan kosakata bahasa Indonesia mampu menghasilkan metafora asmara yang segar dan menggugah batin.', 'Bahasa Indonesia memiliki perbendaharaan kata yang sangat luas dan puitis bila kita berani menggali kamus dan sastra lama. Sal Priadi membuktikan bahwa generasi muda sangat haus akan lirik lagu yang memiliki kedalaman rasa dan estetika bahasa yang anggun.', '/artikel/sal-priadi-2', 2);
END $$;

-- Figure: Baskara Putra (Hindia) (baskara-putra)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'baskara-putra' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Baskara Putra (Hindia)',
      title = 'Musisi, Penulis Lagu, Vokalis .FEAST & Pendiri Label Sun Eater',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Jangan sampai kita lupa bagaimana caranya merasa dan menjadi manusia seutuhnya, hanya karena terlalu sibuk bertahan hidup di tengah kerasnya tuntutan kota.',
      bio_paragraphs = ARRAY['Sebagai motor penggerak grup band rock sosio-politik .FEAST, vokalis band indie-rock Lomba Sihir, dan melalui proyek solonya Hindia, Daniel Baskara Putra adalah salah satu figur paling berpengaruh yang mendefinisikan lanskap musik anak muda generasi Z dan milenial Indonesia.', 'Karya-karyanya—mulai dari album ''Menari dengan Bayangan'' (dengan lagu wajib ''Secukupnya'', ''Evaluasi'', dan ''Rumah ke Rumah'') hingga album ganda ''Lagipula Hidup Akan Berakhir''—merefleksikan secara telanjang realitas keras kelas pekerja muda: tekanan karier perkotaan, quarter-life crisis, krisis iklim, trauma keluarga, hingga rasa kesepian di era hiperkonektivitas digital.', 'Melalui label rekaman independen Sun Eater, Baskara juga membangun ekosistem mandiri bagi musisi muda baru. Ia adalah juru bicara jujur kegelisahan zamannya: membuktikan bahwa kerentanan batin dan kegagalan adalah bagian tak terpisahkan dari proses menjadi manusia yang utuh.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('baskara-putra', 'Baskara Putra (Hindia)', 'Musisi, Penulis Lagu, Vokalis .FEAST & Pendiri Label Sun Eater', 'Perawat Jiwa & Rasa', 'Jangan sampai kita lupa bagaimana caranya merasa dan menjadi manusia seutuhnya, hanya karena terlalu sibuk bertahan hidup di tengah kerasnya tuntutan kota.', ARRAY['Sebagai motor penggerak grup band rock sosio-politik .FEAST, vokalis band indie-rock Lomba Sihir, dan melalui proyek solonya Hindia, Daniel Baskara Putra adalah salah satu figur paling berpengaruh yang mendefinisikan lanskap musik anak muda generasi Z dan milenial Indonesia.', 'Karya-karyanya—mulai dari album ''Menari dengan Bayangan'' (dengan lagu wajib ''Secukupnya'', ''Evaluasi'', dan ''Rumah ke Rumah'') hingga album ganda ''Lagipula Hidup Akan Berakhir''—merefleksikan secara telanjang realitas keras kelas pekerja muda: tekanan karier perkotaan, quarter-life crisis, krisis iklim, trauma keluarga, hingga rasa kesepian di era hiperkonektivitas digital.', 'Melalui label rekaman independen Sun Eater, Baskara juga membangun ekosistem mandiri bagi musisi muda baru. Ia adalah juru bicara jujur kegelisahan zamannya: membuktikan bahwa kerentanan batin dan kegagalan adalah bagian tak terpisahkan dari proses menjadi manusia yang utuh.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2014 — 2018', 'MEMBESARKAN .FEAST & ROCK SOSIO-POLITIK', 'Merilis album MULTIVERSES dan lagu Peradaban bersama .FEAST, mengkritik keras radikalisme, ketimpangan sosial, dan represi politik.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2019 — 2021', 'HINDIA MENARI DENGAN BAYANGAN & PENDIRIAN SUN EATER', 'Meluncurkan album solo debut Menari dengan Bayangan yang memecahkan rekor ratusan juta streaming dan mendirikan label rekaman Sun Eater.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 — 2026', 'ALBUM GANDA LAGIPULA HIDUP AKAN BERAKHIR & TUR DUNIA', 'Merilis album ganda 28 lagu mengupas isu eksistensial dan krisis iklim, menggelar tur konser di berbagai negara Asia Tenggara, Australia, dan Jepang.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album Hindia: Menari dengan Bayangan', 'Karya Musik Pop Alternatif & Kesehatan Mental', 'Album konsep fenomenal yang merangkum kegelisahan anak muda dalam menavigasi karir, asmara, dan luka masa kecil.', 'https://open.spotify.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album Hindia: Lagipula Hidup Akan Berakhir', 'Karya Musik Eksistensial & Kritik Zaman', 'Album ganda 28 trek yang membedah krisis iklim, kapitalisme modern, inflasi harga rumah, dan masa depan generasi muda.', 'https://open.spotify.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Sun Eater (Perusahaan Ekosistem Musik Independen)', 'Manajemen Musik & Inkubasi Kreator Baru', 'Perusahaan rekaman mandiri yang menaungi musisi-musisi muda terdepan nusantara dan mendorong kedaulatan hak cipta kreator.', 'https://suneatercoven.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Secukupnya di Tengah Kota yang Menuntut Segalanya: Mengapa Hindia Menjadi Titik Tumpu Anak Muda Urban', 'KULTUR GENERASI', '8 Menit Membaca', 'Analisis sosiologis tentang bagaimana lirik lagu Baskara Putra menangkap keresahan generasi sandwich dan pekerja lepas.', 'Generasi muda hari ini hidup di bawah tekanan ganda: tuntutan ekonomi yang kian mencekik dan ilusi kesempurnaan hidup di media sosial. Lirik Evaluasi dan Secukupnya hadir seperti kawan seperjuangan di gerbong KRL malam yang mengingatkan bahwa kita berhak untuk merasa lelah dan gagal tanpa harus merasa hina.', '/artikel/baskara-putra-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kemandirian Ekosistem Musik: Bagaimana Sun Eater Membangun Jalur Distribusi Sendiri', 'INDUSTRI MUSIK', '7 Menit Membaca', 'Strategi membesarkan musisi independen tanpa harus menjual hak cipta kepada konglomerat rekaman internasional.', 'Musisi hari ini tidak lagi butuh restu produser eksekutif untuk merilis karyanya. Dengan menguasai hak cipta master rekaman sendiri dan membangun hubungan langsung dengan komunitas pendengar, musisi lokal mampu memiliki kedaulatan ekonomi jangka panjang.', '/artikel/baskara-putra-2', 2);
END $$;

-- Figure: Nadin Amizah (nadin-amizah)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'nadin-amizah' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Nadin Amizah',
      title = 'Musisi Folk Kontemplatif, Penulis Lirik Intim & Penutur Kedewasaan Jiwa',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Bercerita dengan jujur tentang luka masa kecil dan kecemasan jiwa adalah cara terbaik menyembuhkan diri sendiri sembari memeluk jiwa-jiwa lain yang sedang terluka.',
      bio_paragraphs = ARRAY['Mengawali langkah musikal di usia remaja dan mencuri perhatian panggung nasional lewat kolaborasi dalam lagu ''All Good'' bersama Dipha Barus, Nadin Amizah menolak terjebak dalam pusaran musik elektronik komersial dan memilih menempuh jalur musik folk kontemplatif yang sangat personal.', 'Melalui album debutnya yang monumentil ''Selamat Ulang Tahun'' (2020) yang ia rekam dan rilis mandiri di usia 20 tahun, Nadin menulis surat cinta sekaligus refleksi mendalam tentang proses pendewasaan, ketakutan menua, dan rasa terima kasih kepada sang ibu lewat lagu legendaris ''Bertaut''. Karyanya dilanjutkan dengan album ''Untuk Dunia, Cinta, dan Kotornya'' yang membedah penerimaan atas cacat cela diri.', 'Dengan gaya panggung teatrikal vintage yang anggun dan interaksi puitis yang hangat, Nadin Amizah adalah perawat jiwa bagi jutaan remaja dan perempuan muda: membuktikan bahwa kelembutan batin dan kejujuran membuka kerentanan diri adalah kekuatan seni yang paling berdaya magis.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('nadin-amizah', 'Nadin Amizah', 'Musisi Folk Kontemplatif, Penulis Lirik Intim & Penutur Kedewasaan Jiwa', 'Perawat Jiwa & Rasa', 'Bercerita dengan jujur tentang luka masa kecil dan kecemasan jiwa adalah cara terbaik menyembuhkan diri sendiri sembari memeluk jiwa-jiwa lain yang sedang terluka.', ARRAY['Mengawali langkah musikal di usia remaja dan mencuri perhatian panggung nasional lewat kolaborasi dalam lagu ''All Good'' bersama Dipha Barus, Nadin Amizah menolak terjebak dalam pusaran musik elektronik komersial dan memilih menempuh jalur musik folk kontemplatif yang sangat personal.', 'Melalui album debutnya yang monumentil ''Selamat Ulang Tahun'' (2020) yang ia rekam dan rilis mandiri di usia 20 tahun, Nadin menulis surat cinta sekaligus refleksi mendalam tentang proses pendewasaan, ketakutan menua, dan rasa terima kasih kepada sang ibu lewat lagu legendaris ''Bertaut''. Karyanya dilanjutkan dengan album ''Untuk Dunia, Cinta, dan Kotornya'' yang membedah penerimaan atas cacat cela diri.', 'Dengan gaya panggung teatrikal vintage yang anggun dan interaksi puitis yang hangat, Nadin Amizah adalah perawat jiwa bagi jutaan remaja dan perempuan muda: membuktikan bahwa kelembutan batin dan kejujuran membuka kerentanan diri adalah kekuatan seni yang paling berdaya magis.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2019', 'DEBUT ALL GOOD & AMI AWARDS KARYA TERBAIK', 'Meraih AMI Awards Karya Produksi Terbaik di usia belia dan merilis single solo puitis Rumpang dan Sorai.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020', 'ALBUM SELAMAT ULANG TAHUN & FENOMENA BERTAUT', 'Merilis album mahakarya Selamat Ulang Tahun bertepatan di hari kelahirannya yang didengar ratusan juta kali dan menjadi himne relasi ibu-anak.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2023 — 2026', 'KONSER TUNGGAL SELAMAT ULANG TAHUN & ALBUM KEDUA', 'Menggelar konser tunggal teatrikal megah di Jakarta dan meluncurkan album Untuk Dunia, Cinta, dan Kotornya menembus panggung festival Asia.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album: Selamat Ulang Tahun (Karya Mahakarya Pendewasaan)', 'Karya Musik Folk Akustik & Narasi Keluarga', 'Album konsep yang mendokumentasikan rasa terima kasih kepada keluarga dan ketakutan menyongsong usia dewasa.', 'https://open.spotify.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Album: Untuk Dunia, Cinta, dan Kotornya', 'Musik Folk Teatrikal & Penerimaan Diri', 'Eksplorasi emosi tentang mencintai seseorang secara utuh bersama segala trauma dan ketidaksempurnaannya.', 'https://open.spotify.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pertunjukan Konser Teatrikal Selamat Ulang Tahun', 'Seni Pertunjukan Musikal & Teater Intim', 'Konser megah yang menggabungkan koreografi tari kontemporer, monolog puitis, dan instalasi kamar tidur masa kecil.', 'https://sektorlokal.id', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Bertaut: Bagaimana Lagu Cinta Nadin Amizah Memulihkan Jalinan Hati Ibu dan Anak', 'RELASI KELUARGA', '7 Menit Membaca', 'Refleksi tentang kekuatan lirik Bertaut dalam menjembatani jurang komunikasi antargenerasi di dalam rumah.', 'Hubungan antara ibu dan anak perempuan sering kali dipenuhi dinamika rumit yang sulit diungkapkan dengan kata-kata biasa. Lirik Bertaut hadir sebagai jembatan maaf dan terima kasih, mengingatkan bahwa di balik segala salah paham, detak jantung kita pernah berpadu di dalam rahim yang sama.', '/artikel/nadin-amizah-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Merayakan Ketidaksempurnaan: Pelajaran Menerima Diri dari Nadin Amizah', 'KESEHATAN BATIN', '6 Menit Membaca', 'Pentingnya berdamai dengan trauma masa lalu dan menolak standar kesempurnaan hidup yang tidak realistis.', 'Dunia sering kali menuntut kita untuk selalu tampil sempurna, kuat, dan bahagia. Nadin membuktikan bahwa keberanian menunjukkan sisi rapuh dan luka batin justru membuat kita merasa lebih terhubung sebagai sesama manusia yang sedang belajar hidup.', '/artikel/nadin-amizah-2', 2);
END $$;

-- Figure: M. Aan Mansyur (m-aan-mansyur)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'm-aan-mansyur' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'M. Aan Mansyur',
      title = 'Penyair, Penulis Buku & Pendiri Komunitas Literasi Katakerja Makassar',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Puisi adalah ruang hening untuk menyapa diri sendiri di tengah riuhnya linimasa yang kerap membuat kita lupa arah jalan pulang.',
      bio_paragraphs = ARRAY['Lahir di Bone, Sulawesi Selatan, M. Aan Mansyur adalah salah satu penyair kontemporer paling cemerlang di Indonesia yang berhasil membuktikan bahwa puisi sastra bermutu tinggi mampu merebut hati generasi digital tanpa kehilangan ketajaman maknanya.', 'Karya-karya puisinya—seperti ''Tidak Ada New York Hari Ini'' (yang menjadi jiwa dalam film Ada Apa Dengan Cinta? 2), ''Melihat Api Bekerja'', ''Sebelum Sendiri'', hingga ''Mengapa Luka Tidak Memaafkan Pisau''—dikenal memiliki metafora sunyi yang sangat menghunjam batin pembaca. Tak hanya menulis di atas kertas, Aan membangun ruang literasi mandiri Katakerja di Makassar—sebuah perpustakaan komunitas dan ruang dialog inklusif bagi pemuda Indonesia Timur.', 'Bagi generasi muda yang haus akan ketenangan batin, Aan Mansyur adalah perawat sunyi: mengingatkan kita bahwa membaca puisi adalah cara paling lembut untuk merawat empati kemanusiaan di dunia yang kian bising dan individualistik.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('m-aan-mansyur', 'M. Aan Mansyur', 'Penyair, Penulis Buku & Pendiri Komunitas Literasi Katakerja Makassar', 'Perawat Jiwa & Rasa', 'Puisi adalah ruang hening untuk menyapa diri sendiri di tengah riuhnya linimasa yang kerap membuat kita lupa arah jalan pulang.', ARRAY['Lahir di Bone, Sulawesi Selatan, M. Aan Mansyur adalah salah satu penyair kontemporer paling cemerlang di Indonesia yang berhasil membuktikan bahwa puisi sastra bermutu tinggi mampu merebut hati generasi digital tanpa kehilangan ketajaman maknanya.', 'Karya-karya puisinya—seperti ''Tidak Ada New York Hari Ini'' (yang menjadi jiwa dalam film Ada Apa Dengan Cinta? 2), ''Melihat Api Bekerja'', ''Sebelum Sendiri'', hingga ''Mengapa Luka Tidak Memaafkan Pisau''—dikenal memiliki metafora sunyi yang sangat menghunjam batin pembaca. Tak hanya menulis di atas kertas, Aan membangun ruang literasi mandiri Katakerja di Makassar—sebuah perpustakaan komunitas dan ruang dialog inklusif bagi pemuda Indonesia Timur.', 'Bagi generasi muda yang haus akan ketenangan batin, Aan Mansyur adalah perawat sunyi: mengingatkan kita bahwa membaca puisi adalah cara paling lembut untuk merawat empati kemanusiaan di dunia yang kian bising dan individualistik.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2005 — 2013', 'PENDIRIAN KOMUNITAS KATAKERJA MAKASSAR', 'Mendirikan ruang kreatif dan perpustakaan komunitas Katakerja di Makassar, menjadi episentrum literasi alternatif pemuda Sulawesi.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016', 'TIDAK ADA NEW YORK HARI INI & GELOMBANG PUISI', 'Menulis kumpulan puisi Tidak Ada New York Hari Ini untuk film AADC 2 yang memicu kebangkitan minat membaca puisi di kalangan jutaan anak muda.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2026', 'FESTIVAL SASTRA MAKASSAR & RESIDENSI DUNIA', 'Mengkurasi Makassar International Writers Festival (MIWF) dan residensi kepenulisan di Inggris, Australia, dan Belanda.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Tidak Ada New York Hari Ini (Kumpulan Puisi)', 'Karya Sastra Puisi & Fotografi', 'Antologi puisi kesunyian perkotaan yang fenomenal dengan terjemahan multibahasa dan ilustrasi fotografi analog.', 'https://www.gramedia.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Melihat Api Bekerja', 'Karya Sastra Puisi & Ilustrasi', 'Kumpulan puisi pemenang Kusala Sastra Khatulistiwa yang membedah cinta, ingatan kehilangan, dan rasa sakit secara visual puitis.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Katakerja (Ruang Belajar & Perpustakaan Komunitas Makassar)', 'Pusat Kebudayaan & Literasi Mandiri', 'Wadah swadaya ratusan anak muda Indonesia Timur untuk berdiskusi sastra, mengarsip buku sejarah lokal, dan lokakarya menulis.', 'https://katakerja.org', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Seni Merawat Kesunyian: Mengapa Puisi Adalah Terapi Terbaik Melawan Bisingnya Linimasa', 'SASTRA & REFLEKSI', '7 Menit Membaca', 'Catatan Aan Mansyur tentang bagaimana membaca sebaris bait puisi mampu memperlambat detak waktu yang serba terburu-buru.', 'Media sosial membiasakan kita untuk bereaksi cepat atas segala hal tanpa sempat merenungkannya. Puisi hadir sebagai jeda: mengajak kita duduk diam, merasakan hembusan angin, dan mendengarkan suara batin kita sendiri yang sering kali terabaikan.', '/artikel/m-aan-mansyur-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menyalakan Lilin di Katakerja: Bagaimana Komunitas Literasi Daerah Membuka Cakrawala Pemuda', 'LITERASI AKAR RUMPUT', '6 Menit Membaca', 'Kisah perjuangan merawat ruang belajar swadaya di Makassar yang melahirkan generasi penulis dan pemikir baru.', 'Sebuah perpustakaan kecil di sudut kota yang dikelola dengan cinta mampu mengubah takdir ribuan pemuda. Di Katakerja, buku-buku bukan sekadar pajangan di rak, melainkan pemantik diskusi kritis yang membebaskan pikiran anak-anak muda.', '/artikel/m-aan-mansyur-2', 2);
END $$;

-- Figure: Kamila Andini (kamila-andini)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'kamila-andini' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Kamila Andini',
      title = 'Sutradara Sinema, Penulis Skenario & Penutur Keheningan Luka Perempuan Nusantara',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Sinema adalah medium paling intim untuk membicarakan luka batin, represi kultural, dan ketabahan luar biasa perempuan Indonesia yang sering kali dibisukan oleh sejarah.',
      bio_paragraphs = ARRAY['Mengawali langkah penyutradaraan dengan film ''The Mirror Never Lies'' (Laut Bercermin) yang mengangkat kearifan suku Bajo di Wakatobi, Kamila Andini menancapkan posisinya sebagai salah satu auteur sinema paling berpengaruh di Asia Tenggara.', 'Karya-karyanya—seperti ''Sekala Niskala'' (The Seen and Unseen), ''Yuni'' (pemenang Platform Prize di Toronto International Film Festival), ''Nana'' (Before, Now & Then yang meraih Silver Bear di Berlin International Film Festival), hingga serial mahakarya ''Gadis Kretek''—dikenal memiliki kekuatan visual yang puitis, hening, dan berani membongkar represi patriarki, trauma sejarah 1965, dan hak otonomi tubuh perempuan.', 'Kamila membuktikan bahwa sinema Indonesia mampu berbicara sejajar di panggung festival film tertinggi dunia tanpa harus meniru gaya bercerita Hollywood: ia mengangkat mitologi lokal, bahasa daerah, dan denyut batin perempuan nusantara dengan martabat estetika yang sangat luhur.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('kamila-andini', 'Kamila Andini', 'Sutradara Sinema, Penulis Skenario & Penutur Keheningan Luka Perempuan Nusantara', 'Perawat Jiwa & Rasa', 'Sinema adalah medium paling intim untuk membicarakan luka batin, represi kultural, dan ketabahan luar biasa perempuan Indonesia yang sering kali dibisukan oleh sejarah.', ARRAY['Mengawali langkah penyutradaraan dengan film ''The Mirror Never Lies'' (Laut Bercermin) yang mengangkat kearifan suku Bajo di Wakatobi, Kamila Andini menancapkan posisinya sebagai salah satu auteur sinema paling berpengaruh di Asia Tenggara.', 'Karya-karyanya—seperti ''Sekala Niskala'' (The Seen and Unseen), ''Yuni'' (pemenang Platform Prize di Toronto International Film Festival), ''Nana'' (Before, Now & Then yang meraih Silver Bear di Berlin International Film Festival), hingga serial mahakarya ''Gadis Kretek''—dikenal memiliki kekuatan visual yang puitis, hening, dan berani membongkar represi patriarki, trauma sejarah 1965, dan hak otonomi tubuh perempuan.', 'Kamila membuktikan bahwa sinema Indonesia mampu berbicara sejajar di panggung festival film tertinggi dunia tanpa harus meniru gaya bercerita Hollywood: ia mengangkat mitologi lokal, bahasa daerah, dan denyut batin perempuan nusantara dengan martabat estetika yang sangat luhur.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2011', 'DEBUT THE MIRROR NEVER LIES & WAKATOBI', 'Menyutradarai film debut tentang tradisi maritim suku Bajo yang memenangkan penghargaan FFI dan festival internasional di Berlin dan Tokyo.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2021', 'SEKALA NISKALA & PRESTASI BERSEJARAH FILM YUNI', 'Menyutradarai Sekala Niskala dan Yuni yang memenangkan Platform Prize di Toronto International Film Festival (TIFF) 2021.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2022 — 2026', 'NANA DI BERLINALE & FENOMENA GADIS KRETEK', 'Meraih Silver Bear di Berlinale untuk film Nana dan menyutradarai serial Gadis Kretek yang ditonton puluhan juta pemirsa global di Netflix.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Film Bioskop: Yuni (Platform Prize TIFF)', 'Karya Sinema Realisme Sosial & Pendidikan Remaja', 'Film yang membedah dilema pernikahan dini, impian pendidikan tinggi perempuan muda, dan dogma keagamaan sempit di Banten.', 'https://fourcoloursfilms.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Film Bioskop: Nana (Before, Now & Then)', 'Sinema Sejarah Puitis & Trauma Masa Lalu', 'Drama sejarah berbahasa Sunda tentang ketabahan perempuan korban pergolakan politik 1960-an yang meraih Silver Bear di Berlinale.', 'https://fourcoloursfilms.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Serial Mahakarya: Gadis Kretek', 'Serial Drama Epik & Sejarah Industri Tembakau', 'Serial sinematik internasional yang mengangkat kisah Dasiyah—perempuan peracik saus kretek yang mendobrak dominasi patriarki 1960-an.', 'https://netflix.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Bahasa Keheningan: Mengapa Film Kamila Andini Berbicara Lebih Dalam Lewat Tatapan Mata', 'ESTETIKA SINEMA', '8 Menit Membaca', 'Analisis gaya bertutur visual puitis Kamila Andini dalam memotret dinamika emosi batin perempuan.', 'Di tengah sinema komersial yang dipenuhi dialog berisik dan ledakan sensasi, film-film Kamila Andini memberi ruang bagi penonton untuk mendengar desau angin, keheningan kamar tidur, dan tatapan mata seorang perempuan yang menahan duka. Di sanalah letak kekuatan magis sinema sejati.', '/artikel/kamila-andini-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Membongkar Belenggu Patriarki: Pesan Emansipasi di Balik Karakter Yuni dan Dasiyah', 'KEADILAN GENDER', '7 Menit Membaca', 'Bagaimana karakter perempuan dalam karya Kamila Andini merebut kembali hak untuk bermimpi dan menentukan nasibnya sendiri.', 'Perempuan dalam sejarah kita kerap diposisikan sebagai pelengkap yang pasif di dapur. Melalui karakter Yuni yang menolak dipaksa menikah muda dan Dasiyah yang memperjuangkan racikan kreteknya, Kamila membuktikan bahwa perempuan nusantara selalu memiliki api perlawanan yang tak pernah padam.', '/artikel/kamila-andini-2', 2);
END $$;

-- Figure: Marchella FP (marchella-fp)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'marchella-fp' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Marchella FP',
      title = 'Penulis, Kreator Naratif & Pendiri Ekosistem Cerita NKCTHI (Nanti Kita Cerita Tentang Hari Ini)',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Buku adalah pelukan hangat bagi jiwa-jiwa yang merasa sendirian di tengah kota besar; sebaris kalimat sederhana yang jujur dapat menyelamatkan seseorang yang sedang putus asa.',
      bio_paragraphs = ARRAY['Mengawali langkah lewat buku ilustrasi nostalgia masa kecil ''Generasi 90an'' yang sukses besar, Marchella Febritrisia Putri (Marchella FP) melakukan lompatan artistik yang mengubah lanskap penerbitan buku modern Indonesia saat merilis ''Nanti Kita Cerita Tentang Hari Ini'' (NKCTHI) pada 2018.', 'Dengan kejelian merajut kutipan-kutipan pendek yang sarat perenungan emosional, ilustrasi minimalis yang elegan, dan pemahaman mendalam atas luka keluarga serta kecemasan anak muda, NKCTHI menjelma menjadi fenomena literatur nasional yang terjual ratusan ribu eksemplar dan diadaptasi menjadi film box office peraih jutaan penonton.', 'Marchella terus melahirkan karya-karya narasi pemulihan batin seperti ''Kamu Terlalu Banyak Bercanda'' (KTBB) dan ''Tabi''. Ia adalah arsitek pencerita visual yang merawat kesehatan emosional generasi muda: membimbing pembaca untuk berani berdamai dengan trauma keluarga dan menemukan rasa syukur di tengah ketidaksempurnaan hidup.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('marchella-fp', 'Marchella FP', 'Penulis, Kreator Naratif & Pendiri Ekosistem Cerita NKCTHI (Nanti Kita Cerita Tentang Hari Ini)', 'Perawat Jiwa & Rasa', 'Buku adalah pelukan hangat bagi jiwa-jiwa yang merasa sendirian di tengah kota besar; sebaris kalimat sederhana yang jujur dapat menyelamatkan seseorang yang sedang putus asa.', ARRAY['Mengawali langkah lewat buku ilustrasi nostalgia masa kecil ''Generasi 90an'' yang sukses besar, Marchella Febritrisia Putri (Marchella FP) melakukan lompatan artistik yang mengubah lanskap penerbitan buku modern Indonesia saat merilis ''Nanti Kita Cerita Tentang Hari Ini'' (NKCTHI) pada 2018.', 'Dengan kejelian merajut kutipan-kutipan pendek yang sarat perenungan emosional, ilustrasi minimalis yang elegan, dan pemahaman mendalam atas luka keluarga serta kecemasan anak muda, NKCTHI menjelma menjadi fenomena literatur nasional yang terjual ratusan ribu eksemplar dan diadaptasi menjadi film box office peraih jutaan penonton.', 'Marchella terus melahirkan karya-karya narasi pemulihan batin seperti ''Kamu Terlalu Banyak Bercanda'' (KTBB) dan ''Tabi''. Ia adalah arsitek pencerita visual yang merawat kesehatan emosional generasi muda: membimbing pembaca untuk berani berdamai dengan trauma keluarga dan menemukan rasa syukur di tengah ketidaksempurnaan hidup.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 — 2015', 'PELUNCURAN GENERASI 90AN & BESTSELLER', 'Menerbitkan buku Generasi 90an yang memicu gelombang nostalgia massal dan membangun komunitas pembaca setia.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2020', 'FENOMENA NKCTHI & ADAPTASI FILM BOX OFFICE', 'Merilis buku NKCTHI yang memecahkan rekor pra-pesan buku nasional dan memenangkan Penulis Terbaik IKAPI Awards serta adaptasi film bioskop.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2021 — 2026', 'EKOSISTEM TABI & IP DEVELOPMENT MULTIMEDIA', 'Meluncurkan buku Tabi di Jepang dan Indonesia serta mengembangkan universe cerita multimedia berbasis pemulihan emosional warga.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Nanti Kita Cerita Tentang Hari Ini (NKCTHI)', 'Karya Literatur Visual & Refleksi Batin', 'Buku panduan emosional keluarga dan pendewasaan diri yang menjadi rujukan anak muda dalam menavigasi duka dan harapan.', 'https://www.gramedia.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: Kamu Terlalu Banyak Bercanda (KTBB)', 'Karya Tulis Eksplorasi Sisi Gelap & Emosi Manusia', 'Kumpulan surat batin yang membedah rasa marah, kecewa, dan ketakutan yang sering kali dipaksa disembunyikan di balik senyuman.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku & Eksplorasi Seni: Tabi (Perjalanan Patah Hati)', 'Karya Fiksi Visual & Seni Instalasi', 'Novel grafis perjalanan menyembuhkan luka patah hati di Jepang yang memadukan augmented reality dan sastra visual.', 'https://www.gramedia.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menyembuhkan Luka Keluarga Lewat Cerita: Fenomena NKCTHI yang Membuka Ruang Dialog Antargenerasi', 'LITERATUR VISUAL', '7 Menit Membaca', 'Bagaimana buku Marchella FP membuka percakapan yang selama ini tabu di meja makan keluarga Indonesia.', 'Banyak keluarga di Indonesia yang hidup serumah namun saling terasing satu sama lain karena tidak pernah belajar mengekspresikan perasaan secara jujur. NKCTHI menjadi pemantik yang membuat orang tua dan anak saling memeluk dan mengakui kerapuhan masing-masing.', '/artikel/marchella-fp-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Dari Buku Menjadi IP Multimedia: Pelajaran Membangun Universe Cerita yang Bernyawa', 'INDUSTRI KREATIF', '6 Menit Membaca', 'Strategi Marchella FP mengembangkan karya tulis menjadi film layar lebar, merchandise, dan instalasi seni terpadu.', 'Sebuah karya yang hebat berakar pada kejujuran rasa. Ketika sebuah cerita ditulis dari pengalaman batin yang paling otentik, cerita itu akan mampu bertransformasi ke berbagai format media dan tetap menyentuh hati jutaan orang.', '/artikel/marchella-fp-2', 2);
END $$;

-- Figure: Eka Kurniawan (eka-kurniawan)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'eka-kurniawan' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Eka Kurniawan',
      title = 'Sastrawan, Pengarang Realisme Magis Indonesia & Nomine Man Booker International Prize',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Menulis sastra adalah cara merebut kembali ingatan sejarah dan luka rakyat jelata yang coba dikubur dan dimanipulasi oleh kekuasaan yang lalim.',
      bio_paragraphs = ARRAY['Lahir di Tasikmalaya dan menyelesaikan studi Filsafat di Universitas Gadjah Mada dengan skripsi legendaris tentang Pramoedya Ananta Toer, Eka Kurniawan menjelma menjadi salah satu novelis terbesar Indonesia yang diakui dunia internasional sebagai penerus tradisi sastra realisme magis Gabriel García Márquez.', 'Novel-novel mahakaryanya—mulai dari ''Cantik Itu Luka'' (Beauty Is a Wound yang diterjemahkan ke lebih dari 35 bahasa dunia), ''Lelaki Harimau'' (Man Tiger yang masuk nominasi Man Booker International Prize 2016), hingga ''Seperti Dendam, Rindu Harus Dibayar Tuntas''—mengawinkan mitologi rakyat, kekerasan politik era kolonial dan Orde Baru, serta humor gelap yang membedah kebrutalan masyarakat dengan keindahan bahasa sastra yang luar biasa.', 'Dianugerahi Prince Claus Award di Belanda, Eka Kurniawan membuktikan bahwa sastra Indonesia berakar pada kedalaman tanah kelahirannya mampu memukau dan mengguncang kanon sastra dunia.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('eka-kurniawan', 'Eka Kurniawan', 'Sastrawan, Pengarang Realisme Magis Indonesia & Nomine Man Booker International Prize', 'Perawat Jiwa & Rasa', 'Menulis sastra adalah cara merebut kembali ingatan sejarah dan luka rakyat jelata yang coba dikubur dan dimanipulasi oleh kekuasaan yang lalim.', ARRAY['Lahir di Tasikmalaya dan menyelesaikan studi Filsafat di Universitas Gadjah Mada dengan skripsi legendaris tentang Pramoedya Ananta Toer, Eka Kurniawan menjelma menjadi salah satu novelis terbesar Indonesia yang diakui dunia internasional sebagai penerus tradisi sastra realisme magis Gabriel García Márquez.', 'Novel-novel mahakaryanya—mulai dari ''Cantik Itu Luka'' (Beauty Is a Wound yang diterjemahkan ke lebih dari 35 bahasa dunia), ''Lelaki Harimau'' (Man Tiger yang masuk nominasi Man Booker International Prize 2016), hingga ''Seperti Dendam, Rindu Harus Dibayar Tuntas''—mengawinkan mitologi rakyat, kekerasan politik era kolonial dan Orde Baru, serta humor gelap yang membedah kebrutalan masyarakat dengan keindahan bahasa sastra yang luar biasa.', 'Dianugerahi Prince Claus Award di Belanda, Eka Kurniawan membuktikan bahwa sastra Indonesia berakar pada kedalaman tanah kelahirannya mampu memukau dan mengguncang kanon sastra dunia.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2002', 'PELUNCURAN CANTIK ITU LUKA', 'Menerbitkan novel debut Cantik Itu Luka yang merekonstruksi sejarah kelam bangsa lewat tokoh Dewi Ayu di kota fiktif Halimunda.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2016', 'NOMINASI MAN BOOKER INTERNATIONAL PRIZE', 'Novel Lelaki Harimau masuk dalam daftar panjang penghargaan sastra paling bergengsi di dunia, Man Booker International Prize.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2018 — 2026', 'PRINCE CLAUS AWARD & PENDIRIAN JURNAL SASTRA', 'Menerima Prince Claus Award dari Kerajaan Belanda atas kontribusi sastra dan aktif membina penerbitan independen lokal.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Novel: Cantik Itu Luka (Beauty Is a Wound)', 'Mahakarya Sastra Realisme Magis Indonesia', 'Epik sastra yang mengisahkan sejarah kekerasan Indonesia dari masa penjajahan Belanda, pendudukan Jepang, hingga pembantaian 1965.', 'https://www.gramedia.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Novel: Lelaki Harimau (Man Tiger)', 'Karya Sastra Tragedi & Mitologi Psikologis', 'Pembedahan mendalam tentang kemiskinan perdesaan, kekerasan domestik, dan mitos harimau gaib yang diakui dunia internasional.', 'https://www.gramedia.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Novel: Seperti Dendam, Rindu Harus Dibayar Tuntas', 'Karya Sastra Satir Maskulinitas & Kekerasan', 'Kisah tentang impotensi, trauma kekerasan Orde Baru, dan pencarian cinta sejati yang diadaptasi menjadi film pemenang Golden Leopard di Locarno.', 'https://www.gramedia.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Halimunda dan Luka Sejarah: Bagaimana Eka Kurniawan Menuliskan Tragedi Bangsa Lewat Realisme Magis', 'KRITIK SASTRA', '8 Menit Membaca', 'Pembedahan karya Cantik Itu Luka dalam membongkar kekerasan militerisme dan trauma korban yang dibungkam.', 'Realisme magis dalam novel Eka Kurniawan bukanlah sekadar bumbu fantasi; ia adalah instrumen untuk menceritakan kengerian sejarah yang terlalu brutal bila diungkapkan dengan kata-kata realistis biasa. Melalui tokoh yang bangkit dari kubur, sastra menolak membiarkan kejahatan masa lalu dilupakan.', '/artikel/eka-kurniawan-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Menulis di Luar Menara Gading: Sastra yang Membumi di Warung Kopi dan Terminal Bus', 'ESTETIKA PENULISAN', '7 Menit Membaca', 'Pentingnya menyerap bahasa percakapan rakyat jelata dan dinamika jalanan ke dalam karya sastra.', 'Sastra yang hebat tidak lahir dari ruang perpustakaan yang steril dari debu kehidupan. Ia menyerap bau keringat para sopir truk, obrolan buruh di warung kopi, dan dendam kaum papa yang tersingkir dari gemerlap pembangunan.', '/artikel/eka-kurniawan-2', 2);
END $$;

-- Figure: Lala Bohang (lala-bohang)
DO $$ 
DECLARE 
  v_profile_id UUID;
BEGIN 
  -- Check if profile exists by slug
  SELECT id INTO v_profile_id FROM profiles_warga WHERE slug = 'lala-bohang' LIMIT 1;
  
  IF v_profile_id IS NOT NULL THEN
    UPDATE profiles_warga SET
      name = 'Lala Bohang',
      title = 'Seniman Visual, Ilustrator & Penulis Seri Buku Dialog Batin ''The Book of Forbidden Feelings''',
      category = 'Perawat Jiwa & Rasa',
      quote = 'Mengenali sisi gelap, rasa canggung, dan emosi yang selama ini kita anggap tabu di dalam diri sendiri adalah pintu gerbang menemukan kedamaian batin sejati.',
      bio_paragraphs = ARRAY['Lahir di Makassar dan berkarier sebagai seniman visual dan penulis di Jakarta, Lala Bohang menghadirkan karya-karya seni ilustrasi dan teks reflektif yang sangat intim, jujur, dan berani menelusuri sudut-sudut paling rapuh di dalam jiwa manusia modern.', 'Melalui trilogi buku ilustrasinya yang legendaris—''The Book of Forbidden Feelings'', ''The Book of Invisible Questions'', dan ''The Book of Almost''—Lala memadukan goresan garis hitam-putih yang sederhana dengan potongan teks puitis yang membedah rasa kesepian, isolasi perkotaan, ketakutan akan kegagalan, dan dinamika pikiran alam bawah sadar.', 'Karyanya telah dipamerkan di berbagai pameran seni rupa internasional di Frankfurt, Tokyo, dan London. Lala Bohang adalah perawat kepekaan visual yang menemani generasi muda menyelami dialog batin yang paling sunyi tanpa rasa takut dihakimi.']::text[],
      status_text = 'VERIFIKASI TERKURASI',
      verified = true
    WHERE id = v_profile_id;
  ELSE
    INSERT INTO profiles_warga (slug, name, title, category, quote, bio_paragraphs, status_text, verified, photo_url)
    VALUES ('lala-bohang', 'Lala Bohang', 'Seniman Visual, Ilustrator & Penulis Seri Buku Dialog Batin ''The Book of Forbidden Feelings''', 'Perawat Jiwa & Rasa', 'Mengenali sisi gelap, rasa canggung, dan emosi yang selama ini kita anggap tabu di dalam diri sendiri adalah pintu gerbang menemukan kedamaian batin sejati.', ARRAY['Lahir di Makassar dan berkarier sebagai seniman visual dan penulis di Jakarta, Lala Bohang menghadirkan karya-karya seni ilustrasi dan teks reflektif yang sangat intim, jujur, dan berani menelusuri sudut-sudut paling rapuh di dalam jiwa manusia modern.', 'Melalui trilogi buku ilustrasinya yang legendaris—''The Book of Forbidden Feelings'', ''The Book of Invisible Questions'', dan ''The Book of Almost''—Lala memadukan goresan garis hitam-putih yang sederhana dengan potongan teks puitis yang membedah rasa kesepian, isolasi perkotaan, ketakutan akan kegagalan, dan dinamika pikiran alam bawah sadar.', 'Karyanya telah dipamerkan di berbagai pameran seni rupa internasional di Frankfurt, Tokyo, dan London. Lala Bohang adalah perawat kepekaan visual yang menemani generasi muda menyelami dialog batin yang paling sunyi tanpa rasa takut dihakimi.']::text[], 'VERIFIKASI TERKURASI', true, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')
    RETURNING id INTO v_profile_id;
  END IF;

  DELETE FROM life_events_warga WHERE profile_id = v_profile_id;
  DELETE FROM works_warga WHERE profile_id = v_profile_id;
  DELETE FROM articles_warga WHERE profile_id = v_profile_id;

  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2013 — 2016', 'PAMERAN SENI VISUAL & DEBUT FORBIDDEN FEELINGS', 'Menggelar pameran tunggal instalasi seni di Jakarta dan menerbitkan The Book of Forbidden Feelings yang menjadi fenomena literatur visual.', 1);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2017 — 2019', 'TRILOGI BUKU BATIN & FRANKFURT BOOK FAIR', 'Menyelesaikan trilogi buku ilustrasi, memenangkan penghargaan Desain Sampul Terbaik, dan mewakili Indonesia di Frankfurt Book Fair.', 2);
  INSERT INTO life_events_warga (profile_id, year_range, title, description, order_index)
  VALUES (v_profile_id, '2020 — 2026', 'EKSPOR KARYA SENI INSTALASI & KOLABORASI GLOBAL', 'Memamerkan instalasi seni rupa di Jepang dan Eropa serta menerbitkan karya sastra visual In the Middle of Everything.', 3);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Trilogi Buku: The Book of Forbidden Feelings', 'Karya Seni Visual & Antologi Sastra Ilustrasi', 'Seri buku visual batin yang merayakan emosi-emosi manusia yang sering disembunyikan—kesepian, rasa hampa, dan kecanggungan hidup.', 'https://www.gramedia.com', 1);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Pameran Instalasi Seni: Ruang Batin yang Sunyi', 'Seni Rupa Kontemporer & Ilustrasi Konseptual', 'Instalasi visual yang menggabungkan gambar tinta, objek temuan sehari-hari, dan rekaman audio monolog batin.', 'https://lalabohang.com', 2);
  INSERT INTO works_warga (profile_id, title, category, description, link_url, order_index)
  VALUES (v_profile_id, 'Buku: In The Middle of Everything', 'Karya Eksplorasi Sastra Gambar & Identitas Diri', 'Buku kolaborasi seni yang memotret fase transisi kedewasaan dan pencarian ketenangan di tengah hiruk-pikuk dunia perkotaan.', 'https://lalabohang.com', 3);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Merangkul Emosi yang Terlarang: Mengapa Menangis dan Merasa Hampa Adalah Hak Manusiawi', 'SENI & KESEHATAN BATIN', '7 Menit Membaca', 'Refleksi Lala Bohang tentang bahaya toxic positivity yang memaksa manusia untuk selalu terlihat bahagia dan produktif.', 'Masyarakat modern kerap memandang kesedihan dan rasa cemas sebagai penyakit yang harus segera disingkirkan. Padahal, emosi gelap tersebut adalah bagian alami dari diri kita yang ingin didengarkan. Memberi ruang bagi kesedihan adalah cara kita merawat keutuhan jiwa.', '/artikel/lala-bohang-1', 1);
  INSERT INTO articles_warga (profile_id, title, tag, read_time, description, content_full, link_url, order_index)
  VALUES (v_profile_id, 'Kekuatan Garis Hitam Putih: Bagaimana Kesederhanaan Visual Menggugah Kejujuran Rasa', 'ESTETIKA VISUAL', '6 Menit Membaca', 'Filosofi di balik gambar ilustrasi minimalis Lala Bohang yang mampu menyampaikan makna emosi yang mendalam.', 'Di tengah dunia visual yang penuh warna mencolok dan filter berlebih, goresan tinta hitam di atas kertas putih menghadirkan kejujuran yang menenangkan. Kesederhanaan bentuk memberi ruang bagi imajinasi pembaca untuk mengisi maknanya sendiri.', '/artikel/lala-bohang-2', 2);
END $$;

COMMIT;
