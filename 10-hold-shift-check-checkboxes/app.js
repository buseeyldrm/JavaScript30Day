/*Bir kullanıcı onay ktusuna tıkladığında Shift tuşuna basılı tutar ve ardından birkaç satır aşağıda başka bir onay kutusuna tıkladığında bu ikş onay kutusu arasındaki tüm onay kutuları işaretlenmeli.*/ 

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }

        });
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));