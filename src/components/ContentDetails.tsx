import {useStore} from '@nanostores/react'
import { detailAnime } from "@/nanostore";
import {useState, useEffect} from 'react'
import ButtonAddCollection from './ButtonAddCollection';
import {Content, H2, Scores, List, Description} from '../styles/styles'
import type { DetailAnimeType } from '@/pages/api/types';

const ContentDetails = () => {
    const list: DetailAnimeType[] = useStore(detailAnime)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [genres, setGenres] = useState<string[]>([])
    const [scores, setScores] = useState<string>('')

    useEffect(() => {
        setTitle(list.title.english)
        setDescription(list.description)
        setGenres(list.genres)
        setScores(list.averageScore)
    },[])
    
    return(
        <>
        <Content>
            <H2>
                {title} &nbsp; &nbsp; 
                <Scores>{scores}</Scores>
            </H2>
            {
                genres.map((value, index) => {
                    return(
                        <List key={index}>{value} &nbsp;&nbsp;</List>
                    )
                })
            }
            <ButtonAddCollection />
            <Description>{description}</Description>
        </Content>
        </>
    )
}

export default ContentDetails;