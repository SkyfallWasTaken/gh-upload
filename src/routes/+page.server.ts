import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		return {
			loggedIn: true,
			username: event.locals.user.username
		};
	}
	return {
		loggedIn: false,
		username: null
	};
};
