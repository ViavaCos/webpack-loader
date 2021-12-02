import './styles/a.less'
import './styles/b.less'

function sum(){
  return [...arguments].reduce((pre, cur) => pre + cur)
}

console.log(sum(1,2,3));