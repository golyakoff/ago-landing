/* The bilingual dictionary, the price lookup and the theme toggle, shared by index.html and
 * pricing.html.
 *
 * Two pages share a nav, a footer, a theme switch and the whole pricing vocabulary, and two copies
 * of those strings would drift the first time one page was edited alone - so there is one
 * dictionary, loaded by both, with each page's own keys namespaced by section (`section.item.field`).
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
 * be mistaken for one. The front page's calculator (home.js) adds the same figures up under the
 * same rule: a missing part makes the total unsummable rather than smaller.
 */

var AGO_I18N = {
  en: {
    'nav.pricing':'What it costs','nav.features':'Features','nav.widget':'The widget','nav.advantages':'Why us',
    'nav.cta':'Start free',

    'home.kicker':'Live chat for your site and messengers',
    'home.title':'Every customer conversation <em>from ₽490 a month</em>',
    'home.lede':'Seven channels, appointment booking, reports and reply suggestions — in one window and on one bill. No “talk to sales”: the price is worked out on the right, and everything switches on inside the account in a minute.',
    'home.cta1':'Work out my price','home.cta2':'Open the live demo ↗',
    'home.fact1.v':'₽0','home.fact1.k':'two operators, forever',
    'home.fact2.k':'channels in one window',
    'home.fact3.k':'line of code on your site',

    'home.calc.kicker':'Calculator','home.calc.unit':'monthly, in roubles',
    'home.calc.seats':'Operators answering','home.calc.admins':'Administrators','home.calc.channels':'Channels beyond the site',
    'home.calc.included':'The website chat and email are included in every account, the free one too.',
    'home.calc.total':'Per month','home.calc.cta':'Create an account',
    'home.calc.freenote':'This fits inside a free account — there is nothing to pay.',
    'home.calc.full':'The full price list, item by item ↗',
    'home.calc.row.free':'Free account: {s} operators, {a} administrators',
    'home.calc.row.freeamount':'we charge nothing',
    'home.calc.row.base':'Base price — up to {n} operators',
    'home.calc.row.seatsextra':'Operator seats past the base: {n}',
    'home.calc.row.adminincluded':'Administrators included: {n}',
    'home.calc.row.adminextra':'Administrators past the included ones: {n}',
    'home.calc.row.included':'Website chat and email',
    'home.calc.row.channels':'Channels: {list}',
    'home.calc.unpricedtotal':'One of these has no published price, so this cannot be summed. The rest of the bill is above.',

    'home.what.kicker':'What the money buys',
    'home.what.title':'The plan changes the scale, not the features',
    'home.what.lede':'A free and a paid account differ in how many people work in them, how many channels are connected, and how far back the message history goes: on the free one it covers a limited period. Customer cards — the most valuable thing a business accumulates — are stored separately from the conversations and stay with you even on the free plan.',

    'home.cap1.t':'A queue that sorts itself',
    'home.cap1.b':'A conversation is routed automatically to the operator with the most capacity. It can be handed to a colleague along with its history. If nobody picks it up for a long time, it returns to the queue on its own.',
    'home.cap2.t':'One history per customer',
    'home.cap2.b':'Several sources for the same person — Telegram, MAX and email, say — can be linked together. One conversation history across all of them.',
    'home.cap3.t':'Canned replies',
    'home.cap3.b':'Answer the everyday questions in two keystrokes. Plus shortcuts and notifications, so nothing from a customer goes unnoticed.',
    'home.cap4.t':'Customers can book themselves',
    'home.cap4.b':'You set up a specialist, the services and the schedule — the customer books a slot on their own, without waiting for an operator.',
    'home.cap5.t':'Automatic reply out of hours',
    'home.cap5.b':'A customer gets an answer even when no operator is working: an automatic reply, an article from the knowledge base, or a call back during working hours on the contact they left.',
    'home.cap6.t':'Reporting worth reading',
    'home.cap6.b':'Volume by channel, first-response time, missed conversations, operator workload, what people ask about, conversation outcomes and conversion.',
    'home.cap7.t':'AI suggestions',
    'home.cap7.b':'The AI drafts a reply and proposes tags. A person always sends it — a draft cannot reach the customer on its own.',
    'home.cap8.t':'Notes and tags',
    'home.cap8.b':'Operators can leave notes the customer never sees: a place to keep what a customer prefers, out of public view.',
    'home.cap9.t':'A connection that survives',
    'home.cap9.b':'The underground, a lift, a page reload — the conversation carries on from where it broke off, and messages already sent arrive once the connection is back.',

    'home.widget.kicker':'On your site',
    'home.widget.title':'What it looks like to a customer',
    'home.widget.lede':'The widget fits your own design — position, colours, greeting text: all of it is configurable.',
    'home.widget.t1':'Works on a CMS and on a hand-built site alike',
    'home.widget.t2':'Files go both ways: a product photo, an invoice, a screenshot of an error',
    'home.widget.t3':'Simple to set up and to embed',
    'home.widget.cta':'Write to the live demo ↗',
    'home.widget.caption':'One conversation can arrive over several channels — the customer card stays one',

    'home.mock.header':'Chat with us',
    'home.mock.m1':'Hello! Happy to help with materials and lead times.',
    'home.mock.m2':'How long does a leather belt for a buckle from a photo take?',
    'home.mock.m3':'Three working days. Send a photo of the buckle and we will be precise.',
    'home.mock.m4':'Here you go',
    'home.mock.m5':'That works, no problem with the buckle — pick a time to collect it:',
    'home.mock.service':'Fitting and collection, 20 minutes',
    'home.mock.slot1':'Thu, 14:00','home.mock.slot2':'Thu, 17:30','home.mock.slot3':'Fri, 11:00',
    'home.mock.book':'Book','home.mock.placeholder':'Type a message…',

    'home.adv.kicker':'Why us',
    'home.adv.title':'What you get the moment you register',
    'home.adv.lede':'Nothing to buy on top and nothing to install: everything below works from day one, on a free account too.',
    'home.adv.cal.t':'The Calendar module — booking with your specialists',
    'home.adv.cal.b':'Specialists, services and schedules are set up in the same account. A customer books on their own — in the widget on your site and inside the conversation through messenger bots, without going anywhere else or installing an app.',
    'home.adv1.t':'Seven channels in one queue',
    'home.adv1.b':'Site, Telegram, WhatsApp, VK, Avito, MAX and email — one operator window instead of seven tabs.',
    'home.adv2.t':'Files, search, tags, notes, handover',
    'home.adv2.b':'Everything an operator needs on an ordinary day — no add-ons, no surcharges.',
    'home.adv3.t':'Reports by operator, channel, source and conversion',
    'home.adv3.b':'You can see which advertising actually brings conversations, and what becomes of them.',
    'home.adv4.t':'Reply suggestions and out-of-hours auto-reply',
    'home.adv4.b':'At night the customer gets an answer; in the morning the operator gets a draft.',
    'home.adv5.t':'Complete isolation between accounts',
    'home.adv5.b':'Your conversations and contacts are visible to you and your operators, and nobody else.',
    'home.adv6.t':'Nothing is lost when the connection drops',
    'home.adv6.b':'The conversation resumes where it stopped, and a sent message still arrives.',

    'home.cta.kicker':'Live deployment',
    'home.cta.title':'Checking it takes under two minutes',
    'home.cta.lede':'The demo shop is real: a real widget, a real server, a real operator console. Try both sides at once — write into the chat, then answer yourself from a second tab.',
    'home.cta.role1':'You as the customer: writing from the widget',
    'home.cta.role2':'You as the operator: answering from the console',
    'home.cta.demo':'Open the live demo ↗','home.cta.calc':'Work out my price',
    'home.foot.demo':'Demo',
    'home.theme.light':'Switch to the light theme','home.theme.dark':'Switch to the dark theme',

    'pricing.permonth':'/mo','pricing.from':'from','pricing.free.amount':'₽0',
    'pricing.path.title':'How you actually start',
    'pricing.path.body':'There is no buy button on this page, deliberately. You register first; then, inside the product, you pick which capabilities to switch on and pay for exactly those, there. Want to look around before any of that? The demo shop hands out a private operator account on the spot — the button below opens one.',
    'pricing.cta.demo':'Open the live demo ↗','pricing.cta.full':'Full price list ↗',

    'pricingpage.doctitle':'Pricing — AGO Chat',
    'pricingpage.back':'← Back to the main page',
    'pricingpage.title':'What is free, what is paid, and what each item costs.',
    'pricingpage.lede':'Every rouble figure on this page is a price the product itself has published — not a rounded example, and not a plan we intend to charge one day. Where there is no published price, this page says so instead of guessing.',
    'pricingpage.compare.title':'Free account vs paid account',
    'pricingpage.compare.body':'The difference is how many people can work in it. The chat itself — the widget, real-time delivery, file attachments — is the same product on both.',
    'pricingpage.compare.col1':'','pricingpage.compare.col2':'Free','pricingpage.compare.col3':'Paid',
    'pricingpage.compare.seats':'Operator seats','pricingpage.compare.seats.free':'2','pricingpage.compare.seats.paid':'2 – 5',
    'pricingpage.compare.admins':'Administrators','pricingpage.compare.admins.free':'1','pricingpage.compare.admins.paid':'2 included',
    'pricingpage.compare.widget':'Widget, real-time delivery, attachments',
    'pricingpage.compare.widget.both':'Included',
    'pricingpage.compare.history':'How far back the history goes',
    'pricingpage.compare.history.free':'A limited period','pricingpage.compare.history.paid':'A long window',
    'pricingpage.compare.price':'Monthly price',
    'pricingpage.units.title':'What is priced, per unit',
    'pricingpage.units.body':'Four items, and every figure below is one the product itself has published.',
    'pricingpage.units.col1':'Item','pricingpage.units.col2':'Price','pricingpage.units.col3':'What it covers',
    'pricingpage.units.base':'Base price','pricingpage.units.base.note':'Covers the account and its first 3 operator seats.',
    'pricingpage.units.extra':'Each operator seat past the third','pricingpage.units.extra.note':'Charged once per seat, up to 5 seats in total.',
    'pricingpage.units.admin':'Each administrator past the second','pricingpage.units.admin.note':'Charged once per administrator. Two are included in the base price.',
    'pricingpage.units.channel':'Each connected channel beyond the site',
    'pricingpage.units.channel.note':'One flat price for any channel — Telegram, MAX, VK, WhatsApp, Avito. The website chat and email are included in every account and are not counted.',
    'pricingpage.rule.title':'How the operator price is worked out',
    'pricingpage.rule.body':'No second price list here: both figures are the two prices from the table above.',
    'pricingpage.rule.first':'operators — the base price of the account',
    'pricingpage.rule.next':'each further operator adds',
    'pricingpage.rule.example':'Five operators, for instance:',
    'pricingpage.unpriced':'No published price',
    'pricingpage.updated':'Prices last published',
    'pricingpage.fineprint':'All amounts are in roubles, per month, per account. This page reads the prices the product has published; if a figure here is missing, it is because nothing has been published for it — not because it is free.',

    'footer.login':'Operator login ↗','footer.copy':'© 2026 AGO Chat'
  },
  ru: {
    'nav.pricing':'Сколько стоит','nav.features':'Возможности','nav.widget':'Виджет','nav.advantages':'Преимущества',
    'nav.cta':'Начать бесплатно',

    'home.kicker':'Чат для сайта и мессенджеров',
    'home.title':'Вся переписка с клиентами <em>от 490 ₽ в месяц</em>',
    'home.lede':'Семь каналов, запись к мастерам, отчёты и подсказки — в одном окне и в одном счёте. Никаких «свяжитесь с отделом продаж»: цена посчитана справа, всё включается в кабинете за минуту.',
    'home.cta1':'Посчитать свой тариф','home.cta2':'Открыть живое демо ↗',
    'home.fact1.v':'0 ₽','home.fact1.k':'двое операторов навсегда',
    'home.fact2.k':'каналов в одном окне',
    'home.fact3.k':'строка кода на сайт',

    'home.calc.kicker':'Калькулятор','home.calc.unit':'помесячно, в рублях',
    'home.calc.seats':'Операторов отвечает','home.calc.admins':'Администраторов','home.calc.channels':'Каналы сверх сайта',
    'home.calc.included':'Чат на сайте и почта включены в любой аккаунт, в том числе бесплатный.',
    'home.calc.total':'Итого в месяц','home.calc.cta':'Завести аккаунт',
    'home.calc.freenote':'Такой набор помещается в бесплатный аккаунт — платить не за что.',
    'home.calc.full':'Все цены и что входит в каждую позицию ↗',
    'home.calc.row.free':'Бесплатный аккаунт: операторов {s}, администраторов {a}',
    'home.calc.row.freeamount':'мы не берём денег',
    'home.calc.row.base':'Базовая цена — до {n} операторов',
    'home.calc.row.seatsextra':'Операторов сверх базы: {n}',
    'home.calc.row.adminincluded':'Администраторов включено: {n}',
    'home.calc.row.adminextra':'Администраторов сверх включённых: {n}',
    'home.calc.row.included':'Чат на сайте и почта',
    'home.calc.row.channels':'Каналы: {list}',
    'home.calc.unpricedtotal':'У одной из позиций нет опубликованной цены, поэтому сумму не показываем. Остальной счёт — выше.',

    'home.what.kicker':'Что входит в эти деньги',
    'home.what.title':'Тариф меняет масштаб, а не возможности',
    'home.what.lede':'Бесплатный и платный аккаунт отличаются числом людей, количеством подключённых каналов и глубиной хранения переписки: на бесплатном история доступна за ограниченный период. А карточки клиентов — самое ценное, что накапливается у бизнеса, — хранятся отдельно от переписки и остаются с вами даже на бесплатном тарифе.',

    'home.cap1.t':'Умная очередь',
    'home.cap1.b':'Диалог автоматически направляется к наиболее свободному оператору. Есть возможность передать диалог коллеге вместе с историей. Если диалог останется без внимания оператора продолжительное время, он сам вернётся в очередь.',
    'home.cap2.t':'Единая история клиента',
    'home.cap2.b':'Возможность связывать различные источники сообщений одного клиента — например: Телеграм, Макс и почту. Сквозная история диалога.',
    'home.cap3.t':'Шаблоны ответов',
    'home.cap3.b':'Отвечайте на частые вопросы в пару нажатий. Плюс горячие клавиши и уведомления, которые помогут эффективнее общаться и не пропускать сообщения клиентов.',
    'home.cap4.t':'Возможность записаться',
    'home.cap4.b':'Вы заводите мастера, формируете услуги и расписание — клиент записывается на услугу самостоятельно, не дожидаясь оператора.',
    'home.cap5.t':'Автоответ вне рабочих часов',
    'home.cap5.b':'Клиент получает ответ даже во внерабочие часы оператора: автоответ, статью из базы знаний или обратный звонок в рабочие часы — по предоставленным контактам.',
    'home.cap6.t':'Полезная аналитика',
    'home.cap6.b':'Статистика по каналам обращений, время первого ответа, пропущенные диалоги, нагрузка операторов, темы обращений, итоги разговора и конверсия.',
    'home.cap7.t':'Подсказка ИИ',
    'home.cap7.b':'ИИ готовит черновик ответа и предлагает теги. Отправляет всегда человек — черновик физически не может уйти клиенту сам.',
    'home.cap8.t':'Заметки и теги',
    'home.cap8.b':'Операторы могут оставлять заметки, которые не видны клиенту: они позволяют сохранить предпочтения клиентов в непубличном формате.',
    'home.cap9.t':'Устойчивая связь',
    'home.cap9.b':'Метро, лифт, перезагрузка страницы — разговор продолжается с того места, на котором оборвался, а отправленные сообщения доходят при возобновлении связи.',

    'home.widget.kicker':'На вашем сайте',
    'home.widget.title':'Как это выглядит у покупателя?',
    'home.widget.lede':'Виджет легко встроится в ваш дизайн — положение, цветовая палитра, приветственные тексты: всё настраивается!',
    'home.widget.t1':'Работает как на CMS, так и на собственном дизайнерском сайте',
    'home.widget.t2':'Позволяет обмениваться файлами: фото товара, накладная, скриншот ошибки',
    'home.widget.t3':'Прост в первичной настройке и интеграции',
    'home.widget.cta':'Написать в живое демо ↗',
    'home.widget.caption':'Диалог может идти по нескольким каналам — карточка одна',

    'home.mock.header':'Напишите нам',
    'home.mock.m1':'Здравствуйте! Подскажем по срокам и материалам.',
    'home.mock.m2':'Сколько делается кожаный ремень под пряжку с фото?',
    'home.mock.m3':'Три рабочих дня. Пришлите фото пряжки — скажем точнее.',
    'home.mock.m4':'Держите',
    'home.mock.m5':'Отлично, вопросов по пряжке нет, выберите время, когда удобно забрать:',
    'home.mock.service':'Примерка и выдача, 20 минут',
    'home.mock.slot1':'Чт, 14:00','home.mock.slot2':'Чт, 17:30','home.mock.slot3':'Пт, 11:00',
    'home.mock.book':'Записаться','home.mock.placeholder':'Введите сообщение…',

    'home.adv.kicker':'Наши преимущества',
    'home.adv.title':'Что вы получаете сразу после регистрации',
    'home.adv.lede':'Ничего докупать и доустанавливать не нужно: всё перечисленное работает с первого дня, на бесплатном аккаунте тоже.',
    'home.adv.cal.t':'Модуль «Календарь» — запись к мастерам',
    'home.adv.cal.b':'Мастера, услуги и расписание настраиваются в том же кабинете. Клиент записывается сам — и в виджете на сайте, и прямо в переписке через боты в мессенджерах, не переходя никуда и не скачивая приложение.',
    'home.adv1.t':'Семь каналов в одной очереди',
    'home.adv1.b':'Сайт, Telegram, WhatsApp, ВКонтакте, Авито, MAX и почта — одно окно оператора вместо семи вкладок.',
    'home.adv2.t':'Файлы, поиск, теги, заметки, передача диалога',
    'home.adv2.b':'Всё, что нужно оператору в обычный рабочий день, — без доплат и надстроек.',
    'home.adv3.t':'Отчёты по операторам, каналам, источникам и конверсии',
    'home.adv3.b':'Видно, какая реклама приводит разговоры и что с ними происходит дальше.',
    'home.adv4.t':'Подсказка ответа и автоответ вне рабочих часов',
    'home.adv4.b':'Ночью клиент получает ответ, а утром оператор — готовый черновик.',
    'home.adv5.t':'Полная изоляция магазинов друг от друга',
    'home.adv5.b':'Ваши диалоги и контакты видите только вы и ваши операторы.',
    'home.adv6.t':'Ничего не теряется при обрыве связи',
    'home.adv6.b':'Разговор продолжается с того же места, отправленное сообщение доходит.',

    'home.cta.kicker':'Живой стенд',
    'home.cta.title':'Проверка занимает не больше двух минут',
    'home.cta.lede':'Демо-магазин настоящий: настоящий виджет, настоящий сервер, настоящая консоль. Попробуйте себя и в роли клиента, и в роли оператора одновременно — напишите в чат, а со второй вкладки ответьте себе же.',
    'home.cta.role1':'Вы — клиент: пишете из виджета',
    'home.cta.role2':'Вы — оператор: отвечаете из консоли',
    'home.cta.demo':'Открыть живое демо ↗','home.cta.calc':'Посчитать свой тариф',
    'home.foot.demo':'Демо',
    'home.theme.light':'Включить светлую тему','home.theme.dark':'Включить тёмную тему',

    'pricing.permonth':'/мес','pricing.from':'от','pricing.free.amount':'0 ₽',
    'pricing.path.title':'Как это начинается на самом деле',
    'pricing.path.body':'Кнопки «купить» на этой странице нет — намеренно. Сначала регистрация, а дальше уже внутри продукта вы выбираете, какие возможности подключить, и оплачиваете именно их — там же. Хотите сперва посмотреть? Демо-магазин выдаёт приватный аккаунт оператора сразу — кнопка ниже как раз туда.',
    'pricing.cta.demo':'Открыть живое демо ↗','pricing.cta.full':'Все цены ↗',

    'pricingpage.doctitle':'Цены — AGO Chat',
    'pricingpage.back':'← На главную',
    'pricingpage.title':'Что бесплатно, что платно и сколько стоит каждая позиция.',
    'pricingpage.lede':'Каждая сумма на этой странице — цена, которую продукт действительно опубликовал: не округлённый пример и не план когда-нибудь столько брать. Там, где опубликованной цены нет, страница так и пишет, а не придумывает.',
    'pricingpage.compare.title':'Бесплатный аккаунт и платный',
    'pricingpage.compare.body':'Разница — в том, сколько людей в нём работает. Сам чат — виджет, доставка в реальном времени, вложения — на обоих один и тот же.',
    'pricingpage.compare.col1':'','pricingpage.compare.col2':'Бесплатно','pricingpage.compare.col3':'Платно',
    'pricingpage.compare.seats':'Операторских мест','pricingpage.compare.seats.free':'2','pricingpage.compare.seats.paid':'2 – 5',
    'pricingpage.compare.admins':'Администраторов','pricingpage.compare.admins.free':'1','pricingpage.compare.admins.paid':'2 включено',
    'pricingpage.compare.widget':'Виджет, реальное время, вложения',
    'pricingpage.compare.widget.both':'Включено',
    'pricingpage.compare.history':'Глубина истории переписки',
    'pricingpage.compare.history.free':'Ограниченный период','pricingpage.compare.history.paid':'Длинное окно',
    'pricingpage.compare.price':'Цена в месяц',
    'pricingpage.units.title':'Что стоит денег, по единицам',
    'pricingpage.units.body':'Четыре позиции, и каждая цена ниже — та, которую опубликовал сам продукт.',
    'pricingpage.units.col1':'Позиция','pricingpage.units.col2':'Цена','pricingpage.units.col3':'Что входит',
    'pricingpage.units.base':'Базовая цена','pricingpage.units.base.note':'Покрывает аккаунт и первые 3 операторских места.',
    'pricingpage.units.extra':'Каждое операторское место сверх третьего','pricingpage.units.extra.note':'Считается по одному за место, всего до 5 мест.',
    'pricingpage.units.admin':'Каждый администратор сверх второго','pricingpage.units.admin.note':'Считается по одному за администратора. Два включены в базовую цену.',
    'pricingpage.units.channel':'Каждый подключённый канал сверх сайта',
    'pricingpage.units.channel.note':'Одна цена на любой канал — Telegram, MAX, ВКонтакте, WhatsApp, Авито. Чат на сайте и почта включены в любой аккаунт и не считаются.',
    'pricingpage.rule.title':'Как считается цена за операторов',
    'pricingpage.rule.body':'Здесь нет второго прайс-листа: обе цифры — те же две цены, что в таблице выше.',
    'pricingpage.rule.first':'оператора — базовая цена аккаунта',
    'pricingpage.rule.next':'каждый следующий оператор добавляет',
    'pricingpage.rule.example':'Пять операторов, например:',
    'pricingpage.unpriced':'Цена не опубликована',
    'pricingpage.updated':'Цены опубликованы',
    'pricingpage.fineprint':'Все суммы — в рублях, за месяц, за аккаунт. Страница показывает цены, которые опубликовал сам продукт; если суммы здесь нет, значит по этой позиции ничего не опубликовано, — а не значит, что она бесплатна.',

    'footer.login':'Вход для оператора ↗','footer.copy':'© 2026 AGO Chat'
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
  text = text.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return lang === 'en' ? '₽' + text : text + ' ₽';
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

  /* The front page's calculator adds these same figures up. It lives in `home.js` and is absent on
     the price list, which is why this is a presence check rather than a call - this file stays the
     one that knows when prices or language changed, without knowing what a calculator is. */
  if (typeof agoRenderCalculator === 'function') agoRenderCalculator();
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
  agoPaintThemeToggle();
  /* Last, and always: a price is language-shaped too - the currency sits on a different side of the
     number, and the "no published price" fallback is a sentence. Re-rendered here rather than only
     after the fetch, so switching language after the prices land still reformats them. */
  agoRenderPrices();
}

function agoSetLang(lang){
  try { localStorage.setItem('ago-lang', lang); } catch (e) {}
  agoApplyLang(lang);
}

/* ---- theme ------------------------------------------------------------- *
 * The palette is driven entirely by `data-theme` on the root element, with no attribute meaning
 * "follow the operating system" - so an explicit choice is a stamp, and its absence is not a third
 * palette but the default behaviour. Shared by both pages, which both carry the button.
 */
function agoCurrentTheme(){
  return document.documentElement.getAttribute('data-theme')
    || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

function agoPaintThemeToggle(){
  var btn = document.getElementById('themeToggle');
  var icon = document.getElementById('themeIcon');
  if (!btn || !icon) return;
  var dict = AGO_I18N[agoCurrentLang()] || AGO_I18N.ru;
  var isDark = agoCurrentTheme() === 'dark';
  /* The icon names the theme a click switches *to*, not the one in effect. */
  icon.textContent = isDark ? 'light_mode' : 'dark_mode';
  var label = isDark ? dict['home.theme.light'] : dict['home.theme.dark'];
  btn.setAttribute('aria-label', label);
  btn.title = label;
}

function agoSetTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('ago-theme', theme); } catch (e) {}
  agoPaintThemeToggle();
}

(function(){
  var savedTheme = null;
  try { savedTheme = localStorage.getItem('ago-theme'); } catch (e) {}
  if (savedTheme === 'light' || savedTheme === 'dark'){
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  var btn = document.getElementById('themeToggle');
  if (btn){
    btn.addEventListener('click', function(){
      agoSetTheme(agoCurrentTheme() === 'dark' ? 'light' : 'dark');
    });
  }
  /* No explicit choice yet: follow the system if it changes while the page is open. */
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(){
    if (!document.documentElement.getAttribute('data-theme')) agoPaintThemeToggle();
  });

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
