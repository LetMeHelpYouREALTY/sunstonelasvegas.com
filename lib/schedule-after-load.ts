/**
 * Run work after the document load event and an idle slice.
 * Keeps third-party scripts off the hero text's critical path.
 */
export function scheduleAfterPageLoad(task: () => void): () => void {
  let idleId = 0
  let timeoutId = 0
  let cancelled = false

  const run = () => {
    if (cancelled) return
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(
        () => {
          if (!cancelled) task()
        },
        { timeout: 2000 },
      )
      return
    }
    timeoutId = window.setTimeout(() => {
      if (!cancelled) task()
    }, 1)
  }

  if (document.readyState === 'complete') {
    run()
  } else {
    window.addEventListener('load', run, { once: true })
  }

  return () => {
    cancelled = true
    window.removeEventListener('load', run)
    if (idleId) window.cancelIdleCallback(idleId)
    if (timeoutId) window.clearTimeout(timeoutId)
  }
}
