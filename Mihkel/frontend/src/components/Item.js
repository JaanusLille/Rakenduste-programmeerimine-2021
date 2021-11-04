import { Link } from "react-router-dom";

function Item(props) {
    function handleDelete(itemId) {
        // console.log(itemId)
        props.deleteItem(itemId);
    }
    
    return (
        <div className="itemContainer">
            { props.isSingleItemView ? 
            <div>
                {/* <div className="itemId">{props.id}</div> */}
                <div className="itemName"><strong>Nimetus:</strong> {props.name}</div>
                <div className="itemPrice"><strong>Hind:</strong> {props.price}</div>
                <div className="itemCategory"><strong>Kategooria:</strong> {props.category}</div>
            </div> : 
            <Link to={`item/${props.id}`}>
                <div>
                <div className="itemName"><strong>Nimetus:</strong> {props.name}</div>
                <div className="itemPrice"><strong>Hind:</strong> {props.price}</div>
                <div className="itemCategory"><strong>Kategooria:</strong> {props.category}</div>
                </div>
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