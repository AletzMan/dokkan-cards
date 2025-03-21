import React from 'react';
import Image from 'next/image';
import { IBannerData, INewData } from '../types';
import { BiCalendar } from 'react-icons/bi';
import { URL_API } from '../constants';
import Link from 'next/link';
import { HiMiniArrowRightCircle } from 'react-icons/hi2';

interface Props {
    banner: IBannerData | INewData;
    aspect_ratio?: string;
}


export function EventCard({ banner, aspect_ratio }: Props) {
    return (
        <div className="relative group">
            <div className="event-card relative overflow-hidden rounded-xl bg-[#16213e] shadow-md shadow-black border-[3px] border-[--blue-border-color] group-hover:shadow-cyan-900">
                <div className={`aspect-[${aspect_ratio ?? "16/10"}] overflow-hidden`}>
                    <Image
                        src={URL_API.concat(banner.image)}
                        alt={banner.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover opacity-90 transform transition-transform group-hover:scale-110 group-hover:opacity-100"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/80 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[2px] transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link className='absolute bottom-2 right-2 flex flex-row items-center  gap-2 px-2 py-[2px] bg-gray-400/20 text-sm hover:text-[--yellow-color] rounded-sm' href={`/${banner.date ? "news" : "benners"}/${banner.id}`}>Detalles<HiMiniArrowRightCircle /></Link>
                    <h3 className="text-sm font-bold text-blue-400 mb-2">{banner.title}</h3>
                    <p className="text-[13px] text-gray-200 mb-2">{banner.description}</p>
                    {banner.startDate && <div className="flex items-center gap-2 text-[--orange-color] mb-1">
                        <BiCalendar className="w-5 h-5" />
                        <span className="text-xs">{banner.startDate}</span>
                    </div>}
                    {banner.endDate && <div className="flex items-center gap-2 text-[--orange-color]">
                        <BiCalendar className="w-5 h-5" />
                        <span className="text-xs">{banner.endDate}</span>
                    </div>}
                    {banner.date && <div className="flex items-center gap-2 text-[--orange-color]">
                        <BiCalendar className="w-5 h-5" />
                        <span className="text-xs">{banner.date}</span>
                    </div>}
                </div>
            </div>
        </div>
    );
}

