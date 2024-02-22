<template>
    <div>
        <h1
            class="pt-2 lg:pt-4 font-[500] text-[2rem] lg:text-[3.5rem] text-center"
        >
            Подписки «Клерка»
        </h1>

        <!-- Tabs section -->
        <div class="pt-4 text-md text-custom-gray flex gap-2 justify-center">
            <div
                v-for="(tab, i) in tabs"
                :key="i"
                class="flex flex-col h-10 justify-between"
            >
                <button
                    @click="selectedIndex = i"
                    class="px-2 hover:text-blue-600 transition ease-in-out duration-75"
                    :class="{
                        'text-custom-blue font-[500]': selectedIndex === i,
                    }"
                >
                    {{ tab }}
                </button>

                <!-- Bottom line when tab is selected -->
                <Transition name="fade">
                    <div
                        v-if="selectedIndex === i"
                        class="h-[2px] w-full bg-custom-blue"
                    ></div>
                </Transition>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const tabs = ref(["Рассылки", "Соцсети", "Мессенджеры"])
const selectedIndex = ref(0)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 100ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.6.0 */ {
    opacity: 0;
}
</style>
