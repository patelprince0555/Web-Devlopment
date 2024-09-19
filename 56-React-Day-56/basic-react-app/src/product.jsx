import "./Product.css";
function Product({title,price}){
    let isDiscount=price>=20000;
    let styles={backgroundColor: isDiscount ? "green":""};
    return(
        <div className="Product" style={styles}>
            <h1>{title}</h1>
            <h3>{price}</h3>
            {isDiscount? <p>Discount of 5%</p>:null}
        </div>
    );
}
export default Product;