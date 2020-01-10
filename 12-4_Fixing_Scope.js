specialForms.set = (args, scope) => {
  let binding = args[0].name;
  let value = evaluate(args[1], scope);

  while (Object.getPrototypeOf(scope) != null) {
    if (Object.prototype.hasOwnProperty.call(scope, binding)) {
      scope[binding] = value;
      return value;
    }
    scope = Object.getPrototypeOf(scope);
  }
  throw new ReferenceError(`No binding for "${binding}"`);
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
