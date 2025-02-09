const symbolElement = document.querySelector(".symbol");
let Index = 0;
const colorThemes = [
  {
    primary_color: "#adf0d4",
    secondary_color: "#1fd8a4",
    bg_color: "#0d1512",
  },
  {
    primary_color: "#a0e4f1",
    secondary_color: "#17a2b8",
    bg_color: "#002b36",
  },
  {
    primary_color: "#ffe4e1",
    secondary_color: "#ff9aa2",
    bg_color: "#2b1a1e",
  },
  {
    primary_color: "#ffdd67",
    secondary_color: "#ff8c42",
    bg_color: "#2d1b00",
  },
  {
    primary_color: "#ffbe76",
    secondary_color: "#ff3838",
    bg_color: "#2c0600",
  },
  {
    primary_color: "#ffb400",
    secondary_color: "#d84315",
    bg_color: "#120d04",
  },
];

if (symbolElement) {
  symbolElement.addEventListener("click", () => {
    Index += 1;
    const colorTheme = colorThemes[Index % colorThemes.length];
    document.documentElement.style.setProperty(
      "--primary-color",
      colorTheme.primary_color
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      colorTheme.secondary_color
    );
    document.documentElement.style.setProperty(
      "--bg-color",
      colorTheme.bg_color
    );
  });
} else {
  console.log("Element with class 'symbol' not found.");
}
