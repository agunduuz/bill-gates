const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

/*
ADIMLAR:

1- İlk önce değişiklik yapacağımız yeri seçiyoruz.
"panel" classı olan yerde değişiklik yapacağız.
Tüm "panel" classları seçiyoruz.

2- Eğer console.log(panels) ile console da yazdırırsak,
bize bir NodeList döndürdüğünü görebiliriz.

3- "panel" classı olan tüm Liste elemanlarını tek tek
çağırmak istiyoruz. Bu yüzden;
"forEach()" methodunu kullanıyoruz.

NOTE: "forEach()" içerisinde bir fonksiyon tanımlaması yapacağız. Bu fonksiyon "panel" adında bir argüman alacak. 

4- Console da yazdırırsak eğer görürüz. Bu sefer bir liste olarak değil "panel" clasının html kodunu alabileceğiz.

5- Tıkladığımızda bir işlem olmasını istediğimiz için
"addEventListener()" methodunu tanımlıyoruz. Tıklama işlemini yapmak istediğimiz için;
"addEventListener('click', )" olarak event türünü belirtiyoruz.

6- Tıklama işlemi gerçekleştirildiğinde bir fonksiyon çağıracağız. "addEventListener('click', () =>{ })"

7- Fonksiyon içerisinde görmek istediğimiz sonucu etkileyen işlemi belirtiyoruz. 
"panel.classList.add('active')" 
"active" classını bizim listelediğimiz "panel" html'ine de ekliyoruz. 

NOTE: Şu anda tıkladığımızda tüm hepsine "active" classı ekliyoruz ancak bizim yapmak istediğimiz;
- Tıkladığıma, 'active' classını ekle.
- Diğer panel listesi elemanlarından 'active' classını sil.

8- Fonksiyon içinde 'active' classını eklemeden önce tıklamadığımız elemanlardaki "active" classını silmek adına 'removeActiveClasses()' fonksiyonunu çağırıyoruz.

9- "removeActiveClasses" fonksiyonumuzu oluşturuyoruz. Ve bir üstte yaptığımız gibi tüm panel Listesini "forEach()" ile döndürüyoruz.

10- Bu sefer 7. sırada gerçekletirdiğimiz ekleme işleminin tam tersini yapıyoruz.
"panel.classList.remove('active')"
*/
