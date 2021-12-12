<script>
	import "papercss/dist/paper.min.css";
	import { Button, Card } from "spaper";
	export let name;
	export let softwares;
</script>

<main>
	<h1>{name} software ecosystem</h1>
	<p>Please use company mail (@larven.co.tz) for company related activities</p>
	<div class="row">
		{#each softwares as software}
			<div class="col col-4">
				<Card title={software.name} subTitle={software.description}>
					<p slot="header">
						<img
							src={software.image}
							style="height: 80px;"
							class="margin-auto"
							alt={software.name}
						/>
					</p>
					<p slot="bottom">
						<Button href={software.url} target="_blank">
							Go to {software.name}
						</Button>
					</p>
				</Card>
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.margin-auto {
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
