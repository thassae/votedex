import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
const SearchBox = (props) => {
  const { id, label, selectedList, handlerEvent } = props;
  return (
    <FormControl fullWidth>
      <TextField
        label={label}
        id={id}
        value={selectedList[id]}
        onChange={(event) => handlerEvent(event, id)}
        size="small"
      />
    </FormControl>
  );
};

export default SearchBox;
