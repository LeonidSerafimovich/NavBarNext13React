export type EmailPassword = Email & {
	password: string
}

export type Email = {
	email: string
}

export type User = EmailPassword & {
	login: string
	userName: string
}

export type RegistrarionData = EmailPassword &
	Pick<User, 'userName'> & {
		repeatPassword: string
	}
