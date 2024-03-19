window.onload = () => {
    const headerHeight = $("header").outerHeight() + "px";
    console.log(headerHeight);
    document.documentElement.style.setProperty("--header-height", headerHeight);
};
