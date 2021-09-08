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
    // 37
    {text: 'Zu einem Feld fahren und einen Blumenstrauß binden', emoji: '💐'},
    // 38
    {text: 'Unser erste Date wiederholen', emoji: '🍦'},
    // 39 ⚠️
    {text: 'Den 30ten Geburtstag von Meik feiern', emoji: '🍾️'},
    // 40
    {text: 'Schlittschuhlaufen', emoji: '⛸️'},
    // 41 ⚠️
    {text: 'Mit unserem Van nach Kroatien reisen', emoji: '🚐'},
    // 42
    {text: 'Einen Tauchkurs buchen', emoji: '🤿'},
    // 43
    {text: 'Professionelles Gesangstraining besuchen', emoji: '🎶'},
    // 44
    {text: 'Kart fahren', emoji: '🏎️'},
    // 45
    {text: 'Neue Restaurants auszuprobieren', emoji: '🍢'},
    // 46
    {text: 'Eine Pyjama-Party veranstalten', emoji: '🍀'},
    // 47
    {text: 'Saunieren', emoji: '🧖‍'},
    // 48
    {text: 'Einen Kochkurs belegen', emoji: '🧑🏻‍🍳'},
    // 49
    {text: 'Floating', emoji: '💧'},
    // 50
    {text: 'Auf einen Eisberg klettern', emoji: '🧊'},
    // 51 ⚠️
    {text: 'Silvester mit Milo verbringen', emoji: '🎇'},
    // 1
    {text: 'Eine Molekularküche besuchen', emoji: '⚛️'}, // würde sie machen aber findet sie lala
    // 2
    {text: 'Schnaps selber brennen', emoji: '🍷'},
    // 3
    {text: 'Ein Musical besuchen', emoji: '🎶'},
    // 4
    {text: 'Bobfahren', emoji: '🧊'},
    // 5
    {text: 'Einen Braukurs besuchen', emoji: '🍺'},
    // 6
    {text: 'Gemeinsam dasselbe Buch lesen', emoji: '📖'},
    // 7
    {text: 'Als reich ausgeben und die teuerste Immobilie der Stadt besichtigen', emoji: '💰'},
    // 8
    {text: 'Reiten', emoji: '🏇'}, // würde sie machen aber findet sie lala
    // 9
    {text: 'In einer Cocktailbar Drinks durchprobieren', emoji: '🍹'},
    // 10
    {text: 'Einen Tesla probefahren', emoji: '🚘'}, // würde sie machen aber findet sie lala
    // 11
    {text: 'Ein Schießtraining besuchen', emoji: '🔫'},
    // 12
    {text: 'Einen Pralinenkurs besuchen', emoji: '🍫'},
    // 13
    {text: 'Bogenschießen gehen', emoji: '🏹'},
    // 14
    {text: 'GOP Varieté-Theater besuchen', emoji: '🎭'},
    // 15
    {text: 'Rafting oder Canyoning betreiben', emoji: '⛰️'},
    // 16 ⚠️⁉️ -> hier müssen wir mal schauen wann das ist!
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
];
