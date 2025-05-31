const useImageStore = () => {
  return {
    image: null,
    setImage: (img) => console.log("Image set:", img),
  };
};

export default useImageStore;