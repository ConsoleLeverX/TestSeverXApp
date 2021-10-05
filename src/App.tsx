import React, { useState } from "react";
import "./App.scss";
import Filter from "./components/Filter";
import Table from "./components/Table";
import { IFilter, ISort } from "./types";

const App = () => {
  const [filter, setFilter] = useState<IFilter>({
    active: true,
    inactive: true,
  });

  const [sort, setSort] = useState<ISort>({
    value: "email",
    type: "asc",
  });

  return (
    <div className="app">
      <div className="table-container">
        <Filter
          sort={sort}
          filter={filter}
          setFilter={setFilter}
          setSort={setSort}
        />
        <Table sort={sort} filter={filter} />
      </div>
    </div>
  );
};

export default App;
