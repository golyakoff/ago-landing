/* The bilingual dictionary and the price rendering, shared by index.html and pricing.html.
 *
 * It lived inline at the bottom of index.html until this change. Two pages now share a nav, a
 * footer and the whole pricing vocabulary, and two copies of those strings would drift the first
 * time one page was edited alone - so there is one dictionary, loaded by both, with each page's own
 * keys namespaced by section the way the existing keys already were (`section.item.field`).
 *
 * Still no build step: this is a plain script tag, and both pages still open straight off disk.
 *
 * PRICES. Nothing here invents a number. `prices.json` is a snapshot of what the product itself has
 * actually published, written by ago-chat's own tools/update-landing-prices-from-db.sh, which opens
 * a pull request here whenever a real price changes. The file is deliberately optional in every
 * direction: it is absent from this repository until that script first runs, its COPY into the
 * image is optional (Dockerfile), and a key with no published version is correctly missing from the
 * array rather than present as zero. So every price on both pages renders in one of exactly two
 * states - the real figure, or an honest "no published price" - and never a placeholder that could
 * be mistaken for one.
 */

var AGO_I18N = {
  en: {
    'nav.how':'How it works','nav.demos':'Live demos','nav.pricing':'Pricing','nav.cta':'Try it live',
    'hero.eyebrow':'Live on reserve-me.ru right now',
    'hero.title':'<span class="h1-lead">One script tag</span><br>A real conversation<br>on your site',
    'hero.lede':"AGO Chat drops a chat widget onto any page. A visitor asks a question — your team answers instantly. Every conversation automatically routes to the next free operator, with history and files right there in every open tab.",
    'hero.cta1':'Open a live demo shop','hero.cta2':'See how it works',
    'hero.chip1':'Real-time delivery','hero.chip2':'Multi-tenant by design','hero.chip3':'File attachments',
    'widget.online':'Online now',
    'widget.msg1':'Hey! Thanks for reaching out — how can I help?',
    'widget.msg2':'Do you ship to Kazan?',
    'widget.msg3':'Yep, 2–3 business days. Want me to check a date for your order?',
    'widget.msg4':"Sure, here's my order",
    'widget.placeholder':'Type a message…','widget.send':'Send',
    'how.eyebrow':'How it works','how.title':'Three steps. No plugin marketplace.',
    'how.lede':'Nothing to install, nothing to provision by hand. The widget, the transport, and the console are all part of the same product.',
    'how.step1.title':'Add the script','how.step1.body':'One tag, dropped anywhere in your page. It loads a small widget, isolated from the rest of your site.','how.step1.copy':'Copy snippet',
    'how.step2.title':'Visitors start talking','how.step2.body':'A bubble appears in the corner. Messages arrive in real time — no page reloads, no polling delay.',
    'how.step3.title':'Your team answers','how.step3.body':'Operators work from one console: conversation history, file exchange, and presence, kept in sync across every open tab.',
    'demos.eyebrow':'Live demos','demos.title':"Don't take our word for it. Open one.",
    'demos.lede':'Two live shops, two operator teams, completely isolated from each other — running on the same platform, at the same time. This is the actual product, not a screenshot. On either shop page you can also press “Get your own tenant” and get a private operator account nobody else can see into, for about a day.',
    'demos.card1.badge':'Tenant 01 · Light','demos.card1.title':'Demo Shop One','demos.card1.body':'A bright, minimal storefront with its own widget theme and its own operator login — a separate tenant, start to finish.',
    'demos.card2.badge':'Tenant 02 · Dark + teal','demos.card2.title':'Demo Shop Two','demos.card2.body':'A dark storefront with a teal accent, deliberately styled to look nothing like Shop One — same platform, fully separate tenant.',
    'demos.open':'Open shop ↗',

    'tech.lead':'Under the hood: <span class="muted">the isolation between those two shops is real, not a demo trick.</span>',
    'tech.chip1':'Real-time delivery','tech.chip2':'Real tenant isolation',
    'tech.chip3':'Reconnects lose nothing','tech.chip4':'Attachments included',

    'pricing.eyebrow':'Pricing','pricing.title':'Start free. Pay only for what you add.',
    'pricing.lede':'A free account gives you two operator seats and an administrator, at no cost. Everything past that is priced per unit and switched on by you, inside the product.',
    'pricing.permonth':'/mo','pricing.from':'from',
    'pricing.free.label':'Free','pricing.free.amount':'₽0',
    'pricing.free.note':'No card, no trial clock.',
    'pricing.free.f1':'<b>2</b> operator seats','pricing.free.f2':'<b>1</b> administrator',
    'pricing.free.f3':'The widget on your site, real-time delivery and file attachments — the same ones the paid plan runs on.',
    'pricing.paid.label':'Paid','pricing.paid.note':'Billed monthly, per account, in roubles.',
    'pricing.paid.f1':'Up to <b>3</b> operator seats included in the base price',
    'pricing.paid.f2':'Each seat beyond that, up to <b>5</b> in total —',
    'pricing.paid.f3':'<b>2</b> administrators included',
    'pricing.paid.f4':'An extra administrator beyond those two — real, but not publicly priced yet. Ask us.',
    'pricing.paid.f5':'A connected channel beyond the widget — Telegram, MAX, VK, WhatsApp, Avito and email are already live, one flat price for any of them — real, but not publicly priced yet. Ask us.',
    'pricing.soon.label':'Not sold yet:',
    'pricing.soon.calendar':'AGO Calendar — booking and scheduling',
    'pricing.path.title':'How you actually start',
    'pricing.path.body':'There is no buy button on this page, deliberately. You register first; then, inside the product, you pick which capabilities to switch on and pay for exactly those, there. Want to look around before any of that? The demo shops hand out a private operator account on the spot — the button below opens one.',
    'pricing.cta.demo':'Open a live demo','pricing.cta.full':'Full pricing ↗',

    'pricingpage.doctitle':'Pricing — AGO Chat',
    'pricingpage.back':'← Back to the main page',
    'pricingpage.title':"What's free, what's paid, and what isn't priced yet.",
    'pricingpage.lede':'Every rouble figure on this page is a price the product itself has published — not a rounded example, and not a plan we intend to charge one day. Where there is no published price, this page says so instead of guessing.',
    'pricingpage.compare.title':'Free account vs paid account',
    'pricingpage.compare.body':'The difference is how many people can work in it. The chat itself — the widget, real-time delivery, file attachments — is the same product on both.',
    'pricingpage.compare.col1':'','pricingpage.compare.col2':'Free','pricingpage.compare.col3':'Paid',
    'pricingpage.compare.seats':'Operator seats','pricingpage.compare.seats.free':'2','pricingpage.compare.seats.paid':'2 – 5',
    'pricingpage.compare.admins':'Administrators','pricingpage.compare.admins.free':'1','pricingpage.compare.admins.paid':'2 included',
    'pricingpage.compare.price':'Monthly price',
    'pricingpage.compare.widget':'Widget, real-time delivery, attachments',
    'pricingpage.compare.widget.both':'Included',
    'pricingpage.units.title':'What is priced, per unit',
    'pricingpage.units.body':'Two published prices, and two more things that are real in the product but have no published price yet.',
    'pricingpage.units.col1':'Item','pricingpage.units.col2':'Price','pricingpage.units.col3':'What it covers',
    'pricingpage.units.base':'Base price','pricingpage.units.base.note':'Covers the account and its first 3 operator seats.',
    'pricingpage.units.extra':'Each operator seat past the third','pricingpage.units.extra.note':'Charged once per seat, up to 5 seats in total.',
    'pricingpage.units.admin':'Each administrator past the second','pricingpage.units.admin.note':'A real thing you can buy inside the product — the published price for it is not out yet, so this page will not print one. Ask us and we will tell you.',
    'pricingpage.units.channel':'Each connected channel beyond the website widget',
    'pricingpage.units.channel.note':'One flat price for any channel — Telegram, MAX, VK, WhatsApp, Avito and email are already live, in the same operator console as the website chat. The published price for it is not out yet, so this page will not print one. Ask us and we will tell you.',
    'pricingpage.ladder.title':'What a month costs, by seat count',
    'pricingpage.ladder.body':'Not a second price list — these are the two prices above, added up. The base price covers three seats; every seat past the third adds the per-seat price once.',
    'pricingpage.ladder.col1':'Operator seats','pricingpage.ladder.col2':'Per month',
    'pricingpage.soon.title':'Not priced, because not built',
    'pricingpage.soon.body':'Named here rather than left off the page, so you can see what is coming and what it is not.',
    'pricingpage.soon.col1':'What','pricingpage.soon.col2':'Status','pricingpage.soon.col3':'Notes',
    'pricingpage.soon.calendar':'AGO Calendar',
    'pricingpage.soon.calendar.note':'Booking and scheduling, as a second product on the same account.',
    'pricingpage.soon.status':'In development',
    'pricingpage.unpriced':'No published price',
    'pricingpage.updated':'Prices last published',
    'pricingpage.fineprint':'All amounts are in roubles, per month, per account. This page reads the prices the product has published; if a figure here is missing, it is because nothing has been published for it — not because it is free.',

    'footer.tagline':'Embeddable live chat for real conversations — real-time, multi-tenant, self-hosted.',
    'footer.login':'Operator login ↗','footer.copy':'© 2026 AGO Chat',
    'copy.copied':'Copied','copy.manual':'Select & copy manually'
  },
  ru: {
    'nav.how':'Как это работает','nav.demos':'Живые демо','nav.pricing':'Цены','nav.cta':'Попробовать',
    'hero.eyebrow':'Работает на reserve-me.ru прямо сейчас',
    'hero.title':'<span class="h1-lead">Единственный скрипт</span><br>Живой диалог<br>на вашем сайте',
    'hero.lede':'AGO Chat добавляет чат-виджет на любую страницу. Посетитель задаёт вопрос — ваша команда операторов мгновенно отвечает. Диалог автоматически попадает к самому свободному оператору, а история переписки и файлы всегда под рукой в любой вкладке.',
    'hero.cta1':'Открыть демо-магазин','hero.cta2':'Как это работает',
    'hero.chip1':'Доставка в реальном времени','hero.chip2':'Мультитенантность по архитектуре','hero.chip3':'Файлы и вложения',
    'widget.online':'В сети',
    'widget.msg1':'Привет! Расскажите, чем можем помочь?',
    'widget.msg2':'А до Казани доставляете?',
    'widget.msg3':'Да, 2–3 рабочих дня. Проверить дату для вашего заказа?',
    'widget.msg4':'Да, вот мой заказ',
    'widget.placeholder':'Введите сообщение…','widget.send':'Отправить',
    'how.eyebrow':'Как это работает','how.title':'Три шага. Без маркетплейса плагинов.',
    'how.lede':'Ничего устанавливать, ничего настраивать вручную. Виджет, транспорт и консоль — части одного продукта.',
    'how.step1.title':'Добавьте скрипт','how.step1.body':'Один тег в любом месте страницы. Загружается небольшой виджет, изолированный от остального сайта.','how.step1.copy':'Скопировать код',
    'how.step2.title':'Посетители начинают писать','how.step2.body':'В углу появляется значок чата. Сообщения приходят в реальном времени — без перезагрузки страницы и задержек опроса.',
    'how.step3.title':'Команда отвечает','how.step3.body':'Операторы работают в одной консоли: история переписки, обмен файлами и статус присутствия синхронизированы во всех открытых вкладках.',
    'demos.eyebrow':'Живые демо','demos.title':'Не верьте на слово — попробуйте сами',
    'demos.lede':'Два живых магазина, две команды операторов, полностью изолированные друг от друга — на одной платформе, в одно и то же время. Это настоящий продукт, а не скриншот. На любой из страниц можно нажать «Получить свой тенант» и получить приватный аккаунт оператора, который никто другой не видит, примерно на сутки.',
    'demos.card1.badge':'Тенант 01 · Светлая тема','demos.card1.title':'Демо-магазин 1','demos.card1.body':'Светлый, минималистичный магазин со своей темой виджета и своим входом для оператора — отдельный тенант от начала до конца.',
    'demos.card2.badge':'Тенант 02 · Тёмная + бирюза','demos.card2.title':'Демо-магазин 2','demos.card2.body':'Тёмный магазин с бирюзовым акцентом, специально оформлен непохожим на первый — та же платформа, полностью отдельный тенант.',
    'demos.open':'Открыть магазин ↗',

    'tech.lead':'Под капотом: <span class="muted">изоляция между этими двумя магазинами настоящая, а не демо-трюк.</span>',
    'tech.chip1':'Доставка в реальном времени','tech.chip2':'Настоящая изоляция тенантов',
    'tech.chip3':'Переподключение ничего не теряет','tech.chip4':'Вложения включены',

    'pricing.eyebrow':'Цены','pricing.title':'Начните бесплатно. Платите только за то, что добавите.',
    'pricing.lede':'Бесплатный аккаунт даёт два операторских места и администратора — без оплаты. Всё, что сверх этого, стоит по единице и подключается вами внутри продукта.',
    'pricing.permonth':'/мес','pricing.from':'от',
    'pricing.free.label':'Бесплатно','pricing.free.amount':'0 ₽',
    'pricing.free.note':'Без карты и без обратного отсчёта.',
    'pricing.free.f1':'<b>2</b> операторских места','pricing.free.f2':'<b>1</b> администратор',
    'pricing.free.f3':'Виджет на вашем сайте, доставка в реальном времени и файлы — ровно те же, на которых работает платный аккаунт.',
    'pricing.paid.label':'Платно','pricing.paid.note':'Оплата помесячно, за аккаунт, в рублях.',
    'pricing.paid.f1':'До <b>3</b> операторских мест включено в базовую цену',
    'pricing.paid.f2':'Каждое место сверх, всего до <b>5</b> —',
    'pricing.paid.f3':'<b>2</b> администратора включено',
    'pricing.paid.f4':'Ещё один администратор сверх этих двух — он есть, но публичной цены пока нет. Напишите нам.',
    'pricing.paid.f5':'Подключённый канал сверх виджета — Telegram, MAX, VK, WhatsApp, Avito и почта уже подключаются, одна цена на любой из них — он есть, но публичной цены пока нет. Напишите нам.',
    'pricing.soon.label':'Пока не продаётся:',
    'pricing.soon.calendar':'AGO Calendar — запись и расписание',
    'pricing.path.title':'Как это начинается на самом деле',
    'pricing.path.body':'Кнопки «купить» на этой странице нет — намеренно. Сначала регистрация, а дальше уже внутри продукта вы выбираете, какие возможности подключить, и оплачиваете именно их — там же. Хотите сперва посмотреть? Демо-магазины выдают приватный аккаунт оператора сразу — кнопка ниже как раз туда.',
    'pricing.cta.demo':'Открыть живое демо','pricing.cta.full':'Все цены ↗',

    'pricingpage.doctitle':'Цены — AGO Chat',
    'pricingpage.back':'← На главную',
    'pricingpage.title':'Что бесплатно, что платно и что ещё не оценено.',
    'pricingpage.lede':'Каждая сумма на этой странице — цена, которую продукт действительно опубликовал: не округлённый пример и не план когда-нибудь столько брать. Там, где опубликованной цены нет, страница так и пишет, а не придумывает.',
    'pricingpage.compare.title':'Бесплатный аккаунт и платный',
    'pricingpage.compare.body':'Разница — в том, сколько людей в нём работает. Сам чат — виджет, доставка в реальном времени, вложения — на обоих один и тот же.',
    'pricingpage.compare.col1':'','pricingpage.compare.col2':'Бесплатно','pricingpage.compare.col3':'Платно',
    'pricingpage.compare.seats':'Операторских мест','pricingpage.compare.seats.free':'2','pricingpage.compare.seats.paid':'2 – 5',
    'pricingpage.compare.admins':'Администраторов','pricingpage.compare.admins.free':'1','pricingpage.compare.admins.paid':'2 включено',
    'pricingpage.compare.price':'Цена в месяц',
    'pricingpage.compare.widget':'Виджет, реальное время, вложения',
    'pricingpage.compare.widget.both':'Включено',
    'pricingpage.units.title':'Что стоит денег, по единицам',
    'pricingpage.units.body':'Две опубликованные цены — и ещё две вещи, которые в продукте есть, а опубликованной цены у них пока нет.',
    'pricingpage.units.col1':'Позиция','pricingpage.units.col2':'Цена','pricingpage.units.col3':'Что входит',
    'pricingpage.units.base':'Базовая цена','pricingpage.units.base.note':'Покрывает аккаунт и первые 3 операторских места.',
    'pricingpage.units.extra':'Каждое операторское место сверх третьего','pricingpage.units.extra.note':'Считается по одному за место, всего до 5 мест.',
    'pricingpage.units.admin':'Каждый администратор сверх второго','pricingpage.units.admin.note':'Это реальная покупка внутри продукта — просто опубликованной цены у неё пока нет, и выдумывать её эта страница не станет. Напишите нам, и мы назовём.',
    'pricingpage.units.channel':'Каждый подключённый канал сверх виджета на сайте',
    'pricingpage.units.channel.note':'Одна цена на любой канал — Telegram, MAX, VK, WhatsApp, Avito и почта уже подключаются, в той же консоли оператора, что и чат на сайте. Опубликованной цены у неё пока нет, и выдумывать её эта страница не станет. Напишите нам, и мы назовём.',
    'pricingpage.ladder.title':'Сколько стоит месяц при разном числе мест',
    'pricingpage.ladder.body':'Это не второй прайс-лист — это те же две цены выше, сложенные. Базовая цена покрывает три места, каждое следующее добавляет цену места один раз.',
    'pricingpage.ladder.col1':'Операторских мест','pricingpage.ladder.col2':'В месяц',
    'pricingpage.soon.title':'Не оценено, потому что не построено',
    'pricingpage.soon.body':'Названо здесь, а не убрано со страницы: видно, что готовится — и видно, чего пока нет.',
    'pricingpage.soon.col1':'Что','pricingpage.soon.col2':'Статус','pricingpage.soon.col3':'Примечание',
    'pricingpage.soon.calendar':'AGO Calendar',
    'pricingpage.soon.calendar.note':'Запись и расписание — второй продукт на том же аккаунте.',
    'pricingpage.soon.status':'В разработке',
    'pricingpage.unpriced':'Цена не опубликована',
    'pricingpage.updated':'Цены опубликованы',
    'pricingpage.fineprint':'Все суммы — в рублях, за месяц, за аккаунт. Страница показывает цены, которые опубликовал сам продукт; если суммы здесь нет, значит по этой позиции ничего не опубликовано, — а не значит, что она бесплатна.',

    'footer.tagline':'Встраиваемый живой чат для настоящих диалогов — реальное время, мультитенантность, свой сервер.',
    'footer.login':'Вход для оператора ↗','footer.copy':'© 2026 AGO Chat',
    'copy.copied':'Скопировано','copy.manual':'Скопируйте вручную'
  }
};

