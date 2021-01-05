export const genRandomId = (prefix) => {
  // Reference: https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = 20; i > 0; i -= 1) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  result = prefix + result
  return result
}
