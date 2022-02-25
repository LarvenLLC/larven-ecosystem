<script>
	import "papercss/dist/paper.min.css";
	import { Badge, Card } from "spaper";
	export let name;
	export let softwares;
</script>

<main>
	<h1 style="font-size: 3rem; margin-top: 0">{name} software ecosystem</h1>
	<p>Please use company mail (@larven.co.tz) for company related activities</p>
	<div class="row">
		{#each softwares as software}
			<div class="col col-12 md-4 lg-3">
				<a href={software.url} target="_blank" rel="noopener noreferrer" title={software.description}>
					<Card subTitle={`Go to ${software.name}`}>
						<p slot="header">
							<img
								src={software.image}
								style="height: 80px;"
								class="margin-auto"
								alt={software.name}
								title={software.name}
							/>
						</p>
					</Card>
				</a>
			</div>
		{/each}
	</div>
	<!-- count of softwares -->
	<p>
		<Badge type="secondary">{softwares.length}</Badge> softwares
	</p>	
</main>

<style>
	main {
		padding: 1em;
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
