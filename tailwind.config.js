/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                'primary': ['DM Sans', 'sans-serif'],
                'secondary': ['Poppins', 'sans-serif'],
                'cursive': ['Righteous', 'cursive']
            },
        }
    },
    daisyui: {
        themes: [
            {
                mytheme: {   
                    "primary": "#F57B1B",
                    "secondary": "#1518BB",
                    "accent": "#AC0407",  
                    "neutral": "#ffffee",           
                    "base-100": "#0C0404",   
                    "info": "#FFFFFF",   
                    "success": "#1B6F5F",    
                    "warning": "#FBAC0E",   
                    "error": "#F20D42",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
