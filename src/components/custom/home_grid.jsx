import { useCursor } from "@/context/cursor.context";
import GridCard from "./grid_card";

const HomeGrid = () => {
  const { blendMouseEnter, mouseLeave } = useCursor();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-0">
      {/* grid-1 */}
      <GridCard
        title={"Client-Focused Services"}
        image={"/images/focus.png"}
        gridColor={"mainColor"}
        textColor={"white"}
      />

      {/* grid-2 */}
      <GridCard
        title={"Expert Guidance at Every Turn"}
        image={"/images/guide.png"}
        gridColor={"slate-200"}
        textColor={"black"}
      />

      {/* grid-3 */}
      <GridCard
        title={"Transparency You Can Trust"}
        image={"/images/trust.png"}
        gridColor={"slate-200"}
        textColor={"black"}
      />

      {/* grid-4 */}
      <GridCard
        title={"Extensive Property Listings"}
        image={"/images/property.png"}
        gridColor={"mainColor"}
        textColor={"white"}
      />
    </div>
  );
};

export default HomeGrid;
