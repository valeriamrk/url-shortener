import { BASIC_URL } from "../../constants/constants";

const transformLinksData = (data) => {
  const transformedData = data.map((element) => {
    return {
      id: element.id,
      short: `${BASIC_URL}s/${element.short}`,
      target: element.target,
      counter: element.counter,
    };
  });
  return transformedData;
};

export { transformLinksData };
