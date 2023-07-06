const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
  let actual;
  let prop;
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  beforeEach (() =>{
   
    prop ="foo"
    actual = utils.verileniTrimle(input , prop)
  })
   test('[3] verilen propu trimliyor', () => {
    expect(actual[prop]).toEqual(actual[prop].trim())
   })
   test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {
    expect(actual['bar']).toEqual(input['bar'])
   })
})

describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  const tamsayilar  =[{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]
   test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {
    const max = utils.enBuyukTamsayiyiBul(tamsayilar);
    expect(max).toBe(5);
   })
})

describe('[Görev 4] Sayici', () => {
  let sayici
  beforeEach(() => {
    sayici = new utils.Sayici(3) // her test yeni bir sayı ile başlatılıyor
  })
  test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {
    let sayi = sayici.asagiSay();
    expect(sayi).toBe(3)
  })
   test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {
    let sayi = sayici.asagiSay();
     sayi=  sayici.asagiSay();
    expect(sayi).toBe(2)
   })
   test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    let sayi = sayici.asagiSay();
     sayi=  sayici.asagiSay();
     sayi=  sayici.asagiSay();
     sayi=  sayici.asagiSay();
     expect(sayi).toBe(0)

   })
})

describe('[Görev 5] Mevsimler', () => {
  let mevsimler
  beforeEach(() => {
    //OBJE YARATIYOR
    mevsimler = new utils.Mevsimler() // her test yeni bir mevsimle başlar
  })
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    let mevsim = mevsimler.sonraki();
    expect(mevsim).toBe('yaz')
  })
   test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    let mevsim = mevsimler.sonraki();
    mevsim = mevsim.sonraki();
    expect(mevsim).toBe('sonbahar');
   })
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    let mevsim = mevsimler.sonraki();
    mevsim = mevsim.sonraki();
    mevsim = mevsim.sonraki();
    expect(mevsim).toBe('kış');
  })
   test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {})
   let mevsim = mevsimler.sonraki();
   mevsim = mevsim.sonraki();
   mevsim = mevsim.sonraki();
   mevsim = mevsim.sonraki();
   expect(mevsim).toBe('ilkbahar');
   test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    for (let i = 0; i < 4; i++) {
      mevsimler.sonraki();
    }

    
   expect(mevsim).toBe('yaz');
   })
   test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    let mevsim = mevsimler.sonraki();
    for (let i=0; i<39; i++){
      mevsim = mevsimler.sonraki();
    }
    expect(mevsim).toBe('ilkbahar');
   })
})

describe('[Görev 6] Araba', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30) // her test yeni bir araba oluşturur
  })
   test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    let total = focus.sur(100);
    total = focus.sur(100);
    total = focus.sur(100);
    total = focus.sur(200);
    total = focus.sur(200);
    expect(total).toBe(600);
    
   })
 test('[16] arabayı sürmek benzin tüketiyor', () => {
  let total = focus.sur(100);
    total = focus.sur(100);
    total = focus.sur(100);
    total = focus.sur(200);
    total = focus.sur(200);
    expect(focus.depo).toBe(0);
 })
  test('[17] benzinalma arabayı sürmeye izin veriyor', () => {
    let total = focus.sur(100);
    total = focus.sur(100);
    total = focus.sur(100);
    total = focus.sur(200);
    total = focus.sur(200);
    focus.benzinal(10);
    total = focus.sur(200);
    expect(total).toBe(800);
  })
   test('[18] dolu depoya benzin alma etki etmiyor', () => {
    let total = focus.sur(100);
    total = focus.sur(100);
    total = focus.sur(100);
    total = focus.sur(200);
    total = focus.sur(200);
     focus.benzinal(20);
    expect(depo).toBe(20);
    depo = focus.benzinal(20)
    expect(depo).toBe(20);
   })
})

describe('[Görev 7] asenkronCiftSayi', () => {
   test('[19] bir çift sayı verilirse true çözümlüyor', async () => {
    expect(await utils.asenkronCiftSayi(2)).toBe(true)
   })
   test('[20] tek sayı verilirse false çözümlüyor',async () => {
    expect(await utils.asenkronCiftSayi(1)).toBe(false)
   })
})
