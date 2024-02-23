<template>
    <div
        class="bg-custom-gray-light-2 px-4 lg:px-6 py-8 lg:pb-12 max-w-[1024px] mx-auto"
    >
        <h1 class="font-[500] text-2xl lg:text-center">
            Выберите рассылки, которые подходят именно вам
        </h1>

        <!-- input section -->
        <div class="relative pt-4 pr-7 lg:mx-6">
            <input
                placeholder="Электронная почта"
                class="w-full rounded-md h-14 pl-4 focus:outline-custom-blue"
            />
            <button
                class="rounded-full absolute right-0 w-14 lg:w-fit lg:px-8 h-14 bg-custom-blue-2 hover:bg-blue-400 transition ease-in-out duration-75"
            >
                <SvgArrowRight class="lg:hidden" />
                <p class="hidden lg:block text-white">Подписаться</p>
            </button>
        </div>

        <div class="pt-4 flex items-center gap-2 lg:px-6">
            <Switch size="sm" />
            <p class="text-sm">Подписаться на все рассылки</p>
        </div>

        <ul class="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">
            <li v-for="(mailingItem, i) in mailingData" :key="i">
                <MailingItem :data="mailingItem" />
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
type Feature = {
    text: string
    bold: boolean
}
export type MailingItem = {
    time: string
    title: string
    description: string
    features: Feature[]
    users: number
    image: string
}
type WebpPaths = { [fileName: string]: string }
const webpPaths: WebpPaths = {}
const mailingData: Ref<MailingItem[]> = ref([])
onMounted(async () => {
    await loadWebpPaths(import.meta.glob("@/assets/**/*"), webpPaths)
    setMailingData()
})
const setMailingData = () => {
    mailingData.value = [
        {
            time: "Перед рассветом",
            title: "Утренний бухгалтер",
            description:
                "Самые важные новости и события за день. Кратко, по делу, структурировано.",
            features: [
                {
                    text: "Новости для бухгалтеров, ИП и директора",
                    bold: false,
                },
                {
                    text: "Подборка статей за день",
                    bold: false,
                },
            ],
            users: 59342,
            image: webpPaths["item-1"],
        },
        {
            time: "После заката",
            title: "Ночной бухгалтер",
            description:
                "Самая краткая газета о налогах и бухучете в мире — современная рассылка для вечернего чтения.",
            features: [
                {
                    text: "Анализ, оценка и только самое главное",
                    bold: false,
                },
                {
                    text: "Лучшие комменты юзеров в обзоре",
                    bold: false,
                },
            ],
            users: 37480,
            image: webpPaths["item-2"],
        },
        {
            time: "Раз в две недели",
            title: "Ножницы скидок",
            description:
                "Подборка самых выгодных и полезных спецпредложений от надежных компаний.",
            features: [
                {
                    text: "Акции и скидки от лидеров рынка",
                    bold: false,
                },
                {
                    text: "Те, кто подписался – экономят много денег",
                    bold: false,
                },
            ],
            users: 92118,
            image: webpPaths["item-3"],
        },
        {
            time: "По мере появления анонсов",
            title: "Чемодан вебинаров",
            description:
                "Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.",
            features: [
                {
                    text: "Никогда не пришлем платные вебинары",
                    bold: true,
                },
                {
                    text: "Подборка топовых тем для вебинаров",
                    bold: false,
                },
            ],
            users: 92082,
            image: webpPaths["item-4"],
        },
    ]
}

/** Took an object from import.meta.glob function and creates a WebpPaths
 * object with paths to webp images. import.meta.glob must be used with a direct string path, not variable (that's why it cannot be used inside this function, otherwise path must be incapsulated inside too). */
async function loadWebpPaths(
    paths: Record<string, () => Promise<Record<string, any>>>,
    savePlace: WebpPaths
) {
    for (const path in paths) {
        const name = parseFileName(path)
        if (!name) continue
        const item = await paths[path]()
        savePlace[name] = item.default // it's a string - path to a file
    }
}

/** Extract file name from path without extension.
 * "/path/to/file.webp" -> "file" */
function parseFileName(path: string) {
    let match: any[] | null = null
    match = path.match(/\/([^/]+)\.webp/)
    if (!match) return
    return `${match[1]}`
}
</script>
