export type NormalizedData<T> = {
  ids: string[];
  data: {
    [id: string]: T;
  };
};
