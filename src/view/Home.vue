<template>
	<div class="container">
		{{ selectComponents[2]["__config__"] }}
		<!-- <img :src="logo" alt="" /> -->
	</div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
//拖拽
import draggable from "vuedraggable";
//防抖
import { debounce } from "throttle-debounce";
//保存客户端文件的解决方案
import { saveAs } from "file-saver";
//剪切板
import ClipboardJS from "clipboard";
// logo
import logo from "@/assets/logo.png";
import render from "@/components/render/render";
import { getIdGlobal } from "@/utils/db";
import drawingDefalut from "@/components/generator/drawingDefalut";
import {
	inputComponents,
	selectComponents,
	layoutComponents,
	formConf,
} from "@/components/generator/config";
import {
  exportDefault, beautifierConf, isNumberStr, titleCase, deepClone, isObjectObject
} from '@/utils/index'
export default defineComponent({
	components: {
		draggable,
	},
	setup() {
		const idGlobal = getIdGlobal();
		const state = reactive({
			logo,
			idGlobal,
			formConf,
			inputComponents,
			selectComponents,
			layoutComponents,
			labelWidth: 100,
			drawingDefalut,
		});
		return {
			...toRefs(state),
		};
	},
});
</script>
