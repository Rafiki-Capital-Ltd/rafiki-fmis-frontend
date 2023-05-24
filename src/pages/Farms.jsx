import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FarmForm, Modal, Navbar, TableComponent } from "../components";
import { createFarm, deleteFarm, getFarms, updateFarm } from "../api";
import { useFarmContext } from "../hooks";

export function Farms() {
  const [farms, setFarms] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [_farm, _setFarm] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { setFarm } = useFarmContext();
  const [isLoading, setIsLoading] = useState(false);

  const effectRun = useRef(false);
  useEffect(() => {
    feather?.replace();
    if (!effectRun.current)
      (async () => {
        const farms = await getFarms();
        setFarms(farms.content);
      })();
    effectRun.current = true;
    return () => effectRun.current;
  }, [visible]);

  const refreshOnUpdateData = () => {
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  };

  const onSubmit = async (data) => {

    try {
      if (!isEdit) {
        const farm = await createFarm(data);
		setIsLoading(true)
        setFarm(farm);
        navigate(`/dashboard/${farm.id}`);
      } else {
        await updateFarm(_farm.id, data);
        setVisible(false);
        refreshOnUpdateData();
      }
    } catch (error) {
      console.error(error);
    }
		setIsLoading(false);
  };

  const onEdit = async (data) => {
    _setFarm(data);
    setIsEdit(true);
    setVisible(true);
  };

  const onDelete = async (data) => {
    _setFarm(data);
    await deleteFarm(data.id).then(() => {
      refreshOnUpdateData();
    });
  };

  return (
    <div className="w-full bg-gray-100 flex flex-col h-screen">
      <div className="bg-white w-full">
        <Navbar />
      </div>

      <div className="flex justify-between w-full px-10 py-5">
        {location === "/farms" ? (
          <div className="flex py-2  text-gray-800 text-3xl font-semibold">
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
        columns={["name", "size", "county", "ward"]}
        data={farms}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <Modal visible={visible} setVisible={setVisible}>
        <FarmForm onSubmit={onSubmit} data={_farm} />
      </Modal>
    </div>
  );
}
