function openNav(event) {
    const nextEl = event.target.nextElementSibling;
	nextEl && nextEl.classList.toggle('active');
}
