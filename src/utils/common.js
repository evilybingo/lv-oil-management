export function delay (timeout) {
    return new Promise(resolve => {
      let out = setTimeout(() => {
        resolve(1)
        clearTimeout(out)
      }, timeout)
    })
  }