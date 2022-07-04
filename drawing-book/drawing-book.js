function pageCount(pageMax, pageTarget) {
  const fromStart = (pageTarget - 1) / 2
  const fromEnd = (pageMax - pageTarget) / 2

  return fromStart < fromEnd
    ? Math.ceil(fromStart)
    : Math.floor(fromEnd)
}
