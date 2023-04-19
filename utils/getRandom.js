function getRandom(arr) {
  const item = arr[Math.floor(Math.random() * arr.length)];

  return item;
}

export default getRandom;
