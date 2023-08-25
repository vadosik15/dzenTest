import { Order } from "../../types/Order";

export interface action { type: string, payLoad: Order }

export const DELEATE_ORDER = (order: Order) => {
    return { type: "DELEATE_ORDER", payLoad: order};
}

export const decrementCount = (dec: Order) => {
    return { type: "decrement", payLoad: dec };
}