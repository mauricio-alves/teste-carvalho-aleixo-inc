export function Card({ data }) {

  function handleRating(rating) {
    const rate = Number(rating.slice(0, 3).replace(",", "."));

    if (rate < 0.5) {
      rating = "☆ ☆ ☆ ☆ ☆";
    } else if (rate < 1.5) {
      rating = "★ ☆ ☆ ☆ ☆";
    } else if (rate < 2.5) {
      rating = "★ ★ ☆ ☆ ☆";
    } else if (rate < 3.5) {
      rating = "★ ★ ★ ☆ ☆";
    } else if (rate < 4.5) {
      rating = "★ ★ ★ ★ ☆";
    } else {
      rating = "★ ★ ★ ★ ★";
    }
    return rating;
  }
  return (
    <>
      <div>
        <div className="grid grid-cols-4 font-sans lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {data.map((currentProduct, index) => {
            return (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg m-6"
              >
                <img
                  className="w-full"
                  src={currentProduct.productImageUrl}
                  alt={currentProduct.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {currentProduct.title}
                  </div>
                </div>
                <div className="flex flex-col items-center px-6 pt-4 pb-2">
                  <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-yellow">
                    {handleRating(currentProduct.rating)}
                  </p>
                  <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {currentProduct.reviews}
                    <span> reviews</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
