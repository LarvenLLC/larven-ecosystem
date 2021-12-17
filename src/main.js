import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Larven',
		softwares: [
			{
				name: 'Evernote',
				url: 'https://www.evernote.com/',
				description: 'A note-taking application for Mac, Windows, and Linux.',
				logo: 'https://www.evernote.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/e/37/evernote-icon.svg'
			},
			{
				name: 'Notion',
				url: 'https://larven.notion.site/',
				description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.',
				logo: 'https://www.notion.so/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/n/50/notion.svg'
			},
			{
				name: 'Trello',
				url: 'https://trello.com/b/3S8Dgl8K/currents',
				description: 'A collaborative project management tool for teams.',
				logo: 'https://trello.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/t/55/trello.svg'
			},
			{
				name: 'Github',
				url: 'https://github.com/LarvenLLC/',
				description: 'A web-based Git repository hosting service.',
				logo: 'https://github.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/g/69/github-icon.svg'
			},
			{
				name: 'Mail',
				url: 'https://mail.larven.co.tz/',
				description: 'A free web-based email client.',
				logo: 'https://mail.yandex.com/favicon.ico',
				image: 'https://yastatic.net/s3/mail/homer/_/bd1612535cc988654ce1.ico'
			},
			{
				name: 'Mailchimp',
				url: 'https://mailchimp.com/',
				description: 'A marketing automation platform.',
				logo: 'https://mailchimp.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/m/53/mailchimp-freddie-icon-wink.svg'
			},
			{
				name: 'Mega',
				url: 'https://mega.nz/',
				description: 'A cloud storage service.',
				logo: 'https://mega.nz/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/m/47/mega-icon.svg'
			},
			{
				name: 'Expo',
				url: 'https://expo.io/',
				description: 'A cross-platform mobile app development platform.',
				logo: 'https://expo.io/favicon.ico',
				image: 'https://static.expo.dev/static/brand/square-228x228.png'
			},
			{
				name: 'Discord',
				url: 'https://discord.gg/xKDWGEwkaX',
				description: 'A free, open-source, cross-platform chat and voice-chat application.',
				logo: 'https://discord.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/d/43/discord.svg'
			},
			{
				name: 'Vercel',
				url: 'https://vercel.com/',
				description: 'A hosting service for static websites.',
				logo: 'https://vercel.com/favicon.ico',
				image: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/120x120.png'
			}
		],
	}
});

export default app;