/* Whatever the last fetch found - `[]` until it lands, and `[]` for good if it 404s, which is the
   normal state of this repository between price snapshots. */
var AGO_PRICES = [];

function agoCurrentLang(){
  return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'ru';
}

function agoFindPrice(key){
  for (var i = 0; i < AGO_PRICES.length; i++){
    var row = AGO_PRICES[i];
    if (row && row.price_key === key && row.amount_rub !== null && row.amount_rub !== undefined){
      return Number(row.amount_rub);
    }
  }
  return null;
}

/* Roubles, the way each language writes them: "490 ₽" reading RU, "₽490" reading EN. Whole amounts
   lose the ".0" the database hands over; anything with real kopecks keeps two places. */
function agoFormatRub(amount, lang){
  var text = (Math.round(amount * 100) % 100 === 0)
    ? String(Math.round(amount))
    : amount.toFixed(2);
  text = text.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return lang === 'en' ? '₽' + text : text + ' ₽';
}

/* `SubscriptionTierBands.BaseSeats` in ago-chat's Domain: the base price covers this many seats,
   and each seat past it adds the per-seat price once. The band *shape* is a rule fixed in code
   (and therefore safe to repeat here); the two amounts it works on are owner-published data and are
   never written down in this repository at all. */
var AGO_BASE_SEATS = 3;

