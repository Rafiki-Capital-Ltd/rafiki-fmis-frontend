import { useState } from 'react';
import { InputElement } from '../InputElement';
	import { ProgressSpinner } from 'primereact/progressspinner';

export function FarmForm({ onSubmit, data }) {
	const [name, setName] = useState(data?.name);
	const [size, setSize] = useState(data?.size || 0);
	const [county, setCounty] = useState(data?.county);
	const [ward, setWard] = useState(data?.ward);
	const [isLoading, setIsLoading] = useState(false);

	return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-3 p-5">
          <InputElement
            type="text"
            label="Farm Name"
            placeHolder="Farm Name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-span-3 p-5">
          <InputElement
            type="number"
            label="Size "
            placeHolder="size in Acerage"
            required={true}
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className="col-span-3 p-5">
          <InputElement
            type="text"
            label="County"
            placeHolder="County"
            required={true}
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />
        </div>
        <div className="col-span-3 p-5">
          <InputElement
            type="text"
            label="Ward"
            placeHolder="Ward"
            required={true}
            value={ward}
            onChange={(e) => setWard(e.target.value)}
          />
        </div>
      </div>
      <div className="text-right">
        <button
          onClick={() => {
            setIsLoading(true), onSubmit({ name, size, county, ward });
          }}
          className="bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md first-letter:"
        >
          {" "}
          <span className="flex gap-x-2">
            {" "}
            {isLoading ? (
              <ProgressSpinner
                style={{ width: "20px", height: "30px" }}
                strokeWidth="8"
                fill="var(--surface-ground)"
                animationDuration=".5s"
                className="text-green-500"
              />
            ) : null}
            <p className="flex items-center">Submit</p>
          </span>
        </button>
      </div>
    </>
  );
}
