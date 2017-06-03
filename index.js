const fetch = require('node-fetch')

module.exports = async function(url, options = {}) {
  const response = await fetch(url, options)
  
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(`Error: ${response.status} - ${response.statusText}`)
  }
}