function agoRenderPrices(){
  var lang = agoCurrentLang();
  var dict = AGO_I18N[lang] || AGO_I18N.ru;
  var unpriced = dict['pricingpage.unpriced'];

  document.querySelectorAll('[data-price]').forEach(function(el){
    var amount = agoFindPrice(el.getAttribute('data-price'));
    var priced = amount !== null;
    el.classList.toggle('unpriced', !priced);
    el.textContent = priced
      ? agoFormatRub(amount, lang) + (el.hasAttribute('data-price-period') ? dict['pricing.permonth'] : '')
      : unpriced;
  });

  /* A whole seat count's monthly total, from the two published prices - never a third stored
     number. Both prices must exist, or the row says "no published price" like everything else. */
  document.querySelectorAll('[data-price-seats]').forEach(function(el){
    var seats = parseInt(el.getAttribute('data-price-seats'), 10);
    var base = agoFindPrice('seat-base');
    var extra = agoFindPrice('seat-extra');
    var computable = base !== null && (seats <= AGO_BASE_SEATS || extra !== null);
    el.classList.toggle('unpriced', !computable);
    if (!computable){ el.textContent = unpriced; return; }
    var total = base + Math.max(0, seats - AGO_BASE_SEATS) * (extra || 0);
    el.textContent = agoFormatRub(total, lang) + dict['pricing.permonth'];
  });

  /* The decorations around a headline figure - a "from" in front, a "/mo" behind - only make sense
     when there is a figure. With no published price the row reads as one plain phrase instead of
     "from no published price /mo". */
  document.querySelectorAll('[data-price-row]').forEach(function(row){
    var priced = agoFindPrice(row.getAttribute('data-price-row')) !== null;
    row.querySelectorAll('[data-price-only]').forEach(function(el){ el.hidden = !priced; });
  });

  /* When the snapshot itself was taken, in the reader's own locale - shown only if there is one. */
  document.querySelectorAll('[data-price-updated]').forEach(function(el){
    var newest = null;
    for (var i = 0; i < AGO_PRICES.length; i++){
      var at = AGO_PRICES[i] && AGO_PRICES[i].published_at;
      if (at && (newest === null || at > newest)) newest = at;
    }
    var parsed = newest ? new Date(newest) : null;
    if (!parsed || isNaN(parsed.getTime())){ el.hidden = true; return; }
    el.hidden = false;
    el.textContent = dict['pricingpage.updated'] + ': ' +
      parsed.toLocaleDateString(lang === 'en' ? 'en-GB' : 'ru-RU',
        { year:'numeric', month:'long', day:'numeric' });
  });
}

