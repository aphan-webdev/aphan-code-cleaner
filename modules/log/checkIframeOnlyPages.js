export function checkIframeOnlyPages(document) {
  // Get all children of the body tag
  const bodyChildren = Array.from(document.body.children);

  // Check if all children are <iframe> elements
  const bodyHasOnlyIframes = bodyChildren.every(
    child => child.tagName.toLowerCase() === "iframe"
  );

  // Return true if the body contains only iframes
  return bodyHasOnlyIframes;
}
