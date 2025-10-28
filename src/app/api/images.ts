import { apiFetch } from ".";

export const uploadImages = async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("multipartFiles", file));

  const res = await apiFetch(`/images/multiple`, {
    method: "POST",
    body: formData,
  });
  return res.data || [];
};
