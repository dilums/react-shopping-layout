import { useState } from "react";
import sizes from "data/sizes.json";

type SizeProps = {
  availableSizes: number[];
};
export default function Size({ availableSizes }: SizeProps) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="">
      <div className="mt-4 mb-2 font-bold">Size</div>
      <div className="flex flex-wrap space-x-2">
        {sizes.map((i, index) => (
          <div
            className={`flex justify-center items-center rounded-md ${
              availableSizes.includes(i)
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
            key={i}
            style={{
              background:
                index === selected
                  ? "linear-gradient(180deg, #A67C7C 0%, #D8A76E 100%)"
                  : "#2a2f33",
              width: "30px",
              height: "30px",
            }}
            onClick={() => {
              if (availableSizes.includes(i)) {
                setSelected(index);
              }
            }}
          >
            <div
              className="flex justify-center items-center rounded-md"
              style={{
                width: "28px",
                height: "28px",
                background: "#2a2f33",
                color: availableSizes.includes(i) ? "#fff" : "#424343",
              }}
            >
              {i}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
