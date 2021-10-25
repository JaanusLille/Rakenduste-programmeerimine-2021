import { Link } from "react-router-dom";

function Item(props) {
    function handleDelete(itemId) {
        // console.log(itemId)
        props.deleteItem(itemId);
    }
    
    return (
        <div>
            { props.isSingleItemView ? 
            <div>
                <div className="itemName">{props.name}</div>
                <div className="itemName">{props.price}</div>
                <div className="itemName">{props.category}</div>
            </div> : 
            <Link to={`item/${props.id}`}>
                <div className="itemName">{props.name}</div>
                <div className="itemName">{props.price}</div>
                <div className="itemName">{props.category}</div>
            </Link> }

            { props.isAddToCartButton ? <button>Lisa ostukorvi</button> : 
                <div>
                    <button onClick={()=>handleDelete(props.id)}>X</button> 
                    <Link to={`edit-item/${props.id}`}>
                        <button>Muuda toode</button> 
                    </Link>
                </div>}
        </div>
    )
}

export default Item;

// localhost 3000
// Home/AdminHome "true" => ItemList => Item (props. kaudu võtsin vastu) (props. kaudu saadan )