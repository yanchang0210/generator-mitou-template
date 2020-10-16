module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/components/$1'
  }
}
