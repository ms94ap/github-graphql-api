import React from "react";
import { sortingOptions } from "./helpers";
import "../css/select.css";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

function Select({ selectType, setSelectType }) {
  return (
    <div className="select-container">
      <FormControl>
        <InputLabel htmlFor="uncontrolled-native">Sort By:</InputLabel>
        <NativeSelect
          defaultValue={selectType}
          onChange={(e) => setSelectType(e.target.value)}
          inputProps={{
            name: "Short By",
            id: "uncontrolled-native",
          }}
        >
          {sortingOptions.map((option, index) => {
            return (
              <option
                className="select-option"
                value={option.value}
                key={index}
              >
                {option.title}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default Select;
