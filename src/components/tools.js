function replaceByNewDom(oldDom, newDom) {
  oldDom.parentElement.replaceChild(oldDom, newDom)
}

export default {
  replaceByNewDom
}
