import {useStore} from '@nanostores/react'
import { detailAnime } from "@/pages/data/nanostore";
import {useState, useEffect} from 'react'
import {DetailCoverImage} from '../styles/styles'
import type { DetailAnimeType } from '@/pages/data/types';

const Banner = () => {
    const list: DetailAnimeType[] = useStore(detailAnime)
    const [image, setImage] = useState<string>('')

    useEffect(() => {
        setImage(list.coverImage.extraLarge)
    },[])
    
    return(
        <div>
            <DetailCoverImage src={image} alt=''/>
        </div>
    )
}

export default Banner;