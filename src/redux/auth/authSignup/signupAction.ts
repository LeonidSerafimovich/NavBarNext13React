export const signupUser = (userName: string, email: string) => {
	return {
		type: 'SIGNUP_USER',
		payload: {
			userName,
			email
		}
	}
}
