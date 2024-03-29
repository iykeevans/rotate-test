"use client";

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { Box, Flex } from "@chakra-ui/react";
import Icon from "./icon";

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
    <Box as="table" width="full">
      <thead>
        {tableData.getHeaderGroups().map((group) => (
          <Box as="tr" key={group.id} borderBottom="1px solid #eee">
            {group.headers.map((header) => {
              const colHeader = header?.column?.columnDef?.header?.toString();

              return (
                <Box
                  key={header.id}
                  as="th"
                  textAlign="left"
                  color="#5C5E6E"
                  fontWeight="400"
                  fontSize="12px"
                  padding="6px 0"
                >
                  <Flex alignItems="center" columnGap="18px">
                    {colHeader === "NAME" && (
                      <Icon
                        name="users"
                        style={{ fill: "none", width: "26px" }}
                      />
                    )}
                    {!header.isPlaceholder &&
                      flexRender(colHeader, header.getContext())}
                  </Flex>
                </Box>
              );
            })}
          </Box>
        ))}
      </thead>

      <tbody>
        {tableData.getRowModel().rows.map((row, index) => (
          <Box
            as="tr"
            key={row.id}
            borderTop="1px solid rgba(202, 206, 225, 0.4)"
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <Box
                  as="td"
                  key={cell.id}
                  padding="15px 0"
                  color="#292B34"
                  fontSize="14px"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Box>
              );
            })}
          </Box>
        ))}
      </tbody>
    </Box>
  );
};

export default Table;
