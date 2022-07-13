import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
//import showAllTable from "./showAllTable";

/*function allTable(){
alert ("Ouch you click me!");
}*/

const Table = props => {
  const columns = [
    {
      name: "Transaction Date",
      selector: "transactionDate",
      sortable: true,
      //grow: 2
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
      hide: "sm"
    },
    {
      name: "Category",
      selector: "category",
      sortable: true
    },
    {
      name: "Debit",
      selector: "debit",
      sortable: true,
      hide: "md"
    },
    {
      name: "Credit",
      selector: "credit",
      sortable: true,
      hide: "md"
    },
    {
      name: "ID",
      selector: "id",
      sortable: true,
      hide: "md"
    },
    {
      name: "Details",
      button: true,
      cell: row =>
        row.showButtons ? (
          <>
          <a href ="/DisplayTable" target="_self"><button>
              Detail
            </button>
            </a>
          </>
        ) : null
    }
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Contact List"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
