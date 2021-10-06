function Category(props) {
    return (
      <div>
        <div className="categoryName">{props.name}</div>
        <div className="categoryType">{props.type}</div>
      </div>
      // console.log(props.name);
      // console.log(props.type);
    )
  }
  
  export default Category;