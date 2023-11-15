export const loginUser = (email: string) => {
	return {
		type: 'LOGIN_USER',
		payload: email
	}
}
