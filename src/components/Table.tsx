import React from "react";
import makeData from "../utils/makeData";
import TableRow from "./TableComponents/TableRow";

const Table = ({ filter, sort }) => {
  const users = React.useMemo(() => makeData(filter, sort), [filter, sort]);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <td />
            <td>ID</td>
            <td>Active</td>
            <td>Balance</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
