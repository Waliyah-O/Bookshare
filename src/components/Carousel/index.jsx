import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="carousel carousel-center max-w-5xl p-4 space-x-4 bg-slate-800 rounded-box text-white flex gap-4">
        <div className="carousel-item w-1/2 flex flex-col items-center">
          <h3 className="text-3xl font-bold">Quality Education</h3>
          <h4 className="text-lg">
            {" "}
            Impact: Providing access to quality education for all.
          </h4>
          <p className="p-4 w-3/4  text-center text-sm">
            Every book donated contributes to creating a world where every child
            and adult has the opportunity to learn, grow, and thrive. Together,
            let's bridge the education gap.
          </p>
        </div>

        <div className="carousel-item w-1/2 flex flex-col items-center">
          <h3 className="text-3xl font-bold">No Poverty</h3>
          <h4 className="text-lg">
            Impact: Alleviating poverty through knowledge.
          </h4>
          <p className="p-4 w-3/4  text-center text-sm">
            Books are a powerful tool to break the cycle of poverty. Your book
            donations open doors to new opportunities, empower individuals, and
            foster economic growth.
          </p>
        </div>

        <div className="carousel-item w-1/2 flex flex-col items-center">
          <h3 className="text-3xl font-bold">Reduced Inequalities</h3>
          <h4 className="text-lg">
            {" "}
            Impact: Promoting inclusivity and reducing inequality.
          </h4>
          <p className="p-4 w-3/4  text-center text-sm">
            Books can be a bridge, connecting diverse communities and narrowing
            the knowledge divide. Your donations promote inclusivity and
            understanding among people of different backgrounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
