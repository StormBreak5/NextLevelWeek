window.onload = setTimeout(() => {
    const url = document.querySelector("#button-access").getAttribute("href")
    location.href = url
}, 2000)