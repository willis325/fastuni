export default function useRequest<T>(apiService: () => Promise<T>, options = { immediate: true }) {
  const loading = ref(false);
  const error = ref();
  const data = ref<T>();

  onLoad(() => {
    options.immediate && execute();
  });

  async function execute() {
    loading.value = true;
    apiService()
      .then((res) => {
        data.value = res;
        error.value = null;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  return {
    loading,
    error,
    data,
    execute,
  };
}
