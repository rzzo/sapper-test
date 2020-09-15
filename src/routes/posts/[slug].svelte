<script context="module">
	export async function preload({ params }) {
		await this.redirect(301, "news/" + params.slug);
	}
	</script>
