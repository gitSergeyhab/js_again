const tabs = (tabSelector, slideSelector, classActive) => {
    const tabList = (document.querySelectorAll(tabSelector));
    const sliders = document.querySelectorAll(slideSelector);

    tabList.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabList.forEach(tabInside => tabInside.classList.remove(classActive));
            tab.classList.add(classActive);
            sliders.forEach(slide => slide.style.display = 'none');
            sliders[i].style.display = 'block';
        });
    })
}

export default tabs;