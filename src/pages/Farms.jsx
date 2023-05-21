import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputElement, Navbar, TableComponent } from "../components";
import { useApiAuth } from "../hooks";
import { FARMS_ROUTE } from "../api";
import { useNavigate, useLocation } from "react-router-dom";

export function Farms() {
  const [name, setName] = useState();
  const [size, setSize] = useState(0);
  const [county, setCounty] = useState();
  const [ward, setWard] = useState();

  const [farms, setFarms] = useState([]);

  const navigate = useNavigate();
  const api = useApiAuth();
  const location = useLocation();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(FARMS_ROUTE, {
        name,
        size,
        county: { name: county },
        ward: { name: ward },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    feather.replace();
    getFarms();

    return () => false;
  }, []);

  const getFarms = async () => {
    try {
      const res = await api.get(FARMS_ROUTE);
      setFarms(res.data.content);
      console.log(Object.keys(farms[0]));
    } catch (error) {
      console.error(error);
    }
  };

  const [visible, setVisible] = useState(false);

  const footerContent = (
    <div>
      <button
        onClick={onSubmit}
        className="bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md"
      >
        <p className="flex items-center"> Create</p>
      </button>
    </div>
  );

  return (
    <div className="w-full bg-gray-100 flex flex-col h-screen">
      {location === "/farms" ? (
        <div className="bg-white w-full">
          <Navbar />
        </div>
      ) : null}

      <div className="flex justify-between w-full px-10 py-5">
        {location === "/farms" ? (
          <div className="flex py-2  text-gray-600 text-3xl font-semibold">
            My Farms
          </div>
        ) : (
          <div className="flex py-2  text-gray-600 text-2xl ">My Farms</div>
        )}

        <button
          className="flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg"
          onClick={() => setVisible(true)}
        >
          <i data-feather="plus" className=""></i>{" "}
          <p className="pl-1 pr-2"> Add New Farm</p>
        </button>
      </div>
      <TableComponent
        name={"Farms"}
        columns={["name", "size", "county", "ward", "Preview"]}
        data={farms}
      />
      <Dialog
        header="Add New Farm"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <div className="grid grid-cols-6">
          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="Farm Name"
              placeHolder="Farm Name"
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-span-3 p-5">
            <InputElement
              type="number"
              label="Size "
              placeHolder="size in Acerage"
              required={true}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="County"
              placeHolder="County"
              required={true}
              onChange={(e) => setCounty(e.target.value)}
            />
          </div>
          <div className="col-span-3 p-5">
            <InputElement
              type="text"
              label="Ward"
              placeHolder="Ward"
              required={true}
              onChange={(e) => setWard(e.target.value)}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
