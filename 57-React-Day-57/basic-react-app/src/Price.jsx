function Price({oldPrice,newPrice}){
    let oldStyles={
        textDecorationLine:"Line-through",
    };
    let newstyles={
        fontWeight:"bold",
    };
    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }
    return(
        <div style={styles}>
           <span style={oldStyles}>{oldPrice}</span>
           &nbsp; &nbsp;
           <spn style={newstyles}>{newPrice}</spn>
        </div>
    )
}
export default Price;