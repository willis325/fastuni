/**
 * 加载图片
 * examples: bg/bg.png
 * @param imgPath: string
 */
export const requireImg = (imgPath: string) => new URL(`@/assets/images/${imgPath}`, import.meta.url).href;
