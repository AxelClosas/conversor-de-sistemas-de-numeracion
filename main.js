let $convertir = document.querySelector('.btn-convertir')

$convertir.addEventListener('click', (e) => {
  e.preventDefault()
  let $pResultado = document.querySelector('#resultado')
  $pResultado.innerHTML = ''

  const $inputNumero = document.querySelector('.numero-original')
  let numero = $inputNumero.value

  const $inputBase = document.querySelector('.base-original')
  let base = $inputBase.value

  const $inputBaseDestino = document.querySelector('.base-destino')
  const baseDestino = Number($inputBaseDestino.value)

  if (baseDestino === 10 || baseDestino === 0)
    $pResultado.innerText = Number(descomposicionPolinomica(numero, base))

  if (baseDestino > 0 && baseDestino !== 10) {
    let primerValor = descomposicionPolinomica(numero, base)
    let valorFinal = divisionesSucesivas(primerValor, baseDestino)
    $pResultado.innerText = valorFinal
  }

})

function descomposicionPolinomica(numero, base) {
  let resultado = 0
  for (let i = 0; i < numero.length; i++) {
    let num = Number(numero[i])
    let exponente = numero.length - i - 1
    resultado += num * Math.pow(base, exponente)
  }
  return resultado
}

function divisionesSucesivas(numero, baseDestino) {
  let restos = []
  let resultado = 0
  let resultadoFinal = ''

  do {
    resultado = Math.trunc(numero / baseDestino)
    restos.push(valorHexadecimal(numero % baseDestino, baseDestino))
    numero = resultado
  } while (numero >= baseDestino)
  restos.push(resultado)

  restos.reverse()

  resultadoFinal = restos.join('')

  return resultadoFinal
}

function valorHexadecimal(numero, baseDestino) {
  switch (numero) {
    case 10:
      return 'A'
      break

    case 11:
      return 'B'
      break

    case 12:
      return 'C'
      break

    case 13:
      return 'D'
      break

    case 14:
      return 'E'
      break

    case 15:
      return 'F'
      break
    default:
      return numero
      break
  }
}