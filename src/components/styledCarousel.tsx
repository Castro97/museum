import Image from 'next/image';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import useAssets from '@/hooks/useAssets';

export function CarouselSize() {
    const museumImages = useAssets();
    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className='w-full max-w-lg'>
            <CarouselContent>
                {museumImages.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className='basis-full sm:basis-1/2 md:basis-1/3'>
                        <div className='p-2'>
                            <Card>
                                <CardContent className='flex aspect-square items-center justify-center p-4'>
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.alt}
                                        width={128}
                                        height={128}
                                        className='rounded-lg object-cover'
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
