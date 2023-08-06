import {useState} from 'react'
import { ContentListCollectionModal, ListCollection, AddButton, LabelLink } from '@/styles/styles';
import { collection, detailAnime, editCollection, getAnimePerCollcetion } from '@/pages/data/nanostore';
import { useStore } from '@nanostores/react';
import type { Collection, DetailAnimeType } from '@/pages/data/types';

export const CollectionAddList = () => {
  const $collection: Collection[] = useStore(collection)
  const $detailAnime: DetailAnimeType[] = useStore(detailAnime)

  const handleAddAnimeToCollection = (item: Collection) => {
    if (item.name) {
      editCollection(item.list.push($detailAnime))
    } else{
      alert('')
    }
  }

  const handleLinking = (item) => {

    getAnimePerCollcetion(item)
    window.location.href = `/listpercollections`
  }

  return (
    <>
      <ContentListCollectionModal>
        {
          $collection.map((item, index) => {
            if(item.name) {
              return (
                <>
                  <ListCollection key={index}>
                    <LabelLink onClick={() => handleLinking(item)}>{item.name}</LabelLink>
                    <AddButton onClick={() => handleAddAnimeToCollection(item)}>+</AddButton>
                    {/* {
                      item.list.includes($detailAnime.title.english) ? <label style={{color: '#7FFF00'}}>added</label> :
                      <Button onClick={() => handleAddAnimeToCollection(item)}>+</Button>
                    } */}
                  </ListCollection>
                </>
              )
            } else{
              null
            }
          })
        }
      </ContentListCollectionModal>
    </>
  )
}

export default CollectionAddList;