const contentArea = document.getElementById('content-area');

const categoryContents = {
  "📜 Tarih ve Miras": `
    <h2>Tarih ve Miras</h2>
    <p>İstanbul, sadece bir şehir değil; çağları, kültürleri ve uygarlıkları birleştiren canlı bir tarihtir. 
    Roma İmparatorluğu döneminde “Nova Roma”, Bizans döneminde “Konstantinopolis”, Osmanlı döneminde ise “Der Saadet”
    (mutluluk kapısı) adlarıyla anılmış bu kadim şehir, üç kıtanın birleştiği noktada, stratejik konumu sayesinde 
    yüzyıllarca imparatorlukların gözdesi olmuştur.</p>
    <img src="https://meditravel.com/wp-content/uploads/2019/07/istanbul-a-city-that-never-sleeps.jpg" alt="İstanbul Tarihi" />
  `,
  "🏘️ Semt Kültürü": `
    <h2>Semt Kültürü</h2>
    <p>Her semtin kendine has bir hikayesi vardır. İstanbul’un ruhu,
    sadece tarihle değil; her biri ayrı bir dünya olan semtleriyle yaşar. Bu şehir, kültürün sadece müzelerde ya da kitaplarda değil, 
    sokakta, bakkalda, kahvede, pazarda, yani yaşamın içinde şekillendiğini gösterir.</p>
    <img src="https://visitturkey.in/wp-content/uploads/2024/07/beyoglu-istanbul-1200x1200.webp" alt="Balat Semti" />
  `,
  "🍽️ Yemek Kültürü": `
    <h2>Yemek Kültürü</h2>
    <p>Sokaklarda yayılan mis gibi kokular, tarih boyunca bu şehrin farklı kültürlerinden süzülüp gelen
     tarifler ve samimi sofralar, İstanbul’un ruhunu besler.</p>
    <img src="https://turkascihaberleri.com/Resimler/istanbulda_yeme_icme_kulturu_r.jpg" alt="İstanbul Yemekleri" />
  `,
  "🎭 Sanat & Etkinlikler": `
    <h2>Sanat & Etkinlikler</h2>
    <p>İstanbul; tiyatro, konser, sergi ve festivallerle sanatın kalbinin attığı yerdir. stanbul, sadece tarihî yapılarıyla değil, 
    sanatın her dalındaki canlılığıyla da büyüleyen bir şehir. Tiyatrolar, galeriler, konser salonları ve açık hava etkinlikleriyle
    dolu bu şehir, kültürün kalbinin attığı yerdir. Her köşe başında bir sergi, her mevsimde bir festival vardır.</p>
    <img src="https://basin.ktb.gov.tr/Resim/225724,a1jpg.png?0" alt="Sanat ve Etkinlikler" />
  `,
  "☕ Günlük Yaşam": `
    <h2>Günlük Yaşam</h2>
    <p>İstanbul’un günlük yaşamı, karmaşık ama bir o kadar da büyüleyici bir ritme sahiptir. Şehrin gürültüsü arasında küçük mutluluklar
    saklıdır; sabah işe giderken vapurda görülen martılar, simidin sıcaklığı, çay bahçelerinde paylaşılan dost sohbetleri… Her semtin 
    kendine özgü bir dokusu vardır. Moda’nın rahat sokakları, Beşiktaş’ın enerjisi, Üsküdar’ın sakin sahil yolları, İstanbul’un farklı
    ruhlarını yansıtır.</p>
    <img src="https://www.thecettiaistanbul.com/img/-//sites/other/cettiaistanbul/uploads/blog/the-cettia-istanbul-cay-marti-simit.jpg" alt="Günlük Yaşam" />
  `,
  "⏳ Zaman Tüneli": `
    <h2>Zaman Tüneli</h2>
    <p>İstanbul’un farklı dönemlerine bir zaman yolculuğuna çıkmaya ne dersin? 
    İstanbul, binlerce yıllık geçmişiyle adeta yaşayan bir zaman tünelidir. Her adımda farklı bir dönemin izlerini taşıyan bu şehir,
    geçmişle bugün arasında eşsiz bir köprü kurar. Bizans’ın görkemli sarayları, Osmanlı’nın ihtişamlı camileri, modern yaşamın 
    renkli sokakları… Hepsi bir arada, yan yana yaşar İstanbul’da. Zaman, burada durmaz; ama her dönem kendine özgü bir iz bırakır. Bu zaman
    tünelinde yürürken, geçmişin sessiz tanıkları olan yapılar, müzeler ve tarihi mekanlar size binlerce yıl öncesinin hikayelerini fısıldar.
    Her köşede bir anı, her taşta bir efsane gizlidir. İstanbul’un zaman tünelinde yolculuk etmek, sadece tarih öğrenmek değil; şehrin 
    ruhunu hissetmek, geçmişin gölgesinde bugünü ve geleceği anlamaktır.</p>
    <img src="https://blog.tesbihane.com/wp-content/uploads/2015/08/eski-istanbuldan-en-guzel-50-nostaljik-fotograf.jpg" alt="Zaman Tüneli" />
  `
};

const categoryElements = document.querySelectorAll('.category');

categoryElements.forEach(category => {
  category.addEventListener('click', () => {
    const content = categoryContents[category.textContent.trim()] || "<p>Kategori bulunamadı.</p>";
    contentArea.innerHTML = content;
    contentArea.scrollIntoView({behavior: "smooth"});
  });
});

document.querySelector('a[href="#"]').addEventListener('click', e => {
  e.preventDefault();
  contentArea.innerHTML = `<p>İstanbul, tarihi boyunca birçok medeniyete ev sahipliği yapmış, kültürlerin buluşma noktası olmuş 
  eşsiz bir şehirdir. Asya ile Avrupa’nın kesişim noktasında yer alması, ona benzersiz bir kültürel çeşitlilik kazandırmıştır.
   Bu zenginlik, sadece mimaride veya sanatta değil, günlük yaşamdan yemek kültürüne, geleneklerden festivallere kadar her alanda kendini gösterir.</p>`;
  contentArea.scrollIntoView({behavior: "smooth"});
});
document.querySelector('.search-container button').addEventListener('click', () => {
  const searchInput = document.querySelector('.search-container input[type="text"]');
  const searchTerm = searchInput.value.trim().toLowerCase();
  
  if (searchTerm) {
    const foundCategory = Array.from(categoryElements).find(category => 
      category.textContent.toLowerCase().includes(searchTerm)
    );
    
    if (foundCategory) {
      foundCategory.click();
    } else {
      contentArea.innerHTML = `<p>Aradığınız kategori bulunamadı.</p>`;
    }
  } else {
    contentArea.innerHTML = `<p>Lütfen bir arama terimi girin.</p>`;
  }
});