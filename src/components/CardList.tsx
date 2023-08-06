import { 
    Row,  
    Card, 
    Column,
    CardContent,
    CardTitle,
    Image,
    ButtonLoad
} 
from "@/styles/styles";
import {useEffect, useState} from "react";
import { getAnimeList } from "@/pages/data/fetchData";
import { changeDetailDisplay } from "@/pages/data/nanostore";
import type { DetailAnimeType } from "@/pages/data/types";

interface ListAnime {
    data: {
        Page: {
            media: DetailAnimeType
        }
    }
}

const CardList = () => {
    const [list, setList] = useState<ListAnime[]>([])
    const [load, setLoad] = useState(10)

    const loadMore = () => {
        setLoad(prevLoad => prevLoad + 5)
    }
     
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
                        list.data.Page.media.slice(0, load).map((anime,index) => {
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
            <div style={{width: '100%', justifyContent: 'center', alignContent: 'center', display: 'flex', padding: '2% 0px 0px 0px'}}>
                <ButtonLoad onClick={loadMore}>Load More...</ButtonLoad>
            </div>
        </>
    );
}

export default CardList;