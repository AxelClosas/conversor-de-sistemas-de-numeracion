let $convertir = document.querySelector('.btn-convertir')

$convertir.addEventListener('click', (e) => {
  e.preventDefault()
  let $pResultado = document.querySelector('#resultado')
  $pResultado.innerHTML = ''

  const $inputNumero = document.querySelector('.numero-original')
  let numero = $inputNumero.value.trim()

  const $inputBase = document.querySelector('.base-original')
  let base = $inputBase.value.trim()

  const $inputBaseDestino = document.querySelector('.base-destino')
  const baseDestino = Number($inputBaseDestino.value)

  if (baseDestino !== 0 && baseDestino !== 1) {
    let primerValor = descomposicionPolinomica(numero, base)
    let valorFinal = divisionesSucesivas(primerValor, baseDestino)

    $pResultado.innerHTML = formatearResultado(numero, base, valorFinal, baseDestino)
  } else {
    $pResultado.innerText = `La base destino no puede ser ${baseDestino}`
  }

})

function descomposicionPolinomica(numero, base) {
  let resultado = 0
  for (let i = 0; i < numero.length; i++) {
    let num = Number(valorHexadecimal(numero[i]))
    let exponente = numero.length - i - 1
    resultado += num * Math.pow(base, exponente)
  }
  return resultado
}

function divisionesSucesivas(numero, baseDestino) {
  let restos = []
  let resultado = 0
  let resultadoFinal = ''
  let resto = 0

  do {
    resultado = Math.trunc(numero / baseDestino)
    resto = valorHexadecimal(numero % baseDestino)
    restos.push(resto)
    numero = resultado
  } while (numero >= baseDestino)

  restos.push(valorHexadecimal(resultado))

  restos.reverse()

  resultadoFinal = restos.join('')

  return resultadoFinal
}

function valorHexadecimal(numero) {
  numero = typeof numero === 'string' ? numero.toLocaleUpperCase() : numero
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

    case 'A':
      return 10
      break

    case 'B':
      return 11
      break

    case 'C':
      return 12
      break

    case 'D':
      return 13
      break

    case 'E':
      return 14
      break

    case 'F':
      return 15
      break

    default:
      return numero
      break
  }
}

function formatearResultado(numeroOriginal, baseOriginal, numeroFinal, baseFinal) {
  return `El número <strong>${numeroOriginal}</strong> con base <strong>${baseOriginal}</strong> es igual a <strong>${numeroFinal}</strong> en base <strong>${baseFinal}</strong>`
}