/* The front page's own behaviour: the price calculator. (The theme toggle is shared with
 * pricing.html and lives in i18n.js.)
 *
 * PRICES. Nothing here invents a number, and nothing here stores one. Every amount is looked up
 * through `i18n.js`'s `agoFindPrice`, which reads the `prices.json` snapshot of what the product has
 * actually published. A missing price is a first-class outcome, not an error: the line that needs it
 * says "no published price" and the total says it cannot be summed, rather than quietly dropping the
 * term and printing a smaller, wrong figure. That is the same rule `pricing.html` lives by, applied
 * to a control that adds prices together instead of listing them.
 *
 * The band shape - a base price covering the first N seats, each further seat adding the per-seat
 * price once - is `SubscriptionTierBands` in ago-chat's Domain. A rule fixed in code is safe to
 * restate; the amounts it operates on are not.
 */

/* Free-account limits, from the product's own free tier. Not prices - a price of zero is a
   different thing from "this is what the free account includes", and only the latter is a rule. */
var AGO_FREE_SEATS = 2;
var AGO_FREE_ADMINS = 1;
/* Administrators included in the paid account before the per-administrator price starts. */
var AGO_INCLUDED_ADMINS = 2;

function agoCalcState(){
  var seats = document.getElementById('seats');
  var adm = document.getElementById('adm');
  if (!seats || !adm) return null;
  var channels = [];
  document.querySelectorAll('#chgrid .chbtn').forEach(function(btn){
    if (btn.getAttribute('aria-pressed') === 'true') channels.push(btn.getAttribute('data-ch'));
  });
  return { seats: parseInt(seats.value, 10), admins: parseInt(adm.value, 10), channels: channels };
}

/* One row of the bill. `amount` is either a number, or null meaning "this line has no published
   price" - which is what makes the total unsummable further down. */
function agoBillRow(label, amount, lang, unpriced){
  return {
    label: label,
    text: amount === null ? unpriced : agoFormatRub(amount, lang),
    unpriced: amount === null
  };
}

function agoRenderCalculator(){
  var state = agoCalcState();
  if (state === null) return;

  var lang = agoCurrentLang();
  var dict = AGO_I18N[lang] || AGO_I18N.ru;
  var unpriced = dict['pricingpage.unpriced'];

  document.getElementById('seatsVal').textContent = String(state.seats);
  document.getElementById('admVal').textContent = String(state.admins);
  document.getElementById('chVal').textContent = String(state.channels.length);

  var rows = [];
  var total = 0;
  var summable = true;
  var isFree = state.seats <= AGO_FREE_SEATS
    && state.admins <= AGO_FREE_ADMINS
    && state.channels.length === 0;

  if (isFree){
    rows.push({
      label: dict['home.calc.row.free']
        .replace('{s}', String(state.seats))
        .replace('{a}', String(state.admins)),
      text: dict['home.calc.row.freeamount'],
      unpriced: false
    });
  } else {
    var base = agoFindPrice('seat-base');
    rows.push(agoBillRow(dict['home.calc.row.base'].replace('{n}', String(AGO_BASE_SEATS)), base, lang, unpriced));
    if (base === null) summable = false; else total += base;

    if (state.seats > AGO_BASE_SEATS){
      var extraSeats = state.seats - AGO_BASE_SEATS;
      var seatPrice = agoFindPrice('seat-extra');
      var seatsCost = seatPrice === null ? null : extraSeats * seatPrice;
      rows.push(agoBillRow(dict['home.calc.row.seatsextra'].replace('{n}', String(extraSeats)), seatsCost, lang, unpriced));
      if (seatsCost === null) summable = false; else total += seatsCost;
    }

    rows.push(agoBillRow(dict['home.calc.row.adminincluded'].replace('{n}', String(AGO_INCLUDED_ADMINS)), 0, lang, unpriced));

    if (state.admins > AGO_INCLUDED_ADMINS){
      var extraAdmins = state.admins - AGO_INCLUDED_ADMINS;
      var adminPrice = agoFindPrice('admin-extra');
      var adminsCost = adminPrice === null ? null : extraAdmins * adminPrice;
      rows.push(agoBillRow(dict['home.calc.row.adminextra'].replace('{n}', String(extraAdmins)), adminsCost, lang, unpriced));
      if (adminsCost === null) summable = false; else total += adminsCost;
    }

    rows.push(agoBillRow(dict['home.calc.row.included'], 0, lang, unpriced));

    if (state.channels.length){
      var channelPrice = agoFindPrice('channel-addon');
      var channelsCost = channelPrice === null ? null : state.channels.length * channelPrice;
      rows.push(agoBillRow(dict['home.calc.row.channels'].replace('{list}', state.channels.join(', ')), channelsCost, lang, unpriced));
      if (channelsCost === null) summable = false; else total += channelsCost;
    }
  }

  var bill = document.getElementById('bill');
  bill.replaceChildren();
  rows.forEach(function(row){
    var line = document.createElement('div');
    line.className = 'row';
    var label = document.createElement('span');
    label.textContent = row.label;
    var value = document.createElement('b');
    value.className = row.unpriced ? 'num unpriced' : 'num';
    value.textContent = row.text;
    line.appendChild(label);
    line.appendChild(value);
    bill.appendChild(line);
  });

  var totalEl = document.getElementById('total');
  totalEl.classList.toggle('unpriced', !summable);
  totalEl.textContent = summable ? agoFormatRub(total, lang) : dict['home.calc.unpricedtotal'];

  var freeNote = document.getElementById('freeNote');
  if (freeNote) freeNote.hidden = !isFree;
}

(function(){
  var grid = document.getElementById('chgrid');
  var seats = document.getElementById('seats');
  var adm = document.getElementById('adm');
  if (!grid || !seats || !adm) return;

  seats.addEventListener('input', agoRenderCalculator);
  adm.addEventListener('input', agoRenderCalculator);
  grid.querySelectorAll('.chbtn').forEach(function(btn){
    btn.addEventListener('click', function(){
      btn.setAttribute('aria-pressed', btn.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      agoRenderCalculator();
    });
  });

  /* `i18n.js` has already applied the language and kicked off the price fetch by the time this file
     runs, so the first paint happens here; every later one comes through `agoRenderPrices`. */
  agoRenderCalculator();
})();
