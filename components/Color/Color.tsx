import { useState } from "react";

type ColorProps = {
  colors: { name: string; background: string }[];
};
export default function Color({ colors }: ColorProps) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="mt-4 mb-2 font-bold">Color</div>
      <div className="flex">
        {colors.map(({ name, background }, index) => (
          <div
            className="flex items-center justify-center mr-2 cursor-pointer"
            style={{ width: "36px", height: "36px" }}
            onClick={() => {
              setSelected(index);
            }}
            key={name}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: "34px",
                height: "34px",
                background: index === selected ? background : "#2a2f33",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: "30px", height: "30px", background: "#2a2f33" }}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "24px",
                    height: "24px",
                    background,
                  }}
                >
                  {index === selected ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.1783 31.8684C15.8667 32.1817 15.4417 32.3567 15 32.3567C14.5583 32.3567 14.1333 32.1817 13.8217 31.8684L4.41167 22.4567C3.435 21.48 3.435 19.8967 4.41167 18.9217L5.59 17.7434C6.56667 16.7667 8.14834 16.7667 9.125 17.7434L15 23.6184L30.875 7.74336C31.8517 6.7667 33.435 6.7667 34.41 7.74336L35.5883 8.9217C36.565 9.89836 36.565 11.4817 35.5883 12.4567L16.1783 31.8684Z"
                        fill="#fff"
                      />
                    </svg>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 italic description">{colors[selected].name}</div>
    </>
  );
}
