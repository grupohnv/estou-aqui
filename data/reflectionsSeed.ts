import type { DailyReflection } from '@/types'

export const reflectionsSeed: Omit<DailyReflection, 'id' | 'date'>[] = [
  {
    title: 'Um passo por vez',
    content: 'Nem todo dia exige força para vencer tudo. Às vezes, Deus nos sustenta apenas para o próximo passo. Jesus ensinou a não carregar o peso de amanhã antes da hora. Hoje, talvez a sua missão seja apenas respirar, confiar e continuar.',
    bible_reference: 'Mateus 6:34',
    reflection_question: 'Qual peso de amanhã você está tentando carregar hoje?',
    prayer: 'Senhor, me ajuda a viver este dia com fé, sem tentar controlar tudo o que ainda não chegou. Amém.',
  },
  {
    title: 'Quando o luto chega',
    content: 'A dor da perda é real, e Jesus mesmo chorou diante da morte de Lázaro. Deus não ignora o seu choro. Ele se aproxima dos que têm o coração partido e salva os que estão com o espírito abatido. Você não precisa ser forte agora. Você pode simplesmente estar triste.',
    bible_reference: 'Salmos 34:18',
    reflection_question: 'O que você gostaria de dizer para quem você perdeu?',
    prayer: 'Senhor, ampara este coração que chora. Que a tua paz que excede o entendimento cubra cada parte da minha dor. Amém.',
  },
  {
    title: 'Quando o medo aperta',
    content: 'O medo pode deixar a alma sem chão. Mas atravessando as Escrituras, vemos que "não temas" é uma das frases mais repetidas por Deus ao seu povo. Não porque o perigo não exista, mas porque Ele promete estar junto — dentro do perigo, não apenas do lado de fora.',
    bible_reference: 'Isaías 41:10',
    reflection_question: 'O que exatamente mais te assusta neste momento?',
    prayer: 'Deus, o meu medo é real. Mas eu escolho hoje confiar que Tu és maior do que aquilo que me amedronta. Sustenta-me. Amém.',
  },
  {
    title: 'O peso da culpa',
    content: 'A culpa que não passa pode ser uma das prisões mais pesadas da alma humana. Mas há uma diferença entre culpa que nos transforma e culpa que apenas nos condena. Jesus não veio condenar, mas salvar. O perdão não apaga o passado, mas abre caminho para um recomeço real.',
    bible_reference: 'João 3:17',
    reflection_question: 'O que você sente que precisa ser perdoado — por Deus, pelos outros ou por você mesmo?',
    prayer: 'Senhor, me ajuda a receber o teu perdão de verdade, não apenas com palavras, mas com o coração. Que eu possa me levantar sem o peso daquilo que já foi entregue a Ti. Amém.',
  },
  {
    title: 'A solidão no meio da multidão',
    content: 'Solidão não é só estar fisicamente sozinho. É estar rodeado de pessoas e ainda assim sentir que ninguém te conhece de verdade. Jesus entende isso. Houve momentos em que ele estava cercado de multidões e ainda assim se retirava para estar sozinho com o Pai. A conexão mais profunda começa no silêncio interior.',
    bible_reference: 'Salmos 139:1-3',
    reflection_question: 'Quando foi a última vez que você se sentiu verdadeiramente compreendido por alguém?',
    prayer: 'Senhor, que eu possa sentir a tua presença neste silêncio. Que eu saiba que Tu me conheces por inteiro — e ainda assim me amas. Amém.',
  },
  {
    title: 'Esperança no escuro',
    content: 'Há noites em que a esperança parece apagada. Mas a esperança bíblica não é uma ilusão ou negação da realidade — ela é uma âncora da alma. Mesmo na mais densa escuridão, a luz do amanhecer já está a caminho. O amanhã ainda não chegou, mas o Deus do amanhã já está lá.',
    bible_reference: 'Hebreus 6:19',
    reflection_question: 'Para o que você ainda consegue ter esperança, mesmo que pequena?',
    prayer: 'Deus, eu não consigo ver a saída, mas eu escolho confiar que Tu sabes o caminho. Acende em mim ao menos uma fagulha de esperança. Amém.',
  },
  {
    title: 'Quando o cansaço fala mais alto',
    content: 'Há cansaços que não passam com sono. São cansaços da alma — de lutar, de esperar, de tentar, de perdoar, de resistir. Jesus disse: "Vinde a mim, todos os que estais cansados e sobrecarregados." Ele não pediu que você resolvesse tudo primeiro. Ele pediu que você viesse como está.',
    bible_reference: 'Mateus 11:28',
    reflection_question: 'Do que exatamente você mais está cansado agora?',
    prayer: 'Jesus, estou cansado. E eu venho a Ti assim — sem forças, sem respostas, sem armadura. Só venho. Cuida de mim. Amém.',
  },
  {
    title: 'Qual é o meu propósito?',
    content: 'A pergunta sobre propósito pode aparecer nos momentos de vazio, mas também nos momentos de mudança. Nos Evangelhos, Jesus não entregou um plano de vida para ninguém. Ele chamou as pessoas a caminhar com Ele — e o propósito foi se revelando no caminho, não antes de começar.',
    bible_reference: 'Jeremias 29:11',
    reflection_question: 'O que você amaria fazer se não tivesse medo de errar?',
    prayer: 'Senhor, me revela o próximo passo, não a vida inteira. Que eu possa caminhar com fé mesmo sem enxergar o destino final. Amém.',
  },
  {
    title: 'Aprendendo a perdoar',
    content: 'Perdoar não é fingir que a dor não existiu. Não é dizer que o que foi feito estava certo. É soltar o peso de carregar o outro na sua dor. Jesus pediu ao Pai que perdoasse os que o crucificavam — não porque eles mereciam, mas porque o perdão liberta quem perdoa.',
    bible_reference: 'Lucas 23:34',
    reflection_question: 'Há alguém que você ainda não conseguiu perdoar? O que essa mágoa ainda faz com você?',
    prayer: 'Deus, eu não tenho forças para perdoar por conta própria. Me dá a graça de querer querer perdoar. Começa por mim essa cura. Amém.',
  },
  {
    title: 'Recomeçar depois da queda',
    content: 'Toda queda tem o peso da vergonha. Mas os recomeços mais bonitos da Bíblia aconteceram depois das maiores quedas. Pedro negou Jesus três vezes — e foi restaurado com ternura. O Deus da Bíblia não é o Deus que te deixa na queda. Ele é o Deus que vem ao encontro.',
    bible_reference: 'João 21:15-17',
    reflection_question: 'O que você sente que precisa recomeçar? O que te impede de dar o primeiro passo?',
    prayer: 'Senhor, assim como Pedro, me chamas pelo meu nome e me perguntas se eu te amo. E a minha resposta é: sim, Senhor. Me usa como sou, de onde caí. Amém.',
  },
]
