import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/app/api/product";
import { uploadImages } from "@/app/api/images";

export const useUploadProduct = () => {
  return useMutation({
    mutationFn: async ({
      productData,
      files,
    }: {
      productData: Omit<Parameters<typeof createProduct>[0], "imageNames">;
      files: File[];
    }) => {
      const imageNames = await uploadImages(files);

      const payload = {
        ...productData,
        imageNames,
      };

      return await createProduct(payload);
    },
  });
};
