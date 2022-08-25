import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
const SearchBox = (props) => {
  const { id, label, selectedList, handlerEvent, maxLength } = props;

  let inputProperties = {};
  if (maxLength) {
    inputProperties = { ...inputProperties, maxLength: maxLength };
  }

  return (
    <FormControl fullWidth>
      <TextField
        label={label}
        id={id}
        value={selectedList[id]}
        onChange={(event) => handlerEvent(event, id)}
        size="small"
        inputProps={inputProperties}
      />
    </FormControl>
  );
};

export default SearchBox;
