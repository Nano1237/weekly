import {Item} from './item';
import {FIX_ITEMS} from "./fix-items";

/**
 * @description
 * All Items that are either in the future and can thous be reordered, replaced or removed.
 * All Fixed items are prepended.
 *
 * The comments above the items describe the calendar week for easier overview.
 */
export const items: Item[] = [
    ...FIX_ITEMS,
    // 29
    {text: 'Unseren neuen Van anmelden', emoji: '🚐❤️'},
    // 30
    {text: 'Zu einem Schiffswrack tauchen', emoji: '🚢'},
    // 31
    {
        text: '<a href="https://www.indoor-skydiving.com/UI/Booking/bookPackage.aspx?lang=1&type=30">Indoor Skydiven</a>',
        emoji: '🪂'
    },
    // 32
    {text: 'Einen Vulkan besteigen', emoji: '🌋'},
    // 33
    {text: 'Auf einen Eisberg klettern', emoji: '🧊'},
    // 34
    {
        text: '<a href="https://urlaub.nuernberger-land.de/land-natur/landerlebnisse/imker-fuer-einen-tag.html">Imker für einen Tag</a>',
        emoji: '🐝'
    },//findet sie so lala
    // 35
    {text: 'Professionelles Gesangstraining buchen', emoji: '🎶'},
    // 36
    {text: 'Eine Englischsprachschule besuchen', emoji: '🇬🇧'},
    // 37
    {text: 'Rafting oder Canyoning betreiben', emoji: '⛰️'},
    // 38
    {text: 'Einen Van ausbauen und mit ihm reisen', emoji: '🚐'},
];
