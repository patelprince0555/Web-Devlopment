import "./Product.css";
function Product({title,price,}){
    return(
        <div className="Product">
            <h1>{title}</h1>
            <h3>{price}</h3>
            {price>=20000 ? <p>Discount of 5%</p>:null}
        </div>
    );
}

export default Product;