var index = 0;
$.fn.percorrerParagrafos = function() {
  var paragrafos = [
    "Desde cedo, tive um interesse profundo em tecnologia e como ela pode ser usada para melhorar nossas vidas cotidianas. Durante meus estudos universitários, desenvolvi habilidades em programação e aprendi a criar soluções tecnológicas para desafios complexos. Foi assim que descobri meu amor pela programação web.",
    "Como cristão, acredito que a tecnologia pode ser usada para ajudar as pessoas de muitas maneiras diferentes. Uma das maneiras pelas quais faço isso é usando meus conhecimentos em programação para criar sites e aplicativos que ajudam a conectar as pessoas e a facilitar a comunicação.",
    "Embora tenha habilidades em várias linguagens de programação, sou particularmente apaixonado por Java e Ruby on Rails, devido à sua simplicidade e eficiência. Acredito que essas linguagens são especialmente adequadas para a criação de aplicativos web robustos e escaláveis. Como um programador web experiente, estou constantemente atualizando minhas habilidades em linguagens de programação emergentes para garantir que possa fornecer as soluções tecnológicas mais inovadoras para meus clientes.",
    "Em resumo, sou um programador web altamente qualificado, defensor do software livre e apoiador do sistema operacional Linux/GNU. Espero poder usar minhas habilidades e conhecimentos para ajudar as pessoas a alcançarem seus objetivos e tornar o mundo um lugar melhor.",
  ];
  // var totalParagrafos = paragrafos.length;

  if (index < paragrafos.length) {
    var novoParagrafo = $('<p>' + paragrafos[index] + '</p>');
    $(this).find('[id]:last').before(novoParagrafo);
    index++;
  }else{
    $('#btnAdicionarSobre').remove();
  }
};
