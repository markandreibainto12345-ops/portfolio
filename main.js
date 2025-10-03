document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


   const words = ["Musician", "Web Developer", "Coder"]; 
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[i];
    if (isDeleting) {
      document.getElementById("typing").textContent = currentWord.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % words.length; 
      }
    } else {
      document.getElementById("typing").textContent = currentWord.substring(0, j++);
      if (j > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1200); 
        return;
      }
    }
    setTimeout(type, isDeleting ? 100 : 150);
  }

  type();