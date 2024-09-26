import { useCursor } from "@/context/cursor.context";

const HomeGrid = () => {
  const { blendMouseEnter, mouseLeave } = useCursor();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-0">
      {/* grid-1 */}
      <div
        onMouseEnter={blendMouseEnter}
        onMouseLeave={mouseLeave}
        className="bg-slate-200 h-64 md:h-auto rounded-lg lg:rounded-3xl p-8 flex items-center justify-end"
      >
        <h2 className="lg:text-4xl font-bold md:text-3xl">
          Expert Guidance at Every Turn
        </h2>
        <img
          src="/images/guide.png"
          alt="trust"
          loading="lazy"
          className="w-32 lg:w-full"
        />
      </div>

      {/* grid-2 */}
      <div className="bg-mainColor rounded-lg lg:rounded-3xl p-8 flex items-center justify-center text-white  lg:text-3xl font-bold">
        <img
          src="/images/property.png"
          alt="trust"
          loading="lazy"
          className="w-32 lg:w-full"

        />
        <h2>Extensive Property Listings</h2>
      </div>

      {/* grid-3 */}
      <div className="bg-mainColor rounded-lg lg:rounded-3xl p-8 flex items-center justify-center text-white  lg:text-3xl font-bold">
        <img
          src="/images/focus.png"
          alt="trust"
          loading="lazy"
          className="w-32 lg:w-full"

        />

        <h2>Client-Focused Services</h2>
      </div>

      {/* grid-4 */}
      <div
        onMouseEnter={blendMouseEnter}
        onMouseLeave={mouseLeave}
        className="bg-slate-200 h-64 md:h-auto rounded-lg lg:rounded-3xl p-8 flex items-center justify-center lg:text-3xl font-bold"
      >
        <h2>Transparency You Can Trust</h2>
        <img
          src="/images/trust.png"
          alt="trust"
          loading="lazy"
          className="w-32 lg:w-full"

        />
      </div>
    </div>
  );
};

export default HomeGrid;
