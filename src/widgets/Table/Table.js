import "./Table.scss";
import { useMemo, useEffect, Fragment } from "react";
import cx from "classnames";
import { ReactComponent as GroupIcon } from "../../assets/images/group.svg";

import {
  useTable,
  useFlexLayout,
  useSortBy,
  useFilters,
  useGroupBy,
  useExpanded,
  useRowSelect,
} from "react-table";

import { SortIcon } from "../";

const defaultHeaderPropGetter = (column) => {
  let headerProps = {};

  if (column.headerStyle) headerProps.style = column.headerStyle;

  return headerProps;
};

const defaultCellPropGetter = ({ column }) => {
  let cellProps = {};

  if (column.cellStyle) cellProps.style = column.cellStyle;

  return cellProps;
};

// const defaultRenderRowSubComponent = (value) => value

function Table({
  variant = "",
  data,
  columns,
  initialState,
  renderRowSubComponent,
  onSelect,
  onRowClick,
  getCellProps = defaultCellPropGetter,
  getHeaderProps = defaultHeaderPropGetter,
}) {
  const filterTypes = useMemo(
    () => ({
      testfilter: (rows, ids, filterValue) => {
        if (!filterValue.length) return rows;

        return rows.filter((row) => {
          return ids.some((id) => {
            const rowValue = row.values[id];
            return filterValue.includes(rowValue);
          });
        });
      },
    }),
    []
  );

  const defaultColumn = useMemo(
    () => ({
      Filter: () => null, // set up default filter
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      initialState,
      autoResetPage: false,
      autoResetExpanded: false,
      autoResetGroupBy: false,
      autoResetSelectedRows: false,
      autoResetSortBy: false,
      autoResetFilters: false,
      autoResetRowState: false,
    },
    useFlexLayout,
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    useRowSelect
  );

  useEffect(() => {
    if (onSelect) onSelect(selectedFlatRows);
  }, [onSelect, selectedFlatRows]);

  return (
    <div className={cx("Table", variant)} {...getTableProps()}>
      <div className="heading">
        {headerGroups.map((headerGroup) => (
          <div className="row" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <div
                className={cx("cell", { isGrouped: column.isGrouped })}
                {...column.getHeaderProps([
                  { style: column.style },
                  getHeaderProps(column),
                ])}
              >
                <span className={cx("text", { canSort: column.canSort })}>
                  {column.render("Header")}
                </span>
                {column.canGroupBy ? (
                  <span className="GroupBy" {...column.getGroupByToggleProps()}>
                    <GroupIcon className="GroupIcon" />
                  </span>
                ) : null}

                {column.canSort && (
                  <span className="SortBy" {...column.getSortByToggleProps()}>
                    <SortIcon
                      isSorted={column.isSorted}
                      isSortedDesc={column.isSortedDesc}
                    />
                  </span>
                )}
                {column.canFilter ? column.render("Filter") : null}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="body" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const rowProps = row.getRowProps();

          return (
            <Fragment key={rowProps.key}>
              <div
                className={cx("row", { clickable: onRowClick })}
                {...rowProps}
                onClick={() => onRowClick && onRowClick(row.original)}
              >
                {row.cells.map((cell) => (
                  <div
                    className={cx("cell", { isGrouped: cell.isGrouped })}
                    {...cell.getCellProps([
                      { style: cell.column.style },
                      getCellProps(cell),
                    ])}
                  >
                    {cell.isGrouped ? (
                      // If it's a grouped cell, add an expander and row count
                      <span
                        className={cx("expanded", {
                          isExpanded: row.isExpanded,
                        })}
                        {...row.getToggleRowExpandedProps()}
                      >
                        {/* <LeftArrowIcon /> */}
                        {cell.render("Cell")}{" "}
                        <span className="sub-rows-length">
                          ({row.subRows.length})
                        </span>
                      </span>
                    ) : cell.isAggregated ? (
                      // If the cell is aggregated, use the Aggregated
                      // renderer for cell
                      cell.render("Aggregated")
                    ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                      // Otherwise, just render the regular cell
                      cell.render("Cell")
                    )}
                  </div>
                ))}
              </div>
              {row.isExpanded &&
                renderRowSubComponent &&
                renderRowSubComponent({ row, rowProps })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
