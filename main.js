function upatCrock() {

    const clockElement = document.querySelector('.clock')
    const horasElement = document.querySelector('.horas')
    const minutosElement = document.querySelector('.minutos')
    const segundosElement = document.querySelector('.segundos')

    const now = new Date()

    const horas = now.getHours().toString().padStart(2, "0")
    const minutos = now.getMinutes().toString().padStart(2, "0")
    const segundos = now.getSeconds().toString().padStart(2, "0")

    horasElement.textContent = horas
    minutosElement.textContent = minutos
    segundosElement.textContent = segundos
}

setInterval(upatCrock, 1000)
upatCrock()