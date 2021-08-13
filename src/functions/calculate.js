function operate(numberOne, numberTwo, operation) {
    const one = parseFloat(numberOne || "0");
    const two = parseFloat(numberTwo || (operation === "÷" || operation === 'x' ? "1" : "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
    if (operation === "+") {
        return (one + two).toString();
    }
    if (operation === "-") {
        return (one - two).toString();
    }
    if (operation === "x") {
        return (one * two).toString();
    }
    if (operation === "÷") {
        if (two === 0) {
            alert("Divide by 0 error");
            return "0";
        } else {
            return (one / two).toString();
        }
    }
    if (operation === "%") {
        return (one / 100 * two).toString();
    }
    throw Error(`Unknown operation '${operation}'`);
}

export default function calculate(obj, buttonName) {
    console.log(obj, buttonName);
    if (isNaN(buttonName)) {
        if (buttonName === '=') {
            return obj.total !== null ? {
                previous: obj.total,
                next: null,
                total: null,
                operation: null,
                history: obj.total,
            } : {};
        }

        if (buttonName === "AC") {
            return {
                total: "0",
                previous: null,
                next: null,
                operation: null,
                history: null,
            };
        }

        if (buttonName === ".") {
            if (obj.next) {
                // ignore a . if the next number already has one
                if (obj.next.includes(".")) {
                    return {};
                }
                return {next: obj.next + ".", history: obj.history + "."};
            }
            if (obj.previous) {
                if (obj.operation) {
                    return {next: "0.", history: obj.history + "0."}
                }
                if (obj.previous.includes(".")) {
                    return {};
                }
                return {previous: obj.previous + ".", history: obj.history + "."};
            }
            return {previous: "0.", history: "0."};
        }

        if (buttonName === "+/-") {
            if (obj.previous === '-') return {previous: null, history: null}
            if (obj.previous && !obj.next) {
                const previous = (-1 * parseFloat(obj.previous)).toString()
                return {previous: previous, history: previous};
            }
            return obj.history === null ? {previous: "-", history: "-"} : {};
        }

        if (obj.operation) {
            const history = obj.history
            return {
                previous: obj.total === null ? obj.previous : obj.total,
                next: null,
                operation: buttonName,
                history: /([+\-x÷%])+/.test(history[history.length - 1]) ? history.slice(0, history.length - 1) + buttonName : history + buttonName
            }
        }

        return {
            operation: obj.previous !== null ? buttonName : null,
            history: obj.history !== null ? obj.history + buttonName : null,
        }
    } else {
        if (obj.operation) {
            const next = obj.next === null ? buttonName : obj.next + buttonName;
            const total = operate(obj.previous, next, obj.operation);
            return {
                total: total,
                next: next,
                history: obj.history + buttonName
            }
        }

        return {
            previous: obj.previous === null ? buttonName : obj.previous + buttonName,
            next: null,
            operation: null,
            history: obj.history === null ? buttonName : obj.history + buttonName,
        }
    }
}