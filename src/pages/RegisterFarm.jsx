import TableComponent from "../components/TableComponent";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

function RegisterFarm() {
  useEffect(() => {
    feather.replace();
  });

      const [visible, setVisible] = useState(false);
          const footerContent = (
            <div>
              <button className="bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md">
                <p className="flex items-center">
                  {" "}
                   Create
                </p>
              </button>
            </div>
          );

  return (
    <div className="w-full">
      <div className="flex justify-between w-full p-10">
        <div className="flex p-2  text-gray-600 text-[20px]">
          {" "}
          Registered Farms{" "}
        </div>
        <button className="flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg" onClick={() => setVisible(true)}>
          <i data-feather="plus" className=""></i>{" "}
          <p className="pl-1 pr-2"> Add New Farm</p>
        </button>
      </div>{" "}
      <TableComponent
        name={"Farms"}
        columns={[
          "name",
          "size",
          "county",
          "ward",
          "nearestShoppingCenter",
          "location",
        ]}
      />
      <Dialog
        header="Add New Farm"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
<div className="grid grid-cols-9">
    <div className="col-span-5">
        
    </div>

</div>
      </Dialog>
    </div>
  );
}

export default RegisterFarm;
