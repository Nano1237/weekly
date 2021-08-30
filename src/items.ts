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
    // 35
    {text: 'Rafting oder Canyoning betreiben', emoji: '⛰️'},
    // 35
    {text: 'Professionelles Gesangstraining besuchen', emoji: '🎶'},
    // 34
    {text: 'Auf einen Eisberg klettern', emoji: '🧊'},
    // 39
    {text: 'Mit unserem Van verreisen', emoji: '🚐'},
];
