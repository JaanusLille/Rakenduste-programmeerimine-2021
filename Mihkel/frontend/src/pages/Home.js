import ItemList from '../components/ItemList';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        })
    },[])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div>
            {/* <Link to="/categories">
                <button>Vaata kategooriaid</button>
            </Link> */}
            <div className="itemsTerritory">
                <ItemList isAddToCart={true} items={loadedItems} />
            </div>
        </div>
    )
}

export default Home;

// localhost 3000