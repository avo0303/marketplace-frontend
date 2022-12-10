export interface ProductCard {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    products: Product[];
    category: string;
    store: Store;
}

export interface Product {
    id: string;
    name: string;
    discount: number;
    actualPrice: number;
    images: ProductImage[];
    attributes: Map<string, string>;
    discountedPrice: number;
}

export interface Store {
    id: string;
    name: string;
    description: string;
}

export interface ProductImage {
    id: string;
    url: string;
}

export interface ProductCardPage {
    content: ProductCard[];
}
