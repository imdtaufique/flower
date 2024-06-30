onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.getElementById('forgiveButton').addEventListener('click', function() {
  alert('I hope you can forgive me. I love you.');
});
