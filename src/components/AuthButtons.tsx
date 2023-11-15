import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducer } from '../redux/auth/rootReducer'
import { useRouter } from 'next/dist/client/components/navigation'

export default function AuthButtons() {
	const signState = useSelector((state: rootReducer) => state.signup)
	const dispatch = useDispatch()
	const router = useRouter()

	const handleLogout = () => {
		// Диспетчеризация действия для выхода из авторизации
		dispatch({ type: 'LOGOUT_USER' })

		// Перенаправление на страницу входа (или куда вам нужно)
		router.push('/login')
	}
	const handleResetAuth = () => {
		// Диспетчеризация действия для сброса состояния авторизации
		dispatch({ type: 'RESET_AUTH' })
	}

	return (
		<div className='flex'>
			{signState.loggedInUser ? (
				<div className='flex items-center'>
					<Link href='/cabinet'>
						<p className='mr-2  text-red-400 hover:text-red-600 duration-150 uppercase font-bold'>
							{signState.loggedInUser.userName}
						</p>
					</Link>
					<button
						onClick={() => {
							handleLogout()
							handleResetAuth()
						}}
						className='border-b-2 text-slate-300 hover:bg-pink-500 transition duration-900 hover:text-black rounded-full uppercase font-bold px-3 py-2'
					>
						Выйти
					</button>
				</div>
			) : (
				<Link href='/login'>
					<button className='mr-2 border-b-2 text-slate-300 hover:bg-pink-500 transition duration-900 hover:text-black rounded-full uppercase font-bold px-3 py-2'>
						Войти
					</button>
				</Link>
			)}
		</div>
	)
}

//<Link href='/signup'>
//<button className=' text-slate-300 hover:bg-pink-500 transition duration-900  hover:text-black rounded-full uppercase font-bold px-3 py-2'>
//зарегестрироваться
//</button>
//</Link>
