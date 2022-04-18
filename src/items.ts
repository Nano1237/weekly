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
    {text: 'Einen Hochseilgarten besuchen', emoji: '🪢'},
    {text: 'Paintball spielen', emoji: '🎨'},
    {text: 'Flyboarden', emoji: '💧'},
    {text: 'Windsurfing', emoji: '🏄'},
    {text: 'Höhlentrekking', emoji: '🥾'},
    {text: 'Ein Ritteressen besuchen', emoji: '🛡️'},
    {text: 'Mit Milo nach Sankt Peter-Ording fahren', emoji: '🐶'},
];
