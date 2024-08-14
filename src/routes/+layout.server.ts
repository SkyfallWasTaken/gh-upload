import type { LayoutServerLoad } from './$types';
import type { ExtendedSession } from '../auth';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();

	if (!session) {
		// Handle the case where session is null
		console.log('No session found');
		return {
			session: null
		};
	}

	const typedSession = session as unknown as ExtendedSession;
	console.log('session', typedSession);

	return {
		session: typedSession
	};
};
