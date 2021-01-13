/* eslint-disable no-unused-vars */
function truncate(length, string) {
  if (string.length <= length) {
    return string.slice(0, length) + '...';
  }
}
