import React, { useEffect, useState } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { GiCorn } from "react-icons/gi";

export function TableComponent({ name, columns, data }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    "country.name": {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    balance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const deleteActionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <button className="text-white bg-red-500 text-md rounded-full shadow-md py-2 px-6">
          Delete
        </button>
      </React.Fragment>
    );
  };
  const editActionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <button className="text-white bg-blue-500 text-md rounded-full shadow-md py-2 px-6">
          Edit
        </button>
      </React.Fragment>
    );
  };
  const goToFarm = (rowData) => {
    return (
      <React.Fragment>
        <button className="text-white bg-blue-500 text-md rounded-full shadow-md py-2 px-6">
          go to Farm
        </button>
      </React.Fragment>
    );
  };
  const header = (() => {
    return (
      <div className="flex justify-between flex-wrap gap-2 justify-content-between align-items-center">
        <h4 className="m-0 pt-3 ">{name}</h4>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  })();

  return (
    <div className=" w-full ">
      <div className="card bg-white m-5 p-5 rounded-md shadow-md ">
        <DataTable
          value={data}
          paginator
          header={header}
          rows={10}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          rowsPerPageOptions={[10, 25, 50]}
          dataKey="id"
          selectionMode="checkbox"
          selection={selectedItems}
          onSelectionChange={(e) => setSelectedItems(e.value)}
          filters={filters}
          filterDisplay="menu"
          globalFilterFields={[
            "name",
            "country.name",
            "representative.name",
            "balance",
            "status",
          ]}
          emptyMessage={`No ${name} found.`}
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "2rem" }}
          ></Column>
          {columns.map((column, idx) => (
            <Column
              key={idx}
              field={column}
              header={column.charAt(0).toUpperCase() + column.slice(1)}
              sortable
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "6rem" }}
            />
          ))}
          <Column
            header="Edit"
            body={editActionBodyTemplate}
            exportable={false}
            style={{ minWidth: "6rem" }}
          ></Column>
          <Column
            header="Delete"
            body={deleteActionBodyTemplate}
            exportable={false}
            style={{ minWidth: "6rem" }}
          ></Column>
		  
        </DataTable>
      </div>
    </div>
  );
}
