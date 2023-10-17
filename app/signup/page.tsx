import React from 'react'
import SignUpForm from '../components/SignupForm'

export const metadata = {
	title: 'Sign up',
	description: 'description for the Sign up page'
}

export default function Home() {
	return (
		<div className='mt-[100px] bg-gradient-to-r from-[#24262b] to-white'>
			<SignUpForm />
		</div>
	)
}
