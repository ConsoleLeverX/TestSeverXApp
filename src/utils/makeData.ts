import { IFilter, IMakeDataLevelDTO, INewPerson, ISort } from "../types";
import { data } from "./data";

const findRowsByParents = (id: number): INewPerson[] => {
  return data.filter((row) => row.parentId === id);
};

const filterRows = (users: INewPerson[], filter: IFilter) => {
  return users.filter(
    (user) =>
      (user.isActive && filter.active) || (!user.isActive && filter.inactive)
  );
};

const sortRows = (users: INewPerson[], sort: ISort) => {
    return users.sort((a: INewPerson, b: INewPerson) => {
        return a[sort.value].localeCompare(b[sort.value]) * (sort.type === 'asc' ? 1 : -1);
    });
}

export default function makeData(filter: IFilter, sort: ISort) {
  const makeDataLevel: IMakeDataLevelDTO = (parentId: number = 0) => {
    const users = findRowsByParents(parentId);
    const filteredUsers = filterRows(users, filter);
    const filteredAndSortedUsers = sortRows(filteredUsers, sort);
    return filteredAndSortedUsers.map((user) => {
      return {
        ...user,
        subRows: makeDataLevel(user.id) || undefined,
      };
    });
  };

  return makeDataLevel();
}
