import TextField from "@mui/material/TextField";
const SearchBox = (props) => {
  const { id, label, selectedList, handlerEvent } = props;
  return (
      <TextField
        label={label}
        id={id}
        value={selectedList[id]}
        onChange={(event) => handlerEvent(event, id)}
        size="small"
      />
  );
};

export default SearchBox;
