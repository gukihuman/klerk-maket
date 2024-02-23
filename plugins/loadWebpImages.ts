type WebpPaths = { [fileName: string]: string }
export const webpPaths: WebpPaths = {}
export default defineNuxtPlugin(async () => {
    await loadWebpPaths(import.meta.glob("@/assets/**/*"), webpPaths)
})

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
    return `${match[1].toLowerCase()}`
}
