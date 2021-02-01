const nodeExternals = require('webpack-node-externals')
const registers     = require('./src/data/registers.json')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(store => {
    const contentType = store.addCollection({
      typeName: 'Registers'
    })

    for (const item of registers) {
      contentType.addNode({
        id: item.id,
        register: item.register,
        numbers: item.numbers,
        var_name: item.var_name,
        format: item.format,
        note: item.note
      })
    }
  })

  api.loadSource(({ addCollection }) => {})

  api.createPages(({ createPage }) => {})
}
