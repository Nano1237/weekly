(function () {
    const weekNow = weeksBetween(new Date('2020-08-25'), new Date());
    const items = [
        // 35
        'Nach Polen fahren und dort mit einem VW Caddy Maxi Campen 🇵🇱',
        // 36
        '<a href="http://aldar.de/hannover/" target="_blank">In einem syrischen Restaurant essen gehen 🧆</a>',
        // 37
        'Eine Sache machen, die „nur ein Kind“ machen würde (z. B. Pfützenspringen 🌧️, Scheibe Wurst an der Theke erfragen 🥓 oder mit Murmeln spielen 🔴)',
        // 38
        'Einen Handabdruck in feuchtem Zement hinterlassen 🖐️',
        // 39
        '<a href="https://www.tv-plus.de/bingo-tickets/" target="_blank" title="Weil wir solche Rentner sind">Bingo spielen und laut Bingo rufen 🎲</a>',
        // 40
        'Ein Instrument lernen 🎸',
        // 41
        'Einen Telefonstreich machen 📞',
        // 42
        'Ein Lied im Radio wünschen 📻',
        // 43
        'Ein 5000-Teile Puzzle schaffen 🧩',
        // 44
        'Ein neues Buch anfangen 📖',
        // 45
        'An einem Ort in deiner Stadt Müll aufräumen 🛢️',
        // 46
        'Etwas gemeinnütziges tun 🍲',
        // 47
        'Insekten essen 🐛',
        // 48
        'Einen Standard-Tanzkurs besuchen 💃🕺',
        // 49
        'Ein Bild fürs eigene Zuhause malen 🖼️',
        // 50
        'Bei einem Dinner im Dunkeln mitmachen ◼️',
        // 51
        'Deinen Geburtstag richtig feiern! 🎁',
        // 52
        'eine Schlittenfahrt im Schnee 🛷',
        // 53
        'In einer heißen Quelle baden ♨️',
        // KW 1 kommt jetzt !!
        'Die Polarlichter sehen 🦄',
        // 2
        'Einen Töpferkurs besuchen 🍯',
        // 3
        'Eine Kerze selbermachen 🕯️',
        // 4
        'Ein Lied in einer Karaoke-Bar singen 🎤',
        // 5
        'In einen Indoor Trampolin-Park gehen 🎫',
        // 6
        'Einem Escape-Room entkommen 🗝️',
        // 7
        'Bei einer Pub-Quiznacht mitmachen 🍺️',
        // 8
        'Bouldern gehen 🧗',
        // 9
        'Auf einem Kamel reiten 🐫',
        // 10
        'Auf einer Vespa durch Italien fahren 🛵',
        // 11
        'Zorbing 🎱',
        // 12
        'Eine Zeitkapsel vergraben ⏳',
        // 13
        'Zu einen Schiffswrack tauchen 🚢',
        // 14
        '',
        // 15
        '',
        // 16
        '',
        // 17
        '',
        // 18
        'Einen Vulkan besteigen 🌋',
        // 19
        'Auf einen Eisberg klettern 🧊',
    ];

    document.querySelector('[data-kw]').innerHTML = `Woche ${weekNow <= 0 ? 0 : weekNow}`;
    document.querySelector('[data-text]').innerHTML = getCurrentElement();

    /**
     * @description
     * Returns the passed weeks between two dates
     * @param d1
     * @param d2
     * @returns {number}
     */
    function weeksBetween(d1, d2) {
        return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
    }

    /**
     * @description
     * Returns the corresponding element of the current week
     * @returns {string}
     */
    function getCurrentElement() {
        const itemCount = items.length - 1;
        if (weekNow <= 0) {
            return items[0]
        } else if (weekNow >= itemCount) {
            return items[itemCount];
        }
        return items[weekNow];
    }
})();