# TİS Beklenti Anketi – Kurulum

İki sayfadan oluşan bir sistem:

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | İşçilerin doldurduğu anket. Linkini WhatsApp'tan paylaşırsınız. |
| `yonetim.html` | Yönetim paneli. Şifreyle girilir; oranlar, kişi kişi cevaplar, Excel, soru düzenleme. |
| `varsayilan-anket.js` | Anketin başlangıç soruları. Panelden kaydettikten sonra artık veritabanındaki sürüm geçerlidir. |
| `firebase-config.js` | Firebase bağlantı bilgileri. **Sizin doldurmanız gereken tek dosya.** |
| `firestore.rules` | Veritabanı güvenlik kuralları. Firebase konsoluna yapıştırılır. |
| `assets/` | Logo ve simge. |

Cevaplar Firebase'in ücretsiz veritabanında (Firestore) tutulur. Firebase ayarları girilmeden önce sayfalar **demo modunda** çalışır: anket doldurulabilir ama cevaplar yalnızca o tarayıcıda kalır, panel örnek veri gösterir. Bu sayede tasarımı ve akışı kurulumdan önce inceleyebilirsiniz.

Kurulum toplam 15–20 dakika sürer.

---

## 1. Siteyi yayınlayın (GitHub Pages)

1. GitHub'da yeni bir depo açın, örneğin `tis-anketi`. Public olabilir, cevaplar depoda değil veritabanında durur.
2. Bu klasördeki **bütün dosyaları klasör yapısıyla birlikte** (assets klasörü dahil) depoya yükleyin.
3. Settings → Pages → Branch: `main`, klasör `/ (root)` → Save.
4. Birkaç dakika sonra adresiniz hazır olur: `https://KULLANICIADI.github.io/tis-anketi/`
   - Anket: bu adresin kendisi
   - Yönetim: `https://KULLANICIADI.github.io/tis-anketi/yonetim.html`

Daha sonra kendi alan adınıza taşırsanız hiçbir dosyayı değiştirmeniz gerekmez; yalnızca panelin Linkler bölümünde adresi güncellersiniz.

## 2. Firebase projesi açın

1. https://console.firebase.google.com → **Proje ekle** → ad: `tis-anketi` (Google Analytics'i kapatabilirsiniz) → Oluştur.
2. Proje açılınca **Web** (`</>`) simgesine tıklayın → uygulama adı `anket` → Kaydet. Hosting kutusunu işaretlemeyin.
3. Ekranda `firebaseConfig = { apiKey: "...", ... }` bloğu çıkar. Bu değerleri `firebase-config.js` dosyasındaki boş tırnakların içine yapıştırın (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId). Dosyayı GitHub'a tekrar yükleyin.

> Bu bilgilerin sitede açık görünmesi normaldir; Firebase bunu böyle tasarlamıştır. Güvenliği kurallar (3. adım) sağlar.

## 3. Veritabanını açın ve kuralları yapıştırın

1. Sol menü → **Build → Firestore Database** → **Create database**.
2. Konum: `eur3 (europe-west)` → **Production mode** → Oluştur.
3. Üstteki **Rules** sekmesine geçin. İçindeki her şeyi silip `firestore.rules` dosyasının tamamını yapıştırın.
4. Dosyanın içindeki yönetici e-postası `info@dokgemiissendikasi.com` olarak yazılıdır; farklı bir e-postayla gireceksiniz onu buraya yazın (4. adımda aynı e-postayla kullanıcı açacaksınız). Birden fazla yönetici için virgülle ekleyin.
5. **Publish**.

## 4. Yönetici girişi açın

1. Sol menü → **Build → Authentication** → **Get started**.
2. **Sign-in method** sekmesi → **Email/Password** → Enable → Save. (Alttaki "Email link" seçeneği kapalı kalsın.)
3. **Users** sekmesi → **Add user** → kurallara yazdığınız e-posta ve güçlü bir şifre → Add user.
4. **Settings** sekmesi → **User actions** → **"Enable create (sign-up)"** kutusunu kaldırın → Save. Böylece dışarıdan kimse kendine hesap açamaz.
5. Aynı Settings sekmesinde **Authorized domains** → Add domain → `KULLANICIADI.github.io` (ileride kendi alan adınızı da ekleyin).

