import React, { useState } from "react";
import { INewPersonWithChildren } from "../../types";

const TableRow = ({ user, isChildren = false }) => {
  const [isOpen, setOpen] = useState(false);
  const { id, isActive, balance, name, email, subRows } = user;
  const isSubRowExists = subRows.length;

  return (
    <>
      <tr className={isChildren ? "children-row" : undefined}>
        <td
          className={isSubRowExists ? "arrow" : undefined}
          onClick={() => isSubRowExists && setOpen(!isOpen)}
        >
          {isSubRowExists ? isOpen ? <>&#9660;</> : <>&#9654;</> : null}
        </td>
        <td>{id}</td>
        <td>{isActive.toString()}</td>
        <td>{balance}</td>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
      {isOpen &&
        subRows.map((subRow: INewPersonWithChildren) => (
          <TableRow key={user.id} user={subRow} isChildren />
        ))}
    </>
  );
};

export default TableRow;
