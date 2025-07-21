import multer from "multer";
const upload = multer({ dest: "temp/" }); // Multer saves file to "temp/" folder

export const uploadProductImages = upload.fields([
  { name: "itemImg1", maxCount: 1 },
  { name: "itemImg2", maxCount: 1 },
  { name: "itemImg3", maxCount: 1 },
]);
