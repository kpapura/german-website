function showPopup() {
        const popup = document.getElementById('cookiePopup');
        popup.style.display = 'block';
      }

      function closePopup() {
        const popup = document.getElementById('cookiePopup');
        popup.style.display = 'none';
      }

      window.onload = function () {
        setTimeout(showPopup, 5000);
      };

      document
        .getElementById('agreeButton')
        .addEventListener('click', closePopup);