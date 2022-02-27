import converVttToJson from "vtt-json";

export const fetchSubtitle = async (url) => {
  const res = await fetch(new Request(url));
  const subtitleText = await res.text();
  return subtitleText;
};

export const createSubtitle = async (text) => {
  let syncData = [];
  const result = await converVttToJson(text);
  let x = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i].part && result[i].part.trim() !== "") {
      syncData[x] = result[i];
      x++;
    }
  }

  return syncData;
};

export const fakeApiCallDelay = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

export const getFileExtension = (value) => {
  const arr = value.split(".");
  if(arr.length <= 1) return ""; 
  const ext = arr[arr.length - 1];
  return ext;
};
