export function pBurger(burgerState) {
  if (burgerState) {
    return { type: "CLOSE_PORTFOLIO_BURGER", payload: burgerState };
  } else {
    return { type: "OPEN_PORTFOLIO_BURGER", payload: burgerState };
  }
}
