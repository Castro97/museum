import { CarouselSize } from '@/components/styledCarousel';

export default function Museum() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h2 className='text-2xl font-semibold mb-4'>Museum display</h2>
            <CarouselSize />
        </div>
    );
}
