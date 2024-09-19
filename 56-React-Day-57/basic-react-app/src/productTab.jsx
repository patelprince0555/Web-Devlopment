import Product from "./product.jsx";

function ProductTab(){
    return(
        <>
        <Product  title="earphone" price={3000}/>
        <Product title="phone" price={30000}/>
        <Product title="laptop" price={40000}/>
        </>
    )
}
export default ProductTab;