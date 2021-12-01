    $(window).scroll(function () {
      var sc = $(window).scrollTop();
      if (sc > 50) {
        $('.navbar').removeClass('animate__animated animate__fadeInUp navbar-light').addClass('animate__animated animate__fadeInDown bg-white navbar-light shadow');
      }
      else {
        $('.navbar').removeClass('bg-white navbar-light shadow').addClass('animate__animated animate__fadeInUp navbar-dark');
      }
    });