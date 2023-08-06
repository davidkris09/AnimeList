import {Button, FieldAddCollection} from '@/styles/styles'
import { isModalCollectionOpen, addCollection } from "@/nanostore";
import { useStore } from "@nanostores/react";
import { collection } from '@/nanostore';
import {useEffect, useState} from "react";
import type { Collection } from '@/pages/api/types';
import Notification from './Notification';

export const FormAddNewCollection = () => {
  const $collection: Collection[] = useStore(collection)
  const [collectionInput, setCollectionInput] = useState<Collection>({
    name: '',
    list: []
  })

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollectionInput({
      name: event.target.value,
      list: []
    });
  }

  const handleAddCollection = () => {
    if(collectionInput.name === ''){
      alert('Name is empty!')
      return false;
    }

    const checkCollection = Array.from($collection)

    checkCollection.forEach(value => {
      if(value.name === collectionInput.name) {
        alert('Name already exists')
        setCollectionInput({name: '', list: []})
        return;
      }
    })

    addCollection({name: collectionInput.name, list: []})

  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <FieldAddCollection type='text' placeholder='Name Collection...' value={collectionInput.name} onChange={(e) => handleInput(e)}></FieldAddCollection>
        <Button onClick={handleAddCollection}>New</Button>
      </div>
    </>
  )
}

export default FormAddNewCollection;