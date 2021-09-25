export function initSlideShow (images) {
  return images.map((image, index) => {
    return {
      image,
      display: index === 0
    }
  })
}

