
import Avenuedata from '../../data/Avenuedata';

function Avenue() {
  return (
    <>
      {/* Heading Section */}
      <div className="py-5 px-4">

        <h1 className="text-2xl sm:text-3xl text-amber-400 font-bold text-center uppercase">
          Why Dental Avenue
        </h1>

        <p className="text-center mt-3 text-sm sm:text-base leading-6">
          Excellence built on decades of experience, advanced technology, and
          <br className="hidden sm:block" />
          genuinely personalized dental care.
        </p>

      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-8 py-5 max-w-7xl mx-auto">

        {Avenuedata.map((data) => (
          <div
            key={data.id}
            className="w-full min-w-0 py-5 px-5 space-y-5
            border border-amber-400 rounded-2xl
            shadow-md shadow-amber-400/40
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg"
          >

            <img
              src={data.image}
              alt={data.title}
              className="h-10 w-auto object-contain"
            />

            <h2 className="text-xl sm:text-2xl font-bold">
              {data.title}
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-6">
              {data.message}
            </p>

          </div>
        ))}

      </div>
    </>
  );
}

export default Avenue;