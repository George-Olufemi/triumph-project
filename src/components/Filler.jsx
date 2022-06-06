import React from "react";

function Filler() {
  return(
    <React.Fragment>
        <div className="bg-blue-200 h-full md:h-screen">
        {/* Code for small screen responsiveness */}
        <div className="md:hidden block">
            <div className="flex justify-center items-center pt-36 pb-36">
              <iframe className="rounded-xl shadow transition-all" width="390" height="350" src="https://www.youtube.com/embed/rmqJq3XejhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        {/* Code for medium and large screen responsiveness */}
          <div className="hidden md:block">
            <div className="flex justify-center items-center pt-36">
              <iframe className="rounded-xl shadow hover:shadow-2xl transition-all duration-500 hover:scale-105" width="790" height="500" src="https://www.youtube.com/embed/rmqJq3XejhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Filler;
