<<<<<<< HEAD
$(function() {
  var file, droppedImage;
  var target = $('.dropzone');

  target
    .on('dragover', function() {
      target.addClass('dragover');
      return false;
    })
    .on('dragend', function() {
      target.removeClass('dragover');
      return false;
    })
    .on('dragleave', function() {
      target.removeClass('dragover');
    })
    .on('drop', function(e) {
      var fileReader;
      file = e.originalEvent.dataTransfer.files[0];
      e.stopPropagation();
      e.preventDefault();
      target.removeClass('dragover');

      droppedImage = new Image();
      fileReader = new FileReader();
      fileReader.onload = function(e) {
        droppedImage.src = e.target.result;
        droppedImage.className = 'picture';
        target.html(droppedImage);
        detectImageFaces();
      };
      fileReader.readAsDataURL(file);
    });

  function detectImageFaces() {
    if (droppedImage !== undefined) {
      $('.face').remove();
      $('.warning').remove();
      $('.picture').faceDetection({
        complete: function(faces) {
          for (let i = 0; i < faces.length; i++) {
            $('<div>', {
              class: 'face',
              css: {
                position: 'absolute',
                left: faces[i].x * faces[i].scaleX + 'px',
                top: faces[i].y * faces[i].scaleY + 'px',
                width:
                  faces[i].width * faces[i].scaleX + 'px',
                height:
                  faces[i].height * faces[i].scaleY + 'px'
              } // css
            }).insertAfter(this); // div
          } //loop through faces
        } // complete
      }); // face detection
    } else {
      var warningMsg = $('.warning').html(
        '<p class="alert alert-danger">You must drop an image to analyze.</p>'
      );
    } // undefined image
  } // detectImageFaces

  $('#analyze').click(detectImageFaces);
  $(window).resize(detectImageFaces);
});
=======
(function() {
  let fromDate = '2015-01-01';
  let fromTime = '01:00:00';

  let toDate = '2015-01-01';
  let toTime = '10:00:00';

  function generateChart(data) {
    c3.generate({
      data: {
        y: 'barometric_pressure',
        x: 'dates',
        xFormat: '%Y-%m-%d %H:%M:%S',
        json: data
      },
      axis: {
        x: {
          type: 'timeseries'
        }
      }
    });
  }

  function loadChart() {
    fetch('http://pixelprowess.com/i/lake.php', {
      method: 'POST',
      body: JSON.stringify({
        fromDate: fromDate + ' ' + fromTime,
        toDate: toDate + ' ' + toTime
      })
    })
      .then(response => response.json())
      .then(response => {
        generateChart(response);
      })
      .catch(error => console.error(error));
  }

  loadChart();
})();
>>>>>>> b3ad9b5b8e46bbaca7e5b29396537c25ef449bd6
