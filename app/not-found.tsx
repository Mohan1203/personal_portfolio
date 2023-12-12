import Link from 'next/link'
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper'

export default function NotFound() {
    return (
        <MaxWidthWrapper>
            <div className='flex flex-col max-w-3xl mx-auto '>
                <div className='bg-gray-50 mt-10 border-2 rounded-lg px-5 text-center'>
                    <h1 className='text-3xl'>404</h1>
                    <h2 >Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/" className='text-blue-500'>Return Home</Link>
                </div>
            </div>
        </MaxWidthWrapper>

    )
}