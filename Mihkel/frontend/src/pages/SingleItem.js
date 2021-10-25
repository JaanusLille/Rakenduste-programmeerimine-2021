import { useEffect, useState } from 'react';
import Item from '../components/Item';

function SingleItem() {
    const [item, setItem] = useState(null);

    const itemId = window.location.href.split("/item/")[1];
    console.log(itemId);


    useEffect(()=>{
        fetch("http://localhost:8080/view-item/" + itemId).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        setItem(data);
    })
    },[])

    if(!item){
        return "loading...";
    }
    return (<div> <Item 
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    category={item.category} 
                    isAddToCartButton={true}
                    isSingleItemView={true}
                /></div>)
}

export default SingleItem;