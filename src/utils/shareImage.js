import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';

function shareImage(imageLink) {
  const { fs } = RNFetchBlob;
  let imagePath = null;
  const link = imageLink;

  function sendImage(base64) {
    Share.open({
      title: 'Share file',
      subject: 'Hey! Take a look at this drink!',
      url: base64,
    })
      .then(() => {
        return fs.unlink(imagePath);
      })
      .catch(() => {});
  }

  RNFetchBlob.config({
    fileCache: true,
  })
    .fetch('GET', link)
    .then((resp) => {
      imagePath = resp.path();
      return resp.readFile('base64');
    })
    .then((base64Data) => {
      sendImage(`data:image/jpeg;base64,${base64Data}`);
    });
}

export default shareImage;
