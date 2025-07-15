function downloadFile(url) {
  fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then(res => res.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'file.txt';
      a.click();
    });
}
