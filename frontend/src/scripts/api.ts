export interface Product {
    id: number;
    title: string;
    price: number;
    category?: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

type ProductArray = Product[];

export async function getData(url: string): Promise<ProductArray | { error: unknown }> {
    try {
        const response = await fetch(url || '');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ProductArray = await response.json();
        return data;
    } catch (error: unknown) {
        console.log(`Erro: ${error}`);
        return { error };
    }
}