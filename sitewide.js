
  
function changeStyleWithPx(elem, styleProp, change) {
  const	 curStyleValue = parseInt(getComputedStyle(elem)[styleProp]);
    const newStyleValue = curStyleValue + change;
    elem.style[styleProp] = String(newStyleValue) + 'px';
    console.log(styleProp + ': ' + elem.style[styleProp]);
  }
  
selector = 'button[data-font-size]';
  const bsFtSize = document.querySelectorAll(selector);
  for (btn of bsFtSize) {
    btn.addEventListener('click', function(e) {
      const fontSize = e.currentTarget.dataset.fontSize;
      changeStyle(p, 'fontSize', fontSize);
    });
  }

  function changeFontSize(elem, change) {
    const curFontSize = parseInt(getComputedStyle(elem).fontSize);
   
    const newFontSize = curFontSize + change;
    elem.style.fontSize = String(newFontSize) + 'px';
    return getComputedStyle(elem).fontSize;

    window.addEventListener('load', function() {
      const p = this.document.getElementById('font-size');
      const btnSmall = this.document.getElementById('font-size small');
      const btnMedium = this.document.getElementById('font-size medium');
      const btnLarge = this.document.getElementById('font-size large');

      btnSmall.addEventListener('click', function() {
        const fontSize = changeFontSize(p, -1);
        console.log(fontSize);
      });
      btnMedium.addEventListener('click', function() {
        const fontSize = changeFontSize(p, 1);
        console.log(fontSize);
      });
      btnLarge.addEventListener('click', function() {
        const fontSize = changeFontSize(p, 2);
        console.log(fontSize);
      });
    })
  }

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }