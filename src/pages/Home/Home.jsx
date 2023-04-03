import { Navbar } from "../../componets/Navbar/Navbar";
import { Card } from "../../componets/Cards/Card";
import { news } from "../../Datas.js";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item, index) => {
          return <Card key={index} news={item} />;
        })}
      </HomeBody>
    </>
  );
}
