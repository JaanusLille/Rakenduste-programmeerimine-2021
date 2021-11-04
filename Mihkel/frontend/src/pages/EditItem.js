import { useEffect, useState, useRef } from 'react';

function EditItem() {
    const [item, setItem] = useState(null);

    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();


    useEffect(()=>{
        const itemId = window.location.href.split("/edit-item/")[1];
        console.log(itemId);   
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


    function formSubmitHandler(e){
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const itemSubmitted = {
            id: item.id,
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        console.log( {itemSubmitted} );


        // TODO: api päring eraldi componenti
        // võiks olla eraldi kood päringu jaoks JA vormi jaoks
        fetch('http://localhost:8080/edit-item/', {
            method: 'POST',
            body: JSON.stringify(itemSubmitted),
            headers: {'Content-Type':'application/json'
            }
        }).then(res => ( res.status === 200 ? window.location.href = 'http://localhost:3000/admin' : ''));
    }



    return (<form onSubmit={formSubmitHandler}>
        <label>Eseme nimi</label><br />
        <input type="text"  required defaultValue={item.name} ref={nameInputRef} /><br />
        <label>Eseme hind</label><br />
        <input type="number" step="any" min="0" required defaultValue={item.price} ref={priceInputRef} /><br />
        <label>Eseme kategooria</label><br />
        <input type="text" required defaultValue={item.category} ref={categoryInputRef} /><br />
        <button>Muuda eseme andmeid</button>
    </form>)


}

export default EditItem;