(function () {


    function weeksBetween(d1, d2) {
        return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
    }

    const weekNow = weeksBetween(new Date('2020-08-25'), new Date());

    const items = [
        // 35
        'Nach Polen 🇵🇱 fahren und dort mit einem VW Caddy Maxi Campen 🏕️',
        // 36
        '<a href="http://aldar.de/hannover/" target="_blank">In einem syrischen Restaurant essen gehen 🧆</a>',
        // 37
        'Eine Sache machen, die „nur ein Kind“ machen würde (z. B. Pfützenspringen 🌧️, Scheibe Wurst an der Theke erfragen 🥓 oder mit Murmeln spielen 🔴)',
        // 38
        'Einen Handabdruck in feuchtem Zement hinterlassen 🖐️',
        // 39
        '<a href="https://www.tv-plus.de/bingo-tickets/" target="_blank" title="Weil wir solche Rentner sind">Bingo spielen und laut Bingo rufen 🎲</a>',
        // 40
        'amerika', // @todo: was für sie alleine suchen
        // 41
        'amerika', // @todo: was für sie alleine suchen
        // 42
        'amerika', // @todo: was für sie alleine suchen
        // 43
        'amerika', // @todo: was für sie alleine suchen
        // 44
        'amerika', // @todo: was für sie alleine suchen
        // 45
        'An einem Ort in deiner Stadt Müll aufräumen 🛢️',
        // 46
        'Ein Lied im Radio wünschen 📻',
        // 47
        'Einen Telefonstreich machen 📞',
        // 48
        'Ein 5000-Teile Puzzle schaffen 🧩',
        // 49
        'Insekten essen 🐛',
        // 50
        'Bei einem Dinner im Dunkeln mitmachen ◼️',
        // 51
        'Deinen Geburtstag richtig feiern! 🎁',
        // 52
        'Etwas gemeinnütziges tun 🍲',
        // 53
        'Ein Instrument lernen 🎸',

        // KW 1 kommt jetzt !!
        'eine Schlittenfahrt im Schnee 🛷',
        // 2
        'Einen Standard-Tanzkurs besuchen 💃🕺',
        // 3
        'In einer heißen Quelle baden ♨️',
        // 4
        'Polarlichter sehen 🦄',
        // 5
        'Ein Bild fürs eigene Zuhause malen 🖼️',
        // 6
        'Einen Töpferkurs besuchen 🍯',
        // 7
        'Eine Kerze selbermachen 🕯️',

        'Zu einen Schiffswrack tauchen 🚢',
        'Auf einem Kamel reiten 🐫',
        'In einen Indoor Trampolin-Park gehen 🎫',
        'Zorbing 🎱',

        'Auf einer Vespa durch Italien fahren 🛵',
        'Eine Zeitkapsel vergraben ⏳',

        'Einem Escape-Room entkommen 🗝️',
        'Bei einer Pub-Quiznacht mitmachen 🍺️',
        'Bouldern gehen 🧗',

        'Ein Lied in einer Karaoke-Bar singen 🎤',
        'Einen Vulkan besteigen 🌋',
        'Auf einen Eisberg klettern 🧊',
    ]

    function getCurrentElement() {
        const itemCount = items.length - 1;
        if (weekNow <= 0) {
            return items[0]
        } else if (weekNow >= itemCount) {
            return items[itemCount];
        }
        return items[weekNow];
    }

    const currentElement = getCurrentElement();

    document.querySelector('[data-kw]').innerHTML = `Woche ${weekNow <= 0 ? 0 : weekNow}`;
    document.querySelector('[data-text]').innerHTML = currentElement;
})();