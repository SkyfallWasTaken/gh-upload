import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		console.log(event.locals.session);
		return {
			loggedIn: true,
			username: event.locals.user.username,
			accessToken: event.locals.session.accessToken
		};
	}
	return {
		loggedIn: false,
		username: null
	};
};
