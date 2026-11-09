// Anketin başlangıç içeriği.
// Yönetim panelinden yaptığınız değişiklikler veritabanına kaydedilir ve
// bu dosyanın önüne geçer. Bu dosya yalnızca hiç kayıt yokken (ilk kurulum)
// ve demo modunda kullanılır. İsterseniz burayı hiç değiştirmeden,
// her şeyi yönetim panelinden düzenleyebilirsiniz.

window.ANKET_VARSAYILAN = {
  surum: 1,
  kurum: "Türkiye Liman, Dok, Gemi-İş Sendikası",
  baslik: "Toplu İş Sözleşmesi Beklenti Anketi",
  aciklama: "İş yerinizde yürütülecek toplu iş sözleşmesi görüşmelerinde taleplerinizi doğru temsil edebilmemiz için görüşünüze ihtiyacımız var. Cevaplarınız yalnızca sendika tarafından görülür, işverenle paylaşılmaz.",
  sure: "Yaklaşık 3 dakika sürer.",
  tesekkur: "Cevaplarınız sendikaya ulaştı. Görüşleriniz toplu iş sözleşmesi taslağı hazırlanırken dikkate alınacak.",
  kapaliMesaj: "Bu anket şu anda cevap almıyor. Bilgi için sendika temsilcinizle görüşebilirsiniz.",
  acik: true,

  // İş yerlerini yönetim panelinden (Ayarlar) ekleyin. Liste boşsa ankette
  // iş yeri serbest yazı alanı olarak sorulur.
  isyerleri: [],

  kimlik: {
    ad:     { etiket: "Adınız ve soyadınız", goster: true, zorunlu: true },
    isyeri: { etiket: "Çalıştığınız iş yeri", goster: true, zorunlu: true },
    is:     { etiket: "Yaptığınız iş", ipucu: "Örneğin forklift operatörü, puantör, kaynakçı", goster: true, zorunlu: true }
  },

  // tip: "tek" (tek seçim), "coklu" (birden fazla seçim), "metin" (açık uçlu)
  // maxSecim: çoklu seçimde en fazla kaç şık işaretlenebilir (0 = sınırsız)
  // diger: true ise sona "Diğer" şıkkı ve yazı alanı eklenir
  sorular: [
    {
      id: "kidem", tip: "tek", zorunlu: true, diger: false, maxSecim: 0,
      metin: "İşyerindeki kıdeminiz nedir?",
      secenekler: [
        { id: "k1", metin: "1 yıldan az" },
        { id: "k2", metin: "1 – 3 yıl" },
        { id: "k3", metin: "3 – 5 yıl" },
        { id: "k4", metin: "5 – 10 yıl" },
        { id: "k5", metin: "10 yıldan fazla" }
      ]
    },
    {
      id: "ucret", tip: "tek", zorunlu: true, diger: false, maxSecim: 0,
      metin: "Mevcut aylık net ücretiniz hangi aralıktadır?",
      secenekler: [
        { id: "u1", metin: "Asgari ücret düzeyinde" },
        { id: "u2", metin: "30.000 – 40.000 TL" },
        { id: "u3", metin: "40.000 – 50.000 TL" },
        { id: "u4", metin: "50.000 – 65.000 TL" },
        { id: "u5", metin: "65.000 TL ve üzeri" }
      ]
    },
    {
      id: "zam", tip: "tek", zorunlu: true, diger: false, maxSecim: 0,
      metin: "Toplu iş sözleşmesinde ücret zammı beklentiniz nedir?",
      secenekler: [
        { id: "z1", metin: "Enflasyon oranında" },
        { id: "z2", metin: "Enflasyon + refah payı" },
        { id: "z3", metin: "%30 – %40 arası" },
        { id: "z4", metin: "%40 – %50 arası" },
        { id: "z5", metin: "%50 ve üzeri" },
        { id: "z6", metin: "Seyyanen (herkese eşit tutarda) zam" }
      ]
    },
    {
      id: "ekonomik", tip: "coklu", zorunlu: true, diger: false, maxSecim: 3,
      metin: "Ücret zammı dışında hangi ekonomik hakların iyileştirilmesini istersiniz?",
      secenekler: [
        { id: "e1", metin: "İkramiye sayısı ve tutarı" },
        { id: "e2", metin: "Yemek ücreti ve yemek kalitesi" },
        { id: "e3", metin: "Yol ve servis" },
        { id: "e4", metin: "Yakacak yardımı" },
        { id: "e5", metin: "Bayram harçlığı" },
        { id: "e6", metin: "Aile ve çocuk yardımı" },
        { id: "e7", metin: "Evlenme, doğum ve ölüm yardımları" },
        { id: "e8", metin: "Fazla mesai ücret oranı" },
        { id: "e9", metin: "Gece ve vardiya zammı" }
      ]
    },
    {
      id: "kosullar", tip: "tek", zorunlu: true, diger: true, maxSecim: 0,
      metin: "Çalışma koşullarında öncelikli olarak hangi konunun iyileştirilmesini istersiniz?",
      secenekler: [
        { id: "c1", metin: "İş sağlığı ve güvenliği önlemleri" },
        { id: "c2", metin: "Vardiya düzeni ve çalışma saatleri" },
        { id: "c3", metin: "Fazla mesai yükü" },
        { id: "c4", metin: "Dinlenme ve yemek molaları" },
        { id: "c5", metin: "Soyunma odası, duş ve yemekhane gibi sosyal alanlar" },
        { id: "c6", metin: "Koruyucu ekipman (KKD) temini" },
        { id: "c7", metin: "Personel sayısı ve iş yükü" }
      ]
    },
    {
      id: "guvence", tip: "tek", zorunlu: true, diger: false, maxSecim: 0,
      metin: "İş güvencesi ve çalışan hakları konusunda öncelikli beklentiniz nedir?",
      secenekler: [
        { id: "g1", metin: "Keyfi işten çıkarmaya karşı güvence" },
        { id: "g2", metin: "Kıdem ve ihbar tazminatı haklarının korunması" },
        { id: "g3", metin: "Disiplin kurulunda sendika temsilcisi bulunması" },
        { id: "g4", metin: "Sendikal faaliyet nedeniyle ayrımcılığa karşı koruma" },
        { id: "g5", metin: "Eşit işe eşit ücret" },
        { id: "g6", metin: "Taşeron ve geçici işçilerin kadroya alınması" }
      ]
    },
    {
      id: "enonemli", tip: "tek", zorunlu: true, diger: true, maxSecim: 0,
      metin: "Toplu iş sözleşmesinde mutlaka yer almasını istediğiniz en önemli hak hangisidir?",
      secenekler: [
        { id: "o1", metin: "Ücret artışı" },
        { id: "o2", metin: "İkramiye" },
        { id: "o3", metin: "İş güvencesi" },
        { id: "o4", metin: "Sosyal yardımlar (yemek, yol, yakacak)" },
        { id: "o5", metin: "Çalışma saatleri ve vardiya düzeni" },
        { id: "o6", metin: "İş sağlığı ve güvenliği" },
        { id: "o7", metin: "Kıdem ve tazminat güvencesi" }
      ]
    },
    {
      id: "sosyal", tip: "coklu", zorunlu: true, diger: false, maxSecim: 2,
      metin: "Sosyal haklardan hangisi sizin için en öncelikli?",
      secenekler: [
        { id: "s1", metin: "Yemek yardımı" },
        { id: "s2", metin: "Yol / servis" },
        { id: "s3", metin: "İkramiye (bayram, yıl sonu)" },
        { id: "s4", metin: "Yakacak / kira yardımı" },
        { id: "s5", metin: "Eğitim yardımı" },
        { id: "s6", metin: "Özel sağlık sigortası" }
      ]
    },
    {
      id: "gorus", tip: "metin", zorunlu: false, diger: false, maxSecim: 0,
      metin: "Toplu iş sözleşmesiyle ilgili eklemek istediğiniz görüş veya öneriniz var mı?",
      secenekler: []
    }
  ]
};
