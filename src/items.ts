import {Item} from './item';
import {FIX_ITEMS} from "./fix-items";

/**
 * @description
 * All Items that are either in the future and can thous be reordered, replaced or removed.
 * All Fixed items are prepended.
 *
 * The comments above the items describe the calendar week for easier overview.
 *
 * Items with the ⚠️ Emoji are planned for the following week. The Calendar Week matters for this items!
 */
export const items: Item[] = [
    ...FIX_ITEMS,
    // 49
    {text: 'Ein Musical besuchen', emoji: '🎶'},
    // 50
    {text: 'Auf einen Eisberg klettern', emoji: '🧊'},
    // 51
    {text: 'Bobfahren', emoji: '🧊'},
    // 52 ⚠️
    {text: 'Silvester mit Milo verbringen', emoji: '🎇'},
    // 1
    {text: 'Eine Molekularküche besuchen', emoji: '⚛️'}, // würde sie machen aber findet sie lala
    // 2
    {text: 'Schnaps selber brennen', emoji: '🍷'},
    // 3
    {text: 'Einen Braukurs besuchen', emoji: '🍺'},
    // 4
    {text: 'Gemeinsam dasselbe Buch lesen', emoji: '📖'},
    // 5
    {text: 'Als reich ausgeben und die teuerste Immobilie der Stadt besichtigen', emoji: '💰'},
    // 6
    {text: 'Reiten', emoji: '🏇'}, // würde sie machen aber findet sie lala
    // 7
    {text: 'In einer Cocktailbar Drinks durchprobieren', emoji: '🍹'},
    // 8
    {text: 'Einen Tesla probefahren', emoji: '🚘'}, // würde sie machen aber findet sie lala
    // 9
    {text: 'Ein Schießtraining besuchen', emoji: '🔫'},
    // 10
    {text: 'Einen Pralinenkurs besuchen', emoji: '🍫'},
    // 11
    {text: 'Bogenschießen gehen', emoji: '🏹'},
    // 12
    {text: 'GOP Varieté-Theater besuchen', emoji: '🎭'},
    // 13
    {text: 'Rafting oder Canyoning betreiben', emoji: '⛰️'},
    // 14 ⚠️⁉️ -> hier müssen wir mal schauen wann das ist!
    {text: 'Mit unserem Van eine Europatour machen', emoji: '🚐'},
    // unordered!!!!
    {text: 'Eine Quad-Tour machen', emoji: '🏍️'},
    {text: 'Falkner für einen Tag sein', emoji: '🦅'},
    {text: 'Einen Hochseilgarten besuchen', emoji: '🪢'},
    {text: 'Paintball spielen', emoji: '🎨'},
    {text: 'Flyboarden', emoji: '💧'},
    {text: 'Windsurfing', emoji: '🏄'},
    {text: 'Höhlentrekking', emoji: '🥾'},
    {text: 'Ein Ritteressen besuchen', emoji: '🛡️'},
    {text: 'Mit Milo nach Sankt Peter-Ording fahren', emoji: '🐶'},
];
