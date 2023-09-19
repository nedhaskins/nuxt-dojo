<template>

	<h2>This is the about page!</h2>
		<p>Overhaul aye Spanish Main booty bilge bucko sheet draught lee lugger. Pirate brig careen coffer man-of-war tackle six pounders to go on account Brethren of the Coast wherry. Trysail avast line run a shot across the bow bowsprit bounty flogging cutlass wherry grapple. Hempen halter keelhaul Gold Road knave Arr matey long boat jib to go on account overhaul.</p>
		<div>{{ data }}</div>
</template>



<script setup>
	const { data } = await useFetch('/api/ninja' 
	// {method: 'post',body: { age: 30 }}
	)
</script>


<style lang='scss' scoped>
	
		
</style>