<script setup>
	

	definePageMeta({
		layout: 'products',
	})

	// fetch the products 
	const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>


<template>

	<div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products">

				<!--- using a colon to data-bind -->
				<NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
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