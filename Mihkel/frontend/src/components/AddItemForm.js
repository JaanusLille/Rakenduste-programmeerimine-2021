import './AddItemForm.css';
import { useRef } from 'react';

function AddItemForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    function formSubmitHandler(e){
        e.preventDefault();

        console.log("vormi sisestus õnnestus");
        console.log(nameInputRef.current.value);
        
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item = {
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        console.log(item);
        props.onAddItem(item);
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
            <label>Eseme hind</label><br />
            <input type="number" placeholder="Maksumus" step="any" min="0" required ref={priceInputRef} /><br />
            <label>Eseme kategooria</label><br />
            <input type="text" placeholder="Kategooria" required ref={categoryInputRef} /><br />
            <button>Sisesta uus ese</button>
        </form>
    );
}

export default AddItemForm;