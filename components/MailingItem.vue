<template>
    <div
        class="bg-white rounded-xl p-4 hover:shadow transition-all ease-in-out duration-300"
    >
        <p>{{ data.time }}</p>
    </div>
</template>
<script setup lang="ts">
import type { MailingItem } from "./Mailings.vue"
const props = defineProps({
    data: { type: Object as PropType<MailingItem>, default: {} },
})
</script>
<style>
.shadow {
    box-shadow: 0px 8px 16px 0px #00000014;
}
</style>
