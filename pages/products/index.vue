<script setup>
	definePageMeta({
		layout: 'products',
	})

	// fetch the products 
	const { data: products } = await useFetch('https://fakestoreapi.com/products');

	useHead({
		title: 'Nuxt Dojo | Merch',
		meta: [
			{	name: 'description', content: 'Nuxt 3 Merch' }
		]
	})

</script>


<template>
	<div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products">
				<ProductCard :product="p"/>
			</div>
		</div>
	</div>
</template>

<style lang='scss' scoped>
	h2 {
		color: green;
		// font-size: 3rem;
	}

	p {
		color: blue;
	}
</style>