// pages/cart.tsx

import { NextPage } from "next";
import Head from "next/head";
import CartTable from "../src/components/CartTable"
import { Container } from "reactstrap";
import CartTotal from "../src/components/CardTotal"


const Cart: NextPage = () => {
  return (
    <>
     <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Carrinho
          </h1>

          <CartTable />
          <CartTotal />
        </Container>
      </main>  
    </>
  )
}

export default Cart