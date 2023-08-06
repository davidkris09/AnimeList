import { atom, computed } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'
import type { DetailAnimeType } from './types';
import type { Collection } from './types';

export const isModalOpen = atom(false)
export const isModalCollectionOpen = atom(false)

export const detailAnime = persistentAtom<DetailAnimeType[]>('list:', [], {
    decode: JSON.parse,
    encode: JSON.stringify,
});

export const collection = persistentAtom<Collection[]>('collection:', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export const animeListPerCollection = persistentAtom<Collection[]>('detail_collection:', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

// type DetailDisplay = Pick<detailType, 'id' | 'title' | 'description' | 'coverImage' | 'genres' | 'averageScore'>
export function changeDetailDisplay({anime}) {
    detailAnime.set(anime)
}

export function addCollection(list) {
    for (let i = 0; i < collection.get().length; i++) {
        const item = collection.get()[i]
        if(item.name === list.name ) {
            break;
        }
        
    }
    collection.set([...collection.get(), list])
}

export function editCollection(list) {
    collection.set([...collection.get(), list])
}

export function getAnimePerCollcetion(data) {
    animeListPerCollection.set(data)
}