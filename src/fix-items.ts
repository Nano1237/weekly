import {Item} from "./item";

/**
 * @description
 * All items that are already shown and cant be removed, replaced or reordered.
 */
export const FIX_ITEMS: Item[] = [
    // DON'T
    {text: 'Bingo spielen und laut Bingo rufen', emoji: '🎲', dont: true, order: 14},
    {text: 'Ein 5000-Teile Puzzle schaffen', emoji: '🧩', dont: true, order: 15},
    {text: 'Insekten essen', emoji: '🐛', dont: true, order: 19},
    {text: 'Einen Dankesbrief an eine Firma schreiben', emoji: '', dont: true, order: 28},
    {text: 'Professionelles Gesangstraining buchen', emoji: '🎶', dont: true, order: 60},
    {text: 'Einen Telefonstreich machen', emoji: '📞', order: 9, dont: true},
    {text: 'Ein Lied im Radio wünschen', emoji: '📻', order: 11, dont: true},
    {text: 'Eine Kerze selbermachen', emoji: '🕯️', order: 27, dont: true},
    {text: 'In einen Indoor Trampolin-Park gehen', emoji: '🎫', order: 29, dont: true},
    {text: 'Eine Zeitkapsel vergraben', emoji: '⏳', order: 35, dont: true},
    {text: 'Einen Brief an ein:e Freund:in schreiben', emoji: '💌', order: 43, dont: true},
    {text: 'Jemanden mit dem gleichen Namen kontaktieren', emoji: '👭', order: 47, dont: true},
    {text: 'Eine Englischsprachschule besuchen', emoji: '🇬🇧', order: 54, dont: true},
    // DONE
    {text: 'Nach Rügen fahren und dort mit einem VW Caddy Maxi Campen', emoji: '🏕️', done: true, order: 1},
    {text: 'Im Regen in Pfützen springen', emoji: '🧒', done: true, order: 2},
    {text: 'Wandern im Deister', emoji: '🥾', done: true, order: 3},
    {text: 'Urlaub auf einem Hausboot machen', emoji: '🚤', done: true, order: 4},
    {text: 'In Wilhelmshaven mit einem Segelschiff fahren', emoji: '⛵', done: true, order: 6},
    {text: 'Einem Escape-Room entkommen', emoji: '🗝️', done: true, order: 7},
    {text: 'Bei einer Halloween-Kostüm-Party den ersten Preis gewinnen!', emoji: '🎃', done: true, order: 10},
    {text: 'Ein neues Buch anfangen', emoji: '📖', done: true, order: 13},
    {text: 'An einem Ort in deiner Stadt Müll aufräumen', emoji: '🛢️', done: true, order: 16},
    {text: 'In einem syrischen Restaurant essen gehen', emoji: '🧆', done: true, order: 17},
    {text: 'Ein Bild fürs eigene Zuhause malen', emoji: '🖼️', done: true, order: 21},
    {text: 'Bei einer Pub-Quiznacht mitmachen', emoji: '🍺️', done: true, order: 30},
    {text: 'Makremee machen', emoji: '🧵', done: true, order: 37},
    {text: 'Papier selber machen', emoji: '📝', done: true, order: 38},
    {text: 'Milo begrüßen', emoji: '🐶❤️', done: true, order: 41},
    {text: 'Eine Zigarre rauchen', emoji: '🚬', done: true, order: 44},
    {text: 'Shuffleboard spielen', emoji: '🥌️', done: true, order: 45},
    {text: 'Unseren Jahrestag feiern!', emoji: '❤️', done: true, order: 53},
    {text: 'Bei einer Überraschungsparty mitmachen', emoji: '🎉', done: true, order: 55},
    {text: 'Unseren neuen Van anmelden', emoji: '🚐❤️', done: true, order: 49},
    {text: 'Unser erstes Date wiederholen', emoji: '🍦', done: true, order: 57},
    {text: 'Etwas gemeinnütziges tun', emoji: '🍲', order: 18, done: true},
    {text: 'Mit unserem Van nach Italien reisen', emoji: '🚐', done: true, order: 60},
    {text: 'Origami falten', emoji: '🐭', order: 39, done: true},
    {text: 'Gin selber machen', emoji: '🍸', order: 48, done: true},
    {text: 'Saunieren', emoji: '🧖‍', order: 64, done: true},
    {text: 'Ein Musical besuchen', emoji: '🎶', order: 67, done: true},
    {text: 'In einer heißen Quelle baden', emoji: '♨️', order: 24, done: true},
    {text: 'Zu einem Feld fahren und einen Blumenstrauß binden', emoji: '💐', order: 56, done: true},
    {text: 'Neue Restaurants ausprobieren', emoji: '🍢', order: 59, done: true}, // 40
    {text: 'Gemeinsam dasselbe Buch lesen', emoji: '📖', order: 73, done: true},
    {text: 'Mit unserem Van eine Europatour machen', emoji: '🚐', order: 77, done: true},
    {text: 'Silvester mit Milo verbringen', emoji: '🎇', order: 70, done: true},
    // TO DO
    {text: 'Bei einem Craftbeer-Tasting mitmachen', emoji: '🍺', order: 8},
    {text: 'Ein Kinderbild nachstellen', emoji: '🖼️', order: 5},
    {text: 'Anfangen ein Instrument zu lernen', emoji: '🎸', order: 12},
    {text: 'Einen Tanzkurs besuchen', emoji: '💃🕺', order: 20},
    {text: 'Bei einem Dinner im Dunkeln mitmachen', emoji: '◼️', order: 22},
    {text: 'Eine Schlittenfahrt im Schnee machen', emoji: '🛷', order: 23},
    {text: 'Die Polarlichter sehen', emoji: '🦄', order: 25},
    {text: 'Einen Töpferkurs besuchen', emoji: '🍯', order: 26},
    {text: 'Bouldern gehen', emoji: '🧗', order: 31},
    {text: 'Auf einem Kamel reiten', emoji: '🐫', order: 32},
    {text: 'Auf einer Vespa durch Italien fahren', emoji: '🛵', order: 33},
    {text: 'Zorbing', emoji: '🎱', order: 34},
    {text: 'Ein Kartenhaus bauen', emoji: '🃏', order: 36},
    {text: 'Blumen pressen', emoji: '🍀', order: 40},
    {text: 'Ein Mandala malen', emoji: '🖍️', order: 42},
    {text: 'Einen Handabdruck in feuchtem Zement hinterlassen', emoji: '🖐', order: 46},
    {text: 'Zu einem Schiffswrack tauchen', emoji: '🚢', order: 50},
    {
        text: '<a href="https://www.indoor-skydiving.com/UI/Booking/bookPackage.aspx?lang=1&type=30">Indoor Skydiven</a>',
        emoji: '🪂',
        order: 51
    },
    {text: 'Einen Vulkan besteigen', emoji: '🌋', order: 52},
    {text: 'Schlittschuhlaufen', emoji: '⛸️', order: 58},
    {text: 'Kart fahren', emoji: '🏎️', order: 61},
    {text: 'Einen Tauchkurs buchen', emoji: '🤿', order: 62},
    {text: 'Eine Pyjama-Party veranstalten', emoji: '🍀', order: 63},
    {text: 'Einen Kochkurs belegen', emoji: '🧑🏻‍🍳', order: 65},
    {text: 'Floating', emoji: '💧', order: 66},
    {text: 'Auf einen Eisberg klettern', emoji: '🧊', order: 68},
    {text: 'Als reich ausgeben und die teuerste Immobilie der Stadt besichtigen', emoji: '💰', order: 69},
    {text: 'Eine Molekularküche besuchen', emoji: '⚛️', order: 70}, // würde sie machen aber findet sie lala
    {text: 'Schnaps selber brennen', emoji: '🍷', order: 71},
    {text: 'Einen Braukurs besuchen', emoji: '🍺', order: 72},
    {text: 'Bobfahren', emoji: '🧊', order: 74},
    {text: 'Reiten', emoji: '🏇', order: 75}, // würde sie machen aber findet sie lala
    {text: 'In einer Cocktailbar Drinks durchprobieren', emoji: '🍹', order: 76},
    {text: 'Einen Tesla probefahren', emoji: '🚘', order: 78}, // würde sie machen aber findet sie lala
    {text: 'Ein Schießtraining besuchen', emoji: '🔫', order: 79},
    {text: 'Einen Pralinenkurs besuchen', emoji: '🍫', order: 80},
    {text: 'Bogenschießen gehen', emoji: '🏹', order: 81},
    {text: 'GOP Varieté-Theater besuchen', emoji: '🎭', order: 82},
    {text: 'Rafting oder Canyoning betreiben', emoji: '⛰️', order: 83},
    {text: 'Eine Quad-Tour machen', emoji: '🏍️', order: 84},
    {text: 'Falkner für einen Tag sein', emoji: '🦅', order: 85},
    {text: 'Einen Hochseilgarten besuchen', emoji: '🪢', order: 86},
    {text: 'Paintball spielen', emoji: '🎨', order: 87},
];
