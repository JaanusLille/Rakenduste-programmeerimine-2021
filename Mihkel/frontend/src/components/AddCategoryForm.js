import './AddCategoryForm.css';
import {useRef} from 'react';

function AddCategoryForm(props){
  const nameImputRef = useRef();
  const typeImputRef = useRef();
  // console.log(nameImputRef);
  // console.log(typeImputRef);

  function formSubmitHandler(e){
    e.preventDefault();

    // console.log(nameInputRef.current.value);
    // console.log(typeImputRef.current.value);
    // console.log("kategooria lisatud! ");
    const nameValue = nameImputRef.current.value;
    const typeValue = typeImputRef.current.value;
    // console.log(nameValue);
    // console.log(typeValue);
    const category = {
      name: nameValue,
      category: typeValue
    }

    props.onAddCategory(category);
    // console.log(category);
  }

  return(
    <form onSubmit={formSubmitHandler}>
      <label>Kategooria nimi</label><br/>
      <input type="text" required placeholder="Nimi" ref={nameImputRef}/><br/>
      <label>Kategooria tüüp</label>
      <br/>
      <select ref={typeImputRef}>
        <option value="PREMIUM">PREMIUM</option>
        <option value="DELUXE">DELUXE</option>
        <option value="BASIC">BASIC</option>
      </select>
      <br/><br/>
      <button>Sisesta uus kategooria</button>
    </form>
  );
}

export default AddCategoryForm;