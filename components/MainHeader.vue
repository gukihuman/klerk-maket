<template>
    <div class="pt-6">
        <SvgLogo />
    </div>

    <!-- breadcrumbs -->
    <div
        class="pt-[28px] text-[0.81rem] text-custom-gray-light flex gap-2 justify-center"
    >
        <div v-for="(crumb, i) in breadcrumbs" :key="i" class="flex gap-2">
            <button
                class="hover:text-blue-600 transition ease-in-out duration-75"
            >
                {{ crumb }}
            </button>
            <p v-if="i < breadcrumbs.length - 1">→</p>
        </div>
    </div>
</template>
<script setup lang="ts">
const breadcrumbs = ref(["Главная", "Рассылки", "Хлебные крошки"])
</script>