## 5. Deneyin

1. `yonetim.html` adresini açın, e-posta ve şifreyle girin. "Henüz cevap gelmedi" ekranı normaldir.
2. **Ayarlar** → İş yerlerini ekleyin, metinleri gözden geçirin → **Kaydet**.
3. **Sorular** → Şıkları (özellikle ücret aralıklarını) kendi iş yerlerinize göre düzenleyin → **Kaydet**.
4. **Linkler** → bir iş yerinin linkini kopyalayıp telefonunuzda açın, anketi doldurun.
5. Panelde **Cevaplar** bölümünde cevabınız anında belirir. Deneme cevabını satırın sağındaki çöp kutusuyla silin.

Bir şey ters giderse en sık karşılaşılan durumlar en altta.

---

## Günlük kullanım

**Link dağıtma.** Linkler bölümünde her iş yeri için ayrı link vardır (`...?i=isyeri-adi`). Bu linkle açılan ankette iş yeri önceden seçili gelir; böylece cevaplar panelde doğru iş yerine düşer. Hazır WhatsApp mesajını kopyalayıp linki değiştirerek gönderebilirsiniz.

**Sonuçlar.** Sol üstteki iş yeri filtresi bütün sayfaları etkiler. Her şıkta kişi sayısı ve yüzde görünür; bir şıkka tıklayınca onu kimlerin seçtiği listelenir. Çoktan seçmeli sorularda yüzde, soruyu cevaplayan kişi sayısına göredir.

**Cevaplar.** Satıra tıklayınca kişinin bütün cevapları açılır. **Excel'e aktar** düğmesi o anki filtreye göre iki sayfalı bir dosya indirir: `Cevaplar` (kişi kişi) ve `Özet` (şık şık sayılar ve yüzdeler).

**Soru veya şık değiştirme.** Sorular bölümünde metni, türü, sırayı değiştirin; şık ekleyip çıkarın; yeni soru ekleyin. **Kaydet** deyince anket anında güncellenir. Daha önce verilmiş cevaplar hiçbir zaman silinmez: bir şıkkı kaldırsanız bile o şıkkı seçmiş olanlar sonuçlarda "(kaldırılan şık)" olarak görünmeye devam eder, Excel'e de aynen aktarılır.

**Anketi kapatma.** Ayarlar → anahtarı kapatın → Kaydet. Linki açanlar sizin yazdığınız kapalı mesajını görür.

## Sık karşılaşılan durumlar

- **"Bu hesabın yetkisi yok" uyarısı.** Kurallardaki e-posta ile giriş yaptığınız e-posta birebir aynı olmalı (büyük/küçük harf dahil). Kuralları düzenledikten sonra Publish'e bastığınızdan emin olun.
- **"E-posta/şifre ile giriş açılmamış" hatası.** 4. adımdaki Email/Password sağlayıcısı Enable edilmemiş.
- **Panelde "Demo modu" yazıyor.** `firebase-config.js` içindeki `apiKey` boş ya da dosya GitHub'a yüklenmemiş. Tarayıcı önbelleği için sayfayı Ctrl+F5 ile yenileyin.
- **Anket "yüklenemedi" diyor.** Çoğunlukla internet yok ya da `firebase-config.js` içinde bir yazım hatası var (tırnak eksik vb.).
- **Aynı kişi iki kez doldurdu.** Anket giriş istemediği için bunu kesin olarak engellemek mümkün değil; aynı telefondan tekrar girene uyarı gösterilir, kopya cevabı panelden silersiniz.
- **Ücret.** Firebase Spark planı ücretsizdir. Günde 50.000 okuma ve 20.000 yazma hakkı vardır; birkaç bin cevaplık bir anket bu sınırın çok altında kalır. Kart bilgisi istemez.
- **Yedek.** Arada bir Excel'e aktarıp saklamanız yeterli.
