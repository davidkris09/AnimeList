import {useState} from 'react'
import {ContainerModal} from '@/styles/styles'
import { isModalOpen, collection } from "@/nanostore";
import { useStore } from "@nanostores/react";
import { H2, ContentModal } from '@/styles/styles';
import type { Collection } from '@/pages/api/types';
import CollectionAddList from './CollectionAddList';
import FormAddNewCollection from './FormAddNewCollection';

const ModalOpenCollection = () => {
    const $isModalOpen = useStore(isModalOpen)
    
    return $isModalOpen ? 
        <ContainerModal>
            <H2 style={{textAlign: 'center'}}>Collection</H2>
            <ContentModal>
                <FormAddNewCollection />
                <CollectionAddList/>
            </ContentModal>
        </ContainerModal>
        : null

}

export default ModalOpenCollection;