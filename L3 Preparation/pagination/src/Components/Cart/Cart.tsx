import { useEffect, useState } from "react";
import CartServices from "../../Services/Cart.services";
import styles from "./Cart.module.scss"
import { type CartData } from "./Cart.types";
import Pagination from "../Pagination/Pagination";
// import type { CartProps } from "./Cart.types.ts" 

const Cart = () => {

    const [cartData, setCartData] = useState<CartData[]>([])
    const [currentPage, setPage] = useState(0);
    const [pageSize, setSize] = useState(5);
    const [totalItems, setTotalItems] = useState(0);

    const displayCarts = async () => {
        try {
            const cartList = await CartServices.getAllCarts(currentPage, pageSize);
            console.log(cartList.carts[0].products);
            // console.log(cartList.products);
            // console.log(cartList.data);
            setCartData(cartList.carts)
            setTotalItems(cartList.total);
        } catch (e) {
            throw { message: e }
        }
    }

    useEffect(() => {
        displayCarts()
    }, [currentPage, pageSize])

    return (
        <div className={styles.CardContainer}>
            {cartData.map((c: any) => (
                <div key={c.id} className={styles.CardColumn}>
                    <h1>{`Cart No. ${c.id}`}</h1>
                    {c.products.map((p: any) => (
                        <div className={styles.CardContent} key={p.id}>
                            <img src={p.thumbnail} alt="" />
                            <h2>{`Name: ${p.title}`}</h2>
                            <h3>{`Price: ${p.price} `}</h3>
                        </div>
                    ))}


                </div>

            ))}
            
            <Pagination
                currentPage={currentPage}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={setPage}
                onSizeChange={setSize}
            />
        </div>
    );
};

export default Cart 
