<template>
    <div
        @click="isOn = !isOn"
        class="rounded-full transition ease-in-out duration-75 flex"
        :class="{
            'w-8 h-4': size === 'sm',
            'w-12 h-6': size === 'md',
            'bg-custom-gray-light-3': !isOn,
            'bg-custom-blue-2': isOn,
        }"
    >
        <div
            class="bg-white drop-shadow rounded-full transition ease-in-out duration-125"
            :class="{
                'w-[14px] h-[14px] m-[1px]': size === 'sm',
                'w-[20px] h-[20px] m-[2px]': size === 'md',
                'translate-x-[16px]': isOn && size === 'sm',
                'translate-x-[24px]': isOn && size === 'md',
            }"
        ></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    size: {
        type: String,
        default: "md",
        validator: (value: string) => ["sm", "md"].includes(value),
    },
})
const isOn = ref(false)
</script>
