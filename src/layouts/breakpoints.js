const breakpoints = [375, 768, 1024]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const mqMax = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)


export default mq
export { mqMax }
