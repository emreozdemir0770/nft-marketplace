module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        purple: {
          "sidebar-active": "#AB52F3",
          "background-banner-1": "#6763FD",
          "background-banner-2": "#B84EF1",
        },
        black: {
          "background-sidebar": "#262D3A",
        },
        gray: {
          "background-icon-1": "#31333D",
          "background-icon-2": "#3D3F49",
          "background-card-activity": "#878787",
        },
      },
      padding: {
        "sidebar-padding": "42.5px",
      },
    },
  },
  plugins: [],
};
