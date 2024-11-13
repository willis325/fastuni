/**
 * 加载图片
 * examples: bg/bg.png
 * @param imgPath: string
 * @return URL
 */
export const requireImg = (imgPath: string) => new URL(`@/assets/images/${imgPath}`, import.meta.url).href;

/**
 * 字典序
 * @param params { [key: string]: any }
 * @returns string
 */
export const lexicography = (params: { [key: string]: any }): string => {
  const arr: string[] = [];
  const keys = Object.keys(params).sort();
  keys.forEach((key) => {
    const val = params[key];
    arr.push(`${key}=${typeof val === 'object' ? JSON.stringify(val) : val}`);
  });
  return arr.join('&');
};

/**
 * 解析 url 得到 path 和 query
 * @param url /pages/login/index?redirect=%2Fpages%2Fdemo%2Fbase%2Froute-interceptor
 * @returns object {path: /pages/login/index, query: {redirect: /pages/demo/base/route-interceptor}}
 */
export const getUrlObj = (url: string) => {
  const [path, queryStr] = url.split('?');
  const query: Record<string, string> = {};
  queryStr.split('&').forEach((item) => {
    const [key, value] = item.split('=');
    query[key] = value.startsWith('%') ? decodeURIComponent(value) : value; // 这里需要统一 decodeURIComponent 一下，可以兼容h5和微信
  });
  return { path, query };
};
