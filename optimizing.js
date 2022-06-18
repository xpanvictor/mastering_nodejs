let operand = 3

function square() {
    return operand * operand
}

// First pass => full compiler => first stage
square()
// Second => optimizing => second stage
// using optimize native command
// prettier-ignore
%OptimizeFunctionOnNextCall(square)
square()

// to-call
// node --allow-natives-syntax --trace_opt --trace_deopt optimizing.js
