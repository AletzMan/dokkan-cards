import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { IBannerData } from "../types";
import Image from "next/image"
import { URL_API } from "../constants";
import { useState } from "react";

interface Props {
    banners: IBannerData[];
}

export function CarrouselBanners({ banners }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const changeSlide = (newIndex: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsTransitioning(false);
        }, 500); // Match this with CSS transition duration
    };

    const nextBanner = () => {
        const newIndex = (currentIndex + 1) % banners.length;
        changeSlide(newIndex);
    };

    const prevBanner = () => {
        const newIndex = (currentIndex - 1 + banners.length) % banners.length;
        changeSlide(newIndex);
    };
    return (
        <div className="min-h-screen   text-white w-full max-w-screen-xl">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 ">
                {/* Banner Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
                        <div className="absolute w-full h-full bg-[linear-gradient(0deg,#000000,transparent)] z-[2]"></div>
                        <div className="absolute w-full h-full bg-[linear-gradient(90deg,#000000,transparent_30%)] z-[2]"></div>
                        <div className="absolute w-full h-full bg-[linear-gradient(-90deg,#000000,transparent_30%)] z-[2]"></div>
                        <div className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <Image
                                src={URL_API.concat(banners[currentIndex].image)}
                                alt={banners[currentIndex].title}
                                width={640} height={360}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-[3]">
                                <h2 className="text-3xl font-bold text-[#ffd700] mb-2">
                                    {banners[currentIndex].title}
                                </h2>
                                <p className="text-lg text-gray-200">
                                    {banners[currentIndex].description}
                                </p>
                                <p className="text-sm text-[#ff9b00] mt-2">
                                    {banners[currentIndex].startDate}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevBanner}
                        disabled={isTransitioning}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm px-1 py-4 rounded-l-md hover:bg-[--orange-opacity-color] hover:text-[--orange-color] transition-colors disabled:opacity-50 z-[3]"
                    >
                        <BiLeftArrow />
                    </button>
                    <button
                        onClick={nextBanner}
                        disabled={isTransitioning}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 px-1 py-4 rounded-r-md hover:bg-[--orange-opacity-color] hover:text-[--orange-color] transition-colors disabled:opacity-50 z-[3]"
                    >
                        <BiRightArrow />
                    </button>
                </div>

                {/* Banner Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            disabled={isTransitioning}
                            onClick={() => changeSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-[#ffd700]' : 'bg-gray-600'
                                } disabled:opacity-50`}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}