export default {
  transform: {
      "^.+\\.vue$": "@vue/vue3-jest"
  },
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
}