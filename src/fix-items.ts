import {Item} from "./item";

/**
 * @description
 * All items that are already shown and cant be removed, replaced or reordered.
 */
export const FIX_ITEMS: Item[] = [
    {text: 'Nach Rügen fahren und dort mit einem VW Caddy Maxi Campen', emoji: '🏕️', done: true},
    {
        text: 'Eine Sache machen, die „nur ein Kind“ machen würde (z. B. Pfützenspringen, Scheibe Wurst an der Theke erfragen oder mit Murmeln spielen)',
        emoji: '🧒',
        done: true
    },
    {
        text: 'Mithilfe von <a href="https://wwwdont.komoot.de/" target="_blank">Komoot</a> eine Tour machen',
        emoji: '🥾',
        done: true
    },
    {text: 'Urlaub auf einem Hausboot machen', emoji: '🚤', done: true},
    {text: 'Ein Kinderbild nachstellen', emoji: '🖼️'},
    {
        text: 'In Wilhelmshaven mit einem Segelschiff fahren',
        emoji: '⛵',
        done: true
    },
    {text: 'Einem Escape-Room entkommen', emoji: '🗝️', done: true},
    {text: 'Bei einem Craftbeer-Tasting mitmachen', emoji: '🍺'},
    {text: 'Einen Telefonstreich machen', emoji: '📞'},
    {text: 'Bei einer Halloween-Kostüm-Party den ersten Preis gewinnen!', emoji: '🎃', done: true},
    {text: 'Ein Lied im Radio wünschen', emoji: '📻'},
    {text: 'Anfangen ein Instrument zu lernen', emoji: '🎸'},
    {text: 'Ein neues Buch anfangen', emoji: '📖', done: true},
    {
        text: '<a href="https://www.tv-plus.de/bingo-tickets/" target="_blank">Bingo spielen und laut Bingo rufen</a>',
        emoji: '🎲',
        dont: true
    },
    {text: 'Ein 5000-Teile Puzzle schaffen', emoji: '🧩', dont: true},
    {text: 'An einem Ort in deiner Stadt Müll aufräumen', emoji: '🛢️', done: true},
    {
        text: '<a href="http://aldar.de/hannover/" target="_blank">In einem syrischen Restaurant essen gehen</a>',
        emoji: '🎁🧆🎁'
    },
    {text: 'Etwas gemeinnütziges tun', emoji: '🍲'},
    {text: 'Insekten essen', emoji: '🐛', dont: true},
    {text: 'Einen Tanzkurs besuchen', emoji: '💃🕺'},
    {text: 'Ein Bild fürs eigene Zuhause malen', emoji: '🖼️', done: true},
    {text: 'Bei einem Dinner im Dunkeln mitmachen', emoji: '◼️'},
    {text: 'eine Schlittenfahrt im Schnee machen', emoji: '🛷'},
    {text: 'In einer heißen Quelle baden', emoji: '♨️'},
    {text: 'Die Polarlichter sehen', emoji: '🦄'},
    {text: 'Einen Töpferkurs besuchen', emoji: '🍯'},
    {text: 'Eine Kerze selbermachen', emoji: '🕯️'},
    {text: 'Einen Dankesbrief an eine Firma schreiben', emoji: '', dont: true},
    {text: 'In einen Indoor Trampolin-Park gehen', emoji: '🎫'},
    {text: 'Bei einer Pub-Quiznacht mitmachen', emoji: '🍺️', done: true},
    {text: 'Bouldern gehen', emoji: '🧗'},
    {text: 'Auf einem Kamel reiten', emoji: '🐫'},
    {text: 'Auf einer Vespa durch Italien fahren', emoji: '🛵'},
    {text: 'Zorbing', emoji: '🎱'},
    {text: 'Eine Zeitkapsel vergraben', emoji: '⏳'},
    {text: 'Ein Kartenhaus bauen', emoji: '🃏'},
    {text: 'Makremee machen', emoji: '🧵', done: true},
    {text: 'Papier selber machen', emoji: '📝', done: true},
    {text: 'Origami falten', emoji: '🐭'},
    {text: 'Blumen pressen', emoji: '🍀'},
    {text: 'Milo begrüßen', emoji: '🐶❤️', done: true},
    {text: 'Mandala malen', emoji: '🖍️'},
    {text: 'Einen Brief an ein:e Freund:in schreiben', emoji: '💌'},
    {text: 'Eine Zigarre rauchen', emoji: '🚬', done: true},
    {text: 'Shuffleboard spielen', emoji: '🥌️'},
    {text: 'Einen Handabdruck in feuchtem Zement hinterlassen️', emoji: '🖐'},
    {text: 'Jemanden mit dem gleichen Namen kontaktieren', emoji: '👭'},
    {text: 'Gin selber machen', emoji: '🍸'},
    {text: 'Unseren neuen Van anmelden', emoji: '🚐❤️'},
    {text: 'Zu einem Schiffswrack tauchen', emoji: '🚢'},
    {
        text: '<a href="https://www.indoor-skydiving.com/UI/Booking/bookPackage.aspx?lang=1&type=30">Indoor Skydiven</a>',
        emoji: '🪂'
    },
    {text: 'Einen Vulkan besteigen', emoji: '🌋'},
    {text: 'Unseren Jahrestag feiern!', emoji: '❤️'},
];
