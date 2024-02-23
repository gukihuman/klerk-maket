<template>
    <div
        class="bg-white rounded-xl px-4 lg:px-6 py-6 hover:shadow transition-all ease-in-out duration-300 relative flex gap-6"
    >
        <div>
            <p class="text-custom-gray-light text-[0.81rem]">
                {{ data.time }}
            </p>
            <p class="text-xl font-[500]">
                {{ data.title }}
            </p>
            <p class="text-custom-gray text-sm pt-2">
                {{ data.description }}
            </p>
            <ul class="pt-4 flex flex-col gap-2 text-sm">
                <li
                    v-for="(feature, i) in data.features"
                    :key="i"
                    class="flex gap-2"
                    :class="{ 'font-[500]': feature.bold }"
                >
                    <SvgCheckmark />
                    <p>{{ feature.text }}</p>
                </li>
            </ul>
            <div class="pt-6 flex gap-4 text-sm items-center">
                <Switch />
                <p class="pb-[2px]">
                    {{ `Уже получает ${data.users} человек` }}
                </p>
            </div>
        </div>
        <img
            :src="data.image"
            class="absolute lg:static w-10 h-10 lg:w-20 lg:h-20 top-6 right-4"
        />
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
