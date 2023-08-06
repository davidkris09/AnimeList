import { 
    Row,  
    Card, 
    Column,
    CardContent,
    CardTitle,
    Image,
} 
from "@/styles/styles";
import {useEffect, useState} from "react";
import { getAnimeList } from "@/pages/api/fetchData";
import { changeDetailDisplay } from "@/nanostore";
import type { DetailAnimeType } from "@/pages/api/types";

interface ListAnime {
    data: {
        Page: {
            media: DetailAnimeType
        }
    }
}

const CardList = () => {
    const [list, setList] = useState<ListAnime[]>([])
    
    function getDataFromFetchData() {
        getAnimeList().then((res) => {
            setList(res)
        })
    }

    const handleDetail = (anime: DetailAnimeType) => {
        changeDetailDisplay({anime})
        window.location.href = `/${anime.title.english}`
    }

    useEffect(() => {
        getDataFromFetchData();
    }, []);
    return (
        <>
            <Row>
                {list.length === 0 ? (
                    <p>Loading...</p>
                    ) : (
                        list.data.Page.media.map((anime,index) => {
                                return (
                                    <Column key={index}>
                                        <Card onClick={() => handleDetail(anime)}>
                                            <Image src={anime.coverImage.large} alt={anime.title.english} />
                                            <CardContent>
                                                <CardTitle>{anime.title.english}</CardTitle>
                                            </CardContent>
                                        </Card>
                                    </Column>
                                )
                        })
                    )
                }
            </Row>
        </>
    );
}

export default CardList;