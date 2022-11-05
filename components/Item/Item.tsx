import Color from "components/Color";
import Quantity from "components/Quantity";
import Size from "components/Size";

type ItemProps = {
  title: string;
  image: string;
  alt: string;
  price: string;
  description: string;
  colors: { name: string; background: string }[];
  quantitiyAvailable: number;
  availableSizes: number[];
  freeShipping?: boolean;
  oneLeft?: boolean;
};
export default function Item({
  title,
  image,
  alt,
  price,
  description,
  colors,
  quantitiyAvailable,
  availableSizes,
  freeShipping,
  oneLeft,
}: ItemProps) {
  return (
    <div className=" w-full lg:w-1/3 mt-3 px-4">
      <div className="h-full item  p-4  rounded-lg shadow-lg flex-col flex  ">
        <div className="flex-grow">
          <div className="relative">
            {freeShipping && (
              <div className="tag-free-shipping absolute rounded-tr-lg rounded-bl-lg py-1 px-2 top-0 right-0">
                Free Shipping!
              </div>
            )}
            {oneLeft && (
              <div className="tag-one-left absolute rounded-tr-lg rounded-bl-lg py-1 px-2 top-0 right-0">
                Just One Left!
              </div>
            )}
            <img src={image} alt={alt} className="rounded-lg w-full" />
          </div>
          <div className="flex items-center justify-between my-3">
            <h3 className="text-2xl uppercase font-semibold">{title}</h3>
            <p className="price text-2xl font-semibold italic">{price}</p>
          </div>
          <p className="description text-sm my-4">{description}</p>
        </div>

        <Color colors={colors} />
        <Size availableSizes={availableSizes} />
        <Quantity quantitiyAvailable={quantitiyAvailable} />

        <button
          type="button"
          className="add-to-cart-button py-3 text-lg font-bold mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
