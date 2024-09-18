import "./Product.css";
function Product({title,price=1}){
    return(
        <div className="Product">
            <h1>{title}</h1>
            <h3>{price}</h3>
        </div>
    );
}

export default Product;