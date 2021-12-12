import { publish } from 'gh-pages';

publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/LarvenLLC/larven-ecosystem.git', // Update to point to your repository
		user: {
			name: 'techven', // update to use your name
			email: 'dev@larven.co.tz' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
