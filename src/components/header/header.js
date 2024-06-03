function handleScroll(e) {
    if (window.innerWidth > 600) {
        document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    }
}
window.addEventListener("scroll", handleScroll);

// window.addEventListener("scroll", e => {
//     document.body.style.cssText = `--scrollTop: ${scrollY}px`
// });


