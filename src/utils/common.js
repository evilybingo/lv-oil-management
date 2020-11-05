import store from 'store'
export function delay (timeout) {
  return new Promise(resolve => {
    let out = setTimeout(() => {
      resolve(1)
      clearTimeout(out)
    }, timeout)
  })
}
export function setMenuList (curMenu) {
  let choosedMenuList = store.get('choosedMenuList') || []
  const isHave = choosedMenuList.some(menu => menu.url === curMenu.url)
  if (isHave) {
    return choosedMenuList
  }
  store.set('choosedMenuList', [...choosedMenuList, curMenu])
  return [...choosedMenuList, curMenu]
}
