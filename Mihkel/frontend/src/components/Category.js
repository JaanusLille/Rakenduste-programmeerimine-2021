function Category(props) {
    return (
      <div className="categoryContainer">
        <div className="categoryName"><strong>Nimetus:</strong> {props.name}</div>
        <div className="categoryType"><strong>Liik:</strong> {props.type}</div>
      </div>
      // console.log(props.name);
      // console.log(props.type);
    )
  }
  
  export default Category;