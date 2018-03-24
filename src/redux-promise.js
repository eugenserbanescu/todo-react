function isPromise(val) {
  return val && typeof val.then === "function";
}

export default function promiseMiddleware({ dispatch }) {
  return next => action => {
    if (isPromise(action.payload)) {

      dispatch({
        ...action,
        payload: undefined,
        sequence: "start"
      });

      return action.payload.then(
        result => {
          dispatch({
            ...action,
            payload: result,
            sequence: "next"
          })
        },
        error => {
          dispatch({
            ...action,
            payload: error,
            sequence: "error"
          })
        });
    }

    return next(action);
  };
}
