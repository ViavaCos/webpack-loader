const pkg = require('../package.json')

module.exports = function(content, map, meta){

  // 正则批量添加前置类名 (无法处理多级选择器)
  // content = content.replace(/([.#].*{)/g, '#wrap1 $1')

  // todo 读取package.json中的name作为ID选择器
  const rootSelector = '#rootWrap'

  content = `${ rootSelector }{ ${ content } }`

  // console.log(10010, pkg);
  // console.log(10086, '\n', content)

  return content
}


/**
 * todo 看下qiankun 内部怎么实现批量添加前置类名的 div[data-qiankun]
 */