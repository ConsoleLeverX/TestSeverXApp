import React from "react";
import { SortTypeUnion, SortValueUnion } from "../types";
import Checkbox from "./Input/Checkbox";
import RadioButton from "./Input/RadioButton";

const Filter = ({ filter, sort, setFilter, setSort }) => (
  <div className="filter">
    <h4 className="label filter-label">Filters:</h4>
    <Checkbox
      name="active"
      onChange={(value: boolean) =>
        setFilter({
          ...filter,
          active: value,
        })
      }
      isChecked={filter.active}
    >
      Active
    </Checkbox>

    <Checkbox
      name="inactive"
      onChange={(value: boolean) =>
        setFilter({
          ...filter,
          inactive: value,
        })
      }
      isChecked={filter.inactive}
    >
      Inactive
    </Checkbox>

    <hr />

    <div>
      <h4 className="label sort-label">Sort by:</h4>
      <RadioButton
        name="sort"
        value="email"
        onChange={(value: SortValueUnion) => setSort({ ...sort, value })}
        defaultChecked
      >
        Email
      </RadioButton>

      <RadioButton
        name="sort"
        value="balance"
        onChange={(value: SortValueUnion) => setSort({ ...sort, value })}
      >
        Balance
      </RadioButton>

      <hr />

      <div>
        <h4 className="label sort-type-label">Sort type:</h4>
        <RadioButton
          name="sortType"
          value="asc"
          onChange={(type: SortTypeUnion) => setSort({ ...sort, type })}
          defaultChecked
        >
          ASC
        </RadioButton>
        <RadioButton
          name="sortType"
          value="desc"
          onChange={(type: SortTypeUnion) => setSort({ ...sort, type })}
        >
          DESC
        </RadioButton>
      </div>
    </div>

    <hr />
  </div>
);

export default Filter;
