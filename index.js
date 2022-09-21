const replaceText = () => {
    const pText = document.querySelector('#text');
    pText.textContent = 'This is really cool!';
}
document.addEventListener('DOMContentLoaded', replaceText)
