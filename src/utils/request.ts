export type RequestOptions = UniApp.RequestOptions & {
  isReturnNativeResponse?: boolean; // 是否原样返回 res
};

export interface RequestResult<T = any> {
  code: number;
  data: T;
  message?: string;
}

export const request = (options: RequestOptions) => {
  return new Promise((resolve, reject) => {
    uni.request({
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      ...options,
      success: (res) => {
        const data = res.data as RequestResult;

        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(options.isReturnNativeResponse ? data : data.data);
        } else if (res.statusCode === 401) {
          console.error('401', data);
          reject(data.message || '授权失败');
        } else {
          uni.showToast({ icon: 'none', title: '请求错误' });
          reject(data.message || '请求错误');
        }
      },
      fail: (err) => {
        uni.showToast({ title: err.errMsg || '网络请求错误', icon: 'none', duration: 2000 });
        reject(err.errMsg || '网络请求错误');
      },
    });
  });
};

export const get = (url: string, query?: Record<string, any>, options?: RequestOptions) => request({ url, method: 'GET', data: query, ...options });

export const post = (url: string, body?: Record<string, any>, options?: RequestOptions) => request({ url, method: 'POST', data: body, ...options });
