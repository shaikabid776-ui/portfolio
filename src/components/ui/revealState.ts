// Kept outside the client Reveal component so the server layout can import the real script,
// not a client reference.

const revealFallbackDelayInMilliseconds = 3000;

// Reveal content is hidden on the server and shown by the client. The script marks
// that JavaScript is running; if the app has not hydrated in time, it clears the mark
// so the CSS fallback in globals.css shows everything instead of leaving it hidden.
export const revealStateScript = `(function(){var root=document.documentElement;root.dataset.revealState="pending";setTimeout(function(){if(root.dataset.revealState==="pending")delete root.dataset.revealState},${revealFallbackDelayInMilliseconds})})()`;

export function markRevealReady() {
  const root = document.documentElement;
  // After the fallback has fired, content stays visible rather than hiding again to animate.
  if (root.dataset.revealState === "pending") {
    root.dataset.revealState = "ready";
  }
}
