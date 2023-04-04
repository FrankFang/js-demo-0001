function jQuery(选择器) {
  const 标签伪数组 = document.querySelectorAll(选择器)
  this.标签数组 = Array.from(标签伪数组)
}

jQuery.prototype = {
  constructor: jQuery,
  addClass(className) {
    this.标签数组.forEach((标签) => {
      标签.classList.add(className)
    })
  },
  removeClass(className) {
    this.标签数组.forEach((标签) => {
      标签.classList.remove(className)
    })
  }
}
const $ = jQuery

new $('.red').addClass('green') // api
new $('.red').removeClass('red') // api
