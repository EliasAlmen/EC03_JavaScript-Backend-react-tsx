import { createContext } from "react";
import { IFetch } from "../interfaces/IFetch";

export const ProductContext = createContext<IFetch[] | null>(null)
export const FeaturedContext = createContext<IFetch[] | null>(null)
export const FlashsaleContext = createContext<IFetch[] | null>(null)
export const RankingContext = createContext<IFetch[] | null>(null)
export const RelatedContext = createContext<IFetch[] | null>(null)
