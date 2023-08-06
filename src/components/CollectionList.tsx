import React, {useState, useEffect} from 'react'
import { collection, animeListPerCollection } from '@/pages/data/nanostore';
import { useStore } from '@nanostores/react';
import type { Collection } from '@/pages/data/types';
import { 
    Row,  
    Card, 
    Column,
    CardContent,
    CardTitle,
    Image,
    H1
} 
from "@/styles/styles";

export const CollectionList = () => {
    const $collection: Collection[] = useStore(animeListPerCollection)
    const [collectionList, setCollectionList] = useState<Collection[]>([])

    useEffect(() => {
        setCollectionList($collection)
    }, [])

    return (
        <>
            <div>
            {
                collectionList.map((collection,index) => {
                    if(collection.name){
                        return(
                            <>
                            <H1 key={index}>{collection.name}</H1>
                            <Row>
                                {
                                    collection.list.length === 0 ? (
                                        <p>Loading...</p>
                                    )
                                    : 
                                    (
                                        collection.list.map((item, index) => {
                                            return (
                                                <Column key={index}>
                                                    <Card>
                                                        <Image src={item.coverImage.large} alt={item.title.english} />
                                                        <CardContent>
                                                            <CardTitle>{item.title.english}</CardTitle>
                                                        </CardContent>
                                                    </Card>
                                                </Column>
                                            )
                                        })
                                    )
                                }
                            </Row>
                            </>
                        )
                    }
                })
            }
            </div>
        </>
    )
}

export default CollectionList;