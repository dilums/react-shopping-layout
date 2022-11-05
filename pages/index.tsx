import SEO from "components/common/Head";
import Description from "components/Description";
import Header from "components/Header";
import Item from "components/Item";
import list from "data/list.json";

export default function Home() {
  return (
    <>
      <SEO title="React Shopping Layout" slug="/" />
      <Header />
      <div className="container mx-auto px-4 mt-4">
        <Description />
      </div>
      <div className="container mx-auto ">
        <div className="flex mt-10 flex-wrap  pb-5 ">
          {list.map((shoeDetails) => (
            <Item {...shoeDetails} key={shoeDetails.key} />
          ))}
        </div>
      </div>
    </>
  );
}
