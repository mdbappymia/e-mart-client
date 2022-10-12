export const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

// export const imageProcess = (image: any) => {
//     var base64Data = image.image.replace(/^data:image\/png;base64,/, "");
//     const path = `images/${image.folder}`;
//     fs.mkdir(path, { recursive: true }, (error: any) => {
//       if (error) {
//         console.log(error);
//       }
//     });
//     fs.writeFile(
//       `images/${image.folder}/${image.id}.png`,
//       base64Data,
//       "base64",
//       function (err: any) {
//         if (err) console.log(err);
//       }
//     );
//     return `images/${image.folder}/${image.id}.png`;
//   };
