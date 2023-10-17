'use client'

function CardMain({ imageSrc, name, price, location, description }) {
	return (
		<div className='flex w-1/2 border-2 hover:border-sky-300 duration-150 border-gray-300 rounded-md p-4 ml-8 mb-4 '>
			<img
				src={imageSrc}
				alt={name}
				className='w-[118px] h-[90px] rounded-md object-cover '
			/>
			<div className='ml-4 flex-1'>
				<div className='flex justify-between'>
					<h2 className='text-xl font-bold'>{name}</h2>
					<p className='text-gray-600 text-sm mb-2'>Сегодня в 14:13</p>
				</div>
				<div className='flex items-center '>
					<p className='text-gray-600 text-lg mr-8'>{price}</p>
					<address className='text-gray-400 text-xs'>{location}</address>
				</div>
				<p className='mt-2'>{description}</p>
			</div>
		</div>
	)
}

export default CardMain
