import {
	faInstagram,
	faTwitter,
	faLinkedin,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FollowUsSection = () => {
	return (
		<div className='mt-6 text-2xl text-gray-300'>
			<div className='flex flex-row flex-wrap cursor-pointer '>
				<FontAwesomeIcon
					icon={faInstagram}
					className='hover:text-pink-600 ease-in-out w-9 mr-6 hover:scale-300 duration-200'
				/>
				<FontAwesomeIcon
					icon={faTwitter}
					className='hover:text-sky-600 ease-in-out w-9 mr-6 hover:scale-300 duration-200'
				/>
				<FontAwesomeIcon
					icon={faLinkedin}
					className='hover:text-yellow-500 ease-in-out w-9 mr-6 hover:scale-300 duration-200'
				/>
				<FontAwesomeIcon
					icon={faFacebook}
					className='hover:text-blue-600 ease-in-out w-9 mr-6 hover:scale-300 duration-200'
				/>
			</div>
		</div>
	)
}

export default FollowUsSection
