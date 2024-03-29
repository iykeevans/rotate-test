"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  createColumnHelper,
  ColumnDef,
} from "@tanstack/react-table";

interface IProps<C, D> {
  data: D;
  columns: C;
}

const Table = <C extends ColumnDef<unknown, any>[], D extends unknown[]>(
  props: IProps<C, D>
) => {
  const { data, columns } = props;

  const tableData = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {tableData.getHeaderGroups().map((group) => (
          <tr key={group.id} style={{ borderBottom: "1px solid #eee" }}>
            {group.headers.map((header, index) => {
              const colHeader = header?.column?.columnDef?.header?.toString();

              return (
                <th
                  key={header.id}
                  style={{
                    textAlign: "left",
                    color: "#5C5E6E",
                    fontWeight: 400,
                    fontSize: 12,
                    padding: "6px 0",
                  }}
                >
                  {!header.isPlaceholder &&
                    flexRender(colHeader, header.getContext())}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>

      <tbody>
        {tableData.getRowModel().rows.map((row, index) => (
          <tr
            key={row.id}
            style={{
              borderBottom: "1px solid 1px solid rgba(202, 206, 225, 0.4)",
            }}
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
