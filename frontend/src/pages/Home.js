import Item from '../components/Item.js';

function Home() {
    return (
        <div>
            Tere
            <Item name="Item1" price="10" category="mobile"/>
            <Item name="Item2" price="17" category="laptop"/>
            <Item name="Item3" price="25" category="coffe-machine"/>
        </div>
    )
}

export default Home;

// localhost 3000