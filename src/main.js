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
				image: 'https://cdn.cdnlogo.com/logos/e/37/evernote-icon.svg',
				departments: ['Product', 'Marketing', 'Sales', 'Support'],
			},
			{
				name: 'Notion',
				url: 'https://larven.notion.site/',
				description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.',
				logo: 'https://www.notion.so/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/n/50/notion.svg',
				departments: ['Product', 'Marketing', 'Sales', 'Support'],
			},
			{
				name: 'Trello',
				url: 'https://trello.com/b/3S8Dgl8K/currents',
				description: 'A collaborative project management tool for teams.',
				logo: 'https://trello.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/t/55/trello.svg',
				departments: ['Product', 'Technology']
			},
			{
				name: 'Github',
				url: 'https://github.com/LarvenLLC/',
				description: 'A web-based Git repository hosting service.',
				logo: 'https://github.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/g/69/github-icon.svg',
				departments: ['Technology', 'Product']
			},
			{
				name: 'Mail',
				url: 'https://mail.larven.co.tz/',
				description: 'A free web-based email client.',
				logo: 'https://mail.yandex.com/favicon.ico',
				image: 'https://yastatic.net/s3/mail/homer/_/bd1612535cc988654ce1.ico',
				departments: ['Technology', 'Product', 'Marketing', 'Sales', 'Support']
			},
			{
				name: 'Mailchimp',
				url: 'https://mailchimp.com/',
				description: 'A marketing automation platform.',
				logo: 'https://mailchimp.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/m/53/mailchimp-freddie-icon-wink.svg',
				departments: ['Marketing', 'Sales', 'Support']
			},
			{
				name: 'Mega',
				url: 'https://mega.nz/',
				description: 'A cloud storage service.',
				logo: 'https://mega.nz/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/m/47/mega-icon.svg',
				departments: ['Product', 'Marketing', 'Sales', 'Support', 'Technology', 'Human Resources']
			},
			{
				name: 'Expo',
				url: 'https://expo.io/',
				description: 'A cross-platform mobile app development platform.',
				logo: 'https://expo.io/favicon.ico',
				image: 'https://static.expo.dev/static/brand/square-228x228.png',
				departments: ['Product', 'Technology']
			},
			{
				name: 'Discord',
				url: 'https://discord.gg/xKDWGEwkaX',
				description: 'A free, open-source, cross-platform chat and voice-chat application.',
				logo: 'https://discord.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/d/43/discord.svg',
				departments: ['Product', 'Marketing', 'Sales', 'Support', 'Technology', 'Human Resources']
			},
			{
				name: 'Vercel',
				url: 'https://vercel.com/',
				description: 'A hosting service for static websites.',
				logo: 'https://vercel.com/favicon.ico',
				image: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/120x120.png',
				departments: ['Product', 'Technology', 'Marketing']
			},
			{
				name: 'Firebase',
				url: 'https://console.firebase.google.com/',
				description: 'A cloud platform for hosting, managing, and deploying applications.',
				logo: 'https://firebase.google.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/f/48/firebase.svg',
				departments: ['Product', 'Technology', 'Marketing']
			},
			{
				name: 'Dropbox',
				url: 'https://www.dropbox.com/',
				description: 'A cloud storage service.',
				logo: 'https://www.dropbox.com/favicon.ico',
				image: 'https://cdn.cdnlogo.com/logos/d/36/dropbox.svg',
				departments: ['Product', 'Marketing', 'Sales', 'Support', 'Technology', 'Human Resources']
			},
			{
				name: 'Tenda Mpya',
				url: 'https://tendampya.co.tz/',
				description: 'A platform for business tenders in Tanzania.',
				logo: 'https://tendampya.co.tz/favicon.ico',
				image: 'https://tendampya.co.tz/img/tz_tendampya.png',
				departments: ['Communications', 'Legal', 'Support']
			},
			{
				name: 'Zabuni',
				url: 'https://zabuni.co.tz/',
				description: 'A platform for business tenders in Tanzania.',
				logo: 'https://zabuni.co.tz/frontend/assets/img/favicon.png',
				image: 'https://zabuni.co.tz/storage/setting/1620593171.png',
				departments: ['Communications', 'Legal', 'Support']
			},
		],
	}
});

export default app;