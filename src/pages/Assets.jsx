import { useEffect, useState, useRef } from "react";
import { AssetForm, Modal, TableComponent } from "../components";
import {
  createFarmAsset,
  deleteFarmAsset,
  getFarmAssets,
  updateFarmAsset,
} from "../api";

import { useAuthContext, useFarmContext } from "../hooks";

export function Assets() {
  const [assets, setAssets] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [asset, setAsset] = useState();
  const { farm } = useFarmContext();
  const { auth } = useAuthContext();

  const effectRun = useRef(false);
  useEffect(() => {
    if (!effectRun.current)
      (async () => {
        const _assets = await getFarmAssets(farm.id);
        setAssets(_assets.content);
      })();
    effectRun.current = true;
    return () => effectRun.current;
  }, [asset]);

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
    if (!isEdit)
      await createFarmAsset({
        ...data,
        farm: { id: farm.id },
        owner: { id: auth.id },
      });
    else await updateFarmAsset(asset.id, data);
    setVisible(false);
	refreshOnUpdateData();
  };

  const onEdit = async (data) => {

    setAsset(data);
    setIsEdit(true);
    setVisible(true);
  };

  const onDelete = async (data) => {

    setAsset(data);
    await deleteFarmAsset(data);
	refreshOnUpdateData()

  };

  return (
    <div className="w-full bg-gray-100 flex flex-col h-screen">
      <div className="flex justify-between w-full px-10 py-5">
        <div className="flex py-2  text-gray-600 text-2xl">Assets</div>
        <button
          className="flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg"
          onClick={() => setVisible(true)}
        >
          <i data-feather="plus" className=""></i>
          <p className="pl-1 pr-2"> Add New Asset</p>
        </button>
      </div>
      <TableComponent
        name={"Assets"}
        columns={["type", "description", "storageLocation", "status"]}
        data={assets}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <Modal visible={visible} setVisible={setVisible}>
        <AssetForm onSubmit={onSubmit} data={asset} />
      </Modal>
    </div>
  );
}
