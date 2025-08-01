import Items from "./Items";
import "./Todolistitem.scss";
const ListItem = ({ list }) => {
  return (
    <div className="ListItems_Container">
      <ul>
        {list.length ? (
          list.map((item) => {
            return <Items key={item.id} item={item} />;
          })
        ) : (
          <p> No Tasks Today</p>
        )}
      </ul>
    </div>
  );
};

export default ListItem;
