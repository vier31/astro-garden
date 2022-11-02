<template>
	<VimeoPlayer videoId="videoId" />
</template>

<script>
	import VimeoPlayer from './VimeoPlayer.vue'

	export default {
		components: {
			VimeoPlayer
		},
		data() {
			videoId: '17176675'
		},
	}
</script>