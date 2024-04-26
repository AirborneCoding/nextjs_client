interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
}

interface ImageData {
    id: number;
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            large: ImageFormat;
            small: ImageFormat;
            medium: ImageFormat;
            thumbnail: ImageFormat;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: {
            public_id: string;
            resource_type: string;
        };
        createdAt: string;
        updatedAt: string;
    };
}

// ****

interface DataItem {
    id: number;
    attributes: ArticleAttributes;
}

// ****

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface Meta {
    pagination: Pagination;
}

interface Results {
    data?: DataItem[];
    meta?: Meta;
}
interface SingleResults {
    data?: DataItem;
    meta?: Meta;
}
