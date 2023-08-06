interface Variable {
    id: Number
}

export async function getAnimeList (): Promise<any[]> {
    var query = `
        query ($page: Int, $perPage: Int, $search: String) {
            Page(page: $page, perPage: $perPage) {
                pageInfo {
                    total
                    perPage
                }
                media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                    type
                    genres
                    averageScore
                    description
                    bannerImage
                    coverImage {
                        extraLarge
                        large
                        medium
                        color
                    }
                }
            }
        }
    `;

    return await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: ''
        })
    }).then(response => response.json())
    .catch(error => {
        throw new Error('Error fetching data from the API');
    })
}