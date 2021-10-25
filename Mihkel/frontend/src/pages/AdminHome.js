import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AdminHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    },[])

    function makeDeleteRequest(itemId) {
        fetch('http://localhost:8080/delete-item/' + itemId, 
            { method: 'DELETE' }
        ).then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    }

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div>
            <Link to="add-item">
                <button>Lisa uus ese</button>
            </Link>
            
            <Link to="categories">
                <button>Vaata kategooriaid</button>
            </Link>
            <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={false} items={loadedItems} />
        </div>
    )
}

export default AdminHome;

// localhost 3000