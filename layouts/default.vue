<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4 flex justify-between">
				<NuxtLink class="font-bold" to='/'>Nuxt Dojo</NuxtLink>
				<ul class="flex gap-4">
					<li><NuxtLink to='/'>Home</NuxtLink></li>
					<li><NuxtLink to='/about'>About</NuxtLink></li>
					<li><NuxtLink to='/products' class="btn">Products</NuxtLink></li>
				</ul>
			</nav>
		</header>
	</div>


	<!-- output the page content-->
	<div class="container mx-auto p-4">
		<slot />
	</div>
</template>

<style scoped>
	.router-link-exact-active {
		color: red;
	}
</style>