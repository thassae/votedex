import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

const renderSelectGroup = (optionList, selectedList, keyField, valueField) => {
  const items = optionList.data.map((p) => {
    return (
      <MenuItem key={p[keyField]} value={p[keyField]}>
        <Checkbox checked={selectedList.indexOf(p[keyField]) > -1} />
        <ListItemText primary={p[valueField]} />
      </MenuItem>
    );
  });
  return [<ListSubheader>{optionList.titulo}</ListSubheader>, items];
};

const MultiSelect = (props) => {
  const {
    id,
    label,
    selectedList,
    optionList,
    keyField,
    valueField,
    handlerEvent,
    disabled,
  } = props;
  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth size="small">
        <InputLabel id={id + "-label"}>{label}</InputLabel>
        <Select
          disabled={disabled}
          labelId={id + "-label"}
          id={id}
          value={selectedList[id]}
          label={label}
          onChange={(event) => handlerEvent(event, id)}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => {
            const allOptions = optionList[id].flatMap(
              (options) => options.data
            );
            const names = allOptions.filter((item) =>
              selected.includes(item[keyField])
            );
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {names.map((value) => (
                  <Chip key={value[keyField]} label={value[valueField]} />
                ))}
              </Box>
            );
          }}
          multiple
        >
          {optionList[id]?.map((options) =>
            renderSelectGroup(options, selectedList[id], keyField, valueField)
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MultiSelect;
