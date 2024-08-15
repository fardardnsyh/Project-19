/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */

export function getImageData(
  event: React.ChangeEvent<HTMLInputElement>,
  setPreview: (url: string) => void
) {
  const dataTransfer = new DataTransfer();

  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image)
  );

  const files = dataTransfer.files;
  const displayUrl = URL.createObjectURL(event.target.files![0]);

  setPreview(displayUrl);

  return files;
}
