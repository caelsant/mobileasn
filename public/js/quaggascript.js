Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#camera')    // Or '#yourElement' (optional)
    },
    decoder : {
    readers: ['upc_reader', 'ean_reader'],
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });

    Quagga.onDetected((data) => {
        var codigo = data.codeResult.code;
     mostrarProduto(codigo)
    })