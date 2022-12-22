import React from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { currencyFormatter } from "../utils/currencyFormatter";

interface ProductProductProp {
    price: number;
    quantity: number;
    name: string;
    imageName: string;
    category: string;
}

interface ProductItemProp {
    articleNumber: string;
    product: ProductProductProp;
    quantity: number;
}

interface ProductProp {
    item: ProductItemProp;
}

const ShoppingCartItemComponent: React.FC<ProductProp> = ({ item }) => {
    const { incrementQuantity, decrementQuantity, removeItem } =
        useShoppingCart();

    let totalSingleItem = item.product.price * item.quantity;

    return (
        <div className="shoppingcart-item">
            <div className="item-image">
                <img src={item.product.imageName} alt={item.product.name} />
            </div>
            <div className="item-info">
                <div className="item-info-name">{item.product.name}</div>
                <div className="item-info-category">{item.product.category}</div>
                <div className="item-info-quantity">
                    <div className="item-info-quantity-box">
                        <button
                            className="box-button-right"
                            onClick={() => decrementQuantity(item)}
                        >
                            -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                            className="box-button-left"
                            onClick={() => incrementQuantity(item)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="item-price">
                <div>{currencyFormatter(totalSingleItem)}</div>
                <button onClick={() => removeItem(item.articleNumber)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartItemComponent;
