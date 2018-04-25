$(function() {
  setListeners();
  setUpLengths();
});

function setListeners(){
  let originalRadius = 0;

  $('#eye > .dot').on('mouseenter', function() {
    originalRadius = scaleUp($(this));
  }).on('click', () => {
    toggleInfo('eye');
  }).on('mouseleave', function() {
    resetScaling($(this), originalRadius);
  });

  $('#language > .dot').on('mouseenter', function() {
    originalRadius = scaleUp($(this));
  }).on('click', () => {
    toggleInfo('language');
  }).on('mouseleave', function() {
    resetScaling($(this), originalRadius);
  });

  $('#software > .dot').on('mouseenter', function() {
    originalRadius = scaleUp($(this));
  }).on('click', () => {
    toggleInfo('software');
  }).on('mouseleave', function() {
    resetScaling($(this), originalRadius);
  });

  $('#experience > .dot').on('mouseenter', function() {
    originalRadius = scaleUp($(this));
  }).on('click', () => {
    toggleInfo('experience');
  }).on('mouseleave', function() {
    resetScaling($(this), originalRadius);
  });

  $('#education > .dot').on('mouseenter', function() {
    originalRadius = scaleUp($(this));
  }).on('click', () => {
    toggleInfo('education');
  }).on('mouseleave', function() {
    resetScaling($(this), originalRadius);
  });

  $('#portfolio > .dot').on('mouseenter', function() {
    originalRadius = scaleUp($(this));
  }).on('click', () => {
    toggleInfo('portfolio');
  }).on('mouseleave', function() {
    resetScaling($(this), originalRadius);
  });

  $('#hobby > .dot').on('mouseenter', function() {
    originalRadius = scaleUp($(this));
  }).on('click', () => {
    toggleInfo('hobby');
  }).on('mouseleave', function() {
    resetScaling($(this), originalRadius);
  });
}

function setUpLengths(){
  const lines = [ 
    {'name' : 'xshort', 'element' : $(`.line.xshort`)},
    {'name' : 'short', 'element' : $(`.line.short`)},
    {'name' : 'mid', 'element' : $(`.line.mid`)},
    {'name' : 'long', 'element' : $(`.line.long`)},
    {'name' : 'xlong', 'element' : $(`.line.xlong`)}
  ];

  for(line of lines){
    var len = dist(line.element.attr('x1'), line.element.attr('x2'),
    line.element.attr('y1'), line.element.attr('y2'));
    
    $(':root').css(`--line-${line.name}-length`, len);
  }
}

function toggleInfo(category) {
  const lineElement = $(`#${category} > .line`);
  if(category === 'software') {
    $('.circle-chart__circle').toggleClass('animate');   
  }

  if(!lineElement.hasClass('shown')){
    lineElement.toggleClass('shown')
    .one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function() {
      $(`#${category}-box`).toggleClass('hidden');
      $(`#${category} > .circle`).toggleClass('hidden');
    });
  } else {
    lineElement.toggleClass('shown');
    $(`#${category}-box`).toggleClass('hidden');
    $(`#${category} > .circle`).toggleClass('hidden');
    lineElement.addClass('hide').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function() {
      lineElement.removeClass('hide');
    });
  }
}

function dist(x1, x2, y1, y2){
  return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
}

function scaleUp(element) {
  let originalRadius = 0;
  element.attr('r', function(i, origValue){
    originalRadius = origValue;
    return originalRadius * 1.3;
  });
  return originalRadius;
}

function resetScaling(element, radius) {
  element.attr('r', radius);
}
