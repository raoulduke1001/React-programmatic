import { useMemo } from "react";

import { Table } from "../";

import { ReactComponent as ChatIcon } from "../../assets/images/chat.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow-right-blue.svg";

function BalanceHistoryTable() {
  const data = [
    {
      Date: "20/11/2020 16:29",
      Who: "m.kamyshina-com",
      WhereFrom: "рекл-ль: Air.ru",
      Where: "размещение: Shops + salons + finesses",
      Contract: "-",
      Account: "-",
      Amount: "1 000,00 ₽",
    },
    {
      Date: "20/11/2020 13:29",
      Who: "m.kamyshina",
      WhereFrom: "рекл-ль: Air-ozon.ru",
      Where: "размещение: Shops + salons + finesses",
      Contract: "-",
      Account: "-",
      Amount: "12 000,00 ₽",
    },
    {
      Date: "20/11/2020 12:29",
      Who: "m.kam",
      WhereFrom: "рекл-ль: ozon.ru",
      Where: "размещение: Shops + salons + finesses",
      Contract: "-",
      Account: "-",
      Amount: "11 000,00 ₽",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Дата",
        accessor: "Date",
        disableGroupBy: true,
        headerStyle: {
          width: 120,
        },
        cellStyle: {
          width: 120,
        },
      },
      {
        Header: "Кто",
        accessor: "Who",
        disableSortBy: true,
        headerStyle: {
          width: 120,
        },
        cellStyle: {
          width: 120,
        },
      },
      {
        Header: "Откуда",
        accessor: "WhereFrom",
        disableSortBy: true,
        headerStyle: {
          width: 250,
        },
        cellStyle: {
          width: 250,
        },
      },
      {
        Header: () => null,
        accessor: "Arrow",
        disableGroupBy: true,
        disableSortBy: true,
        Cell: ({ row: { id } }) => (
          <button id={id}>
            <ArrowIcon />
          </button>
        ),
        headerStyle: {
          maxWidth: 20,
        },
        cellStyle: {
          justifyContent: "center",
          maxWidth: 20,
        },
      },
      {
        Header: "Куда",
        accessor: "Where",
        disableSortBy: true,
        headerStyle: {
          width: 250,
        },
        cellStyle: {
          width: 250,
        },
      },
      {
        Header: "Договор",
        accessor: "Contract",
        disableSortBy: true,
        headerStyle: {
          width: 70,
          padding: "0 10px",
        },
        cellStyle: {
          width: 70,
        },
      },
      {
        Header: "№ Счета",
        accessor: "Account",
        disableSortBy: true,
        headerStyle: {
          width: 70,
          padding: "0 10px",
        },
        cellStyle: {
          width: 70,
        },
      },
      {
        Header: "Сумма",
        accessor: "Amount",
        disableGroupBy: true,
        headerStyle: {
          width: 75,
        },
        cellStyle: {
          width: 75,
        },
      },
      {
        Header: () => null,
        accessor: "Chat",
        disableGroupBy: true,
        disableSortBy: true,
        Cell: ({ row: { id } }) => (
          <button id={id}>
            <ChatIcon />
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
    <div className="BalanceHistoryTable">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default BalanceHistoryTable;
