import Item from '../components/Item';

// [{1},{2},{3}].map({1}=>isAddToCart=true)
// [{1},{2},{3}].map({2}=>)
// [{1},{2},{3}].map({3}=>)
function ItemList(props) {
    function deleteItem(itemId) {
        console.log(itemId)
        props.onDeleteItem(itemId);
    }

    // const items= Array.from(props.items);

    return(<div>
        {props.items.map(item=> (
            <Item
                key={item.id}
                id={item.id}            // <= TEST
                name={item.name}
                price={item.price}
                category={item.category} 
                isAddToCartButton={props.isAddToCart}
                deleteItem={deleteItem}
            />
        ))}

    </div>);
}

export default ItemList;