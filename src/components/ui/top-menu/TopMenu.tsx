'use client';

import { titleFont } from '@/config/font'
import { IoSearchOutline, IoCartOutline, IoStatsChartOutline } from 'react-icons/io5';

import Link from 'next/link'
import React from 'react'
import { useUIStore } from '@/store';

export const TopMenu = () => {
    const openSideMenu = useUIStore( state => state.openSideMenu );

    return (
        <nav className="flex px-5  justify-between items-center w-full">

            <div>
                <Link href="/"><span className={`${titleFont.className} antialiased font-bold `}>Top menu</span></Link>
                <span className={`${titleFont.className} antialiased font-bold `}> | shop </span>
            </div>

            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    href="/category/men"> hombres
                </Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    href="/category/women"> mujeres
                </Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    href="/category/kids"> niños
                </Link>
            </div>

            <div className="flex items-center">
                <Link href={"/search"} className="mx-2">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>

                <Link href={"/cart"} className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button  onClick={ openSideMenu } className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                    menú
                </button>
            </div>
        </nav>
    );
};
