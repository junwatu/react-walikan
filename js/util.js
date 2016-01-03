'use strict'

export default function(string) {
  let dilema = string.split("").reverse().join("").split(" ").reverse().join(" ").toLowerCase()
  return (dilema.charAt(0).toUpperCase() + dilema.slice(1))
}
