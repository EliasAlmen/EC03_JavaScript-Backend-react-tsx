import { createContext } from "react";
import { IProduct } from "../models/ItemPropArrayModel";

export const ProductContext = createContext<IProduct[] | null>(null)
export const FeaturedContext = createContext<IProduct[] | null>(null)
export const FlashsaleContext = createContext<IProduct[] | null>(null)
export const RankingContext = createContext<IProduct[] | null>(null)
export const RelatedContext = createContext<IProduct[] | null>(null)
