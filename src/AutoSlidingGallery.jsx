import React, { useEffect, useRef } from "react";

const AutoSlidingGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (galleryRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = galleryRef.current;

        // Check if we've reached the end, and reset to start
        if (scrollLeft + clientWidth >= scrollWidth) {
          galleryRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          galleryRef.current.scrollBy({ left: -clientWidth, behavior: "smooth" }); // Scroll left by a negative value
        }
      }
    }, 2000); // Adjust this delay to control scrolling speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={galleryRef}
        className="flex w-max space-x-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Replace these images with your actual images */}
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}></div>
        <div className="min-w-[300px] h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}></div>
      </div>
    </div>
  );
};

export default AutoSlidingGallery;
