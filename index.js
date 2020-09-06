function colorMode() {
	var element = document.getElementById('color-mode');
	var border = document.getElementById('border');
	if (element.classList.value === 'fa fa-sun fa-stack-1x') {
		element.classList.value = 'fa fa-moon fa-stack-1x';
		border.classList.value = 'far fa-circle fa-stack-2x moon-icon-border';
		document.getElementsByClassName("hero")[0].style.backgroundColor = '#1F2023';
		document.getElementsByClassName("navbar")[0].style.backgroundColor = '#1F2023';
		document.getElementById('subtitle').classList.value = 'moon';
		document.getElementById('title').classList.value = 'moon';
		document.getElementById('brand').classList.value = 'moon';
	}
	else {
		element.classList.value = 'fa fa-sun fa-stack-1x';
		border.classList.value = 'far fa-circle fa-stack-2x sun-icon-border';
		document.getElementsByClassName("hero")[0].style.backgroundColor = '#F8FAFF';
		document.getElementsByClassName("navbar")[0].style.backgroundColor = '#F8FAFF';
		document.getElementById('subtitle').classList.value = 'sun';
		document.getElementById('title').classList.value = 'sun';
		document.getElementById('brand').classList.value = 'sun';
	}
}