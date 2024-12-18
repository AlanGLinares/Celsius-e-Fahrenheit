    const containerResultado = document.querySelector (".container-resultado")
    const containerResultado2 = document.querySelector (".container-resultado-1")
    const btnC = document.querySelector (".btn-c")
    const btnF = document.querySelector (".btn-f")

    // função de cersiusparaFahrenheit
    function CersiusPFahrenheit () {
      const inputcelsius = document.querySelector (".input-celsius")
      const valueInput = inputcelsius.value
      const resultado = (valueInput * 1.8) + 32
      containerResultado.textContent = `${resultado} °F`
    }
 
    btnC.addEventListener("click" , (elemento) => {
      elemento.preventDefault()
      CersiusPFahrenheit()
    })
    

    // funcao para converter Fahrenhe para Celsius
    function FahrenheitPCelsius (event) {
      const inputfahrenheit = document.querySelector (".input-fahrenheit") 
      const valueInput = inputfahrenheit.value
      const resultado1 = (valueInput - 32) * 5/9
      containerResultado2.textContent = `${resultado1.toFixed(2)}°C`
    }
 
    btnF.addEventListener("click" , (elemento) => {
      elemento.preventDefault()
      FahrenheitPCelsius()
    })