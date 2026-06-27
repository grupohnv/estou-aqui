/**
 * ResponseQualityPipeline
 * Normaliza o texto final antes de exibir ao usuário.
 */
export function processResponse(text: string): string {
  let result = text

  // remove caracteres de controle estranhos (exceto \n)
  result = result.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')

  // normaliza múltiplas quebras de linha em no máximo 2
  result = result.replace(/\n{3,}/g, '\n\n')

  // remove espaços no início e fim de cada linha
  result = result.split('\n').map(l => l.trimEnd()).join('\n')

  // remove espaços duplos no meio de frases
  result = result.replace(/ {2,}/g, ' ')

  // garante espaço após pontuação quando falta
  result = result.replace(/([.,!?;:])([^\s\n"'»)\]0-9])/g, '$1 $2')

  return result.trim()
}

/**
 * WordBuffer
 * Garante que o streaming nunca exiba uma palavra incompleta.
 * Acumula tokens e libera apenas palavras completas.
 */
export class WordBuffer {
  private buffer = ''

  push(token: string): string {
    this.buffer += token
    // libera tudo até o último espaço ou pontuação que indica fim de palavra
    const lastBreak = Math.max(
      this.buffer.lastIndexOf(' '),
      this.buffer.lastIndexOf('\n'),
    )
    if (lastBreak === -1) return ''
    const safe = this.buffer.slice(0, lastBreak + 1)
    this.buffer = this.buffer.slice(lastBreak + 1)
    return safe
  }

  flush(): string {
    const remaining = this.buffer
    this.buffer = ''
    return remaining
  }
}
