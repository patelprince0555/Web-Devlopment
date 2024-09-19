import Product from "./product.jsx";

function ProductTab(){
let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center"
}
    return(
        <div style={styles}>
        <Product title="Logitech mx master" idx={0}/>
        <Product title="Apple pencil 2nd gen" idx={1}/>
        <Product title=" Zebronics Zeb-transformer" idx={2}/>
        <Product title="Petronics Toad 35" idx={3}/>
        </div>
    )
}
export default ProductTab;