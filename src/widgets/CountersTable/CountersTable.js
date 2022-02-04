import { useMemo } from "react";

import { Table } from "../";
import { ReactComponent as DeleteIcon } from "../../assets/images/delete.svg";

function CountersTable() {
  const data = [
    {
      Company: "Ttcom-group",
      LookAlike: "Добавить",
      Goals: "Добавить",
      Status: "Данные не поступают",
      Coverage: "Неактивный",
      Segments: "-",
      Owner: "Cторонний владелец",
    },
    {
      Company: "Tt.comgroup",
      LookAlike: "Добавить",
      Goals: "Добавить",
      Status: "Данные не поступают",
      Coverage: "Неактивный",
      Segments: "-",
      Owner: "Cторонний владелец",
    },
    {
      Company: "Ttcomgroup.com",
      LookAlike: "Добавить",
      Goals: "Добавить",
      Status: "Данные не поступают",
      Coverage: "Неактивный",
      Segments: "-",
      Owner: "Cторонний владелец",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Кампания",
        accessor: "Company",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: 210,
        },
        cellStyle: {
          width: 210,
        },
      },
      {
        Header: "Look-alike",
        Cell: ({ row: { id } }) => (
          <button id={id} style={{ color: "#3F73F9" }}>
            Добавить
          </button>
        ),
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: 70,
        },
        cellStyle: {
          width: 70,
        },
      },
      {
        Header: "Цели",
        Cell: ({ row: { id } }) => (
          <button id={id} style={{ color: "#3F73F9" }}>
            Добавить
          </button>
        ),
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: 70,
        },
        cellStyle: {
          width: 70,
        },
      },
      {
        Header: "Статус",
        accessor: "Status",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: 145,
        },
        cellStyle: {
          width: 145,
          color: "rgba(66, 69, 76, 0.6)",
        },
      },
      {
        Header: "Охват",
        accessor: "Coverage",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: 80,
        },
        cellStyle: {
          width: 80,
          color: "rgba(66, 69, 76, 0.6)",
        },
      },
      {
        Header: "Сегменты",
        accessor: "Segments",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: 60,
        },
        cellStyle: {
          width: 60,
          color: "rgba(66, 69, 76, 0.6)",
        },
      },
      {
        Header: "Владелец",
        accessor: "Owner",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: 165,
        },
        cellStyle: {
          width: 165,
          color: "rgba(66, 69, 76, 0.6)",
        },
      },
      {
        Header: () => null,
        accessor: "Delete",
        disableGroupBy: true,
        disableSortBy: true,
        Cell: ({ row: { id } }) => (
          <button id={id}>
            <DeleteIcon />
          </button>
        ),
        headerStyle: {
          maxWidth: 50,
        },
        cellStyle: {
          justifyContent: "center",
          borderRight: "none",
          maxWidth: 50,
        },
      },
    ],
    []
  );
  return (
    <div className="CountersTable">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default CountersTable;
