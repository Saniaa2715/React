// import type { JSX } from "react/jsx-runtime";

export interface Products {
    // map(arg0: (c: any) => JSX.Element): import("react").ReactNode;
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string
}

export interface CartData {
    id: number;
    products: Products[];
}
