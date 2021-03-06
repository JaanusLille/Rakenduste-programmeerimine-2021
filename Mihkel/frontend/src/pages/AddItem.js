import AddItemForm from '../components/AddItemForm'

function AddItem() {
    function itemSubmitHandler(item) {
        console.log(item);

        fetch('http://localhost:8080/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type':'application/json'
            }
        }).then(res => ( res.status === 200 ? window.location.href = 'http://localhost:3000/admin' : ''));
    }

    return (
        <div>
            <h1>Lisa uus ese</h1>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    );
}

export default AddItem;