<template>
	<router-view />
</template>
<script>
import { defineComponent, onMounted, getCurrentInstance } from "vue";

export default defineComponent({
	setup() {
		// const { proxy } = getCurrentInstance();
		// console.log(proxy.$axios);

		onMounted(() => {
			//取消开始loading动画
			const preLoader = document.querySelector("#pre-loader");
			if (preLoader) {
				preLoader.style.display = "none";
			}
		});
	},
});
</script>
