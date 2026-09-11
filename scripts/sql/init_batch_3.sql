BEGIN;
INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Diskografi Efek Rumah Kaca (Album Perlawanan & Kontemplasi)', 'Karya Musik Indie & Lirik Kritis Sosial', 'Album-album mahakarya musik Indonesia (Efek Rumah Kaca, Kamar Gelap, Sinestesia, Rimpang) yang memotret realitas politik dan luka kemanusiaan.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://efekrumahkaca.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'cholil-mahmud';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pandai Besi & Eksplorasi Musik Akustik Kamar', 'Kolektif Musik Orkestrasi Eksperimental', 'Proyek musikal yang merekonstruksi lagu-lagu ERK dalam aransemen megah bernuansa teatrikal yang didanai secara crowdfunding publik.', 'Rilisan Digital / Fisik Rp 49.000 - Rp 250.000', 'Dukung Inisiatif', 'https://efekrumahkaca.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'cholil-mahmud';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Mantra Mantra (Karya Musik Terapi Mental)', 'Karya Musik Psikologi Terapan & Pop Eksperimental', 'Album konsep pemulihan batin yang mengintegrasikan frekuensi audio relaksasi untuk meredakan kecemasan dan serangan panik.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'kunto-aji';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Pengantar Purwakala (Siklus Pendewasaan Diri)', 'Eksplorasi Musik Kontemplatif & Pertumbuhan Batin', 'Lanjutan perjalanan refleksi tentang menerima kehilangan, merawat harapan baru, dan menua dengan penuh kesadaran.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'kunto-aji';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: MARKERS AND SUCH PENS FLASHDISKS', 'Karya Musik Pop Puitis & Narasi Kehidupan', 'Album yang merayakan kehangatan hubungan sehari-hari, peran menjadi ayah, dan rekonsiliasi rindu kepada mereka yang telah tiada.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'sal-priadi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Berhati (Eksplorasi Cinta Teatrikal)', 'Musik Romantisisme Gelap & Sastra Audio', 'Kumpulan lagu puitis bertema cinta, kepasrahan batin, dan keintiman hubungan manusia dengan aransemen orkestrasi megah.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'sal-priadi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album Hindia: Menari dengan Bayangan', 'Karya Musik Pop Alternatif & Kesehatan Mental', 'Album konsep fenomenal yang merangkum kegelisahan anak muda dalam menavigasi karir, asmara, dan luka masa kecil.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'baskara-putra';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album Hindia: Lagipula Hidup Akan Berakhir', 'Karya Musik Eksistensial & Kritik Zaman', 'Album ganda 28 trek yang membedah krisis iklim, kapitalisme modern, inflasi harga rumah, dan masa depan generasi muda.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'baskara-putra';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Selamat Ulang Tahun (Karya Mahakarya Pendewasaan)', 'Karya Musik Folk Akustik & Narasi Keluarga', 'Album konsep yang mendokumentasikan rasa terima kasih kepada keluarga dan ketakutan menyongsong usia dewasa.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'nadin-amizah';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Album: Untuk Dunia, Cinta, dan Kotornya', 'Musik Folk Teatrikal & Penerimaan Diri', 'Eksplorasi emosi tentang mencintai seseorang secara utuh bersama segala trauma dan ketidaksempurnaannya.', 'Rp 350.000 - Rp 650.000', 'Dukung Inisiatif', 'https://open.spotify.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'nadin-amizah';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Tidak Ada New York Hari Ini (Kumpulan Puisi)', 'Karya Sastra Puisi & Fotografi', 'Antologi puisi kesunyian perkotaan yang fenomenal dengan terjemahan multibahasa dan ilustrasi fotografi analog.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'm-aan-mansyur';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Melihat Api Bekerja', 'Karya Sastra Puisi & Ilustrasi', 'Kumpulan puisi pemenang Kusala Sastra Khatulistiwa yang membedah cinta, ingatan kehilangan, dan rasa sakit secara visual puitis.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'm-aan-mansyur';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Bioskop: Yuni (Platform Prize TIFF)', 'Karya Sinema Realisme Sosial & Pendidikan Remaja', 'Film yang membedah dilema pernikahan dini, impian pendidikan tinggi perempuan muda, dan dogma keagamaan sempit di Banten.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://fourcoloursfilms.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'kamila-andini';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Bioskop: Nana (Before, Now & Then)', 'Sinema Sejarah Puitis & Trauma Masa Lalu', 'Drama sejarah berbahasa Sunda tentang ketabahan perempuan korban pergolakan politik 1960-an yang meraih Silver Bear di Berlinale.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://fourcoloursfilms.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'kamila-andini';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Nanti Kita Cerita Tentang Hari Ini (NKCTHI)', 'Karya Literatur Visual & Refleksi Batin', 'Buku panduan emosional keluarga dan pendewasaan diri yang menjadi rujukan anak muda dalam menavigasi duka dan harapan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'marchella-fp';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Kamu Terlalu Banyak Bercanda (KTBB)', 'Karya Tulis Eksplorasi Sisi Gelap & Emosi Manusia', 'Kumpulan surat batin yang membedah rasa marah, kecewa, dan ketakutan yang sering kali dipaksa disembunyikan di balik senyuman.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'marchella-fp';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Novel: Cantik Itu Luka (Beauty Is a Wound)', 'Mahakarya Sastra Realisme Magis Indonesia', 'Epik sastra yang mengisahkan sejarah kekerasan Indonesia dari masa penjajahan Belanda, pendudukan Jepang, hingga pembantaian 1965.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'eka-kurniawan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Novel: Lelaki Harimau (Man Tiger)', 'Karya Sastra Tragedi & Mitologi Psikologis', 'Pembedahan mendalam tentang kemiskinan perdesaan, kekerasan domestik, dan mitos harimau gaib yang diakui dunia internasional.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'eka-kurniawan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Trilogi Buku: The Book of Forbidden Feelings', 'Karya Seni Visual & Antologi Sastra Ilustrasi', 'Seri buku visual batin yang merayakan emosi-emosi manusia yang sering disembunyikan, kesepian, rasa hampa, dan kecanggungan hidup.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'lala-bohang';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pameran Instalasi Seni: Ruang Batin yang Sunyi', 'Seni Rupa Kontemporer & Ilustrasi Konseptual', 'Instalasi visual yang menggabungkan gambar tinta, objek temuan sehari-hari, dan rekaman audio monolog batin.', 'Rp 50.000 - Rp 350.000', 'Dukung Inisiatif', 'https://lalabohang.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'lala-bohang';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Comika Corp (Ekosistem Industri Komedi Tunggal Mandiri)', 'Industri Kreatif & Platform Monetisasi Komika', 'Perusahaan media dan manajemen komedi terbesar di Indonesia yang menyediakan aplikasi streaming spesial komedi, akademi, dan festival.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'pandji-pragiwaksono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi: Juru Bicara & Mesakke Bangsaku', 'Karya Stand-Up Comedy Satir Sosial-Politik', 'Pertunjukan komedi tunggal berdurasi 2 jam yang membedah kejahatan korupsi, HAM masa lalu, dan diskriminasi minoritas secara tajam.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'pandji-pragiwaksono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi Tunggal: Ilmu Gagal', 'Karya Stand-Up Comedy & Refleksi Kehidupan', 'Pertunjukan komedi tunggal yang membedah kegagalan, penolakan sosial, dan kebanggaan berdiri sebagai orang timur di ibu kota.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'arie-kriting';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Penulisan Skenario Film Sinema Satir Ketimpangan', 'Karya Sinematografi & Skenario Film', 'Karya naskah film layar lebar yang mengangkat realitas ketiadaan sinyal telekomunikasi dan ketimpangan fasilitas daerah pelosok.', 'Tiket Nonton / VOD Rp 45.000 - Rp 75.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'arie-kriting';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi: Pahlawan Perlu Tanda Jasa', 'Karya Komedi Tunggal Satir Pendidikan', 'Pertunjukan komedi fenomenal yang menuntut kenaikan gaji layak bagi guru honorer dan membongkar kemunafikan birokrasi pendidikan.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'abdur-arsyad';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Komedi Tunggal: Kontras Kebijakan Publik', 'Kritik Kebijakan Berbalut Nalar Matematika', 'Rangkaian video monolog bedah anggaran negara, subsidi pupuk petani, dan kedaulatan pangan menggunakan logika sains presisi.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'abdur-arsyad';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Video: DPO (Dewan Perwakilan Omel-Omel)', 'Karya Satir Digital & Pengawasan Kebijakan', 'Format video esai komedi singkat berdaya viral puluhan juta penonton yang mengkritik absurditas regulasi dan ketidakadilan hukum.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://instagram.com/bintangemon', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'bintang-emon';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pertunjukan Komedi Tunggal: Tangkap Gua', 'Karya Stand-Up Comedy Satir Berani', 'Spesial komedi berdurasi panjang yang membedah kebebasan berekspresi, paranoia aparat, dan dinamika pernikahan muda.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'bintang-emon';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi: Kemarahan dari Fakfak', 'Karya Stand-Up Comedy Realitas Papua', 'Pertunjukan komedi tunggal yang membedah keabsurdan janji manis pembangunan dan penderitaan warga pedalaman Papua.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'mamat-alkatiri';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Podcast Titik Kumpul & Dialog Lintas Perspektif', 'Kanal Audio Digital Kebangsaan', 'Program bincang-bincang santai yang membedah isu sosial, politik, dan kebudayaan tanpa sekat basa-basi bersama tokoh publik.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'mamat-alkatiri';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Show Komedi: Balada Wong Tani Kebumen', 'Karya Stand-Up Comedy Budaya Lokal', 'Pertunjukan komedi tunggal yang membedah romantika kehidupan pedesaan, birokrasi pupuk subsidi, dan ketangguhan mental petani Jawa.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'sadana-agung-sulistya';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Sketsa Komedi Perdesaan Sadana', 'Karya Audio-Visual Komedi Sawah', 'Rangkaian video komedi situasi di pematang sawah dan pos ronda yang memotret kehangatan serta kelucuan warga desa.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'sadana-agung-sulistya';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Film Bioskop: Ngeri-Ngeri Sedap (Perwakilan Oscar Indonesia)', 'Karya Sinema Komedi Drama Keluarga & Budaya Batak', 'Film fenomenal yang membedah keharmonisan keluarga, luka adat, dan kerinduan orang tua pada anak rantau di tepian Danau Toba.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://netflix.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'bene-dion-rajagukguk';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Film: Agak Laen (Box Office Historikal)', 'Karya Sinema Komedi Komunal & Hiburan Rakyat', 'Produksi film komedi horor yang memecahkan rekor box office sinema nasional dengan jutaan penonton lintas daerah.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://ima-jinari.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'bene-dion-rajagukguk';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi Tunggal: Balada Perantau Samarinda', 'Karya Stand-Up Comedy Kelas Pekerja', 'Pertunjukan komedi tunggal yang membedah keabsurdan adaptasi anak daerah saat bertahan hidup di rimba metropolitan Jakarta.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://comika.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'yono-bakrie';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Komedi Sketsa & Konten Relatable Warga', 'Karya Audio-Visual Komedi Situasional', 'Rangkaian sketsa komedi digital yang memotret dinamika kehidupan sehari-hari anak kos, ojek daring, dan pekerja paruh waktu.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'yono-bakrie';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spesial Komedi: Sambat Petani Saradan', 'Karya Stand-Up Comedy Budaya Perdesaan', 'Pertunjukan komedi tunggal yang membedah romantika kehidupan anak muda di pedesaan Jawa dan suka duka bertani.', 'Mulai Rp 50.000 / tayang', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'nopek-novian';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal Vlog Merakyat Nopek Novian', 'Dokumentasi Komedi Kehidupan Komunal', 'Serial video dokumentasi kehidupan desa, kuliner warung pinggir jalan, dan interaksi hangat bersama warga kampung.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'nopek-novian';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Komedi: Pingin Siaran & Majelis Lucu', 'Karya Komedi Absurd & Dialog Spontan Digital', 'Serial bincang-bincang komedi improvisasi yang menampilkan gaya berpikir unik dan reaksi spontan Dustin yang viral jutaan kali.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'dustin-tiffani';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Serial Sketsa Komedi Perkantoran & Percetakan', 'Karya Audio-Visual Komedi Kelas Pekerja', 'Sketsa komedi yang mengangkat lika-liku perjuangan pekerja percetakan fotokopi dan buruh harian lepas perkotaan.', 'Rp 50.000 - Rp 175.000 / akses', 'Dukung Inisiatif', 'https://youtube.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'dustin-tiffani';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Investigasi & Pembongkaran Matematika Judi Online', 'Riset Finansial & Advokasi Publik', 'Pembedahan saintifik tentang probabilitas bandar judi online dan arsitektur penipuan finansial digital yang menguras kantong jutaan warga.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://youtube.com/@ferryirwandi', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'ferry-irwandi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Malaka Project (Platform Video Esai Nalar Kritis)', 'Media Riset & Diskursus Independen', 'Platform video esai berbobot dengan jutaan pelanggan yang menguliti isu filsafat praktis, ekonomi makro, dan kesadaran politik anak muda.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://malakaproject.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'ferry-irwandi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Mata Najwa (Program Dialog Politik & Akuntabilitas)', 'Jurnalisme Investigasi & Talkshow Kebijakan Publik', 'Program bincang-bincang politik independen yang menjadi rujukan warga dalam menguji integritas para calon pemimpin dan pembuat kebijakan.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://narasi.tv', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'najwa-shihab';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Narasi TV & Narasi Newsroom (Investigasi Open Source)', 'Ekosistem Media Digital Warga & Investigasi OSINT', 'Redaksi jurnalisme data yang mengungkap pembajakan ruang publik, kekerasan aparat, dan penyelewengan kekuasaan.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://narasi.tv', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'najwa-shihab';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Endgame Podcast (Siniar Geopolitik & Sains Masa Depan)', 'Media Edukasi Wawasan Global & Wawancara Mendalam', 'Platform dialog intelektual berkualitas tinggi yang membedah arsitektur kecerdasan buatan, energi terbarukan, dan sejarah peradaban bangsa.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@GitaWirjawan', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'gita-wirjawan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ancora Foundation (Beasiswa Pendidikan Tinggi Global)', 'Filantropi Pendidikan & Pembinaan Kepemimpinan', 'Yayasan beasiswa yang telah mengirimkan ratusan talenta terbaik Indonesia menempuh studi magister dan doktoral di Harvard, Oxford, dan Cambridge.', 'Akses Terbuka / Mulai Rp 99.000', 'Dukung Inisiatif', 'https://ancorafoundation.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'gita-wirjawan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Muslimah yang Memperdebatkan Kepalsuan', 'Karya Literatur Fiqih Emansipatoris & Gender', 'Kumpulan esai reflektif yang membongkar bias patriarki dalam penafsiran agama dan membela otonomi perempuan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'kalis-mardiasih';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Hijrah Jangan Jauh-Jauh, Nanti Lupa Pulang', 'Kritik Sosial Fenomena Keagamaan Populer', 'Pembedahan fenomena hijrah instan perkotaan yang kerap melupakan etika kesantunan dan empati sosial sehari-hari.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'kalis-mardiasih';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kanal YouTube Kok Bisa? (Platform Animasi Edukasi Terbesar)', 'Media Edukasi Sains Populer & Animasi Digital', 'Koleksi ratusan video animasi berstandar riset ilmiah yang telah ditonton lebih dari 700 juta kali oleh pelajar dan keluarga Indonesia.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://youtube.com/@KokBisa', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'gerald-sebastian';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Kok Bisa? Tanya Jawab Sains Seru Dunia', 'Karya Literatur Sains Populer Anak & Remaja', 'Buku visual interaktif yang merangkum misteri sains biologi, fisika, dan teknologi dalam bahasa sederhana yang menyenangkan.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'gerald-sebastian';
COMMIT;
