import "./Product.css";
import Price from "./Price.jsx";
function Product({title, idx}){
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,199","899","299"];
    let description=[["8,000 DPI","Programble buttons"],
    ["intuitive surface","designed for ipad pro"],
    ["best experience","designed for ipad pro"],
    ["good Quality","optical orientation"],];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}
export default Product;