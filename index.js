const BaseURL = "http://localhost:3002/";
const getProducts = async (pageSize, pageNumber) => {
  const response = await fetch(
    BaseURL + `products?_page=${pageNumber}&_per_page=${pageSize}`
  ).then((res) => res.json());
  return response;
};
export { getProducts };
