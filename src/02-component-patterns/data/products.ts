import { Product } from "../interfaces/interfaces";

const product1 = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffe-mug2.jpg'
}

export const products: Product[] = [product1, product2];