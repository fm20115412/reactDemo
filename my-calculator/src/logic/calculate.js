import Big from 'big.js';

export default function calculate(state, btnName) {
    if (btnName === 'AC') {
        // 重置
        return {
            next: null,
            operation: null,
            total: null
        }
    }
    if (isNumber(btnName)) {
        // 如果输入的是0，并且next已经是0了，则不做任何操作
        if (state.next === '0' && btnName === '0') {
            return {}
        }
        // 如果有操作符，说明现在输入的是第二个参数
        if (state.operation) {
            if (state.next) {
                return {
                    next: state.next + btnName
                }
            }
            return {
                next: btnName
            }
        }
        // 没有操作符，则是第一个参数，且已经输入了几个字符
        if (state.next) {
            return {
                next: state.next + btnName,
                total: null
            }
        }
        // 没有操作符，则是第一个参数，第一个字符
        return {
            next: btnName,
            total: null
        }
    }
    if (btnName === '=') {
        // 输入的是等于号
        if (state.next && state.operation){
            return {
                next : null,
                operation :null,
                total : operate(state.total,state.next,state.operation)
            }
        }else{
            return {}
        }
    } 
    if (btnName === '.') {
        // 输入的是小数点
        if(state.next){
            if(state.next.includes('.')){
                return {}
            }
            else{
                return {
                    next : state.next + '.'
                }
            }
        }
        return {
            next: '0.'
        }
    }
    if (btnName === '%') {
        if (state.next){
            return {
                next : Big(state.next).div(Big('100')).toString()
            }
        }
        return {}
    }
    if (btnName === '+/-') {
        if (state.next){
            return {
                next : (-1 * parseFloat(state.next)).toString()
            }
        }
        if (state.total){
            return {
                total: (-1 * parseFloat(state.total)).toString()
            }
        }
        return {}
    }
    /* 上面的情况分别是用户输入的：AC 数字 = . % 时对应的操作
    -----------------
       下面的情况是用户输入+ - x ÷ 时对应的操作
    */
    if (state.operation && state.next && state.total) {
        // 1. 累计操作 1+2+ 
        return {
            total: operate(state.total,state.next,state.operation),
            operation : btnName,
            next : null
        }
    }
    if (state.total && state.operation) {
        // 用户输入第一个操作数 和 operation ,用新的操作符替换
        return {
            operation: btnName
        }
    }
    if (!state.next) {
        // 1. 还没输入操作数，便输入了操作符
        return {
            operation: btnName
        }
    }
    return {
        next: null,
        operation : btnName,
        total :state.next
    }
}
function isNumber(item) {
    return /[0-9]/.test(item)
}
function operate (firstNum,secondNum,operation){
    const one = Big(firstNum || '0')
    const two = Big(secondNum || '0')
    if (operation === '+'){
        return one.plus(two).toString()
    }
    if (operation === '-') {
        return one.minus(two).toString()
    }
    if (operation === 'x') {
        return one.times(two).toString()
    }
    if (operation === '÷') {
        if (two === '0'){
            alert('被除数不可以为0')
            return '0'
        }else{
            return one.div(two).toString();
        }
    }
    throw Error(`unkown operation ${operation}`)
}