function agoApplyLang(lang){
  var dict = AGO_I18N[lang] || AGO_I18N.ru;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el){
    var key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  var ruBtn = document.getElementById('lang-ru');
  var enBtn = document.getElementById('lang-en');
  if (ruBtn && enBtn){
    ruBtn.classList.toggle('active', lang === 'ru');
    enBtn.classList.toggle('active', lang === 'en');
  }
  /* Last, and always: a price is language-shaped too - the currency sits on a different side of the
     number, and the "no published price" fallback is a sentence. Re-rendered here rather than only
     after the fetch, so switching language after the prices land still reformats them. */
  agoRenderPrices();
}

function agoSetLang(lang){
  try { localStorage.setItem('ago-lang', lang); } catch (e) {}
  agoApplyLang(lang);
}

(function(){
  var saved = null;
  try { saved = localStorage.getItem('ago-lang'); } catch (e) {}
  agoApplyLang(saved === 'en' ? 'en' : 'ru');

  /* Same-origin static file, no endpoint, no build step - and absent far more often than not, so
     every failure mode lands on the same empty array rather than an error in anyone's console.
     Relative, not "/prices.json", so opening these pages straight off disk behaves the same way a
     404 does instead of throwing. */
  if (typeof fetch === 'function'){
    fetch('prices.json', { cache: 'no-store' })
      .then(function(r){ return r.ok ? r.json() : []; })
      .catch(function(){ return []; })
      .then(function(rows){
        AGO_PRICES = Array.isArray(rows) ? rows : [];
        agoRenderPrices();
      })
      .catch(function(){ /* nothing left to do: the page already reads correctly without prices */ });
  }
})();
