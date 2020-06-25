const path = require("path");

module.exports = {
  chainWebpack: config => {
    const dir = path.resolve(__dirname, "src/assets/icons"); // 存放icons的目录

    config.module
      .rule("svg-sprite")
      .test(/\.svg$/)
      .include.add(dir)
      .end() // 包含 icons 目录
      .use("svg-sprite-loader") //使用此loader
      .loader("svg-sprite-loader")
      .options({ extract: false })
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .tap(options => ({
        ...options,
        plugins: [{ removeAttrs: { attrs: "fill" } }] // 删除svg的fill属性
      }))
      .end();
    config
      .plugin("svg-sprite")
      .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); // 其他 svg loader 不会解析 icons 目录
  }
};
