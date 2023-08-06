export interface DetailAnimeType {
    id: number;
    title: {
        english: string;
    };
    description: string;
    genres: string;
    averageScore: string;
    coverImage: {
        large: string,
        medium: string,
        small: string,
        extraLarge: string,
    }
}

export interface Collection {
    name: string,
    list: string[]
}