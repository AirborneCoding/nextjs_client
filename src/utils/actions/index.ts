
type GetPostsHomeActionTypes = {
    locale?: string;
    limit?: number;
};

type GetPostsActionTypes = {
    search?: string;
    locale?: string;
    page?: number;
};


type GetPublicationsActionTypes = {
    search?: string;
    locale?: string;
    category?: string;
    limit?: number
};

// fetch all articles
export const fetchAllArticles = async ({ locale, search, page }: GetPostsActionTypes) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?filters[$or][0][title][$contains]=${search}&filters[$or][1][content][$contains]=${search}&sort=createdAt:desc&locale=${locale}&populate=image&pagination[pageSize]=12&pagination[page]=${page}`)

        const data: Results = await res.json()

        return data
    } catch (error) {
        console.log(error);
        return null
    }
}

// fetch single article
export const fetchSingleArticle = async (slug: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles/${slug}`)
        const data: SingleResults = await res.json()
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}

// fetch home articles
export const fetchHomeArticles = async ({ locale, limit }: GetPostsHomeActionTypes) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate[0]=image&locale[0]=${locale}&pagination[pageSize]=${limit}&sort=createdAt:desc&fields[0]=title&fields[1]=slug`)
        const data: Results = await res.json()
        return data

    } catch (error) {
        console.error("Error fetching articles:", error);
        return null;
    }
}

// ***************

// fetch all articles
export const fetchPublications = async ({ locale, search, category, limit }: GetPublicationsActionTypes) => {
    try {
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const res = await fetch(`
        ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/versions?locale=${locale}&filters[$or][0][title][$contains]=${search}&filters[$or][1][description][$contains]=${search}&sort=createdAt:desc&populate=*&filters[category][name][$contains]=${category}&pagination[page]=${limit}&pagination[pageSize]=8`)
        // &pagination[page]=${limit}&pagination[pageSize]=2
        const data = await res.json()
        return data

    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
}

// home publications
export const fetchHomePublications = async ({ locale, search, category }: GetPublicationsActionTypes) => {
    try {
        const res = await fetch(`
        ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/versions?locale=${locale}&filters[$or][0][title][$contains]=${search}&filters[$or][1][description][$contains]=${search}&sort=createdAt:desc&populate=*&filters[category][name][$contains]=${category}`)
        // &pagination[page]=${limit}&pagination[pageSize]=2
        const data = await res.json()
        return data

    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
}

// ***********************

// search all 
export const fetchAllWebsite = async ({ locale, search, page }: GetPostsActionTypes) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/fuzzy-search/search?query=${search}&locale=${locale}&pagination[articles][pageSize]=8&pagination[articles][page]=${page}&pagination[versions][pageSize]=9&pagination[versions][page]=${page}&populate[articles]=image&populate[versions]=image&populate[versions]=category`)

        const data = res.json()
        return data

    } catch (error) {
        console.log(error);
        return null
    }
}

// ***********************

// videos
export const fetchVideos = async ({ locale, page }: GetPostsActionTypes) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/videos?sort=createdAt:desc&locale=${locale}&populate=video&pagination[pageSize]=12&pagination[page]=${page}`)

        const data: Results = await res.json()

        return data
    } catch (error) {
        console.log(error);
        return null
    }
}

// parteners
export const fetchPartners = async ({ locale }: GetPostsActionTypes) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/partners?sort=createdAt:desc&locale=${locale}&populate=image`, { next: { revalidate: 60 } })

        const data: Results = await res.json()

        return data
    } catch (error) {
        console.log(error);
        return null
    }
}