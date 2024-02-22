/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "Arial", "sans-serif"],
            },
            colors: {
                "custom-gray-light": "#999999",
                "custom-gray-light-2": "#F5F5F8",
                "custom-gray-light-3": "#DCDCDC",
                "custom-gray": "#666666",
                "custom-blue": "#5A8CF1",
                "custom-blue-2": "#316FEE",
            },
        },
    },
    plugins: [],
}
