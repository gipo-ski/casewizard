/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Reviews() {
	return (
		<MaxWidthWrapper className='relative max-w-5xl'>
			<img
				src='/what-people-are-buying.png'
				alt='what people are buying arrow'
				aria-hidden='true'
				className='absolute select-none hidden xl:block -left-32 top-1/3'
			/>
			Reviews
		</MaxWidthWrapper>
	);
}
