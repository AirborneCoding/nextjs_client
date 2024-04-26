interface ArticleAttributes {
    id?: number;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    image: {
        data: ImageData;
    };
}