import { useMemo } from "react";

import { Table } from "../";

import { ReactComponent as DeleteIcon } from "../../assets/images/delete.svg";

function ReplenishmentTable() {
  const data = [
    {
      Date: "20/11/2020 14:00",
      Operations: "Авансовый платеж по номеру",
      AmountExcludingVAT: "100 000 ₽",
      SumIncludingVAT: "200 000 ₽",
      Documents: "-",
      Status: "Ожидается",
    },
    {
      Date: "20/11/2020 16:29",
      Operations: "Авансовый платеж по счету",
      AmountExcludingVAT: "500 000 ₽",
      SumIncludingVAT: "500 000 ₽",
      Documents: "-",
      Status: "Ожидается",
    },
    {
      Date: "20/11/2020 16:54",
      Operations: "Авансовый платеж по чему-то",
      AmountExcludingVAT: "300 000 ₽",
      SumIncludingVAT: "300 000 ₽",
      Documents: "-",
      Status: "Ожидается",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Дата",
        accessor: "Date",
        disableGroupBy: true,
        headerStyle: {
          width: 140,
        },
        cellStyle: {
          width: 140,
        },
      },
      {
        Header: "Операция",
        accessor: "Operations",
        disableSortBy: true,
        headerStyle: {
          width: 400,
        },
        cellStyle: {
          width: 400,
        },
      },
      {
        Header: "Сумма без НДС",
        accessor: "AmountExcludingVAT",
        disableSortBy: true,
        headerStyle: {
          width: 140,
        },
        cellStyle: {
          width: 140,
        },
      },
      {
        Header: "Сумма с НДС",
        accessor: "SumIncludingVAT",
        disableSortBy: true,
        headerStyle: {
          width: 140,
        },
        cellStyle: {
          width: 140,
        },
      },
      {
        Header: "Документы",
        accessor: "Documents",
        disableSortBy: true,
        headerStyle: {
          width: 170,
        },
        cellStyle: {
          width: 170,
        },
      },
      {
        Header: "Статус",
        accessor: "Status",
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
    <div className="ReplenishmentTable">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default ReplenishmentTable;
