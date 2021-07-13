import {Item} from './item';
import {FIX_ITEMS} from "./fix-items";

/**
 * @description
 * All Items that are either in the future and and can thous be reordered, replaced or removed are contained in this array.
 * All Fixed items are prepended.
 */
export const items: Item[] = [
    ...FIX_ITEMS,
    // 28
    {text: 'Gin selber machen', emoji: '🍸'},
    // 29
    {text: 'Zu einem Schiffswrack tauchen', emoji: '🚢'},
    // 30
    {
        text: '<a href="https://www.indoor-skydiving.com/UI/Booking/bookPackage.aspx?lang=1&type=30">Indoor Skydiven</a>',
        emoji: '🪂'
    },
    // 31
    {text: 'Einen Vulkan besteigen', emoji: '🌋'},
    // 32
    {text: 'Auf einen Eisberg klettern', emoji: '🧊'},
    // 33
    {
        text: '<a href="https://urlaub.nuernberger-land.de/land-natur/landerlebnisse/imker-fuer-einen-tag.html">Imker für einen Tag</a>',
        emoji: '🐝'
    },//findet sie so lala
    // 34
    {text: 'Professionelles Gesangstraining buchen', emoji: '🎶'},
    // 35
    {text: 'Eine Englischsprachschule besuchen', emoji: '🇬🇧'},
    // 36
    {text: 'Rafting oder Canyoning betreiben', emoji: '⛰️'},
    // 37
    {text: 'Einen Van ausbauen und mit ihm reisen', emoji: '🚐'},
];
