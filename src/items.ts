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
    // 1
    {text: 'Eine Molekularküche besuchen', emoji: '⚛️'}, // würde sie machen aber findet sie lala
    // 2
    {text: 'Schnaps selber brennen', emoji: '🍷'},
    // 3
    {text: 'Einen Braukurs besuchen', emoji: '🍺'},
    // 4
    {text: 'Gemeinsam dasselbe Buch lesen', emoji: '📖'},
    // 5
    {text: 'Bobfahren', emoji: '🧊'},
    // 6
    {text: 'Reiten', emoji: '🏇'}, // würde sie machen aber findet sie lala
    // 7
    {text: 'In einer Cocktailbar Drinks durchprobieren', emoji: '🍹'},
    // 8 ⚠️⁉️ -> hier müssen wir mal schauen wann das ist!
    {text: 'Mit unserem Van eine Europatour machen', emoji: '🚐'},
    // 9
    {text: 'Einen Tesla probefahren', emoji: '🚘'}, // würde sie machen aber findet sie lala
    // 10
    {text: 'Ein Schießtraining besuchen', emoji: '🔫'},
    // 11
    {text: 'Einen Pralinenkurs besuchen', emoji: '🍫'},
    // 12
    {text: 'Bogenschießen gehen', emoji: '🏹'},
    // 13
    {text: 'GOP Varieté-Theater besuchen', emoji: '🎭'},
    // 14
    {text: 'Rafting oder Canyoning betreiben', emoji: '⛰️'},
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
