export default {
    //mutations唯一的目的就是修改state中的状态
    //mutations中的每个方法尽可能只做一件事情(单一职责)
    addCounter(state, payload) {
        payload.count++
    },
    addToCart(state, payload) {
        payload.checked = false
        state.cartList.push(payload)
    }
}