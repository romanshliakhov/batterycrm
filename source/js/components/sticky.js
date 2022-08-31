
  const stickyBlocks = [...document.querySelectorAll('[data-sticky]')];
  const activeClass = 'sticky';
  const stickyOffset = 350;

  const stickyElFunction = (block, activeClass, stickyOffset) => {
    window.onscroll = function() {
      block.map((item) => {
        if (window.pageYOffset > stickyOffset) {
          item.classList.add(activeClass)
        } else {
            item.classList.remove(activeClass)
        }
      });

     };
  };

  stickyElFunction(stickyBlocks,activeClass,stickyOffset)


