module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      extend: {
        fontSize: {
          14: "14px",
        },
        backgroundColor: {
          "main-bg": "#FAFBFB",
          "main-dark-bg": "#20232A",
          "secondary-dark-bg": "#33373E",
          "cards": "#e1dede",
          "light-gray": "#F7F7F7",
          "half-transparent": "rgba(0, 0, 0, 0.5)",
          "back-edit": "#4884ee",
          "back-delete": "#b91c1c",
        },
        borderWidth: {
          1: "1px",
        },
        borderColor: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        width: {
          400: "400px",
          760: "760px",
          780: "780px",
          800: "800px",
          1000: "1000px",
          1200: "1200px",
          1400: "1400px",
        },
        height: {
          80: "80px",
        },
        minHeight: {
          590: "590px",
        },
        maxWidth: {
          'max-width-lg': '800px',
          'Imagen': '100px',
          'FormNews': '400px',
        },
        minWidth: {
          'lg': '200px',
        },
        backgroundImage: {
          "hero-pattern":
            "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
        },
      },
    },
    plugins: [],
  };