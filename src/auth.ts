import { SvelteKitAuth, type Session } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';

export type ExtendedSession = Session & {
	accessToken: string;
	user: { username: string };
};

export const { handle, signIn } = SvelteKitAuth({
	providers: [
		GitHub({
			authorization: {
				params: {
					scope: 'user:email repo'
				}
			}
		})
	],
	callbacks: {
		async session({ session, token }) {
			const typedSession = session as unknown as ExtendedSession;
			typedSession.accessToken = token.accessToken as string;
			typedSession.user.username = token.username as string; // Add the GitHub username to the session
			return typedSession;
		},
		async jwt({ token, account, profile }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			if (profile) {
				token.username = profile.login; // Extract the GitHub username from the profile
			}
			return token;
		}
	}
});
