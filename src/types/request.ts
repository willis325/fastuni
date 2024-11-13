export type RequestOptions = UniApp.RequestOptions & {
  isSignature?: boolean; // 是否验签
  isReturnNativeResponse?: boolean; // 是否原样返回response
  hasErrorNoFailToast?: boolean; // 是否静默提示
};

export interface RequestResult<T = any> {
  code: number;
  data: T;
  message?: string;
}
