import { useState } from "react";

type QuantityProps = {
  quantitiyAvailable: number;
};
export default function Quantity({ quantitiyAvailable }: QuantityProps) {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="mt-4 mb-2 font-bold">Quantitiy</div>
      <svg
        width="280"
        height="45"
        viewBox="0 0 500 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="shoeContainer">
          {Array(quantitiyAvailable)
            .fill(0)
            .map((i, index) => (
              <g
                id="shoe"
                transform={`translate(${index * 100},0)`}
                onClick={() => {
                  if (selected === index && index !== 0) {
                    setSelected(index - 1);
                  } else {
                    setSelected(index);
                  }
                }}
                key={index} // Array is not dynamic
                className="cursor-pointer"
              >
                <rect x="0" y="0" width="100" height="45" fill="#2a2f33" />
                <path
                  id="Vector"
                  d="M1.94189 39.1943C3.42708 42.1868 6.514 44.2497 10.0752 44.2497H75.3004C78.8616 44.2497 81.9487 42.187 83.4337 39.1943H1.94189Z"
                  fill={selected >= index ? "#5067A5" : "#383E44"}
                />
                <path
                  id="Vector_2"
                  d="M75.3005 26.0993H74.2101C69.3607 26.0993 64.6274 24.5304 60.742 21.6598L54.6768 27.7251L51.2223 24.2707L56.9438 18.5491L54.0884 16.1727L47.7786 22.4824L44.3242 19.028L50.3177 13.0345L47.4621 10.6579L40.8804 17.2396L37.4259 13.7852L43.6916 7.51953L38.1432 2.90169C37.4447 2.32015 36.5592 2 35.6502 2C33.5015 2 31.7534 3.74805 31.7534 5.89681V8.01839C31.7534 15.0132 26.0627 20.7039 19.0679 20.7039C14.1582 20.7039 9.64518 17.8286 7.57048 13.3787L6.97331 12.0981C6.46078 10.9989 5.34603 10.2884 4.13314 10.2884C2.4056 10.2884 1 11.694 1 13.422V34.3091H84.3333C83.8962 29.7096 80.0125 26.0993 75.3005 26.0993Z"
                  fill={selected >= index ? "#5067A5" : "#383E44"}
                />
              </g>
            ))}
        </g>
      </svg>
    </>
  );
}
